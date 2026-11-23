type ItemFields =
  | 'AirTime'
  | 'CanDelete'
  | 'CanDownload'
  | 'ChannelInfo'
  | 'Chapters'
  | 'ChildCount'
  | 'CumulativeRunTimeTicks'
  | 'CustomRating'
  | 'DateCreated'
  | 'DateLastMediaAdded'
  | 'DisplayPreferencesId'
  | 'Etag'
  | 'ExternalUrls'
  | 'Genres'
  | 'HomePageUrl'
  | 'ItemCounts'
  | 'MediaSourceCount'
  | 'MediaSources'
  | 'OriginalTitle'
  | 'Overview'
  | 'ParentId'
  | 'Path'
  | 'People'
  | 'PlayAccess'
  | 'ProductionLocations'
  | 'ProviderIds'
  | 'PrimaryImageAspectRatio'
  | 'RecursiveItemCount'
  | 'Settings'
  | 'ScreenshotImageTags'
  | 'SeriesPrimaryImage'
  | 'SeriesStudio'
  | 'SortName'
  | 'SpecialEpisodeNumbers'
  | 'Studios'
  | 'BasicSyncInfo'
  | 'SyncInfo'
  | 'Taglines'
  | 'Tags'
  | 'RemoteTrailers'
  | 'MediaStreams'
  | 'SeasonUserData'
  | 'ServiceName'
  | 'ThemeSongIds'
  | 'ThemeVideoIds'
  | 'ExternalEtag'
  | 'PresentationUniqueKey'
  | 'InheritedParentalRatingValue'
  | 'ExternalSeriesId'
  | 'SeriesPresentationUniqueKey'
  | 'DateLastRefreshed'
  | 'DateLastSaved'
  | 'RefreshState'
  | 'ChannelImage'
  | 'EnableMediaSourceDisplay'
  | 'Width'
  | 'Height'
  | 'ExtraIds'
  | 'LocalTrailerCount'
  | 'IsHD'
  | 'SpecialFeatureCount'
type ImageType =
  | 'Primary'
  | 'Art'
  | 'Backdrop'
  | 'Banner'
  | 'Logo'
  | 'Thumb'
  | 'Disc'
  | 'Box'
  | 'Screenshot'
  | 'Menu'
  | 'Chapter'
  | 'BoxRear'
  | 'Profile'
type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
type NameGuidPair = { Id?: string | undefined; Name?: (string | null) | undefined }
type ProgramAudio = 'Mono' | 'Stereo' | 'Dolby' | 'DolbyDigital' | 'Thx' | 'Atmos'
type ChannelType = 'TV' | 'Radio'
type ChapterInfo = {
  ImageDateModified?: string | undefined
  ImagePath?: (string | null) | undefined
  ImageTag?: (string | null) | undefined
  Name?: (string | null) | undefined
  StartPositionTicks?: bigint | undefined
}
type ExternalUrl = { Name?: (string | null) | undefined; Url?: (string | null) | undefined }
type ImageOrientation =
  | 'TopLeft'
  | 'TopRight'
  | 'BottomRight'
  | 'BottomLeft'
  | 'LeftTop'
  | 'RightTop'
  | 'RightBottom'
  | 'LeftBottom'
type IsoType = 'Dvd' | 'BluRay'
type LocationType = 'FileSystem' | 'Remote' | 'Virtual' | 'Offline'
type MetadataField =
  | 'Cast'
  | 'Genres'
  | 'ProductionLocations'
  | 'Studios'
  | 'Tags'
  | 'Name'
  | 'Overview'
  | 'Runtime'
  | 'OfficialRating'
type MediaProtocol = 'File' | 'Http' | 'Rtmp' | 'Rtsp' | 'Udp' | 'Rtp' | 'Ftp'
type MediaAttachment = {
  Codec?: (string | null) | undefined
  CodecTag?: (string | null) | undefined
  Comment?: (string | null) | undefined
  DeliveryUrl?: (string | null) | undefined
  FileName?: (string | null) | undefined
  Index?: number | undefined
  MimeType?: (string | null) | undefined
}
type SubtitleDeliveryMethod = 'Encode' | 'Embed' | 'External' | 'Hls'
type MediaStreamType = 'Audio' | 'Video' | 'Subtitle' | 'EmbeddedImage'
type MediaStream = {
  AspectRatio?: (string | null) | undefined
  AverageFrameRate?: (number | null) | undefined
  BitDepth?: (number | null) | undefined
  BitRate?: (number | null) | undefined
  ChannelLayout?: (string | null) | undefined
  Channels?: (number | null) | undefined
  Codec?: (string | null) | undefined
  CodecTag?: (string | null) | undefined
  CodecTimeBase?: (string | null) | undefined
  ColorPrimaries?: (string | null) | undefined
  ColorRange?: (string | null) | undefined
  ColorSpace?: (string | null) | undefined
  ColorTransfer?: (string | null) | undefined
  Comment?: (string | null) | undefined
  DeliveryMethod?: SubtitleDeliveryMethod | undefined
  DeliveryUrl?: (string | null) | undefined
  DisplayTitle?: (string | null) | undefined
  Height?: (number | null) | undefined
  Index?: number | undefined
  IsAVC?: (boolean | null) | undefined
  IsAnamorphic?: (boolean | null) | undefined
  IsDefault?: boolean | undefined
  IsExternal?: boolean | undefined
  IsExternalUrl?: (boolean | null) | undefined
  IsForced?: boolean | undefined
  IsInterlaced?: boolean | undefined
  IsTextSubtitleStream?: boolean | undefined
  Language?: (string | null) | undefined
  Level?: (number | null) | undefined
  NalLengthSize?: (string | null) | undefined
  PacketLength?: (number | null) | undefined
  Path?: (string | null) | undefined
  PixelFormat?: (string | null) | undefined
  Profile?: (string | null) | undefined
  RealFrameRate?: (number | null) | undefined
  RefFrames?: (number | null) | undefined
  SampleRate?: (number | null) | undefined
  Score?: (number | null) | undefined
  SupportsExternalStream?: boolean | undefined
  TimeBase?: (string | null) | undefined
  Title?: (string | null) | undefined
  Type?: MediaStreamType | undefined
  VideoRange?: (string | null) | undefined
  Width?: (number | null) | undefined
  localizedDefault?: (string | null) | undefined
  localizedForced?: (string | null) | undefined
  localizedUndefined?: (string | null) | undefined
}
type TransportStreamTimestamp = 'None' | 'Zero' | 'Valid'
type MediaSourceType = 'Default' | 'Grouping' | 'Placeholder'
type Video3DFormat =
  | 'HalfSideBySide'
  | 'FullSideBySide'
  | 'FullTopAndBottom'
  | 'HalfTopAndBottom'
  | 'MVC'
type VideoType = 'VideoFile' | 'Iso' | 'Dvd' | 'BluRay'
type MediaSourceInfo = {
  AnalyzeDurationMs?: (number | null) | undefined
  Bitrate?: (number | null) | undefined
  BufferMs?: (number | null) | undefined
  Container?: (string | null) | undefined
  DefaultAudioStreamIndex?: (number | null) | undefined
  DefaultSubtitleStreamIndex?: (number | null) | undefined
  ETag?: (string | null) | undefined
  EncoderPath?: (string | null) | undefined
  EncoderProtocol?: MediaProtocol | undefined
  Formats?: (string[] | null) | undefined
  GenPtsInput?: boolean | undefined
  Id?: (string | null) | undefined
  IgnoreDts?: boolean | undefined
  IgnoreIndex?: boolean | undefined
  IsInfiniteStream?: boolean | undefined
  IsRemote?: boolean | undefined
  IsoType?: IsoType | undefined
  LiveStreamId?: (string | null) | undefined
  MediaAttachments?: (MediaAttachment[] | null) | undefined
  MediaStreams?: (MediaStream[] | null) | undefined
  Name?: (string | null) | undefined
  OpenToken?: (string | null) | undefined
  Path?: (string | null) | undefined
  Protocol?: MediaProtocol | undefined
  ReadAtNativeFramerate?: boolean | undefined
  RequiredHttpHeaders?: ({ [x: string]: string } | null) | undefined
  RequiresClosing?: boolean | undefined
  RequiresLooping?: boolean | undefined
  RequiresOpening?: boolean | undefined
  RunTimeTicks?: (bigint | null) | undefined
  Size?: (bigint | null) | undefined
  SupportsDirectPlay?: boolean | undefined
  SupportsDirectStream?: boolean | undefined
  SupportsProbing?: boolean | undefined
  SupportsTranscoding?: boolean | undefined
  Timestamp?: TransportStreamTimestamp | undefined
  TranscodingContainer?: (string | null) | undefined
  TranscodingSubProtocol?: (string | null) | undefined
  TranscodingUrl?: (string | null) | undefined
  Type?: MediaSourceType | undefined
  Video3DFormat?: Video3DFormat | undefined
  VideoType?: VideoType | undefined
}
type BaseItemPerson = {
  Id?: (string | null) | undefined
  ImageBlurHashes?:
    | ({
        Art?: { [x: string]: string } | undefined
        Backdrop?: { [x: string]: string } | undefined
        Banner?: { [x: string]: string } | undefined
        Box?: { [x: string]: string } | undefined
        BoxRear?: { [x: string]: string } | undefined
        Chapter?: { [x: string]: string } | undefined
        Disc?: { [x: string]: string } | undefined
        Logo?: { [x: string]: string } | undefined
        Menu?: { [x: string]: string } | undefined
        Primary?: { [x: string]: string } | undefined
        Profile?: { [x: string]: string } | undefined
        Screenshot?: { [x: string]: string } | undefined
        Thumb?: { [x: string]: string } | undefined
      } | null)
    | undefined
  Name?: (string | null) | undefined
  PrimaryImageTag?: (string | null) | undefined
  Role?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type PlayAccess = 'Full' | 'None'
type MediaUrl = { Name?: (string | null) | undefined; Url?: (string | null) | undefined }
type UserItemDataDto = {
  IsFavorite?: boolean | undefined
  ItemId?: (string | null) | undefined
  Key?: (string | null) | undefined
  LastPlayedDate?: (string | null) | undefined
  Likes?: (boolean | null) | undefined
  PlayCount?: number | undefined
  PlaybackPositionTicks?: bigint | undefined
  Played?: boolean | undefined
  PlayedPercentage?: (number | null) | undefined
  Rating?: (number | null) | undefined
  UnplayedItemCount?: (number | null) | undefined
}
type BaseItemDto = {
  AirDays?: (DayOfWeek[] | null) | undefined
  AirTime?: (string | null) | undefined
  AirsAfterSeasonNumber?: (number | null) | undefined
  AirsBeforeEpisodeNumber?: (number | null) | undefined
  AirsBeforeSeasonNumber?: (number | null) | undefined
  Album?: (string | null) | undefined
  AlbumArtist?: (string | null) | undefined
  AlbumArtists?: (NameGuidPair[] | null) | undefined
  AlbumCount?: (number | null) | undefined
  AlbumId?: (string | null) | undefined
  AlbumPrimaryImageTag?: (string | null) | undefined
  Altitude?: (number | null) | undefined
  Aperture?: (number | null) | undefined
  ArtistCount?: (number | null) | undefined
  ArtistItems?: (NameGuidPair[] | null) | undefined
  Artists?: (string[] | null) | undefined
  AspectRatio?: (string | null) | undefined
  Audio?: ProgramAudio | undefined
  BackdropImageTags?: (string[] | null) | undefined
  CameraMake?: (string | null) | undefined
  CameraModel?: (string | null) | undefined
  CanDelete?: (boolean | null) | undefined
  CanDownload?: (boolean | null) | undefined
  ChannelId?: (string | null) | undefined
  ChannelName?: (string | null) | undefined
  ChannelNumber?: (string | null) | undefined
  ChannelPrimaryImageTag?: (string | null) | undefined
  ChannelType?: ChannelType | undefined
  Chapters?: (ChapterInfo[] | null) | undefined
  ChildCount?: (number | null) | undefined
  CollectionType?: (string | null) | undefined
  CommunityRating?: (number | null) | undefined
  CompletionPercentage?: (number | null) | undefined
  Container?: (string | null) | undefined
  CriticRating?: (number | null) | undefined
  CumulativeRunTimeTicks?: (bigint | null) | undefined
  CurrentProgram?: BaseItemDto | undefined
  CustomRating?: (string | null) | undefined
  DateCreated?: (string | null) | undefined
  DateLastMediaAdded?: (string | null) | undefined
  DisplayOrder?: (string | null) | undefined
  DisplayPreferencesId?: (string | null) | undefined
  EnableMediaSourceDisplay?: (boolean | null) | undefined
  EndDate?: (string | null) | undefined
  EpisodeCount?: (number | null) | undefined
  EpisodeTitle?: (string | null) | undefined
  Etag?: (string | null) | undefined
  ExposureTime?: (number | null) | undefined
  ExternalUrls?: (ExternalUrl[] | null) | undefined
  ExtraType?: (string | null) | undefined
  FocalLength?: (number | null) | undefined
  ForcedSortName?: (string | null) | undefined
  GenreItems?: (NameGuidPair[] | null) | undefined
  Genres?: (string[] | null) | undefined
  HasSubtitles?: (boolean | null) | undefined
  Height?: (number | null) | undefined
  Id?: string | undefined
  ImageBlurHashes?:
    | ({
        Art?: { [x: string]: string } | undefined
        Backdrop?: { [x: string]: string } | undefined
        Banner?: { [x: string]: string } | undefined
        Box?: { [x: string]: string } | undefined
        BoxRear?: { [x: string]: string } | undefined
        Chapter?: { [x: string]: string } | undefined
        Disc?: { [x: string]: string } | undefined
        Logo?: { [x: string]: string } | undefined
        Menu?: { [x: string]: string } | undefined
        Primary?: { [x: string]: string } | undefined
        Profile?: { [x: string]: string } | undefined
        Screenshot?: { [x: string]: string } | undefined
        Thumb?: { [x: string]: string } | undefined
      } | null)
    | undefined
  ImageOrientation?: ImageOrientation | undefined
  ImageTags?: ({ [x: string]: string } | null) | undefined
  IndexNumber?: (number | null) | undefined
  IndexNumberEnd?: (number | null) | undefined
  IsFolder?: (boolean | null) | undefined
  IsHD?: (boolean | null) | undefined
  IsKids?: (boolean | null) | undefined
  IsLive?: (boolean | null) | undefined
  IsMovie?: (boolean | null) | undefined
  IsNews?: (boolean | null) | undefined
  IsPlaceHolder?: (boolean | null) | undefined
  IsPremiere?: (boolean | null) | undefined
  IsRepeat?: (boolean | null) | undefined
  IsSeries?: (boolean | null) | undefined
  IsSports?: (boolean | null) | undefined
  IsoSpeedRating?: (number | null) | undefined
  IsoType?: IsoType | undefined
  Latitude?: (number | null) | undefined
  LocalTrailerCount?: (number | null) | undefined
  LocationType?: LocationType | undefined
  LockData?: (boolean | null) | undefined
  LockedFields?: (MetadataField[] | null) | undefined
  Longitude?: (number | null) | undefined
  MediaSourceCount?: (number | null) | undefined
  MediaSources?: (MediaSourceInfo[] | null) | undefined
  MediaStreams?: (MediaStream[] | null) | undefined
  MediaType?: (string | null) | undefined
  MovieCount?: (number | null) | undefined
  MusicVideoCount?: (number | null) | undefined
  Name?: (string | null) | undefined
  Number?: (string | null) | undefined
  OfficialRating?: (string | null) | undefined
  OriginalTitle?: (string | null) | undefined
  Overview?: (string | null) | undefined
  ParentArtImageTag?: (string | null) | undefined
  ParentArtItemId?: (string | null) | undefined
  ParentBackdropImageTags?: (string[] | null) | undefined
  ParentBackdropItemId?: (string | null) | undefined
  ParentId?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  ParentLogoImageTag?: (string | null) | undefined
  ParentLogoItemId?: (string | null) | undefined
  ParentPrimaryImageItemId?: (string | null) | undefined
  ParentPrimaryImageTag?: (string | null) | undefined
  ParentThumbImageTag?: (string | null) | undefined
  ParentThumbItemId?: (string | null) | undefined
  PartCount?: (number | null) | undefined
  Path?: (string | null) | undefined
  People?: (BaseItemPerson[] | null) | undefined
  PlayAccess?: PlayAccess | undefined
  PlaylistItemId?: (string | null) | undefined
  PreferredMetadataCountryCode?: (string | null) | undefined
  PreferredMetadataLanguage?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  PrimaryImageAspectRatio?: (number | null) | undefined
  ProductionLocations?: (string[] | null) | undefined
  ProductionYear?: (number | null) | undefined
  ProgramCount?: (number | null) | undefined
  ProgramId?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  RecursiveItemCount?: (number | null) | undefined
  RemoteTrailers?: (MediaUrl[] | null) | undefined
  RunTimeTicks?: (bigint | null) | undefined
  ScreenshotImageTags?: (string[] | null) | undefined
  SeasonId?: (string | null) | undefined
  SeasonName?: (string | null) | undefined
  SeriesCount?: (number | null) | undefined
  SeriesId?: (string | null) | undefined
  SeriesName?: (string | null) | undefined
  SeriesPrimaryImageTag?: (string | null) | undefined
  SeriesStudio?: (string | null) | undefined
  SeriesThumbImageTag?: (string | null) | undefined
  SeriesTimerId?: (string | null) | undefined
  ServerId?: (string | null) | undefined
  ShutterSpeed?: (number | null) | undefined
  Software?: (string | null) | undefined
  SongCount?: (number | null) | undefined
  SortName?: (string | null) | undefined
  SourceType?: (string | null) | undefined
  SpecialFeatureCount?: (number | null) | undefined
  StartDate?: (string | null) | undefined
  Status?: (string | null) | undefined
  Studios?: (NameGuidPair[] | null) | undefined
  SupportsSync?: (boolean | null) | undefined
  Taglines?: (string[] | null) | undefined
  Tags?: (string[] | null) | undefined
  TimerId?: (string | null) | undefined
  TrailerCount?: (number | null) | undefined
  Type?: (string | null) | undefined
  UserData?: UserItemDataDto | undefined
  Video3DFormat?: Video3DFormat | undefined
  VideoType?: VideoType | undefined
  Width?: (number | null) | undefined
}
type BaseItemDtoQueryResult = {
  Items?: (BaseItemDto[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type ItemFilter =
  | 'IsFolder'
  | 'IsNotFolder'
  | 'IsUnplayed'
  | 'IsPlayed'
  | 'IsFavorite'
  | 'IsResumable'
  | 'Likes'
  | 'Dislikes'
  | 'IsFavoriteOrLikes'
type ImageFormat = 'Bmp' | 'Gif' | 'Jpg' | 'Png' | 'Webp'
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type EncodingContext = 'Streaming' | 'Static'
type AuthenticationInfo = {
  AccessToken?: (string | null) | undefined
  AppName?: (string | null) | undefined
  AppVersion?: (string | null) | undefined
  DateCreated?: string | undefined
  DateLastActivity?: string | undefined
  DateRevoked?: (string | null) | undefined
  DeviceId?: (string | null) | undefined
  DeviceName?: (string | null) | undefined
  Id?: bigint | undefined
  IsActive?: boolean | undefined
  UserId?: string | undefined
  UserName?: (string | null) | undefined
}
type AuthenticationInfoQueryResult = {
  Items?: (AuthenticationInfo[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type NameIdPair = { Id?: (string | null) | undefined; Name?: (string | null) | undefined }
type BrandingOptions = {
  CustomCss?: (string | null) | undefined
  LoginDisclaimer?: (string | null) | undefined
}
type ChannelMediaContentType =
  | 'Clip'
  | 'Podcast'
  | 'Trailer'
  | 'Movie'
  | 'Episode'
  | 'Song'
  | 'MovieExtra'
  | 'TvExtra'
type ChannelItemSortField =
  | 'Name'
  | 'CommunityRating'
  | 'PremiereDate'
  | 'DateCreated'
  | 'Runtime'
  | 'PlayCount'
  | 'CommunityPlayCount'
type ChannelMediaType = 'Audio' | 'Video' | 'Photo'
type ChannelFeatures = {
  AutoRefreshLevels?: (number | null) | undefined
  CanFilter?: boolean | undefined
  CanSearch?: boolean | undefined
  ContentTypes?: (ChannelMediaContentType[] | null) | undefined
  DefaultSortFields?: (ChannelItemSortField[] | null) | undefined
  Id?: (string | null) | undefined
  MaxPageSize?: (number | null) | undefined
  MediaTypes?: (ChannelMediaType[] | null) | undefined
  Name?: (string | null) | undefined
  SupportsContentDownloading?: boolean | undefined
  SupportsLatestMedia?: boolean | undefined
  SupportsSortOrderToggle?: boolean | undefined
}
type CollectionCreationResult = { Id?: string | undefined }
type ProfileConditionType =
  | 'Equals'
  | 'NotEquals'
  | 'LessThanEqual'
  | 'GreaterThanEqual'
  | 'EqualsAny'
type ProfileConditionValue =
  | 'AudioChannels'
  | 'AudioBitrate'
  | 'AudioProfile'
  | 'Width'
  | 'Height'
  | 'Has64BitOffsets'
  | 'PacketLength'
  | 'VideoBitDepth'
  | 'VideoBitrate'
  | 'VideoFramerate'
  | 'VideoLevel'
  | 'VideoProfile'
  | 'VideoTimestamp'
  | 'IsAnamorphic'
  | 'RefFrames'
  | 'NumAudioStreams'
  | 'NumVideoStreams'
  | 'IsSecondaryAudio'
  | 'VideoCodecTag'
  | 'IsAvc'
  | 'IsInterlaced'
  | 'AudioSampleRate'
  | 'AudioBitDepth'
type ProfileCondition = {
  Condition?: ProfileConditionType | undefined
  IsRequired?: boolean | undefined
  Property?: ProfileConditionValue | undefined
  Value?: (string | null) | undefined
}
type CodecType = 'Video' | 'VideoAudio' | 'Audio'
type CodecProfile = {
  ApplyConditions?: (ProfileCondition[] | null) | undefined
  Codec?: (string | null) | undefined
  Conditions?: (ProfileCondition[] | null) | undefined
  Container?: (string | null) | undefined
  Type?: CodecType | undefined
}
type DlnaProfileType = 'Audio' | 'Video' | 'Photo'
type ContainerProfile = {
  Conditions?: (ProfileCondition[] | null) | undefined
  Container?: (string | null) | undefined
  Type?: DlnaProfileType | undefined
}
type DirectPlayProfile = {
  AudioCodec?: (string | null) | undefined
  Container?: (string | null) | undefined
  Type?: DlnaProfileType | undefined
  VideoCodec?: (string | null) | undefined
}
type HeaderMatchType = 'Equals' | 'Regex' | 'Substring'
type HttpHeaderInfo = {
  Match?: HeaderMatchType | undefined
  Name?: (string | null) | undefined
  Value?: (string | null) | undefined
}
type DeviceIdentification = {
  FriendlyName?: (string | null) | undefined
  Headers?: (HttpHeaderInfo[] | null) | undefined
  Manufacturer?: (string | null) | undefined
  ManufacturerUrl?: (string | null) | undefined
  ModelDescription?: (string | null) | undefined
  ModelName?: (string | null) | undefined
  ModelNumber?: (string | null) | undefined
  ModelUrl?: (string | null) | undefined
  SerialNumber?: (string | null) | undefined
}
type ResponseProfile = {
  AudioCodec?: (string | null) | undefined
  Conditions?: (ProfileCondition[] | null) | undefined
  Container?: (string | null) | undefined
  MimeType?: (string | null) | undefined
  OrgPn?: (string | null) | undefined
  Type?: DlnaProfileType | undefined
  VideoCodec?: (string | null) | undefined
}
type SubtitleProfile = {
  Container?: (string | null) | undefined
  DidlMode?: (string | null) | undefined
  Format?: (string | null) | undefined
  Language?: (string | null) | undefined
  Method?: SubtitleDeliveryMethod | undefined
}
type TranscodeSeekInfo = 'Auto' | 'Bytes'
type TranscodingProfile = {
  AudioCodec?: (string | null) | undefined
  BreakOnNonKeyFrames?: boolean | undefined
  Container?: (string | null) | undefined
  Context?: EncodingContext | undefined
  CopyTimestamps?: boolean | undefined
  EnableMpegtsM2TsMode?: boolean | undefined
  EnableSubtitlesInManifest?: boolean | undefined
  EstimateContentLength?: boolean | undefined
  MaxAudioChannels?: (string | null) | undefined
  MinSegments?: number | undefined
  Protocol?: (string | null) | undefined
  SegmentLength?: number | undefined
  TranscodeSeekInfo?: TranscodeSeekInfo | undefined
  Type?: DlnaProfileType | undefined
  VideoCodec?: (string | null) | undefined
}
type XmlAttribute = { Name?: (string | null) | undefined; Value?: (string | null) | undefined }
type DeviceProfile = {
  AlbumArtPn?: (string | null) | undefined
  CodecProfiles?: (CodecProfile[] | null) | undefined
  ContainerProfiles?: (ContainerProfile[] | null) | undefined
  DirectPlayProfiles?: (DirectPlayProfile[] | null) | undefined
  EnableAlbumArtInDidl?: boolean | undefined
  EnableMSMediaReceiverRegistrar?: boolean | undefined
  EnableSingleAlbumArtLimit?: boolean | undefined
  EnableSingleSubtitleLimit?: boolean | undefined
  FriendlyName?: (string | null) | undefined
  Id?: (string | null) | undefined
  Identification?: DeviceIdentification | undefined
  IgnoreTranscodeByteRangeRequests?: boolean | undefined
  Manufacturer?: (string | null) | undefined
  ManufacturerUrl?: (string | null) | undefined
  MaxAlbumArtHeight?: number | undefined
  MaxAlbumArtWidth?: number | undefined
  MaxIconHeight?: (number | null) | undefined
  MaxIconWidth?: (number | null) | undefined
  MaxStaticBitrate?: (number | null) | undefined
  MaxStaticMusicBitrate?: (number | null) | undefined
  MaxStreamingBitrate?: (number | null) | undefined
  ModelDescription?: (string | null) | undefined
  ModelName?: (string | null) | undefined
  ModelNumber?: (string | null) | undefined
  ModelUrl?: (string | null) | undefined
  MusicStreamingTranscodingBitrate?: (number | null) | undefined
  Name?: (string | null) | undefined
  ProtocolInfo?: (string | null) | undefined
  RequiresPlainFolders?: boolean | undefined
  RequiresPlainVideoItems?: boolean | undefined
  ResponseProfiles?: (ResponseProfile[] | null) | undefined
  SerialNumber?: (string | null) | undefined
  SonyAggregationFlags?: (string | null) | undefined
  SubtitleProfiles?: (SubtitleProfile[] | null) | undefined
  SupportedMediaTypes?: (string | null) | undefined
  TimelineOffsetSeconds?: number | undefined
  TranscodingProfiles?: (TranscodingProfile[] | null) | undefined
  UserId?: (string | null) | undefined
  XmlRootAttributes?: (XmlAttribute[] | null) | undefined
}
type GeneralCommandType =
  | 'MoveUp'
  | 'MoveDown'
  | 'MoveLeft'
  | 'MoveRight'
  | 'PageUp'
  | 'PageDown'
  | 'PreviousLetter'
  | 'NextLetter'
  | 'ToggleOsd'
  | 'ToggleContextMenu'
  | 'Select'
  | 'Back'
  | 'TakeScreenshot'
  | 'SendKey'
  | 'SendString'
  | 'GoHome'
  | 'GoToSettings'
  | 'VolumeUp'
  | 'VolumeDown'
  | 'Mute'
  | 'Unmute'
  | 'ToggleMute'
  | 'SetVolume'
  | 'SetAudioStreamIndex'
  | 'SetSubtitleStreamIndex'
  | 'ToggleFullscreen'
  | 'DisplayContent'
  | 'GoToSearch'
  | 'DisplayMessage'
  | 'SetRepeatMode'
  | 'ChannelUp'
  | 'ChannelDown'
  | 'Guide'
  | 'ToggleStats'
  | 'PlayMediaSource'
  | 'PlayTrailers'
  | 'SetShuffleQueue'
  | 'PlayState'
  | 'PlayNext'
  | 'ToggleOsdMenu'
  | 'Play'
type ClientCapabilities = {
  AppStoreUrl?: (string | null) | undefined
  DeviceProfile?: DeviceProfile | undefined
  IconUrl?: (string | null) | undefined
  MessageCallbackUrl?: (string | null) | undefined
  PlayableMediaTypes?: (string[] | null) | undefined
  SupportedCommands?: (GeneralCommandType[] | null) | undefined
  SupportsContentUploading?: boolean | undefined
  SupportsMediaControl?: boolean | undefined
  SupportsPersistentIdentifier?: boolean | undefined
  SupportsSync?: boolean | undefined
}
type DeviceInfo = {
  AppName?: (string | null) | undefined
  AppVersion?: (string | null) | undefined
  Capabilities?: ClientCapabilities | undefined
  DateLastActivity?: string | undefined
  IconUrl?: (string | null) | undefined
  Id?: (string | null) | undefined
  LastUserId?: string | undefined
  LastUserName?: (string | null) | undefined
  Name?: (string | null) | undefined
}
type DeviceInfoQueryResult = {
  Items?: (DeviceInfo[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type DeviceOptions = { CustomName?: (string | null) | undefined }
type ScrollDirection = 'Horizontal' | 'Vertical'
type SortOrder = 'Ascending' | 'Descending'
type DisplayPreferencesDto = {
  Client?: (string | null) | undefined
  CustomPrefs?: ({ [x: string]: string } | null) | undefined
  Id?: (string | null) | undefined
  IndexBy?: (string | null) | undefined
  PrimaryImageHeight?: number | undefined
  PrimaryImageWidth?: number | undefined
  RememberIndexing?: boolean | undefined
  RememberSorting?: boolean | undefined
  ScrollDirection?: ScrollDirection | undefined
  ShowBackdrop?: boolean | undefined
  ShowSidebar?: boolean | undefined
  SortBy?: (string | null) | undefined
  SortOrder?: SortOrder | undefined
  ViewType?: (string | null) | undefined
}
type DeviceProfileType = 'System' | 'User'
type DeviceProfileInfo = {
  Id?: (string | null) | undefined
  Name?: (string | null) | undefined
  Type?: DeviceProfileType | undefined
}
type DefaultDirectoryBrowserInfoDto = { Path?: (string | null) | undefined }
type FileSystemEntryType = 'File' | 'Directory' | 'NetworkComputer' | 'NetworkShare'
type FileSystemEntryInfo = {
  Name?: (string | null) | undefined
  Path?: (string | null) | undefined
  Type?: FileSystemEntryType | undefined
}
type ValidatePathDto = {
  IsFile?: (boolean | null) | undefined
  Path?: (string | null) | undefined
  ValidateWritable?: boolean | undefined
}
type FontFile = {
  DateCreated?: string | undefined
  DateModified?: string | undefined
  Name?: (string | null) | undefined
  Size?: bigint | undefined
}
type UtcTimeResponse = {
  RequestReceptionTime?: string | undefined
  ResponseTransmissionTime?: string | undefined
}
type ImageByNameInfo = {
  Context?: (string | null) | undefined
  FileLength?: bigint | undefined
  Format?: (string | null) | undefined
  Name?: (string | null) | undefined
  Theme?: (string | null) | undefined
}
type SeriesStatus = 'Continuing' | 'Ended'
type ItemCounts = {
  AlbumCount?: number | undefined
  ArtistCount?: number | undefined
  BookCount?: number | undefined
  BoxSetCount?: number | undefined
  EpisodeCount?: number | undefined
  ItemCount?: number | undefined
  MovieCount?: number | undefined
  MusicVideoCount?: number | undefined
  ProgramCount?: number | undefined
  SeriesCount?: number | undefined
  SongCount?: number | undefined
  TrailerCount?: number | undefined
}
type QueryFiltersLegacy = {
  Genres?: (string[] | null) | undefined
  OfficialRatings?: (string[] | null) | undefined
  Tags?: (string[] | null) | undefined
  Years?: (number[] | null) | undefined
}
type QueryFilters = {
  Genres?: (NameGuidPair[] | null) | undefined
  Tags?: (string[] | null) | undefined
}
type RemoteSearchResult = {
  AlbumArtist?: RemoteSearchResult | undefined
  Artists?: (RemoteSearchResult[] | null) | undefined
  ImageUrl?: (string | null) | undefined
  IndexNumber?: (number | null) | undefined
  IndexNumberEnd?: (number | null) | undefined
  Name?: (string | null) | undefined
  Overview?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProductionYear?: (number | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  SearchProviderName?: (string | null) | undefined
}
type BookInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  SeriesName?: (string | null) | undefined
  Year?: (number | null) | undefined
}
type BookInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: BookInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type BoxSetInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type BoxSetInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: BoxSetInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type MovieInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type MovieInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: MovieInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type SongInfo = {
  Album?: (string | null) | undefined
  AlbumArtists?: (string[] | null) | undefined
  Artists?: (string[] | null) | undefined
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type AlbumInfo = {
  AlbumArtists?: (string[] | null) | undefined
  ArtistProviderIds?: ({ [x: string]: string } | null) | undefined
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  SongInfos?: (SongInfo[] | null) | undefined
  Year?: (number | null) | undefined
}
type AlbumInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: AlbumInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type ArtistInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  SongInfos?: (SongInfo[] | null) | undefined
  Year?: (number | null) | undefined
}
type ArtistInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: ArtistInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type MusicVideoInfo = {
  Artists?: (string[] | null) | undefined
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type MusicVideoInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: MusicVideoInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type PersonLookupInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type PersonLookupInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: PersonLookupInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type SeriesInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type SeriesInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: SeriesInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type TrailerInfo = {
  IndexNumber?: (number | null) | undefined
  IsAutomated?: boolean | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataLanguage?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  Path?: (string | null) | undefined
  PremiereDate?: (string | null) | undefined
  ProviderIds?: ({ [x: string]: string } | null) | undefined
  Year?: (number | null) | undefined
}
type TrailerInfoRemoteSearchQuery = {
  IncludeDisabledProviders?: boolean | undefined
  ItemId?: string | undefined
  SearchInfo?: TrailerInfo | undefined
  SearchProviderName?: (string | null) | undefined
}
type ExternalIdMediaType =
  | 'Album'
  | 'AlbumArtist'
  | 'Artist'
  | 'BoxSet'
  | 'Episode'
  | 'Movie'
  | 'OtherArtist'
  | 'Person'
  | 'ReleaseGroup'
  | 'Season'
  | 'Series'
  | 'Track'
type ExternalIdInfo = {
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Type?: ExternalIdMediaType | undefined
  UrlFormatString?: (string | null) | undefined
}
type ImageInfo = {
  BlurHash?: (string | null) | undefined
  Height?: (number | null) | undefined
  ImageIndex?: (number | null) | undefined
  ImageTag?: (string | null) | undefined
  ImageType?: ImageType | undefined
  Path?: (string | null) | undefined
  Size?: bigint | undefined
  Width?: (number | null) | undefined
}
type NameValuePair = { Name?: (string | null) | undefined; Value?: (string | null) | undefined }
type CountryInfo = {
  DisplayName?: (string | null) | undefined
  Name?: (string | null) | undefined
  ThreeLetterISORegionName?: (string | null) | undefined
  TwoLetterISORegionName?: (string | null) | undefined
}
type CultureDto = {
  DisplayName?: (string | null) | undefined
  Name?: (string | null) | undefined
  ThreeLetterISOLanguageName?: (string | null) | undefined
  ThreeLetterISOLanguageNames?: (string[] | null) | undefined
  TwoLetterISOLanguageName?: (string | null) | undefined
}
type ParentalRating = { Name?: (string | null) | undefined; Value?: number | undefined }
type MetadataEditorInfo = {
  ContentType?: (string | null) | undefined
  ContentTypeOptions?: (NameValuePair[] | null) | undefined
  Countries?: (CountryInfo[] | null) | undefined
  Cultures?: (CultureDto[] | null) | undefined
  ExternalIdInfos?: (ExternalIdInfo[] | null) | undefined
  ParentalRatingOptions?: (ParentalRating[] | null) | undefined
}
type PlaybackErrorCode = 'NotAllowed' | 'NoCompatibleStream' | 'RateLimitExceeded'
type PlaybackInfoResponse = {
  ErrorCode?: PlaybackErrorCode | undefined
  MediaSources?: (MediaSourceInfo[] | null) | undefined
  PlaySessionId?: (string | null) | undefined
}
type PlaybackInfoDto = {
  AllowAudioStreamCopy?: (boolean | null) | undefined
  AllowVideoStreamCopy?: (boolean | null) | undefined
  AudioStreamIndex?: (number | null) | undefined
  AutoOpenLiveStream?: (boolean | null) | undefined
  DeviceProfile?: DeviceProfile | undefined
  EnableDirectPlay?: (boolean | null) | undefined
  EnableDirectStream?: (boolean | null) | undefined
  EnableTranscoding?: (boolean | null) | undefined
  LiveStreamId?: (string | null) | undefined
  MaxAudioChannels?: (number | null) | undefined
  MaxStreamingBitrate?: (number | null) | undefined
  MediaSourceId?: (string | null) | undefined
  StartTimeTicks?: (bigint | null) | undefined
  SubtitleStreamIndex?: (number | null) | undefined
  UserId?: (string | null) | undefined
}
type MetadataRefreshMode = 'None' | 'ValidationOnly' | 'Default' | 'FullRefresh'
type RatingType = 'Score' | 'Likes'
type RemoteImageInfo = {
  CommunityRating?: (number | null) | undefined
  Height?: (number | null) | undefined
  Language?: (string | null) | undefined
  ProviderName?: (string | null) | undefined
  RatingType?: RatingType | undefined
  ThumbnailUrl?: (string | null) | undefined
  Type?: ImageType | undefined
  Url?: (string | null) | undefined
  VoteCount?: (number | null) | undefined
  Width?: (number | null) | undefined
}
type RemoteImageResult = {
  Images?: (RemoteImageInfo[] | null) | undefined
  Providers?: (string[] | null) | undefined
  TotalRecordCount?: number | undefined
}
type ImageProviderInfo = {
  Name?: (string | null) | undefined
  SupportedImages?: (ImageType[] | null) | undefined
}
type RemoteSubtitleInfo = {
  Author?: (string | null) | undefined
  Comment?: (string | null) | undefined
  CommunityRating?: (number | null) | undefined
  DateCreated?: (string | null) | undefined
  DownloadCount?: (number | null) | undefined
  Format?: (string | null) | undefined
  Id?: (string | null) | undefined
  IsHashMatch?: (boolean | null) | undefined
  Name?: (string | null) | undefined
  ProviderName?: (string | null) | undefined
  ThreeLetterISOLanguageName?: (string | null) | undefined
}
type ThemeMediaResult = {
  Items?: (BaseItemDto[] | null) | undefined
  OwnerId?: string | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type AllThemeMediaResult = {
  SoundtrackSongsResult?: ThemeMediaResult | undefined
  ThemeSongsResult?: ThemeMediaResult | undefined
  ThemeVideosResult?: ThemeMediaResult | undefined
}
type LibraryOptionInfoDto = {
  DefaultEnabled?: boolean | undefined
  Name?: (string | null) | undefined
}
type ImageOption = {
  Limit?: number | undefined
  MinWidth?: number | undefined
  Type?: ImageType | undefined
}
type LibraryTypeOptionsDto = {
  DefaultImageOptions?: (ImageOption[] | null) | undefined
  ImageFetchers?: (LibraryOptionInfoDto[] | null) | undefined
  MetadataFetchers?: (LibraryOptionInfoDto[] | null) | undefined
  SupportedImageTypes?: (ImageType[] | null) | undefined
  Type?: (string | null) | undefined
}
type LibraryOptionsResultDto = {
  MetadataReaders?: (LibraryOptionInfoDto[] | null) | undefined
  MetadataSavers?: (LibraryOptionInfoDto[] | null) | undefined
  SubtitleFetchers?: (LibraryOptionInfoDto[] | null) | undefined
  TypeOptions?: (LibraryTypeOptionsDto[] | null) | undefined
}
type MediaUpdateInfoDto = {
  Path?: (string | null) | undefined
  UpdateType?: (string | null) | undefined
}
type MediaPathInfo = {
  NetworkPath?: (string | null) | undefined
  Path?: (string | null) | undefined
}
type TypeOptions = {
  ImageFetcherOrder?: (string[] | null) | undefined
  ImageFetchers?: (string[] | null) | undefined
  ImageOptions?: (ImageOption[] | null) | undefined
  MetadataFetcherOrder?: (string[] | null) | undefined
  MetadataFetchers?: (string[] | null) | undefined
  Type?: (string | null) | undefined
}
type LibraryOptions = {
  AutomaticRefreshIntervalDays?: number | undefined
  DisabledLocalMetadataReaders?: (string[] | null) | undefined
  DisabledSubtitleFetchers?: (string[] | null) | undefined
  EnableAutomaticSeriesGrouping?: boolean | undefined
  EnableChapterImageExtraction?: boolean | undefined
  EnableEmbeddedEpisodeInfos?: boolean | undefined
  EnableEmbeddedTitles?: boolean | undefined
  EnableInternetProviders?: boolean | undefined
  EnablePhotos?: boolean | undefined
  EnableRealtimeMonitor?: boolean | undefined
  ExtractChapterImagesDuringLibraryScan?: boolean | undefined
  LocalMetadataReaderOrder?: (string[] | null) | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataSavers?: (string[] | null) | undefined
  PathInfos?: (MediaPathInfo[] | null) | undefined
  PreferredMetadataLanguage?: (string | null) | undefined
  RequirePerfectSubtitleMatch?: boolean | undefined
  SaveLocalMetadata?: boolean | undefined
  SaveSubtitlesWithMedia?: boolean | undefined
  SeasonZeroDisplayName?: (string | null) | undefined
  SkipSubtitlesIfAudioTrackMatches?: boolean | undefined
  SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean | undefined
  SubtitleDownloadLanguages?: (string[] | null) | undefined
  SubtitleFetcherOrder?: (string[] | null) | undefined
  TypeOptions?: (TypeOptions[] | null) | undefined
}
type VirtualFolderInfo = {
  CollectionType?: (string | null) | undefined
  ItemId?: (string | null) | undefined
  LibraryOptions?: LibraryOptions | undefined
  Locations?: (string[] | null) | undefined
  Name?: (string | null) | undefined
  PrimaryImageItemId?: (string | null) | undefined
  RefreshProgress?: (number | null) | undefined
  RefreshStatus?: (string | null) | undefined
}
type AddVirtualFolderDto = { LibraryOptions?: LibraryOptions | undefined }
type UpdateLibraryOptionsDto = {
  Id?: string | undefined
  LibraryOptions?: LibraryOptions | undefined
}
type MediaPathDto = {
  Name: string
  Path?: (string | null) | undefined
  PathInfo?: MediaPathInfo | undefined
}
type OpenLiveStreamDto = {
  AudioStreamIndex?: (number | null) | undefined
  DeviceProfile?: DeviceProfile | undefined
  DirectPlayProtocols?: (MediaProtocol[] | null) | undefined
  EnableDirectPlay?: (boolean | null) | undefined
  EnableDirectStream?: (boolean | null) | undefined
  ItemId?: (string | null) | undefined
  MaxAudioChannels?: (number | null) | undefined
  MaxStreamingBitrate?: (number | null) | undefined
  OpenToken?: (string | null) | undefined
  PlaySessionId?: (string | null) | undefined
  StartTimeTicks?: (bigint | null) | undefined
  SubtitleStreamIndex?: (number | null) | undefined
  UserId?: (string | null) | undefined
}
type LiveStreamResponse = { MediaSource?: MediaSourceInfo | undefined }
type TunerChannelMapping = {
  Id?: (string | null) | undefined
  Name?: (string | null) | undefined
  ProviderChannelId?: (string | null) | undefined
  ProviderChannelName?: (string | null) | undefined
}
type ChannelMappingOptionsDto = {
  Mappings?: (NameValuePair[] | null) | undefined
  ProviderChannels?: (NameIdPair[] | null) | undefined
  ProviderName?: (string | null) | undefined
  TunerChannels?: (TunerChannelMapping[] | null) | undefined
}
type SetChannelMappingDto = {
  ProviderChannelId: string
  ProviderId: string
  TunerChannelId: string
}
type GuideInfo = { EndDate?: string | undefined; StartDate?: string | undefined }
type LiveTvServiceStatus = 'Ok' | 'Unavailable'
type LiveTvServiceInfo = {
  HasUpdateAvailable?: boolean | undefined
  HomePageUrl?: (string | null) | undefined
  IsVisible?: boolean | undefined
  Name?: (string | null) | undefined
  Status?: LiveTvServiceStatus | undefined
  StatusMessage?: (string | null) | undefined
  Tuners?: (string[] | null) | undefined
  Version?: (string | null) | undefined
}
type LiveTvInfo = {
  EnabledUsers?: (string[] | null) | undefined
  IsEnabled?: boolean | undefined
  Services?: (LiveTvServiceInfo[] | null) | undefined
}
type ListingsProviderInfo = {
  ChannelMappings?: (NameValuePair[] | null) | undefined
  Country?: (string | null) | undefined
  EnableAllTuners?: boolean | undefined
  EnabledTuners?: (string[] | null) | undefined
  Id?: (string | null) | undefined
  KidsCategories?: (string[] | null) | undefined
  ListingsId?: (string | null) | undefined
  MovieCategories?: (string[] | null) | undefined
  MoviePrefix?: (string | null) | undefined
  NewsCategories?: (string[] | null) | undefined
  Password?: (string | null) | undefined
  Path?: (string | null) | undefined
  PreferredLanguage?: (string | null) | undefined
  SportsCategories?: (string[] | null) | undefined
  Type?: (string | null) | undefined
  UserAgent?: (string | null) | undefined
  Username?: (string | null) | undefined
  ZipCode?: (string | null) | undefined
}
type GetProgramsDto = {
  ChannelIds?: (string[] | null) | undefined
  EnableImageTypes?: (ImageType[] | null) | undefined
  EnableImages?: (boolean | null) | undefined
  EnableTotalRecordCount?: boolean | undefined
  EnableUserData?: (boolean | null) | undefined
  Fields?: (ItemFields[] | null) | undefined
  GenreIds?: (string[] | null) | undefined
  Genres?: (string[] | null) | undefined
  HasAired?: (boolean | null) | undefined
  ImageTypeLimit?: (number | null) | undefined
  IsAiring?: (boolean | null) | undefined
  IsKids?: (boolean | null) | undefined
  IsMovie?: (boolean | null) | undefined
  IsNews?: (boolean | null) | undefined
  IsSeries?: (boolean | null) | undefined
  IsSports?: (boolean | null) | undefined
  LibrarySeriesId?: string | undefined
  Limit?: (number | null) | undefined
  MaxEndDate?: (string | null) | undefined
  MaxStartDate?: (string | null) | undefined
  MinEndDate?: (string | null) | undefined
  MinStartDate?: (string | null) | undefined
  SeriesTimerId?: (string | null) | undefined
  SortBy?: (string | null) | undefined
  SortOrder?: (string | null) | undefined
  StartIndex?: (number | null) | undefined
  UserId?: string | undefined
}
type RecordingStatus =
  | 'New'
  | 'InProgress'
  | 'Completed'
  | 'Cancelled'
  | 'ConflictedOk'
  | 'ConflictedNotOk'
  | 'Error'
type DayPattern = 'Daily' | 'Weekdays' | 'Weekends'
type KeepUntil = 'UntilDeleted' | 'UntilSpaceNeeded' | 'UntilWatched' | 'UntilDate'
type SeriesTimerInfoDto = {
  ChannelId?: string | undefined
  ChannelName?: (string | null) | undefined
  ChannelPrimaryImageTag?: (string | null) | undefined
  DayPattern?: DayPattern | undefined
  Days?: (DayOfWeek[] | null) | undefined
  EndDate?: string | undefined
  ExternalChannelId?: (string | null) | undefined
  ExternalId?: (string | null) | undefined
  ExternalProgramId?: (string | null) | undefined
  Id?: (string | null) | undefined
  ImageTags?: ({ [x: string]: string } | null) | undefined
  IsPostPaddingRequired?: boolean | undefined
  IsPrePaddingRequired?: boolean | undefined
  KeepUntil?: KeepUntil | undefined
  KeepUpTo?: number | undefined
  Name?: (string | null) | undefined
  Overview?: (string | null) | undefined
  ParentBackdropImageTags?: (string[] | null) | undefined
  ParentBackdropItemId?: (string | null) | undefined
  ParentPrimaryImageItemId?: (string | null) | undefined
  ParentPrimaryImageTag?: (string | null) | undefined
  ParentThumbImageTag?: (string | null) | undefined
  ParentThumbItemId?: (string | null) | undefined
  PostPaddingSeconds?: number | undefined
  PrePaddingSeconds?: number | undefined
  Priority?: number | undefined
  ProgramId?: (string | null) | undefined
  RecordAnyChannel?: boolean | undefined
  RecordAnyTime?: boolean | undefined
  RecordNewOnly?: boolean | undefined
  ServerId?: (string | null) | undefined
  ServiceName?: (string | null) | undefined
  SkipEpisodesInLibrary?: boolean | undefined
  StartDate?: string | undefined
  Type?: (string | null) | undefined
}
type SeriesTimerInfoDtoQueryResult = {
  Items?: (SeriesTimerInfoDto[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type TimerInfoDto = {
  ChannelId?: string | undefined
  ChannelName?: (string | null) | undefined
  ChannelPrimaryImageTag?: (string | null) | undefined
  EndDate?: string | undefined
  ExternalChannelId?: (string | null) | undefined
  ExternalId?: (string | null) | undefined
  ExternalProgramId?: (string | null) | undefined
  ExternalSeriesTimerId?: (string | null) | undefined
  Id?: (string | null) | undefined
  IsPostPaddingRequired?: boolean | undefined
  IsPrePaddingRequired?: boolean | undefined
  KeepUntil?: KeepUntil | undefined
  Name?: (string | null) | undefined
  Overview?: (string | null) | undefined
  ParentBackdropImageTags?: (string[] | null) | undefined
  ParentBackdropItemId?: (string | null) | undefined
  PostPaddingSeconds?: number | undefined
  PrePaddingSeconds?: number | undefined
  Priority?: number | undefined
  ProgramId?: (string | null) | undefined
  ProgramInfo?: BaseItemDto | undefined
  RunTimeTicks?: (bigint | null) | undefined
  SeriesTimerId?: (string | null) | undefined
  ServerId?: (string | null) | undefined
  ServiceName?: (string | null) | undefined
  StartDate?: string | undefined
  Status?: RecordingStatus | undefined
  Type?: (string | null) | undefined
}
type TimerInfoDtoQueryResult = {
  Items?: (TimerInfoDto[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type TunerHostInfo = {
  AllowHWTranscoding?: boolean | undefined
  DeviceId?: (string | null) | undefined
  EnableStreamLooping?: boolean | undefined
  FriendlyName?: (string | null) | undefined
  Id?: (string | null) | undefined
  ImportFavoritesOnly?: boolean | undefined
  Source?: (string | null) | undefined
  TunerCount?: number | undefined
  Type?: (string | null) | undefined
  Url?: (string | null) | undefined
  UserAgent?: (string | null) | undefined
}
type LocalizationOption = {
  Name?: (string | null) | undefined
  Value?: (string | null) | undefined
}
type RecommendationType =
  | 'SimilarToRecentlyPlayed'
  | 'SimilarToLikedItem'
  | 'HasDirectorFromRecentlyPlayed'
  | 'HasActorFromRecentlyPlayed'
  | 'HasLikedDirector'
  | 'HasLikedActor'
type RecommendationDto = {
  BaselineItemName?: (string | null) | undefined
  CategoryId?: string | undefined
  Items?: (BaseItemDto[] | null) | undefined
  RecommendationType?: RecommendationType | undefined
}
type NotificationLevel = 'Normal' | 'Warning' | 'Error'
type NotificationTypeInfo = {
  Category?: (string | null) | undefined
  Enabled?: boolean | undefined
  IsBasedOnUserEvent?: boolean | undefined
  Name?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type NotificationDto = {
  Date?: string | undefined
  Description?: (string | null) | undefined
  Id?: (string | null) | undefined
  IsRead?: boolean | undefined
  Level?: NotificationLevel | undefined
  Name?: (string | null) | undefined
  Url?: (string | null) | undefined
  UserId?: (string | null) | undefined
}
type NotificationResultDto = {
  Notifications?: (NotificationDto[] | null) | undefined
  TotalRecordCount?: number | undefined
}
type NotificationsSummaryDto = {
  MaxUnreadNotificationLevel?: NotificationLevel | undefined
  UnreadCount?: number | undefined
}
type Version = {
  Build?: number | undefined
  Major?: number | undefined
  MajorRevision?: number | undefined
  Minor?: number | undefined
  MinorRevision?: number | undefined
  Revision?: number | undefined
}
type VersionInfo = {
  VersionNumber?: Version | undefined
  changelog?: (string | null) | undefined
  checksum?: (string | null) | undefined
  repositoryName?: (string | null) | undefined
  repositoryUrl?: (string | null) | undefined
  sourceUrl?: (string | null) | undefined
  targetAbi?: (string | null) | undefined
  timestamp?: (string | null) | undefined
  version?: (string | null) | undefined
}
type PackageInfo = {
  category?: (string | null) | undefined
  description?: (string | null) | undefined
  guid?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
  name?: (string | null) | undefined
  overview?: (string | null) | undefined
  owner?: (string | null) | undefined
  versions?: (VersionInfo[] | null) | undefined
}
type CreatePlaylistDto = {
  Ids?: (string[] | null) | undefined
  MediaType?: (string | null) | undefined
  Name?: (string | null) | undefined
  UserId?: (string | null) | undefined
}
type PlaylistCreationResult = { Id?: (string | null) | undefined }
type PluginStatus =
  | 'Active'
  | 'Restart'
  | 'Deleted'
  | 'Superceded'
  | 'Malfunctioned'
  | 'NotSupported'
  | 'Disabled'
type PluginInfo = {
  CanUninstall?: boolean | undefined
  ConfigurationFileName?: (string | null) | undefined
  Description?: (string | null) | undefined
  HasImage?: boolean | undefined
  Id?: string | undefined
  Name?: (string | null) | undefined
  Status?: PluginStatus | undefined
  Version?: Version | undefined
}
type PluginSecurityInfo = {
  IsMbSupporter?: boolean | undefined
  SupporterKey?: (string | null) | undefined
}
type BasePluginConfiguration = {}
type QuickConnectState = 'Unavailable' | 'Available' | 'Active'
type QuickConnectResult = {
  Authenticated?: boolean | undefined
  Authentication?: (string | null) | undefined
  Code?: (string | null) | undefined
  DateAdded?: (string | null) | undefined
  Error?: (string | null) | undefined
  Secret?: (string | null) | undefined
}
type RepositoryInfo = {
  Enabled?: boolean | undefined
  Name?: (string | null) | undefined
  Url?: (string | null) | undefined
}
type TaskCompletionStatus = 'Completed' | 'Failed' | 'Cancelled' | 'Aborted'
type TaskResult = {
  EndTimeUtc?: string | undefined
  ErrorMessage?: (string | null) | undefined
  Id?: (string | null) | undefined
  Key?: (string | null) | undefined
  LongErrorMessage?: (string | null) | undefined
  Name?: (string | null) | undefined
  StartTimeUtc?: string | undefined
  Status?: TaskCompletionStatus | undefined
}
type TaskState = 'Idle' | 'Cancelling' | 'Running'
type TaskTriggerInfo = {
  DayOfWeek?: DayOfWeek | undefined
  IntervalTicks?: (bigint | null) | undefined
  MaxRuntimeTicks?: (bigint | null) | undefined
  TimeOfDayTicks?: (bigint | null) | undefined
  Type?: (string | null) | undefined
}
type TaskInfo = {
  Category?: (string | null) | undefined
  CurrentProgressPercentage?: (number | null) | undefined
  Description?: (string | null) | undefined
  Id?: (string | null) | undefined
  IsHidden?: boolean | undefined
  Key?: (string | null) | undefined
  LastExecutionResult?: TaskResult | undefined
  Name?: (string | null) | undefined
  State?: TaskState | undefined
  Triggers?: (TaskTriggerInfo[] | null) | undefined
}
type SearchHint = {
  Album?: (string | null) | undefined
  AlbumArtist?: (string | null) | undefined
  AlbumId?: string | undefined
  Artists?: (string[] | null) | undefined
  BackdropImageItemId?: (string | null) | undefined
  BackdropImageTag?: (string | null) | undefined
  ChannelId?: string | undefined
  ChannelName?: (string | null) | undefined
  EndDate?: (string | null) | undefined
  EpisodeCount?: (number | null) | undefined
  Id?: string | undefined
  IndexNumber?: (number | null) | undefined
  IsFolder?: (boolean | null) | undefined
  ItemId?: string | undefined
  MatchedTerm?: (string | null) | undefined
  MediaType?: (string | null) | undefined
  Name?: (string | null) | undefined
  ParentIndexNumber?: (number | null) | undefined
  PrimaryImageAspectRatio?: (number | null) | undefined
  PrimaryImageTag?: (string | null) | undefined
  ProductionYear?: (number | null) | undefined
  RunTimeTicks?: (bigint | null) | undefined
  Series?: (string | null) | undefined
  SongCount?: (number | null) | undefined
  StartDate?: (string | null) | undefined
  Status?: (string | null) | undefined
  ThumbImageItemId?: (string | null) | undefined
  ThumbImageTag?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type SearchHintResult = {
  SearchHints?: (SearchHint[] | null) | undefined
  TotalRecordCount?: number | undefined
}
type SessionUserInfo = { UserId?: string | undefined; UserName?: (string | null) | undefined }
type BaseItem = {
  Container?: (string | null) | undefined
  DateLastSaved?: string | undefined
  ExtraIds?: (string[] | null) | undefined
  Height?: number | undefined
  IsHD?: boolean | undefined
  IsShortcut?: boolean | undefined
  RemoteTrailers?: (MediaUrl[] | null) | undefined
  ShortcutPath?: (string | null) | undefined
  Size?: (bigint | null) | undefined
  SupportsExternalTransfer?: boolean | undefined
  Width?: number | undefined
}
type QueueItem = { Id?: string | undefined; PlaylistItemId?: (string | null) | undefined }
type PlayMethod = 'Transcode' | 'DirectStream' | 'DirectPlay'
type RepeatMode = 'RepeatNone' | 'RepeatAll' | 'RepeatOne'
type PlayerStateInfo = {
  AudioStreamIndex?: (number | null) | undefined
  CanSeek?: boolean | undefined
  IsMuted?: boolean | undefined
  IsPaused?: boolean | undefined
  MediaSourceId?: (string | null) | undefined
  PlayMethod?: PlayMethod | undefined
  PositionTicks?: (bigint | null) | undefined
  RepeatMode?: RepeatMode | undefined
  SubtitleStreamIndex?: (number | null) | undefined
  VolumeLevel?: (number | null) | undefined
}
type TranscodeReason =
  | 'ContainerNotSupported'
  | 'VideoCodecNotSupported'
  | 'AudioCodecNotSupported'
  | 'ContainerBitrateExceedsLimit'
  | 'AudioBitrateNotSupported'
  | 'AudioChannelsNotSupported'
  | 'VideoResolutionNotSupported'
  | 'UnknownVideoStreamInfo'
  | 'UnknownAudioStreamInfo'
  | 'AudioProfileNotSupported'
  | 'AudioSampleRateNotSupported'
  | 'AnamorphicVideoNotSupported'
  | 'InterlacedVideoNotSupported'
  | 'SecondaryAudioNotSupported'
  | 'RefFramesNotSupported'
  | 'VideoBitDepthNotSupported'
  | 'VideoBitrateNotSupported'
  | 'VideoFramerateNotSupported'
  | 'VideoLevelNotSupported'
  | 'VideoProfileNotSupported'
  | 'AudioBitDepthNotSupported'
  | 'SubtitleCodecNotSupported'
  | 'DirectPlayError'
type TranscodingInfo = {
  AudioChannels?: (number | null) | undefined
  AudioCodec?: (string | null) | undefined
  Bitrate?: (number | null) | undefined
  CompletionPercentage?: (number | null) | undefined
  Container?: (string | null) | undefined
  Framerate?: (number | null) | undefined
  Height?: (number | null) | undefined
  IsAudioDirect?: boolean | undefined
  IsVideoDirect?: boolean | undefined
  TranscodeReasons?: (TranscodeReason[] | null) | undefined
  VideoCodec?: (string | null) | undefined
  Width?: (number | null) | undefined
}
type SessionInfo = {
  AdditionalUsers?: (SessionUserInfo[] | null) | undefined
  ApplicationVersion?: (string | null) | undefined
  Capabilities?: ClientCapabilities | undefined
  Client?: (string | null) | undefined
  DeviceId?: (string | null) | undefined
  DeviceName?: (string | null) | undefined
  DeviceType?: (string | null) | undefined
  FullNowPlayingItem?: BaseItem | undefined
  HasCustomDeviceName?: boolean | undefined
  Id?: (string | null) | undefined
  IsActive?: boolean | undefined
  LastActivityDate?: string | undefined
  LastPlaybackCheckIn?: string | undefined
  NowPlayingItem?: BaseItemDto | undefined
  NowPlayingQueue?: (QueueItem[] | null) | undefined
  NowViewingItem?: BaseItemDto | undefined
  PlayState?: PlayerStateInfo | undefined
  PlayableMediaTypes?: (string[] | null) | undefined
  PlaylistItemId?: (string | null) | undefined
  RemoteEndPoint?: (string | null) | undefined
  ServerId?: (string | null) | undefined
  SupportedCommands?: (GeneralCommandType[] | null) | undefined
  SupportsMediaControl?: boolean | undefined
  SupportsRemoteControl?: boolean | undefined
  TranscodingInfo?: TranscodingInfo | undefined
  UserId?: string | undefined
  UserName?: (string | null) | undefined
  UserPrimaryImageTag?: (string | null) | undefined
}
type ClientCapabilitiesDto = {
  AppStoreUrl?: (string | null) | undefined
  DeviceProfile?: DeviceProfile | undefined
  IconUrl?: (string | null) | undefined
  MessageCallbackUrl?: (string | null) | undefined
  PlayableMediaTypes?: (string[] | null) | undefined
  SupportedCommands?: (GeneralCommandType[] | null) | undefined
  SupportsContentUploading?: boolean | undefined
  SupportsMediaControl?: boolean | undefined
  SupportsPersistentIdentifier?: boolean | undefined
  SupportsSync?: boolean | undefined
}
type PlaybackStartInfo = {
  AspectRatio?: (string | null) | undefined
  AudioStreamIndex?: (number | null) | undefined
  Brightness?: (number | null) | undefined
  CanSeek?: boolean | undefined
  IsMuted?: boolean | undefined
  IsPaused?: boolean | undefined
  Item?: BaseItemDto | undefined
  ItemId?: string | undefined
  LiveStreamId?: (string | null) | undefined
  MediaSourceId?: (string | null) | undefined
  NowPlayingQueue?: (QueueItem[] | null) | undefined
  PlayMethod?: PlayMethod | undefined
  PlaySessionId?: (string | null) | undefined
  PlaybackStartTimeTicks?: (bigint | null) | undefined
  PlaylistItemId?: (string | null) | undefined
  PositionTicks?: (bigint | null) | undefined
  RepeatMode?: RepeatMode | undefined
  SessionId?: (string | null) | undefined
  SubtitleStreamIndex?: (number | null) | undefined
  VolumeLevel?: (number | null) | undefined
}
type PlaybackProgressInfo = {
  AspectRatio?: (string | null) | undefined
  AudioStreamIndex?: (number | null) | undefined
  Brightness?: (number | null) | undefined
  CanSeek?: boolean | undefined
  IsMuted?: boolean | undefined
  IsPaused?: boolean | undefined
  Item?: BaseItemDto | undefined
  ItemId?: string | undefined
  LiveStreamId?: (string | null) | undefined
  MediaSourceId?: (string | null) | undefined
  NowPlayingQueue?: (QueueItem[] | null) | undefined
  PlayMethod?: PlayMethod | undefined
  PlaySessionId?: (string | null) | undefined
  PlaybackStartTimeTicks?: (bigint | null) | undefined
  PlaylistItemId?: (string | null) | undefined
  PositionTicks?: (bigint | null) | undefined
  RepeatMode?: RepeatMode | undefined
  SessionId?: (string | null) | undefined
  SubtitleStreamIndex?: (number | null) | undefined
  VolumeLevel?: (number | null) | undefined
}
type PlaybackStopInfo = {
  Failed?: boolean | undefined
  Item?: BaseItemDto | undefined
  ItemId?: string | undefined
  LiveStreamId?: (string | null) | undefined
  MediaSourceId?: (string | null) | undefined
  NextMediaType?: (string | null) | undefined
  NowPlayingQueue?: (QueueItem[] | null) | undefined
  PlaySessionId?: (string | null) | undefined
  PlaylistItemId?: (string | null) | undefined
  PositionTicks?: (bigint | null) | undefined
  SessionId?: (string | null) | undefined
}
type GeneralCommand = {
  Arguments?: ({ [x: string]: string } | null) | undefined
  ControllingUserId?: string | undefined
  Name?: GeneralCommandType | undefined
}
type PlayCommand = 'PlayNow' | 'PlayNext' | 'PlayLast' | 'PlayInstantMix' | 'PlayShuffle'
type PlaystateCommand =
  | 'Stop'
  | 'Pause'
  | 'Unpause'
  | 'NextTrack'
  | 'PreviousTrack'
  | 'Seek'
  | 'Rewind'
  | 'FastForward'
  | 'PlayPause'
type StartupConfigurationDto = {
  MetadataCountryCode?: (string | null) | undefined
  PreferredMetadataLanguage?: (string | null) | undefined
  UICulture?: (string | null) | undefined
}
type StartupUserDto = { Name?: (string | null) | undefined; Password?: (string | null) | undefined }
type StartupRemoteAccessDto = { EnableAutomaticPortMapping: boolean; EnableRemoteAccess: boolean }
type BufferRequestDto = {
  IsPlaying?: boolean | undefined
  PlaylistItemId?: string | undefined
  PositionTicks?: bigint | undefined
  When?: string | undefined
}
type JoinGroupRequestDto = { GroupId?: string | undefined }
type GroupStateType = 'Idle' | 'Waiting' | 'Paused' | 'Playing'
type GroupInfoDto = {
  GroupId?: string | undefined
  GroupName?: (string | null) | undefined
  LastUpdatedAt?: string | undefined
  Participants?: (string[] | null) | undefined
  State?: GroupStateType | undefined
}
type MovePlaylistItemRequestDto = {
  NewIndex?: number | undefined
  PlaylistItemId?: string | undefined
}
type NewGroupRequestDto = { GroupName?: (string | null) | undefined }
type NextItemRequestDto = { PlaylistItemId?: string | undefined }
type PingRequestDto = { Ping?: bigint | undefined }
type PreviousItemRequestDto = { PlaylistItemId?: string | undefined }
type GroupQueueMode = 'Queue' | 'QueueNext'
type QueueRequestDto = {
  ItemIds?: (string[] | null) | undefined
  Mode?: GroupQueueMode | undefined
}
type ReadyRequestDto = {
  IsPlaying?: boolean | undefined
  PlaylistItemId?: string | undefined
  PositionTicks?: bigint | undefined
  When?: string | undefined
}
type RemoveFromPlaylistRequestDto = { PlaylistItemIds?: (string[] | null) | undefined }
type SeekRequestDto = { PositionTicks?: bigint | undefined }
type IgnoreWaitRequestDto = { IgnoreWait?: boolean | undefined }
type PlayRequestDto = {
  PlayingItemPosition?: number | undefined
  PlayingQueue?: (string[] | null) | undefined
  StartPositionTicks?: bigint | undefined
}
type SetPlaylistItemRequestDto = { PlaylistItemId?: string | undefined }
type GroupRepeatMode = 'RepeatOne' | 'RepeatAll' | 'RepeatNone'
type SetRepeatModeRequestDto = { Mode?: GroupRepeatMode | undefined }
type GroupShuffleMode = 'Sorted' | 'Shuffle'
type SetShuffleModeRequestDto = { Mode?: GroupShuffleMode | undefined }
type LogLevel = 'Trace' | 'Debug' | 'Information' | 'Warning' | 'Error' | 'Critical' | 'None'
type ActivityLogEntry = {
  Date?: string | undefined
  Id?: bigint | undefined
  ItemId?: (string | null) | undefined
  Name?: (string | null) | undefined
  Overview?: (string | null) | undefined
  Severity?: LogLevel | undefined
  ShortOverview?: (string | null) | undefined
  Type?: (string | null) | undefined
  UserId?: string | undefined
  UserPrimaryImageTag?: (string | null) | undefined
}
type ActivityLogEntryQueryResult = {
  Items?: (ActivityLogEntry[] | null) | undefined
  StartIndex?: number | undefined
  TotalRecordCount?: number | undefined
}
type ImageSavingConvention = 'Legacy' | 'Compatible'
type MetadataOptions = {
  DisabledImageFetchers?: (string[] | null) | undefined
  DisabledMetadataFetchers?: (string[] | null) | undefined
  DisabledMetadataSavers?: (string[] | null) | undefined
  ImageFetcherOrder?: (string[] | null) | undefined
  ItemType?: (string | null) | undefined
  LocalMetadataReaderOrder?: (string[] | null) | undefined
  MetadataFetcherOrder?: (string[] | null) | undefined
}
type PathSubstitution = { From?: (string | null) | undefined; To?: (string | null) | undefined }
type ServerConfiguration = {
  ActivityLogRetentionDays?: (number | null) | undefined
  AutoDiscovery?: boolean | undefined
  AutoDiscoveryTracing?: boolean | undefined
  BaseUrl?: (string | null) | undefined
  CachePath?: (string | null) | undefined
  CertificatePassword?: (string | null) | undefined
  CertificatePath?: (string | null) | undefined
  CodecsUsed?: (string[] | null) | undefined
  ContentTypes?: (NameValuePair[] | null) | undefined
  CorsHosts?: (string[] | null) | undefined
  DisableLiveTvChannelUserDataName?: boolean | undefined
  DisablePluginImages?: boolean | undefined
  DisplaySpecialsWithinSeasons?: boolean | undefined
  EnableCaseSensitiveItemIds?: boolean | undefined
  EnableDashboardResponseCaching?: boolean | undefined
  EnableExternalContentInSuggestions?: boolean | undefined
  EnableFolderView?: boolean | undefined
  EnableGroupingIntoCollections?: boolean | undefined
  EnableHttps?: boolean | undefined
  EnableIPV4?: boolean | undefined
  EnableIPV6?: boolean | undefined
  EnableMetrics?: boolean | undefined
  EnableMultiSocketBinding?: boolean | undefined
  EnableNewOmdbSupport?: boolean | undefined
  EnableNormalizedItemByNameIds?: boolean | undefined
  EnableRemoteAccess?: boolean | undefined
  EnableSSDPTracing?: boolean | undefined
  EnableSimpleArtistDetection?: boolean | undefined
  EnableSlowResponseWarning?: boolean | undefined
  EnableUPnP?: boolean | undefined
  GatewayMonitorPeriod?: number | undefined
  HDHomerunPortRange?: (string | null) | undefined
  HttpServerPortNumber?: number | undefined
  HttpsPortNumber?: number | undefined
  IgnoreVirtualInterfaces?: boolean | undefined
  ImageExtractionTimeoutMs?: number | undefined
  ImageSavingConvention?: ImageSavingConvention | undefined
  IsPortAuthorized?: boolean | undefined
  IsRemoteIPFilterBlacklist?: boolean | undefined
  IsStartupWizardCompleted?: boolean | undefined
  KnownProxies?: (string[] | null) | undefined
  LibraryMetadataRefreshConcurrency?: number | undefined
  LibraryMonitorDelay?: number | undefined
  LibraryScanFanoutConcurrency?: number | undefined
  LocalNetworkAddresses?: (string[] | null) | undefined
  LocalNetworkSubnets?: (string[] | null) | undefined
  LogFileRetentionDays?: number | undefined
  MaxAudiobookResume?: number | undefined
  MaxResumePct?: number | undefined
  MetadataCountryCode?: (string | null) | undefined
  MetadataNetworkPath?: (string | null) | undefined
  MetadataOptions?: (MetadataOptions[] | null) | undefined
  MetadataPath?: (string | null) | undefined
  MinAudiobookResume?: number | undefined
  MinResumeDurationSeconds?: number | undefined
  MinResumePct?: number | undefined
  PathSubstitutions?: (PathSubstitution[] | null) | undefined
  PluginRepositories?: (RepositoryInfo[] | null) | undefined
  PreferredMetadataLanguage?: (string | null) | undefined
  PreviousVersion?: Version | undefined
  PreviousVersionStr?: (string | null) | undefined
  PublicHttpsPort?: number | undefined
  PublicPort?: number | undefined
  PublishedServerUriBySubnet?: (string[] | null) | undefined
  QuickConnectAvailable?: boolean | undefined
  RemoteClientBitrateLimit?: number | undefined
  RemoteIPFilter?: (string[] | null) | undefined
  RemoveOldPlugins?: boolean | undefined
  RequireHttps?: boolean | undefined
  SSDPTracingFilter?: (string | null) | undefined
  SaveMetadataHidden?: boolean | undefined
  ServerName?: (string | null) | undefined
  SkipDeserializationForBasicTypes?: boolean | undefined
  SlowResponseThresholdMs?: bigint | undefined
  SortRemoveCharacters?: (string[] | null) | undefined
  SortRemoveWords?: (string[] | null) | undefined
  SortReplaceCharacters?: (string[] | null) | undefined
  TrustAllIP6Interfaces?: boolean | undefined
  UDPPortRange?: (string | null) | undefined
  UDPSendCount?: number | undefined
  UDPSendDelay?: number | undefined
  UICulture?: (string | null) | undefined
  UPnPCreateHttpPortMap?: boolean | undefined
  UninstalledPlugins?: (string[] | null) | undefined
  VirtualInterfaceNames?: (string | null) | undefined
}
type EndPointInfo = { IsInNetwork?: boolean | undefined; IsLocal?: boolean | undefined }
type InstallationInfo = {
  Changelog?: (string | null) | undefined
  Checksum?: (string | null) | undefined
  Guid?: string | undefined
  Name?: (string | null) | undefined
  SourceUrl?: (string | null) | undefined
  Version?: Version | undefined
}
type FFmpegLocation = 'NotFound' | 'SetByArgument' | 'Custom' | 'System'
type Architecture = 'X86' | 'X64' | 'Arm' | 'Arm64' | 'Wasm'
type SystemInfo = {
  CachePath?: (string | null) | undefined
  CanLaunchWebBrowser?: boolean | undefined
  CanSelfRestart?: boolean | undefined
  CompletedInstallations?: (InstallationInfo[] | null) | undefined
  EncoderLocation?: FFmpegLocation | undefined
  HasPendingRestart?: boolean | undefined
  HasUpdateAvailable?: boolean | undefined
  Id?: (string | null) | undefined
  InternalMetadataPath?: (string | null) | undefined
  IsShuttingDown?: boolean | undefined
  ItemsByNamePath?: (string | null) | undefined
  LocalAddress?: (string | null) | undefined
  LogPath?: (string | null) | undefined
  OperatingSystem?: (string | null) | undefined
  OperatingSystemDisplayName?: (string | null) | undefined
  PackageName?: (string | null) | undefined
  ProductName?: (string | null) | undefined
  ProgramDataPath?: (string | null) | undefined
  ServerName?: (string | null) | undefined
  StartupWizardCompleted?: (boolean | null) | undefined
  SupportsLibraryMonitor?: boolean | undefined
  SystemArchitecture?: Architecture | undefined
  TranscodingTempPath?: (string | null) | undefined
  Version?: (string | null) | undefined
  WebPath?: (string | null) | undefined
  WebSocketPortNumber?: number | undefined
}
type PublicSystemInfo = {
  Id?: (string | null) | undefined
  LocalAddress?: (string | null) | undefined
  OperatingSystem?: (string | null) | undefined
  ProductName?: (string | null) | undefined
  ServerName?: (string | null) | undefined
  StartupWizardCompleted?: (boolean | null) | undefined
  Version?: (string | null) | undefined
}
type LogFile = {
  DateCreated?: string | undefined
  DateModified?: string | undefined
  Name?: (string | null) | undefined
  Size?: bigint | undefined
}
type MediaEncoderPathDto = {
  Path?: (string | null) | undefined
  PathType?: (string | null) | undefined
}
type WakeOnLanInfo = { MacAddress?: (string | null) | undefined; Port?: number | undefined }
type SubtitlePlaybackMode = 'Default' | 'Always' | 'OnlyForced' | 'None' | 'Smart'
type UserConfiguration = {
  AudioLanguagePreference?: (string | null) | undefined
  DisplayCollectionsView?: boolean | undefined
  DisplayMissingEpisodes?: boolean | undefined
  EnableLocalPassword?: boolean | undefined
  EnableNextEpisodeAutoPlay?: boolean | undefined
  GroupedFolders?: (string[] | null) | undefined
  HidePlayedInLatest?: boolean | undefined
  LatestItemsExcludes?: (string[] | null) | undefined
  MyMediaExcludes?: (string[] | null) | undefined
  OrderedViews?: (string[] | null) | undefined
  PlayDefaultAudioTrack?: boolean | undefined
  RememberAudioSelections?: boolean | undefined
  RememberSubtitleSelections?: boolean | undefined
  SubtitleLanguagePreference?: (string | null) | undefined
  SubtitleMode?: SubtitlePlaybackMode | undefined
}
type DynamicDayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Everyday'
  | 'Weekday'
  | 'Weekend'
type AccessSchedule = {
  DayOfWeek: DynamicDayOfWeek
  EndHour: number
  Id: number
  StartHour: number
  UserId: string
}
type UnratedItem =
  | 'Movie'
  | 'Trailer'
  | 'Series'
  | 'Music'
  | 'Book'
  | 'LiveTvChannel'
  | 'LiveTvProgram'
  | 'ChannelContent'
  | 'Other'
type SyncPlayUserAccessType = 'CreateAndJoinGroups' | 'JoinGroups' | 'None'
type UserPolicy = {
  AccessSchedules?: (AccessSchedule[] | null) | undefined
  AuthenticationProviderId?: (string | null) | undefined
  BlockUnratedItems?: (UnratedItem[] | null) | undefined
  BlockedChannels?: (string[] | null) | undefined
  BlockedMediaFolders?: (string[] | null) | undefined
  BlockedTags?: (string[] | null) | undefined
  EnableAllChannels?: boolean | undefined
  EnableAllDevices?: boolean | undefined
  EnableAllFolders?: boolean | undefined
  EnableAudioPlaybackTranscoding?: boolean | undefined
  EnableContentDeletion?: boolean | undefined
  EnableContentDeletionFromFolders?: (string[] | null) | undefined
  EnableContentDownloading?: boolean | undefined
  EnableLiveTvAccess?: boolean | undefined
  EnableLiveTvManagement?: boolean | undefined
  EnableMediaConversion?: boolean | undefined
  EnableMediaPlayback?: boolean | undefined
  EnablePlaybackRemuxing?: boolean | undefined
  EnablePublicSharing?: boolean | undefined
  EnableRemoteAccess?: boolean | undefined
  EnableRemoteControlOfOtherUsers?: boolean | undefined
  EnableSharedDeviceControl?: boolean | undefined
  EnableSyncTranscoding?: boolean | undefined
  EnableUserPreferenceAccess?: boolean | undefined
  EnableVideoPlaybackTranscoding?: boolean | undefined
  EnabledChannels?: (string[] | null) | undefined
  EnabledDevices?: (string[] | null) | undefined
  EnabledFolders?: (string[] | null) | undefined
  ForceRemoteSourceTranscoding?: boolean | undefined
  InvalidLoginAttemptCount?: number | undefined
  IsAdministrator?: boolean | undefined
  IsDisabled?: boolean | undefined
  IsHidden?: boolean | undefined
  LoginAttemptsBeforeLockout?: number | undefined
  MaxActiveSessions?: number | undefined
  MaxParentalRating?: (number | null) | undefined
  PasswordResetProviderId?: (string | null) | undefined
  RemoteClientBitrateLimit?: number | undefined
  SyncPlayAccess?: SyncPlayUserAccessType | undefined
}
type UserDto = {
  Configuration?: UserConfiguration | undefined
  EnableAutoLogin?: (boolean | null) | undefined
  HasConfiguredEasyPassword?: boolean | undefined
  HasConfiguredPassword?: boolean | undefined
  HasPassword?: boolean | undefined
  Id?: string | undefined
  LastActivityDate?: (string | null) | undefined
  LastLoginDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  Policy?: UserPolicy | undefined
  PrimaryImageAspectRatio?: (number | null) | undefined
  PrimaryImageTag?: (string | null) | undefined
  ServerId?: (string | null) | undefined
  ServerName?: (string | null) | undefined
}
type AuthenticateUserByName = {
  Password?: (string | null) | undefined
  Pw?: (string | null) | undefined
  Username?: (string | null) | undefined
}
type AuthenticationResult = {
  AccessToken?: (string | null) | undefined
  ServerId?: (string | null) | undefined
  SessionInfo?: SessionInfo | undefined
  User?: UserDto | undefined
}
type QuickConnectDto = { Token: string }
type ForgotPasswordDto = { EnteredUsername: string }
type ForgotPasswordAction = 'ContactAdmin' | 'PinCode' | 'InNetworkRequired'
type ForgotPasswordResult = {
  Action?: ForgotPasswordAction | undefined
  PinExpirationDate?: (string | null) | undefined
  PinFile?: (string | null) | undefined
}
type PinRedeemResult = { Success?: boolean | undefined; UsersReset?: (string[] | null) | undefined }
type CreateUserByName = {
  Name?: (string | null) | undefined
  Password?: (string | null) | undefined
}
type UpdateUserEasyPassword = {
  NewPassword?: (string | null) | undefined
  NewPw?: (string | null) | undefined
  ResetPassword?: boolean | undefined
}
type SpecialViewOptionDto = { Id?: (string | null) | undefined; Name?: (string | null) | undefined }
type UpdateUserPassword = {
  CurrentPassword?: (string | null) | undefined
  CurrentPw?: (string | null) | undefined
  NewPw?: (string | null) | undefined
  ResetPassword?: boolean | undefined
}
type UploadSubtitleDto = { Data: string; Format: string; IsForced: boolean; Language: string }
type ConfigurationPageType = 'PluginConfiguration' | 'None'
type ConfigurationPageInfo = {
  ConfigurationPageType?: ConfigurationPageType | undefined
  DisplayName?: (string | null) | undefined
  EnableInMainMenu?: boolean | undefined
  MenuIcon?: (string | null) | undefined
  MenuSection?: (string | null) | undefined
  Name?: (string | null) | undefined
  PluginId?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Albums/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Albums/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists': {
      $get:
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists/AlbumArtists': {
      $get:
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                minCommunityRating?: (number | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                studioIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists/:name': {
      $get:
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Artists/:name/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Audio/:itemId/hls/:segmentId/stream.aac': {
      $get: {
        input: { param: { itemId: string; segmentId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Audio/:itemId/hls/:segmentId/stream.mp3': {
      $get: {
        input: { param: { itemId: string; segmentId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Audio/:itemId/hls1/:playlistId/:segmentId.{container}': {
      $get:
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Audio/:itemId/main.m3u8': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Audio/:itemId/master.m3u8': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $head:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Audio/:itemId/stream': {
      $get: {
        input: { param: { itemId: string } } & {
          query: {
            container?: (string | null) | undefined
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { itemId: string } } & {
          query: {
            container?: (string | null) | undefined
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Audio/:itemId/stream.{container}': {
      $get: {
        input: { param: { itemId: string; container: string } } & {
          query: {
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { itemId: string; container: string } } & {
          query: {
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Audio/:itemId/universal': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $head:
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string[] | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                userId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                transcodingAudioChannels?: (number | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                transcodingContainer?: (string | null) | undefined
                transcodingProtocol?: (string | null) | undefined
                maxAudioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                enableRemoteMedia?: (boolean | null) | undefined
                breakOnNonKeyFrames?: boolean | undefined
                enableRedirection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Auth/Keys': {
      $get:
        | { input: {}; output: AuthenticationInfoQueryResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AuthenticationInfoQueryResult; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AuthenticationInfoQueryResult; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { query: { app: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { app: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { app: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Auth/Keys/:key': {
      $delete:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Auth/PasswordResetProviders': {
      $get:
        | { input: {}; output: NameIdPair[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Auth/Providers': {
      $get:
        | { input: {}; output: NameIdPair[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Branding/Configuration': {
      $get:
        | { input: {}; output: BrandingOptions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BrandingOptions; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BrandingOptions; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Branding/Css': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/Branding/Css.css': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/Channels': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                supportsLatestItems?: (boolean | null) | undefined
                supportsMediaDeletion?: (boolean | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                supportsLatestItems?: (boolean | null) | undefined
                supportsMediaDeletion?: (boolean | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                supportsLatestItems?: (boolean | null) | undefined
                supportsMediaDeletion?: (boolean | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                supportsLatestItems?: (boolean | null) | undefined
                supportsMediaDeletion?: (boolean | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                supportsLatestItems?: (boolean | null) | undefined
                supportsMediaDeletion?: (boolean | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Channels/Features': {
      $get:
        | { input: {}; output: ChannelFeatures[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ChannelFeatures[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ChannelFeatures[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Channels/Items/Latest': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                channelIds?: (string[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                channelIds?: (string[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                channelIds?: (string[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                channelIds?: (string[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                channelIds?: (string[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Channels/:channelId/Features': {
      $get:
        | {
            input: { param: { channelId: string } }
            output: ChannelFeatures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: string } }
            output: ChannelFeatures
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channelId: string } }
            output: ChannelFeatures
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { channelId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { channelId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Channels/:channelId/Items': {
      $get:
        | {
            input: { param: { channelId: string } } & {
              query: {
                folderId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                sortBy?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: {
                folderId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                sortBy?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: {
                folderId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                sortBy?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: {
                folderId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                sortBy?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { channelId: string } } & {
              query: {
                folderId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                sortBy?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Collections': {
      $post:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isLocked?: boolean | undefined
              }
            }
            output: CollectionCreationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isLocked?: boolean | undefined
              }
            }
            output: CollectionCreationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isLocked?: boolean | undefined
              }
            }
            output: CollectionCreationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isLocked?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isLocked?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Collections/:collectionId/Items': {
      $delete:
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { collectionId: string } } & { query: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Devices': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                supportsSync?: (boolean | null) | undefined
                userId?: (string | null) | undefined
              }
            }
            output: DeviceInfoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                supportsSync?: (boolean | null) | undefined
                userId?: (string | null) | undefined
              }
            }
            output: DeviceInfoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                supportsSync?: (boolean | null) | undefined
                userId?: (string | null) | undefined
              }
            }
            output: DeviceInfoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                supportsSync?: (boolean | null) | undefined
                userId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                supportsSync?: (boolean | null) | undefined
                userId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Devices/Info': {
      $get:
        | {
            input: { query: { id: string } }
            output: DeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: DeviceInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: DeviceInfo
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Devices/Options': {
      $get:
        | {
            input: { query: { id: string } }
            output: DeviceOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: DeviceOptions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: DeviceOptions
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { id: string } } & { json: DeviceOptions }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/DisplayPreferences/:displayPreferencesId': {
      $get:
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            }
            output: DisplayPreferencesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            }
            output: DisplayPreferencesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            }
            output: DisplayPreferencesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            } & { json: DisplayPreferencesDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            } & { json: DisplayPreferencesDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { displayPreferencesId: string } } & {
              query: { userId: string; client: string }
            } & { json: DisplayPreferencesDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Dlna/ProfileInfos': {
      $get:
        | { input: {}; output: DeviceProfileInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DeviceProfileInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DeviceProfileInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Dlna/Profiles': {
      $post:
        | { input: { json: DeviceProfile }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DeviceProfile }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DeviceProfile }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Dlna/Profiles/Default': {
      $get:
        | { input: {}; output: DeviceProfile; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DeviceProfile; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DeviceProfile; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Dlna/Profiles/:profileId': {
      $delete:
        | { input: { param: { profileId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { profileId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { profileId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { profileId: string } }
            output: DeviceProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileId: string } }
            output: DeviceProfile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { profileId: string } }
            output: DeviceProfile
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { profileId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { profileId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { profileId: string } } & { json: DeviceProfile }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Dlna/icons/:fileName': {
      $get:
        | {
            input: { param: { fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fileName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fileName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { fileName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | { input: { param: { fileName: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ConnectionManager': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ConnectionManager/ConnectionManager': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ConnectionManager/ConnectionManager.xml': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ConnectionManager/Control': {
      $post:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ContentDirectory': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ContentDirectory/ContentDirectory': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ContentDirectory/ContentDirectory.xml': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/ContentDirectory/Control': {
      $post:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/MediaReceiverRegistrar': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/MediaReceiverRegistrar/Control': {
      $post:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/MediaReceiverRegistrar/MediaReceiverRegistrar': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/MediaReceiverRegistrar/MediaReceiverRegistrar.xml': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/description': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/description.xml': {
      $get:
        | {
            input: { param: { serverId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { serverId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/Dlna/:serverId/icons/:fileName': {
      $get:
        | {
            input: { param: { serverId: string; fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serverId: string; fileName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serverId: string; fileName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { serverId: string; fileName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { serverId: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/Environment/DefaultDirectoryBrowser': {
      $get:
        | { input: {}; output: DefaultDirectoryBrowserInfoDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DefaultDirectoryBrowserInfoDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DefaultDirectoryBrowserInfoDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Environment/DirectoryContents': {
      $get:
        | {
            input: {
              query: {
                path: string
                includeFiles?: boolean | undefined
                includeDirectories?: boolean | undefined
              }
            }
            output: FileSystemEntryInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                path: string
                includeFiles?: boolean | undefined
                includeDirectories?: boolean | undefined
              }
            }
            output: FileSystemEntryInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                path: string
                includeFiles?: boolean | undefined
                includeDirectories?: boolean | undefined
              }
            }
            output: FileSystemEntryInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                path: string
                includeFiles?: boolean | undefined
                includeDirectories?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                path: string
                includeFiles?: boolean | undefined
                includeDirectories?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Environment/Drives': {
      $get:
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Environment/NetworkShares': {
      $get:
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: FileSystemEntryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Environment/ParentPath': {
      $get:
        | { input: { query: { path: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { query: { path: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { query: { path: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { query: { path: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { path: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Environment/ValidatePath': {
      $post:
        | { input: { json: ValidatePathDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: ValidatePathDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ValidatePathDto }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { json: ValidatePathDto }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ValidatePathDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ValidatePathDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/FallbackFont/Fonts': {
      $get:
        | { input: {}; output: FontFile[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: FontFile[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: FontFile[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/FallbackFont/Fonts/:name': {
      $get:
        | { input: { param: { name: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Genres': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Genres/:genreName': {
      $get:
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Genres/:name/Images/:imageType': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Genres/:name/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/GetUtcTime': {
      $get:
        | { input: {}; output: UtcTimeResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UtcTimeResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UtcTimeResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Images/General': {
      $get:
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Images/General/:name/:type': {
      $get:
        | {
            input: { param: { name: string; type: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; type: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; type: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; type: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; type: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Images/MediaInfo': {
      $get:
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Images/MediaInfo/:theme/:name': {
      $get:
        | {
            input: { param: { theme: string; name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Images/Ratings': {
      $get:
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ImageByNameInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Images/Ratings/:theme/:name': {
      $get:
        | {
            input: { param: { theme: string; name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { theme: string; name: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Images/Remote': {
      $get:
        | {
            input: { query: { imageUrl: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { imageUrl: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { imageUrl: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { imageUrl: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { imageUrl: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items': {
      $delete:
        | {
            input: { query: { ids?: (string[] | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { ids?: (string[] | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids?: (string[] | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { ids?: (string[] | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { ids?: (string[] | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/Counts': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: ItemCounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: ItemCounts
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: ItemCounts
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                isFavorite?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/Filters': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
              }
            }
            output: QueryFiltersLegacy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
              }
            }
            output: QueryFiltersLegacy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
              }
            }
            output: QueryFiltersLegacy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/Filters2': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isAiring?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                recursive?: (boolean | null) | undefined
              }
            }
            output: QueryFilters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isAiring?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                recursive?: (boolean | null) | undefined
              }
            }
            output: QueryFilters
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isAiring?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                recursive?: (boolean | null) | undefined
              }
            }
            output: QueryFilters
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isAiring?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                recursive?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isAiring?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                recursive?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Apply/:itemId': {
      $post:
        | {
            input: { param: { itemId: string } } & {
              query: { replaceAllImages?: boolean | undefined }
            } & { json: RemoteSearchResult }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: { replaceAllImages?: boolean | undefined }
            } & { json: RemoteSearchResult }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { replaceAllImages?: boolean | undefined }
            } & { json: RemoteSearchResult }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Book': {
      $post:
        | {
            input: { json: BookInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BookInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BookInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BookInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BookInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/BoxSet': {
      $post:
        | {
            input: { json: BoxSetInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BoxSetInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BoxSetInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BoxSetInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BoxSetInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Image': {
      $get:
        | {
            input: { query: { imageUrl: string; providerName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { imageUrl: string; providerName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { imageUrl: string; providerName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Movie': {
      $post:
        | {
            input: { json: MovieInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MovieInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MovieInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MovieInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: MovieInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/MusicAlbum': {
      $post:
        | {
            input: { json: AlbumInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AlbumInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AlbumInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AlbumInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: AlbumInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/MusicArtist': {
      $post:
        | {
            input: { json: ArtistInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ArtistInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ArtistInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ArtistInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ArtistInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/MusicVideo': {
      $post:
        | {
            input: { json: MusicVideoInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MusicVideoInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MusicVideoInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MusicVideoInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: MusicVideoInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Person': {
      $post:
        | {
            input: { json: PersonLookupInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PersonLookupInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PersonLookupInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PersonLookupInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: PersonLookupInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Series': {
      $post:
        | {
            input: { json: SeriesInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SeriesInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SeriesInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SeriesInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: SeriesInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/RemoteSearch/Trailer': {
      $post:
        | {
            input: { json: TrailerInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TrailerInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TrailerInfoRemoteSearchQuery }
            output: RemoteSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TrailerInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TrailerInfoRemoteSearchQuery }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:itemId': {
      $delete:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & { json: BaseItemDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Ancestors': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/ContentType': {
      $post:
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { contentType?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/CriticReviews': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Items/:itemId/Download': {
      $get:
        | { input: { param: { itemId: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { itemId: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/ExternalIdInfos': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: ExternalIdInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ExternalIdInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ExternalIdInfo[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/File': {
      $get:
        | { input: { param: { itemId: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { itemId: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Images': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: ImageInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ImageInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ImageInfo[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Images/:imageType': {
      $delete:
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: { imageIndex?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Images/:imageType/:imageIndex': {
      $delete:
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                tag?: (string | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                format?: ImageFormat | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Images/:imageType/:imageIndex/Index': {
      $post:
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; imageType: ImageType; imageIndex: number } } & {
              query: { newIndex?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/Images/:imageType/:imageIndex/:tag/:format/:maxWidth/:maxHeight/:percentPlayed/:unplayedCount': {
      $get:
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                imageType: ImageType
                maxWidth: number
                maxHeight: number
                tag: string
                format: ImageFormat
                percentPlayed: number
                unplayedCount: number
                imageIndex: number
              }
            } & {
              query: {
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/MetadataEditor': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: MetadataEditorInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: MetadataEditorInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: MetadataEditorInfo
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/PlaybackInfo': {
      $get:
        | {
            input: { param: { itemId: string } } & { query: { userId: string } }
            output: PlaybackInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & { query: { userId: string } }
            output: PlaybackInfoResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & { query: { userId: string } }
            output: PlaybackInfoResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & { query: { userId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                liveStreamId?: (string | null) | undefined
                autoOpenLiveStream?: (boolean | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
                enableTranscoding?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
              }
            } & { json: PlaybackInfoDto }
            output: PlaybackInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                liveStreamId?: (string | null) | undefined
                autoOpenLiveStream?: (boolean | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
                enableTranscoding?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
              }
            } & { json: PlaybackInfoDto }
            output: PlaybackInfoResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                liveStreamId?: (string | null) | undefined
                autoOpenLiveStream?: (boolean | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
                enableTranscoding?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
              }
            } & { json: PlaybackInfoDto }
            output: PlaybackInfoResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                liveStreamId?: (string | null) | undefined
                autoOpenLiveStream?: (boolean | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
                enableTranscoding?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
              }
            } & { json: PlaybackInfoDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                liveStreamId?: (string | null) | undefined
                autoOpenLiveStream?: (boolean | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
                enableTranscoding?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
              }
            } & { json: PlaybackInfoDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:itemId/Refresh': {
      $post:
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                metadataRefreshMode?: MetadataRefreshMode | undefined
                imageRefreshMode?: MetadataRefreshMode | undefined
                replaceAllMetadata?: boolean | undefined
                replaceAllImages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/RemoteImages': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: RemoteImageResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: RemoteImageResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: RemoteImageResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                type?: ImageType | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                providerName?: (string | null) | undefined
                includeAllLanguages?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/RemoteImages/Download': {
      $post:
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: { type: ImageType; imageUrl?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/RemoteImages/Providers': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: ImageProviderInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ImageProviderInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ImageProviderInfo[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/RemoteSearch/Subtitles/:language': {
      $get:
        | {
            input: { param: { itemId: string; language: string } } & {
              query: { isPerfectMatch?: (boolean | null) | undefined }
            }
            output: RemoteSubtitleInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string; language: string } } & {
              query: { isPerfectMatch?: (boolean | null) | undefined }
            }
            output: RemoteSubtitleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; language: string } } & {
              query: { isPerfectMatch?: (boolean | null) | undefined }
            }
            output: RemoteSubtitleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; language: string } } & {
              query: { isPerfectMatch?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; language: string } } & {
              query: { isPerfectMatch?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:itemId/RemoteSearch/Subtitles/:subtitleId': {
      $post:
        | {
            input: { param: { itemId: string; subtitleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; subtitleId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; subtitleId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Items/:itemId/ThemeMedia': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: AllThemeMediaResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: AllThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: AllThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/Items/:itemId/ThemeSongs': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Items/:itemId/ThemeVideos': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ThemeMediaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                userId?: (string | null) | undefined
                inheritFromParent?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Libraries/AvailableOptions': {
      $get:
        | {
            input: {
              query: {
                libraryContentType?: (string | null) | undefined
                isNewLibrary?: boolean | undefined
              }
            }
            output: LibraryOptionsResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                libraryContentType?: (string | null) | undefined
                isNewLibrary?: boolean | undefined
              }
            }
            output: LibraryOptionsResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryContentType?: (string | null) | undefined
                isNewLibrary?: boolean | undefined
              }
            }
            output: LibraryOptionsResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryContentType?: (string | null) | undefined
                isNewLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                libraryContentType?: (string | null) | undefined
                isNewLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/Media/Updated': {
      $post:
        | { input: { json: MediaUpdateInfoDto[] }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: MediaUpdateInfoDto[] }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: MediaUpdateInfoDto[] }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Library/MediaFolders': {
      $get:
        | {
            input: { query: { isHidden?: (boolean | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { isHidden?: (boolean | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { isHidden?: (boolean | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { isHidden?: (boolean | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { isHidden?: (boolean | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/Movies/Added': {
      $post:
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/Movies/Updated': {
      $post:
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { tmdbId?: (string | null) | undefined; imdbId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/PhysicalPaths': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Library/Refresh': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Library/Series/Added': {
      $post:
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/Series/Updated': {
      $post:
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { tvdbId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/VirtualFolders': {
      $delete:
        | {
            input: {
              query: { name?: (string | null) | undefined; refreshLibrary?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { name?: (string | null) | undefined; refreshLibrary?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { name?: (string | null) | undefined; refreshLibrary?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | { input: {}; output: VirtualFolderInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: VirtualFolderInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: VirtualFolderInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                collectionType?: (string | null) | undefined
                paths?: (string[] | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            } & { json: AddVirtualFolderDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                collectionType?: (string | null) | undefined
                paths?: (string[] | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            } & { json: AddVirtualFolderDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                collectionType?: (string | null) | undefined
                paths?: (string[] | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            } & { json: AddVirtualFolderDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/VirtualFolders/LibraryOptions': {
      $post:
        | {
            input: { json: UpdateLibraryOptionsDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateLibraryOptionsDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateLibraryOptionsDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/VirtualFolders/Name': {
      $post:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 409
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                newName?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/Library/VirtualFolders/Paths': {
      $delete:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                path?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                path?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                path?: (string | null) | undefined
                refreshLibrary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { query: { refreshLibrary?: boolean | undefined } } & { json: MediaPathDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { refreshLibrary?: boolean | undefined } } & { json: MediaPathDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { refreshLibrary?: boolean | undefined } } & { json: MediaPathDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Library/VirtualFolders/Paths/Update': {
      $post:
        | {
            input: { query: { name?: (string | null) | undefined } } & { json: MediaPathInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { name?: (string | null) | undefined } } & { json: MediaPathInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { name?: (string | null) | undefined } } & { json: MediaPathInfo }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveStreams/Close': {
      $post:
        | {
            input: { query: { liveStreamId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { liveStreamId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { liveStreamId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveStreams/Open': {
      $post:
        | {
            input: {
              query: {
                openToken?: (string | null) | undefined
                userId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                itemId?: (string | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
              }
            } & { json: OpenLiveStreamDto }
            output: LiveStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                openToken?: (string | null) | undefined
                userId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                itemId?: (string | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
              }
            } & { json: OpenLiveStreamDto }
            output: LiveStreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                openToken?: (string | null) | undefined
                userId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                itemId?: (string | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
              }
            } & { json: OpenLiveStreamDto }
            output: LiveStreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                openToken?: (string | null) | undefined
                userId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                itemId?: (string | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
              }
            } & { json: OpenLiveStreamDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                openToken?: (string | null) | undefined
                userId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                maxStreamingBitrate?: (number | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                itemId?: (string | null) | undefined
                enableDirectPlay?: (boolean | null) | undefined
                enableDirectStream?: (boolean | null) | undefined
              }
            } & { json: OpenLiveStreamDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/ChannelMappingOptions': {
      $get:
        | {
            input: { query: { providerId?: (string | null) | undefined } }
            output: ChannelMappingOptionsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { providerId?: (string | null) | undefined } }
            output: ChannelMappingOptionsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { providerId?: (string | null) | undefined } }
            output: ChannelMappingOptionsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { providerId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { providerId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/ChannelMappings': {
      $post:
        | {
            input: { json: SetChannelMappingDto }
            output: TunerChannelMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SetChannelMappingDto }
            output: TunerChannelMapping
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SetChannelMappingDto }
            output: TunerChannelMapping
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: SetChannelMappingDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SetChannelMappingDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/Channels': {
      $get:
        | {
            input: {
              query: {
                type?: ChannelType | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                limit?: (number | null) | undefined
                isFavorite?: (boolean | null) | undefined
                isLiked?: (boolean | null) | undefined
                isDisliked?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string[] | null) | undefined
                sortOrder?: SortOrder | undefined
                enableFavoriteSorting?: boolean | undefined
                addCurrentProgram?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: ChannelType | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                limit?: (number | null) | undefined
                isFavorite?: (boolean | null) | undefined
                isLiked?: (boolean | null) | undefined
                isDisliked?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string[] | null) | undefined
                sortOrder?: SortOrder | undefined
                enableFavoriteSorting?: boolean | undefined
                addCurrentProgram?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: ChannelType | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                limit?: (number | null) | undefined
                isFavorite?: (boolean | null) | undefined
                isLiked?: (boolean | null) | undefined
                isDisliked?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string[] | null) | undefined
                sortOrder?: SortOrder | undefined
                enableFavoriteSorting?: boolean | undefined
                addCurrentProgram?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: ChannelType | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                limit?: (number | null) | undefined
                isFavorite?: (boolean | null) | undefined
                isLiked?: (boolean | null) | undefined
                isDisliked?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string[] | null) | undefined
                sortOrder?: SortOrder | undefined
                enableFavoriteSorting?: boolean | undefined
                addCurrentProgram?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type?: ChannelType | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                limit?: (number | null) | undefined
                isFavorite?: (boolean | null) | undefined
                isLiked?: (boolean | null) | undefined
                isDisliked?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string[] | null) | undefined
                sortOrder?: SortOrder | undefined
                enableFavoriteSorting?: boolean | undefined
                addCurrentProgram?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Channels/:channelId': {
      $get:
        | {
            input: { param: { channelId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channelId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { channelId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/GuideInfo': {
      $get:
        | { input: {}; output: GuideInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GuideInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: GuideInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/Info': {
      $get:
        | { input: {}; output: LiveTvInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LiveTvInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LiveTvInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/ListingProviders': {
      $delete:
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                pw?: (string | null) | undefined
                validateListings?: boolean | undefined
                validateLogin?: boolean | undefined
              }
            } & { json: ListingsProviderInfo }
            output: ListingsProviderInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pw?: (string | null) | undefined
                validateListings?: boolean | undefined
                validateLogin?: boolean | undefined
              }
            } & { json: ListingsProviderInfo }
            output: ListingsProviderInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pw?: (string | null) | undefined
                validateListings?: boolean | undefined
                validateLogin?: boolean | undefined
              }
            } & { json: ListingsProviderInfo }
            output: ListingsProviderInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pw?: (string | null) | undefined
                validateListings?: boolean | undefined
                validateLogin?: boolean | undefined
              }
            } & { json: ListingsProviderInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                pw?: (string | null) | undefined
                validateListings?: boolean | undefined
                validateLogin?: boolean | undefined
              }
            } & { json: ListingsProviderInfo }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/ListingProviders/Default': {
      $get:
        | { input: {}; output: ListingsProviderInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ListingsProviderInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ListingsProviderInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/ListingProviders/Lineups': {
      $get:
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                type?: (string | null) | undefined
                location?: (string | null) | undefined
                country?: (string | null) | undefined
              }
            }
            output: NameIdPair[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                type?: (string | null) | undefined
                location?: (string | null) | undefined
                country?: (string | null) | undefined
              }
            }
            output: NameIdPair[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                type?: (string | null) | undefined
                location?: (string | null) | undefined
                country?: (string | null) | undefined
              }
            }
            output: NameIdPair[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                type?: (string | null) | undefined
                location?: (string | null) | undefined
                country?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                type?: (string | null) | undefined
                location?: (string | null) | undefined
                country?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/ListingProviders/SchedulesDirect/Countries': {
      $get:
        | { input: {}; output: File; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/LiveRecordings/:recordingId/stream': {
      $get:
        | {
            input: { param: { recordingId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/LiveTv/LiveStreamFiles/:streamId/stream.{container}': {
      $get:
        | {
            input: { param: { streamId: string; container: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { streamId: string; container: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { streamId: string; container: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { streamId: string; container: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/LiveTv/Programs': {
      $get:
        | {
            input: {
              query: {
                channelIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                minStartDate?: (string | null) | undefined
                hasAired?: (boolean | null) | undefined
                isAiring?: (boolean | null) | undefined
                maxStartDate?: (string | null) | undefined
                minEndDate?: (string | null) | undefined
                maxEndDate?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortBy?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                librarySeriesId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channelIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                minStartDate?: (string | null) | undefined
                hasAired?: (boolean | null) | undefined
                isAiring?: (boolean | null) | undefined
                maxStartDate?: (string | null) | undefined
                minEndDate?: (string | null) | undefined
                maxEndDate?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortBy?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                librarySeriesId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                minStartDate?: (string | null) | undefined
                hasAired?: (boolean | null) | undefined
                isAiring?: (boolean | null) | undefined
                maxStartDate?: (string | null) | undefined
                minEndDate?: (string | null) | undefined
                maxEndDate?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortBy?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                librarySeriesId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                minStartDate?: (string | null) | undefined
                hasAired?: (boolean | null) | undefined
                isAiring?: (boolean | null) | undefined
                maxStartDate?: (string | null) | undefined
                minEndDate?: (string | null) | undefined
                maxEndDate?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortBy?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                librarySeriesId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                channelIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                minStartDate?: (string | null) | undefined
                hasAired?: (boolean | null) | undefined
                isAiring?: (boolean | null) | undefined
                maxStartDate?: (string | null) | undefined
                minEndDate?: (string | null) | undefined
                maxEndDate?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortBy?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                genres?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                librarySeriesId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: GetProgramsDto }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetProgramsDto }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GetProgramsDto }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: GetProgramsDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: GetProgramsDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/Programs/Recommended': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                isAiring?: (boolean | null) | undefined
                hasAired?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                isAiring?: (boolean | null) | undefined
                hasAired?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                isAiring?: (boolean | null) | undefined
                hasAired?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                isAiring?: (boolean | null) | undefined
                hasAired?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                isAiring?: (boolean | null) | undefined
                hasAired?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Programs/:programId': {
      $get:
        | {
            input: { param: { programId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { programId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { programId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { programId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { programId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Recordings': {
      $get:
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isLibraryItem?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isLibraryItem?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isLibraryItem?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isLibraryItem?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isLibraryItem?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Recordings/Folders': {
      $get:
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Recordings/Groups': {
      $get:
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Recordings/Groups/:groupId': {
      $get:
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { groupId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { groupId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/LiveTv/Recordings/Series': {
      $get:
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                groupId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                groupId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                groupId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                groupId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                userId?: (string | null) | undefined
                groupId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                status?: RecordingStatus | undefined
                isInProgress?: (boolean | null) | undefined
                seriesTimerId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Recordings/:recordingId': {
      $delete:
        | {
            input: { param: { recordingId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { recordingId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { recordingId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { recordingId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { recordingId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recordingId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recordingId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recordingId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { recordingId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/SeriesTimers': {
      $get:
        | {
            input: {
              query: { sortBy?: (string | null) | undefined; sortOrder?: SortOrder | undefined }
            }
            output: SeriesTimerInfoDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { sortBy?: (string | null) | undefined; sortOrder?: SortOrder | undefined }
            }
            output: SeriesTimerInfoDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { sortBy?: (string | null) | undefined; sortOrder?: SortOrder | undefined }
            }
            output: SeriesTimerInfoDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { sortBy?: (string | null) | undefined; sortOrder?: SortOrder | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { sortBy?: (string | null) | undefined; sortOrder?: SortOrder | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | { input: { json: SeriesTimerInfoDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SeriesTimerInfoDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SeriesTimerInfoDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/SeriesTimers/:timerId': {
      $delete:
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 403 }
      $get:
        | {
            input: { param: { timerId: string } }
            output: SeriesTimerInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { timerId: string } }
            output: SeriesTimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { timerId: string } }
            output: SeriesTimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { timerId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { timerId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { timerId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { timerId: string } } & { json: SeriesTimerInfoDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { timerId: string } } & { json: SeriesTimerInfoDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { timerId: string } } & { json: SeriesTimerInfoDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Timers': {
      $get:
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                seriesTimerId?: (string | null) | undefined
                isActive?: (boolean | null) | undefined
                isScheduled?: (boolean | null) | undefined
              }
            }
            output: TimerInfoDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                seriesTimerId?: (string | null) | undefined
                isActive?: (boolean | null) | undefined
                isScheduled?: (boolean | null) | undefined
              }
            }
            output: TimerInfoDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                seriesTimerId?: (string | null) | undefined
                isActive?: (boolean | null) | undefined
                isScheduled?: (boolean | null) | undefined
              }
            }
            output: TimerInfoDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                seriesTimerId?: (string | null) | undefined
                isActive?: (boolean | null) | undefined
                isScheduled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                channelId?: (string | null) | undefined
                seriesTimerId?: (string | null) | undefined
                isActive?: (boolean | null) | undefined
                isScheduled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | { input: { json: TimerInfoDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: TimerInfoDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: TimerInfoDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/Timers/Defaults': {
      $get:
        | {
            input: { query: { programId?: (string | null) | undefined } }
            output: SeriesTimerInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { programId?: (string | null) | undefined } }
            output: SeriesTimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { programId?: (string | null) | undefined } }
            output: SeriesTimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { programId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { programId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Timers/:timerId': {
      $delete:
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 403 }
      $get:
        | {
            input: { param: { timerId: string } }
            output: TimerInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { timerId: string } }
            output: TimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { timerId: string } }
            output: TimerInfoDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { timerId: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { param: { timerId: string } } & { json: TimerInfoDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { timerId: string } } & { json: TimerInfoDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { timerId: string } } & { json: TimerInfoDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/TunerHosts': {
      $delete:
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: TunerHostInfo }
            output: TunerHostInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TunerHostInfo }
            output: TunerHostInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TunerHostInfo }
            output: TunerHostInfo
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: TunerHostInfo }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: TunerHostInfo }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/TunerHosts/Types': {
      $get:
        | { input: {}; output: NameIdPair[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/LiveTv/Tuners/Discover': {
      $get:
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Tuners/Discvover': {
      $get:
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: TunerHostInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { newDevicesOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/LiveTv/Tuners/:tunerId/Reset': {
      $post:
        | { input: { param: { tunerId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { tunerId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tunerId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Localization/Countries': {
      $get:
        | { input: {}; output: CountryInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CountryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Localization/Cultures': {
      $get:
        | { input: {}; output: CultureDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CultureDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CultureDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Localization/Options': {
      $get:
        | { input: {}; output: LocalizationOption[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LocalizationOption[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LocalizationOption[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Localization/ParentalRatings': {
      $get:
        | { input: {}; output: ParentalRating[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ParentalRating[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ParentalRating[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Movies/Recommendations': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                categoryLimit?: number | undefined
                itemLimit?: number | undefined
              }
            }
            output: RecommendationDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                categoryLimit?: number | undefined
                itemLimit?: number | undefined
              }
            }
            output: RecommendationDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                categoryLimit?: number | undefined
                itemLimit?: number | undefined
              }
            }
            output: RecommendationDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                categoryLimit?: number | undefined
                itemLimit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                categoryLimit?: number | undefined
                itemLimit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Movies/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/MusicGenres': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/MusicGenres/:genreName': {
      $get:
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { genreName: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/MusicGenres/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/MusicGenres/:name/Images/:imageType': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/MusicGenres/:name/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/MusicGenres/:name/InstantMix': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Notifications/Admin': {
      $post:
        | {
            input: {
              query: {
                url?: (string | null) | undefined
                level?: NotificationLevel | undefined
                name?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                url?: (string | null) | undefined
                level?: NotificationLevel | undefined
                name?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                url?: (string | null) | undefined
                level?: NotificationLevel | undefined
                name?: (string | null) | undefined
                description?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Notifications/Services': {
      $get:
        | { input: {}; output: NameIdPair[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NameIdPair[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Notifications/Types': {
      $get:
        | { input: {}; output: NotificationTypeInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotificationTypeInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NotificationTypeInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Notifications/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: NotificationResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: NotificationResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: NotificationResultDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Notifications/:userId/Read': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Notifications/:userId/Summary': {
      $get:
        | {
            input: { param: { userId: string } }
            output: NotificationsSummaryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: NotificationsSummaryDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: NotificationsSummaryDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Notifications/:userId/Unread': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Packages': {
      $get:
        | { input: {}; output: PackageInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PackageInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PackageInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Packages/Installed/:name': {
      $post:
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                assemblyGuid?: (string | null) | undefined
                version?: (string | null) | undefined
                repositoryUrl?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Packages/Installing/:packageId': {
      $delete:
        | { input: { param: { packageId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { packageId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { packageId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Packages/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { assemblyGuid?: (string | null) | undefined }
            }
            output: PackageInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { assemblyGuid?: (string | null) | undefined }
            }
            output: PackageInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { assemblyGuid?: (string | null) | undefined }
            }
            output: PackageInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { assemblyGuid?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              query: { assemblyGuid?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Persons': {
      $get:
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludePersonTypes?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                appearsInItemId?: (string | null) | undefined
                userId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludePersonTypes?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                appearsInItemId?: (string | null) | undefined
                userId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludePersonTypes?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                appearsInItemId?: (string | null) | undefined
                userId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludePersonTypes?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                appearsInItemId?: (string | null) | undefined
                userId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludePersonTypes?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                appearsInItemId?: (string | null) | undefined
                userId?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Persons/:name': {
      $get:
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Persons/:name/Images/:imageType': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Persons/:name/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Playback/BitrateTest': {
      $get:
        | {
            input: { query: { size?: number | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { size?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { size?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { size?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { size?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Playlists': {
      $post:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                mediaType?: (string | null) | undefined
              }
            } & { json: CreatePlaylistDto }
            output: PlaylistCreationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                mediaType?: (string | null) | undefined
              }
            } & { json: CreatePlaylistDto }
            output: PlaylistCreationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                mediaType?: (string | null) | undefined
              }
            } & { json: CreatePlaylistDto }
            output: PlaylistCreationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                mediaType?: (string | null) | undefined
              }
            } & { json: CreatePlaylistDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                ids?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                mediaType?: (string | null) | undefined
              }
            } & { json: CreatePlaylistDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Playlists/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Playlists/:playlistId/Items': {
      $delete:
        | {
            input: { param: { playlistId: string } } & {
              query: { entryIds?: (string[] | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { playlistId: string } } & {
              query: { entryIds?: (string[] | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { playlistId: string } } & {
              query: { entryIds?: (string[] | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { playlistId: string } } & {
              query: {
                userId: string
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { playlistId: string } } & {
              query: { ids?: (string[] | null) | undefined; userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { playlistId: string } } & {
              query: { ids?: (string[] | null) | undefined; userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { playlistId: string } } & {
              query: { ids?: (string[] | null) | undefined; userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Playlists/:playlistId/Items/:itemId/Move/:newIndex': {
      $post:
        | {
            input: { param: { playlistId: string; itemId: string; newIndex: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { playlistId: string; itemId: string; newIndex: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { playlistId: string; itemId: string; newIndex: number } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Plugins': {
      $get:
        | { input: {}; output: PluginInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PluginInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PluginInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Plugins/SecurityInfo': {
      $post:
        | { input: { json: PluginSecurityInfo }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PluginSecurityInfo }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PluginSecurityInfo }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Plugins/:pluginId': {
      $delete:
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/Configuration': {
      $get:
        | {
            input: { param: { pluginId: string } }
            output: BasePluginConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pluginId: string } }
            output: BasePluginConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pluginId: string } }
            output: BasePluginConfiguration
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/Manifest': {
      $post:
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { pluginId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/:version': {
      $delete:
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/:version/Disable': {
      $post:
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/:version/Enable': {
      $post:
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Plugins/:pluginId/:version/Image': {
      $get:
        | {
            input: { param: { pluginId: string; version: Version } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { pluginId: string; version: Version } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Providers/Subtitles/Subtitles/:id': {
      $get:
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/QuickConnect/Activate': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 403 }
    }
  } & {
    '/QuickConnect/Authorize': {
      $post:
        | { input: { query: { code: string } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { query: { code: string } }; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: { query: { code: string } }; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: { query: { code: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { query: { code: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { code: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { code: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/QuickConnect/Available': {
      $post:
        | {
            input: { query: { status?: QuickConnectState | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { status?: QuickConnectState | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { status?: QuickConnectState | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/QuickConnect/Connect': {
      $get:
        | {
            input: { query: { secret: string } }
            output: QuickConnectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { secret: string } }
            output: QuickConnectResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { secret: string } }
            output: QuickConnectResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { secret: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { secret: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { secret: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/QuickConnect/Deauthorize': {
      $post:
        | { input: {}; output: number; outputFormat: 'json'; status: 200 }
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/QuickConnect/Initiate': {
      $get:
        | { input: {}; output: QuickConnectResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuickConnectResult; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QuickConnectResult; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/QuickConnect/Status': {
      $get:
        | { input: {}; output: QuickConnectState; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuickConnectState; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QuickConnectState; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Repositories': {
      $get:
        | { input: {}; output: RepositoryInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RepositoryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: RepositoryInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: RepositoryInfo[] | null }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: RepositoryInfo[] | null }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: RepositoryInfo[] | null }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/ScheduledTasks': {
      $get:
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isEnabled?: (boolean | null) | undefined
              }
            }
            output: TaskInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isEnabled?: (boolean | null) | undefined
              }
            }
            output: TaskInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isEnabled?: (boolean | null) | undefined
              }
            }
            output: TaskInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isEnabled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isEnabled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/ScheduledTasks/Running/:taskId': {
      $delete:
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/ScheduledTasks/:taskId': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: TaskInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: string } }
            output: TaskInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { taskId: string } }
            output: TaskInfo
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { taskId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/ScheduledTasks/:taskId/Triggers': {
      $post:
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { taskId: string } } & { json: TaskTriggerInfo[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Search/Hints': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                userId?: (string | null) | undefined
                searchTerm: string
                includeItemTypes?: (string[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                includePeople?: boolean | undefined
                includeMedia?: boolean | undefined
                includeGenres?: boolean | undefined
                includeStudios?: boolean | undefined
                includeArtists?: boolean | undefined
              }
            }
            output: SearchHintResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                userId?: (string | null) | undefined
                searchTerm: string
                includeItemTypes?: (string[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                includePeople?: boolean | undefined
                includeMedia?: boolean | undefined
                includeGenres?: boolean | undefined
                includeStudios?: boolean | undefined
                includeArtists?: boolean | undefined
              }
            }
            output: SearchHintResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                userId?: (string | null) | undefined
                searchTerm: string
                includeItemTypes?: (string[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                includePeople?: boolean | undefined
                includeMedia?: boolean | undefined
                includeGenres?: boolean | undefined
                includeStudios?: boolean | undefined
                includeArtists?: boolean | undefined
              }
            }
            output: SearchHintResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                userId?: (string | null) | undefined
                searchTerm: string
                includeItemTypes?: (string[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                includePeople?: boolean | undefined
                includeMedia?: boolean | undefined
                includeGenres?: boolean | undefined
                includeStudios?: boolean | undefined
                includeArtists?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                userId?: (string | null) | undefined
                searchTerm: string
                includeItemTypes?: (string[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                parentId?: (string | null) | undefined
                isMovie?: (boolean | null) | undefined
                isSeries?: (boolean | null) | undefined
                isNews?: (boolean | null) | undefined
                isKids?: (boolean | null) | undefined
                isSports?: (boolean | null) | undefined
                includePeople?: boolean | undefined
                includeMedia?: boolean | undefined
                includeGenres?: boolean | undefined
                includeStudios?: boolean | undefined
                includeArtists?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions': {
      $get:
        | {
            input: {
              query: {
                controllableByUserId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                activeWithinSeconds?: (number | null) | undefined
              }
            }
            output: SessionInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                controllableByUserId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                activeWithinSeconds?: (number | null) | undefined
              }
            }
            output: SessionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                controllableByUserId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                activeWithinSeconds?: (number | null) | undefined
              }
            }
            output: SessionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                controllableByUserId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                activeWithinSeconds?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                controllableByUserId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                activeWithinSeconds?: (number | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/Capabilities': {
      $post:
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                playableMediaTypes?: (string[] | null) | undefined
                supportedCommands?: (GeneralCommandType[] | null) | undefined
                supportsMediaControl?: boolean | undefined
                supportsSync?: boolean | undefined
                supportsPersistentIdentifier?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                playableMediaTypes?: (string[] | null) | undefined
                supportedCommands?: (GeneralCommandType[] | null) | undefined
                supportsMediaControl?: boolean | undefined
                supportsSync?: boolean | undefined
                supportsPersistentIdentifier?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: (string | null) | undefined
                playableMediaTypes?: (string[] | null) | undefined
                supportedCommands?: (GeneralCommandType[] | null) | undefined
                supportsMediaControl?: boolean | undefined
                supportsSync?: boolean | undefined
                supportsPersistentIdentifier?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/Capabilities/Full': {
      $post:
        | {
            input: { query: { id?: (string | null) | undefined } } & { json: ClientCapabilitiesDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { id?: (string | null) | undefined } } & { json: ClientCapabilitiesDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id?: (string | null) | undefined } } & { json: ClientCapabilitiesDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/Logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Sessions/Playing': {
      $post:
        | { input: { json: PlaybackStartInfo }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PlaybackStartInfo }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PlaybackStartInfo }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Sessions/Playing/Ping': {
      $post:
        | {
            input: { query: { playSessionId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { playSessionId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { playSessionId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/Playing/Progress': {
      $post:
        | { input: { json: PlaybackProgressInfo }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PlaybackProgressInfo }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PlaybackProgressInfo }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Sessions/Playing/Stopped': {
      $post:
        | { input: { json: PlaybackStopInfo }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PlaybackStopInfo }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PlaybackStopInfo }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Sessions/Viewing': {
      $post:
        | {
            input: { query: { sessionId?: (string | null) | undefined; itemId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { sessionId?: (string | null) | undefined; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { sessionId?: (string | null) | undefined; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Command': {
      $post:
        | {
            input: { param: { sessionId: string } } & { json: GeneralCommand }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string } } & { json: GeneralCommand }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string } } & { json: GeneralCommand }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Command/:command': {
      $post:
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Message': {
      $post:
        | {
            input: { param: { sessionId: string } } & {
              query: {
                text: string
                header?: (string | null) | undefined
                timeoutMs?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string } } & {
              query: {
                text: string
                header?: (string | null) | undefined
                timeoutMs?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string } } & {
              query: {
                text: string
                header?: (string | null) | undefined
                timeoutMs?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Playing': {
      $post:
        | {
            input: { param: { sessionId: string } } & {
              query: {
                playCommand: PlayCommand
                itemIds: string[]
                startPositionTicks?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string } } & {
              query: {
                playCommand: PlayCommand
                itemIds: string[]
                startPositionTicks?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string } } & {
              query: {
                playCommand: PlayCommand
                itemIds: string[]
                startPositionTicks?: (bigint | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Playing/:command': {
      $post:
        | {
            input: { param: { sessionId: string; command: PlaystateCommand } } & {
              query: {
                seekPositionTicks?: (bigint | null) | undefined
                controllingUserId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string; command: PlaystateCommand } } & {
              query: {
                seekPositionTicks?: (bigint | null) | undefined
                controllingUserId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string; command: PlaystateCommand } } & {
              query: {
                seekPositionTicks?: (bigint | null) | undefined
                controllingUserId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/System/:command': {
      $post:
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string; command: GeneralCommandType } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/User/:userId': {
      $delete:
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Sessions/:sessionId/Viewing': {
      $post:
        | {
            input: { param: { sessionId: string } } & {
              query: { itemType: string; itemId: string; itemName: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sessionId: string } } & {
              query: { itemType: string; itemId: string; itemName: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sessionId: string } } & {
              query: { itemType: string; itemId: string; itemName: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Shows/NextUp': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                seriesId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                seriesId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                seriesId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                seriesId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                seriesId?: (string | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Shows/Upcoming': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                parentId?: (string | null) | undefined
                enableImges?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Shows/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Shows/:seriesId/Episodes': {
      $get:
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                season?: (number | null) | undefined
                seasonId?: (string | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                startItemId?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                sortBy?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Shows/:seriesId/Seasons': {
      $get:
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                userId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                isSpecialSeason?: (boolean | null) | undefined
                isMissing?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Songs/:id/InstantMix': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Startup/Complete': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Startup/Configuration': {
      $get:
        | { input: {}; output: StartupConfigurationDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StartupConfigurationDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: StartupConfigurationDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: StartupConfigurationDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: StartupConfigurationDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: StartupConfigurationDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Startup/FirstUser': {
      $get:
        | { input: {}; output: StartupUserDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StartupUserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: StartupUserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Startup/RemoteAccess': {
      $post:
        | { input: { json: StartupRemoteAccessDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: StartupRemoteAccessDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: StartupRemoteAccessDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Startup/User': {
      $get:
        | { input: {}; output: StartupUserDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StartupUserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: StartupUserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { json: StartupUserDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: StartupUserDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: StartupUserDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Studios': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                enableImages?: (boolean | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Studios/:name': {
      $get:
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Studios/:name/Images/:imageType': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Studios/:name/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { name: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/SyncPlay/Buffering': {
      $post:
        | { input: { json: BufferRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: BufferRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BufferRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Join': {
      $post:
        | { input: { json: JoinGroupRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: JoinGroupRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: JoinGroupRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Leave': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/List': {
      $get:
        | { input: {}; output: GroupInfoDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GroupInfoDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: GroupInfoDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/MovePlaylistItem': {
      $post:
        | {
            input: { json: MovePlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: MovePlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: MovePlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/SyncPlay/New': {
      $post:
        | { input: { json: NewGroupRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: NewGroupRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: NewGroupRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/NextItem': {
      $post:
        | { input: { json: NextItemRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: NextItemRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: NextItemRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Pause': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Ping': {
      $post:
        | { input: { json: PingRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PingRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PingRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/PreviousItem': {
      $post:
        | { input: { json: PreviousItemRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PreviousItemRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PreviousItemRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Queue': {
      $post:
        | { input: { json: QueueRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: QueueRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: QueueRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Ready': {
      $post:
        | { input: { json: ReadyRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: ReadyRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ReadyRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/RemoveFromPlaylist': {
      $post:
        | {
            input: { json: RemoveFromPlaylistRequestDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: RemoveFromPlaylistRequestDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: RemoveFromPlaylistRequestDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/SyncPlay/Seek': {
      $post:
        | { input: { json: SeekRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SeekRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SeekRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/SetIgnoreWait': {
      $post:
        | { input: { json: IgnoreWaitRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: IgnoreWaitRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: IgnoreWaitRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/SetNewQueue': {
      $post:
        | { input: { json: PlayRequestDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PlayRequestDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PlayRequestDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/SetPlaylistItem': {
      $post:
        | {
            input: { json: SetPlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SetPlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: SetPlaylistItemRequestDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/SyncPlay/SetRepeatMode': {
      $post:
        | {
            input: { json: SetRepeatModeRequestDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SetRepeatModeRequestDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: SetRepeatModeRequestDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/SyncPlay/SetShuffleMode': {
      $post:
        | {
            input: { json: SetShuffleModeRequestDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SetShuffleModeRequestDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: SetShuffleModeRequestDto }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/SyncPlay/Stop': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/SyncPlay/Unpause': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/ActivityLog/Entries': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                minDate?: (string | null) | undefined
                hasUserId?: (boolean | null) | undefined
              }
            }
            output: ActivityLogEntryQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                minDate?: (string | null) | undefined
                hasUserId?: (boolean | null) | undefined
              }
            }
            output: ActivityLogEntryQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                minDate?: (string | null) | undefined
                hasUserId?: (boolean | null) | undefined
              }
            }
            output: ActivityLogEntryQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                minDate?: (string | null) | undefined
                hasUserId?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                minDate?: (string | null) | undefined
                hasUserId?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/System/Configuration': {
      $get:
        | { input: {}; output: ServerConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerConfiguration; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerConfiguration; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { json: ServerConfiguration }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: ServerConfiguration }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ServerConfiguration }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Configuration/MetadataOptions/Default': {
      $get:
        | { input: {}; output: MetadataOptions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MetadataOptions; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MetadataOptions; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Configuration/:key': {
      $get:
        | { input: { param: { key: string } }; output: File; outputFormat: 'json'; status: 200 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Endpoint': {
      $get:
        | { input: {}; output: EndPointInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: EndPointInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: EndPointInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Info': {
      $get:
        | { input: {}; output: SystemInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SystemInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Info/Public': {
      $get:
        | { input: {}; output: PublicSystemInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PublicSystemInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PublicSystemInfo; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/System/Logs': {
      $get:
        | { input: {}; output: LogFile[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LogFile[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LogFile[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Logs/Log': {
      $get:
        | { input: { query: { name: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/MediaEncoder/Path': {
      $post:
        | { input: { json: MediaEncoderPathDto }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: MediaEncoderPathDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: MediaEncoderPathDto }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Ping': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
      $post:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/System/Restart': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/Shutdown': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/System/WakeOnLanInfo': {
      $get:
        | { input: {}; output: WakeOnLanInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: WakeOnLanInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: WakeOnLanInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Trailers': {
      $get:
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userId?: (string | null) | undefined
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Trailers/:itemId/Similar': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                excludeArtistIds?: (string[] | null) | undefined
                userId?: (string | null) | undefined
                limit?: (number | null) | undefined
                fields?: (ItemFields[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users': {
      $get:
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isDisabled?: (boolean | null) | undefined
              }
            }
            output: UserDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isDisabled?: (boolean | null) | undefined
              }
            }
            output: UserDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isDisabled?: (boolean | null) | undefined
              }
            }
            output: UserDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isDisabled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                isHidden?: (boolean | null) | undefined
                isDisabled?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/AuthenticateByName': {
      $post:
        | {
            input: { json: AuthenticateUserByName }
            output: AuthenticationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticateUserByName }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthenticateUserByName }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Users/AuthenticateWithQuickConnect': {
      $post:
        | {
            input: { json: QuickConnectDto }
            output: AuthenticationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QuickConnectDto }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: QuickConnectDto }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: QuickConnectDto }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/Users/ForgotPassword': {
      $post:
        | {
            input: { json: ForgotPasswordDto }
            output: ForgotPasswordResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ForgotPasswordDto }
            output: ForgotPasswordResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ForgotPasswordDto }
            output: ForgotPasswordResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Users/ForgotPassword/Pin': {
      $post:
        | {
            input: { json: string | null }
            output: PinRedeemResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: string | null }
            output: PinRedeemResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: string | null }
            output: PinRedeemResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Users/Me': {
      $get:
        | { input: {}; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Users/New': {
      $post:
        | { input: { json: CreateUserByName }; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: { json: CreateUserByName }; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateUserByName }; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateUserByName }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateUserByName }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Users/Public': {
      $get:
        | { input: {}; output: UserDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Users/:userId': {
      $delete:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { userId: string } }
            output: UserDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserDto }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/Users/:userId/Authenticate': {
      $post:
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: AuthenticationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: AuthenticationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              query: { pw: string; password?: (string | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Users/:userId/Configuration': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UserConfiguration }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UserConfiguration }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserConfiguration }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserConfiguration }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserConfiguration }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/Users/:userId/EasyPassword': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserEasyPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Users/:userId/FavoriteItems/:itemId': {
      $delete:
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/GroupingOptions': {
      $get:
        | {
            input: { param: { userId: string } }
            output: SpecialViewOptionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: SpecialViewOptionDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: SpecialViewOptionDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Users/:userId/Images/:imageType': {
      $delete:
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
      $get:
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
                imageIndex?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType } } & {
              query: { index?: (number | null) | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/Users/:userId/Images/:imageType/:imageIndex': {
      $get:
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $head:
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string; imageType: ImageType; imageIndex: number } } & {
              query: {
                tag?: (string | null) | undefined
                format?: ImageFormat | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                percentPlayed?: (number | null) | undefined
                unplayedCount?: (number | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                quality?: (number | null) | undefined
                cropWhitespace?: (boolean | null) | undefined
                addPlayedIndicator?: (boolean | null) | undefined
                blur?: (number | null) | undefined
                backgroundColor?: (string | null) | undefined
                foregroundLayer?: (string | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Users/:userId/Images/:imageType/:index': {
      $delete:
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string; imageType: ImageType; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                maxOfficialRating?: (string | null) | undefined
                hasThemeSong?: (boolean | null) | undefined
                hasThemeVideo?: (boolean | null) | undefined
                hasSubtitles?: (boolean | null) | undefined
                hasSpecialFeature?: (boolean | null) | undefined
                hasTrailer?: (boolean | null) | undefined
                adjacentTo?: (string | null) | undefined
                parentIndexNumber?: (number | null) | undefined
                hasParentalRating?: (boolean | null) | undefined
                isHd?: (boolean | null) | undefined
                is4K?: (boolean | null) | undefined
                locationTypes?: (LocationType[] | null) | undefined
                excludeLocationTypes?: (LocationType[] | null) | undefined
                isMissing?: (boolean | null) | undefined
                isUnaired?: (boolean | null) | undefined
                minCommunityRating?: (number | null) | undefined
                minCriticRating?: (number | null) | undefined
                minPremiereDate?: (string | null) | undefined
                minDateLastSaved?: (string | null) | undefined
                minDateLastSavedForUser?: (string | null) | undefined
                maxPremiereDate?: (string | null) | undefined
                hasOverview?: (boolean | null) | undefined
                hasImdbId?: (boolean | null) | undefined
                hasTmdbId?: (boolean | null) | undefined
                hasTvdbId?: (boolean | null) | undefined
                excludeItemIds?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                recursive?: (boolean | null) | undefined
                searchTerm?: (string | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                filters?: (ItemFilter[] | null) | undefined
                isFavorite?: (boolean | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                imageTypes?: (ImageType[] | null) | undefined
                sortBy?: (string | null) | undefined
                isPlayed?: (boolean | null) | undefined
                genres?: (string[] | null) | undefined
                officialRatings?: (string[] | null) | undefined
                tags?: (string[] | null) | undefined
                years?: (number[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                person?: (string | null) | undefined
                personIds?: (string[] | null) | undefined
                personTypes?: (string[] | null) | undefined
                studios?: (string[] | null) | undefined
                artists?: (string[] | null) | undefined
                excludeArtistIds?: (string[] | null) | undefined
                artistIds?: (string[] | null) | undefined
                albumArtistIds?: (string[] | null) | undefined
                contributingArtistIds?: (string[] | null) | undefined
                albums?: (string[] | null) | undefined
                albumIds?: (string[] | null) | undefined
                ids?: (string[] | null) | undefined
                videoTypes?: (VideoType[] | null) | undefined
                minOfficialRating?: (string | null) | undefined
                isLocked?: (boolean | null) | undefined
                isPlaceHolder?: (boolean | null) | undefined
                hasOfficialRating?: (boolean | null) | undefined
                collapseBoxSetItems?: (boolean | null) | undefined
                minWidth?: (number | null) | undefined
                minHeight?: (number | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                is3D?: (boolean | null) | undefined
                seriesStatus?: (SeriesStatus[] | null) | undefined
                nameStartsWithOrGreater?: (string | null) | undefined
                nameStartsWith?: (string | null) | undefined
                nameLessThan?: (string | null) | undefined
                studioIds?: (string[] | null) | undefined
                genreIds?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/Latest': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isPlayed?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                limit?: number | undefined
                groupItems?: boolean | undefined
              }
            }
            output: BaseItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isPlayed?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                limit?: number | undefined
                groupItems?: boolean | undefined
              }
            }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isPlayed?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                limit?: number | undefined
                groupItems?: boolean | undefined
              }
            }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isPlayed?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                limit?: number | undefined
                groupItems?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                isPlayed?: (boolean | null) | undefined
                enableImages?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                limit?: number | undefined
                groupItems?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/Resume': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                searchTerm?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                enableTotalRecordCount?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/Root': {
      $get:
        | {
            input: { param: { userId: string } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Users/:userId/Items/:itemId': {
      $get:
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/:itemId/Intros': {
      $get:
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/:itemId/LocalTrailers': {
      $get:
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/:itemId/Rating': {
      $delete:
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { likes?: (boolean | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { likes?: (boolean | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { likes?: (boolean | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { likes?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { likes?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Items/:itemId/SpecialFeatures': {
      $get:
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: BaseItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Password': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UpdateUserPassword }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Users/:userId/PlayedItems/:itemId': {
      $delete:
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { datePlayed?: (string | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { datePlayed?: (string | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { datePlayed?: (string | null) | undefined }
            }
            output: UserItemDataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { datePlayed?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: { datePlayed?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/PlayingItems/:itemId': {
      $delete:
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                nextMediaType?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                nextMediaType?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                nextMediaType?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                canSeek?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                canSeek?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                canSeek?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/PlayingItems/:itemId/Progress': {
      $post:
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                volumeLevel?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                repeatMode?: RepeatMode | undefined
                isPaused?: boolean | undefined
                isMuted?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                volumeLevel?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                repeatMode?: RepeatMode | undefined
                isPaused?: boolean | undefined
                isMuted?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string; itemId: string } } & {
              query: {
                mediaSourceId?: (string | null) | undefined
                positionTicks?: (bigint | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                volumeLevel?: (number | null) | undefined
                playMethod?: PlayMethod | undefined
                liveStreamId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                repeatMode?: RepeatMode | undefined
                isPaused?: boolean | undefined
                isMuted?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Policy': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserPolicy }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/Users/:userId/Suggestions': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                mediaType?: (string[] | null) | undefined
                type?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                mediaType?: (string[] | null) | undefined
                type?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                mediaType?: (string[] | null) | undefined
                type?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                mediaType?: (string[] | null) | undefined
                type?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                mediaType?: (string[] | null) | undefined
                type?: (string[] | null) | undefined
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                enableTotalRecordCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Users/:userId/Views': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                includeExternalContent?: (boolean | null) | undefined
                presetViews?: (string[] | null) | undefined
                includeHidden?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                includeExternalContent?: (boolean | null) | undefined
                presetViews?: (string[] | null) | undefined
                includeHidden?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                includeExternalContent?: (boolean | null) | undefined
                presetViews?: (string[] | null) | undefined
                includeHidden?: boolean | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Videos/ActiveEncodings': {
      $delete:
        | {
            input: {
              query: {
                deviceId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                deviceId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                deviceId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/MergeVersions': {
      $post:
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { ids: string[] } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ids: string[] } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { ids: string[] } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/Videos/:itemId/AdditionalParts': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { userId?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/AlternateSources': {
      $delete:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Videos/:itemId/Subtitles': {
      $post: {
        input: { param: { itemId: string } } & { json: UploadSubtitleDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/Videos/:itemId/Subtitles/:index': {
      $delete:
        | {
            input: { param: { itemId: string; index: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string; index: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; index: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { itemId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { itemId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Videos/:itemId/hls/:playlistId/stream.m3u8': {
      $get:
        | {
            input: { param: { itemId: string; playlistId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; playlistId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; playlistId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/hls/:playlistId/:segmentId.{segmentContainer}': {
      $get:
        | {
            input: {
              param: {
                itemId: string
                playlistId: string
                segmentId: string
                segmentContainer: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                itemId: string
                playlistId: string
                segmentId: string
                segmentContainer: string
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                playlistId: string
                segmentId: string
                segmentContainer: string
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                itemId: string
                playlistId: string
                segmentId: string
                segmentContainer: string
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Videos/:itemId/hls1/:playlistId/:segmentId.{container}': {
      $get:
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { itemId: string; playlistId: string; segmentId: number; container: string }
            } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/live.m3u8': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string | null) | undefined
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                enableSubtitlesInManifest?: (boolean | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string | null) | undefined
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                enableSubtitlesInManifest?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                container?: (string | null) | undefined
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                maxWidth?: (number | null) | undefined
                maxHeight?: (number | null) | undefined
                enableSubtitlesInManifest?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/main.m3u8': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId?: (string | null) | undefined
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/master.m3u8': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $head:
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                static?: (boolean | null) | undefined
                params?: (string | null) | undefined
                tag?: (string | null) | undefined
                deviceProfileId?: (string | null) | undefined
                playSessionId?: (string | null) | undefined
                segmentContainer?: (string | null) | undefined
                segmentLength?: (number | null) | undefined
                minSegments?: (number | null) | undefined
                mediaSourceId: string
                deviceId?: (string | null) | undefined
                audioCodec?: (string | null) | undefined
                enableAutoStreamCopy?: (boolean | null) | undefined
                allowVideoStreamCopy?: (boolean | null) | undefined
                allowAudioStreamCopy?: (boolean | null) | undefined
                breakOnNonKeyFrames?: (boolean | null) | undefined
                audioSampleRate?: (number | null) | undefined
                maxAudioBitDepth?: (number | null) | undefined
                audioBitRate?: (number | null) | undefined
                audioChannels?: (number | null) | undefined
                maxAudioChannels?: (number | null) | undefined
                profile?: (string | null) | undefined
                level?: (string | null) | undefined
                framerate?: (number | null) | undefined
                maxFramerate?: (number | null) | undefined
                copyTimestamps?: (boolean | null) | undefined
                startTimeTicks?: (bigint | null) | undefined
                width?: (number | null) | undefined
                height?: (number | null) | undefined
                videoBitRate?: (number | null) | undefined
                subtitleStreamIndex?: (number | null) | undefined
                subtitleMethod?: SubtitleDeliveryMethod | undefined
                maxRefFrames?: (number | null) | undefined
                maxVideoBitDepth?: (number | null) | undefined
                requireAvc?: (boolean | null) | undefined
                deInterlace?: (boolean | null) | undefined
                requireNonAnamorphic?: (boolean | null) | undefined
                transcodingMaxAudioChannels?: (number | null) | undefined
                cpuCoreLimit?: (number | null) | undefined
                liveStreamId?: (string | null) | undefined
                enableMpegtsM2TsMode?: (boolean | null) | undefined
                videoCodec?: (string | null) | undefined
                subtitleCodec?: (string | null) | undefined
                transcodeReasons?: (string | null) | undefined
                audioStreamIndex?: (number | null) | undefined
                videoStreamIndex?: (number | null) | undefined
                context?: EncodingContext | undefined
                streamOptions?: ({ [x: string]: string } | null) | undefined
                enableAdaptiveBitrateStreaming?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/stream': {
      $get: {
        input: { param: { itemId: string } } & {
          query: {
            container?: (string | null) | undefined
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { itemId: string } } & {
          query: {
            container?: (string | null) | undefined
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/Stream.{format}': {
      $get: {
        input: {
          param: { itemId: string; mediaSourceId: string; index: number; format: string }
        } & {
          query: {
            endPositionTicks?: (bigint | null) | undefined
            copyTimestamps?: boolean | undefined
            addVttTimeMap?: boolean | undefined
            startPositionTicks?: bigint | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/subtitles.m3u8': {
      $get:
        | {
            input: { param: { itemId: string; index: number; mediaSourceId: string } } & {
              query: { segmentLength: number }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string; index: number; mediaSourceId: string } } & {
              query: { segmentLength: number }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string; index: number; mediaSourceId: string } } & {
              query: { segmentLength: number }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/:startPositionTicks/Stream.{format}': {
      $get: {
        input: {
          param: {
            itemId: string
            mediaSourceId: string
            index: number
            startPositionTicks: bigint
            format: string
          }
        } & {
          query: {
            endPositionTicks?: (bigint | null) | undefined
            copyTimestamps?: boolean | undefined
            addVttTimeMap?: boolean | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Videos/:itemId/:stream.{container}': {
      $get: {
        input: { param: { itemId: string; container: string; stream: string } } & {
          query: {
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { itemId: string; container: string; stream: string } } & {
          query: {
            static?: (boolean | null) | undefined
            params?: (string | null) | undefined
            tag?: (string | null) | undefined
            deviceProfileId?: (string | null) | undefined
            playSessionId?: (string | null) | undefined
            segmentContainer?: (string | null) | undefined
            segmentLength?: (number | null) | undefined
            minSegments?: (number | null) | undefined
            mediaSourceId?: (string | null) | undefined
            deviceId?: (string | null) | undefined
            audioCodec?: (string | null) | undefined
            enableAutoStreamCopy?: (boolean | null) | undefined
            allowVideoStreamCopy?: (boolean | null) | undefined
            allowAudioStreamCopy?: (boolean | null) | undefined
            breakOnNonKeyFrames?: (boolean | null) | undefined
            audioSampleRate?: (number | null) | undefined
            maxAudioBitDepth?: (number | null) | undefined
            audioBitRate?: (number | null) | undefined
            audioChannels?: (number | null) | undefined
            maxAudioChannels?: (number | null) | undefined
            profile?: (string | null) | undefined
            level?: (string | null) | undefined
            framerate?: (number | null) | undefined
            maxFramerate?: (number | null) | undefined
            copyTimestamps?: (boolean | null) | undefined
            startTimeTicks?: (bigint | null) | undefined
            width?: (number | null) | undefined
            height?: (number | null) | undefined
            videoBitRate?: (number | null) | undefined
            subtitleStreamIndex?: (number | null) | undefined
            subtitleMethod?: SubtitleDeliveryMethod | undefined
            maxRefFrames?: (number | null) | undefined
            maxVideoBitDepth?: (number | null) | undefined
            requireAvc?: (boolean | null) | undefined
            deInterlace?: (boolean | null) | undefined
            requireNonAnamorphic?: (boolean | null) | undefined
            transcodingMaxAudioChannels?: (number | null) | undefined
            cpuCoreLimit?: (number | null) | undefined
            liveStreamId?: (string | null) | undefined
            enableMpegtsM2TsMode?: (boolean | null) | undefined
            videoCodec?: (string | null) | undefined
            subtitleCodec?: (string | null) | undefined
            transcodeReasons?: (string | null) | undefined
            audioStreamIndex?: (number | null) | undefined
            videoStreamIndex?: (number | null) | undefined
            context?: EncodingContext | undefined
            streamOptions?: ({ [x: string]: string } | null) | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Videos/:videoId/:mediaSourceId/Attachments/:index': {
      $get:
        | {
            input: { param: { videoId: string; mediaSourceId: string; index: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { videoId: string; mediaSourceId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videoId: string; mediaSourceId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { videoId: string; mediaSourceId: string; index: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/Years': {
      $get:
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                sortBy?: (string | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                recursive?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                sortBy?: (string | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                recursive?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                sortBy?: (string | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                recursive?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: BaseItemDtoQueryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                sortBy?: (string | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                recursive?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startIndex?: (number | null) | undefined
                limit?: (number | null) | undefined
                sortOrder?: (string | null) | undefined
                parentId?: (string | null) | undefined
                fields?: (ItemFields[] | null) | undefined
                excludeItemTypes?: (string[] | null) | undefined
                includeItemTypes?: (string[] | null) | undefined
                mediaTypes?: (string[] | null) | undefined
                sortBy?: (string | null) | undefined
                enableUserData?: (boolean | null) | undefined
                imageTypeLimit?: (number | null) | undefined
                enableImageTypes?: (ImageType[] | null) | undefined
                userId?: (string | null) | undefined
                recursive?: boolean | undefined
                enableImages?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/Years/:year': {
      $get:
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: BaseItemDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { year: number } } & { query: { userId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/web/ConfigurationPage': {
      $get:
        | {
            input: { query: { name?: (string | null) | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: (string | null) | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { name?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { name?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/web/ConfigurationPages': {
      $get:
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ConfigurationPageInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ConfigurationPageInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ConfigurationPageInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                enableInMainMenu?: (boolean | null) | undefined
                pageType?: ConfigurationPageType | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
