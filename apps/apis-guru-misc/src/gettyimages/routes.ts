import { createRoute, z } from '@hono/zod-openapi'

const HeroImageDisplaySizeSchema = z
  .strictObject({
    is_watermarked: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeroImageDisplaySize')

const HeroImageSchema = z
  .strictObject({
    display_sizes: z.array(HeroImageDisplaySizeSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeroImage')

const LocationEventSchema = z
  .strictObject({
    city: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    state_province: z.string().nullable().exactOptional(),
    venue: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationEvent')

type EventType = {
  child_event_count?: number
  editorial_segments?: string[] | null
  hero_image?: z.infer<typeof HeroImageSchema>
  id?: number
  image_count?: number
  location?: z.infer<typeof LocationEventSchema>
  name?: string | null
  start_date?: string | null
}

const ExtendedLicensesSchema = z
  .enum(['multiseat', 'unlimited', 'resale', 'indemnification'])
  .openapi('ExtendedLicenses')

const AcquireAssetLicensesRequestSchema = z
  .strictObject({
    extended_licenses: z.array(ExtendedLicensesSchema),
    use_team_credits: z.boolean().exactOptional().openapi({ description: 'Defaults to false.' }),
  })
  .openapi({ required: ['extended_licenses'] })
  .openapi('AcquireAssetLicensesRequest')

const BoardAssetSchema = z
  .strictObject({ asset_id: z.string() })
  .openapi({ required: ['asset_id'] })
  .openapi('BoardAsset')

const AddBoardAssetsResultSchema = z
  .strictObject({
    assets_added: z.array(BoardAssetSchema).nullable().exactOptional(),
    assets_not_added: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddBoardAssetsResult')

const AffiliateImageUrlsSchema = z
  .strictObject({
    large: z.string().nullable().exactOptional(),
    large_height: z.int32().exactOptional(),
    large_width: z.int32().exactOptional(),
    medium: z.string().nullable().exactOptional(),
    medium_height: z.int32().exactOptional(),
    medium_width: z.int32().exactOptional(),
    small: z.string().nullable().exactOptional(),
    small_height: z.int32().exactOptional(),
    small_width: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateImageUrls')

const AffiliateImageSchema = z
  .strictObject({
    caption: z.string().nullable().exactOptional(),
    destination_url: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    preview_urls: AffiliateImageUrlsSchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateImage')

const AutoCorrectionsSchema = z
  .strictObject({ phrase: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AutoCorrections')

const AffiliateImageSearchResponseSchema = z
  .strictObject({
    auto_corrections: AutoCorrectionsSchema.exactOptional(),
    images: z.array(AffiliateImageSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateImageSearchResponse')

const AffiliateSearchStyleSchema = z
  .enum(['photography', 'vector'])
  .openapi({ description: 'Specifies the graphical style of images desired.' })
  .openapi('AffiliateSearchStyle')

const AffiliateVideoUrlsSchema = z
  .strictObject({
    large_motion: z.string().nullable().exactOptional(),
    large_still: z.string().nullable().exactOptional(),
    medium_still: z.string().nullable().exactOptional(),
    small_motion: z.string().nullable().exactOptional(),
    small_still: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateVideoUrls')

const AffiliateVideoSchema = z
  .strictObject({
    caption: z.string().nullable().exactOptional(),
    clip_length: z.string().nullable().exactOptional(),
    destination_url: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    preview_urls: AffiliateVideoUrlsSchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateVideo')

const AffiliateVideoSearchResponseSchema = z
  .strictObject({
    auto_corrections: AutoCorrectionsSchema.exactOptional(),
    videos: z.array(AffiliateVideoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffiliateVideoSearchResponse')

const AgeOfPeopleFilterTypeSchema = z
  .enum([
    'newborn',
    'baby',
    'child',
    'teenager',
    'young_adult',
    'adult',
    'adults_only',
    'mature_adult',
    'senior_adult',
    '0-1_months',
    '2-5_months',
    '6-11_months',
    '12-17_months',
    '18-23_months',
    '2-3_years',
    '4-5_years',
    '6-7_years',
    '8-9_years',
    '10-11_years',
    '12-13_years',
    '14-15_years',
    '16-17_years',
    '18-19_years',
    '20-24_years',
    '20-29_years',
    '25-29_years',
    '30-34_years',
    '30-39_years',
    '35-39_years',
    '40-44_years',
    '40-49_years',
    '45-49_years',
    '50-54_years',
    '50-59_years',
    '55-59_years',
    '60-64_years',
    '60-69_years',
    '65-69_years',
    '70-79_years',
    '80-89_years',
    '90_plus_years',
    '100_over',
  ])
  .openapi('AgeOfPeopleFilterType')

const AllowedUseSchema = z
  .strictObject({
    how_can_i_use_it: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates how the asset can be used' }),
    release_info: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates release status' }),
    usage_restrictions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates asset usage restriction, if any' }),
  })
  .openapi({ required: [] })
  .openapi('AllowedUse')

const ArtistSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Artist')

const ArtistsImageSearchFieldValuesSchema = z
  .enum([
    'id',
    'allowed_use',
    'alternative_ids',
    'artist',
    'asset_family',
    'asset_type',
    'call_for_image',
    'caption',
    'collection_id',
    'collection_code',
    'collection_name',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'editorial_segments',
    'event_ids',
    'graphical_style',
    'keywords',
    'license_model',
    'max_dimensions',
    'orientation',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'summary_set',
    'thumb',
    'title',
  ])
  .openapi('ArtistsImageSearchFieldValues')

const ArtistsVideoSearchFieldValuesSchema = z
  .enum([
    'id',
    'allowed_use',
    'alternative_ids',
    'artist',
    'asset_family',
    'asset_type',
    'call_for_image',
    'caption',
    'clip_length',
    'collection_id',
    'collection_code',
    'collection_name',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'editorial_segments',
    'event_ids',
    'graphical_style',
    'keywords',
    'license_model',
    'max_dimensions',
    'orientation',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'summary_set',
    'thumb',
    'title',
  ])
  .openapi('ArtistsVideoSearchFieldValues')

const DisplaySizeSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisplaySize')

const AssetSchema = z
  .strictObject({
    asset_type: z.string().nullable().exactOptional(),
    date_added: z.iso.datetime({ offset: true }).exactOptional(),
    display_sizes: z.array(DisplaySizeSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Asset')

const ChangedAssetDetailSchema = z
  .strictObject({
    asset_changed_utc_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Contains the date of the asset change.' }),
    asset_lifecycle: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted")',
      }),
    asset_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Contains the type of asset this asset change is (i.e. "Image").' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Contains the Id for the asset change.' }),
    uri: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Contains the asset download URL for assets with an AssetLifecycle of "New."',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChangedAssetDetail')

const AssetChangesSchema = z
  .strictObject({
    change_set_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response.',
      }),
    changed_assets: z
      .array(ChangedAssetDetailSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Contains a list of ChangedAssetList results for the query.' }),
  })
  .openapi({ required: [] })
  .openapi('AssetChanges')

const AssetDownloadHistoryResultsSchema = z
  .strictObject({
    downloads: z.any().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssetDownloadHistoryResults')

const AssetEventSchema = z
  .strictObject({
    asset_id: z.string().nullable().exactOptional(),
    email_address: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssetEvent')

const AssetFamilySchema = z.enum(['NotSet', 'Editorial', 'Creative', 'Both']).openapi('AssetFamily')

const AssetIdFromOrderSchema = z
  .strictObject({ id: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AssetIdFromOrder')

const AssetLicenseNameSchema = z
  .enum(['Standard', 'Multiseat', 'Unlimited', 'Resale', 'Indemnification'])
  .openapi('AssetLicenseName')

const AssetLicensingResponseSchema = z
  .strictObject({
    acquired_licenses: z.array(ExtendedLicensesSchema).nullable().exactOptional(),
    credits_used: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssetLicensingResponse')

const AssetTypeSchema = z.enum(['NotSet', 'Image', 'Film', 'Music']).openapi('AssetType')

const AssociatedVideoDetailFieldValuesSchema = z
  .enum([
    'allowed_use',
    'artist',
    'aspect_ratio',
    'asset_family',
    'call_for_image',
    'caption',
    'clip_length',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'editorial_segments',
    'entity_details',
    'era',
    'event_ids',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'mastered_to',
    'orientation',
    'originally_shot_on',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'shot_speed',
    'source',
    'summary_set',
    'thumb',
    'title',
    'istock_licenses',
  ])
  .openapi('AssociatedVideoDetailFieldValues')

const BlendedImageSortOrderSchema = z
  .enum(['best_match', 'most_popular', 'newest', 'random'])
  .openapi('BlendedImageSortOrder')

const VideoSearchItemDisplaySizeSchema = z
  .strictObject({
    aspect_ratio: z.string().nullable().exactOptional(),
    is_watermarked: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoSearchItemDisplaySize')

const IStockLicenseSchema = z
  .strictObject({
    credits: z.int32().exactOptional(),
    license_type: AssetLicenseNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IStockLicense')

const KeywordSchema = z
  .strictObject({
    entity_types: z.array(z.string()).nullable().exactOptional(),
    entity_uris: z.array(z.string()).nullable().exactOptional(),
    keyword_id: z.string().nullable().exactOptional(),
    relevance: z.int32().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Keyword')

const DownloadSchema = z
  .strictObject({
    agreement_name: z.string().nullable().exactOptional(),
    product_id: z.string().nullable().exactOptional(),
    product_type: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Download')

const ReferralDestinationSchema = z
  .strictObject({
    site_name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReferralDestination')

const BlendedVideoSearchItemSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    clip_length: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(VideoSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    era: z.string().nullable().exactOptional(),
    event_ids: z.array(z.int32()).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    istock_licenses: z.array(IStockLicenseSchema).nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    mastered_to: z.string().nullable().exactOptional(),
    originally_shot_on: z.string().nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    shot_speed: z.string().nullable().exactOptional(),
    source: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlendedVideoSearchItem')

const EntertainmentSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Entertainment')

const FacetEventSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FacetEvent')

const LocationSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Location')

const SpecificPeopleSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('SpecificPeople')

const SearchFacetsResponseSchema = z
  .strictObject({
    artists: z.array(ArtistSchema).nullable().exactOptional(),
    entertainment: z.array(EntertainmentSchema).nullable().exactOptional(),
    events: z.array(FacetEventSchema).nullable().exactOptional(),
    locations: z.array(LocationSchema).nullable().exactOptional(),
    specific_people: z.array(SpecificPeopleSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchFacetsResponse')

const RelatedSearchSchema = z
  .strictObject({
    phrase: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedSearch')

const BlendedVideoSearchResultsSchema = z
  .strictObject({
    facets: SearchFacetsResponseSchema.exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
    videos: z.array(BlendedVideoSearchItemSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlendedVideoSearchResults')

const BlendedVideosFieldValuesSchema = z
  .enum([
    'allowed_use',
    'artist',
    'aspect_ratio',
    'asset_family',
    'call_for_image',
    'caption',
    'clip_length',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'editorial_segments',
    'entity_details',
    'era',
    'event_ids',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'mastered_to',
    'object_name',
    'orientation',
    'originally_shot_on',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'shot_speed',
    'source',
    'summary_set',
    'thumb',
    'title',
    'istock_licenses',
  ])
  .openapi('BlendedVideosFieldValues')

const BoardCommentPermissionsSchema = z
  .strictObject({ can_add_comment: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BoardCommentPermissions')

const BoardCreatedSchema = z
  .strictObject({ id: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BoardCreated')

const LinksSchema = z
  .strictObject({
    invitation: z.string().nullable().exactOptional(),
    share: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Links')

const BoardPermissionsSchema = z
  .strictObject({
    can_add_assets: z.boolean().exactOptional(),
    can_delete_board: z.boolean().exactOptional(),
    can_invite_to_board: z.boolean().exactOptional(),
    can_remove_assets: z.boolean().exactOptional(),
    can_update_description: z.boolean().exactOptional(),
    can_update_name: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoardPermissions')

const BoardDetailSchema = z
  .strictObject({
    asset_count: z.int32().exactOptional(),
    assets: z.array(AssetSchema).nullable().exactOptional(),
    comment_count: z.int32().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).exactOptional(),
    date_last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    links: LinksSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    permissions: BoardPermissionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoardDetail')

const BoardInfoSchema = z
  .strictObject({ description: z.string().nullable().exactOptional(), name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('BoardInfo')

const BoardListBoardSchema = z
  .strictObject({
    asset_count: z.int32().exactOptional(),
    board_relationship: z.string().nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).exactOptional(),
    date_last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().nullable().exactOptional(),
    hero_asset: AssetSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoardListBoard')

const BoardListSchema = z
  .strictObject({
    board_count: z.int32().exactOptional(),
    boards: z.array(BoardListBoardSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoardList')

const BoardRelationshipSchema = z.enum(['owned', 'invited']).openapi('BoardRelationship')

const BoardSortOrderSchema = z
  .enum([
    'date_last_updated_descending',
    'date_last_updated_ascending',
    'name_ascending',
    'name_decending',
  ])
  .openapi('BoardSortOrder')

const ChannelSchema = z
  .strictObject({
    AssetChangeType: z.string().nullable().exactOptional(),
    AssetFamily: AssetFamilySchema.exactOptional(),
    AssetType: AssetTypeSchema.exactOptional(),
    ChannelId: z.int32().exactOptional(),
    CreateDateUtc: z.iso.datetime({ offset: true }).exactOptional(),
    Metadata: z.string().nullable().exactOptional(),
    NotificationCount: z.int32().exactOptional(),
    OldestChangeNotificationDateUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Channel')

const CollaboratorSchema = z
  .strictObject({
    first_name: z.string().nullable().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Collaborator')

const CollectionSchema = z
  .strictObject({
    asset_family: z.string().nullable().exactOptional(),
    code: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Collection')

const CollectionsFilterTypeSchema = z.enum(['include', 'exclude']).openapi('CollectionsFilterType')

const CollectionsListSchema = z
  .strictObject({ collections: z.array(CollectionSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CollectionsList')

const CommentPermissionsSchema = z
  .strictObject({ can_delete_comment: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CommentPermissions')

const CommentSchema = z
  .strictObject({
    created_by: CollaboratorSchema.exactOptional(),
    date_created: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().nullable().exactOptional(),
    permissions: CommentPermissionsSchema.exactOptional(),
    text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Comment')

const CommentCreatedSchema = z
  .strictObject({ id: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CommentCreated')

const CommentRequestSchema = z
  .strictObject({ text: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CommentRequest')

const CommentsListSchema = z
  .strictObject({
    comments: z.array(CommentSchema).nullable().exactOptional(),
    permissions: BoardCommentPermissionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommentsList')

const CompositionsFilterTypeSchema = z
  .enum([
    'abstract',
    'candid',
    'close_up',
    'copy_space',
    'cut_out',
    'full_frame',
    'full_length',
    'headshot',
    'looking_at_camera',
    'macro',
    'portrait',
    'sparse',
    'still_life',
    'three_quarter_length',
    'waist_up',
  ])
  .openapi('CompositionsFilterType')

const ContributorSchema = z
  .strictObject({
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The contributor's display name" }),
    member_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The contributor's member name" }),
  })
  .openapi({ description: 'Contributor information for an image or video', required: [] })
  .openapi('Contributor')

const CountrySchema = z
  .strictObject({
    iso_alpha_2: z.string().nullable().exactOptional(),
    iso_alpha_3: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Country')

const CountriesListSchema = z
  .strictObject({ countries: z.array(CountrySchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CountriesList')

const CreateImageSearchFacetsFieldsSchema = z
  .enum(['artists', 'locations'])
  .openapi('CreateImageSearchFacetsFields')

const CreateVideoSearchFacetsFieldsSchema = z
  .enum(['artists', 'locations'])
  .openapi('CreateVideoSearchFacetsFields')

const ImageSearchItemDisplaySizeSchema = z
  .strictObject({
    is_watermarked: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageSearchItemDisplaySize')

const MaxDimensionsSchema = z
  .strictObject({ height: z.int32().exactOptional(), width: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('MaxDimensions')

const ImageSearchItemCreativeSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    alternative_ids: z.record(z.string(), z.string()).nullable().exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    call_for_image: z.boolean().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_camera_shot: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(ImageSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    graphical_style: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    max_dimensions: MaxDimensionsSchema.exactOptional(),
    orientation: z.string().nullable().exactOptional(),
    quality_rank: z.int32().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    uri_oembed: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageSearchItemCreative')

const CreativeImageSearchResultsSchema = z
  .strictObject({
    auto_corrections: AutoCorrectionsSchema.exactOptional(),
    images: z.array(ImageSearchItemCreativeSchema).nullable().exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreativeImageSearchResults')

const CreativeImageSortOrderSchema = z
  .enum(['best_match', 'most_popular', 'newest', 'random'])
  .openapi('CreativeImageSortOrder')

const CreativeImagesFieldValuesSchema = z
  .enum([
    'allowed_use',
    'alternative_ids',
    'artist',
    'asset_family',
    'call_for_image',
    'caption',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_camera_shot',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'graphical_style',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'max_dimensions',
    'orientation',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'summary_set',
    'thumb',
    'title',
    'uri_oembed',
  ])
  .openapi('CreativeImagesFieldValues')

const CreativeVideoSearchItemSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    clip_length: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(VideoSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    era: z.string().nullable().exactOptional(),
    event_ids: z.array(z.int32()).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    istock_licenses: z.array(IStockLicenseSchema).nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    mastered_to: z.string().nullable().exactOptional(),
    originally_shot_on: z.string().nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    shot_speed: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreativeVideoSearchItem')

const CreativeVideoSearchResultsSchema = z
  .strictObject({
    auto_corrections: AutoCorrectionsSchema.exactOptional(),
    facets: SearchFacetsResponseSchema.exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
    videos: z.array(CreativeVideoSearchItemSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreativeVideoSearchResults')

const CreativeVideoSortOrderSchema = z
  .enum(['best_match', 'most_popular', 'newest', 'random'])
  .openapi('CreativeVideoSortOrder')

const CreativeVideosFieldValuesSchema = z
  .enum([
    'allowed_use',
    'artist',
    'aspect_ratio',
    'asset_family',
    'call_for_image',
    'caption',
    'clip_length',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'era',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'mastered_to',
    'object_name',
    'orientation',
    'originally_shot_on',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'shot_speed',
    'summary_set',
    'thumb',
    'title',
  ])
  .openapi('CreativeVideosFieldValues')

const CuratedSetSchema = z
  .strictObject({
    assets: z.array(z.string()).nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    date_last_updated: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    hero_image_uri: z.string().nullable().exactOptional(),
    keywords: z.array(z.string()).nullable().exactOptional(),
    set_id: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CuratedSet')

const CustomerInfoResponseSchema = z
  .strictObject({
    first_name: z.string().nullable().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
    middle_name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInfoResponse')

const DimensionsSchema = z
  .strictObject({
    dpi: z.int32().nullable().exactOptional(),
    height: z.int32().nullable().exactOptional(),
    width: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dimensions')

const DownloadDetailsSchema = z
  .strictObject({
    download_notes: z.string().nullable().exactOptional(),
    project_code: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadDetails')

const DownloadFileTypeSchema = z.enum(['eps', 'jpg']).openapi('DownloadFileType')

const DownloadRequirementsSchema = z
  .strictObject({
    is_note_required: z.boolean().exactOptional(),
    is_project_code_required: z.boolean().exactOptional(),
    project_codes: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadRequirements')

const EditorialGraphicalStyleSchema = z
  .enum(['photography', 'illustration', 'vector'])
  .openapi('EditorialGraphicalStyle')

const EditorialImageSearchFacetsFieldsSchema = z
  .enum(['artists', 'events', 'locations', 'specific_people'])
  .openapi('EditorialImageSearchFacetsFields')

const EditorialSourceSchema = z
  .strictObject({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('EditorialSource')

const ImageSearchItemEditorialSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    alternative_ids: z.record(z.string(), z.string()).nullable().exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    call_for_image: z.boolean().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_camera_shot: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(ImageSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    editorial_segments: z.array(z.string()).nullable().exactOptional(),
    editorial_source: EditorialSourceSchema.exactOptional(),
    event_ids: z.array(z.int32()).nullable().exactOptional(),
    graphical_style: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    max_dimensions: MaxDimensionsSchema.exactOptional(),
    orientation: z.string().nullable().exactOptional(),
    people: z.array(z.string()).nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
    quality_rank: z.int32().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    uri_oembed: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageSearchItemEditorial')

const EditorialImageSearchResultsSchema = z
  .strictObject({
    images: z.array(ImageSearchItemEditorialSchema).nullable().exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditorialImageSearchResults')

const EditorialImagesFieldValuesSchema = z
  .enum([
    'allowed_use',
    'alternative_ids',
    'artist',
    'asset_family',
    'call_for_image',
    'caption',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_camera_shot',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'editorial_segments',
    'editorial_source',
    'event_ids',
    'graphical_style',
    'id',
    'keywords',
    'largest_downloads',
    'license_model',
    'max_dimensions',
    'orientation',
    'people',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'summary_set',
    'thumb',
    'title',
    'uri_oembed',
  ])
  .openapi('EditorialImagesFieldValues')

const EditorialSegmentContractSchema = z
  .enum(['archival', 'entertainment', 'news', 'publicity', 'royalty', 'sport'])
  .openapi('EditorialSegmentContract')

const EditorialVideoSearchFacetsFieldsSchema = z
  .enum(['artists', 'events', 'locations', 'specific_people'])
  .openapi('EditorialVideoSearchFacetsFields')

const EditorialVideoSearchItemSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    clip_length: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(VideoSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    era: z.string().nullable().exactOptional(),
    event_ids: z.array(z.int32()).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    istock_licenses: z.array(IStockLicenseSchema).nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    mastered_to: z.string().nullable().exactOptional(),
    originally_shot_on: z.string().nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    shot_speed: z.string().nullable().exactOptional(),
    source: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditorialVideoSearchItem')

const EditorialVideoSearchResultsSchema = z
  .strictObject({
    facets: SearchFacetsResponseSchema.exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
    videos: z.array(EditorialVideoSearchItemSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditorialVideoSearchResults')

const EditorialVideoTypeSchema = z.enum(['raw', 'produced']).openapi('EditorialVideoType')

const EditorialVideosFieldValuesSchema = z
  .enum([
    'allowed_use',
    'artist',
    'aspect_ratio',
    'asset_family',
    'call_for_image',
    'caption',
    'clip_length',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'editorial_segments',
    'era',
    'event_ids',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'mastered_to',
    'object_name',
    'orientation',
    'originally_shot_on',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'shot_speed',
    'source',
    'summary_set',
    'thumb',
    'title',
    'istock_licenses',
  ])
  .openapi('EditorialVideosFieldValues')

const EthnicityFilterTypeSchema = z
  .enum([
    'black',
    'caucasian',
    'east_asian',
    'hispanic_latino',
    'japanese',
    'middle_eastern',
    'mixed_race_person',
    'multiethnic_group',
    'native_american_first_nations',
    'pacific_islander',
    'south_asian',
    'southeast_asian',
  ])
  .openapi('EthnicityFilterType')

const EventSchema: z.ZodType<EventType> = z
  .lazy(() =>
    z
      .strictObject({
        child_event_count: z.int32().exactOptional(),
        editorial_segments: z.array(z.string()).nullable().exactOptional(),
        hero_image: HeroImageSchema.exactOptional(),
        id: z.int32().exactOptional(),
        image_count: z.int32().exactOptional(),
        location: LocationEventSchema.exactOptional(),
        name: z.string().nullable().exactOptional(),
        start_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Event')

const EventDetailFieldValuesSchema = z
  .enum([
    'id',
    'child_event_count',
    'editorial_segments',
    'hero_image',
    'image_count',
    'location',
    'name',
    'start_date',
    'type',
  ])
  .openapi('EventDetailFieldValues')

const EventFieldValuesSchema = z
  .enum([
    'id',
    'child_event_count',
    'editorial_segments',
    'hero_image',
    'image_count',
    'keywords',
    'location',
    'name',
    'start_date',
    'type',
  ])
  .openapi('EventFieldValues')

const EventSearchSortOrderSchema = z.enum(['newest', 'oldest']).openapi('EventSearchSortOrder')

const EventsSearchResultSchema = z
  .strictObject({
    events: z.array(EventSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventsSearchResult')

const UserSchema = z
  .strictObject({
    first_name: z.string().nullable().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
    middle_name: z.string().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const HistoricalDownloadSchema = z
  .strictObject({
    agreement_name: z.string().nullable().exactOptional(),
    asset_type: z.string().nullable().exactOptional(),
    date_downloaded: z.iso.datetime({ offset: true }).exactOptional(),
    dimensions: DimensionsSchema.exactOptional(),
    download_details: DownloadDetailsSchema.exactOptional(),
    download_source: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    product_id: z.int32().exactOptional(),
    product_type: z.string().nullable().exactOptional(),
    size_name: z.string().nullable().exactOptional(),
    thumb_uri: z.string().nullable().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoricalDownload')

const GetDownloadsResponseSchema = z
  .strictObject({
    downloads: z.array(HistoricalDownloadSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDownloadsResponse')

const GetSendEventsResponseSchema = z
  .strictObject({
    asset_send_events: z.array(AssetEventSchema).nullable().exactOptional(),
    last_offset: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSendEventsResponse')

const GraphicalStyleSchema = z
  .enum(['fine_art', 'illustration', 'photography', 'vector'])
  .openapi('GraphicalStyle')

const GraphicalStylesFilterTypeSchema = z
  .enum(['include', 'exclude'])
  .openapi('GraphicalStylesFilterType')

const ImageDetailFieldValuesSchema = z
  .enum([
    'allowed_use',
    'alternative_ids',
    'artist',
    'artist_title',
    'asset_family',
    'call_for_image',
    'caption',
    'city',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'country',
    'credit_line',
    'date_camera_shot',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_sizes',
    'download_product',
    'downloads',
    'editorial_segments',
    'editorial_source',
    'entity_details',
    'event_ids',
    'graphical_style',
    'id',
    'istock_collection',
    'istock_licenses',
    'keywords',
    'largest_downloads',
    'license_model',
    'links',
    'max_dimensions',
    'object_name',
    'orientation',
    'people',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'state_province',
    'summary_set',
    'thumb',
    'title',
    'uri_oembed',
  ])
  .openapi('ImageDetailFieldValues')

const ImageOrientationRequestSchema = z
  .enum(['horizontal', 'vertical', 'square', 'panoramic_horizontal', 'panoramic_vertical'])
  .openapi('ImageOrientationRequest')

const ImageSearchItemSchema = z
  .strictObject({
    allowed_use: AllowedUseSchema.exactOptional(),
    alternative_ids: z.record(z.string(), z.string()).nullable().exactOptional(),
    artist: z.string().nullable().exactOptional(),
    asset_family: z.string().nullable().exactOptional(),
    call_for_image: z.boolean().exactOptional(),
    caption: z.string().nullable().exactOptional(),
    collection_code: z.string().nullable().exactOptional(),
    collection_id: z.int32().nullable().exactOptional(),
    collection_name: z.string().nullable().exactOptional(),
    color_type: z.string().nullable().exactOptional(),
    copyright: z.string().nullable().exactOptional(),
    date_camera_shot: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    date_created: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    display_sizes: z.array(ImageSearchItemDisplaySizeSchema).nullable().exactOptional(),
    download_product: z.string().nullable().exactOptional(),
    editorial_segments: z.array(z.string()).nullable().exactOptional(),
    event_ids: z.array(z.int32()).nullable().exactOptional(),
    graphical_style: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    istock_licenses: z.array(IStockLicenseSchema).nullable().exactOptional(),
    keywords: z.array(KeywordSchema).nullable().exactOptional(),
    largest_downloads: z.array(DownloadSchema).nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    max_dimensions: MaxDimensionsSchema.exactOptional(),
    orientation: z.string().nullable().exactOptional(),
    people: z.array(z.string()).nullable().exactOptional(),
    product_types: z.array(z.string()).nullable().exactOptional(),
    quality_rank: z.int32().exactOptional(),
    referral_destinations: z.array(ReferralDestinationSchema).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    uri_oembed: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageSearchItem')

const ImageSearchItemSearchResultsSchema = z
  .strictObject({
    images: z.array(ImageSearchItemSchema).nullable().exactOptional(),
    related_searches: z.array(RelatedSearchSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageSearchItemSearchResults')

const ImageTechniquesFilterTypeSchema = z
  .enum([
    'realtime',
    'time_lapse',
    'slow_motion',
    'color',
    'black_and_white',
    'animation',
    'selective_focus',
  ])
  .openapi('ImageTechniquesFilterType')

const ImagesDetailResultsSchema = z
  .strictObject({
    images: z.any().nullable().exactOptional(),
    images_not_found: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImagesDetailResults')

const ImagesFieldValuesSchema = z
  .enum([
    'accessrestriction',
    'allowed_use',
    'alternative_ids',
    'artist',
    'asset_family',
    'call_for_image',
    'caption',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'date_camera_shot',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_product',
    'download_sizes',
    'editorial_segments',
    'editorial_source',
    'entity_details',
    'event_ids',
    'graphical_style',
    'id',
    'istock_collection',
    'keywords',
    'largest_downloads',
    'license_model',
    'max_dimensions',
    'orientation',
    'people',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'summary_set',
    'thumb',
    'title',
    'uri_oembed',
  ])
  .openapi('ImagesFieldValues')

const LicenseModelImageRequestSchema = z
  .enum(['rightsmanaged', 'royaltyfree'])
  .openapi('LicenseModelImageRequest')

const LicenseModelVideoRequestSchema = z
  .enum(['rightsready', 'royaltyfree'])
  .openapi('LicenseModelVideoRequest')

const LogLevelSchema = z
  .enum(['Trace', 'Debug', 'Information', 'Warning', 'Error', 'Critical', 'None'])
  .openapi('LogLevel')

const MemcachedLogEntrySchema = z
  .strictObject({
    ExceptionMessage: z.string().nullable().exactOptional(),
    LogLevel: LogLevelSchema.exactOptional(),
    Message: z.string().nullable().exactOptional(),
    Time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemcachedLogEntry')

const NumberOfPeopleFilterTypeSchema = z
  .enum(['none', 'one', 'two', 'group'])
  .openapi('NumberOfPeopleFilterType')

const OrderNotesSchema = z
  .strictObject({
    licensee_name: z.string().nullable().exactOptional(),
    ordered_by: z.string().nullable().exactOptional(),
    project_title: z.string().nullable().exactOptional(),
    purchase_order_number: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderNotes')

const OrderDetailSchema = z
  .strictObject({
    assets: z.array(AssetIdFromOrderSchema).nullable().exactOptional(),
    end_client: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    invoice_number: z.string().nullable().exactOptional(),
    notes: OrderNotesSchema.exactOptional(),
    order_date: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderDetail')

const OverageDetailsSchema = z
  .strictObject({
    count: z.int32().nullable().exactOptional(),
    limit: z.int32().nullable().exactOptional(),
    overages_reached: z.boolean().nullable().exactOptional(),
    remaining: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverageDetails')

const PremiumAccessDownloadDataSchema = z
  .strictObject({
    download_notes: z.string().nullable().exactOptional(),
    project_code: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PremiumAccessDownloadData')

const PreviousAssetPurchaseSchema = z
  .strictObject({
    asset_id: z.string().nullable().exactOptional(),
    asset_type: z.string().nullable().exactOptional(),
    date_purchased: z.iso.datetime({ offset: true }).exactOptional(),
    download_uri: z.string().nullable().exactOptional(),
    file_size_in_bytes: z.string().nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    order_id: z.string().nullable().exactOptional(),
    purchased_by: z.string().nullable().exactOptional(),
    size_name: z.string().nullable().exactOptional(),
    thumb_uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PreviousAssetPurchase')

const PreviousAssetPurchasesSchema = z
  .strictObject({
    previous_purchases: z.array(PreviousAssetPurchaseSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PreviousAssetPurchases')

const PreviousPurchaseSchema = z
  .strictObject({
    date_purchased: z.iso.datetime({ offset: true }).exactOptional(),
    image_id: z.string().nullable().exactOptional(),
    license_model: z.string().nullable().exactOptional(),
    order_id: z.string().nullable().exactOptional(),
    thumb_uri: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PreviousPurchase')

const PreviousPurchasesSchema = z
  .strictObject({
    previous_purchases: z.array(PreviousPurchaseSchema).nullable().exactOptional(),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PreviousPurchases')

const ProductStatusSchema = z.enum(['active', 'inactive']).openapi('ProductStatus')

const ProductTypeResponseSchema = z
  .enum([
    'easyaccess',
    'editorialsubscription',
    'imagepack',
    'premiumaccess',
    'royaltyfreesubscription',
    'creditpack',
  ])
  .openapi('ProductTypeResponse')

const ProductSchema = z
  .strictObject({
    agreement_name: z.string().nullable().exactOptional(),
    application_website: z.string().nullable().exactOptional(),
    credits_remaining: z.int32().nullable().exactOptional(),
    download_limit: z.int32().nullable().exactOptional(),
    download_limit_duration: z.string().nullable().exactOptional(),
    download_limit_reset_utc_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    download_requirements: DownloadRequirementsSchema.exactOptional(),
    downloads_remaining: z.int32().nullable().exactOptional(),
    expiration_utc_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    imagepack_resolution: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    overage: OverageDetailsSchema.exactOptional(),
    status: ProductStatusSchema.exactOptional(),
    team_credits: z.int32().nullable().exactOptional(),
    type: ProductTypeResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Product')

const ProductFieldValuesSchema = z.literal('download_requirements').openapi('ProductFieldValues')

const ProductStatusRequestSchema = z
  .enum(['all', 'active', 'inactive'])
  .openapi('ProductStatusRequest')

const ProductTypeForDownloadsSchema = z
  .enum([
    'easyaccess',
    'editorialsubscription',
    'imagepack',
    'premiumaccess',
    'royaltyfreesubscription',
    'creditpack',
  ])
  .openapi('ProductTypeForDownloads')

const ProductsResultSchema = z
  .strictObject({ products: z.array(ProductSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ProductsResult')

const ReleaseStatusSchema = z
  .enum(['release_not_important', 'fully_released'])
  .openapi('ReleaseStatus')

const SearchByImageResourceResultsSchema = z
  .strictObject({
    auto_corrections: AutoCorrectionsSchema.exactOptional(),
    facets: SearchFacetsResponseSchema.exactOptional(),
    image_fingerprint: z.string().nullable().exactOptional(),
    images: z.any().nullable().exactOptional(),
    related_searches: z
      .array(RelatedSearchSchema)
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true }),
    result_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchByImageResourceResults')

const SearchFileTypeSchema = z.enum(['eps', 'jpg']).openapi('SearchFileType')

const SelfResultSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelfResult')

const SortOrderSchema = z
  .enum(['best_match', 'most_popular', 'newest', 'oldest', 'random'])
  .openapi('SortOrder')

const TeeShirtSizeSchema = z
  .enum(['x_small', 'small', 'medium', 'large', 'x_large', 'xx_large', 'vector'])
  .openapi('TeeShirtSize')

const TerritoryRestrictionSchema = z
  .strictObject({
    country_code: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TerritoryRestriction')

const VideoAspectRatioFilterTypeSchema = z
  .enum(['16:9', '9:16', '3:4', '4:3', '4:5', '2:1', '17:9', '9:17'])
  .openapi('VideoAspectRatioFilterType')

const VideoDetailFieldValuesSchema = z
  .enum([
    'id',
    'allowed_use',
    'artist',
    'asset_family',
    'call_for_image',
    'caption',
    'city',
    'clip_length',
    'collection_code',
    'collection_id',
    'collection_name',
    'color_type',
    'comp',
    'copyright',
    'country',
    'date_created',
    'date_submitted',
    'detail_set',
    'display_set',
    'download_sizes',
    'download_product',
    'downloads',
    'editorial_segments',
    'entity_details',
    'era',
    'event_ids',
    'istock_collection',
    'istock_licenses',
    'key_frames',
    'keywords',
    'license_model',
    'mastered_to',
    'object_name',
    'orientation',
    'originally_shot_on',
    'preview',
    'product_types',
    'quality_rank',
    'referral_destinations',
    'shot_speed',
    'source',
    'state_province',
    'summary_set',
    'thumb',
    'title',
  ])
  .openapi('VideoDetailFieldValues')

const VideoFormatsRequestSchema = z
  .enum(['sd', 'hd', '4k', 'hd_web'])
  .openapi('VideoFormatsRequest')

const VideoFrameRatesSchema = z
  .enum(['23.98', '24', '25', '29.97', '30', '50', '59.94', '60'])
  .openapi('VideoFrameRates')

const VideoOrientationRequestSchema = z
  .enum(['horizontal', 'vertical'])
  .openapi('VideoOrientationRequest')

const ViewpointsFilterTypeSchema = z
  .enum([
    'lockdown',
    'panning',
    'tracking_shot',
    'aerial_view',
    'high_angle_view',
    'low_angle_view',
    'tilt',
    'point_of_view',
  ])
  .openapi('ViewpointsFilterType')

const AssetUsageSchema = z
  .strictObject({
    asset_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Specifies the Id of the asset that was used.' }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Specifies the number of times the asset was used.' }),
    usage_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed.',
      }),
  })
  .openapi({
    description: 'Specifies the id, usage Quantity, and date of when an asset was used.',
    required: [],
  })
  .openapi('AssetUsage')

const ReportUsageBatchRequestSchema = z
  .strictObject({
    asset_usages: z
      .array(AssetUsageSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifies the list of asset id, usage count and date of usage combinations to record.',
      }),
  })
  .openapi({
    description: 'Specifies the request information for the Batch Usages endpoint.',
    required: [],
  })
  .openapi('ReportUsageBatchRequest')

const ReportUsageBatchResponseSchema = z
  .strictObject({
    invalid_assets: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifies a list of asset ids submitted that did not match known Getty asset ids.',
      }),
    total_asset_usages_processed: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Specifies the number of asset usage records that were successfully recorded.',
      }),
  })
  .openapi({ description: 'Specifies the response from the Batch Usages endpoint.', required: [] })
  .openapi('ReportUsageBatchResponse')

const ApiKeySecurityScheme = { in: 'header', name: 'Api-Key', type: 'apiKey' }

const OAuth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.gettyimages.com/v4/oauth2/auth',
      refreshUrl: 'https://api.gettyimages.com/v4/oauth2/token',
      scopes: {},
      tokenUrl: 'https://api.gettyimages.com/v4/oauth2/token',
    },
    clientCredentials: { scopes: {}, tokenUrl: 'https://api.gettyimages.com/v4/oauth2/token' },
    implicit: { authorizationUrl: 'https://api.gettyimages.com/v4/oauth2/auth', scopes: {} },
    password: {
      refreshUrl: 'https://api.gettyimages.com/v4/oauth2/token',
      scopes: {},
      tokenUrl: 'https://api.gettyimages.com/v4/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV3AffiliatesSearchImagesRoute = createRoute({
  method: 'get',
  path: '/v3/affiliates/search/images',
  tags: ['AffiliateSearch'],
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      phrase: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search images using a search phrase.',
            in: 'query',
            name: 'phrase',
            schema: {
              description: 'Search images using a search phrase.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Search images using a search phrase.',
        }),
      style: AffiliateSearchStyleSchema.openapi({
        param: {
          description: 'Filter based on graphical style of the image.',
          in: 'query',
          name: 'style',
          schema: { $ref: '#/components/schemas/AffiliateSearchStyle' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AffiliateImageSearchResponseSchema } },
    },
  },
})

export const getV3AffiliatesSearchVideosRoute = createRoute({
  method: 'get',
  path: '/v3/affiliates/search/videos',
  tags: ['AffiliateSearch'],
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      phrase: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'phrase',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AffiliateVideoSearchResponseSchema } },
    },
  },
})

export const getV3ArtistsImagesRoute = createRoute({
  method: 'get',
  path: '/v3/artists/images',
  tags: ['Artists'],
  summary: 'Search for images by a photographer',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      artist_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of artist for desired images',
            in: 'query',
            name: 'artist_name',
            schema: {
              description: 'Name of artist for desired images',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Name of artist for desired images',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ArtistsImageSearchFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
              items: { $ref: '#/components/schemas/ArtistsImageSearchFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default page is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default page is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default page is 1.',
        }),
      page_size: z
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
            description: 'Specifies page size. Default page_size is 10, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 10,
              description:
                'Specifies page size. Default page_size is 10, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default page_size is 10, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
  },
})

export const getV3ArtistsVideosRoute = createRoute({
  method: 'get',
  path: '/v3/artists/videos',
  tags: ['Artists'],
  summary: 'Search for videos by a photographer',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      artist_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of artist for desired images',
            in: 'query',
            name: 'artist_name',
            schema: {
              description: 'Name of artist for desired images',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Name of artist for desired images',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ArtistsVideoSearchFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
              items: { $ref: '#/components/schemas/ArtistsVideoSearchFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default page is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default page is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default page is 1.',
        }),
      page_size: z
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
            description: 'Specifies page size. Default page_size is 10, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 10,
              description:
                'Specifies page size. Default page_size is 10, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default page_size is 10, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
  },
})

export const putV3AssetChangesChangeSetsRoute = createRoute({
  method: 'put',
  path: '/v3/asset-changes/change-sets',
  tags: ['AssetChanges'],
  summary: 'Get asset change notifications.',
  description:
    "# Asset Changes\n\nGet notifications about new, updated or deleted assets for a specific channel.\n\n##  Quickstart\n\nYou'll need an API key and an access token to use this resource. \n\nMaximum batch size is 2200.\n\nChange-sets must be confirmed before a new batch of notifications can be retrieved from this endpoint. Use the DELETE asset-changes/change-sets/{change-set-id} endpoint to confirm reciept of these notifications.\n\nValues returned for asset_type include Image, Film, and null. Values returned for asset_lifecycle include New, Update, and Delete.\n\nDelete notifications may be provided for asset ids that have not previously been received as New or Update notifications. Delete notifications may return null for the asset_type.\n\nIf there are no notifications in the channel an empty response body will be returned.\n\nNotifications older than 60 days will be removed from partner channels.\n",
  request: {
    query: z.object({
      channel_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.',
            in: 'query',
            name: 'channel_id',
            schema: {
              description:
                'Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.',
        }),
      batch_size: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of assets to return. The default is 2200; maximum is 2200.',
            in: 'query',
            name: 'batch_size',
            schema: {
              description:
                'Specifies the number of assets to return. The default is 2200; maximum is 2200.',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Specifies the number of assets to return. The default is 2200; maximum is 2200.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - Channel contains unconfirmed asset change notifications',
      content: { 'application/json': { schema: AssetChangesSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AssetChangesSchema } },
    },
    400: { description: 'InvalidChannelIdException' },
    403: { description: 'Your access token does not authorize access to this resource' },
    404: { description: 'The channel you specified does not exist' },
  },
})

export const deleteV3AssetChangesChangeSetsChangeSetIdRoute = createRoute({
  method: 'delete',
  path: '/v3/asset-changes/change-sets/{change-set-id}',
  tags: ['AssetChanges'],
  summary: 'Confirm asset change notifications.',
  description:
    "# Delete Asset Changes\n\nConfirm asset changes acknowledges receipt of asset changes (from the PUT asset-changes endpoint).\n\n##  Quickstart\n\nYou'll need an API key and an access token to use this resource.\n\nUse the change_set_id from the PUT asset-changes/change-sets endpoint to confirm receipt of notifications.\n",
  request: {
    params: z.object({
      'change-set-id': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description:
              'Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.',
            in: 'path',
            name: 'change-set-id',
            required: true,
            schema: {
              description:
                'Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.',
              format: 'int64',
              type: 'integer',
            },
          },
          description:
            'Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'InvalidChangeSetId' },
    403: { description: 'Your access token does not authorize access to this resource' },
    404: { description: 'Transaction was not found' },
  },
})

export const getV3AssetChangesChannelsRoute = createRoute({
  method: 'get',
  path: '/v3/asset-changes/channels',
  tags: ['AssetChanges'],
  summary: 'Get a list of asset change notification channels.',
  description:
    "# Get Partner Channels\n\nRetrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.\n\n##  Quickstart\n\nYou'll need an API key and an access token to use this resource.\n\nPartners who have a channel that has been removed should contact their sales representative to be set up again.\n\n",
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ChannelSchema) } },
    },
    403: { description: 'UnauthorizedToAccessResource' },
    404: { description: 'ChannelsNotFound' },
  },
})

export const postV3AssetLicensingAssetIdRoute = createRoute({
  method: 'post',
  path: '/v3/asset-licensing/{assetId}',
  tags: ['AssetLicensing'],
  summary: 'Endpoint for acquiring extended licenses with iStock credits for an asset.',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      assetId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Getty Images assetId - examples 520621493, 112301284',
            in: 'path',
            name: 'assetId',
            required: true,
            schema: {
              description: 'Getty Images assetId - examples 520621493, 112301284',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Getty Images assetId - examples 520621493, 112301284',
        }),
    }),
    body: {
      description:
        'Structure that specifies an array of LicenseTypes (multiseat, unlimited, resale, indemnification) to acquire,\r\n            and whether or not to use Team Credits. Authenticated User must have access to Team Credits if UseTeamCredits is set to "true".',
      content: { 'application/json': { schema: AcquireAssetLicensesRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssetLicensingResponseSchema } },
    },
    400: { description: 'InvalidRequestParameters' },
    401: { description: 'AuthorizationTokenRequired' },
    402: { description: 'NotEnoughCreditsForPurchase' },
    404: { description: 'StandardLicenseNotFound' },
  },
})

export const getV3AssetManagementAssetsSendEventsRoute = createRoute({
  method: 'get',
  path: '/v3/asset-management/assets/send-events',
  tags: ['AssetManagement'],
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      last_offset: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a date/time (with timezone information) for continuing retrieval of events.\r\nEvents occuring _after_ the `last_offset` value provided will be returned.',
            in: 'query',
            name: 'last_offset',
            schema: {
              description:
                'Specifies a date/time (with timezone information) for continuing retrieval of events.\r\nEvents occuring _after_ the `last_offset` value provided will be returned.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Specifies a date/time (with timezone information) for continuing retrieval of events.\r\nEvents occuring _after_ the `last_offset` value provided will be returned.',
        }),
      event_count: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the number of events to return. Default is 50, maximum value is 100.',
            in: 'query',
            name: 'event_count',
            schema: {
              description:
                'Specifies the number of events to return. Default is 50, maximum value is 100.',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Specifies the number of events to return. Default is 50, maximum value is 100.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetSendEventsResponseSchema },
        'text/json': { schema: GetSendEventsResponseSchema },
        'text/plain': { schema: GetSendEventsResponseSchema },
      },
    },
    400: { description: 'EventCountOutOfRange' },
  },
})

export const getV3BoardsRoute = createRoute({
  method: 'get',
  path: '/v3/boards',
  tags: ['Boards'],
  summary: 'Get all boards that the user participates in',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      board_relationship: BoardRelationshipSchema.openapi({
        param: {
          description: 'Search for boards the user owns or has been invited to as an editor.',
          in: 'query',
          name: 'board_relationship',
          schema: { $ref: '#/components/schemas/BoardRelationship' },
          required: false,
        },
      }).exactOptional(),
      sort_order: BoardSortOrderSchema.openapi({
        param: {
          description:
            'Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/BoardSortOrder' },
          required: false,
        },
      }).exactOptional(),
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
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request number of boards to return in each page. (default is 30).',
            in: 'query',
            name: 'pageSize',
            schema: {
              default: 30,
              description: 'Request number of boards to return in each page. (default is 30).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request number of boards to return in each page. (default is 30).',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BoardListSchema } } },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
  },
})

export const postV3BoardsRoute = createRoute({
  method: 'post',
  path: '/v3/boards',
  tags: ['Boards'],
  summary: 'Create a new board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    body: {
      description: 'Specify a name and description of the board to create (name is required).',
      content: { 'application/json': { schema: BoardInfoSchema } },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: BoardCreatedSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
  },
})

export const getV3BoardsBoardIdRoute = createRoute({
  method: 'get',
  path: '/v3/boards/{board_id}',
  tags: ['Boards'],
  summary: 'Get assets and metadata for a specific board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Retrieve details for a specific board.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Retrieve details for a specific board.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Retrieve details for a specific board.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BoardDetailSchema } } },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    404: { description: 'BoardNotFound' },
  },
})

export const putV3BoardsBoardIdRoute = createRoute({
  method: 'put',
  path: '/v3/boards/{board_id}',
  tags: ['Boards'],
  summary: 'Update a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to update.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: { description: 'Specify the board to update.', nullable: true, type: 'string' },
          },
          description: 'Specify the board to update.',
        }),
    }),
    body: {
      description: 'Specify a new name and description for the board (name is required).',
      content: { 'application/json': { schema: BoardInfoSchema } },
    },
  },
  responses: {
    200: { description: 'Success' },
    204: { description: 'Updated' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const deleteV3BoardsBoardIdRoute = createRoute({
  method: 'delete',
  path: '/v3/boards/{board_id}',
  tags: ['Boards'],
  summary: 'Delete a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to delete.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: { description: 'Specify the board to delete.', nullable: true, type: 'string' },
          },
          description: 'Specify the board to delete.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    204: { description: '' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const putV3BoardsBoardIdAssetsRoute = createRoute({
  method: 'put',
  path: '/v3/boards/{board_id}/assets',
  tags: ['Boards'],
  summary: 'Add assets to a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to add assets to.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to add assets to.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to add assets to.',
        }),
    }),
    body: {
      description: 'List assets to add to the board.',
      content: {
        'application/json': {
          schema: z
            .array(BoardAssetSchema)
            .nullable()
            .openapi({ description: 'List assets to add to the board.' }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AddBoardAssetsResultSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const deleteV3BoardsBoardIdAssetsRoute = createRoute({
  method: 'delete',
  path: '/v3/boards/{board_id}/assets',
  tags: ['Boards'],
  summary: 'Remove assets from a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to remove assets from.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to remove assets from.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to remove assets from.',
        }),
    }),
    query: z.object({
      asset_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'List the assets to be removed from the board.',
            in: 'query',
            name: 'asset_ids',
            schema: {
              description: 'List the assets to be removed from the board.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            required: false,
          },
          description: 'List the assets to be removed from the board.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const putV3BoardsBoardIdAssetsAssetIdRoute = createRoute({
  method: 'put',
  path: '/v3/boards/{board_id}/assets/{asset_id}',
  tags: ['Boards'],
  summary: 'Add an asset to a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to add an asset to.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to add an asset to.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to add an asset to.',
        }),
      asset_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description:
              "Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.",
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: {
              description:
                "Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.",
              nullable: true,
              type: 'string',
            },
          },
          description:
            "Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.",
        }),
    }),
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'AssetNotFound' },
    404: { description: 'BoardNotFound' },
  },
})

export const deleteV3BoardsBoardIdAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/v3/boards/{board_id}/assets/{asset_id}',
  tags: ['Boards'],
  summary: 'Remove an asset from a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to remove an asset from.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to remove an asset from.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to remove an asset from.',
        }),
      asset_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the asset to remove from the board.',
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: {
              description: 'Specify the asset to remove from the board.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the asset to remove from the board.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const getV3BoardsBoardIdCommentsRoute = createRoute({
  method: 'get',
  path: '/v3/boards/{board_id}/comments',
  tags: ['Boards'],
  summary: 'Get comments from a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to retrieve comments from.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to retrieve comments from.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to retrieve comments from.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CommentsListSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    404: { description: 'BoardNotFound' },
  },
})

export const postV3BoardsBoardIdCommentsRoute = createRoute({
  method: 'post',
  path: '/v3/boards/{board_id}/comments',
  tags: ['Boards'],
  summary: 'Add a comment to a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board to add a comment to.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board to add a comment to.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board to add a comment to.',
        }),
    }),
    body: {
      description: 'Comment to be added to the board.',
      content: { 'application/json': { schema: CommentRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CommentCreatedSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const deleteV3BoardsBoardIdCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/v3/boards/{board_id}/comments/{comment_id}',
  tags: ['Boards'],
  summary: 'Delete a comment from a board',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      board_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the board containing the comment to delete.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              description: 'Specify the board containing the comment to delete.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the board containing the comment to delete.',
        }),
      comment_id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specify the comment to delete.',
            in: 'path',
            name: 'comment_id',
            required: true,
            schema: {
              description: 'Specify the comment to delete.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specify the comment to delete.',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    204: { description: 'CommentDeleted' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientAccess' },
    404: { description: 'BoardNotFound' },
  },
})

export const getV3CollectionsRoute = createRoute({
  method: 'get',
  path: '/v3/collections',
  tags: ['Collections'],
  summary: 'Gets collections applicable for the customer.',
  description:
    "Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).\n\nYou'll need an API key and access token to use this resource.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CollectionsListSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getV3CountriesRoute = createRoute({
  method: 'get',
  path: '/v3/countries',
  tags: ['Countries'],
  summary: 'Gets countries codes and names.',
  description:
    "Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.\n\nYou'll need an API key and access token to use this resource.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CountriesListSchema } } },
    401: { description: 'Unauthorized' },
  },
})

export const getV3CustomersCurrentRoute = createRoute({
  method: 'get',
  path: '/v3/customers/current',
  tags: ['Customers'],
  summary: 'Returns information about the current user.',
  description:
    "Returns the first, middle and last name of the authenticated user.\n\nYou'll need an API key and access token to use this resource.\n\t\nPlease consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomerInfoResponseSchema } },
    },
    400: { description: 'InvalidRequestParameters' },
    401: { description: 'Unauthorized' },
    503: { description: 'ServiceUnavailable' },
  },
})

export const getV3DownloadsRoute = createRoute({
  method: 'get',
  path: '/v3/downloads',
  tags: ['Downloads'],
  summary: "Returns information about a customer's downloaded assets.",
  description:
    "Returns information about a customer's previously downloaded assets.\n\nYou'll need an API key and access token to use this resource.\n \n\t\nThis endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, \nyou need to also include an authorization token in the header of your request. \nPlease consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      date_from: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). \r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is 30 days prior to date_to',
            in: 'query',
            name: 'date_from',
            schema: {
              description:
                'If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). \r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is 30 days prior to date_to',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). \r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is 30 days prior to date_to',
        }),
      date_to: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)\r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is current date or 30 days after specified start date, whichever one is earlier.',
            in: 'query',
            name: 'date_to',
            schema: {
              description:
                'If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)\r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is current date or 30 days after specified start date, whichever one is earlier.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)\r\nAny hour, minute, second values in the request are not used, unless useTimePart parameter is included.\r\nDate/times in the response are UTC. Default is current date or 30 days after specified start date, whichever one is earlier.',
        }),
      use_time: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format\r\ni.e.: 2019-09-19T19:30:37 or 2019-09-19 19:30:37.  Time zone can be specified as optional.\r\nDefault value is false',
            in: 'query',
            name: 'use_time',
            schema: {
              default: false,
              description:
                'If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format\r\ni.e.: 2019-09-19T19:30:37 or 2019-09-19 19:30:37.  Time zone can be specified as optional.\r\nDefault value is false',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format\r\ni.e.: 2019-09-19T19:30:37 or 2019-09-19 19:30:37.  Time zone can be specified as optional.\r\nDefault value is false',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
      product_type: ProductTypeForDownloadsSchema.openapi({
        param: {
          description:
            'Specifies product type to be included in the previous download results. Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. To get previous iStockPhoto credit downloads, creditpack must be selected.',
          in: 'query',
          name: 'product_type',
          schema: { $ref: '#/components/schemas/ProductTypeForDownloads' },
          required: false,
        },
      }).exactOptional(),
      company_downloads: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
            in: 'query',
            name: 'company_downloads',
            schema: {
              default: false,
              description:
                'If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetDownloadsResponseSchema } },
    },
    400: { description: 'Bad request' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'Forbidden' },
  },
})

export const postV3DownloadsImagesIdRoute = createRoute({
  method: 'post',
  path: '/v3/downloads/images/{id}',
  tags: ['Downloads'],
  summary: 'Download an image',
  description:
    'Use this endpoint to generate download URLs and related data for images you are authorized to download.\n\nMost product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.\n\nThe download limit for a given download period is covered in your product agreement established with Getty Images.\n\nYou\'ll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.\n\n## Auto Downloads\nThe `auto_download` request query parameter specifies whether to automatically download the image.\n\nIf the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).\n\nClient Request:\n\n```\nhttps://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true\n```\n\nServer Response:\n\nYour client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).\n\n```\nHTTP/1.1 303 See Other\nLocation: https://delivery.gettyimages.com/...\n```\n\nIf the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. \n\nClient Request:\n\n```\nhttps://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false\n```\n\nServer Response:\n\n```\nHTTP/1.1 200 OK\n{\n\t"uri": "https://delivery.gettyimages.com/..."\n}\n```\n## Downloading Via the Returned URI\n\nYour client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).\n\nThe URI returned by this call should be considered opaque and the format could change at any time.\nIn order to get the filename, length or file type, the response headers must be inspected. An example\nresponse follows:\n\n```\ncontent-length: 33959979\ncontent-type: image/jpeg\ncontent-disposition: attachment; filename=GettyImages-1167612765.jpg\n```\n\nThe `content-disposition` header must be parsed to get a usable filename.\n\n## Download URI expiration\n\nDownload URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Id of image to download.\r\n                </remarks>',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description:
                '<remarks>\r\n                    Id of image to download.\r\n                </remarks>',
              nullable: true,
              type: 'string',
            },
          },
          description:
            '<remarks>\r\n                    Id of image to download.\r\n                </remarks>',
        }),
    }),
    query: z.object({
      auto_download: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the image.\r\n                    If false is specified, the download URI will be returned in the response message. Default is true.\r\n                </remarks>',
            in: 'query',
            name: 'auto_download',
            schema: {
              default: true,
              description:
                '<remarks>\r\n                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the image.\r\n                    If false is specified, the download URI will be returned in the response message. Default is true.\r\n                </remarks>',
              type: 'boolean',
            },
            required: false,
          },
          description:
            '<remarks>\r\n                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the image.\r\n                    If false is specified, the download URI will be returned in the response message. Default is true.\r\n                </remarks>',
        }),
      file_type: DownloadFileTypeSchema.openapi({
        param: {
          description:
            '<remarks>\r\n                    File Type expressed with three character file extension.\r\n                </remarks>',
          in: 'query',
          name: 'file_type',
          schema: { $ref: '#/components/schemas/DownloadFileType' },
          required: false,
        },
      }).exactOptional(),
      height: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Specifies the pixel height of the particular image to download.\r\n                    Available heights can be found in the images/{ids} response for the specific image.\r\n                    If left blank, it will return the largest available size.\r\n                </remarks>',
            in: 'query',
            name: 'height',
            schema: {
              description:
                '<remarks>\r\n                    Specifies the pixel height of the particular image to download.\r\n                    Available heights can be found in the images/{ids} response for the specific image.\r\n                    If left blank, it will return the largest available size.\r\n                </remarks>',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            '<remarks>\r\n                    Specifies the pixel height of the particular image to download.\r\n                    Available heights can be found in the images/{ids} response for the specific image.\r\n                    If left blank, it will return the largest available size.\r\n                </remarks>',
        }),
      product_id: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
            in: 'query',
            name: 'product_id',
            schema: {
              description:
                '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
        }),
      product_type: ProductTypeForDownloadsSchema.openapi({
        param: {
          description:
            '<remarks>\r\n                    Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.\r\n                </remarks>',
          in: 'query',
          name: 'product_type',
          schema: { $ref: '#/components/schemas/ProductTypeForDownloads' },
          required: false,
        },
      }).exactOptional(),
      use_team_credits: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
            in: 'query',
            name: 'use_team_credits',
            schema: {
              default: false,
              description:
                'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
        }),
    }),
    body: {
      description:
        '<remarks>\r\n                    Additional information required from specific customers when downloading. \r\n                    Only users who have been set up with a project code by Getty Images Sales need to use this field.\r\n                </remarks>',
      content: { 'application/json': { schema: PremiumAccessDownloadDataSchema } },
    },
  },
  responses: {
    200: { description: 'OK' },
    303: { description: 'See Other' },
    400: { description: 'MissingRequiredQueryParameters' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'OverageLimitReached' },
    404: { description: 'ImageNotFound' },
  },
})

export const postV3DownloadsVideosIdRoute = createRoute({
  method: 'post',
  path: '/v3/downloads/videos/{id}',
  tags: ['Downloads'],
  summary: 'Download a video',
  description:
    'Use this endpoint to generate download URLs and related data for videos you are authorized to download.\n\nMost product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.\n\nThe download limit for a given download period is covered in your product agreement established with Getty Images.\n\nYou\'ll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.\n\n## Auto Downloads\nThe `auto_download` request query parameter specifies whether to automatically download the video.\n\nIf the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).\n\nClient Request:\n\n```\nhttps://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true\n```\n\nServer Response:\n\nYour client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).\n\n```\nHTTP/1.1 303 See Other\nLocation: https://delivery.gettyimages.com/...\n```\n\nIf the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. \n\nClient Request:\n\n```\nhttps://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false\n```\n\nServer Response:\n\n```\nHTTP/1.1 200 OK\n{\n\t"uri": "https://delivery.gettyimages.com/..."\n}\n```\n\n## Downloading Via the Returned URI\n\nYour client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).\n\nThe URI returned by this call should be considered opaque and the format could change at any time.\nIn order to get the filename, length or file type, the response headers must be inspected. An example\nresponse follows:\n\n```\ncontent-length: 283925783\ncontent-type: video/quicktime\ncontent-disposition: attachment; filename=GettyImages-690773579.mov\n```\n\nThe `content-disposition` header must be parsed to get a usable filename.\n\n## Download URI expiration\n\nDownload URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Id of video to download.\r\n                </remarks>',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description:
                '<remarks>\r\n                    Id of video to download.\r\n                </remarks>',
              nullable: true,
              type: 'string',
            },
          },
          description:
            '<remarks>\r\n                    Id of video to download.\r\n                </remarks>',
        }),
    }),
    query: z.object({
      auto_download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the video.\r\n                    If false is specified, the download URI will be returned in the response message. Default is false.\r\n                </remarks>',
            in: 'query',
            name: 'auto_download',
            schema: {
              default: false,
              description:
                '<remarks>\r\n                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the video.\r\n                    If false is specified, the download URI will be returned in the response message. Default is false.\r\n                </remarks>',
              type: 'boolean',
            },
            required: false,
          },
          description:
            '<remarks>\r\n                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the video.\r\n                    If false is specified, the download URI will be returned in the response message. Default is false.\r\n                </remarks>',
        }),
      size: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the size to be downloaded.',
            in: 'query',
            name: 'size',
            schema: {
              description: 'Specifies the size to be downloaded.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Specifies the size to be downloaded.',
        }),
      product_id: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
            in: 'query',
            name: 'product_id',
            schema: {
              description:
                '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            '<remarks>\r\n                    Identifier of the instance for the selected product offering type.\r\n                </remarks>',
        }),
      product_type: ProductTypeForDownloadsSchema.openapi({
        param: {
          description:
            '<remarks>\r\n                    Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.\r\n                </remarks>',
          in: 'query',
          name: 'product_type',
          schema: { $ref: '#/components/schemas/ProductTypeForDownloads' },
          required: false,
        },
      }).exactOptional(),
      use_team_credits: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
            in: 'query',
            name: 'use_team_credits',
            schema: {
              description:
                'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.',
        }),
    }),
    body: {
      description:
        '<remarks>\r\n                    Additional information required from specific customers when downloading. \r\n                    Only users who have been set up with a project code by Getty Images Sales need to use this field.\r\n                </remarks>',
      content: { 'application/json': { schema: PremiumAccessDownloadDataSchema } },
    },
  },
  responses: {
    200: { description: 'OK' },
    303: { description: 'See Other' },
    400: { description: 'MissingRequiredQueryParameters' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'OverageLimitReached' },
    404: { description: 'VideoNotFound' },
  },
})

export const getV3EventsRoute = createRoute({
  method: 'get',
  path: '/v3/events',
  tags: ['Events'],
  summary: 'Get metadata for multiple events',
  description:
    'This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and\nvideographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with \nan event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content \nproduced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) \nwill be consistently assigned an EventID. The Event framework may also be used to group similar content, such as \n"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". \n\nYou\'ll need an API key and access token to use this resource.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of event ids.',
            explode: false,
            in: 'query',
            name: 'ids',
            schema: {
              description: 'A comma separated list of event ids.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'A comma separated list of event ids.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EventDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of fields to return in the response.',
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description: 'A comma separated list of fields to return in the response.',
              items: { $ref: '#/components/schemas/EventDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'A comma separated list of fields to return in the response.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidRequestParameters' },
    401: { description: 'Unauthorized' },
    404: { description: 'EventNotFound' },
  },
})

export const getV3EventsIdRoute = createRoute({
  method: 'get',
  path: '/v3/events/{id}',
  tags: ['Events'],
  summary: 'Get metadata for a single event',
  description:
    'This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment \nphotographers and videographers cover editorially relevant events occurring around the world.  \nAll images or video clips produced in association with an event, are assigned the same EventID. \nEventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images \nbrand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be \nconsistently assigned an EventID. The Event framework may also be used to group similar content, such as \n"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". \n\nYou\'ll need an API key and access token to use this resource.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
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
            description: 'An event id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'An event id.', format: 'int32', type: 'integer' },
          },
          description: 'An event id.',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EventDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of fields to return in the response.',
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description: 'A comma separated list of fields to return in the response.',
              items: { $ref: '#/components/schemas/EventDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'A comma separated list of fields to return in the response.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidRequestParameters' },
    401: { description: 'Unauthorized' },
    404: { description: 'EventNotFound' },
  },
})

export const getV3ImagesRoute = createRoute({
  method: 'get',
  path: '/v3/images',
  tags: ['Images'],
  summary: 'Get metadata for multiple images by supplying multiple image ids',
  description:
    'This endpoint returns the detailed image metadata for all specified images.\n\nYou\'ll need an API key and access token to use this resource.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build \nsearch response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images":\n    [\n        "artist",\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a \ndetailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images":\n    [\n        "allowed_use",\n        "artist", \n        "artist_title", \n        "asset_family",\n        "call_for_image",\n        "caption", \n        "city",\n        "collection_code",\n        "collection_id", \n        "collection_name",\n        "color_type", \n        "copyright", \n        "country", \n        "credit_line", \n        "date_created", \n        "date_submitted",\n        "download_sizes", \n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "state_province", \n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution\nfiles that are most frequently used to build a UI displaying search results. The following fields are provided for every image \nin your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n\n## Request Usage Considerations\n\n- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
            explode: false,
            in: 'query',
            name: 'ids',
            schema: {
              description:
                'Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/ImageDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImagesDetailResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'ImageNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3ImagesIdRoute = createRoute({
  method: 'get',
  path: '/v3/images/{id}',
  tags: ['Images'],
  summary: 'Get metadata for a single image by supplying one image id',
  description:
    'This endpoint returns the detailed image metadata for a specified image.\n\nYou\'ll need an API key and access token to use this resource. \n \n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that\nare often used to build search response results. The following fields are provided for every image in your\nresult set when you include **summary_set** in your request.\n\n```\n{\n    "images":\n    [\n        "artist",\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are \noften used to build a detailed view of images. The following fields are provided for every image in your \nresult set when you include **detail_set** in your request.\n\n```\n{\n    "images":\n    [\n        "allowed_use",\n        "artist", \n        "artist_title", \n        "asset_family",\n        "call_for_image",\n        "caption", \n        "city",\n        "collection_code",\n        "collection_id", \n        "collection_name",\n        "color_type", \n        "copyright", \n        "country", \n        "credit_line", \n        "date_created", \n        "date_submitted",\n        "download_sizes", \n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "state_province", \n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low\nresolution files that are most frequently used to build a UI displaying search results. The following fields are provided\nfor every image in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n\n## Request Usage Considerations\n\n- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.\n\n\n\n          "name": "string",\n          "uri": "string"',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'An image id. For more than one image please use the /v3/images endpoint.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description:
                'An image id. For more than one image please use the /v3/images endpoint.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'An image id. For more than one image please use the /v3/images endpoint.',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/ImageDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImagesDetailResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'ImageNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3ImagesIdDownloadhistoryRoute = createRoute({
  method: 'get',
  path: '/v3/images/{id}/downloadhistory',
  tags: ['Images'],
  summary: "Returns information about a customer's download history for a specific asset",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'An image id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'An image id.', nullable: true, type: 'string' },
          },
          description: 'An image id.',
        }),
    }),
    query: z.object({
      company_downloads: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, returns the list of previously downloaded images for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
            in: 'query',
            name: 'company_downloads',
            schema: {
              description:
                'If specified, returns the list of previously downloaded images for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'If specified, returns the list of previously downloaded images for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AssetDownloadHistoryResultsSchema } },
    },
    400: { description: 'Bad request' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'ImageNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3ImagesIdSameSeriesRoute = createRoute({
  method: 'get',
  path: '/v3/images/{id}/same-series',
  tags: ['Images'],
  summary: 'Retrieve creative images from the same series',
  description:
    'This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.\n\nYou\'ll need an API key and access token to use this resource.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build\nsearch response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images":\n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "display_sizes": \n        [\n            {\n                "name": "thumb"\n            }\n        ]\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a \ndetailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images":\n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n        "call_for_image",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "copyright",\n        "date_created",\n        "display_sizes": \n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files \nthat are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result\nset when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Identifies an existing image',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Identifies an existing image', nullable: true, type: 'string' },
          },
          description: 'Identifies an existing image',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/ImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImageSearchItemSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'ImageNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3ImagesIdSimilarRoute = createRoute({
  method: 'get',
  path: '/v3/images/{id}/similar',
  tags: ['Images'],
  summary: 'Retrieve similar images',
  description:
    'This endpoint will provide a list of images that are similar to the specified asset id.\n\nYou\'ll need an API key and access token to use this resource.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build\nsearch response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images":\n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "display_sizes": \n        [\n            {\n                "name": "thumb"\n            }\n        ]\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a \ndetailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images":\n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n        "call_for_image",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "copyright",\n        "date_created",\n        "display_sizes": \n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files \nthat are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result\nset when you include **display_set** in your request.\n\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Identifies an existing image',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Identifies an existing image', nullable: true, type: 'string' },
          },
          description: 'Identifies an existing image',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/ImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImageSearchItemSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'ImageNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3OrdersIdRoute = createRoute({
  method: 'get',
  path: '/v3/orders/{id}',
  tags: ['Orders'],
  summary: 'Get order metadata',
  description:
    "This endpoint returns detailed order metadata for a specified order.\nUse of this endpoint requires configuration changes to your API key. \n\nYou'll need an API key and access token to use this resource.",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
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
            description: 'An order id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'An order id.', format: 'int32', type: 'integer' },
          },
          description: 'An order id.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OrderDetailSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'NoAccessToOrderMetadata' },
    404: { description: 'OrderNotFound' },
  },
})

export const getV3ProductsRoute = createRoute({
  method: 'get',
  path: '/v3/products',
  tags: ['Products'],
  summary: 'Get Products',
  description:
    "This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of\na fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.\n\nYou'll need an API key and access token to use this resource.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ProductFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of fields. Allows product download requirements to be returned.',
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                'Comma separated list of fields. Allows product download requirements to be returned.',
              items: { $ref: '#/components/schemas/ProductFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Comma separated list of fields. Allows product download requirements to be returned.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ProductsResultSchema } } },
    400: { description: 'InvalidRequestParameters' },
    401: { description: 'Unauthorized' },
    500: { description: 'CreditPack' },
  },
})

export const getV3PurchasedAssetsRoute = createRoute({
  method: 'get',
  path: '/v3/purchased-assets',
  tags: ['Purchases'],
  summary: 'Get Previously Purchased Images and Video',
  description:
    "This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. \nUse of this endpoint requires configuration changes to your API key. Please contact your sales representative\nto learn more.\n\nYou'll need an API key and access token to use this resource.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      date_to: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
            in: 'query',
            name: 'date_to',
            schema: {
              description:
                'If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(75)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 75, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 75,
              description: 'Specifies page size. Default is 75, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 75, maximum page_size is 100.',
        }),
      date_from: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
            in: 'query',
            name: 'date_from',
            schema: {
              description:
                'If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).',
        }),
      company_purchases: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
            in: 'query',
            name: 'company_purchases',
            schema: {
              default: false,
              description:
                'If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PreviousAssetPurchasesSchema } },
    },
    400: { description: 'PageNumberLessThanOne' },
    401: { description: 'Unauthorized' },
    403: { description: 'InsufficientPermissions' },
  },
})

export const putV3SearchByImageUploadsFileNameRoute = createRoute({
  method: 'put',
  path: '/v3/search/by-image/uploads/{file-name}',
  tags: ['Search'],
  summary: 'Upload image for use by the search creative images/videos operations',
  request: {
    params: z.object({
      'file-name': z
        .string()
        .nullable()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'file-name',
            required: true,
            schema: { description: '', nullable: true, type: 'string' },
          },
          description: '',
        }),
    }),
    body: {
      description: '',
      content: {
        'image/jpeg': { schema: z.string().nullable().openapi({ description: '' }) },
        'image/png': { schema: z.string().nullable().openapi({ description: '' }) },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
  },
})

export const getV3SearchEventsRoute = createRoute({
  method: 'get',
  path: '/v3/search/events',
  tags: ['Search'],
  summary: 'Search for events',
  description:
    'Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   \n\nYou\'ll need an API key and access token to use this resource.\n\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      editorial_segment: EditorialSegmentContractSchema.openapi({
        param: {
          description: 'Filters to events with a matching editorial segment.',
          in: 'query',
          name: 'editorial_segment',
          schema: { $ref: '#/components/schemas/EditorialSegmentContract' },
          required: false,
        },
      }).exactOptional(),
      date_from: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
            in: 'query',
            name: 'date_from',
            schema: {
              description:
                'Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
        }),
      date_to: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
            in: 'query',
            name: 'date_to',
            schema: {
              description:
                'Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EventFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies fields to return. Default set is 'id','name','start_date'.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description: "Specifies fields to return. Default set is 'id','name','start_date'.",
              items: { $ref: '#/components/schemas/EventFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: "Specifies fields to return. Default set is 'id','name','start_date'.",
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1, maximum is 50).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description:
                'Request results starting at a page number (default is 1, maximum is 50).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1, maximum is 50).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of events to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of events to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of events to return in each page. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters to events related to this phrase',
            in: 'query',
            name: 'phrase',
            schema: {
              default: '',
              description: 'Filters to events related to this phrase',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Filters to events related to this phrase',
        }),
      sort_order: EventSearchSortOrderSchema.openapi({
        param: {
          description: 'Specifies the order in which to sort the results. Default is `newest`.',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/EventSearchSortOrder' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EventsSearchResultSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
  },
})

export const getV3SearchImagesRoute = createRoute({
  method: 'get',
  path: '/v3/search/images',
  tags: ['Search'],
  summary: 'Search for both creative and editorial images - *** DEPRECATED ***',
  description:
    '## _This endpoint draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons,_ _**it is highly recommended that those endpoints are used instead of this blended endpoint.**_\n\n\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>\nTo include your API token in the search request, add it to the headers as a Bearer token (example in curl):\n\n\t-H "Authorization: Bearer <your-token>"\n\nSearch requests without a phrase parameter are not supported and may not always work.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images": \n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "display_sizes": \n        [\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. \nThe following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n        "call_for_image",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "copyright",\n        "date_created",\n        "display_sizes": \n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "title"\n    ]\n]\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most \nfrequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**\nin your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n\n## Request Usage Considerations\n\n- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      age_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AgeOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the age of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'age_of_people',
            schema: {
              description: 'Filter based on the age of individuals in an image.',
              items: { $ref: '#/components/schemas/AgeOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the age of individuals in an image.',
        }),
      artists: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for images by specific artists (free-text, comma-separated list of artists).',
            in: 'query',
            name: 'artists',
            schema: {
              description:
                'Search for images by specific artists (free-text, comma-separated list of artists).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Search for images by specific artists (free-text, comma-separated list of artists).',
        }),
      collection_codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
            explode: false,
            in: 'query',
            name: 'collection_codes',
            schema: {
              description:
                'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
        }),
      collections_filter_type: CollectionsFilterTypeSchema.openapi({
        param: {
          description:
            'Provides searching based on specified collection(s). The default is Include',
          in: 'query',
          name: 'collections_filter_type',
          schema: { $ref: '#/components/schemas/CollectionsFilterType' },
          required: false,
        },
      }).exactOptional(),
      color: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.',
            in: 'query',
            name: 'color',
            schema: {
              description:
                'Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.',
        }),
      compositions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CompositionsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on image composition.',
            explode: false,
            in: 'query',
            name: 'compositions',
            schema: {
              description: 'Filter based on image composition.',
              items: { $ref: '#/components/schemas/CompositionsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on image composition.',
        }),
      download_product: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            in: 'query',
            name: 'download_product',
            schema: {
              description:
                'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
      embed_content_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict search results to embeddable images. The default is false.',
            in: 'query',
            name: 'embed_content_only',
            schema: {
              default: false,
              description: 'Restrict search results to embeddable images. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Restrict search results to embeddable images. The default is false.',
        }),
      event_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on specific events',
            explode: false,
            in: 'query',
            name: 'event_ids',
            schema: {
              description: 'Filter based on specific events',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on specific events',
        }),
      ethnicity: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EthnicityFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results based on the ethnicity of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'ethnicity',
            schema: {
              description:
                'Filter search results based on the ethnicity of individuals in an image.',
              items: { $ref: '#/components/schemas/EthnicityFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter search results based on the ethnicity of individuals in an image.',
        }),
      exclude_nudity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Excludes images containing nudity. The default is false.',
            in: 'query',
            name: 'exclude_nudity',
            schema: {
              default: false,
              description: 'Excludes images containing nudity. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Excludes images containing nudity. The default is false.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies fields to return. Defaults to 'summary_set'.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description: "Specifies fields to return. Defaults to 'summary_set'.",
              items: { $ref: '#/components/schemas/ImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: "Specifies fields to return. Defaults to 'summary_set'.",
        }),
      file_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(SearchFileTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images having a specific file type.',
            explode: false,
            in: 'query',
            name: 'file_types',
            schema: {
              description: 'Return only images having a specific file type.',
              items: { $ref: '#/components/schemas/SearchFileType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images having a specific file type.',
        }),
      graphical_styles: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(GraphicalStyleSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on graphical style of the image.',
            explode: false,
            in: 'query',
            name: 'graphical_styles',
            schema: {
              description: 'Filter based on graphical style of the image.',
              items: { $ref: '#/components/schemas/GraphicalStyle' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on graphical style of the image.',
        }),
      graphical_styles_filter_type: GraphicalStylesFilterTypeSchema.openapi({
        param: {
          description:
            'Provides searching based on specified graphical style(s). The default is Include',
          in: 'query',
          name: 'graphical_styles_filter_type',
          schema: { $ref: '#/components/schemas/GraphicalStylesFilterType' },
          required: false,
        },
      }).exactOptional(),
      include_related_searches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include related searches in the response. The default is false.',
            in: 'query',
            name: 'include_related_searches',
            schema: {
              default: false,
              description:
                'Specifies whether or not to include related searches in the response. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include related searches in the response. The default is false.',
        }),
      keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'keyword_ids',
            schema: {
              description:
                'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
        }),
      minimum_size: TeeShirtSizeSchema.openapi({
        param: {
          description: 'Filter based on minimum size requested. The default is x-small',
          in: 'query',
          name: 'minimum_size',
          schema: { $ref: '#/components/schemas/TeeShirtSize' },
          required: false,
        },
      }).exactOptional(),
      number_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NumberOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the number of people in the image.',
            explode: false,
            in: 'query',
            name: 'number_of_people',
            schema: {
              description: 'Filter based on the number of people in the image.',
              items: { $ref: '#/components/schemas/NumberOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the number of people in the image.',
        }),
      orientations: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageOrientationRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images with selected aspect ratios.',
            explode: false,
            in: 'query',
            name: 'orientations',
            schema: {
              description: 'Return only images with selected aspect ratios.',
              items: { $ref: '#/components/schemas/ImageOrientationRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images with selected aspect ratios.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search images using a search phrase.',
            in: 'query',
            name: 'phrase',
            schema: {
              description: 'Search images using a search phrase.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Search images using a search phrase.',
        }),
      sort_order: BlendedImageSortOrderSchema.openapi({
        param: {
          description: 'Select sort order of results.  The default is best_match',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/BlendedImageSortOrder' },
          required: false,
        },
      }).exactOptional(),
      specific_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images associated with specific people (using a comma-delimited list).',
            explode: false,
            in: 'query',
            name: 'specific_people',
            schema: {
              description:
                'Return only images associated with specific people (using a comma-delimited list).',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images associated with specific people (using a comma-delimited list).',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImageSearchItemSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
  },
})

export const getV3SearchImagesCreativeRoute = createRoute({
  method: 'get',
  path: '/v3/search/images/creative',
  tags: ['Search'],
  summary: 'Search for creative images only',
  description:
    'Use this endpoint to search our contemporary stock photos, illustrations and archival images.\n\nYou\'ll need an API key and access token to use this resource.\n \nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\n\nSearch requests without a phrase parameter are not supported and may not always work.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to \nbuild search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images": \n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "display_sizes": \n        [\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to \nbuild a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n        "call_for_image",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "copyright",\n        "date_created",\n        "display_sizes": \n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "title"\n    ]\n]\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution\nfiles that are most frequently used to build a UI displaying search results. The following fields are provided for every image \nin your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      age_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AgeOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the age of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'age_of_people',
            schema: {
              description: 'Filter based on the age of individuals in an image.',
              items: { $ref: '#/components/schemas/AgeOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the age of individuals in an image.',
        }),
      artists: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for images by specific artists (free-text, comma-separated list of artists).',
            in: 'query',
            name: 'artists',
            schema: {
              description:
                'Search for images by specific artists (free-text, comma-separated list of artists).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Search for images by specific artists (free-text, comma-separated list of artists).',
        }),
      collection_codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
            explode: false,
            in: 'query',
            name: 'collection_codes',
            schema: {
              description:
                'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.',
        }),
      collections_filter_type: CollectionsFilterTypeSchema.openapi({
        param: {
          description: 'Use to include or exclude collections from search. The default is include',
          in: 'query',
          name: 'collections_filter_type',
          schema: { $ref: '#/components/schemas/CollectionsFilterType' },
          required: false,
        },
      }).exactOptional(),
      color: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter based on predominant color in an image. Use 6 character hexadecimal format (e.g., #002244).',
            in: 'query',
            name: 'color',
            schema: {
              description:
                'Filter based on predominant color in an image. Use 6 character hexadecimal format (e.g., #002244).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filter based on predominant color in an image. Use 6 character hexadecimal format (e.g., #002244).',
        }),
      compositions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CompositionsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on image composition.',
            explode: false,
            in: 'query',
            name: 'compositions',
            schema: {
              description: 'Filter based on image composition.',
              items: { $ref: '#/components/schemas/CompositionsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on image composition.',
        }),
      download_product: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            in: 'query',
            name: 'download_product',
            schema: {
              description:
                'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
      embed_content_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict search results to embeddable images. The default is false.',
            in: 'query',
            name: 'embed_content_only',
            schema: {
              default: false,
              description: 'Restrict search results to embeddable images. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Restrict search results to embeddable images. The default is false.',
        }),
      ethnicity: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EthnicityFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results based on the ethnicity of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'ethnicity',
            schema: {
              description:
                'Filter search results based on the ethnicity of individuals in an image.',
              items: { $ref: '#/components/schemas/EthnicityFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter search results based on the ethnicity of individuals in an image.',
        }),
      exclude_keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'exclude_keyword_ids',
            schema: {
              description:
                'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
        }),
      exclude_nudity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Excludes images containing nudity. The default is false.',
            in: 'query',
            name: 'exclude_nudity',
            schema: {
              default: false,
              description: 'Excludes images containing nudity. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Excludes images containing nudity. The default is false.',
        }),
      exclude_editorial_use_only: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
            in: 'query',
            name: 'exclude_editorial_use_only',
            schema: {
              description:
                'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreativeImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/CreativeImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
        }),
      file_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(SearchFileTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images having a specific file type.',
            explode: false,
            in: 'query',
            name: 'file_types',
            schema: {
              description: 'Return only images having a specific file type.',
              items: { $ref: '#/components/schemas/SearchFileType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images having a specific file type.',
        }),
      graphical_styles: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(GraphicalStyleSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on graphical style of the image.',
            explode: false,
            in: 'query',
            name: 'graphical_styles',
            schema: {
              description: 'Filter based on graphical style of the image.',
              items: { $ref: '#/components/schemas/GraphicalStyle' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on graphical style of the image.',
        }),
      graphical_styles_filter_type: GraphicalStylesFilterTypeSchema.openapi({
        param: {
          description:
            'Provides searching based on specified graphical style(s). The default is include.',
          in: 'query',
          name: 'graphical_styles_filter_type',
          schema: { $ref: '#/components/schemas/GraphicalStylesFilterType' },
          required: false,
        },
      }).exactOptional(),
      include_related_searches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include related searches in the response. The default is false.',
            in: 'query',
            name: 'include_related_searches',
            schema: {
              default: false,
              description:
                'Specifies whether or not to include related searches in the response. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include related searches in the response. The default is false.',
        }),
      keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'keyword_ids',
            schema: {
              description:
                'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
        }),
      minimum_size: TeeShirtSizeSchema.openapi({
        param: {
          description: 'Filter based on minimum size requested. The default is x-small.',
          in: 'query',
          name: 'minimum_size',
          schema: { $ref: '#/components/schemas/TeeShirtSize' },
          required: false,
        },
      }).exactOptional(),
      number_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NumberOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the number of people in the image.',
            explode: false,
            in: 'query',
            name: 'number_of_people',
            schema: {
              description: 'Filter based on the number of people in the image.',
              items: { $ref: '#/components/schemas/NumberOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the number of people in the image.',
        }),
      orientations: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageOrientationRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images with selected aspect ratios.',
            explode: false,
            in: 'query',
            name: 'orientations',
            schema: {
              description: 'Return only images with selected aspect ratios.',
              items: { $ref: '#/components/schemas/ImageOrientationRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images with selected aspect ratios.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Search images using a search phrase.',
            in: 'query',
            name: 'phrase',
            schema: {
              default: '',
              description: 'Search images using a search phrase.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Search images using a search phrase.',
        }),
      safe_search: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
            in: 'query',
            name: 'safe_search',
            schema: {
              default: false,
              description:
                'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
        }),
      sort_order: CreativeImageSortOrderSchema.openapi({
        param: {
          description: 'Select sort order of results.  The default is best_match',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/CreativeImageSortOrder' },
          required: false,
        },
      }).exactOptional(),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreateImageSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/CreateImageSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreativeImageSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3SearchImagesCreativeByImageRoute = createRoute({
  method: 'get',
  path: '/v3/search/images/creative/by-image',
  tags: ['Search'],
  summary: 'Search for creative images based on url',
  description:
    "Search for **similar creative images** by passing an `image_url` to an uploaded image OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.\n\n## Searching by URL\n\nBefore calling the search by image endpoint, an image in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.\n\nFor example, using cURL:\n\n``` sh\ncurl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary \"@testimage.jpg\"\n```\n\nOnce the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.\n\n- Uploaded files must be 10MB or smaller.\n- Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.\n- Uploads expire after 24 hours.\n- Uploads and searches must be performed using the _same_ API Key.\n\n## Searching by asset id\n\nWhen searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar images.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      asset_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the Getty image id to use in the search.',
            in: 'query',
            name: 'asset_id',
            schema: {
              description: 'Specifies the Getty image id to use in the search.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Specifies the Getty image id to use in the search.',
        }),
      exclude_editorial_use_only: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
            in: 'query',
            name: 'exclude_editorial_use_only',
            schema: {
              description:
                'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Exclude images that are only available for editorial (non-commercial) use. Default value is false.',
        }),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreateImageSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/CreateImageSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreativeImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/CreativeImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
        }),
      image_url: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the location of the image to use in the search.',
            in: 'query',
            name: 'image_url',
            schema: {
              description: 'Specifies the location of the image to use in the search.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Specifies the location of the image to use in the search.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
        }),
      product_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            explode: false,
            in: 'query',
            name: 'product_types',
            schema: {
              description:
                'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchByImageResourceResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'AssetNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3SearchImagesEditorialRoute = createRoute({
  method: 'get',
  path: '/v3/search/images/editorial',
  tags: ['Search'],
  summary: 'Search for editorial images only',
  description:
    'Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\nTo include your API token in the search request, add it to the headers as a Bearer token (example in curl):\n\n\t-H "Authorization: Bearer <your-token>"\n\nSearch requests without a phrase parameter are not supported and may not always work.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.\n\n```\n{\n    "images": \n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "display_sizes": \n        [\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "max_dimensions",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.\n\n```\n{\n    "images": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n        "call_for_image",\n        "caption",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "copyright",\n        "date_created",\n        "display_sizes": \n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "editorial_segments",\n        "event_ids",\n        "graphical_style",\n        "license_model",\n        "max_dimensions",\n        "orientation",\n        "product_types",\n        "quality_rank",\n        "referral_destinations",\n        "title"\n    ]\n]\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "images":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      age_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AgeOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the age of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'age_of_people',
            schema: {
              description: 'Filter based on the age of individuals in an image.',
              items: { $ref: '#/components/schemas/AgeOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the age of individuals in an image.',
        }),
      artists: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for images by specific artists (free-text, comma-separated list of artists).',
            in: 'query',
            name: 'artists',
            schema: {
              description:
                'Search for images by specific artists (free-text, comma-separated list of artists).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Search for images by specific artists (free-text, comma-separated list of artists).',
        }),
      collection_codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.',
            explode: false,
            in: 'query',
            name: 'collection_codes',
            schema: {
              description:
                'Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.',
        }),
      collections_filter_type: CollectionsFilterTypeSchema.openapi({
        param: {
          description: 'Use to include or exclude collections from search. The default is include',
          in: 'query',
          name: 'collections_filter_type',
          schema: { $ref: '#/components/schemas/CollectionsFilterType' },
          required: false,
        },
      }).exactOptional(),
      compositions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CompositionsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on image composition.',
            explode: false,
            in: 'query',
            name: 'compositions',
            schema: {
              description: 'Filter based on image composition.',
              items: { $ref: '#/components/schemas/CompositionsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on image composition.',
        }),
      date_from: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).',
            in: 'query',
            name: 'date_from',
            schema: {
              description:
                'Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).',
        }),
      date_to: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).',
            in: 'query',
            name: 'date_to',
            schema: {
              description:
                'Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).',
        }),
      download_product: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            in: 'query',
            name: 'download_product',
            schema: {
              description:
                'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
      editorial_segments: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialSegmentContractSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only events with a matching editorial segment.',
            explode: false,
            in: 'query',
            name: 'editorial_segments',
            schema: {
              description: 'Return only events with a matching editorial segment.',
              items: { $ref: '#/components/schemas/EditorialSegmentContract' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only events with a matching editorial segment.',
        }),
      embed_content_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict search results to embeddable images. The default is false.',
            in: 'query',
            name: 'embed_content_only',
            schema: {
              default: false,
              description: 'Restrict search results to embeddable images. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Restrict search results to embeddable images. The default is false.',
        }),
      ethnicity: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EthnicityFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results based on the ethnicity of individuals in an image.',
            explode: false,
            in: 'query',
            name: 'ethnicity',
            schema: {
              description:
                'Filter search results based on the ethnicity of individuals in an image.',
              items: { $ref: '#/components/schemas/EthnicityFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter search results based on the ethnicity of individuals in an image.',
        }),
      event_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on specific events',
            explode: false,
            in: 'query',
            name: 'event_ids',
            schema: {
              description: 'Filter based on specific events',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on specific events',
        }),
      exclude_keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'exclude_keyword_ids',
            schema: {
              description:
                'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialImagesFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
              items: { $ref: '#/components/schemas/EditorialImagesFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.",
        }),
      file_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(SearchFileTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images having a specific file type.',
            explode: false,
            in: 'query',
            name: 'file_types',
            schema: {
              description: 'Return only images having a specific file type.',
              items: { $ref: '#/components/schemas/SearchFileType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images having a specific file type.',
        }),
      graphical_styles: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialGraphicalStyleSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on graphical style of the image.',
            explode: false,
            in: 'query',
            name: 'graphical_styles',
            schema: {
              description: 'Filter based on graphical style of the image.',
              items: { $ref: '#/components/schemas/EditorialGraphicalStyle' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on graphical style of the image.',
        }),
      graphical_styles_filter_type: GraphicalStylesFilterTypeSchema.openapi({
        param: {
          description:
            'Provides searching based on specified graphical style(s). The default is include.',
          in: 'query',
          name: 'graphical_styles_filter_type',
          schema: { $ref: '#/components/schemas/GraphicalStylesFilterType' },
          required: false,
        },
      }).exactOptional(),
      include_related_searches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include related searches in the response. The default is false.',
            in: 'query',
            name: 'include_related_searches',
            schema: {
              default: false,
              description:
                'Specifies whether or not to include related searches in the response. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include related searches in the response. The default is false.',
        }),
      keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'keyword_ids',
            schema: {
              description:
                'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.',
        }),
      minimum_size: TeeShirtSizeSchema.openapi({
        param: {
          description: 'Filter based on minimum size requested. The default is x-small.',
          in: 'query',
          name: 'minimum_size',
          schema: { $ref: '#/components/schemas/TeeShirtSize' },
          required: false,
        },
      }).exactOptional(),
      number_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(NumberOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the number of people in the image.',
            explode: false,
            in: 'query',
            name: 'number_of_people',
            schema: {
              description: 'Filter based on the number of people in the image.',
              items: { $ref: '#/components/schemas/NumberOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on the number of people in the image.',
        }),
      orientations: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageOrientationRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only images with selected aspect ratios.',
            explode: false,
            in: 'query',
            name: 'orientations',
            schema: {
              description: 'Return only images with selected aspect ratios.',
              items: { $ref: '#/components/schemas/ImageOrientationRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only images with selected aspect ratios.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search images using a search phrase.',
            in: 'query',
            name: 'phrase',
            schema: {
              description: 'Search images using a search phrase.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Search images using a search phrase.',
        }),
      sort_order: SortOrderSchema.openapi({
        param: {
          description: 'Select sort order of results.  The default is best_match',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/SortOrder' },
          required: false,
        },
      }).exactOptional(),
      specific_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only images associated with specific people (using a comma-delimited list).',
            explode: false,
            in: 'query',
            name: 'specific_people',
            schema: {
              description:
                'Return only images associated with specific people (using a comma-delimited list).',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only images associated with specific people (using a comma-delimited list).',
        }),
      minimum_quality_rank: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.',
            in: 'query',
            name: 'minimum_quality_rank',
            schema: {
              description:
                'Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.',
              format: 'int32',
              nullable: true,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.',
        }),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialImageSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/EditorialImageSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EditorialImageSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
  },
})

export const getV3SearchVideosCreativeRoute = createRoute({
  method: 'get',
  path: '/v3/search/videos/creative',
  tags: ['Search'],
  summary: 'Search for creative videos',
  description:
    'Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without\nbeing logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only \nassets that you have a license to use, you need to also include an authorization token in the header of your request.\nPlease consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.\n\nSearch requests without a phrase parameter are not supported and may not always work.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search\nresponse results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "asset_family", \n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a \ndetailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family", \n\t\t"call_for_image",\n        "caption", \n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name", \n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "era",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files \nthat are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result \nset when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "videos":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      age_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AgeOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering according to the age of individuals in a video.',
            explode: false,
            in: 'query',
            name: 'age_of_people',
            schema: {
              description: 'Provides filtering according to the age of individuals in a video.',
              items: { $ref: '#/components/schemas/AgeOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering according to the age of individuals in a video.',
        }),
      artists: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for videos by specific artists (free-text, comma-separated list of artists).',
            in: 'query',
            name: 'artists',
            schema: {
              description:
                'Search for videos by specific artists (free-text, comma-separated list of artists).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Search for videos by specific artists (free-text, comma-separated list of artists).',
        }),
      aspect_ratios: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoAspectRatioFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search for videos by specific aspect ratios.',
            explode: false,
            in: 'query',
            name: 'aspect_ratios',
            schema: {
              description: 'Search for videos by specific aspect ratios.',
              items: { $ref: '#/components/schemas/VideoAspectRatioFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Search for videos by specific aspect ratios.',
        }),
      collection_codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering by collection code.',
            explode: false,
            in: 'query',
            name: 'collection_codes',
            schema: {
              description: 'Provides filtering by collection code.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering by collection code.',
        }),
      collections_filter_type: CollectionsFilterTypeSchema.openapi({
        param: {
          description: 'Use to include or exclude collections from search. The default is include',
          in: 'query',
          name: 'collections_filter_type',
          schema: { $ref: '#/components/schemas/CollectionsFilterType' },
          required: false,
        },
      }).exactOptional(),
      compositions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CompositionsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on video composition.',
            explode: false,
            in: 'query',
            name: 'compositions',
            schema: {
              description: 'Filter based on video composition.',
              items: { $ref: '#/components/schemas/CompositionsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on video composition.',
        }),
      download_product: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            in: 'query',
            name: 'download_product',
            schema: {
              description:
                'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
      exclude_nudity: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Excludes videos containing nudity. The default is false.',
            in: 'query',
            name: 'exclude_nudity',
            schema: {
              default: false,
              description: 'Excludes videos containing nudity. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Excludes videos containing nudity. The default is false.',
        }),
      exclude_editorial_use_only: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
            in: 'query',
            name: 'exclude_editorial_use_only',
            schema: {
              description:
                'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
        }),
      exclude_keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only videos not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also do not contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'exclude_keyword_ids',
            schema: {
              description:
                'Return only videos not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also do not contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only videos not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also do not contain the requested keyword(s) are returned.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreativeVideosFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/CreativeVideosFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
        }),
      format_available: VideoFormatsRequestSchema.openapi({
        param: {
          description: 'Filters according to the digital video format available on a film asset.',
          in: 'query',
          name: 'format_available',
          schema: { $ref: '#/components/schemas/VideoFormatsRequest' },
          required: false,
        },
      }).exactOptional(),
      frame_rates: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoFrameRatesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering by video frame rate (frames/second).',
            explode: false,
            in: 'query',
            name: 'frame_rates',
            schema: {
              description: 'Provides filtering by video frame rate (frames/second).',
              items: { $ref: '#/components/schemas/VideoFrameRates' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering by video frame rate (frames/second).',
        }),
      image_techniques: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageTechniquesFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on image technique.',
            explode: false,
            in: 'query',
            name: 'image_techniques',
            schema: {
              description: 'Filter based on image technique.',
              items: { $ref: '#/components/schemas/ImageTechniquesFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on image technique.',
        }),
      include_related_searches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include related searches in the response. The default is false.',
            in: 'query',
            name: 'include_related_searches',
            schema: {
              default: false,
              description:
                'Specifies whether or not to include related searches in the response. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include related searches in the response. The default is false.',
        }),
      keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'keyword_ids',
            schema: {
              description:
                'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
        }),
      license_models: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(LicenseModelVideoRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the video licensing model(s).',
            explode: false,
            in: 'query',
            name: 'license_models',
            schema: {
              description: 'Specifies the video licensing model(s).',
              items: { $ref: '#/components/schemas/LicenseModelVideoRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Specifies the video licensing model(s).',
        }),
      orientations: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoOrientationRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only videos with selected orientations.',
            explode: false,
            in: 'query',
            name: 'orientations',
            schema: {
              description: 'Return only videos with selected orientations.',
              items: { $ref: '#/components/schemas/VideoOrientationRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only videos with selected orientations.',
        }),
      min_clip_length: z
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
            description: 'Provides filtering by minimum length of video clip, in seconds',
            in: 'query',
            name: 'min_clip_length',
            schema: {
              default: 0,
              description: 'Provides filtering by minimum length of video clip, in seconds',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Provides filtering by minimum length of video clip, in seconds',
        }),
      max_clip_length: z
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
            description: 'Provides filtering by maximum length of video, in seconds',
            in: 'query',
            name: 'max_clip_length',
            schema: {
              default: 0,
              description: 'Provides filtering by maximum length of video, in seconds',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Provides filtering by maximum length of video, in seconds',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Free-text search query.',
            in: 'query',
            name: 'phrase',
            schema: {
              default: '',
              description: 'Free-text search query.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Free-text search query.',
        }),
      safe_search: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
            in: 'query',
            name: 'safe_search',
            schema: {
              default: false,
              description:
                'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it\'s possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.',
        }),
      sort_order: CreativeVideoSortOrderSchema.openapi({
        param: {
          description: 'Select sort order of results.  The default is best_match',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/CreativeVideoSortOrder' },
          required: false,
        },
      }).exactOptional(),
      release_status: ReleaseStatusSchema.openapi({
        param: {
          description: 'Allows filtering by type of model release.',
          in: 'query',
          name: 'release_status',
          schema: { $ref: '#/components/schemas/ReleaseStatus' },
          required: false,
        },
      }).exactOptional(),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreateVideoSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/CreateVideoSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
        }),
      viewpoints: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ViewpointsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on viewpoint.',
            explode: false,
            in: 'query',
            name: 'viewpoints',
            schema: {
              description: 'Filter based on viewpoint.',
              items: { $ref: '#/components/schemas/ViewpointsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on viewpoint.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreativeVideoSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3SearchVideosCreativeByImageRoute = createRoute({
  method: 'get',
  path: '/v3/search/videos/creative/by-image',
  tags: ['Search'],
  summary: 'Search for creative videos based on url',
  description:
    "Search for **similar creative videos** by passing an `image_url` to an uploaded image/frame grab from a video OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.\n\n## Searching by URL\n\nBefore calling the search by image endpoint, an image or frame grab in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.\n\nFor example, using cURL:\n\n``` sh\ncurl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary \"@testimage.jpg\"\n```\n\nOnce the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.\n\n- Uploaded files must be 10MB or smaller\n- Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.\n- Uploads expire after 24 hours.\n- Uploads and searches must be performed using the _same_ API Key.\n\n## Searching by asset id\n\nWhen searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar videos.\n",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      asset_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the Getty video id to use in the search.',
            in: 'query',
            name: 'asset_id',
            schema: {
              description: 'Specifies the Getty video id to use in the search.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Specifies the Getty video id to use in the search.',
        }),
      exclude_editorial_use_only: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
            in: 'query',
            name: 'exclude_editorial_use_only',
            schema: {
              description:
                'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Exclude videos that are only available for editorial (non-commercial) use. Default value is false.',
        }),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreateVideoSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/CreateVideoSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                    The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CreativeVideosFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/CreativeVideosFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
        }),
      image_url: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the location of the image to use in the search.',
            in: 'query',
            name: 'image_url',
            schema: {
              description: 'Specifies the location of the image to use in the search.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Specifies the location of the image to use in the search.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Request results starting at a page number (default is 1).',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Request results starting at a page number (default is 1).',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Request results starting at a page number (default is 1).',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description:
                'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description:
            'Request number of images to return in each page. Default is 30, maximum page_size is 100.',
        }),
      product_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            explode: false,
            in: 'query',
            name: 'product_types',
            schema: {
              description:
                'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Filter images to those from one of your product types. \r\n                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. \r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreativeVideoSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'AssetNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3SearchVideosEditorialRoute = createRoute({
  method: 'get',
  path: '/v3/search/videos/editorial',
  tags: ['Search'],
  summary: 'Search for editorial videos',
  description:
    'Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\n\nSearch requests without a phrase parameter are not supported and may not always work.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "asset_family", \n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family", \n\t\t"call_for_image",\n        "caption", \n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name", \n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "era",\n        "event_ids",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "videos":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
      'GI-Country-Code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.',
            in: 'header',
            name: 'GI-Country-Code',
            schema: {
              description:
                'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
              type: 'string',
            },
            required: false,
          },
          description:
            'Use of this parameter requires configuration changes to your API key. Please contact your sales representative to learn more.',
        }),
    }),
    query: z.object({
      age_of_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AgeOfPeopleFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering according to the age of individuals in a video.',
            explode: false,
            in: 'query',
            name: 'age_of_people',
            schema: {
              description: 'Provides filtering according to the age of individuals in a video.',
              items: { $ref: '#/components/schemas/AgeOfPeopleFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering according to the age of individuals in a video.',
        }),
      artists: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for videos by specific artists (free-text, comma-separated list of artists).',
            in: 'query',
            name: 'artists',
            schema: {
              description:
                'Search for videos by specific artists (free-text, comma-separated list of artists).',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Search for videos by specific artists (free-text, comma-separated list of artists).',
        }),
      aspect_ratios: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoAspectRatioFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search for videos by specific aspect ratios.',
            explode: false,
            in: 'query',
            name: 'aspect_ratios',
            schema: {
              description: 'Search for videos by specific aspect ratios.',
              items: { $ref: '#/components/schemas/VideoAspectRatioFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Search for videos by specific aspect ratios.',
        }),
      collection_codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering by collection code.',
            explode: false,
            in: 'query',
            name: 'collection_codes',
            schema: {
              description: 'Provides filtering by collection code.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering by collection code.',
        }),
      collections_filter_type: CollectionsFilterTypeSchema.openapi({
        param: {
          description: 'Use to include or exclude collections from search. The default is include',
          in: 'query',
          name: 'collections_filter_type',
          schema: { $ref: '#/components/schemas/CollectionsFilterType' },
          required: false,
        },
      }).exactOptional(),
      compositions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CompositionsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on video composition.',
            explode: false,
            in: 'query',
            name: 'compositions',
            schema: {
              description: 'Filter based on video composition.',
              items: { $ref: '#/components/schemas/CompositionsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on video composition.',
        }),
      download_product: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
            in: 'query',
            name: 'download_product',
            schema: {
              description:
                'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'Filters based on which product the asset will download against.\r\n                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.\r\n                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. \r\n                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. \r\n                    Product ID can be obtained from the GET /products response.',
        }),
      editorial_video_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialVideoTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Allows filtering by types of video.',
            explode: false,
            in: 'query',
            name: 'editorial_video_types',
            schema: {
              description: 'Allows filtering by types of video.',
              items: { $ref: '#/components/schemas/EditorialVideoType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Allows filtering by types of video.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialVideosFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/EditorialVideosFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
        }),
      format_available: VideoFormatsRequestSchema.openapi({
        param: {
          description: 'Filters according to the digital video format available on a film asset.',
          in: 'query',
          name: 'format_available',
          schema: { $ref: '#/components/schemas/VideoFormatsRequest' },
          required: false,
        },
      }).exactOptional(),
      frame_rates: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoFrameRatesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Provides filtering by video frame rate (frames/second).',
            explode: false,
            in: 'query',
            name: 'frame_rates',
            schema: {
              description: 'Provides filtering by video frame rate (frames/second).',
              items: { $ref: '#/components/schemas/VideoFrameRates' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Provides filtering by video frame rate (frames/second).',
        }),
      image_techniques: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ImageTechniquesFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on image technique.',
            explode: false,
            in: 'query',
            name: 'image_techniques',
            schema: {
              description: 'Filter based on image technique.',
              items: { $ref: '#/components/schemas/ImageTechniquesFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on image technique.',
        }),
      include_related_searches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include related searches in the response. The default is false.',
            in: 'query',
            name: 'include_related_searches',
            schema: {
              default: false,
              description:
                'Specifies whether or not to include related searches in the response. The default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include related searches in the response. The default is false.',
        }),
      keyword_ids: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                val === undefined
                  ? val
                  : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                      typeof item === 'string' ? item.split(',') : [item],
                    ),
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
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
            explode: false,
            in: 'query',
            name: 'keyword_ids',
            schema: {
              description:
                'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
              items: { format: 'int32', type: 'integer' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.',
        }),
      min_clip_length: z
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
            description: 'Provides filtering by minimum length of video clip, in seconds',
            in: 'query',
            name: 'min_clip_length',
            schema: {
              default: 0,
              description: 'Provides filtering by minimum length of video clip, in seconds',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Provides filtering by minimum length of video clip, in seconds',
        }),
      max_clip_length: z
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
            description: 'Provides filtering by maximum length of video clip, in seconds',
            in: 'query',
            name: 'max_clip_length',
            schema: {
              default: 0,
              description: 'Provides filtering by maximum length of video clip, in seconds',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Provides filtering by maximum length of video clip, in seconds',
        }),
      orientations: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoOrientationRequestSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only videos with selected orientations.',
            explode: false,
            in: 'query',
            name: 'orientations',
            schema: {
              description: 'Return only videos with selected orientations.',
              items: { $ref: '#/components/schemas/VideoOrientationRequest' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Return only videos with selected orientations.',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
      phrase: z
        .string()
        .nullable()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Free-text search query.',
            in: 'query',
            name: 'phrase',
            schema: {
              default: '',
              description: 'Free-text search query.',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description: 'Free-text search query.',
        }),
      sort_order: SortOrderSchema.openapi({
        param: {
          description: 'Select sort order of results.  The default is best_match',
          in: 'query',
          name: 'sort_order',
          schema: { $ref: '#/components/schemas/SortOrder' },
          required: false,
        },
      }).exactOptional(),
      specific_people: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "Allows filtering by specific peoples' names.",
            explode: false,
            in: 'query',
            name: 'specific_people',
            schema: {
              description: "Allows filtering by specific peoples' names.",
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: "Allows filtering by specific peoples' names.",
        }),
      release_status: ReleaseStatusSchema.openapi({
        param: {
          description: 'Allows filtering by type of model release.',
          in: 'query',
          name: 'release_status',
          schema: { $ref: '#/components/schemas/ReleaseStatus' },
          required: false,
        },
      }).exactOptional(),
      facet_fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(EditorialVideoSearchFacetsFieldsSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
            explode: false,
            in: 'query',
            name: 'facet_fields',
            schema: {
              description:
                'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
              items: { $ref: '#/components/schemas/EditorialVideoSearchFacetsFields' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.\r\n                   The include_facets parameter must be set to "true" for facets to be returned.',
        }),
      include_facets: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not to include facets in the result set. Default is "false".',
            in: 'query',
            name: 'include_facets',
            schema: {
              description:
                'Specifies whether or not to include facets in the result set. Default is "false".',
              nullable: true,
              type: 'boolean',
            },
            required: false,
          },
          description:
            'Specifies whether or not to include facets in the result set. Default is "false".',
        }),
      facet_max_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the maximum number of facets to return per type. Default is 300.',
            in: 'query',
            name: 'facet_max_count',
            schema: {
              default: 300,
              description:
                'Specifies the maximum number of facets to return per type. Default is 300.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies the maximum number of facets to return per type. Default is 300.',
        }),
      viewpoints: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ViewpointsFilterTypeSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on viewpoint.',
            explode: false,
            in: 'query',
            name: 'viewpoints',
            schema: {
              description: 'Filter based on viewpoint.',
              items: { $ref: '#/components/schemas/ViewpointsFilterType' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter based on viewpoint.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EditorialVideoSearchResultsSchema } },
    },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
  },
})

export const putV3UsageBatchesIdRoute = createRoute({
  method: 'put',
  path: '/v3/usage-batches/{id}',
  tags: ['Usage'],
  summary: 'Report usage of assets via a batch format.',
  description:
    "# Report Usage\n\nUse this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.\n\n##  Quickstart\n\nYou'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.\nPlease see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. \n\n_Note_: Date of use can be in any unambiguous date format.\n",
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Specifies a unique batch transaction id to identify the report.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'Specifies a unique batch transaction id to identify the report.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'Specifies a unique batch transaction id to identify the report.',
        }),
    }),
    body: {
      description:
        'Specifies up to 1000 sets of asset Id, usage count, and date of use to submit usages for. \r\n            Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. \r\n            All dates must be on or before this date and the format should be ISO 8601 (ex: YYYY-MM-DD), time is not needed.',
      content: { 'application/json': { schema: ReportUsageBatchRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success - All usages reported were successfully recorded.',
      content: { 'application/json': { schema: ReportUsageBatchResponseSchema } },
    },
    400: {
      description:
        'InvalidRequest - The content of the request was invalid. Most commonly this is due to either too many assets specified, no assets or invalid JSON.',
    },
    401: {
      description: 'AuthorizationTokenRequired - Authorization token was missing or not valid.',
    },
    403: { description: 'UnauthorizedToReportUsage' },
    409: { description: 'TransactionIdDuplicated' },
  },
})

export const getV3VideosRoute = createRoute({
  method: 'get',
  path: '/v3/videos',
  tags: ['Videos'],
  summary: 'Get metadata for multiple videos by supplying multiple video ids',
  description:
    'Use this endpoint to return detailed video metadata for all the specified video ids.\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n\t\t"call_for_image",\n        "caption",\n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "download_sizes",\n        "era",\n        "event_ids",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "videos":\n    [\n      {\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ],\n        "key_frames": [\n            {\n              "uri": "<link>"\n            },\n            {\n              "uri": "<link>"\n            },\n            {\n              "uri": "<link>"\n            },\n            {\n              "uri": "<link>"\n            },\n            {\n              "uri": "<link>"\n            }\n        ]\n      }\n    ]\n}\n```\n\n## Request Usage Considerations\n\n- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
            explode: false,
            in: 'query',
            name: 'ids',
            schema: {
              description:
                'Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
              items: { type: 'string' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            'Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.',
        }),
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/VideoDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'VideosNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3VideosIdRoute = createRoute({
  method: 'get',
  path: '/v3/videos/{id}',
  tags: ['Videos'],
  summary: 'Get metadata for a single video by supplying one video id',
  description:
    'Use this endpoint to return detailed video metadata for the specified video id.\n\nYou\'ll need an API key and access token to use this resource.\n\nYou can show different information in the response by specifying values on the "fields" parameter (see details below).\nYou can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos":\n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos":\n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n\t\t"call_for_image",\n        "caption",\n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "download_sizes",\n        "era",\n        "event_ids",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "display_sizes": [\n        {\n            "is_watermarked": <boolean>,\n            "name": "comp",\n            "uri": "<link>"\n        },\n        {\n            "is_watermarked": <boolean>,\n            "name": "preview",\n            "uri": "<link>"\n        },\n        {\n            "is_watermarked": <boolean>,\n            "name": "thumb",\n            "uri": "<link>"\n        }\n    ],\n    "key_frames": [\n        {\n            "uri": "<link>"\n        },\n        {\n            "uri": "<link>"\n        },\n        {\n            "uri": "<link>"\n        },\n        {\n            "uri": "<link>"\n        },\n        {\n            "uri": "<link>"\n        }\n    ]\n}\n```\n\n## Request Usage Considerations\n\n- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'A video id. For more than one video please use the /v3/video endpoint.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A video id. For more than one video please use the /v3/video endpoint.',
              nullable: true,
              type: 'string',
            },
          },
          description: 'A video id. For more than one video please use the /v3/video endpoint.',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(VideoDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/VideoDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'VideosNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3VideosIdDownloadhistoryRoute = createRoute({
  method: 'get',
  path: '/v3/videos/{id}/downloadhistory',
  tags: ['Videos'],
  summary: "Returns information about a customer's download history for a specific asset",
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'A video id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'A video id.', nullable: true, type: 'string' },
          },
          description: 'A video id.',
        }),
    }),
    query: z.object({
      company_downloads: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, returns the list of previously downloaded videos for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
            in: 'query',
            name: 'company_downloads',
            schema: {
              description:
                'If specified, returns the list of previously downloaded videos for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
              type: 'boolean',
            },
            required: false,
          },
          description:
            'If specified, returns the list of previously downloaded videos for all users in your company.\r\n            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AssetDownloadHistoryResultsSchema } },
    },
    400: { description: 'Bad request' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'VideosNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3VideosIdSameSeriesRoute = createRoute({
  method: 'get',
  path: '/v3/videos/{id}/same-series',
  tags: ['Videos'],
  summary: 'Retrieve creative videos from the same series',
  description:
    'This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.\n\nYou\'ll need an API key and access token to use this resource.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos":\n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos":\n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n\t\t"call_for_image",\n        "caption",\n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "download_sizes",\n        "era",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "videos":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```\n',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Identifies an existing video',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Identifies an existing video', nullable: true, type: 'string' },
          },
          description: 'Identifies an existing video',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AssociatedVideoDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/AssociatedVideoDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'VideosNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})

export const getV3VideosIdSimilarRoute = createRoute({
  method: 'get',
  path: '/v3/videos/{id}/similar',
  tags: ['Videos'],
  summary: 'Retrieve similar videos',
  description:
    'This endpoint will provide a list of videos that are similar to the specified asset id.\n\nYou\'ll need an API key and access token to use this resource.\n\n## Working with Fields Sets\n\nFields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:\n\n#### Summary Fields Set\n\nThe **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "asset_family",\n        "caption",\n        "collection_code",\n        "collection_name",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "license_model",\n        "title"\n    ]\n}\n```\n\n#### Detail Fields Set\n\nThe **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.\n\n```\n{\n    "videos": \n    [\n        "allowed_use",\n        "artist",\n        "asset_family",\n\t\t"call_for_image",\n        "caption",\n        "clip_length",\n        "collection_code",\n        "collection_id",\n        "collection_name",\n        "color_type",\n        "copyright",\n        "date_created",\n        "display_sizes":\n        [\n            {\n                "name": "comp"\n            },\n            {\n                "name": "preview"\n            },\n            {\n                "name": "thumb"\n            }\n        ],\n        "download_sizes",\n        "era",\n        "event_ids",\n        "license_model",\n        "mastered_to",\n        "originally_shot_on",\n        "product_types",\n        "quality_rank",\n        "shot_speed",\n        "source",\n        "title"\n    ]\n}\n```\n\n#### Display Fields Set\n\nThe **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.\n\nThe URI provided is subject to change at any time and must be used as-is with no modification.\n\n```\n{\n    "videos":\n    [\n        "display_sizes": \n        [\n            {\n                "is_watermarked": <boolean>,\n                "name": "comp",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "preview",\n                "uri": "<link>"\n            },\n            {\n                "is_watermarked": <boolean>,\n                "name": "thumb",\n                "uri": "<link>"\n            }\n        ]\n    ]\n}\n```',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
            in: 'header',
            name: 'Accept-Language',
            schema: {
              description:
                'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
              type: 'string',
            },
            required: false,
          },
          description:
            'Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).',
        }),
    }),
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'A video id.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'A video id.', nullable: true, type: 'string' },
          },
          description: 'A video id.',
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AssociatedVideoDetailFieldValuesSchema),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
            explode: false,
            in: 'query',
            name: 'fields',
            schema: {
              description:
                "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
              items: { $ref: '#/components/schemas/AssociatedVideoDetailFieldValues' },
              nullable: true,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          description:
            "Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.",
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies page to return. Default is 1.',
            in: 'query',
            name: 'page',
            schema: {
              default: 1,
              description: 'Identifies page to return. Default is 1.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Identifies page to return. Default is 1.',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies page size. Default is 30, maximum page_size is 100.',
            in: 'query',
            name: 'page_size',
            schema: {
              default: 30,
              description: 'Specifies page size. Default is 30, maximum page_size is 100.',
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
          description: 'Specifies page size. Default is 30, maximum page_size is 100.',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'InvalidParameterValue' },
    401: { description: 'AuthorizationTokenRequired' },
    403: { description: 'UnauthorizedDisplaySize' },
    404: { description: 'VideosNotFound' },
    500: { description: 'InvalidIStockCollection' },
  },
})
