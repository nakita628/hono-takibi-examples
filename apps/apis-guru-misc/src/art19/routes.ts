import { createRoute, z } from '@hono/zod-openapi'

const ClassificationSchema = z
  .object({
    attributes: z
      .object({
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        display_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Human readable representation of the classification' }),
        metadata: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'An object with more detailed information about the classification.\nThe possible members are different per type of classification.\n',
          }),
        parent_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `parent` in a future update.<br/>\nFor hierarchical classifications, this is the ID of the parent classification\n',
          }),
        tree_path: z
          .array(z.uuid())
          .exactOptional()
          .openapi({
            description:
              'For hierarchical classifications this is the list of IDs reflecting the hierarchy starting\nwith the root level node.\n',
            example: [
              'cf6cfcd6-6221-4b63-b068-14d885193a8e',
              '6172c736-8d9e-4d40-8c43-8bf7070c0c94',
            ],
          }),
        type: z
          .enum(['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'])
          .exactOptional()
          .openapi({
            description:
              'The type of classification. The type of retrievable classifications depends on the privileges\nof the credential being used.\n',
            example: 'Genre',
          }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
        value: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The value the classification represents. The meaning of this attribute depends on the type of classification.\n',
          }),
        value_path: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'For hierarchical classifications this is a concatenated string of all the classification\nvalues from the root to this classification using a `: ` as separator.\n',
            example: 'Comedy: Standup',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `classifications`',
        example: 'classifications',
      }),
  })
  .openapi({
    description:
      "A classification, in general, is something that can describe other resources, such as countries, genres or\nlanguages. How they're described (included or excluded, and whether they're the primary classification\nof this type) is handled using other resources. Different functions of ART19 rely on classifications differently,\nand could have an effect only on directory information, or may have an effect on ad decisioning.\n",
    required: [],
  })
  .openapi('Classification')

const ResourceIdentifierSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the resource',
        example: '2d7e9be5-0b5a-43d3-9b75-04ec0c0edae8',
      }),
    type: z.string().exactOptional().openapi({ description: 'The type of the resource' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceIdentifier')

const ClassificationInclusionSchema = z
  .object({
    attributes: z
      .object({
        classification_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `classification` in a future update.<br/>\nThe ID of the classification linked to the entity\n',
            example: '497aad13-1c96-41d8-80e2-9a5aa7bc96fa',
          }),
        classification_type: z
          .enum(['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'])
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `classification` in a future update.<br/>',
          }),
        classified_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `classified` in a future update.<br/>\nThe ID of the entity linked to the classification\n',
            example: '8e9dc5d8-8a16-424e-ba96-6a7261a9a23b',
          }),
        classified_type: z
          .enum(['Series', 'Season', 'Episode'])
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `classified` in a future update.<br/>',
          }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        position: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The position or order of the linked classification within the classified resource',
          }),
        primary: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'When `true` it describes the best classification of a specific type for a given\nclassified item\n',
          }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        classification: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `classification_inclusion`',
        example: 'classification_inclusion',
      }),
  })
  .openapi({
    description:
      'Connects a Classification with a classified item like a Series, Season or Episode.\n',
    required: [],
  })
  .openapi('ClassificationInclusion')

const CreditSchema = z
  .object({
    attributes: z
      .object({
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        position: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The order of this credit within all credits of the referenced creditable entity',
          }),
        type: z
          .enum([
            'AnchorCredit',
            'AssociateProducerCredit',
            'AuthorCredit',
            'CastCredit',
            'CoHostCredit',
            'ComposerCredit',
            'CreatorCredit',
            'Credit',
            'DirectorCredit',
            'EditorCredit',
            'EngineerCredit',
            'ExecutiveProducerCredit',
            'GuestCoHostCredit',
            'GuestCredit',
            'GuestHostCredit',
            'HeadWriterCredit',
            'HostCredit',
            'ProducerCredit',
            'ReporterCredit',
            'SeniorProducerCredit',
            'SidekickCredit',
            'VideoProducerCredit',
            'WriterCredit',
          ])
          .exactOptional()
          .openapi({
            description: 'The type of credit the linked person has on the referenced entity',
          }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        creditable: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        person: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `credits`',
        example: 'credits',
      }),
  })
  .openapi({
    description:
      'A credit links a specific person to a series, season, or episode in a specific role.\n',
    required: [],
  })
  .openapi('Credit')

const EpisodeSchema = z
  .object({
    attributes: z
      .object({
        allow_user_comments: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Only visible to credentials having write privileges for the series.\n',
          }),
        cascaded_cover_image_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>\nThe image ID of the cover art for this episode. This is the preferred image ID to use.\nIf there is no specific cover for the episode, the image ID of the season or the\nseries will be returned, whichever has one defined.\nThe `/images` endpoint provides details to the image.\n',
            example: 'ec8f13bf-77c0-40fe-933a-8c088c16bc17',
          }),
        cover_image_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `cover_image` in a future update.<br/>\nThe image ID of the cover art for this episode, if an episode-specific image has been provided.\nThe `/images` endpoint provideds details to the image.\n',
            example: 'ec8f13bf-77c0-40fe-933a-8c088c16bc17',
          }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The description of the episode, possibly in HTML format',
            example: '<p><strong>Some</strong> funny example.</p>',
          }),
        description_is_html: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines whether `description` is in HTML format or plain.' }),
        description_plain: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The description with all HTML markup removed. If the description does not contain markup,\nthis is identical to `description`.\n',
            example: 'Some funny example.',
          }),
        file_name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The file name, without extension, to present users when downloading the episode',
          }),
        itunes_type: z
          .enum(['full', 'bonus', 'trailer'])
          .exactOptional()
          .openapi({
            description: "The type of the episode according to Apple's type categorization",
          }),
        listen_count: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of total downloads all time for this episode.\nOnly visible if the credential has the right privilege on the series.\n',
          }),
        premium_status: z
          .enum(['active', 'inactive', 'force-active', 'force-inactive'])
          .exactOptional()
          .openapi({ description: 'The current premium status of the episode' }),
        published: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If `true`, the episode will be available for download and included in the feed as soon as its\nrelease time is reached, provided it has a valid media file, and `release_end_at` is in the future (if applicable).\n',
          }),
        release_end_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The date and time when an episode will no longer be included in the feed, or available for download.\n`Published` will remain `true` unless the episode is manually unpublished.\n',
          }),
        release_immediately: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              "If `true`, the episode's release time is set in a way it is considered released right away.\nOnly visible if the credential has write privileges on the series.\n",
          }),
        released_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The date and time when an episode will be released. It will be available for download and included\nin the feed if this time is reached, `published` is set to `true`, and the episode has a media file.\n',
          }),
        rss_guid: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A globally unique identifier describing the episode. This ID is commonly used by podcast applications\nto determine whether an episode has already been downloaded or not.\n',
          }),
        season_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'Use the relationship `season` instead.<br />\nThe ID of the season an episode belongs to. This can be `null`. A series can have episodes with and\nwithout seasons at the same time.\n',
            example: 'eba5523d-e73a-43ec-bfd9-140ce9db76ac',
          }),
        series_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'Use the relationship `series` instead.<br />\nThe ID of the series an episode belongs to.\n',
            example: '9897f8cb-ffa7-4674-9529-c6037826c738',
          }),
        sort_title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The title of the episode modified for sorting. This converts all characters to\nlower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.\n',
            example: 'big hit',
          }),
        status: z
          .enum(['active', 'inactive'])
          .exactOptional()
          .openapi({ description: 'The status of an episode' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the episode', example: 'The Big Hit' }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        cascaded_cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description:
              'The cover art for this episode. This is the preferred image to use.\nIf there is no specific cover image for the episode, the cover of the season or the\nseries will be returned, whichever has one defined.\nThe `/images` endpoint provides details to the image.\n',
            required: [],
          }),
        classification_inclusions: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            title: 'A list of classifications associated with the episode',
            required: [],
          }),
        cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description:
              'The cover art for this episode, if an episode-specific image has been provided.\nThe `/images` endpoint provideds details to the image.\n',
            required: [],
          }),
        credits: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of credits given to people in the episode', required: [] }),
        default_marker_points: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            description: 'Only visible if the credential has write privileges on the series',
            title: 'A list of default (WarpFeed) marker points',
            required: [],
          }),
        episode_versions: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            description: 'Only visible if the credential has write privileges on the series',
            title: 'A list of episode versions for this episode',
            required: [],
          }),
        images: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            title: 'Both the cover image and the cascaded cover image for the season',
            required: [],
          }),
        season: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ title: 'The season the episode belongs to', required: [] }),
        segment_lists: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            description: 'Only visible if the credential has write privileges on the series',
            title: 'A list of segment lists directly attached to the episode',
            required: [],
          }),
        series: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ title: 'The series an episode belongs to', required: [] }),
        taggings: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of associations linking tags to the episodes.',
            required: [],
          }),
        tags: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of tags associated with the episodes',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `episodes`',
        example: 'episodes',
      }),
  })
  .openapi({ required: [] })
  .openapi('Episode')

const ImageSchema = z
  .object({
    attributes: z
      .object({
        bucket_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `bucket` in a future update.<br/>\nThe ID of the owning entity\n',
            example: '687282a1-faf7-4d37-8f4a-cbddedf6db8f',
          }),
        bucket_type: z
          .enum(['AdRepAccount', 'Agency', 'Network', 'Series', 'User'])
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `bucket` in a future update.<br/>\nThe type of the owning entity\n',
          }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        crop_data: z
          .object({
            height: z
              .float32()
              .exactOptional()
              .openapi({ description: 'The height of the crop area', example: 3000 }),
            left: z
              .float32()
              .exactOptional()
              .openapi({ description: 'The left coordinate of the crop area', example: 100 }),
            top: z
              .float32()
              .exactOptional()
              .openapi({ description: 'The top coordinate of the crop area', example: 150 }),
            width: z
              .float32()
              .exactOptional()
              .openapi({ description: 'The width of the crop area', example: 3000 }),
          })
          .exactOptional()
          .openapi({ title: 'The crop area within the original media asset', required: [] }),
        status: z
          .enum(['invalid', 'processing', 'uploaded', 'valid'])
          .exactOptional()
          .openapi({
            description:
              'The current value of the image state machine. It starts with `uploaded` and\ntransitions to `processing` once a worker has picked it up. If all variations and\nstyles of an image have been successfully created, the status becomes `valid`. In\ncase of a problem during the processing it changes to `invalid`.\n',
          }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        media_assets: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'All media assets available for this image', required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of resource. This is always `images`', example: 'images' }),
  })
  .openapi({ required: [] })
  .openapi('Image')

const LinksSchema = z
  .object({
    first: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL to retrieve the first page of data keeping the provided page size',
      }),
    last: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL to retrieve the last page of data keeping the provided page size',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL to retrieve the next page of data keeping the provided page size',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL to retrieve the previous page of keeping using the provided page size',
      }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to retrieve the collection as the primary data' }),
  })
  .openapi({ required: [] })
  .openapi('Links')

const MediaAssetSchema = z
  .object({
    attributes: z
      .object({
        attachment_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `attachment` in a future update.<br/>\nThe ID of the entity this media asset is attached to\n',
            example: '09a93847-d5bf-47b4-90d6-854e95011951',
          }),
        attachment_type: z
          .enum(['Image', 'Segment', 'SegmentList'])
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `attachment` in a future update.<br/>\nThe type of the entity this media asset is attached to\n',
          }),
        cdn_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The CDN-URL where the media asset is available' }),
        content_type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The MIME type of the media asset', example: 'image/jpeg' }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        file_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The filename of the media asset without any path components.\n',
          }),
        file_size: z
          .int()
          .exactOptional()
          .openapi({ description: 'The size in bytes of the media asset', example: 2544307 }),
        size_height: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The height in pixels of the media asset, if the media asset is an image',
            example: 1839,
          }),
        size_width: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The width in pixels of the media asset, if the media asset is an image',
            example: 1839,
          }),
        style: z
          .enum([
            'info',
            'itunes',
            'medium',
            'original',
            'regular',
            'square-400',
            'square-640',
            'square-888',
            'square-3000',
            'stripped-original',
            'thumb',
            'waveform_data',
          ])
          .exactOptional()
          .openapi({
            description:
              'The style of the media asset. A media asset is part of a collection of related media files,\nfor example an image or an episode (audio). Images usually have differently sized versions,\nand episodes can have different audio formats.\n',
            example: 'regular',
          }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `media_assets`',
        example: 'media_assets',
      }),
  })
  .openapi({ required: [] })
  .openapi('MediaAsset')

const NetworkSchema = z
  .object({
    attributes: z
      .object({
        copyright: z
          .string()
          .exactOptional()
          .openapi({ description: 'The copyright of the network' }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The description of the network eventually in HTML format',
            example: '<p><strong>Some</strong> funny example.</p>',
          }),
        description_is_html: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines whether `description` is in HTML format or plain.' }),
        description_plain: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The description with all HTML markup removed. If the description does not contain markup\nthis is identitcal to `description`.\n',
            example: 'Some funny example.',
          }),
        facebook_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Where to find this network on Facebook' }),
        instagram_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Where to find this network on Instagram' }),
        linkedin_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Where to find the network on LinkedIn' }),
        name: z.string().exactOptional().openapi({ description: 'The name of the network' }),
        public_email: z
          .string()
          .exactOptional()
          .openapi({ description: 'A public point of contact through email' }),
        public_page_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "If this is `true`, a public web page for this network is available under\n`https://art19.com/networks/{slug}`, where `slug` is the value of the corresponding attribute.\nThis public page provides details about the network as well as descriptive links to all its\nseries' public pages. If this is `false`, no such public page is available.\n",
          }),
        slug: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The unique slug for the network also used on its public page for example.\nThis value is unique system-wide amongst all networks _and_ series.\n',
          }),
        tumblr_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Where to find the network on Tumblr' }),
        twitter_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Where to find the network on Twitter' }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
        website_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'A public website for the network' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ description: 'The cover image for the network', required: [] }),
        images: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            description:
              'A collection of images linked to the network. This currently only includes\nthe cover image for the network.\n',
            required: [],
          }),
        parent: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ description: 'The parent network of the network', required: [] }),
        series: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            description: 'List of series within the network which are accessible to you',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `networks`',
        example: 'networks',
      }),
  })
  .openapi({ required: [] })
  .openapi('Network')

const PersonSchema = z
  .object({
    attributes: z
      .object({
        avatar_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `avatar` in a future update.<br/>\nThe image ID of an avatar or head shot of the person. Details can be\nretrieved using the `/images` endpoint.\n',
            example: '686ae786-6bbe-42f4-9a51-9e1cf207fc8b',
          }),
        biography: z
          .string()
          .exactOptional()
          .openapi({ description: 'The biography of the person without markup.' }),
        born: z.iso.date().exactOptional().openapi({ description: 'The birthday of the person' }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        died: z.iso
          .date()
          .exactOptional()
          .openapi({ description: 'The day of death of the person' }),
        first_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The first name of the person' }),
        from_country: z
          .string()
          .exactOptional()
          .openapi({ description: 'The country the person is from' }),
        from_locality: z
          .string()
          .exactOptional()
          .openapi({ description: 'The locality or city the person is from' }),
        from_region: z
          .string()
          .exactOptional()
          .openapi({ description: 'The region/state/province the person is from' }),
        last_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The last name of the person' }),
        public_email: z
          .string()
          .exactOptional()
          .openapi({ description: 'The public email contact for the person' }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        avatar: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description:
              'The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.\n',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of resource. This is always `people`', example: 'people' }),
  })
  .openapi({ required: [] })
  .openapi('Person')

const ResourceLinkSchema = z
  .object({
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to retrieve the resource as the primary data' }),
  })
  .openapi({ description: 'Links related to the retrieved resource', title: 'Links', required: [] })
  .openapi('ResourceLink')

const SeasonSchema = z
  .object({
    attributes: z
      .object({
        cascaded_cover_image_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              "This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>\nThe image ID of the cover art for this season. If there is no specific cover for the season,\nthe image ID of the series' cover art will be returned.\nThe `/images` endpoint provideds details to the image.\n",
            example: 'ec8f13bf-77c0-40fe-933a-8c088c16bc17',
          }),
        cover_image_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `cover_image` in a future update.<br/>\nThe image ID of the cover art for this season. The `/images` endpoint provideds details to the image.\n',
            example: 'ec8f13bf-77c0-40fe-933a-8c088c16bc17',
          }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The description of the season eventually in HTML format',
            example: '<p><strong>Some</strong> funny example.</p>',
          }),
        description_is_html: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines whether `description` is in HTML format or plain.' }),
        description_plain: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The description with all HTML markup removed. If the description does not contain markup\nthis is identitcal to `description`.\n',
            example: 'Some funny example.',
          }),
        first_released_episode_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `first_released_episode` in a future update.<br/>\nThe ID of the first released episode within the season\n',
            example: '73a97f1a-5c3c-4226-8ab3-1d7f9e486e4d',
          }),
        last_released_episode_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `last_released_episode` in a future update.<br/>\nThe ID of the most recently released episode within the season\n',
            example: 'a50b7a22-2128-46d7-b3df-2b308df21bf0',
          }),
        season_number: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The number of the season. This could be `null` as well.',
            example: 1,
          }),
        sort_title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The title of the season modified for sorting. This converts all characters to\nlower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.\n',
            example: 'awesome season',
          }),
        status: z
          .enum(['active', 'inactive'])
          .exactOptional()
          .openapi({ description: 'The current status of the season' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the season', example: 'The Aweseom Season' }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        cascaded_cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description:
              "The cover art for this season. If there is no specific cover for the season,\nthe cover image of the series' cover art will be returned.\nThe `/images` endpoint provideds details to the image.\n",
            required: [],
          }),
        classification_inclusions: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of classifications associated with the season', required: [] }),
        cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ description: 'The cover image for the season', required: [] }),
        credits: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of credits given to people in the season', required: [] }),
        episodes: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            title:
              'A list of published and released episodes with an actual media file within the season',
            required: [],
          }),
        first_released_episode: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ description: 'The first released episode within the season', required: [] }),
        images: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            title: 'Both the cover image and the cascaded cover image for the season',
            required: [],
          }),
        last_released_episode: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description: 'The most recently released episode within the season',
            required: [],
          }),
        series: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ title: 'The series the season belongs to', required: [] }),
        taggings: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of associations linking tags to the season.',
            required: [],
          }),
        tags: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of tags associated with the season',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of resource. This is always `seasons`',
        example: 'seasons',
      }),
  })
  .openapi({ required: [] })
  .openapi('Season')

const SeriesSchema = z
  .object({
    attributes: z
      .object({
        amazon_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Amazon Music subscription URL' }),
        castbox_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The CastBox subscription URL' }),
        cover_image_id: z
          .uuid()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'This will be replaced by the relationship `cover_image` in a future update.<br/>\nThe image ID of the cover art for this series. The `/images` endpoint provideds details to the image.\n',
            example: 'ec8f13bf-77c0-40fe-933a-8c088c16bc17',
          }),
        created_at: z.iso.datetime({ offset: true }).exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The description of the series eventually in HTML format',
            example: '<p><strong>Some</strong> funny example.</p>',
          }),
        description_is_html: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines whether `description` is in HTML format or plain.' }),
        description_plain: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The description with all HTML markup removed. If the description does not contain markup\nthis is identitcal to `description`.\n',
            example: 'Some funny example.',
          }),
        facebook_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the series on Facebook' }),
        google_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Google subscription URL' }),
        iheart_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The iHeartRadio subscription URL' }),
        instagram_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the series on Instagram' }),
        itunes_subscription_badge_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If `null` or `true`, the ART19 web player will render an iTunes subscription badge',
          }),
        itunes_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Apple iTunes subscription URL' }),
        linkedin_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the series on LinkedIn' }),
        pocket_casts_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Pocket Casts subscription URL' }),
        podcast_subscription_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL of the RSS feed',
            example: 'https://rss.art19.com/greatest-show-ever',
          }),
        public_page_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If this is `true`, a public web page for this series is available under\n`https://art19.com/shows/{slug}`, where `slug` is the value of the corresponding attribute.\nThis public page provides details about the series as well as descriptive links to all its\nepisodes. If this is `false`, no such public page is available.\n',
          }),
        public_title: z
          .string()
          .exactOptional()
          .openapi({
            description: 'If present, this is the preferred title for the series in the RSS Feed',
          }),
        radio_public_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The RadioPublic subscription URL' }),
        rss_author: z
          .string()
          .exactOptional()
          .openapi({ description: 'The author responsible for the RSS feed' }),
        rss_copyright: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The copyright disclaimer for the contents of the show, appearing after a © symbol, e.g. `2020 ART19, Inc.`',
          }),
        rss_email: z
          .string()
          .exactOptional()
          .openapi({ description: 'The pubic point of contact for the show' }),
        rss_owner: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the contact for the show' }),
        slug: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "This slug is unique over all series and networks system wide and is used to access the series' feed\nas well as its eventually enabled public page on ART19.\n",
            example: 'greatest-show-ever',
          }),
        sort_title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The title of the series modified for sorting. This converts all characters to\nlower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.\n',
            example: 'greatest show ever',
          }),
        spotify_subscription_badge_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If `null` or `true`, the ART19 web player will render a Spotify subscription badge',
          }),
        spotify_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Spotify subscription URL' }),
        status: z
          .enum(['active', 'inactive'])
          .exactOptional()
          .openapi({ description: 'The status of the series' }),
        stitcher_subscription_badge_enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If `null` or `true`, the ART19 web player will render a Stitcher subscription badge',
          }),
        stitcher_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Stitcher subscription URL' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The title of the series', example: 'The greatest show ever' }),
        tumblr_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the series on Tumblr' }),
        tune_in_subscription_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The TuneIn subscription URL' }),
        twitter_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the series on Twitter' }),
        type: z
          .literal('Series')
          .exactOptional()
          .openapi({ description: 'The type of the series' }),
        updated_at: z.iso.datetime({ offset: true }).exactOptional(),
        website_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The custom website URL for the series' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.uuid().exactOptional().openapi({ example: 'c1fbb1bf-45b1-4803-986e-123166f7f427' }),
    relationships: z
      .object({
        classification_inclusions: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of classifications associated with the series', required: [] }),
        cover_image: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ description: 'The cover image for the series', required: [] }),
        credits: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of credits given to people in the series', required: [] }),
        episodes: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            title: 'A list of published and released episodes with an actual media file',
            required: [],
          }),
        images: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'The cover image for the series', required: [] }),
        network: z
          .object({ data: ResourceIdentifierSchema.exactOptional() })
          .exactOptional()
          .openapi({ title: 'The network the series belongs to', required: [] }),
        seasons: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({ title: 'A list of seasons in the series', required: [] }),
        taggings: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of associations linking tags to the series',
            required: [],
          }),
        tags: z
          .object({ data: z.array(ResourceIdentifierSchema).exactOptional() })
          .exactOptional()
          .openapi({
            deprecated: true,
            title: 'A list of tags associated with the series',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of resource. This is always `series`', example: 'series' }),
  })
  .openapi({ required: [] })
  .openapi('Series')

const ForbiddenResponse = {
  description:
    'Forbidden\n\nThe provided credential is not authorized to access the requested resource or collection.\n[See RFC 7231 § 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)\n',
}

const NotAcceptableResponse = {
  description:
    'Not Acceptable\n\nThe client requested a response format which cannot be satisfied. Ensure that you specify the\ncorrect `Accept` header. [See RFC 7231 § 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6).\n',
}

const NotFoundResponse = {
  description:
    'Not Found\n\nThe requested resource/collection does not exist. [See RFC 7231 § 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4).\n',
}

const RateLimitExceededResponse = {
  description: 'Rate limit exceeded',
  headers: z.object({
    'Retry-After': {
      description:
        'The number of seconds after which the request can be retried.\nSince the rate limit is per minute, this value ranges from 1 to 59.\nConforms to [RFC 7231 § 7.1.3](https://tools.ietf.org/html/rfc7231#section-7.1.3).\n',
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description:
            'The number of seconds after which the request can be retried.\nSince the rate limit is per minute, this value ranges from 1 to 59.\nConforms to [RFC 7231 § 7.1.3](https://tools.ietf.org/html/rfc7231#section-7.1.3).\n',
          param: { required: false },
        }),
    },
  }),
}

const UnauthorizedResponse = {
  description:
    'Unauthorized\n\nA valid credential was not supplied, but one is required.\n[See RFC 7235 § 3.1](https://tools.ietf.org/html/rfc7235#section-3.1).\nA `WWW-Authenticate` header is not currently returned.\n',
}

const ApiKeySecurityScheme = {
  description:
    'Authentication is **REQUIRED** for all APIs using an API token, which is placed into an HTTP Authorization header.\n\nThis token is generated by ART19 Support and consists of a shared secret placed in the `token`\nparameter and a credential ID placed in the `credential` parameter.\n\nThe final Authorization header will look like this:\n\n```\nAuthorization: Token token="V2h5LCBoZWxsbyB0aGVyZSE=", credential="8f71320c-fdbc-4934-b3b9-f1eda4fb39a9"\n```\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getClassificationInclusionsRoute = createRoute({
  method: 'get',
  path: '/classification_inclusions',
  tags: ['ClassificationInclusion'],
  summary: 'Get ClassificationInclusion records',
  description:
    'Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.\n\nIn order to retrieve a set of classification inclusions, at least one of the following filter parameters must\nbe provided. Failing to do so renders a `400 Bad Request` response.\n\n- `ids[]`\n- `classified_id` and `classified_type`\n- `classified_id` and `classification_type`\n- `classification_id` and `classified_type`\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      classification_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classification inclusions linked to a classification with this ID.',
            example: 'a90609c0-9f0c-48fd-8a41-83eb8414bedb',
            in: 'query',
            name: 'classification_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      classification_type: z
        .enum(['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of classification that the classification inclusions are linked to.\nDepending on the permissions of your credential, only a subset of these types are usable.\n',
            in: 'query',
            name: 'classification_type',
            schema: {
              enum: ['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'],
              type: 'string',
            },
            required: false,
          },
        }),
      classified_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classification inclusions linked to a resource with this ID.\nYou will have to use this filter together with either `classified_type` or `classification_type`.\n',
            example: 'fee1976e-f1bc-48a9-9ee8-58800f4d3462',
            in: 'query',
            name: 'classified_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      classified_type: z
        .enum(['Series', 'Season', 'Episode'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classification inclusions linked to this type of entity.',
            in: 'query',
            name: 'classified_type',
            schema: { enum: ['Series', 'Season', 'Episode'], type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classification inclusions linked to a classification containing\nthe parameter value disregarding case.\n',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['classification_value', 'created_at', 'position'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'created_at',
              items: { enum: ['classification_value', 'created_at', 'position'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'created_at',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(ClassificationInclusionSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. At least one filter parameter is required.\n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getClassificationInclusionsIdRoute = createRoute({
  method: 'get',
  path: '/classification_inclusions/{id}',
  tags: ['ClassificationInclusion'],
  summary: 'Get a specific classification inclusion',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the classification inclusion resource to load.',
            example: 'd1d90de9-c143-42e7-9e00-eca75e984847',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: ClassificationInclusionSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getClassificationsRoute = createRoute({
  method: 'get',
  path: '/classifications',
  tags: ['Classification'],
  summary: 'Get a list of classifications',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      type: z
        .enum(['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classifications of this type. The possible values for types\ndepends on the privileges of the provided credential.\n',
            example: 'Genre',
            in: 'query',
            name: 'type',
            schema: {
              enum: ['AlternateFeedType', 'Genre', 'Industry', 'Language', 'MediaRating'],
              type: 'string',
            },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to classifications with a value containing the parameter value\ndisregarding case.\n',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this parameter is provided and not empty, limit the result to classifications\nof type `Geography` representing countries. The credential must have at least one\nprivilege with a network, series, or advertiser profile.\n',
            example: 'true',
            in: 'query',
            name: 'is_country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['created_at', 'updated_at', 'value'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'value',
              items: { enum: ['created_at', 'updated_at', 'value'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'value',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(ClassificationSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. Filtering by type for AudienceSegment, AudienceTag, ListeningPlatform, and UserDevice is no longer supported.\n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getClassificationsIdRoute = createRoute({
  method: 'get',
  path: '/classifications/{id}',
  tags: ['Classification'],
  summary: 'Get a specific classification',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the classification resource to load.',
            example: '6fb61aa8-e221-4caf-b166-30b7ccda7114',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: ClassificationSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getCreditsRoute = createRoute({
  method: 'get',
  path: '/credits',
  tags: ['Credit'],
  summary: 'Get a list of credits',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      creditable_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to credits for the entity with this ID only. If the entity is not\npublished, the credential needs to have the right privilege to list the credits for it.\n',
            example: '76654e16-76ce-4945-92e9-e0a381917853',
            in: 'query',
            name: 'creditable_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      creditable_type: z
        .enum(['Series', 'Season', 'Episode'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to credits linked to this type of entity only.\nDepending on the privileges of the credential, this list might be further reduced to\nonly published entities.\n',
            in: 'query',
            name: 'creditable_type',
            schema: { enum: ['Series', 'Season', 'Episode'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['created_at', 'position', 'updated_at'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'position',
              items: { enum: ['created_at', 'position', 'updated_at'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'position',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(CreditSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getCreditsIdRoute = createRoute({
  method: 'get',
  path: '/credits/{id}',
  tags: ['Credit'],
  summary: 'Get a specific credit',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the credit resource to load.',
            example: 'e345d7b6-cc47-437c-b06e-032a04a2c8cf',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: CreditSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getEpisodesRoute = createRoute({
  method: 'get',
  path: '/episodes',
  tags: ['Episode'],
  summary: 'Get a list of episodes',
  description:
    'One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response\nwill be returned. Additional filters are allowed.\n\nThis API will only return episodes that your credential has permission to access, which may not be exclusive to\nyour account, depending on the filter(s) being used. Be careful to filter the results as needed.\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            required: true,
            schema: { minimum: 1, type: 'integer' },
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            required: true,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      included_in_inventory_calendar: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to episodes usable with an inventory management calendar for the provided AdDeal ID.',
            example: 'b97239ef-1776-489a-a1df-5f70a8407148',
            in: 'query',
            name: 'included_in_inventory_calendar',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to episodes released in this month.',
            in: 'query',
            name: 'month',
            schema: { type: 'string' },
            required: false,
          },
        }),
      published: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, limit the result to published episodes only.\nIf `false`, limit the result to _unpublished_ episodes only.\n',
            in: 'query',
            name: 'published',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to episodes with a title containing this parameter in a case-insensitive way.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      released_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to episodes released after this timestamp.',
            in: 'query',
            name: 'released_after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      released_before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to episodes released before this timestamp.',
            in: 'query',
            name: 'released_before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      rss: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, limit the result to published and released episodes holding an available media file.\nIf this is `true`, it also changes the default sort order to `-released_at`.\n',
            in: 'query',
            name: 'rss',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      season_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit result to episodes linked to this season.',
            example: '30e7b568-d099-486b-9a8e-51b7594cab7d',
            in: 'query',
            name: 'season_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      series_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to episodes linked to this series.',
            example: 'd0ceb1ff-b95b-4c1e-a7e5-a36ed7b4d3b7',
            in: 'query',
            name: 'series_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'created_at',
              'earliest_released_at',
              'released_at',
              'released_or_created_at',
              'sort_title',
              'title',
              'updated_at',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'sort_title',
              items: {
                enum: [
                  'created_at',
                  'earliest_released_at',
                  'released_at',
                  'released_or_created_at',
                  'sort_title',
                  'title',
                  'updated_at',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'sort_title',
        }),
      year: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to episodes released in this year.',
            in: 'query',
            name: 'year',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(EpisodeSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must be present and have a positive page number and a page size no larger than 100. One initial filter must be provided (`ids`, `series_id`, or `season_id`).\n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getEpisodesIdRoute = createRoute({
  method: 'get',
  path: '/episodes/{id}',
  tags: ['Episode'],
  summary: 'Get a specific episode',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the episode resource to load.',
            example: '00fb9e1b-88b3-43e5-a974-28551e8e4ca8',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: EpisodeSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getEpisodesIdNextSiblingRoute = createRoute({
  method: 'get',
  path: '/episodes/{id}/next_sibling',
  tags: ['Episode'],
  summary: 'Get the episode released right after the specified one',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the episode to find the one episode released right after it.',
            example: 'e9ac30cf-db68-4629-ac87-df8ba85d41ad',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      rss: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, get the next released and published episode with an available media file.\n',
            in: 'query',
            name: 'rss',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: EpisodeSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getEpisodesIdPreviousSiblingRoute = createRoute({
  method: 'get',
  path: '/episodes/{id}/previous_sibling',
  tags: ['Episode'],
  summary: 'Get the episode released right before the specified one',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the episode to find the one episode released right before it.',
            example: '7a8006b1-30d9-4d54-9484-e22532c298f4',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      rss: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, get the previously released and published episode with an available media file.\n',
            in: 'query',
            name: 'rss',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: EpisodeSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getImagesRoute = createRoute({
  method: 'get',
  path: '/images',
  tags: ['Image'],
  summary: 'Get a list of images',
  description:
    'An image represents a piece of artwork attached to some entity like a series, season, or episode,\nand is _owned_ by an entity called the `bucket`.\nAn image is also a container for several `MediaAssets` representing the physical files for various\nstyles used.\n\n## Media Asset Styles for Images\n\nMost media assets use square images. You may upload and use a square image, or upload an image of any\nshape and crop it to a square by specifying the cropping area. This area – identified by a coordinate\n`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has\ncropping defined, the cropped version of the image will be used in any `regular` or `square` style of media\nasset. If the original file is rectangular and does not have cropping, then the system will use a squared\nversion of the original file with the smaller of width or height as the square size.\n\nThe original image as uploaded into the system is always retained unmodified and available through\nthe style `original`. All media asset styles except `stripped-original` consist of the cropped image.\n\nAn image has media assets with the following styles:\n\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.\n  This should be used for any application needing the original, uncropped, image.\n- `regular`: If the image has cropping defined, this is the cropped image.\n  If not, this is a square version of the original.\n- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.\n- `square-400`: A square version of the image with a size of `400x400` pixels.\n- `square-640`: A square version of the image with a size of `640x640` pixels.\n- `square-888`: A square version of the image with a size of `888x888` pixels.\n- `square-3000`: A square version of the image with a size of `3000x3000` pixels.\n  This variant is only created if the cropped width & height are each at least 3000.\n- `itunes`: A square version of the image with a size of `1400x1400` pixels.\n\n### Preferred image used in feeds\n\nFor the main series image used in feeds, it is ideal to use the `square-3000` version.\nIf that is not available, the `itunes` version should be used instead.\n\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: true,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(ImageSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getImagesIdRoute = createRoute({
  method: 'get',
  path: '/images/{id}',
  tags: ['Image'],
  summary: 'Get a specific image',
  description:
    'An image represents a piece of artwork attached to some entity like a series, season, or episode,\nand is _owned_ by an entity called the `bucket`.\nAn image is also a container for several `MediaAssets` representing the physical files for various\nstyles used.\n\n## Media Asset Styles for Images\n\nMost media assets use square images. You may upload and use a square image, or upload an image of any\nshape and crop it to a square by specifying the cropping area. This area – identified by a coordinate\n`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has\ncropping defined, the cropped version of the image will be used in any `regular` or `square` style of media\nasset. If the original file is rectangular and does not have cropping, then the system will use a squared\nversion of the original file with the smaller of width or height as the square size.\n\nThe original image as uploaded into the system is always retained unmodified and available through\nthe style `original`. All media asset styles except `stripped-original` consist of the cropped image.\n\nAn image has media assets with the following styles:\n\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.\n  This should be used for any application needing the original, uncropped, image.\n- `regular`: If the image has cropping defined, this is the cropped image.\n  If not, this is a square version of the original.\n- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.\n- `square-400`: A square version of the image with a size of `400x400` pixels.\n- `square-640`: A square version of the image with a size of `640x640` pixels.\n- `square-888`: A square version of the image with a size of `888x888` pixels.\n- `square-3000`: A square version of the image with a size of `3000x3000` pixels.\n  This variant is only created if the cropped width & height are each at least 3000.\n- `itunes`: A square version of the image with a size of `1400x1400` pixels.\n\n### Preferred image used in feeds\n\nFor the main series image used in feeds, it is ideal to use the `square-3000` version.\nIf that is not available, the `itunes` version should be used instead.\n\n',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the image resource to load.',
            example: 'e63cb0b7-2a08-4cd9-bee7-cf34f54c1ce2',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: ImageSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getMediaAssetsRoute = createRoute({
  method: 'get',
  path: '/media_assets',
  tags: ['MediaAsset'],
  summary: 'Get a list of media assets',
  description:
    'A media asset is part of a collection of assets or files representing an image or a piece of audio content\nlike an episode or an ad. Images, for example, have differently sized versions for better rendering performance,\nand a piece of audio content usually comes in different encoding formats.\n\nThe `style` attribute of a media asset describes the role an asset plays in the context of the collection.\nThe collection is what an asset is attached to (`attachment_id|type`).\n\n## Styles for Images\n\nMost media assets use square images. You may upload and use a square image, or upload an image of any\nshape and crop it to a square by specifying the cropping area. This area – identified by a coordinate\n`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has\ncropping defined, the cropped version of the image will be used in any `regular` or `square` style of media\nasset. If the original file is rectangular and does not have cropping, then the system will use a squared\nversion of the original file with the smaller of width or height as the square size.\n\nThe original image as uploaded into the system is always retained unmodified and available through\nthe style `original`. All media asset styles except `stripped-original` consist of the cropped image.\n\nAn image has media assets with the following styles:\n\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.\n  This should be used for any application needing the original, uncropped, image.\n- `regular`: If the image has cropping defined, this is the cropped image.\n  If not, this is a square version of the original.\n- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.\n- `square-400`: A square version of the image with a size of `400x400` pixels.\n- `square-640`: A square version of the image with a size of `640x640` pixels.\n- `square-888`: A square version of the image with a size of `888x888` pixels.\n- `square-3000`: A square version of the image with a size of `3000x3000` pixels.\n  This variant is only created if the cropped width & height are each at least 3000.\n- `itunes`: A square version of the image with a size of `1400x1400` pixels.\n\n### Preferred image used in feeds\n\nFor the main series image used in feeds, it is ideal to use the `square-3000` version.\nIf that is not available, the `itunes` version should be used instead.\n\n\n## Styles for Audio\n\n- `medium`: A medium-quality version of the audio asset in various formats.\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.\n\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: true,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(MediaAssetSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getMediaAssetsIdRoute = createRoute({
  method: 'get',
  path: '/media_assets/{id}',
  tags: ['MediaAsset'],
  summary: 'Get a specific media asset',
  description:
    'A media asset is part of a collection of assets or files representing an image or a piece of audio content\nlike an episode or an ad. Images, for example, have differently sized versions for better rendering performance,\nand a piece of audio content usually comes in different encoding formats.\n\nThe `style` attribute of a media asset describes the role an asset plays in the context of the collection.\nThe collection is what an asset is attached to (`attachment_id|type`).\n\n## Styles for Images\n\nMost media assets use square images. You may upload and use a square image, or upload an image of any\nshape and crop it to a square by specifying the cropping area. This area – identified by a coordinate\n`x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has\ncropping defined, the cropped version of the image will be used in any `regular` or `square` style of media\nasset. If the original file is rectangular and does not have cropping, then the system will use a squared\nversion of the original file with the smaller of width or height as the square size.\n\nThe original image as uploaded into the system is always retained unmodified and available through\nthe style `original`. All media asset styles except `stripped-original` consist of the cropped image.\n\nAn image has media assets with the following styles:\n\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.\n  This should be used for any application needing the original, uncropped, image.\n- `regular`: If the image has cropping defined, this is the cropped image.\n  If not, this is a square version of the original.\n- `thumb`: A square thumbnail of the image with a size of `100x100` pixels.\n- `square-400`: A square version of the image with a size of `400x400` pixels.\n- `square-640`: A square version of the image with a size of `640x640` pixels.\n- `square-888`: A square version of the image with a size of `888x888` pixels.\n- `square-3000`: A square version of the image with a size of `3000x3000` pixels.\n  This variant is only created if the cropped width & height are each at least 3000.\n- `itunes`: A square version of the image with a size of `1400x1400` pixels.\n\n### Preferred image used in feeds\n\nFor the main series image used in feeds, it is ideal to use the `square-3000` version.\nIf that is not available, the `itunes` version should be used instead.\n\n\n## Styles for Audio\n\n- `medium`: A medium-quality version of the audio asset in various formats.\n- `original`: This is the original file provided. May not be available, depending on permissions\n  and file type.\n- `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.\n\n',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the media asset resource to load.',
            example: '80803e71-1ebf-4a66-ac69-662eac0039b8',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: MediaAssetSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getNetworksRoute = createRoute({
  method: 'get',
  path: '/networks',
  tags: ['Network'],
  summary: 'Get a list of networks',
  description:
    '### Deprecations\n\n- The attribute `cover_image_id` has been replaced with the relationship `cover_image`\n  and will be removed from the response in a future release.\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to networks with a name containing this parameter in a case-insensitive way.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ad_rep_account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to networks containing at least one series with an ad deal of this Ad Ops profile.\n',
            in: 'query',
            name: 'ad_rep_account_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      ad_deal_status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['active', 'inactive', 'pending_active', 'pending_inactive'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to networks containing at least one series with an ad deal matching one of the\nvalues in this parameter.\n',
            explode: false,
            in: 'query',
            name: 'ad_deal_status',
            schema: {
              items: {
                enum: ['active', 'inactive', 'pending_active', 'pending_inactive'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['created_at', 'name', 'updated_at'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'name',
              items: { enum: ['created_at', 'name', 'updated_at'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(NetworkSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getNetworksIdRoute = createRoute({
  method: 'get',
  path: '/networks/{id}',
  tags: ['Network'],
  summary: 'Get a specific network',
  description:
    '### Deprecations\n\n- The attribute `cover_image_id` has been replaced with the relationship `cover_image`\n  and will be removed from the response in a future release.\n',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the network resource to load.',
            example: '04f32378-5ad0-422b-a271-c98f81a9e3fb',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: NetworkSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['Person'],
  summary: 'Get a list of people',
  description:
    'Each series, season, and episode has a Credits section where you may add people and roles.\nThis is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.\nEach Person added will have no additional access or permissions granted as a result of being included in the Credits section.\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to people with a full name containing this parameter in a case-insensitive way.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['created_at', 'first_name', 'last_name', 'updated_at'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'last_name,first_name',
              items: {
                enum: ['created_at', 'first_name', 'last_name', 'updated_at'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'last_name,first_name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(PersonSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getPeopleIdRoute = createRoute({
  method: 'get',
  path: '/people/{id}',
  tags: ['Person'],
  summary: 'Get a specific person',
  description:
    'Each series, season, and episode has a Credits section where you may add people and roles.\nThis is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.\nEach Person added will have no additional access or permissions granted as a result of being included in the Credits section.\n',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the person resource to load.',
            example: 'b934651d-d80d-4565-a342-65ade270c804',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: PersonSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getSeasonsRoute = createRoute({
  method: 'get',
  path: '/seasons',
  tags: ['Season'],
  summary: 'Get a list of seasons',
  description:
    'When retrieving a list of seasons, the result is automatically filtered depending on the\nprivileges the used credential holds. If there are no specific privileges to a series or network,\nonly active seasons for active series are included.\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      series_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to seasons owned by this series.',
            example: '7ebd702d-07c8-4da9-a7a8-cf18ec414d5c',
            in: 'query',
            name: 'series_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to seasons with a title containing this parameter in a case-insensitive way.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['created_at', 'sort_title', 'title', 'updated_at'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'sort_title',
              items: { enum: ['created_at', 'sort_title', 'title', 'updated_at'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'sort_title',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(SeasonSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getSeasonsIdRoute = createRoute({
  method: 'get',
  path: '/seasons/{id}',
  tags: ['Season'],
  summary: 'Get a specific season',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the season resource to load.',
            example: '8b92fc98-1e8c-4d1a-88ae-e40bd7d96dad',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: SeasonSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getSeriesRoute = createRoute({
  method: 'get',
  path: '/series',
  tags: ['Series'],
  summary: 'Get a list of series',
  description:
    'When retrieving a list of series, the result is automatically filtered depending on the\nprivileges the used credential holds. All credentials will have access to active series\nwith a public page enabled (on ART19). Utilizing a filter to limit the result to series\nassociated with your account is recommended.\n',
  request: {
    query: z.object({
      'ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.\nThe brackets *MUST* be percent-encoded, per the requirements in\n[RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).\n',
            explode: true,
            in: 'query',
            name: 'ids[]',
            required: false,
            schema: { items: { format: 'uuid', type: 'string' }, type: 'array', uniqueItems: true },
          },
        }),
      'page[number]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select which page number to receive results for. Pages are numbered starting at 1.\n\n',
            in: 'query',
            name: 'page[number]',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicate how many records to return per page. The maximum is 100.\n\n',
            in: 'query',
            name: 'page[size]',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      ad_rep_account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to series with an ad deal of this Ad Ops profile.\n',
            example: '35eb02fc-54db-4650-98e0-4695b101b71d',
            in: 'query',
            name: 'ad_rep_account_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      network_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the result to series owned by this network.',
            example: '5317358a-527e-4365-a343-361854286cc7',
            in: 'query',
            name: 'network_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the result to series with a title or slug containing this parameter in a case-insensitive way.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum(['created_at', 'episode_released_at', 'sort_title', 'title', 'updated_at']),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify how to sort the result. Please refer to either the top section or the\n[JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.\n',
            explode: false,
            in: 'query',
            name: 'sort',
            schema: {
              default: 'sort_title',
              items: {
                enum: ['created_at', 'episode_released_at', 'sort_title', 'title', 'updated_at'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
          default: 'sort_title',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: z.array(SeriesSchema).exactOptional(),
              links: LinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nParameters requiring a specific format must adhere to that format.\nPagination must have a positive page number and a page size no larger than 100. \n',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'An application-specific error code, expressed as a string value',
                        }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.\n',
                          example: 'Required query parameter “series_id” is missing',
                        }),
                      source: z
                        .object({
                          parameter: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A string indicating which URI query parameter caused the error.',
                              example: 'series_id',
                            }),
                          pointer: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the associated entity in the request document (e.g. `/data` for a primary data object, or `/data/attributes/title` for a specific attribute).\n',
                              example: '/data/attributes/name',
                            }),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing references to the source of the error, optionally including any of the following members.\n',
                          required: [],
                        }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The HTTP status code applicable to this problem, expressed as a string value: 400',
                          example: '400',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the\nproblem, except for purposes of localization.\n',
                          example: 'Bad Request',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An error object describing the problem. Please check out the\n[JSON:API Error document reference](https://jsonapi.org/format/#error-objects) for a full\ndescription of the returned object.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})

export const getSeriesIdRoute = createRoute({
  method: 'get',
  path: '/series/{id}',
  tags: ['Series'],
  summary: 'Get a specific series',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the series resource to load.',
            example: 'c96cba77-1677-4053-a070-70c110f13d1b',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.api+json': {
          schema: z
            .object({
              data: SeriesSchema.exactOptional(),
              links: ResourceLinkSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
    429: RateLimitExceededResponse,
  },
  security: [{ api_key: [] }],
})
