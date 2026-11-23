type AffiliateSearchStyle = 'photography' | 'vector'
type AutoCorrections = { phrase?: (string | null) | undefined }
type AffiliateImageUrls = {
  large?: (string | null) | undefined
  large_height?: number | undefined
  large_width?: number | undefined
  medium?: (string | null) | undefined
  medium_height?: number | undefined
  medium_width?: number | undefined
  small?: (string | null) | undefined
  small_height?: number | undefined
  small_width?: number | undefined
}
type AffiliateImage = {
  caption?: (string | null) | undefined
  destination_url?: (string | null) | undefined
  id?: (string | null) | undefined
  preview_urls?: AffiliateImageUrls | undefined
  title?: (string | null) | undefined
}
type AffiliateImageSearchResponse = {
  auto_corrections?: AutoCorrections | undefined
  images?: (AffiliateImage[] | null) | undefined
}
type AffiliateVideoUrls = {
  large_motion?: (string | null) | undefined
  large_still?: (string | null) | undefined
  medium_still?: (string | null) | undefined
  small_motion?: (string | null) | undefined
  small_still?: (string | null) | undefined
}
type AffiliateVideo = {
  caption?: (string | null) | undefined
  clip_length?: (string | null) | undefined
  destination_url?: (string | null) | undefined
  id?: (string | null) | undefined
  preview_urls?: AffiliateVideoUrls | undefined
  title?: (string | null) | undefined
}
type AffiliateVideoSearchResponse = {
  auto_corrections?: AutoCorrections | undefined
  videos?: (AffiliateVideo[] | null) | undefined
}
type ArtistsImageSearchFieldValues =
  | 'id'
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'asset_family'
  | 'asset_type'
  | 'call_for_image'
  | 'caption'
  | 'collection_id'
  | 'collection_code'
  | 'collection_name'
  | 'comp'
  | 'copyright'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'editorial_segments'
  | 'event_ids'
  | 'graphical_style'
  | 'keywords'
  | 'license_model'
  | 'max_dimensions'
  | 'orientation'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'summary_set'
  | 'thumb'
  | 'title'
type ArtistsVideoSearchFieldValues =
  | 'id'
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'asset_family'
  | 'asset_type'
  | 'call_for_image'
  | 'caption'
  | 'clip_length'
  | 'collection_id'
  | 'collection_code'
  | 'collection_name'
  | 'comp'
  | 'copyright'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'editorial_segments'
  | 'event_ids'
  | 'graphical_style'
  | 'keywords'
  | 'license_model'
  | 'max_dimensions'
  | 'orientation'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'summary_set'
  | 'thumb'
  | 'title'
type ChangedAssetDetail = {
  asset_changed_utc_datetime?: string | undefined
  asset_lifecycle?: (string | null) | undefined
  asset_type?: (string | null) | undefined
  id?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type AssetChanges = {
  change_set_id?: (string | null) | undefined
  changed_assets?: (ChangedAssetDetail[] | null) | undefined
}
type AssetFamily = 'NotSet' | 'Editorial' | 'Creative' | 'Both'
type AssetType = 'NotSet' | 'Image' | 'Film' | 'Music'
type Channel = {
  AssetChangeType?: (string | null) | undefined
  AssetFamily?: AssetFamily | undefined
  AssetType?: AssetType | undefined
  ChannelId?: number | undefined
  CreateDateUtc?: string | undefined
  Metadata?: (string | null) | undefined
  NotificationCount?: number | undefined
  OldestChangeNotificationDateUtc?: string | undefined
}
type ExtendedLicenses = 'multiseat' | 'unlimited' | 'resale' | 'indemnification'
type AcquireAssetLicensesRequest = {
  extended_licenses: ExtendedLicenses[]
  use_team_credits?: boolean | undefined
}
type AssetLicensingResponse = {
  acquired_licenses?: (ExtendedLicenses[] | null) | undefined
  credits_used?: number | undefined
}
type AssetEvent = {
  asset_id?: (string | null) | undefined
  email_address?: (string | null) | undefined
  timestamp?: string | undefined
}
type GetSendEventsResponse = {
  asset_send_events?: (AssetEvent[] | null) | undefined
  last_offset?: (string | null) | undefined
}
type BoardRelationship = 'owned' | 'invited'
type BoardSortOrder =
  | 'date_last_updated_descending'
  | 'date_last_updated_ascending'
  | 'name_ascending'
  | 'name_decending'
type DisplaySize = { name?: (string | null) | undefined; uri?: (string | null) | undefined }
type Asset = {
  asset_type?: (string | null) | undefined
  date_added?: string | undefined
  display_sizes?: (DisplaySize[] | null) | undefined
  id?: (string | null) | undefined
}
type BoardListBoard = {
  asset_count?: number | undefined
  board_relationship?: (string | null) | undefined
  date_created?: string | undefined
  date_last_updated?: string | undefined
  description?: (string | null) | undefined
  hero_asset?: Asset | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type BoardList = {
  board_count?: number | undefined
  boards?: (BoardListBoard[] | null) | undefined
}
type BoardInfo = { description?: (string | null) | undefined; name: string }
type BoardCreated = { id?: (string | null) | undefined }
type Links = { invitation?: (string | null) | undefined; share?: (string | null) | undefined }
type BoardPermissions = {
  can_add_assets?: boolean | undefined
  can_delete_board?: boolean | undefined
  can_invite_to_board?: boolean | undefined
  can_remove_assets?: boolean | undefined
  can_update_description?: boolean | undefined
  can_update_name?: boolean | undefined
}
type BoardDetail = {
  asset_count?: number | undefined
  assets?: (Asset[] | null) | undefined
  comment_count?: number | undefined
  date_created?: string | undefined
  date_last_updated?: string | undefined
  description?: (string | null) | undefined
  id?: (string | null) | undefined
  links?: Links | undefined
  name?: (string | null) | undefined
  permissions?: BoardPermissions | undefined
}
type BoardAsset = { asset_id: string }
type AddBoardAssetsResult = {
  assets_added?: (BoardAsset[] | null) | undefined
  assets_not_added?: (string[] | null) | undefined
}
type Collaborator = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
}
type CommentPermissions = { can_delete_comment?: boolean | undefined }
type Comment = {
  created_by?: Collaborator | undefined
  date_created?: string | undefined
  id?: (string | null) | undefined
  permissions?: CommentPermissions | undefined
  text?: (string | null) | undefined
}
type BoardCommentPermissions = { can_add_comment?: boolean | undefined }
type CommentsList = {
  comments?: (Comment[] | null) | undefined
  permissions?: BoardCommentPermissions | undefined
}
type CommentRequest = { text?: (string | null) | undefined }
type CommentCreated = { id?: (string | null) | undefined }
type Collection = {
  asset_family?: (string | null) | undefined
  code?: (string | null) | undefined
  id?: number | undefined
  license_model?: (string | null) | undefined
  name?: (string | null) | undefined
  product_types?: (string[] | null) | undefined
}
type CollectionsList = { collections?: (Collection[] | null) | undefined }
type Country = {
  iso_alpha_2?: (string | null) | undefined
  iso_alpha_3?: (string | null) | undefined
  name?: (string | null) | undefined
}
type CountriesList = { countries?: (Country[] | null) | undefined }
type CustomerInfoResponse = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
}
type ProductTypeForDownloads =
  | 'easyaccess'
  | 'editorialsubscription'
  | 'imagepack'
  | 'premiumaccess'
  | 'royaltyfreesubscription'
  | 'creditpack'
type Dimensions = {
  dpi?: (number | null) | undefined
  height?: (number | null) | undefined
  width?: (number | null) | undefined
}
type DownloadDetails = {
  download_notes?: (string | null) | undefined
  project_code?: (string | null) | undefined
}
type User = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  username?: (string | null) | undefined
}
type HistoricalDownload = {
  agreement_name?: (string | null) | undefined
  asset_type?: (string | null) | undefined
  date_downloaded?: string | undefined
  dimensions?: Dimensions | undefined
  download_details?: DownloadDetails | undefined
  download_source?: (string | null) | undefined
  id?: (string | null) | undefined
  product_id?: number | undefined
  product_type?: (string | null) | undefined
  size_name?: (string | null) | undefined
  thumb_uri?: (string | null) | undefined
  user?: User | undefined
}
type GetDownloadsResponse = {
  downloads?: (HistoricalDownload[] | null) | undefined
  result_count?: number | undefined
}
type DownloadFileType = 'eps' | 'jpg'
type PremiumAccessDownloadData = {
  download_notes?: (string | null) | undefined
  project_code?: (string | null) | undefined
}
type EventDetailFieldValues =
  | 'id'
  | 'child_event_count'
  | 'editorial_segments'
  | 'hero_image'
  | 'image_count'
  | 'location'
  | 'name'
  | 'start_date'
  | 'type'
type ImageDetailFieldValues =
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'artist_title'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'city'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'country'
  | 'credit_line'
  | 'date_camera_shot'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_sizes'
  | 'download_product'
  | 'downloads'
  | 'editorial_segments'
  | 'editorial_source'
  | 'entity_details'
  | 'event_ids'
  | 'graphical_style'
  | 'id'
  | 'istock_collection'
  | 'istock_licenses'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'links'
  | 'max_dimensions'
  | 'object_name'
  | 'orientation'
  | 'people'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'state_province'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'uri_oembed'
type ImagesDetailResults = {
  images?: ({ [x: string]: unknown } | null) | undefined
  images_not_found?: (string[] | null) | undefined
}
type AssetDownloadHistoryResults = {
  downloads?: ({ [x: string]: unknown } | null) | undefined
  id?: (string | null) | undefined
}
type ImagesFieldValues =
  | 'accessrestriction'
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_camera_shot'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'editorial_segments'
  | 'editorial_source'
  | 'entity_details'
  | 'event_ids'
  | 'graphical_style'
  | 'id'
  | 'istock_collection'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'max_dimensions'
  | 'orientation'
  | 'people'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'uri_oembed'
type AllowedUse = {
  how_can_i_use_it?: (string | null) | undefined
  release_info?: (string | null) | undefined
  usage_restrictions?: (string[] | null) | undefined
}
type ImageSearchItemDisplaySize = {
  is_watermarked?: boolean | undefined
  name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type AssetLicenseName = 'Standard' | 'Multiseat' | 'Unlimited' | 'Resale' | 'Indemnification'
type IStockLicense = { credits?: number | undefined; license_type?: AssetLicenseName | undefined }
type Keyword = {
  entity_types?: (string[] | null) | undefined
  entity_uris?: (string[] | null) | undefined
  keyword_id?: (string | null) | undefined
  relevance?: (number | null) | undefined
  text?: (string | null) | undefined
  type?: (string | null) | undefined
}
type Download = {
  agreement_name?: (string | null) | undefined
  product_id?: (string | null) | undefined
  product_type?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type MaxDimensions = { height?: number | undefined; width?: number | undefined }
type ReferralDestination = {
  site_name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ImageSearchItem = {
  allowed_use?: AllowedUse | undefined
  alternative_ids?: ({ [x: string]: string } | null) | undefined
  artist?: (string | null) | undefined
  asset_family?: (string | null) | undefined
  call_for_image?: boolean | undefined
  caption?: (string | null) | undefined
  collection_code?: (string | null) | undefined
  collection_id?: (number | null) | undefined
  collection_name?: (string | null) | undefined
  color_type?: (string | null) | undefined
  copyright?: (string | null) | undefined
  date_camera_shot?: (string | null) | undefined
  date_created?: (string | null) | undefined
  display_sizes?: (ImageSearchItemDisplaySize[] | null) | undefined
  download_product?: (string | null) | undefined
  editorial_segments?: (string[] | null) | undefined
  event_ids?: (number[] | null) | undefined
  graphical_style?: (string | null) | undefined
  id?: (string | null) | undefined
  istock_licenses?: (IStockLicense[] | null) | undefined
  keywords?: (Keyword[] | null) | undefined
  largest_downloads?: (Download[] | null) | undefined
  license_model?: (string | null) | undefined
  max_dimensions?: MaxDimensions | undefined
  orientation?: (string | null) | undefined
  people?: (string[] | null) | undefined
  product_types?: (string[] | null) | undefined
  quality_rank?: number | undefined
  referral_destinations?: (ReferralDestination[] | null) | undefined
  title?: (string | null) | undefined
  uri_oembed?: (string | null) | undefined
}
type RelatedSearch = { phrase?: (string | null) | undefined; url?: (string | null) | undefined }
type ImageSearchItemSearchResults = {
  images?: (ImageSearchItem[] | null) | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
}
type AssetIdFromOrder = { id?: (string | null) | undefined }
type OrderNotes = {
  licensee_name?: (string | null) | undefined
  ordered_by?: (string | null) | undefined
  project_title?: (string | null) | undefined
  purchase_order_number?: (string | null) | undefined
}
type OrderDetail = {
  assets?: (AssetIdFromOrder[] | null) | undefined
  end_client?: (string | null) | undefined
  id?: (string | null) | undefined
  invoice_number?: (string | null) | undefined
  notes?: OrderNotes | undefined
  order_date?: string | undefined
}
type ProductFieldValues = 'download_requirements'
type DownloadRequirements = {
  is_note_required?: boolean | undefined
  is_project_code_required?: boolean | undefined
  project_codes?: (string[] | null) | undefined
}
type OverageDetails = {
  count?: (number | null) | undefined
  limit?: (number | null) | undefined
  overages_reached?: (boolean | null) | undefined
  remaining?: (number | null) | undefined
}
type ProductStatus = 'active' | 'inactive'
type ProductTypeResponse =
  | 'easyaccess'
  | 'editorialsubscription'
  | 'imagepack'
  | 'premiumaccess'
  | 'royaltyfreesubscription'
  | 'creditpack'
type Product = {
  agreement_name?: (string | null) | undefined
  application_website?: (string | null) | undefined
  credits_remaining?: (number | null) | undefined
  download_limit?: (number | null) | undefined
  download_limit_duration?: (string | null) | undefined
  download_limit_reset_utc_date?: (string | null) | undefined
  download_requirements?: DownloadRequirements | undefined
  downloads_remaining?: (number | null) | undefined
  expiration_utc_date?: (string | null) | undefined
  id?: number | undefined
  imagepack_resolution?: (string | null) | undefined
  name?: (string | null) | undefined
  overage?: OverageDetails | undefined
  status?: ProductStatus | undefined
  team_credits?: (number | null) | undefined
  type?: ProductTypeResponse | undefined
}
type ProductsResult = { products?: (Product[] | null) | undefined }
type PreviousAssetPurchase = {
  asset_id?: (string | null) | undefined
  asset_type?: (string | null) | undefined
  date_purchased?: string | undefined
  download_uri?: (string | null) | undefined
  file_size_in_bytes?: (string | null) | undefined
  license_model?: (string | null) | undefined
  order_id?: (string | null) | undefined
  purchased_by?: (string | null) | undefined
  size_name?: (string | null) | undefined
  thumb_uri?: (string | null) | undefined
}
type PreviousAssetPurchases = {
  previous_purchases?: (PreviousAssetPurchase[] | null) | undefined
  result_count?: number | undefined
}
type EditorialSegmentContract =
  | 'archival'
  | 'entertainment'
  | 'news'
  | 'publicity'
  | 'royalty'
  | 'sport'
type EventFieldValues =
  | 'id'
  | 'child_event_count'
  | 'editorial_segments'
  | 'hero_image'
  | 'image_count'
  | 'keywords'
  | 'location'
  | 'name'
  | 'start_date'
  | 'type'
type EventSearchSortOrder = 'newest' | 'oldest'
type HeroImageDisplaySize = {
  is_watermarked?: boolean | undefined
  name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type HeroImage = {
  display_sizes?: (HeroImageDisplaySize[] | null) | undefined
  id?: (string | null) | undefined
}
type LocationEvent = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  state_province?: (string | null) | undefined
  venue?: (string | null) | undefined
}
type Event = {
  child_event_count?: number | undefined
  editorial_segments?: (string[] | null) | undefined
  hero_image?: HeroImage | undefined
  id?: number | undefined
  image_count?: number | undefined
  location?: LocationEvent | undefined
  name?: (string | null) | undefined
  start_date?: (string | null) | undefined
}
type EventsSearchResult = {
  events?: (Event[] | null) | undefined
  result_count?: number | undefined
}
type AgeOfPeopleFilterType =
  | 'newborn'
  | 'baby'
  | 'child'
  | 'teenager'
  | 'young_adult'
  | 'adult'
  | 'adults_only'
  | 'mature_adult'
  | 'senior_adult'
  | '0-1_months'
  | '2-5_months'
  | '6-11_months'
  | '12-17_months'
  | '18-23_months'
  | '2-3_years'
  | '4-5_years'
  | '6-7_years'
  | '8-9_years'
  | '10-11_years'
  | '12-13_years'
  | '14-15_years'
  | '16-17_years'
  | '18-19_years'
  | '20-24_years'
  | '20-29_years'
  | '25-29_years'
  | '30-34_years'
  | '30-39_years'
  | '35-39_years'
  | '40-44_years'
  | '40-49_years'
  | '45-49_years'
  | '50-54_years'
  | '50-59_years'
  | '55-59_years'
  | '60-64_years'
  | '60-69_years'
  | '65-69_years'
  | '70-79_years'
  | '80-89_years'
  | '90_plus_years'
  | '100_over'
type CollectionsFilterType = 'include' | 'exclude'
type CompositionsFilterType =
  | 'abstract'
  | 'candid'
  | 'close_up'
  | 'copy_space'
  | 'cut_out'
  | 'full_frame'
  | 'full_length'
  | 'headshot'
  | 'looking_at_camera'
  | 'macro'
  | 'portrait'
  | 'sparse'
  | 'still_life'
  | 'three_quarter_length'
  | 'waist_up'
type EthnicityFilterType =
  | 'black'
  | 'caucasian'
  | 'east_asian'
  | 'hispanic_latino'
  | 'japanese'
  | 'middle_eastern'
  | 'mixed_race_person'
  | 'multiethnic_group'
  | 'native_american_first_nations'
  | 'pacific_islander'
  | 'south_asian'
  | 'southeast_asian'
type SearchFileType = 'eps' | 'jpg'
type GraphicalStyle = 'fine_art' | 'illustration' | 'photography' | 'vector'
type GraphicalStylesFilterType = 'include' | 'exclude'
type TeeShirtSize = 'x_small' | 'small' | 'medium' | 'large' | 'x_large' | 'xx_large' | 'vector'
type NumberOfPeopleFilterType = 'none' | 'one' | 'two' | 'group'
type ImageOrientationRequest =
  | 'horizontal'
  | 'vertical'
  | 'square'
  | 'panoramic_horizontal'
  | 'panoramic_vertical'
type BlendedImageSortOrder = 'best_match' | 'most_popular' | 'newest' | 'random'
type CreativeImagesFieldValues =
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_camera_shot'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'graphical_style'
  | 'id'
  | 'istock_collection'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'max_dimensions'
  | 'orientation'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'uri_oembed'
type CreativeImageSortOrder = 'best_match' | 'most_popular' | 'newest' | 'random'
type CreateImageSearchFacetsFields = 'artists' | 'locations'
type ImageSearchItemCreative = {
  allowed_use?: AllowedUse | undefined
  alternative_ids?: ({ [x: string]: string } | null) | undefined
  artist?: (string | null) | undefined
  asset_family?: (string | null) | undefined
  call_for_image?: boolean | undefined
  caption?: (string | null) | undefined
  collection_code?: (string | null) | undefined
  collection_id?: (number | null) | undefined
  collection_name?: (string | null) | undefined
  color_type?: (string | null) | undefined
  copyright?: (string | null) | undefined
  date_camera_shot?: (string | null) | undefined
  date_created?: (string | null) | undefined
  display_sizes?: (ImageSearchItemDisplaySize[] | null) | undefined
  download_product?: (string | null) | undefined
  graphical_style?: (string | null) | undefined
  id?: (string | null) | undefined
  keywords?: (Keyword[] | null) | undefined
  largest_downloads?: (Download[] | null) | undefined
  license_model?: (string | null) | undefined
  max_dimensions?: MaxDimensions | undefined
  orientation?: (string | null) | undefined
  quality_rank?: number | undefined
  referral_destinations?: (ReferralDestination[] | null) | undefined
  title?: (string | null) | undefined
  uri_oembed?: (string | null) | undefined
}
type CreativeImageSearchResults = {
  auto_corrections?: AutoCorrections | undefined
  images?: (ImageSearchItemCreative[] | null) | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
}
type Artist = { name?: (string | null) | undefined }
type Entertainment = { id?: number | undefined; name?: (string | null) | undefined }
type FacetEvent = {
  date?: string | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type Location = { id?: number | undefined; name?: (string | null) | undefined }
type SpecificPeople = { id?: number | undefined; name?: (string | null) | undefined }
type SearchFacetsResponse = {
  artists?: (Artist[] | null) | undefined
  entertainment?: (Entertainment[] | null) | undefined
  events?: (FacetEvent[] | null) | undefined
  locations?: (Location[] | null) | undefined
  specific_people?: (SpecificPeople[] | null) | undefined
}
type SearchByImageResourceResults = {
  auto_corrections?: AutoCorrections | undefined
  facets?: SearchFacetsResponse | undefined
  image_fingerprint?: (string | null) | undefined
  images?: ({ [x: string]: unknown } | null) | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
}
type EditorialImagesFieldValues =
  | 'allowed_use'
  | 'alternative_ids'
  | 'artist'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_camera_shot'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'editorial_segments'
  | 'editorial_source'
  | 'event_ids'
  | 'graphical_style'
  | 'id'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'max_dimensions'
  | 'orientation'
  | 'people'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'uri_oembed'
type EditorialGraphicalStyle = 'photography' | 'illustration' | 'vector'
type SortOrder = 'best_match' | 'most_popular' | 'newest' | 'oldest' | 'random'
type EditorialImageSearchFacetsFields = 'artists' | 'events' | 'locations' | 'specific_people'
type EditorialSource = { id?: number | undefined }
type ImageSearchItemEditorial = {
  allowed_use?: AllowedUse | undefined
  alternative_ids?: ({ [x: string]: string } | null) | undefined
  artist?: (string | null) | undefined
  asset_family?: (string | null) | undefined
  call_for_image?: boolean | undefined
  caption?: (string | null) | undefined
  collection_code?: (string | null) | undefined
  collection_id?: (number | null) | undefined
  collection_name?: (string | null) | undefined
  color_type?: (string | null) | undefined
  copyright?: (string | null) | undefined
  date_camera_shot?: (string | null) | undefined
  date_created?: (string | null) | undefined
  display_sizes?: (ImageSearchItemDisplaySize[] | null) | undefined
  download_product?: (string | null) | undefined
  editorial_segments?: (string[] | null) | undefined
  editorial_source?: EditorialSource | undefined
  event_ids?: (number[] | null) | undefined
  graphical_style?: (string | null) | undefined
  id?: (string | null) | undefined
  keywords?: (Keyword[] | null) | undefined
  largest_downloads?: (Download[] | null) | undefined
  license_model?: (string | null) | undefined
  max_dimensions?: MaxDimensions | undefined
  orientation?: (string | null) | undefined
  people?: (string[] | null) | undefined
  product_types?: (string[] | null) | undefined
  quality_rank?: number | undefined
  referral_destinations?: (ReferralDestination[] | null) | undefined
  title?: (string | null) | undefined
  uri_oembed?: (string | null) | undefined
}
type EditorialImageSearchResults = {
  images?: (ImageSearchItemEditorial[] | null) | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
}
type VideoAspectRatioFilterType = '16:9' | '9:16' | '3:4' | '4:3' | '4:5' | '2:1' | '17:9' | '9:17'
type CreativeVideosFieldValues =
  | 'allowed_use'
  | 'artist'
  | 'aspect_ratio'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'clip_length'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'era'
  | 'id'
  | 'istock_collection'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'mastered_to'
  | 'object_name'
  | 'orientation'
  | 'originally_shot_on'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'shot_speed'
  | 'summary_set'
  | 'thumb'
  | 'title'
type VideoFormatsRequest = 'sd' | 'hd' | '4k' | 'hd_web'
type VideoFrameRates = '23.98' | '24' | '25' | '29.97' | '30' | '50' | '59.94' | '60'
type ImageTechniquesFilterType =
  | 'realtime'
  | 'time_lapse'
  | 'slow_motion'
  | 'color'
  | 'black_and_white'
  | 'animation'
  | 'selective_focus'
type LicenseModelVideoRequest = 'rightsready' | 'royaltyfree'
type VideoOrientationRequest = 'horizontal' | 'vertical'
type CreativeVideoSortOrder = 'best_match' | 'most_popular' | 'newest' | 'random'
type ReleaseStatus = 'release_not_important' | 'fully_released'
type CreateVideoSearchFacetsFields = 'artists' | 'locations'
type ViewpointsFilterType =
  | 'lockdown'
  | 'panning'
  | 'tracking_shot'
  | 'aerial_view'
  | 'high_angle_view'
  | 'low_angle_view'
  | 'tilt'
  | 'point_of_view'
type VideoSearchItemDisplaySize = {
  aspect_ratio?: (string | null) | undefined
  is_watermarked?: boolean | undefined
  name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type CreativeVideoSearchItem = {
  allowed_use?: AllowedUse | undefined
  artist?: (string | null) | undefined
  asset_family?: (string | null) | undefined
  caption?: (string | null) | undefined
  clip_length?: (string | null) | undefined
  collection_code?: (string | null) | undefined
  collection_id?: (number | null) | undefined
  collection_name?: (string | null) | undefined
  color_type?: (string | null) | undefined
  copyright?: (string | null) | undefined
  date_created?: (string | null) | undefined
  display_sizes?: (VideoSearchItemDisplaySize[] | null) | undefined
  download_product?: (string | null) | undefined
  era?: (string | null) | undefined
  event_ids?: (number[] | null) | undefined
  id?: (string | null) | undefined
  istock_licenses?: (IStockLicense[] | null) | undefined
  keywords?: (Keyword[] | null) | undefined
  largest_downloads?: (Download[] | null) | undefined
  license_model?: (string | null) | undefined
  mastered_to?: (string | null) | undefined
  originally_shot_on?: (string | null) | undefined
  product_types?: (string[] | null) | undefined
  referral_destinations?: (ReferralDestination[] | null) | undefined
  shot_speed?: (string | null) | undefined
  title?: (string | null) | undefined
}
type CreativeVideoSearchResults = {
  auto_corrections?: AutoCorrections | undefined
  facets?: SearchFacetsResponse | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
  videos?: (CreativeVideoSearchItem[] | null) | undefined
}
type EditorialVideoType = 'raw' | 'produced'
type EditorialVideosFieldValues =
  | 'allowed_use'
  | 'artist'
  | 'aspect_ratio'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'clip_length'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'editorial_segments'
  | 'era'
  | 'event_ids'
  | 'id'
  | 'istock_collection'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'mastered_to'
  | 'object_name'
  | 'orientation'
  | 'originally_shot_on'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'shot_speed'
  | 'source'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'istock_licenses'
type EditorialVideoSearchFacetsFields = 'artists' | 'events' | 'locations' | 'specific_people'
type EditorialVideoSearchItem = {
  allowed_use?: AllowedUse | undefined
  artist?: (string | null) | undefined
  asset_family?: (string | null) | undefined
  caption?: (string | null) | undefined
  clip_length?: (string | null) | undefined
  collection_code?: (string | null) | undefined
  collection_id?: (number | null) | undefined
  collection_name?: (string | null) | undefined
  color_type?: (string | null) | undefined
  copyright?: (string | null) | undefined
  date_created?: (string | null) | undefined
  display_sizes?: (VideoSearchItemDisplaySize[] | null) | undefined
  download_product?: (string | null) | undefined
  era?: (string | null) | undefined
  event_ids?: (number[] | null) | undefined
  id?: (string | null) | undefined
  istock_licenses?: (IStockLicense[] | null) | undefined
  keywords?: (Keyword[] | null) | undefined
  largest_downloads?: (Download[] | null) | undefined
  license_model?: (string | null) | undefined
  mastered_to?: (string | null) | undefined
  originally_shot_on?: (string | null) | undefined
  product_types?: (string[] | null) | undefined
  referral_destinations?: (ReferralDestination[] | null) | undefined
  shot_speed?: (string | null) | undefined
  source?: (string | null) | undefined
  title?: (string | null) | undefined
}
type EditorialVideoSearchResults = {
  facets?: SearchFacetsResponse | undefined
  related_searches?: (RelatedSearch[] | null) | undefined
  result_count?: number | undefined
  videos?: (EditorialVideoSearchItem[] | null) | undefined
}
type AssetUsage = {
  asset_id?: (string | null) | undefined
  quantity?: number | undefined
  usage_date?: string | undefined
}
type ReportUsageBatchRequest = { asset_usages?: (AssetUsage[] | null) | undefined }
type ReportUsageBatchResponse = {
  invalid_assets?: (string[] | null) | undefined
  total_asset_usages_processed?: (number | null) | undefined
}
type VideoDetailFieldValues =
  | 'id'
  | 'allowed_use'
  | 'artist'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'city'
  | 'clip_length'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'country'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_sizes'
  | 'download_product'
  | 'downloads'
  | 'editorial_segments'
  | 'entity_details'
  | 'era'
  | 'event_ids'
  | 'istock_collection'
  | 'istock_licenses'
  | 'key_frames'
  | 'keywords'
  | 'license_model'
  | 'mastered_to'
  | 'object_name'
  | 'orientation'
  | 'originally_shot_on'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'shot_speed'
  | 'source'
  | 'state_province'
  | 'summary_set'
  | 'thumb'
  | 'title'
type AssociatedVideoDetailFieldValues =
  | 'allowed_use'
  | 'artist'
  | 'aspect_ratio'
  | 'asset_family'
  | 'call_for_image'
  | 'caption'
  | 'clip_length'
  | 'collection_code'
  | 'collection_id'
  | 'collection_name'
  | 'color_type'
  | 'comp'
  | 'copyright'
  | 'date_created'
  | 'date_submitted'
  | 'detail_set'
  | 'display_set'
  | 'download_product'
  | 'download_sizes'
  | 'editorial_segments'
  | 'entity_details'
  | 'era'
  | 'event_ids'
  | 'id'
  | 'istock_collection'
  | 'keywords'
  | 'largest_downloads'
  | 'license_model'
  | 'mastered_to'
  | 'orientation'
  | 'originally_shot_on'
  | 'preview'
  | 'product_types'
  | 'quality_rank'
  | 'referral_destinations'
  | 'shot_speed'
  | 'source'
  | 'summary_set'
  | 'thumb'
  | 'title'
  | 'istock_licenses'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/affiliates/search/images': {
      $get: {
        input: {
          query: { phrase?: (string | null) | undefined; style?: AffiliateSearchStyle | undefined }
        } & { header: { 'Accept-Language'?: string | undefined } }
        output: AffiliateImageSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/affiliates/search/videos': {
      $get: {
        input: { query: { phrase?: (string | null) | undefined } } & {
          header: { 'Accept-Language'?: string | undefined }
        }
        output: AffiliateVideoSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/artists/images': {
      $get:
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsImageSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsImageSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsImageSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/artists/videos': {
      $get:
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsVideoSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsVideoSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                artist_name?: (string | null) | undefined
                fields?: (ArtistsVideoSearchFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/asset-changes/change-sets': {
      $put:
        | {
            input: {
              query: { channel_id?: number | undefined; batch_size?: (number | null) | undefined }
            }
            output: AssetChanges
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { channel_id?: number | undefined; batch_size?: (number | null) | undefined }
            }
            output: AssetChanges
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { channel_id?: number | undefined; batch_size?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { channel_id?: number | undefined; batch_size?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { channel_id?: number | undefined; batch_size?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/asset-changes/change-sets/:change-set-id': {
      $delete:
        | {
            input: { param: { 'change-set-id': bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { 'change-set-id': bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'change-set-id': bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'change-set-id': bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/asset-changes/channels': {
      $get:
        | { input: {}; output: Channel[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v3/asset-licensing/:assetId': {
      $post:
        | {
            input: { param: { assetId: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: AcquireAssetLicensesRequest }
            output: AssetLicensingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: AcquireAssetLicensesRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { assetId: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: AcquireAssetLicensesRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { assetId: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: AcquireAssetLicensesRequest }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { assetId: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: AcquireAssetLicensesRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/asset-management/assets/send-events': {
      $get:
        | {
            input: {
              query: {
                last_offset?: (string | null) | undefined
                event_count?: (number | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: GetSendEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                last_offset?: (string | null) | undefined
                event_count?: (number | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: GetSendEventsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                last_offset?: (string | null) | undefined
                event_count?: (number | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: GetSendEventsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                last_offset?: (string | null) | undefined
                event_count?: (number | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v3/boards': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                board_relationship?: BoardRelationship | undefined
                sort_order?: BoardSortOrder | undefined
                pageSize?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: BoardList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                board_relationship?: BoardRelationship | undefined
                sort_order?: BoardSortOrder | undefined
                pageSize?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                board_relationship?: BoardRelationship | undefined
                sort_order?: BoardSortOrder | undefined
                pageSize?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: BoardInfo }
            output: BoardCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/boards/:board_id': {
      $delete:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: BoardDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardInfo }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/boards/:board_id/assets': {
      $delete:
        | {
            input: { param: { board_id: string | null } } & {
              query: { asset_ids?: (string[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { board_id: string | null } } & {
              query: { asset_ids?: (string[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              query: { asset_ids?: (string[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              query: { asset_ids?: (string[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null } } & {
              query: { asset_ids?: (string[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardAsset[] | null }
            output: AddBoardAssetsResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardAsset[] | null }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardAsset[] | null }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardAsset[] | null }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: BoardAsset[] | null }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/boards/:board_id/assets/:asset_id': {
      $delete:
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null; asset_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/boards/:board_id/comments': {
      $get:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: CommentsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: CommentRequest }
            output: CommentCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: CommentRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: CommentRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: CommentRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            } & { json: CommentRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/boards/:board_id/comments/:comment_id': {
      $delete:
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { board_id: string | null; comment_id: string | null } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/collections': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: CollectionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/countries': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: CountriesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v3/customers/current': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: CustomerInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v3/downloads': {
      $get:
        | {
            input: {
              query: {
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                use_time?: boolean | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_type?: ProductTypeForDownloads | undefined
                company_downloads?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: GetDownloadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                use_time?: boolean | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_type?: ProductTypeForDownloads | undefined
                company_downloads?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                use_time?: boolean | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_type?: ProductTypeForDownloads | undefined
                company_downloads?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                use_time?: boolean | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_type?: ProductTypeForDownloads | undefined
                company_downloads?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/downloads/images/:id': {
      $post:
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                file_type?: DownloadFileType | undefined
                height?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/downloads/videos/:id': {
      $post:
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                auto_download?: boolean | undefined
                size?: (string | null) | undefined
                product_id?: (number | null) | undefined
                product_type?: ProductTypeForDownloads | undefined
                use_team_credits?: (boolean | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } } & {
              json: PremiumAccessDownloadData
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/events': {
      $get:
        | {
            input: {
              query: {
                ids?: (number[] | null) | undefined
                fields?: (EventDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ids?: (number[] | null) | undefined
                fields?: (EventDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                ids?: (number[] | null) | undefined
                fields?: (EventDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ids?: (number[] | null) | undefined
                fields?: (EventDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/events/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: (EventDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: (EventDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: (EventDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: (EventDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/images': {
      $get:
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: ImagesDetailResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (ImageDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/images/:id': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: ImagesDetailResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (ImageDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/images/:id/downloadhistory': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: AssetDownloadHistoryResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/images/:id/same-series': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: ImageSearchItemSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/images/:id/similar': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: ImageSearchItemSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (ImagesFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/orders/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: OrderDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/products': {
      $get:
        | {
            input: { query: { fields?: (ProductFieldValues[] | null) | undefined } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: ProductsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: (ProductFieldValues[] | null) | undefined } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { fields?: (ProductFieldValues[] | null) | undefined } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { fields?: (ProductFieldValues[] | null) | undefined } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/purchased-assets': {
      $get:
        | {
            input: {
              query: {
                date_to?: (string | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                date_from?: (string | null) | undefined
                company_purchases?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: PreviousAssetPurchases
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_to?: (string | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                date_from?: (string | null) | undefined
                company_purchases?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                date_to?: (string | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                date_from?: (string | null) | undefined
                company_purchases?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                date_to?: (string | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                date_from?: (string | null) | undefined
                company_purchases?: boolean | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/search/by-image/uploads/:file-name': {
      $put:
        | {
            input: { param: { 'file-name': string | null } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { 'file-name': string | null } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'file-name': string | null } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { 'file-name': string | null } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/search/events': {
      $get:
        | {
            input: {
              query: {
                editorial_segment?: EditorialSegmentContract | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                fields?: (EventFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: EventSearchSortOrder | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: EventsSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                editorial_segment?: EditorialSegmentContract | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                fields?: (EventFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: EventSearchSortOrder | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                editorial_segment?: EditorialSegmentContract | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                fields?: (EventFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: EventSearchSortOrder | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                editorial_segment?: EditorialSegmentContract | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                fields?: (EventFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: EventSearchSortOrder | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/search/images': {
      $get:
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                event_ids?: (number[] | null) | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_nudity?: boolean | undefined
                fields?: (ImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: BlendedImageSortOrder | undefined
                specific_people?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: ImageSearchItemSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                event_ids?: (number[] | null) | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_nudity?: boolean | undefined
                fields?: (ImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: BlendedImageSortOrder | undefined
                specific_people?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                event_ids?: (number[] | null) | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_nudity?: boolean | undefined
                fields?: (ImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: BlendedImageSortOrder | undefined
                specific_people?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                event_ids?: (number[] | null) | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_nudity?: boolean | undefined
                fields?: (ImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: BlendedImageSortOrder | undefined
                specific_people?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/search/images/creative': {
      $get:
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeImageSortOrder | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: CreativeImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeImageSortOrder | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeImageSortOrder | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeImageSortOrder | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                color?: (string | null) | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (GraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeImageSortOrder | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/search/images/creative/by-image': {
      $get:
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: SearchByImageResourceResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateImageSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeImagesFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/search/images/editorial': {
      $get:
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                download_product?: (string | null) | undefined
                editorial_segments?: (EditorialSegmentContract[] | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                event_ids?: (number[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (EditorialImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (EditorialGraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                minimum_quality_rank?: (number | null) | undefined
                facet_fields?: (EditorialImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: EditorialImageSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                download_product?: (string | null) | undefined
                editorial_segments?: (EditorialSegmentContract[] | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                event_ids?: (number[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (EditorialImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (EditorialGraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                minimum_quality_rank?: (number | null) | undefined
                facet_fields?: (EditorialImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                download_product?: (string | null) | undefined
                editorial_segments?: (EditorialSegmentContract[] | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                event_ids?: (number[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (EditorialImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (EditorialGraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                minimum_quality_rank?: (number | null) | undefined
                facet_fields?: (EditorialImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                date_from?: (string | null) | undefined
                date_to?: (string | null) | undefined
                download_product?: (string | null) | undefined
                editorial_segments?: (EditorialSegmentContract[] | null) | undefined
                embed_content_only?: boolean | undefined
                ethnicity?: (EthnicityFilterType[] | null) | undefined
                event_ids?: (number[] | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (EditorialImagesFieldValues[] | null) | undefined
                file_types?: (SearchFileType[] | null) | undefined
                graphical_styles?: (EditorialGraphicalStyle[] | null) | undefined
                graphical_styles_filter_type?: GraphicalStylesFilterType | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                minimum_size?: TeeShirtSize | undefined
                number_of_people?: (NumberOfPeopleFilterType[] | null) | undefined
                orientations?: (ImageOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                minimum_quality_rank?: (number | null) | undefined
                facet_fields?: (EditorialImageSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/search/videos/creative': {
      $get:
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                license_models?: (LicenseModelVideoRequest[] | null) | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeVideoSortOrder | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                include_facets?: (boolean | null) | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: CreativeVideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                license_models?: (LicenseModelVideoRequest[] | null) | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeVideoSortOrder | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                include_facets?: (boolean | null) | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                license_models?: (LicenseModelVideoRequest[] | null) | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeVideoSortOrder | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                include_facets?: (boolean | null) | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                license_models?: (LicenseModelVideoRequest[] | null) | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeVideoSortOrder | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                include_facets?: (boolean | null) | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                exclude_nudity?: boolean | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                exclude_keyword_ids?: (number[] | null) | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                license_models?: (LicenseModelVideoRequest[] | null) | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                safe_search?: boolean | undefined
                sort_order?: CreativeVideoSortOrder | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                include_facets?: (boolean | null) | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/search/videos/creative/by-image': {
      $get:
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: CreativeVideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                asset_id?: (string | null) | undefined
                exclude_editorial_use_only?: (boolean | null) | undefined
                facet_fields?: (CreateVideoSearchFacetsFields[] | null) | undefined
                facet_max_count?: number | undefined
                fields?: (CreativeVideosFieldValues[] | null) | undefined
                image_url?: (string | null) | undefined
                include_facets?: (boolean | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                product_types?: (string[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/search/videos/editorial': {
      $get:
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                editorial_video_types?: (EditorialVideoType[] | null) | undefined
                fields?: (EditorialVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (EditorialVideoSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: EditorialVideoSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                editorial_video_types?: (EditorialVideoType[] | null) | undefined
                fields?: (EditorialVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (EditorialVideoSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                editorial_video_types?: (EditorialVideoType[] | null) | undefined
                fields?: (EditorialVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (EditorialVideoSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                age_of_people?: (AgeOfPeopleFilterType[] | null) | undefined
                artists?: (string | null) | undefined
                aspect_ratios?: (VideoAspectRatioFilterType[] | null) | undefined
                collection_codes?: (string[] | null) | undefined
                collections_filter_type?: CollectionsFilterType | undefined
                compositions?: (CompositionsFilterType[] | null) | undefined
                download_product?: (string | null) | undefined
                editorial_video_types?: (EditorialVideoType[] | null) | undefined
                fields?: (EditorialVideosFieldValues[] | null) | undefined
                format_available?: VideoFormatsRequest | undefined
                frame_rates?: (VideoFrameRates[] | null) | undefined
                image_techniques?: (ImageTechniquesFilterType[] | null) | undefined
                include_related_searches?: boolean | undefined
                keyword_ids?: (number[] | null) | undefined
                min_clip_length?: number | undefined
                max_clip_length?: number | undefined
                orientations?: (VideoOrientationRequest[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
                phrase?: (string | null) | undefined
                sort_order?: SortOrder | undefined
                specific_people?: (string[] | null) | undefined
                release_status?: ReleaseStatus | undefined
                facet_fields?: (EditorialVideoSearchFacetsFields[] | null) | undefined
                include_facets?: (boolean | null) | undefined
                facet_max_count?: number | undefined
                viewpoints?: (ViewpointsFilterType[] | null) | undefined
              }
            } & {
              header: {
                'Accept-Language'?: string | undefined
                'GI-Country-Code'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v3/usage-batches/:id': {
      $put:
        | {
            input: { param: { id: string | null } } & { json: ReportUsageBatchRequest }
            output: ReportUsageBatchResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string | null } } & { json: ReportUsageBatchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & { json: ReportUsageBatchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & { json: ReportUsageBatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & { json: ReportUsageBatchRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v3/videos': {
      $get:
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                ids?: (string[] | null) | undefined
                fields?: (VideoDetailFieldValues[] | null) | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/videos/:id': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: { fields?: (VideoDetailFieldValues[] | null) | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/videos/:id/downloadhistory': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: AssetDownloadHistoryResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: { company_downloads?: boolean | undefined }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/videos/:id/same-series': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/videos/:id/similar': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string | null } } & {
              query: {
                fields?: (AssociatedVideoDetailFieldValues[] | null) | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            } & { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
