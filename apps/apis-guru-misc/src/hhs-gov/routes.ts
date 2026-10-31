import { createRoute, z } from '@hono/zod-openapi'

const AlternateImageSchema = z
  .object({
    height: z.int32().exactOptional(),
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
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
    width: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlternateImage')

const MessageSchema = z
  .object({
    errorCode: z.string().exactOptional(),
    errorDetail: z.string().exactOptional(),
    errorMessage: z.string().exactOptional(),
    userMessage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Message')

const PaginationSchema = z
  .object({
    count: z.int().exactOptional(),
    currentUrl: z.string().exactOptional(),
    max: z.int().exactOptional(),
    nextUrl: z.string().exactOptional(),
    offset: z.int().exactOptional(),
    pageNum: z.int().exactOptional(),
    previousUrl: z.string().exactOptional(),
    sort: z.string().exactOptional(),
    total: z.int().exactOptional(),
    totalPages: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const MetaSchema = z
  .object({
    messages: z.array(MessageSchema).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    status: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Meta')

const AlternateImageWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(AlternateImageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlternateImageWrapped')

const SourceSchema = z
  .object({
    acronym: z.string().exactOptional(),
    contactEmail: z.string().exactOptional(),
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
    largeLogoUrl: z.string().exactOptional(),
    name: z.string().exactOptional(),
    smallLogoUrl: z.string().exactOptional(),
    websiteUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Source')

const CampaignSchema = z
  .object({
    contactEmail: z.string().exactOptional(),
    description: z.string().exactOptional(),
    endDate: z.iso.date().exactOptional(),
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
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    startDate: z.iso.date().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Campaign')

const CampaignWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(CampaignSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignWrapped')

const ExtendedAttributeSchema = z
  .object({
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
    name: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendedAttribute')

const LanguageSchema = z
  .object({
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
    isActive: z.boolean().exactOptional(),
    isoCode: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Language')

const CollectionSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Collection')

const CollectionWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(CollectionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionWrapped')

const ExtendedAttributeWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(ExtendedAttributeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendedAttributeWrapped')

const HtmlSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Html')

const HtmlWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(HtmlSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HtmlWrapped')

const ImageSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
    height: z.int32().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
    width: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Image')

const ImageWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(ImageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageWrapped')

const InfographicSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
    height: z.int32().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
    width: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Infographic')

const InfographicWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(InfographicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InfographicWrapped')

const LanguageWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(LanguageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LanguageWrapped')

const MediaItemSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaItem')

const MediaItemWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(MediaItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaItemWrapped')

const MediaTypeHolderSchema = z
  .object({ description: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MediaTypeHolder')

const MediaTypeHolderWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(MediaTypeHolderSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaTypeHolderWrapped')

const MessageWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(MessageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MessageWrapped')

const MetaWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(MetaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetaWrapped')

const PDFSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PDF')

const PDFWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(PDFSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PDFWrapped')

const PaginationWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(PaginationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginationWrapped')

const ResourceWrappedSchema = z.any().openapi('ResourceWrapped')

const SourceWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(SourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceWrapped')

const SyndicateMarshallerSchema = z
  .object({
    content: z.string().exactOptional(),
    description: z.string().exactOptional(),
    id: z.int().exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    sourceUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SyndicateMarshaller')

const SyndicateMarshallerWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(SyndicateMarshallerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SyndicateMarshallerWrapped')

const TagLanguageMarshallerSchema = z
  .object({
    id: z.int().exactOptional(),
    isActive: z.boolean().exactOptional(),
    isoCode: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagLanguageMarshaller')

const TagLanguageMarshallerWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(TagLanguageMarshallerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagLanguageMarshallerWrapped')

const TagTypeMarshallerSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TagTypeMarshaller')

const TagMarshallerSchema = z
  .object({
    id: z.int().exactOptional(),
    language: TagLanguageMarshallerSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: TagTypeMarshallerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagMarshaller')

const TagMarshallerWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(TagMarshallerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagMarshallerWrapped')

const TagTypeMarshallerWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(TagTypeMarshallerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagTypeMarshallerWrapped')

const TwitterAccountSchema = z.any().openapi('TwitterAccount')

const TweetSchema = z
  .object({
    account: TwitterAccountSchema.exactOptional(),
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    mediaUrl: z.string().exactOptional(),
    messageText: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
    tweetDate: z.iso.date().exactOptional(),
    tweetId: z.int32().exactOptional(),
    videoVariantUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tweet')

const TweetWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(TweetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TweetWrapped')

const VideoSchema = z
  .object({
    campaigns: z.array(CampaignSchema).exactOptional(),
    createdBy: z.string().exactOptional(),
    customAttributionUrl: z.string().exactOptional(),
    customPreviewUrl: z.string().exactOptional(),
    customThumbnailUrl: z.string().exactOptional(),
    dateContentAuthored: z.iso.date().exactOptional(),
    dateContentPublished: z.iso.date().exactOptional(),
    dateContentReviewed: z.iso.date().exactOptional(),
    dateContentUpdated: z.iso.date().exactOptional(),
    dateSyndicationCaptured: z.iso.date().exactOptional(),
    dateSyndicationUpdated: z.iso.date().exactOptional(),
    dateSyndicationVisible: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    extendedAttributes: z.array(ExtendedAttributeSchema).exactOptional(),
    externalGuid: z.string().exactOptional(),
    foreignSyndicationAPIUrl: z.string().exactOptional(),
    hash: z.string().exactOptional(),
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
    language: LanguageSchema.exactOptional(),
    mediaType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    source: SourceSchema.exactOptional(),
    sourceUrl: z.string().exactOptional(),
    targetUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Video')

const VideoWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(VideoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoWrapped')

const YoutubeMetadataSchema = z.object({}).openapi('YoutubeMetadata')

const YoutubeMetadataWrappedSchema = z
  .object({
    callback: z.string().exactOptional(),
    meta: MetaSchema.exactOptional(),
    results: z.array(YoutubeMetadataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('YoutubeMetadataWrapped')

const TestSchema = z.any().openapi('Test')

export const getResourcesJsonRoute = createRoute({
  method: 'get',
  path: '/resources.json',
  tags: ['resources'],
  summary: 'Get Resources by search query',
  description: 'Global search',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The search query supplied by the user',
            explode: false,
            in: 'query',
            name: 'q',
            required: true,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        '"Returns the list of Resources matching the search query \'q\'.<p>The search query \'q\' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>."',
      content: {
        'application/json': {
          schema: z.array(ResourceWrappedSchema).openapi({ title: 'ArrayOfResources' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesCampaignsJsonRoute = createRoute({
  method: 'get',
  path: '/resources/campaigns.json',
  tags: ['campaigns'],
  summary: 'Get Campaigns',
  description: 'Media Listings for a specific campaign',
  request: {
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'The offset of the records set to return for pagination',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: '* Set of fields to sort the records by.',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of Campaigns.',
      content: { 'application/json': { schema: CampaignWrappedSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesCampaignsIdJsonRoute = createRoute({
  method: 'get',
  path: '/resources/campaigns/{id}.json',
  tags: ['campaigns'],
  summary: 'Get Campaign by ID',
  description: 'Information about a specific campaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the Campaign identified by the 'id'.",
      content: { 'application/json': { schema: CampaignWrappedSchema } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesCampaignsIdMediaJsonRoute = createRoute({
  method: 'get',
  path: '/resources/campaigns/{id}/media.json',
  tags: ['campaigns'],
  summary: 'Get MediaItems by Campaign ID',
  description: 'Campaign Listings',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the campaign to find media items for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'The offset of the records set to return for pagination',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the list of MediaItems for the Campaign identified by the 'id'.",
      content: { 'application/json': { schema: MediaItemWrappedSchema } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesCampaignsIdSyndicateFormatRoute = createRoute({
  method: 'get',
  path: '/resources/campaigns/{id}/syndicate.{format}',
  tags: ['campaigns'],
  summary: 'Get MediaItems for Campaign',
  description: 'MediaItem',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      displayMethod: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Method used to render an html request. Accepts one: [mv, list, feed]',
            explode: false,
            in: 'query',
            name: 'displayMethod',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Renders the list of MediaItems associated with the Tag identified by the 'id'.",
      content: { 'application/json': { schema: SyndicateMarshallerWrappedSchema } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesLanguagesJsonRoute = createRoute({
  method: 'get',
  path: '/resources/languages.json',
  tags: ['languages'],
  summary: 'Get Languages',
  description: 'Language Listings',
  request: {
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list Languages.',
      content: {
        'application/json': {
          schema: z.array(LanguageWrappedSchema).openapi({ title: 'ArrayOfLanguages' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesLanguagesIdJsonRoute = createRoute({
  method: 'get',
  path: '/resources/languages/{id}.json',
  tags: ['languages'],
  summary: 'Get Language by ID',
  description: 'Information about a specific language',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the language to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the Language identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(LanguageWrappedSchema).openapi({ title: 'ArrayOfLanguages' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media.json',
  tags: ['media'],
  summary: 'Get MediaItems',
  description: 'Media Items Listings',
  request: {
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'The offset of the records set to return for pagination.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: '* Set of fields to sort the records by.',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: '* The ascending or descending order.',
            explode: false,
            in: 'query',
            name: 'order',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      mediaTypes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find all media items belonging to the specified media type[s].',
            explode: false,
            in: 'query',
            name: 'mediaTypes',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find all media items containing the provided name, case insensitive.',
            explode: false,
            in: 'query',
            name: 'name',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
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
            allowEmptyValue: false,
            description: 'Restrict filtering to media items in a specific collection.',
            explode: false,
            in: 'query',
            name: 'collectionId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      nameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find all media items containing the partial name, case insensitive.',
            explode: false,
            in: 'query',
            name: 'nameContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      descriptionContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items containing the provided partial description, case insensitive.',
            explode: false,
            in: 'query',
            name: 'descriptionContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items which have the provided sourceUrl, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceUrl',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceUrlContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items which contain the provided partial sourceUrl, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceUrlContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      customThumbnailUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items which have the provided customThumbnailUrl, case insensitive.',
            explode: false,
            in: 'query',
            name: 'customThumbnailUrl',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      customThumbnailUrlContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items which contain the provided partial customThumbnailUrl, case insensitive.',
            explode: false,
            in: 'query',
            name: 'customThumbnailUrlContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      dateContentAuthored: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored on the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateContentAuthored',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      dateContentUpdated: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated on the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateContentUpdated',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      dateContentPublished: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items published on the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateContentPublished',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      dateContentReviewed: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items reviewed on the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateContentReviewed',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      dateSyndicationCaptured: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items syndicated on the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateSyndicationCaptured',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      dateSyndicationUpdated: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated through the syndication system on the provided day, (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'dateSyndicationUpdated',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentAuthoredSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored since the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentAuthoredSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentAuthoredBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored before the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentAuthoredBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentAuthoredInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentAuthoredInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      contentUpdatedSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated since the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentUpdatedSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentUpdatedBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated before the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentUpdatedBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentUpdatedInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentUpdatedInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      contentPublishedSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated since the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentPublishedSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentPublishedBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items published before the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentPublishedBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentPublishedInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentPublishedInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      contentReviewedSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items reviewed since the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentReviewedSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentReviewedBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items reviewed before the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentReviewedBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      contentReviewedInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'contentReviewedInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      syndicationCapturedSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored since the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationCapturedSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationCapturedBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored before the provided day (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationCapturedBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationCapturedInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationCapturedInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      syndicationUpdatedSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated since the provided day, (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationUpdatedSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationUpdatedBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated before the provided day, (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationUpdatedBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationUpdatedInRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationUpdatedInRange',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      syndicationVisibleSinceDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items visible since the provided day, (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationVisibleSinceDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationVisibleBeforeDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items visible before the provided day, (RFC 3339, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationVisibleBeforeDate',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      syndicationVisibleInRange: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored).',
            explode: false,
            in: 'query',
            name: 'syndicationVisibleInRange',
            required: false,
            schema: { format: 'date', type: 'string' },
            style: 'form',
          },
        }),
      languageId: z
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
            allowEmptyValue: false,
            description: 'Find all media items written in the language specified by Id.',
            explode: false,
            in: 'query',
            name: 'languageId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
            style: 'form',
          },
        }),
      languageName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items written in the language specified by name, case insensitive.',
            explode: false,
            in: 'query',
            name: 'languageName',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      languageIsoCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items written in the language specified by 639-2 isoCode , case insensitive.',
            explode: false,
            in: 'query',
            name: 'languageIsoCode',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find all media items which match the provided hash, case insensitive.',
            explode: false,
            in: 'query',
            name: 'hash',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      hashContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items which match the provided partial hash, case insensitive.',
            explode: false,
            in: 'query',
            name: 'hashContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceId: z
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
            allowEmptyValue: false,
            description: 'Find all media items that belong to the source specified by Id.',
            explode: false,
            in: 'query',
            name: 'sourceId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
            style: 'form',
          },
        }),
      sourceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items that belong to the source specified by name, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceNameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items that belong to the source specified by partial name, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceNameContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceAcronym: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items that belong to the source specified by acronym, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceAcronym',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      sourceAcronymContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Find all media items that belong to the source specified by partial acronym, case insensitive.',
            explode: false,
            in: 'query',
            name: 'sourceAcronymContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      tagIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find only media items tagged with the specified tag Ids.',
            explode: false,
            in: 'query',
            name: 'tagIds',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      restrictToSet: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find only media from within the supplied list of Ids.',
            explode: false,
            in: 'query',
            name: 'restrictToSet',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      createdBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Find all media items containing the createdBy value.',
            explode: false,
            in: 'query',
            name: 'createdBy',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of MediaItems matching the specified query parameters.',
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaFeaturedJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media/featured.json',
  tags: ['media'],
  summary: 'Get the list of featured content in the syndication system',
  description: 'Get the list of featured content in the syndication system',
  request: {
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the list of featured content in the syndication system',
      content: {
        'application/json': {
          schema: z.array(MediaItemSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaMostPopularMediaFormatRoute = createRoute({
  method: 'get',
  path: '/resources/media/mostPopularMedia.{format}',
  tags: ['media'],
  summary: 'Get MediaItems by popularity',
  description: 'Get the media with the highest ratings.',
  request: {
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'The offset of the records set to return for pagination.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of MediaItems with the highest ratings.',
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaSearchResultsJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media/searchResults.json',
  tags: ['media'],
  summary: 'Get MediaItems by search query',
  description: 'Full search',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The search query supplied by the user',
            explode: false,
            in: 'query',
            name: 'q',
            required: true,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'The offset of the records set to return for pagination.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the list of MediaItems matching the search query 'q'.<p>Please enter keyword or URL in search query 'q'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}.json',
  tags: ['media'],
  summary: 'Get MediaItem by ID',
  description: 'Information about a specific media item',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the MediaItem identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdContentRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/content',
  tags: ['media'],
  summary: 'Get content for MediaItem',
  description: 'The actual media content (html, image, etc...)',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media to show content for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      calledByBuild: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The method that called this method',
            explode: false,
            in: 'query',
            name: 'calledByBuild',
            required: false,
            schema: { format: '', type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.",
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdEmbedJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/embed.json',
  tags: ['media'],
  summary: 'Get embed code for MediaItem',
  description: 'Get the javascript or iframe embed code for this item (to embed it on a web page).',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media to get embed code for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      flavor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: "Currently supports 'iframe', defaults to 'javascript'.",
            explode: false,
            in: 'query',
            name: 'flavor',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      width: z
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
            allowEmptyValue: false,
            description: 'The width of the generated iframe.',
            explode: false,
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      height: z
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
            allowEmptyValue: false,
            description: 'The height of the generated iframe.',
            explode: false,
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      iframeName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the iframe element',
            explode: false,
            in: 'query',
            name: 'iframeName',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      excludeJquery: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Should a reference to the JQuery Library be omitted?',
            explode: false,
            in: 'query',
            name: 'excludeJquery',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      excludeDiv: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Should the div to insert content into be omitted?',
            explode: false,
            in: 'query',
            name: 'excludeDiv',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      divId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Should the div to insert content into have a specific name?',
            explode: false,
            in: 'query',
            name: 'divId',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      displayMethod: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Method used to render an html request. Accepts one: [mv, list, feed]',
            explode: false,
            in: 'query',
            name: 'displayMethod',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the javascript or iframe embed code for the MediaItem identified by 'id'.",
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdPreviewJpgRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/preview.jpg',
  tags: ['media'],
  summary: 'Get Tag by ID',
  description: 'Get the jpg preview of the content item where applicable.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media to get a preview for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdRelatedMediaFormatRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/relatedMedia.{format}',
  tags: ['media'],
  summary: 'Get related MediaItems by ID',
  description: 'Get the media related to the current media item.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media item to get related media for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the list of MediaItems related to the MediaItem identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdSyndicateFormatRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/syndicate.{format}',
  tags: ['media'],
  summary: 'Get syndicated content for MediaItem',
  description: 'Get syndicated content.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media to show embed code for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cssClass: z
        .string()
        .default('syndicate')
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The css class to target for extraction.',
            explode: false,
            in: 'query',
            name: 'cssClass',
            required: false,
            schema: { default: 'syndicate', format: '', type: 'string' },
            style: 'form',
          },
        }),
      stripStyles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Remove in-line styles from content.',
            explode: false,
            in: 'query',
            name: 'stripStyles',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      stripScripts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Remove script tags from content.',
            explode: false,
            in: 'query',
            name: 'stripScripts',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      stripImages: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Remove image tags from content.',
            explode: false,
            in: 'query',
            name: 'stripImages',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      stripBreaks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Remove break tags from content.',
            explode: false,
            in: 'query',
            name: 'stripBreaks',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      stripClasses: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: "Remove class attributes from content (except 'syndicate').",
            explode: false,
            in: 'query',
            name: 'stripClasses',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      'font-size': z
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
            allowEmptyValue: false,
            description: 'Set font size (in points) of p, div, and span tags.',
            explode: false,
            in: 'query',
            name: 'font-size',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      imageFloat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              "Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.",
            explode: false,
            in: 'query',
            name: 'imageFloat',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      imageMargin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              "Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.",
            explode: false,
            in: 'query',
            name: 'imageMargin',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      autoplay: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'If content is a video, the embeded video will auto play when loaded.',
            explode: false,
            in: 'query',
            name: 'autoplay',
            required: false,
            schema: { default: true, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
      rel: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'If content is a video, related items will be shown at the end of playback.',
            explode: false,
            in: 'query',
            name: 'rel',
            required: false,
            schema: { default: false, format: '', type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).",
      content: { 'application/json': { schema: SyndicateMarshallerWrappedSchema } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdThumbnailJpgRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/thumbnail.jpg',
  tags: ['media'],
  summary: 'Get JPG thumbnail for MediaItem',
  description: 'Get the jpg thumbnail of the content item where applicable.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the media to get a thumbnail for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaIdYoutubeMetaDataJsonRoute = createRoute({
  method: 'get',
  path: '/resources/media/{id}/youtubeMetaData.json',
  tags: ['media'],
  summary: 'Get Youtube metadata for MediaItem',
  description: 'Youtube meta-data for a video item.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the video to show meta data for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.",
      content: {
        'application/json': {
          schema: z
            .object({
              callback: z.string().exactOptional(),
              meta: MetaSchema.exactOptional(),
              results: z.array(YoutubeMetadataSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesMediaTypesFormatRoute = createRoute({
  method: 'get',
  path: '/resources/mediaTypes.{format}',
  tags: ['mediaTypes'],
  summary: 'Get MediaTypes',
  description: 'Information about media types',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of available MediaTypes.',
      content: {
        'application/json': {
          schema: z.array(MediaTypeHolderWrappedSchema).openapi({ title: 'ArrayOfMediaTypes' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesSourcesJsonRoute = createRoute({
  method: 'get',
  path: '/resources/sources.json',
  tags: ['sources'],
  summary: 'Get Sources',
  description: 'Source Listings',
  request: {
    query: z.object({
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of Sources.',
      content: {
        'application/json': {
          schema: z.array(SourceWrappedSchema).openapi({ title: 'ArrayOfSources' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesSourcesIdJsonRoute = createRoute({
  method: 'get',
  path: '/resources/sources/{id}.json',
  tags: ['sources'],
  summary: 'Get Source by ID',
  description: 'Information about a specific source.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the source to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the Source identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(SourceWrappedSchema).openapi({ title: 'ArrayOfSources' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesSourcesIdSyndicateFormatRoute = createRoute({
  method: 'get',
  path: '/resources/sources/{id}/syndicate.{format}',
  tags: ['sources'],
  summary: 'Get MediaItems for Source',
  description: 'MediaItem',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      displayMethod: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Method used to render an html request. Accepts one: [mv, list, feed]',
            explode: false,
            in: 'query',
            name: 'displayMethod',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Renders the list of MediaItems associated with the Source identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfSyndicatedItems' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags.{format}',
  tags: ['tags'],
  summary: 'Get Tags',
  description: 'List of Tags',
  request: {
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Return tags[s] matching the supplied name',
            explode: false,
            in: 'query',
            name: 'name',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      nameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Return tags which contain the supplied partial name.',
            explode: false,
            in: 'query',
            name: 'nameContains',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      mediaId: z
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
            allowEmptyValue: false,
            description: 'Return tags associated with the supplied media id.',
            explode: false,
            in: 'query',
            name: 'mediaId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
            style: 'form',
          },
        }),
      typeId: z
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
            allowEmptyValue: false,
            description: 'Return tags belonging to the supplied tag type id.',
            explode: false,
            in: 'query',
            name: 'typeId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
            style: 'form',
          },
        }),
      typeName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Return tags belonging to the supplied tag type name.',
            explode: false,
            in: 'query',
            name: 'typeName',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the list of Tags matching the specified query parameters in the specified 'format'.",
      content: {
        'application/json': {
          schema: z.array(TagMarshallerWrappedSchema).openapi({ title: 'ArrayOfTags' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsTagLanguagesFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/tagLanguages.{format}',
  tags: ['tags'],
  summary: 'Get TagLanguages',
  description: 'List of Tag Languages',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of TagLanguages',
      content: {
        'application/json': {
          schema: z
            .array(TagLanguageMarshallerWrappedSchema)
            .openapi({ title: 'ArrayOfTagLanguages' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsTagTypesFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/tagTypes.{format}',
  tags: ['tags'],
  summary: 'Get MediaItems for Tag',
  description: 'List of Types',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Renders the list of MediaItems associated with the Tag identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(TagTypeMarshallerWrappedSchema).openapi({ title: 'ArrayOfTagTypes' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsIdFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/{id}.{format}',
  tags: ['tags'],
  summary: 'Get Tag by ID',
  description: 'Information about a specific tag',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the Tag identified by the 'id' in the specified 'format'.",
      content: {
        'application/json': {
          schema: z.array(TagMarshallerWrappedSchema).openapi({ title: 'ArrayOfTags' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsIdMediaFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/{id}/media.{format}',
  tags: ['tags'],
  summary: 'Get MediaItems for Tag',
  description: 'MediaItem',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the tag to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the list of MediaItems associated with the Tag identified by the 'id'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsIdRelatedFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/{id}/related.{format}',
  tags: ['tags'],
  summary: 'Get related Tags by ID',
  description: 'Information about related tags to a specific tag',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the tag to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The name of the property to which sorting will be applied',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
      max: z
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
            allowEmptyValue: false,
            description: 'The maximum number of records to return',
            explode: false,
            in: 'query',
            name: 'max',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
      offset: z
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
            allowEmptyValue: false,
            description: 'Return records starting at the offset index.',
            explode: false,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the list of Tags related to the Tag identified by the 'id' in the specified format.",
      content: {
        'application/json': {
          schema: z.array(TagMarshallerWrappedSchema).openapi({ title: 'ArrayOfTags' }),
        },
      },
    },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesTagsIdSyndicateFormatRoute = createRoute({
  method: 'get',
  path: '/resources/tags/{id}/syndicate.{format}',
  tags: ['tags'],
  summary: 'Get MediaItems for Tag',
  description: 'MediaItem',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
      format: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      displayMethod: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Method used to render an html request. Accepts one: [mv, list, feed]',
            explode: false,
            in: 'query',
            name: 'displayMethod',
            required: false,
            schema: { format: '', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Renders the list of MediaItems associated with the Tag identified by the 'id'.",
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})

export const getResourcesUserMediaListsIdJsonRoute = createRoute({
  method: 'get',
  path: '/resources/userMediaLists/{id}.json',
  tags: ['userMediaLists'],
  summary: 'Get UserMediaList by ID',
  description: 'Get a specific user media list.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The id of the record to look up',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      displayMethod: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Method used to render an html request. Accepts one: [mv, list, feed]',
            explode: false,
            in: 'query',
            name: 'displayMethod',
            required: false,
            schema: { format: 'int64', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Get a specific user media list by 'id'.",
      content: {
        'application/json': {
          schema: z.array(MediaItemWrappedSchema).openapi({ title: 'ArrayOfMediaItems' }),
        },
      },
    },
    400: { description: 'Invalid ID' },
    500: { description: 'Internal Server Error' },
  },
})
