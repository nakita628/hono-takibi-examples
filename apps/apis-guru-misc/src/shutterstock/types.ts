type Bands = { id?: string | undefined; name?: string | undefined }
type Instruments = { id?: string | undefined; name?: string | undefined }
type Preview = { content_type?: 'audio/mp3' | undefined; url?: string | undefined }
type Descriptors = {
  average_render_speed?: number | undefined
  bands?: Bands[] | undefined
  id?: string | undefined
  instruments?: Instruments[] | undefined
  max_tempo?: number | undefined
  min_tempo?: number | undefined
  name?: string | undefined
  previews?: Preview[] | undefined
  tags?: string[] | undefined
}
type DescriptorsListResult = {
  data?: Descriptors[] | undefined
  page?: number | undefined
  per_page?: number | undefined
}
type Instrument = {
  id?: string | undefined
  name?: string | undefined
  previews?: Preview[] | undefined
  tags?: string[] | undefined
}
type InstrumentsListResult = {
  data?: Instrument[] | undefined
  page?: number | undefined
  per_page?: number | undefined
}
type AudioRendersFilesList = {
  bits_sample: number
  content_type: string
  download_url: string
  filename: string
  frequency_hz: number
  kbits_second: number
  size_bytes: number
  tracks: string[]
}
type AudioRenderTimelineSpanInstrumentGroupStatus = { beat: number; status: 'active' | 'inactive' }
type AudioRenderTimelineSpanInstrumentGroup = {
  instrument_group: string
  statuses?: AudioRenderTimelineSpanInstrumentGroupStatus[] | undefined
}
type AudioRenderTimelineSpanRegion = {
  beat: number
  descriptor: string
  end_type?: { beat: number; event: 'ending' | 'transition'; type: 'ringout' | 'cut' } | undefined
  id: number
  key?:
    | {
        tonic_accidental?: 'double flat' | 'flat' | 'natural' | 'sharp' | 'double sharp' | undefined
        tonic_note?: 'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'b' | undefined
        tonic_quality?:
          | 'major'
          | 'natural_minor'
          | 'harmonic_minor'
          | 'melodic_minor'
          | 'ionian'
          | 'dorian'
          | 'phrygian'
          | 'lydian'
          | 'mixolydian'
          | 'aeolian'
          | 'locrian'
          | undefined
      }
    | undefined
  region: 'music' | 'silence'
}
type AudioRenderTimelineSpanTempoChanges = { tempo: number; time: number }
type AudioRenderTimelineSpan = {
  id?: number | undefined
  instrument_groups?: AudioRenderTimelineSpanInstrumentGroup[] | undefined
  regions?: AudioRenderTimelineSpanRegion[] | undefined
  span_type: 'metered' | 'unmetered'
  tempo?: number | undefined
  tempo_changes?: AudioRenderTimelineSpanTempoChanges[] | undefined
  time: number
}
type AudioRenderTimeline = { spans?: AudioRenderTimelineSpan[] | undefined }
type AudioRenderResult = {
  created_date?: string | undefined
  files?: AudioRendersFilesList[] | undefined
  id: string
  preset?: 'MASTER_MP3' | 'MASTER_WAV' | 'STEMS_WAV' | undefined
  progress_percent?: number | undefined
  status:
    | 'WAITING_COMPOSE'
    | 'RUNNING_COMPOSE'
    | 'WAITING_RENDER'
    | 'RUNNING_RENDER'
    | 'CREATED'
    | 'FAILED_CREATE'
  timeline: AudioRenderTimeline
  updated_date?: string | undefined
}
type AudioRendersListResults = { audio_renders: AudioRenderResult[] }
type CreateAudioRender = {
  filename: string
  preset: 'MASTER_MP3' | 'MASTER_WAV' | 'STEMS_WAV'
  timeline: AudioRenderTimeline
}
type CreateAudioRendersRequest = { audio_renders: CreateAudioRender[] }
type Album = { id: string; title: string }
type Artist = { name: string }
type AudioAssetDetails = { file_size?: number | undefined; url?: string | undefined }
type ShortsLoopsStems = {
  loops?: { [x: string]: { url?: string | undefined } } | undefined
  shorts?: { [x: string]: { url?: string | undefined } } | undefined
  stems?: { [x: string]: { url?: string | undefined } } | undefined
}
type AudioAssets = {
  album_art?: AudioAssetDetails | undefined
  clean_audio?: AudioAssetDetails | undefined
  original_audio?: AudioAssetDetails | undefined
  preview_mp3?: AudioAssetDetails | undefined
  preview_ogg?: AudioAssetDetails | undefined
  shorts_loops_stems?: ShortsLoopsStems | undefined
  waveform?: AudioAssetDetails | undefined
}
type Contributor = { id: string }
type ModelRelease = { id?: string | undefined }
type Audio = {
  added_date?: string | undefined
  affiliate_url?: string | undefined
  album?: Album | undefined
  artists?: Artist[] | undefined
  assets?: AudioAssets | undefined
  bpm?: number | undefined
  contributor: Contributor
  deleted_time?: string | undefined
  description?: string | undefined
  duration?: number | undefined
  genres?: string[] | undefined
  id: string
  instruments?: string[] | undefined
  is_adult?: boolean | undefined
  is_instrumental?: boolean | undefined
  isrc?: string | undefined
  keywords?: string[] | undefined
  language?: string | undefined
  lyrics?: string | undefined
  media_type: string
  model_releases?: ModelRelease[] | undefined
  moods?: string[] | undefined
  published_time?: string | undefined
  recording_version?: string | undefined
  releases?: string[] | undefined
  similar_artists?: Artist[] | undefined
  submitted_time?: string | undefined
  title?: string | undefined
  updated_time?: string | undefined
  url?: string | undefined
  vocal_description?: string | undefined
}
type Error = {
  code?: string | undefined
  data?: string | undefined
  items?: { [x: string]: unknown }[] | undefined
  message: string
  path?: string | undefined
}
type AudioDataList = {
  data?: Audio[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type CollectionItem = {
  added_time?: string | undefined
  id: string
  media_type?: string | undefined
}
type Collection = {
  cover_item?: CollectionItem | undefined
  created_time?: string | undefined
  id: string
  items_updated_time?: string | undefined
  name: string
  share_code?: string | undefined
  share_url?: string | undefined
  total_item_count: number
  updated_time?: string | undefined
}
type CollectionDataList = {
  data?: Collection[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type CollectionCreateRequest = { name: string }
type CollectionCreateResponse = { id: string }
type CollectionUpdateRequest = { name: string }
type CollectionItemDataList = {
  data?: CollectionItem[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type CollectionItemRequest = { items: CollectionItem[] }
type GenreList = { data: string[] }
type InstrumentList = { data: string[] }
type DownloadHistoryFormatDetails = { format?: string | undefined; size?: string | undefined }
type DownloadHistoryMediaDetails = { format?: DownloadHistoryFormatDetails | undefined; id: string }
type DownloadHistoryRevshareDetails = { purchase_amount: string; purchase_currency: string }
type DownloadHistoryUserDetails = { username: string }
type DownloadHistory = {
  audio?: DownloadHistoryMediaDetails | undefined
  download_time: string
  id: string
  image?: DownloadHistoryMediaDetails | undefined
  is_downloadable?: boolean | undefined
  license: string
  metadata?: { [x: string]: unknown } | undefined
  revshare?: DownloadHistoryRevshareDetails | undefined
  subscription_id?: string | undefined
  user?: DownloadHistoryUserDetails | undefined
  video?: DownloadHistoryMediaDetails | undefined
}
type DownloadHistoryDataList = {
  data?: DownloadHistory[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type LicenseAudio = {
  audio_id: string
  license?:
    | 'audio_platform'
    | 'premier_music_basic'
    | 'premier_music_extended'
    | 'premier_music_pro'
    | 'premier_music_comp'
    | 'asset_all_music'
    | undefined
  search_id?: string | undefined
}
type LicenseAudioRequest = { audio: LicenseAudio[] }
type AudioUrl = { shorts_loops_stems?: string | undefined; url: string }
type LicenseAudioResult = {
  allotment_charge?: number | undefined
  audio_id: string
  download?: AudioUrl | undefined
  error?: string | undefined
  license_id?: string | undefined
}
type LicenseAudioResultDataList = {
  data?: LicenseAudioResult[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type MoodList = { data: string[] }
type AudioSearchResults = {
  data: Audio[]
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  search_id: string
  total_count: number
}
type Language =
  | 'ar'
  | 'bg'
  | 'bn'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'fi'
  | 'fr'
  | 'gu'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kn'
  | 'ko'
  | 'ml'
  | 'mr'
  | 'nb'
  | 'nl'
  | 'or'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'ta'
  | 'te'
  | 'th'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'vi'
  | 'zh'
  | 'zh-Hant'
type SearchImage = {
  added_date?: string | undefined
  added_date_end?: string | undefined
  added_date_start?: string | undefined
  aspect_ratio?: number | undefined
  aspect_ratio_max?: number | undefined
  aspect_ratio_min?: number | undefined
  authentic?: boolean | undefined
  category?: string | undefined
  color?: string | undefined
  contributor?: string[] | undefined
  contributor_country?: string[] | string[] | undefined
  fields?: string | undefined
  height?: number | undefined
  height_from?: number | undefined
  height_to?: number | undefined
  image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
  keyword_safe_search?: boolean | undefined
  language?: Language | undefined
  license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
  model?: string[] | undefined
  orientation?: 'horizontal' | 'vertical' | undefined
  page?: number | undefined
  people_age?:
    | 'infants'
    | 'children'
    | 'teenagers'
    | '20s'
    | '30s'
    | '40s'
    | '50s'
    | '60s'
    | 'older'
    | undefined
  people_ethnicity?:
    | (
        | 'african'
        | 'african_american'
        | 'black'
        | 'brazilian'
        | 'chinese'
        | 'caucasian'
        | 'east_asian'
        | 'hispanic'
        | 'japanese'
        | 'middle_eastern'
        | 'native_american'
        | 'pacific_islander'
        | 'south_asian'
        | 'southeast_asian'
        | 'other'
        | 'NOT african'
        | 'NOT african_american'
        | 'NOT black'
        | 'NOT brazilian'
        | 'NOT chinese'
        | 'NOT caucasian'
        | 'NOT east_asian'
        | 'NOT hispanic'
        | 'NOT japanese'
        | 'NOT middle_eastern'
        | 'NOT native_american'
        | 'NOT pacific_islander'
        | 'NOT south_asian'
        | 'NOT southeast_asian'
        | 'NOT other'
      )[]
    | undefined
  people_gender?: 'male' | 'female' | 'both' | undefined
  people_model_released?: boolean | undefined
  people_number?: number | undefined
  per_page?: number | undefined
  query?: string | undefined
  region?: string | string | undefined
  safe?: boolean | undefined
  sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
  spellcheck_query?: boolean | undefined
  view?: 'minimal' | 'full' | undefined
  width?: number | undefined
  width_from?: number | undefined
  width_to?: number | undefined
}
type BulkImageSearchRequest = SearchImage[]
type ImageSizeDetails = {
  display_name?: string | undefined
  dpi?: number | undefined
  file_size?: number | undefined
  format?: string | undefined
  height?: number | undefined
  is_licensable?: boolean | undefined
  width?: number | undefined
}
type Thumbnail = { height: number; url: string; width: number }
type ImageAssets = {
  huge_jpg?: ImageSizeDetails | undefined
  huge_thumb?: Thumbnail | undefined
  large_thumb?: Thumbnail | undefined
  medium_jpg?: ImageSizeDetails | undefined
  preview?: Thumbnail | undefined
  preview_1000?: Thumbnail | undefined
  preview_1500?: Thumbnail | undefined
  small_jpg?: ImageSizeDetails | undefined
  small_thumb?: Thumbnail | undefined
  supersize_jpg?: ImageSizeDetails | undefined
  vector_eps?: ImageSizeDetails | undefined
}
type Category = { id?: string | undefined; name?: string | undefined }
type Model = { id: string }
type Image = {
  added_date?: string | undefined
  affiliate_url?: string | undefined
  aspect?: number | undefined
  assets?: ImageAssets | undefined
  categories?: Category[] | undefined
  contributor: Contributor
  description?: string | undefined
  has_model_release?: boolean | undefined
  has_property_release?: boolean | undefined
  id: string
  image_type?: string | undefined
  insights?: { labels?: string[] | undefined } | undefined
  is_adult?: boolean | undefined
  is_editorial?: boolean | undefined
  is_illustration?: boolean | undefined
  keywords?: string[] | undefined
  media_type: string
  model_releases?: ModelRelease[] | undefined
  models?: Model[] | undefined
  releases?: string[] | undefined
  url?: string | undefined
}
type Insights = {
  label_performance: { name?: string | undefined; percentile_performance?: number | undefined }[]
}
type ImageSearchResults = {
  data: Image[]
  insights?: Insights | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  search_id: string
  spellcheck_info?: { [x: string]: unknown } | undefined
  total_count: number
}
type BulkImageSearchResults = {
  bulk_search_id?: string | undefined
  results?: ImageSearchResults[] | undefined
}
type CatalogCollectionItem = {
  asset: {
    id?: string | undefined
    name?: string | undefined
    type: 'image' | 'video' | 'audio' | 'editorial-image' | 'editorial-video'
  }
  collection_ids?: string[] | undefined
  created_time: string
  id: string
}
type CatalogCollectionRole = { email: string; id: string; type: 'USER' }
type CatalogCollectionRoleAssignments = {
  collection_id: string
  roles: {
    editors?: CatalogCollectionRole[] | undefined
    owners?: CatalogCollectionRole[] | undefined
    viewers?: CatalogCollectionRole[] | undefined
  }
}
type CatalogCollection = {
  cover_asset?: CatalogCollectionItem | undefined
  created_time: string
  id: string
  name: string
  role_assignments: CatalogCollectionRoleAssignments
  total_item_count: number
  updated_time: string
  visibility: 'private' | 'public'
}
type CatalogCollectionDataList = {
  data: CatalogCollection[]
  page: number
  per_page: number
  total_count: number
}
type CreateCatalogCollectionItem = { asset: { id?: string | undefined; type: string } }
type CreateCatalogCollection = {
  items?: CreateCatalogCollectionItem[] | undefined
  name: string
  visibility?: 'private' | 'public' | undefined
}
type UpdateCatalogCollection = {
  cover_asset?: { id: string } | undefined
  name?: string | undefined
  visibility?: 'private' | 'public' | undefined
}
type RemoveCatalogCollectionItem = { id: string }
type RemoveCatalogCollectionItems = { items: RemoveCatalogCollectionItem[] }
type CreateCatalogCollectionItems = { items: CreateCatalogCollectionItem[] }
type CatalogCollectionItemDataList = {
  data: CatalogCollectionItem[]
  page: number
  per_page: number
  total_count: number
}
type ContributorProfileSocialMedia = {
  facebook?: string | undefined
  google_plus?: string | undefined
  linkedin?: string | undefined
  pinterest?: string | undefined
  tumblr?: string | undefined
  twitter?: string | undefined
}
type ContributorProfile = {
  about?: string | undefined
  contributor_type?: string[] | undefined
  display_name?: string | undefined
  equipment?: string[] | undefined
  id: string
  location?: string | undefined
  portfolio_url?: string | undefined
  social_media?: ContributorProfileSocialMedia | undefined
  styles?: string[] | undefined
  subjects?: string[] | undefined
  website?: string | undefined
}
type ContributorProfileDataList = {
  data?: ContributorProfile[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type ImageCreateRequest = { base64_image: string }
type ComputerVisionImageCreateResponse = { upload_id: string }
type KeywordDataList = {
  data?: string[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
}
type VideoSizeDetails = {
  display_name?: string | undefined
  file_size?: number | undefined
  format?: string | undefined
  fps?: number | undefined
  height?: number | undefined
  is_licensable?: boolean | undefined
  width?: number | undefined
}
type Url = { url: string }
type Urls = { urls: string[] }
type VideoAssets = {
  '4k'?: VideoSizeDetails | undefined
  hd?: VideoSizeDetails | undefined
  preview_jpg?: Url | undefined
  preview_mp4?: Url | undefined
  preview_webm?: Url | undefined
  sd?: VideoSizeDetails | undefined
  thumb_jpg?: Url | undefined
  thumb_jpgs?: Urls | undefined
  thumb_mp4?: Url | undefined
  thumb_webm?: Url | undefined
  web?: VideoSizeDetails | undefined
}
type Video = {
  added_date?: string | undefined
  affiliate_url?: string | undefined
  aspect?: number | undefined
  aspect_ratio?: string | undefined
  assets?: VideoAssets | undefined
  categories?: Category[] | undefined
  contributor: Contributor
  description?: string | undefined
  duration?: number | undefined
  has_model_release?: boolean | undefined
  has_property_release?: boolean | undefined
  id: string
  is_adult?: boolean | undefined
  is_editorial?: boolean | undefined
  keywords?: string[] | undefined
  media_type: string
  models?: Model[] | undefined
  url?: string | undefined
}
type VideoSearchResults = {
  data: Video[]
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  search_id: string
  total_count: number
}
type EditorialCategory = { name?: string | undefined }
type EditorialCategoryResults = { data?: EditorialCategory[] | undefined }
type EditorialImageCategoryResults = { data?: EditorialCategory[] | undefined }
type ISOCountryCode =
  | 'ABW'
  | 'AFG'
  | 'AGO'
  | 'AIA'
  | 'ALA'
  | 'ALB'
  | 'AND'
  | 'ARE'
  | 'ARG'
  | 'ARM'
  | 'ASM'
  | 'ATA'
  | 'ATF'
  | 'ATG'
  | 'AUS'
  | 'AUT'
  | 'AZE'
  | 'BDI'
  | 'BEL'
  | 'BEN'
  | 'BES'
  | 'BFA'
  | 'BGD'
  | 'BGR'
  | 'BHR'
  | 'BHS'
  | 'BIH'
  | 'BLM'
  | 'BLR'
  | 'BLZ'
  | 'BMU'
  | 'BOL'
  | 'BRA'
  | 'BRB'
  | 'BRN'
  | 'BTN'
  | 'BVT'
  | 'BWA'
  | 'CAF'
  | 'CAN'
  | 'CCK'
  | 'CHE'
  | 'CHL'
  | 'CHN'
  | 'CIV'
  | 'CMR'
  | 'COD'
  | 'COG'
  | 'COK'
  | 'COL'
  | 'COM'
  | 'CPV'
  | 'CRI'
  | 'CUB'
  | 'CUW'
  | 'CXR'
  | 'CYM'
  | 'CYP'
  | 'CZE'
  | 'DEU'
  | 'DJI'
  | 'DMA'
  | 'DNK'
  | 'DOM'
  | 'DZA'
  | 'ECU'
  | 'EGY'
  | 'ERI'
  | 'ESH'
  | 'ESP'
  | 'EST'
  | 'ETH'
  | 'FIN'
  | 'FJI'
  | 'FLK'
  | 'FRA'
  | 'FRO'
  | 'FSM'
  | 'GAB'
  | 'GBR'
  | 'GEO'
  | 'GGY'
  | 'GHA'
  | 'GIB'
  | 'GIN'
  | 'GLP'
  | 'GMB'
  | 'GNB'
  | 'GNQ'
  | 'GRC'
  | 'GRD'
  | 'GRL'
  | 'GTM'
  | 'GUF'
  | 'GUM'
  | 'GUY'
  | 'HKG'
  | 'HMD'
  | 'HND'
  | 'HRV'
  | 'HTI'
  | 'HUN'
  | 'IDN'
  | 'IMN'
  | 'IND'
  | 'IOT'
  | 'IRL'
  | 'IRN'
  | 'IRQ'
  | 'ISL'
  | 'ISR'
  | 'ITA'
  | 'JAM'
  | 'JEY'
  | 'JOR'
  | 'JPN'
  | 'KAZ'
  | 'KEN'
  | 'KGZ'
  | 'KHM'
  | 'KIR'
  | 'KNA'
  | 'KOR'
  | 'KWT'
  | 'LAO'
  | 'LBN'
  | 'LBR'
  | 'LBY'
  | 'LCA'
  | 'LIE'
  | 'LKA'
  | 'LSO'
  | 'LTU'
  | 'LUX'
  | 'LVA'
  | 'MAC'
  | 'MAF'
  | 'MAR'
  | 'MCO'
  | 'MDA'
  | 'MDG'
  | 'MDV'
  | 'MEX'
  | 'MHL'
  | 'MKD'
  | 'MLI'
  | 'MLT'
  | 'MMR'
  | 'MNE'
  | 'MNG'
  | 'MNP'
  | 'MOZ'
  | 'MRT'
  | 'MSR'
  | 'MTQ'
  | 'MUS'
  | 'MWI'
  | 'MYS'
  | 'MYT'
  | 'NAM'
  | 'NCL'
  | 'NER'
  | 'NFK'
  | 'NGA'
  | 'NIC'
  | 'NIU'
  | 'NLD'
  | 'NOR'
  | 'NPL'
  | 'NRU'
  | 'NZL'
  | 'OMN'
  | 'PAK'
  | 'PAN'
  | 'PCN'
  | 'PER'
  | 'PHL'
  | 'PLW'
  | 'PNG'
  | 'POL'
  | 'PRI'
  | 'PRK'
  | 'PRT'
  | 'PRY'
  | 'PSE'
  | 'PYF'
  | 'QAT'
  | 'REU'
  | 'ROU'
  | 'RUS'
  | 'RWA'
  | 'SAU'
  | 'SDN'
  | 'SEN'
  | 'SGP'
  | 'SGS'
  | 'SHN'
  | 'SJM'
  | 'SLB'
  | 'SLE'
  | 'SLV'
  | 'SMR'
  | 'SOM'
  | 'SPM'
  | 'SRB'
  | 'SSD'
  | 'STP'
  | 'SUR'
  | 'SVK'
  | 'SVN'
  | 'SWE'
  | 'SWZ'
  | 'SXM'
  | 'SYC'
  | 'SYR'
  | 'TCA'
  | 'TCD'
  | 'TGO'
  | 'THA'
  | 'TJK'
  | 'TKL'
  | 'TKM'
  | 'TLS'
  | 'TON'
  | 'TTO'
  | 'TUN'
  | 'TUR'
  | 'TUV'
  | 'TWN'
  | 'TZA'
  | 'UGA'
  | 'UKR'
  | 'UMI'
  | 'URY'
  | 'USA'
  | 'UZB'
  | 'VAT'
  | 'VCT'
  | 'VEN'
  | 'VGB'
  | 'VIR'
  | 'VNM'
  | 'VUT'
  | 'WLF'
  | 'WSM'
  | 'YEM'
  | 'ZAF'
  | 'ZMB'
  | 'ZWE'
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'AN'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
type LicenseRequestMetadata = { [x: string]: unknown }
type LicenseEditorialContent = {
  editorial_id: string
  license: string
  metadata?: LicenseRequestMetadata | undefined
  size?: 'small' | 'medium' | 'original' | undefined
}
type LicenseEditorialContentRequest = {
  country: ISOCountryCode
  editorial: LicenseEditorialContent[]
}
type LicenseEditorialContentResult = {
  allotment_charge?: number | undefined
  download?: Url | undefined
  editorial_id: string
  error?: string | undefined
}
type LicenseEditorialContentResults = {
  data?: LicenseEditorialContentResult[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type EditorialCoverItem = {
  height?: number | undefined
  id: string
  url: string
  width?: number | undefined
}
type EditorialLivefeed = {
  cover_item?: EditorialCoverItem | undefined
  created_time?: string | undefined
  id: string
  name: string
  total_item_count: number
}
type EditorialImageLivefeedList = {
  data: EditorialLivefeed[]
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count: number
}
type EditorialImageLivefeed = {
  cover_item?: EditorialCoverItem | undefined
  created_time?: string | undefined
  id: string
  name: string
  total_item_count: number
}
type EditorialAssets = {
  medium_jpg?: ImageSizeDetails | undefined
  original?: ImageSizeDetails | undefined
  small_jpg?: ImageSizeDetails | undefined
  thumb_170?: Thumbnail | undefined
  thumb_220?: Thumbnail | undefined
  watermark_1500?: Thumbnail | undefined
  watermark_450?: Thumbnail | undefined
}
type EditorialContent = {
  aspect?: number | undefined
  assets?: EditorialAssets | undefined
  byline?: string | undefined
  caption?: string | undefined
  categories?: EditorialCategory[] | undefined
  date_taken?: string | undefined
  description?: string | undefined
  id: string
  keywords?: string[] | undefined
  special_instructions?: string | undefined
  title?: string | undefined
}
type EditorialImageContentDataList = {
  data?: EditorialContent[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type EditorialSearchResults = {
  data: EditorialContent[]
  message?: string | undefined
  next?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  prev?: string | undefined
  search_id?: string | undefined
  total_count: number
}
type EditorialUpdatedContent = {
  aspect?: number | undefined
  assets?: EditorialAssets | undefined
  byline?: string | undefined
  caption?: string | undefined
  categories?: EditorialCategory[] | undefined
  commercial_status?: { reason?: string | undefined; status?: string | undefined } | undefined
  created_time?: string | undefined
  date_taken?: string | undefined
  description?: string | undefined
  id: string
  keywords?: string[] | undefined
  rights?: { countries?: string | undefined } | undefined
  special_instructions?: string | undefined
  supplier_code?: string | undefined
  title?: string | undefined
  updated_time?: string | undefined
  updates?: string[] | undefined
}
type EditorialUpdatedResults = {
  data: EditorialUpdatedContent[]
  message?: string | undefined
  next?: string | undefined
  per_page?: number | undefined
  prev?: string | undefined
}
type EditorialLivefeedList = {
  data: EditorialLivefeed[]
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count: number
}
type EditorialContentDataList = {
  data?: EditorialContent[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type EditorialVideoCategoryResults = { data?: EditorialCategory[] | undefined }
type LicenseEditorialVideoContent = {
  editorial_id: string
  license:
    | 'premier_editorial_video_digital_only'
    | 'premier_editorial_video_all_media'
    | 'premier_editorial_video_all_media_single_territory'
    | 'premier_editorial_video_comp'
  metadata?: LicenseRequestMetadata | undefined
  size?: 'original' | undefined
}
type LicenseEditorialVideoContentRequest = {
  country: ISOCountryCode
  editorial: LicenseEditorialVideoContent[]
}
type VideoPreviewUrl = { url: string }
type EditorialVideoAssets = {
  original?: VideoSizeDetails | undefined
  preview_mp4?: VideoPreviewUrl | undefined
  preview_webm?: VideoPreviewUrl | undefined
  thumb_jpg?: VideoPreviewUrl | undefined
}
type EditorialVideoContent = {
  aspect?: number | undefined
  assets?: EditorialVideoAssets | undefined
  byline?: string | undefined
  caption?: string | undefined
  categories?: EditorialCategory[] | undefined
  date_taken?: string | undefined
  description?: string | undefined
  id: string
  keywords?: string[] | undefined
  title?: string | undefined
}
type EditorialVideoSearchResults = {
  data: EditorialVideoContent[]
  message?: string | undefined
  next?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  prev?: string | undefined
  search_id?: string | undefined
  total_count: number
}
type ImageDataList = {
  data?: Image[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type ImageCreateResponse = { id: string }
type CategoryDataList = {
  data?: Category[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type FeaturedCollectionCoverItem = { url: string }
type FeaturedCollection = {
  cover_item?: FeaturedCollectionCoverItem | undefined
  created_time?: string | undefined
  hero_item?: FeaturedCollectionCoverItem | undefined
  id: string
  items_updated_time?: string | undefined
  name: string
  share_url?: string | undefined
  total_item_count: number
  updated_time?: string | undefined
}
type FeaturedCollectionDataList = {
  data?: FeaturedCollection[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type Cookie = { name: string; value: string }
type CustomSizeDimensions = { height?: number | undefined; width?: number | undefined }
type LicenseImage = {
  auth_cookie?: Cookie | undefined
  custom_dimensions?: CustomSizeDimensions | undefined
  editorial_acknowledgement?: boolean | undefined
  format?: 'jpg' | undefined
  image_id: string
  metadata?: LicenseRequestMetadata | undefined
  price?: number | undefined
  search_id?: string | undefined
  show_modal?: boolean | undefined
  size?: 'small' | 'medium' | 'huge' | 'custom' | undefined
  subscription_id?: string | undefined
  verification_code?: string | undefined
}
type LicenseImageVector = {
  auth_cookie?: Cookie | undefined
  editorial_acknowledgement?: boolean | undefined
  format?: 'eps' | undefined
  image_id: string
  metadata?: LicenseRequestMetadata | undefined
  price?: number | undefined
  search_id?: string | undefined
  show_modal?: boolean | undefined
  size?: 'vector' | undefined
  subscription_id?: string | undefined
  verification_code?: string | undefined
}
type LicenseImageRequest = { images: (LicenseImage | LicenseImageVector)[] }
type Price = { local_amount?: number | undefined; local_currency?: string | undefined }
type LicenseImageResult = {
  allotment_charge?: number | undefined
  download?: Url | undefined
  error?: string | undefined
  image_id: string
  license_id?: string | undefined
  price?: Price | undefined
}
type LicenseImageResultDataList = {
  data?: LicenseImageResult[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type RedownloadImage = {
  auth_cookie?: Cookie | undefined
  show_modal?: boolean | undefined
  size?: 'small' | 'medium' | 'huge' | 'supersize' | 'vector' | undefined
  verification_code?: string | undefined
}
type Recommendation = { id: string }
type RecommendationDataList = {
  data?: Recommendation[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type Suggestions = { data?: string[] | undefined }
type SearchEntitiesRequest = { text: string }
type SearchEntitiesResponse = { keywords?: string[] | undefined }
type UpdatedMedia = { id: string; updated_time: string; updates: string[] }
type UpdatedMediaDataList = {
  data?: UpdatedMedia[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type OauthAccessTokenResponse = {
  access_token: string
  expires_in?: number | undefined
  refresh_token?: string | undefined
  token_type: string
  user_token?: string | undefined
}
type AuthorizeResponse = string
type SFXAssetDetails = { file_size?: number | undefined; url?: string | undefined }
type SFXAssets = {
  preview_mp3?: SFXAssetDetails | undefined
  waveform?: SFXAssetDetails | undefined
}
type SFX = {
  added_date?: string | undefined
  affiliate_url?: string | undefined
  artist?: string | undefined
  assets?: SFXAssets | undefined
  contributor: Contributor
  description?: string | undefined
  duration?: number | undefined
  id: string
  keywords?: string[] | undefined
  media_type: string
  releases?: string[] | undefined
  title?: string | undefined
  updated_time?: string | undefined
  url?: string | undefined
}
type SFXDataList = { data?: SFX[] | undefined }
type LicenseSFX = {
  audio_layout?: 'ambisonic' | '5.1' | 'stereo' | undefined
  format?: 'wav' | 'mp3' | undefined
  search_id?: string | undefined
  sfx_id: string
  subscription_id: string
}
type LicenseSFXRequest = { sound_effects: LicenseSFX[] }
type LicenseSFXResult = {
  allotment_charge?: number | undefined
  download?: Url | undefined
  error?: string | undefined
  license_id?: string | undefined
  sfx_id: string
}
type LicenseSFXResultDataList = {
  data?: LicenseSFXResult[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
}
type SfxUrl = { url: string }
type SFXSearchResults = {
  data: SFX[]
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  search_id: string
  total_count: number
}
type TestEcho = { text?: string | undefined }
type TestValidateHeader = { 'user-agent'?: string | undefined }
type TestValidateQuery = { id: number; tag?: string[] | undefined }
type TestValidate = {
  header?: TestValidateHeader | undefined
  query?: TestValidateQuery | undefined
}
type UserDetails = {
  contributor_id?: string | undefined
  customer_id?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  full_name?: string | undefined
  id?: string | undefined
  is_premier?: boolean | undefined
  is_premier_parent?: boolean | undefined
  language?: string | undefined
  last_name?: string | undefined
  only_enhanced_license?: boolean | undefined
  only_sensitive_use?: boolean | undefined
  organization_id?: string | undefined
  premier_permissions?: string[] | undefined
  username?: string | undefined
}
type AccessTokenDetails = {
  client_id?: string | undefined
  contributor_id?: string | undefined
  customer_id?: string | undefined
  expires_in?: number | undefined
  organization_id?: string | undefined
  realm?: 'customer' | 'contributor' | undefined
  scopes?: string[] | undefined
  user_id?: string | undefined
  username?: string | undefined
}
type Allotment = {
  downloads_left?: number | undefined
  downloads_limit?: number | undefined
  end_time?: string | undefined
  start_time?: string | undefined
}
type LicenseFormat = {
  description?: string | undefined
  format?: string | undefined
  media_type?: 'image' | 'video' | 'audio' | 'editorial' | undefined
  min_resolution?: number | undefined
  size?: string | undefined
}
type SubscriptionMetadata = { [x: string]: unknown }
type Subscription = {
  allotment?: Allotment | undefined
  asset_type?: string | undefined
  description?: string | undefined
  expiration_time?: string | undefined
  formats?: LicenseFormat[] | undefined
  id: string
  license?: string | undefined
  metadata?: SubscriptionMetadata | undefined
  price_per_download?: Price | undefined
}
type SubscriptionDataList = {
  data?: Subscription[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type VideoDataList = {
  data?: Video[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type VideoCollectionItemDataList = {
  data?: CollectionItem[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type LicenseVideo = {
  auth_cookie?: Cookie | undefined
  editorial_acknowledgement?: boolean | undefined
  metadata?: LicenseRequestMetadata | undefined
  price?: number | undefined
  search_id?: string | undefined
  show_modal?: boolean | undefined
  size?: 'web' | 'sd' | 'hd' | '4k' | undefined
  subscription_id?: string | undefined
  video_id: string
}
type LicenseVideoRequest = { videos: LicenseVideo[] }
type LicenseVideoResult = {
  allotment_charge?: number | undefined
  download?: Url | undefined
  error?: string | undefined
  license_id?: string | undefined
  price?: Price | undefined
  video_id: string
}
type LicenseVideoResultDataList = {
  data?: LicenseVideoResult[] | undefined
  errors?: Error[] | undefined
  message?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_count?: number | undefined
}
type RedownloadVideo = {
  auth_cookie?: Cookie | undefined
  show_modal?: boolean | undefined
  size?: 'web' | 'sd' | 'hd' | '4k' | undefined
  verification_code?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/ai/audio/descriptors': {
      $get:
        | {
            input: {
              query: {
                render_speed_over?: number | undefined
                band_id?: string | undefined
                band_name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                id?: string[] | undefined
                instrument_name?: string | undefined
                instrument_id?: string | undefined
                tempo?: number | undefined
                tempo_to?: number | undefined
                tempo_from?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: DescriptorsListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                render_speed_over?: number | undefined
                band_id?: string | undefined
                band_name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                id?: string[] | undefined
                instrument_name?: string | undefined
                instrument_id?: string | undefined
                tempo?: number | undefined
                tempo_to?: number | undefined
                tempo_from?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                render_speed_over?: number | undefined
                band_id?: string | undefined
                band_name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                id?: string[] | undefined
                instrument_name?: string | undefined
                instrument_id?: string | undefined
                tempo?: number | undefined
                tempo_to?: number | undefined
                tempo_from?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                render_speed_over?: number | undefined
                band_id?: string | undefined
                band_name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                id?: string[] | undefined
                instrument_name?: string | undefined
                instrument_id?: string | undefined
                tempo?: number | undefined
                tempo_to?: number | undefined
                tempo_from?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                render_speed_over?: number | undefined
                band_id?: string | undefined
                band_name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                id?: string[] | undefined
                instrument_name?: string | undefined
                instrument_id?: string | undefined
                tempo?: number | undefined
                tempo_to?: number | undefined
                tempo_from?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/ai/audio/instruments': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                per_page?: number | undefined
                page?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: InstrumentsListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                per_page?: number | undefined
                page?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                per_page?: number | undefined
                page?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                per_page?: number | undefined
                page?: number | undefined
                name?: string | undefined
                tag?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/ai/audio/renders': {
      $get:
        | {
            input: { query: { id: string[] } }
            output: AudioRendersListResults
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: CreateAudioRendersRequest }
            output: AudioRendersListResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAudioRendersRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateAudioRendersRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateAudioRendersRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/audio': {
      $get:
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: AudioDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/audio/collections': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: CollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: CollectionCreateRequest }
            output: CollectionCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/audio/collections/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/audio/collections/:id/items': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: CollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/audio/genres': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: GenreList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/audio/instruments': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: InstrumentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/audio/licenses': {
      $get:
        | {
            input: {
              query: {
                audio_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                audio_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                audio_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                audio_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                license?:
                  | 'audio_platform'
                  | 'premier_music_basic'
                  | 'premier_music_extended'
                  | 'premier_music_pro'
                  | 'premier_music_comp'
                  | 'asset_all_music'
                  | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseAudioRequest }
            output: LicenseAudioResultDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                license?:
                  | 'audio_platform'
                  | 'premier_music_basic'
                  | 'premier_music_extended'
                  | 'premier_music_pro'
                  | 'premier_music_comp'
                  | 'asset_all_music'
                  | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseAudioRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                license?:
                  | 'audio_platform'
                  | 'premier_music_basic'
                  | 'premier_music_extended'
                  | 'premier_music_pro'
                  | 'premier_music_comp'
                  | 'asset_all_music'
                  | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseAudioRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                license?:
                  | 'audio_platform'
                  | 'premier_music_basic'
                  | 'premier_music_extended'
                  | 'premier_music_pro'
                  | 'premier_music_comp'
                  | 'asset_all_music'
                  | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseAudioRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/audio/licenses/:id/downloads': {
      $post:
        | { input: { param: { id: string } }; output: AudioUrl; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/audio/moods': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: MoodList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/audio/search': {
      $get:
        | {
            input: {
              query: {
                artists?: string[] | undefined
                bpm?: number | undefined
                bpm_from?: number | undefined
                bpm_to?: number | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                genre?: string[] | undefined
                is_instrumental?: boolean | undefined
                instruments?: string[] | undefined
                moods?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'score'
                  | 'ranking_all'
                  | 'artist'
                  | 'title'
                  | 'bpm'
                  | 'freshness'
                  | 'duration'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                vocal_description?: string | undefined
                view?: 'minimal' | 'full' | undefined
                fields?: string | undefined
                library?: 'shutterstock' | 'premier' | undefined
                language?: string | undefined
              }
            }
            output: AudioSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                artists?: string[] | undefined
                bpm?: number | undefined
                bpm_from?: number | undefined
                bpm_to?: number | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                genre?: string[] | undefined
                is_instrumental?: boolean | undefined
                instruments?: string[] | undefined
                moods?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'score'
                  | 'ranking_all'
                  | 'artist'
                  | 'title'
                  | 'bpm'
                  | 'freshness'
                  | 'duration'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                vocal_description?: string | undefined
                view?: 'minimal' | 'full' | undefined
                fields?: string | undefined
                library?: 'shutterstock' | 'premier' | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                artists?: string[] | undefined
                bpm?: number | undefined
                bpm_from?: number | undefined
                bpm_to?: number | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                genre?: string[] | undefined
                is_instrumental?: boolean | undefined
                instruments?: string[] | undefined
                moods?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'score'
                  | 'ranking_all'
                  | 'artist'
                  | 'title'
                  | 'bpm'
                  | 'freshness'
                  | 'duration'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                vocal_description?: string | undefined
                view?: 'minimal' | 'full' | undefined
                fields?: string | undefined
                library?: 'shutterstock' | 'premier' | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                artists?: string[] | undefined
                bpm?: number | undefined
                bpm_from?: number | undefined
                bpm_to?: number | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                genre?: string[] | undefined
                is_instrumental?: boolean | undefined
                instruments?: string[] | undefined
                moods?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'score'
                  | 'ranking_all'
                  | 'artist'
                  | 'title'
                  | 'bpm'
                  | 'freshness'
                  | 'duration'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                vocal_description?: string | undefined
                view?: 'minimal' | 'full' | undefined
                fields?: string | undefined
                library?: 'shutterstock' | 'premier' | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/audio/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { view?: 'minimal' | 'full' | undefined; search_id?: string | undefined }
            }
            output: Audio
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { view?: 'minimal' | 'full' | undefined; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { view?: 'minimal' | 'full' | undefined; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { view?: 'minimal' | 'full' | undefined; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/bulk_search/images': {
      $post:
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            } & { json: BulkImageSearchRequest }
            output: BulkImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            } & { json: BulkImageSearchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            } & { json: BulkImageSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            } & { json: BulkImageSearchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/catalog/collections': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                shared?: boolean | undefined
              }
            }
            output: CatalogCollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                shared?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: {
        input: { json: CreateCatalogCollection }
        output: CatalogCollection
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/catalog/collections/:collection_id': {
      $delete:
        | {
            input: { param: { collection_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch: {
        input: { param: { collection_id: string } } & { json: UpdateCatalogCollection }
        output: CatalogCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/collections/:collection_id/items': {
      $delete: {
        input: { param: { collection_id: string } } & { json: RemoveCatalogCollectionItems }
        output: CatalogCollection
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { collection_id: string } } & { json: CreateCatalogCollectionItems }
        output: CatalogCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/search': {
      $get:
        | {
            input: {
              query: {
                sort?: 'newest' | 'oldest' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                collection_id?: string[] | undefined
                asset_type?:
                  | (
                      | 'image'
                      | 'video'
                      | 'audio'
                      | 'elements'
                      | 'editorial-image'
                      | 'editorial-video'
                    )[]
                  | undefined
              }
            }
            output: CatalogCollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'newest' | 'oldest' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                collection_id?: string[] | undefined
                asset_type?:
                  | (
                      | 'image'
                      | 'video'
                      | 'audio'
                      | 'elements'
                      | 'editorial-image'
                      | 'editorial-video'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                sort?: 'newest' | 'oldest' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                collection_id?: string[] | undefined
                asset_type?:
                  | (
                      | 'image'
                      | 'video'
                      | 'audio'
                      | 'elements'
                      | 'editorial-image'
                      | 'editorial-video'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                sort?: 'newest' | 'oldest' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                collection_id?: string[] | undefined
                asset_type?:
                  | (
                      | 'image'
                      | 'video'
                      | 'audio'
                      | 'elements'
                      | 'editorial-image'
                      | 'editorial-video'
                    )[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/contributors': {
      $get:
        | {
            input: { query: { id: string[] } }
            output: ContributorProfileDataList
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/contributors/:contributor_id': {
      $get:
        | {
            input: { param: { contributor_id: string } }
            output: ContributorProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contributor_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contributor_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contributor_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/contributors/:contributor_id/collections': {
      $get:
        | {
            input: { param: { contributor_id: string } } & {
              query: { sort?: 'newest' | 'last_updated' | 'item_count' | undefined }
            }
            output: CollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contributor_id: string } } & {
              query: { sort?: 'newest' | 'last_updated' | 'item_count' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contributor_id: string } } & {
              query: { sort?: 'newest' | 'last_updated' | 'item_count' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contributor_id: string } } & {
              query: { sort?: 'newest' | 'last_updated' | 'item_count' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contributor_id: string } } & {
              query: { sort?: 'newest' | 'last_updated' | 'item_count' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/contributors/:contributor_id/collections/:id': {
      $get:
        | {
            input: { param: { contributor_id: string; id: string } }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contributor_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contributor_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contributor_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contributor_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/contributors/:contributor_id/collections/:id/items': {
      $get:
        | {
            input: { param: { contributor_id: string; id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: CollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contributor_id: string; id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { contributor_id: string; id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { contributor_id: string; id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { contributor_id: string; id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/cv/images': {
      $post:
        | {
            input: { json: ImageCreateRequest }
            output: ComputerVisionImageCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 413 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 415 }
    }
  } & {
    '/v2/cv/keywords': {
      $get:
        | {
            input: { query: { asset_id: string | string } }
            output: KeywordDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { asset_id: string | string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { asset_id: string | string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { asset_id: string | string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { asset_id: string | string } }
            output: {}
            outputFormat: string
            status: 415
          }
    }
  } & {
    '/v2/cv/similar/images': {
      $get:
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: ImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/cv/similar/videos': {
      $get:
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: VideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                asset_id: string
                license?: ('commercial' | 'editorial')[] | undefined
                safe?: boolean | undefined
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/editorial/categories': {
      $get:
        | { input: {}; output: EditorialCategoryResults; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/editorial/images/categories': {
      $get:
        | { input: {}; output: EditorialImageCategoryResults; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/editorial/images/licenses': {
      $get:
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: LicenseEditorialContentRequest }
            output: LicenseEditorialContentResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/images/livefeeds': {
      $get:
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: EditorialImageLivefeedList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/editorial/images/livefeeds/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: EditorialImageLivefeed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/editorial/images/livefeeds/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: EditorialImageContentDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/editorial/images/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: EditorialSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/images/updated': {
      $get:
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: EditorialUpdatedResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/images/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: EditorialContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/editorial/licenses': {
      $post:
        | {
            input: { json: LicenseEditorialContentRequest }
            output: LicenseEditorialContentResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: LicenseEditorialContentRequest }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/livefeeds': {
      $get:
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: EditorialLivefeedList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { country: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/livefeeds/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: EditorialLivefeed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/livefeeds/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: EditorialContentDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { country: string } }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: EditorialSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/updated': {
      $get:
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: EditorialUpdatedResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                type: 'edit' | 'addition'
                date_updated_start: string
                date_updated_end: string
                date_taken_start?: string | undefined
                date_taken_end?: string | undefined
                cursor?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
                supplier_code?: string[] | undefined
                country: string
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/videos/categories': {
      $get:
        | { input: {}; output: EditorialVideoCategoryResults; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/editorial/videos/licenses': {
      $get:
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: LicenseEditorialVideoContentRequest }
            output: LicenseEditorialContentResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LicenseEditorialVideoContentRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: LicenseEditorialVideoContentRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: LicenseEditorialVideoContentRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/editorial/videos/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                resolution?: '4k' | 'high_definition' | 'standard_definition' | undefined
                fps?: number | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: EditorialVideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                resolution?: '4k' | 'high_definition' | 'standard_definition' | undefined
                fps?: number | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                resolution?: '4k' | 'high_definition' | 'standard_definition' | undefined
                fps?: number | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                resolution?: '4k' | 'high_definition' | 'standard_definition' | undefined
                fps?: number | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: 'relevant' | 'newest' | 'oldest' | undefined
                category?: string | undefined
                country: string
                supplier_code?: string[] | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                resolution?: '4k' | 'high_definition' | 'standard_definition' | undefined
                fps?: number | undefined
                per_page?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/videos/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: EditorialVideoContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/v2/editorial/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: EditorialContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { country: string; search_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/images': {
      $get:
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: ImageDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: ImageCreateRequest }
            output: ImageCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ImageCreateRequest }; output: {}; outputFormat: string; status: 413 }
    }
  } & {
    '/v2/images/categories': {
      $get:
        | {
            input: { query: { language?: Language | undefined } }
            output: CategoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/collections': {
      $get:
        | {
            input: {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: CollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: CollectionCreateRequest }
            output: CollectionCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/collections/featured': {
      $get:
        | {
            input: {
              query: {
                embed?: 'share_url' | undefined
                type?: ('photo' | 'editorial' | 'vector')[] | undefined
                asset_hint?: '1x' | '2x' | undefined
              }
            }
            output: FeaturedCollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                embed?: 'share_url' | undefined
                type?: ('photo' | 'editorial' | 'vector')[] | undefined
                asset_hint?: '1x' | '2x' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                embed?: 'share_url' | undefined
                type?: ('photo' | 'editorial' | 'vector')[] | undefined
                asset_hint?: '1x' | '2x' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                embed?: 'share_url' | undefined
                type?: ('photo' | 'editorial' | 'vector')[] | undefined
                asset_hint?: '1x' | '2x' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/collections/featured/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { embed?: 'share_url' | undefined; asset_hint?: '1x' | '2x' | undefined }
            }
            output: FeaturedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { embed?: 'share_url' | undefined; asset_hint?: '1x' | '2x' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { embed?: 'share_url' | undefined; asset_hint?: '1x' | '2x' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { embed?: 'share_url' | undefined; asset_hint?: '1x' | '2x' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { embed?: 'share_url' | undefined; asset_hint?: '1x' | '2x' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/images/collections/featured/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: CollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/images/collections/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/images/collections/:id/items': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: CollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/images/licenses': {
      $get:
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                image_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                format?: 'eps' | 'jpg' | undefined
                size?: 'small' | 'medium' | 'huge' | 'vector' | 'custom' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseImageRequest }
            output: LicenseImageResultDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                format?: 'eps' | 'jpg' | undefined
                size?: 'small' | 'medium' | 'huge' | 'vector' | 'custom' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseImageRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                format?: 'eps' | 'jpg' | undefined
                size?: 'small' | 'medium' | 'huge' | 'vector' | 'custom' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseImageRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                format?: 'eps' | 'jpg' | undefined
                size?: 'small' | 'medium' | 'huge' | 'vector' | 'custom' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseImageRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/licenses/:id/downloads': {
      $post:
        | {
            input: { param: { id: string } } & { json: RedownloadImage }
            output: Url
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RedownloadImage }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: RedownloadImage }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: RedownloadImage }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/recommendations': {
      $get:
        | {
            input: {
              query: { id: string[]; max_items?: number | undefined; safe?: boolean | undefined }
            }
            output: RecommendationDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { id: string[]; max_items?: number | undefined; safe?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { id: string[]; max_items?: number | undefined; safe?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { id: string[]; max_items?: number | undefined; safe?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/search': {
      $get:
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                ai_search?: boolean | undefined
                ai_labels_limit?: number | undefined
                ai_industry?:
                  | 'automotive'
                  | 'cpg'
                  | 'finance'
                  | 'healthcare'
                  | 'retail'
                  | 'technology'
                  | undefined
                ai_objective?: 'awareness' | 'traffic' | 'conversions' | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                query?: string | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            }
            output: ImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                ai_search?: boolean | undefined
                ai_labels_limit?: number | undefined
                ai_industry?:
                  | 'automotive'
                  | 'cpg'
                  | 'finance'
                  | 'healthcare'
                  | 'retail'
                  | 'technology'
                  | undefined
                ai_objective?: 'awareness' | 'traffic' | 'conversions' | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                query?: string | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                ai_search?: boolean | undefined
                ai_labels_limit?: number | undefined
                ai_industry?:
                  | 'automotive'
                  | 'cpg'
                  | 'finance'
                  | 'healthcare'
                  | 'retail'
                  | 'technology'
                  | undefined
                ai_objective?: 'awareness' | 'traffic' | 'conversions' | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                query?: string | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                aspect_ratio_min?: number | undefined
                aspect_ratio_max?: number | undefined
                aspect_ratio?: number | undefined
                ai_search?: boolean | undefined
                ai_labels_limit?: number | undefined
                ai_industry?:
                  | 'automotive'
                  | 'cpg'
                  | 'finance'
                  | 'healthcare'
                  | 'retail'
                  | 'technology'
                  | undefined
                ai_objective?: 'awareness' | 'traffic' | 'conversions' | undefined
                added_date_end?: string | undefined
                category?: string | undefined
                color?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | string[] | undefined
                fields?: string | undefined
                height?: number | undefined
                height_from?: number | undefined
                height_to?: number | undefined
                image_type?: ('photo' | 'illustration' | 'vector')[] | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial' | 'enhanced')[] | undefined
                model?: string[] | undefined
                orientation?: 'horizontal' | 'vertical' | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_model_released?: boolean | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                      | 'NOT african'
                      | 'NOT african_american'
                      | 'NOT black'
                      | 'NOT brazilian'
                      | 'NOT chinese'
                      | 'NOT caucasian'
                      | 'NOT east_asian'
                      | 'NOT hispanic'
                      | 'NOT japanese'
                      | 'NOT middle_eastern'
                      | 'NOT native_american'
                      | 'NOT pacific_islander'
                      | 'NOT south_asian'
                      | 'NOT southeast_asian'
                      | 'NOT other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                query?: string | undefined
                region?: string | string | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                spellcheck_query?: boolean | undefined
                view?: 'minimal' | 'full' | undefined
                width?: number | undefined
                width_from?: number | undefined
                width_to?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/search/suggestions': {
      $get:
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: Suggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: SearchEntitiesRequest }
            output: SearchEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SearchEntitiesRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SearchEntitiesRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SearchEntitiesRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/images/updated': {
      $get: {
        input: {
          query: {
            type?: ('addition' | 'deletion' | 'edit')[] | undefined
            start_date?: string | undefined
            end_date?: string | undefined
            interval?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'newest' | 'oldest' | undefined
          }
        }
        output: UpdatedMediaDataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/images/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: Image
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/images/:id/similar': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: ImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/oauth/access_token': {
      $post:
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: boolean | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: 'true' | 'false' | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
            } & {
              form: {
                client_id: string
                client_secret?: string | undefined
                code?: string | undefined
                expires?: 'true' | 'false' | undefined
                grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                realm?: 'customer' | 'contributor' | undefined
                refresh_token?: string | undefined
              }
            }
            output: OauthAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: boolean | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: 'true' | 'false' | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
            } & {
              form: {
                client_id: string
                client_secret?: string | undefined
                code?: string | undefined
                expires?: 'true' | 'false' | undefined
                grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                realm?: 'customer' | 'contributor' | undefined
                refresh_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: boolean | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: 'true' | 'false' | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
            } & {
              form: {
                client_id: string
                client_secret?: string | undefined
                code?: string | undefined
                expires?: 'true' | 'false' | undefined
                grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                realm?: 'customer' | 'contributor' | undefined
                refresh_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: boolean | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    code?: string | undefined
                    expires?: 'true' | 'false' | undefined
                    grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                    realm?: 'customer' | 'contributor' | undefined
                    refresh_token?: string | undefined
                  }
            } & {
              form: {
                client_id: string
                client_secret?: string | undefined
                code?: string | undefined
                expires?: 'true' | 'false' | undefined
                grant_type: 'authorization_code' | 'client_credentials' | 'refresh_token'
                realm?: 'customer' | 'contributor' | undefined
                refresh_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/oauth/authorize': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                realm?: 'customer' | 'contributor' | undefined
                redirect_uri: string
                response_type: 'code'
                scope?: string | undefined
                state: string
              }
            }
            output: AuthorizeResponse
            outputFormat: 'text'
            status: 302
          }
        | {
            input: {
              query: {
                client_id: string
                realm?: 'customer' | 'contributor' | undefined
                redirect_uri: string
                response_type: 'code'
                scope?: string | undefined
                state: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                client_id: string
                realm?: 'customer' | 'contributor' | undefined
                redirect_uri: string
                response_type: 'code'
                scope?: string | undefined
                state: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                client_id: string
                realm?: 'customer' | 'contributor' | undefined
                redirect_uri: string
                response_type: 'code'
                scope?: string | undefined
                state: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/sfx': {
      $get:
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: SFXDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/sfx/licenses': {
      $get:
        | {
            input: {
              query: {
                sfx_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                license_id?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sfx_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                license_id?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                sfx_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                license_id?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                sfx_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                license_id?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: LicenseSFXRequest }
            output: LicenseSFXResultDataList
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LicenseSFXRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: LicenseSFXRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: LicenseSFXRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/sfx/licenses/:id/downloads': {
      $post:
        | { input: { param: { id: string } }; output: SfxUrl; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/sfx/search': {
      $get:
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                safe?: boolean | undefined
                sort?: 'popular' | 'newest' | 'relevance' | 'random' | 'oldest' | undefined
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
              }
            }
            output: SFXSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                safe?: boolean | undefined
                sort?: 'popular' | 'newest' | 'relevance' | 'random' | 'oldest' | undefined
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                safe?: boolean | undefined
                sort?: 'popular' | 'newest' | 'relevance' | 'random' | 'oldest' | undefined
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                safe?: boolean | undefined
                sort?: 'popular' | 'newest' | 'relevance' | 'random' | 'oldest' | undefined
                view?: 'minimal' | 'full' | undefined
                language?: Language | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/sfx/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: SFX
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                library?: 'shutterstock' | 'premier' | 'premiumbeat' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/test': {
      $get:
        | {
            input: { query: { text?: string | undefined } }
            output: TestEcho
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { text?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { text?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { text?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/test/validate': {
      $get:
        | {
            input: { query: { id: number; tag?: string[] | undefined } } & {
              header: { 'user-agent'?: string | undefined }
            }
            output: TestValidate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number; tag?: string[] | undefined } } & {
              header: { 'user-agent'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { id: number; tag?: string[] | undefined } } & {
              header: { 'user-agent'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: number; tag?: string[] | undefined } } & {
              header: { 'user-agent'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/user': {
      $get:
        | { input: {}; output: UserDetails; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/user/access_token': {
      $get:
        | { input: {}; output: AccessTokenDetails; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/user/subscriptions': {
      $get:
        | { input: {}; output: SubscriptionDataList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v2/videos': {
      $get:
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: VideoDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id: string[]
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/categories': {
      $get:
        | {
            input: { query: { language?: Language | undefined } }
            output: CategoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: Language | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/collections': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: CollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                embed?: ('share_code' | 'share_url')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: CollectionCreateRequest }
            output: CollectionCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CollectionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/collections/featured': {
      $get:
        | {
            input: { query: { embed?: 'share_url' | undefined } }
            output: FeaturedCollectionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/collections/featured/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { embed?: 'share_url' | undefined } }
            output: FeaturedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { embed?: 'share_url' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/collections/featured/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: VideoCollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/collections/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                embed?: ('share_code' | 'share_url')[] | undefined
                share_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/collections/:id/items': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { item_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: CollectionItemDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                share_code?: string | undefined
                sort?: 'newest' | 'oldest' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CollectionItemRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/licenses': {
      $get:
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: DownloadHistoryDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                video_id?: string | undefined
                license?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'newest' | 'oldest' | undefined
                username?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                download_availability?: 'all' | 'downloadable' | 'non_downloadable' | undefined
                team_history?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                size?: 'web' | 'sd' | 'hd' | '4k' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseVideoRequest }
            output: LicenseVideoResultDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                size?: 'web' | 'sd' | 'hd' | '4k' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseVideoRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                size?: 'web' | 'sd' | 'hd' | '4k' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseVideoRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                subscription_id?: string | undefined
                size?: 'web' | 'sd' | 'hd' | '4k' | undefined
                search_id?: string | undefined
              }
            } & { json: LicenseVideoRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/licenses/:id/downloads': {
      $post:
        | {
            input: { param: { id: string } } & { json: RedownloadVideo }
            output: Url
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RedownloadVideo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: RedownloadVideo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: RedownloadVideo }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/search': {
      $get:
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                aspect_ratio?: '4_3' | '16_9' | 'nonstandard' | undefined
                category?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                fps?: number | undefined
                fps_from?: number | undefined
                fps_to?: number | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial')[] | undefined
                model?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                people_model_released?: boolean | undefined
                query?: string | undefined
                resolution?: '4k' | 'standard_definition' | 'high_definition' | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: VideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                aspect_ratio?: '4_3' | '16_9' | 'nonstandard' | undefined
                category?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                fps?: number | undefined
                fps_from?: number | undefined
                fps_to?: number | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial')[] | undefined
                model?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                people_model_released?: boolean | undefined
                query?: string | undefined
                resolution?: '4k' | 'standard_definition' | 'high_definition' | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                aspect_ratio?: '4_3' | '16_9' | 'nonstandard' | undefined
                category?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                fps?: number | undefined
                fps_from?: number | undefined
                fps_to?: number | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial')[] | undefined
                model?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                people_model_released?: boolean | undefined
                query?: string | undefined
                resolution?: '4k' | 'standard_definition' | 'high_definition' | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                aspect_ratio?: '4_3' | '16_9' | 'nonstandard' | undefined
                category?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                fps?: number | undefined
                fps_from?: number | undefined
                fps_to?: number | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial')[] | undefined
                model?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                people_model_released?: boolean | undefined
                query?: string | undefined
                resolution?: '4k' | 'standard_definition' | 'high_definition' | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                added_date?: string | undefined
                added_date_start?: string | undefined
                added_date_end?: string | undefined
                aspect_ratio?: '4_3' | '16_9' | 'nonstandard' | undefined
                category?: string | undefined
                contributor?: string[] | undefined
                contributor_country?: string[] | undefined
                duration?: number | undefined
                duration_from?: number | undefined
                duration_to?: number | undefined
                fps?: number | undefined
                fps_from?: number | undefined
                fps_to?: number | undefined
                keyword_safe_search?: boolean | undefined
                language?: Language | undefined
                license?: ('commercial' | 'editorial')[] | undefined
                model?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
                people_age?:
                  | 'infants'
                  | 'children'
                  | 'teenagers'
                  | '20s'
                  | '30s'
                  | '40s'
                  | '50s'
                  | '60s'
                  | 'older'
                  | undefined
                people_ethnicity?:
                  | (
                      | 'african'
                      | 'african_american'
                      | 'black'
                      | 'brazilian'
                      | 'chinese'
                      | 'caucasian'
                      | 'east_asian'
                      | 'hispanic'
                      | 'japanese'
                      | 'middle_eastern'
                      | 'native_american'
                      | 'pacific_islander'
                      | 'south_asian'
                      | 'southeast_asian'
                      | 'other'
                    )[]
                  | undefined
                people_gender?: 'male' | 'female' | 'both' | undefined
                people_number?: number | undefined
                people_model_released?: boolean | undefined
                query?: string | undefined
                resolution?: '4k' | 'standard_definition' | 'high_definition' | undefined
                safe?: boolean | undefined
                sort?: 'newest' | 'popular' | 'relevance' | 'random' | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/search/suggestions': {
      $get:
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: Suggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v2/videos/updated': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            interval?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'newest' | 'oldest' | undefined
          }
        }
        output: UpdatedMediaDataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/videos/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                view?: 'minimal' | 'full' | undefined
                search_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/videos/:id/similar': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: VideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                language?: Language | undefined
                page?: number | undefined
                per_page?: number | undefined
                view?: 'minimal' | 'full' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
