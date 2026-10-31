import { createRoute, z } from '@hono/zod-openapi'

const AbuseTypeSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AbuseType')

const EntitySchema = z
  .object({
    id: z.string().exactOptional(),
    typeId: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Entity')

const RelatedEntitySchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RelatedEntity')

const AbuseReportSchema = z
  .object({
    abuseTypes: z.array(AbuseTypeSchema).exactOptional(),
    description: z.string().exactOptional(),
    relatedEntities: z.array(RelatedEntitySchema).exactOptional(),
    subject: EntitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AbuseReport')

const AccessPolicySchema = z
  .object({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The value of allowed indicates whether the access to the policy is allowed or denied by default.',
      }),
    exception: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of region codes that identify countries where the default policy do not apply.',
      }),
  })
  .openapi({ description: 'Rights management policy for YouTube resources.', required: [] })
  .openapi('AccessPolicy')

const ResourceIdSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'The type of the API resource.' }),
    playlistId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.',
      }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.',
      }),
  })
  .openapi({
    description: 'A resource id is a generic reference that points to another YouTube resource.',
    required: [],
  })
  .openapi('ResourceId')

const ActivityContentDetailsBulletinSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the resource associated with a bulletin post. @mutable youtube.activities.insert',
    }),
  })
  .openapi({ description: 'Details about a channel bulletin post.', required: [] })
  .openapi('ActivityContentDetailsBulletin')

const ActivityContentDetailsChannelItemSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the resource that was added to the channel.',
    }),
  })
  .openapi({ description: 'Details about a resource which was added to a channel.', required: [] })
  .openapi('ActivityContentDetailsChannelItem')

const ActivityContentDetailsCommentSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the resource associated with the comment.',
    }),
  })
  .openapi({ description: 'Information about a resource that received a comment.', required: [] })
  .openapi('ActivityContentDetailsComment')

const ActivityContentDetailsFavoriteSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the resource that was marked as a favorite.',
    }),
  })
  .openapi({
    description: 'Information about a video that was marked as a favorite video.',
    required: [],
  })
  .openapi('ActivityContentDetailsFavorite')

const ActivityContentDetailsLikeSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description: 'The resourceId object contains information that identifies the rated resource.',
    }),
  })
  .openapi({
    description: 'Information about a resource that received a positive (like) rating.',
    required: [],
  })
  .openapi('ActivityContentDetailsLike')

const ActivityContentDetailsPlaylistItemSchema = z
  .object({
    playlistId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value that YouTube uses to uniquely identify the playlist.' }),
    playlistItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the item within the playlist.' }),
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information about the resource that was added to the playlist.',
    }),
  })
  .openapi({ description: 'Information about a new playlist item.', required: [] })
  .openapi('ActivityContentDetailsPlaylistItem')

const ActivityContentDetailsPromotedItemSchema = z
  .object({
    adTag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL the client should fetch to request a promoted item.' }),
    clickTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL the client should ping to indicate that the user clicked through on this promoted item.',
      }),
    creativeViewUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL the client should ping to indicate that the user was shown this promoted item.',
      }),
    ctaType: z
      .enum(['ctaTypeUnspecified', 'visitAdvertiserSite'])
      .exactOptional()
      .openapi({
        description:
          'The type of call-to-action, a message to the user indicating action that can be taken.',
      }),
    customCtaButtonText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The custom call-to-action button text. If specified, it will override the default button text for the cta_type.',
      }),
    descriptionText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text description to accompany the promoted item.' }),
    destinationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL the client should direct the user to, if the user chooses to visit the advertiser's website.",
      }),
    forecastingUrl: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.',
      }),
    impressionUrl: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.',
      }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube uses to uniquely identify the promoted video.',
      }),
  })
  .openapi({ description: 'Details about a resource which is being promoted.', required: [] })
  .openapi('ActivityContentDetailsPromotedItem')

const ActivityContentDetailsRecommendationSchema = z
  .object({
    reason: z
      .enum(['reasonUnspecified', 'videoFavorited', 'videoLiked', 'videoWatched'])
      .exactOptional()
      .openapi({ description: 'The reason that the resource is recommended to the user.' }),
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the recommended resource.',
    }),
    seedResourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The seedResourceId object contains information about the resource that caused the recommendation.',
    }),
  })
  .openapi({ description: 'Information that identifies the recommended resource.', required: [] })
  .openapi('ActivityContentDetailsRecommendation')

const ActivityContentDetailsSocialSchema = z
  .object({
    author: z
      .string()
      .exactOptional()
      .openapi({ description: 'The author of the social network post.' }),
    imageUrl: z.string().exactOptional().openapi({ description: "An image of the post's author." }),
    referenceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the social network post.' }),
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object encapsulates information that identifies the resource associated with a social network post.',
    }),
    type: z
      .enum(['unspecified', 'googlePlus', 'facebook', 'twitter'])
      .exactOptional()
      .openapi({ description: 'The name of the social network.' }),
  })
  .openapi({ description: 'Details about a social network post.', required: [] })
  .openapi('ActivityContentDetailsSocial')

const ActivityContentDetailsSubscriptionSchema = z
  .object({
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The resourceId object contains information that identifies the resource that the user subscribed to.',
    }),
  })
  .openapi({ description: 'Information about a channel that a user subscribed to.', required: [] })
  .openapi('ActivityContentDetailsSubscription')

const ActivityContentDetailsUploadSchema = z
  .object({
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube uses to uniquely identify the uploaded video.',
      }),
  })
  .openapi({ description: 'Information about the uploaded video.', required: [] })
  .openapi('ActivityContentDetailsUpload')

const ActivityContentDetailsSchema = z
  .object({
    bulletin: ActivityContentDetailsBulletinSchema.exactOptional().openapi({
      description:
        'The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.',
    }),
    channelItem: ActivityContentDetailsChannelItemSchema.exactOptional().openapi({
      description:
        'The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem.',
    }),
    comment: ActivityContentDetailsCommentSchema.exactOptional().openapi({
      description:
        'The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.',
    }),
    favorite: ActivityContentDetailsFavoriteSchema.exactOptional().openapi({
      description:
        'The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.',
    }),
    like: ActivityContentDetailsLikeSchema.exactOptional().openapi({
      description:
        'The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.',
    }),
    playlistItem: ActivityContentDetailsPlaylistItemSchema.exactOptional().openapi({
      description:
        'The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.',
    }),
    promotedItem: ActivityContentDetailsPromotedItemSchema.exactOptional().openapi({
      description:
        'The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.',
    }),
    recommendation: ActivityContentDetailsRecommendationSchema.exactOptional().openapi({
      description:
        'The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.',
    }),
    social: ActivityContentDetailsSocialSchema.exactOptional().openapi({
      description:
        'The social object contains details about a social network post. This property is only present if the snippet.type is social.',
    }),
    subscription: ActivityContentDetailsSubscriptionSchema.exactOptional().openapi({
      description:
        'The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.',
    }),
    upload: ActivityContentDetailsUploadSchema.exactOptional().openapi({
      description:
        'The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.',
    }),
  })
  .openapi({
    description:
      'Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.',
    required: [],
  })
  .openapi('ActivityContentDetails')

const ThumbnailSchema = z
  .object({
    height: z
      .uint32()
      .exactOptional()
      .openapi({ description: '(Optional) Height of the thumbnail image.' }),
    url: z.string().exactOptional().openapi({ description: "The thumbnail image's URL." }),
    width: z
      .uint32()
      .exactOptional()
      .openapi({ description: '(Optional) Width of the thumbnail image.' }),
  })
  .openapi({
    description: 'A thumbnail is an image representing a YouTube resource.',
    required: [],
  })
  .openapi('Thumbnail')

const ThumbnailDetailsSchema = z
  .object({
    high: ThumbnailSchema.exactOptional().openapi({
      description: 'The high quality image for this resource.',
    }),
    maxres: ThumbnailSchema.exactOptional().openapi({
      description: 'The maximum resolution quality image for this resource.',
    }),
    medium: ThumbnailSchema.exactOptional().openapi({
      description: 'The medium quality image for this resource.',
    }),
    standard: ThumbnailSchema.exactOptional().openapi({
      description: 'The standard quality image for this resource.',
    }),
  })
  .openapi({
    description: 'Internal representation of thumbnails for a YouTube resource.',
    required: [],
  })
  .openapi('ThumbnailDetails')

const ActivitySnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel associated with the activity.',
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel title for the channel responsible for this activity' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of the resource primarily associated with the activity. @mutable youtube.activities.insert',
      }),
    groupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.",
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the video was uploaded.' }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the resource primarily associated with the activity.',
      }),
    type: z
      .enum([
        'typeUnspecified',
        'upload',
        'like',
        'favorite',
        'comment',
        'subscription',
        'playlistItem',
        'recommendation',
        'bulletin',
        'social',
        'channelItem',
        'promotedItem',
      ])
      .exactOptional()
      .openapi({ description: 'The type of activity that the resource describes.' }),
  })
  .openapi({
    description:
      'Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12',
    required: [],
  })
  .openapi('ActivitySnippet')

const ActivitySchema = z
  .object({
    contentDetails: ActivityContentDetailsSchema.exactOptional().openapi({
      description:
        "The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video.",
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the activity.' }),
    kind: z
      .string()
      .default('youtube#activity')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#activity".',
      }),
    snippet: ActivitySnippetSchema.exactOptional().openapi({
      description:
        "The snippet object contains basic details about the activity, including the activity's type and group ID.",
    }),
  })
  .openapi({
    description:
      'An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.',
    required: [],
  })
  .openapi('Activity')

const PageInfoSchema = z
  .object({
    resultsPerPage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of results included in the API response.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of results in the result set.' }),
  })
  .openapi({
    description:
      'Paging details for lists of resources, including total number of items available and number of resources returned in a single page.',
    required: [],
  })
  .openapi('PageInfo')

const TokenPaginationSchema = z
  .object({})
  .openapi({ description: 'Stub token pagination template to suppress results.' })
  .openapi('TokenPagination')

const ActivityListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z.array(ActivitySchema).exactOptional(),
    kind: z
      .string()
      .default('youtube#activityListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('ActivityListResponse')

const CaptionSnippetSchema = z
  .object({
    audioTrackType: z
      .enum(['unknown', 'primary', 'commentary', 'descriptive'])
      .exactOptional()
      .openapi({ description: 'The type of audio track associated with the caption track.' }),
    failureReason: z
      .enum(['unknownFormat', 'unsupportedFormat', 'processingFailed'])
      .exactOptional()
      .openapi({
        description:
          "The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.",
      }),
    isAutoSynced: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.',
      }),
    isCC: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.',
      }),
    isDraft: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update',
      }),
    isEasyReader: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.',
      }),
    isLarge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the caption track uses large text for the vision-impaired. The default value is false.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the caption track. The property value is a BCP-47 language tag.',
      }),
    lastUpdated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the caption track was last updated.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the caption track. The name is intended to be visible to the user as an option during playback.',
      }),
    status: z
      .enum(['serving', 'syncing', 'failed'])
      .exactOptional()
      .openapi({ description: "The caption track's status." }),
    trackKind: z
      .enum(['standard', 'ASR', 'forced'])
      .exactOptional()
      .openapi({ description: "The caption track's type." }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert',
      }),
  })
  .openapi({
    description: 'Basic details about a caption track, such as its language and name.',
    required: [],
  })
  .openapi('CaptionSnippet')

const CaptionSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the caption track.' }),
    kind: z
      .string()
      .default('youtube#caption')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#caption".',
      }),
    snippet: CaptionSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the caption.',
    }),
  })
  .openapi({
    description:
      'A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.',
    required: [],
  })
  .openapi('Caption')

const CaptionListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(CaptionSchema)
      .exactOptional()
      .openapi({ description: 'A list of captions that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#captionListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('CaptionListResponse')

const IngestionInfoSchema = z
  .object({
    backupIngestionAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.',
      }),
    ingestionAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* ',
      }),
    rtmpsBackupIngestionAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.',
      }),
    rtmpsIngestionAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.',
      }),
    streamName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The stream name that YouTube assigns to the video stream.' }),
  })
  .openapi({
    description: 'Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.',
    required: [],
  })
  .openapi('IngestionInfo')

const CdnSettingsSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({ description: 'The format of the video stream that you are sending to Youtube. ' }),
    frameRate: z
      .enum(['30fps', '60fps', 'variable'])
      .exactOptional()
      .openapi({ description: 'The frame rate of the inbound video data.' }),
    ingestionInfo: IngestionInfoSchema.exactOptional().openapi({
      description:
        'The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.',
    }),
    ingestionType: z
      .enum(['rtmp', 'dash', 'webrtc', 'hls'])
      .exactOptional()
      .openapi({ description: ' The method or protocol used to transmit the video stream.' }),
    resolution: z
      .enum(['240p', '360p', '480p', '720p', '1080p', '1440p', '2160p', 'variable'])
      .exactOptional()
      .openapi({ description: 'The resolution of the inbound video data.' }),
  })
  .openapi({ description: 'Brief description of the live stream cdn settings.', required: [] })
  .openapi('CdnSettings')

const ChannelAuditDetailsSchema = z
  .object({
    communityGuidelinesGoodStanding: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the channel respects the community guidelines.' }),
    contentIdClaimsGoodStanding: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the channel has any unresolved claims.' }),
    copyrightStrikesGoodStanding: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the channel has any copyright strikes.' }),
  })
  .openapi({
    description:
      'The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.',
    required: [],
  })
  .openapi('ChannelAuditDetails')

const ChannelSettingsSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'The country of the channel.' }),
    defaultLanguage: z.string().exactOptional(),
    defaultTab: z
      .string()
      .exactOptional()
      .openapi({ description: 'Which content tab users should see when viewing the channel.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the channel description.' }),
    featuredChannelsTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the featured channels tab.' }),
    featuredChannelsUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of featured channels.' }),
    keywords: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lists keywords associated with the channel, comma-separated.' }),
    moderateComments: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.',
      }),
    profileColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'A prominent color that can be rendered on this channel page.' }),
    showBrowseView: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the tab to browse the videos should be displayed.' }),
    showRelatedChannels: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether related channels should be proposed.' }),
    title: z.string().exactOptional().openapi({ description: 'Specifies the channel title.' }),
    trackingAnalyticsAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID for a Google Analytics account to track and measure traffic to the channels.',
      }),
    unsubscribedTrailer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The trailer of the channel, for users that are not subscribers.' }),
  })
  .openapi({ description: 'Branding properties for the channel view.', required: [] })
  .openapi('ChannelSettings')

const PropertyValueSchema = z
  .object({
    property: z.string().exactOptional().openapi({ description: 'A property.' }),
    value: z.string().exactOptional().openapi({ description: "The property's value." }),
  })
  .openapi({ description: 'A pair Property / Value.', required: [] })
  .openapi('PropertyValue')

const LanguageTagSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LanguageTag')

const LocalizedStringSchema = z
  .object({ language: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalizedString')

const LocalizedPropertySchema = z
  .object({
    defaultLanguage: LanguageTagSchema.exactOptional().openapi({
      description: 'The language of the default property.',
    }),
    localized: z.array(LocalizedStringSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizedProperty')

const ImageSettingsSchema = z
  .object({
    backgroundImageUrl: LocalizedPropertySchema.exactOptional().openapi({
      description:
        'The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.',
    }),
    bannerExternalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is generated when a ChannelBanner.Insert request has succeeded for the given channel.',
      }),
    bannerImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Desktop size (1060x175).' }),
    bannerMobileExtraHdImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Mobile size high resolution (1440x395).' }),
    bannerMobileHdImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Mobile size high resolution (1280x360).' }),
    bannerMobileImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Mobile size (640x175).' }),
    bannerMobileLowImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Mobile size low resolution (320x88).' }),
    bannerMobileMediumHdImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Mobile size medium/high resolution (960x263).' }),
    bannerTabletExtraHdImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Tablet size extra high resolution (2560x424).' }),
    bannerTabletHdImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Tablet size high resolution (2276x377).' }),
    bannerTabletImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Tablet size (1707x283).' }),
    bannerTabletLowImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. Tablet size low resolution (1138x188).' }),
    bannerTvHighImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. TV size high resolution (1920x1080).' }),
    bannerTvImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. TV size extra high resolution (2120x1192).' }),
    bannerTvLowImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. TV size low resolution (854x480).' }),
    bannerTvMediumImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Banner image. TV size medium resolution (1280x720).' }),
    largeBrandedBannerImageImapScript: LocalizedPropertySchema.exactOptional().openapi({
      description: 'The image map script for the large banner image.',
    }),
    largeBrandedBannerImageUrl: LocalizedPropertySchema.exactOptional().openapi({
      description:
        'The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.',
    }),
    smallBrandedBannerImageImapScript: LocalizedPropertySchema.exactOptional().openapi({
      description: 'The image map script for the small banner image.',
    }),
    smallBrandedBannerImageUrl: LocalizedPropertySchema.exactOptional().openapi({
      description:
        'The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page. The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.',
    }),
    trackingImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.',
      }),
    watchIconImageUrl: z.string().exactOptional(),
  })
  .openapi({
    description: 'Branding properties for images associated with the channel.',
    required: [],
  })
  .openapi('ImageSettings')

const WatchSettingsSchema = z
  .object({
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({ description: "The text color for the video watch page's branded area." }),
    featuredPlaylistId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID that uniquely identifies a playlist that displays next to the video player.',
      }),
    textColor: z
      .string()
      .exactOptional()
      .openapi({ description: "The background color for the video watch page's branded area." }),
  })
  .openapi({ description: 'Branding properties for the watch. All deprecated.', required: [] })
  .openapi('WatchSettings')

const ChannelBrandingSettingsSchema = z
  .object({
    channel: ChannelSettingsSchema.exactOptional().openapi({
      description: 'Branding properties for the channel view.',
    }),
    hints: z
      .array(PropertyValueSchema)
      .exactOptional()
      .openapi({ description: 'Additional experimental branding properties.' }),
    image: ImageSettingsSchema.exactOptional().openapi({
      description: 'Branding properties for branding images.',
    }),
    watch: WatchSettingsSchema.exactOptional().openapi({
      description: 'Branding properties for the watch page.',
    }),
  })
  .openapi({ description: 'Branding properties of a YouTube channel.', required: [] })
  .openapi('ChannelBrandingSettings')

const ChannelContentDetailsSchema = z
  .object({
    relatedPlaylists: z
      .object({
        favorites: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.',
          }),
        likes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.',
          }),
        uploads: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.',
          }),
        watchHistory: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.',
          }),
        watchLater: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Details about the content of a channel.', required: [] })
  .openapi('ChannelContentDetails')

const ChannelContentOwnerDetailsSchema = z
  .object({
    contentOwner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the content owner linked to the channel.' }),
    timeLinked: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the channel was linked to the content owner.',
      }),
  })
  .openapi({
    description:
      'The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.',
    required: [],
  })
  .openapi('ChannelContentOwnerDetails')

const ChannelConversionPingSchema = z
  .object({
    context: z
      .enum(['subscribe', 'unsubscribe', 'cview'])
      .exactOptional()
      .openapi({ description: 'Defines the context of the ping.' }),
    conversionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.",
      }),
  })
  .openapi({
    description:
      'Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.',
    required: [],
  })
  .openapi('ChannelConversionPing')

const ChannelConversionPingsSchema = z
  .object({
    pings: z
      .array(ChannelConversionPingSchema)
      .exactOptional()
      .openapi({
        description:
          'Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.',
      }),
  })
  .openapi({
    description:
      'The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.',
    required: [],
  })
  .openapi('ChannelConversionPings')

const ChannelLocalizationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The localized strings for channel's description." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "The localized strings for channel's title." }),
  })
  .openapi({ description: 'Channel localization setting', required: [] })
  .openapi('ChannelLocalization')

const ChannelSnippetSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'The country of the channel.' }),
    customUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom url of the channel.' }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: "The language of the channel's default title and description." }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the channel.' }),
    localized: ChannelLocalizationSchema.exactOptional().openapi({
      description: 'Localized title and description, read-only.',
    }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the channel was created.' }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the http domain instead of the https domain in a URL returned in an API response. Beginning in July 2018, channel thumbnail URLs will only be available in the https domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the http domain. Thumbnail images might be empty for newly created channels and might take up to one day to populate.',
    }),
    title: z.string().exactOptional().openapi({ description: "The channel's title." }),
  })
  .openapi({
    description: 'Basic details about a channel, including title, description and thumbnails.',
    required: [],
  })
  .openapi('ChannelSnippet')

const ChannelStatisticsSchema = z
  .object({
    commentCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of comments for the channel.' }),
    hiddenSubscriberCount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the number of subscribers is shown for this user.' }),
    subscriberCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of subscribers that the channel has.' }),
    videoCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of videos uploaded to the channel.' }),
    viewCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of times the channel has been viewed.' }),
  })
  .openapi({
    description:
      'Statistics about a channel: number of subscribers, number of videos in the channel, etc.',
    required: [],
  })
  .openapi('ChannelStatistics')

const ChannelStatusSchema = z
  .object({
    isLinked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.",
      }),
    longUploadsStatus: z
      .enum(['longUploadsUnspecified', 'allowed', 'eligible', 'disallowed'])
      .exactOptional()
      .openapi({
        description:
          'The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.',
      }),
    madeForKids: z.boolean().exactOptional(),
    privacyStatus: z
      .enum(['public', 'unlisted', 'private'])
      .exactOptional()
      .openapi({ description: 'Privacy status of the channel.' }),
    selfDeclaredMadeForKids: z.boolean().exactOptional(),
  })
  .openapi({ description: 'JSON template for the status part of a channel.', required: [] })
  .openapi('ChannelStatus')

const ChannelTopicDetailsSchema = z
  .object({
    topicCategories: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "A list of Wikipedia URLs that describe the channel's content." }),
    topicIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.',
      }),
  })
  .openapi({ description: 'Freebase topic information related to the channel.', required: [] })
  .openapi('ChannelTopicDetails')

const ChannelSchema = z
  .object({
    auditDetails: ChannelAuditDetailsSchema.exactOptional().openapi({
      description:
        'The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.',
    }),
    brandingSettings: ChannelBrandingSettingsSchema.exactOptional().openapi({
      description:
        'The brandingSettings object encapsulates information about the branding of the channel.',
    }),
    contentDetails: ChannelContentDetailsSchema.exactOptional().openapi({
      description:
        "The contentDetails object encapsulates information about the channel's content.",
    }),
    contentOwnerDetails: ChannelContentOwnerDetailsSchema.exactOptional().openapi({
      description:
        'The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.',
    }),
    conversionPings: ChannelConversionPingsSchema.exactOptional().openapi({
      description:
        'The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the channel.' }),
    kind: z
      .string()
      .default('youtube#channel')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#channel".',
      }),
    localizations: z
      .record(z.string(), ChannelLocalizationSchema)
      .exactOptional()
      .openapi({ description: 'Localizations for different languages' }),
    snippet: ChannelSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.',
    }),
    statistics: ChannelStatisticsSchema.exactOptional().openapi({
      description: 'The statistics object encapsulates statistics for the channel.',
    }),
    status: ChannelStatusSchema.exactOptional().openapi({
      description:
        'The status object encapsulates information about the privacy status of the channel.',
    }),
    topicDetails: ChannelTopicDetailsSchema.exactOptional().openapi({
      description:
        'The topicDetails object encapsulates information about Freebase topics associated with the channel.',
    }),
  })
  .openapi({
    description: 'A *channel* resource contains information about a YouTube channel.',
    required: [],
  })
  .openapi('Channel')

const ChannelBannerResourceSchema = z
  .object({
    etag: z.string().exactOptional(),
    kind: z
      .string()
      .default('youtube#channelBannerResource')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".',
      }),
    url: z.string().exactOptional().openapi({ description: 'The URL of this banner image.' }),
  })
  .openapi({
    description: 'A channel banner returned as the response to a channel_banner.insert call.',
    required: [],
  })
  .openapi('ChannelBannerResource')

const ChannelListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z.array(ChannelSchema).exactOptional(),
    kind: z
      .string()
      .default('youtube#channelListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelListResponse')

const ChannelProfileDetailsSchema = z
  .object({
    channelId: z.string().exactOptional().openapi({ description: 'The YouTube channel ID.' }),
    channelUrl: z.string().exactOptional().openapi({ description: "The channel's URL." }),
    displayName: z.string().exactOptional().openapi({ description: "The channel's display name." }),
    profileImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The channels's avatar URL." }),
  })
  .openapi({ required: [] })
  .openapi('ChannelProfileDetails')

const ChannelSectionContentDetailsSchema = z
  .object({
    channels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The channel ids for type multiple_channels.' }),
    playlists: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.',
      }),
  })
  .openapi({
    description: 'Details about a channelsection, including playlists and channels.',
    required: [],
  })
  .openapi('ChannelSectionContentDetails')

const ChannelSectionLocalizationSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "The localized strings for channel section's title." }),
  })
  .openapi({ description: 'ChannelSection localization setting', required: [] })
  .openapi('ChannelSectionLocalization')

const ChannelSectionSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel that published the channel section.',
      }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description: "The language of the channel section's default title and description.",
      }),
    localized: ChannelSectionLocalizationSchema.exactOptional().openapi({
      description: 'Localized title, read-only.',
    }),
    position: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The position of the channel section in the channel.' }),
    style: z
      .enum(['channelsectionStyleUnspecified', 'horizontalRow', 'verticalList'])
      .exactOptional()
      .openapi({ description: 'The style of the channel section.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: "The channel section's title for multiple_playlists and multiple_channels.",
      }),
    type: z
      .enum([
        'channelsectionTypeUndefined',
        'singlePlaylist',
        'multiplePlaylists',
        'popularUploads',
        'recentUploads',
        'likes',
        'allPlaylists',
        'likedPlaylists',
        'recentPosts',
        'recentActivity',
        'liveEvents',
        'upcomingEvents',
        'completedEvents',
        'multipleChannels',
        'postedVideos',
        'postedPlaylists',
        'subscriptions',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the channel section.' }),
  })
  .openapi({
    description: 'Basic details about a channel section, including title, style and position.',
    required: [],
  })
  .openapi('ChannelSectionSnippet')

const ChannelSectionTargetingSchema = z
  .object({
    countries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The country the channel section is targeting.' }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The language the channel section is targeting.' }),
    regions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The region the channel section is targeting.' }),
  })
  .openapi({ description: 'ChannelSection targeting setting.', required: [] })
  .openapi('ChannelSectionTargeting')

const ChannelSectionSchema = z
  .object({
    contentDetails: ChannelSectionContentDetailsSchema.exactOptional().openapi({
      description:
        'The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube uses to uniquely identify the channel section.',
      }),
    kind: z
      .string()
      .default('youtube#channelSection')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".',
      }),
    localizations: z
      .record(z.string(), ChannelSectionLocalizationSchema)
      .exactOptional()
      .openapi({ description: 'Localizations for different languages' }),
    snippet: ChannelSectionSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the channel section, such as its type, style and title.',
    }),
    targeting: ChannelSectionTargetingSchema.exactOptional().openapi({
      description:
        'The targeting object contains basic targeting settings about the channel section.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ChannelSection')

const ChannelSectionListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(ChannelSectionSchema)
      .exactOptional()
      .openapi({ description: 'A list of ChannelSections that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#channelSectionListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelSectionListResponse')

const ChannelToStoreLinkDetailsSchema = z
  .object({
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Google Merchant Center id of the store.' }),
    storeName: z.string().exactOptional().openapi({ description: 'Name of the store.' }),
    storeUrl: z.string().exactOptional().openapi({ description: 'Landing page of the store.' }),
  })
  .openapi({
    description:
      'Information specific to a store on a merchandising platform linked to a YouTube channel.',
    required: [],
  })
  .openapi('ChannelToStoreLinkDetails')

const CommentSnippetAuthorChannelIdSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({ description: "The id of the author's YouTube channel, if any.", required: [] })
  .openapi('CommentSnippetAuthorChannelId')

const CommentSnippetSchema = z
  .object({
    authorChannelId: CommentSnippetAuthorChannelIdSchema.exactOptional(),
    authorChannelUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "Link to the author's YouTube channel, if any." }),
    authorDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user who posted the comment.' }),
    authorProfileImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for the avatar of the user who posted the comment.' }),
    canRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the current viewer can rate this comment.' }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.",
      }),
    likeCount: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The total number of likes this comment has received.' }),
    moderationStatus: z
      .enum(['published', 'heldForReview', 'likelySpam', 'rejected'])
      .exactOptional()
      .openapi({
        description:
          "The comment's moderation status. Will not be set if the comments were requested through the id filter.",
      }),
    parentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id of the parent comment, only set for replies.' }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the comment was originally published.' }),
    textDisplay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.",
      }),
    textOriginal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.",
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the comment was last updated.' }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the video the comment refers to, if any.' }),
    viewerRating: z
      .enum(['none', 'like', 'dislike'])
      .exactOptional()
      .openapi({
        description:
          'The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.',
      }),
  })
  .openapi({
    description: 'Basic details about a comment, such as its author and text.',
    required: [],
  })
  .openapi('CommentSnippet')

const CommentSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the comment.' }),
    kind: z
      .string()
      .default('youtube#comment')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#comment".',
      }),
    snippet: CommentSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the comment.',
    }),
  })
  .openapi({ description: 'A *comment* represents a single YouTube comment.', required: [] })
  .openapi('Comment')

const CommentListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({ description: 'A list of comments that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#commentListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('CommentListResponse')

const CommentThreadRepliesSchema = z
  .object({
    comments: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({
        description:
          'A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.',
      }),
  })
  .openapi({
    description: 'Comments written in (direct or indirect) reply to the top level comment.',
    required: [],
  })
  .openapi('CommentThreadReplies')

const CommentThreadSnippetSchema = z
  .object({
    canReply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.',
      }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself.",
      }),
    isPublic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the thread (and therefore all its comments) is visible to all YouTube users.',
      }),
    topLevelComment: CommentSchema.exactOptional().openapi({
      description: 'The top level comment of this thread.',
    }),
    totalReplyCount: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'The total number of replies (not including the top level comment).',
      }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.',
      }),
  })
  .openapi({ description: 'Basic details about a comment thread.', required: [] })
  .openapi('CommentThreadSnippet')

const CommentThreadSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube uses to uniquely identify the comment thread.',
      }),
    kind: z
      .string()
      .default('youtube#commentThread')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".',
      }),
    replies: CommentThreadRepliesSchema.exactOptional().openapi({
      description:
        'The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.',
    }),
    snippet: CommentThreadSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the comment thread and also the top level comment.',
    }),
  })
  .openapi({
    description:
      'A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.',
    required: [],
  })
  .openapi('CommentThread')

const CommentThreadListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(CommentThreadSchema)
      .exactOptional()
      .openapi({ description: 'A list of comment threads that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#commentThreadListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('CommentThreadListResponse')

const ContentRatingSchema = z
  .object({
    acbRating: z
      .enum([
        'acbUnspecified',
        'acbE',
        'acbP',
        'acbC',
        'acbG',
        'acbPg',
        'acbM',
        'acbMa15plus',
        'acbR18plus',
        'acbUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.",
      }),
    agcomRating: z
      .enum(['agcomUnspecified', 'agcomT', 'agcomVm14', 'agcomVm18', 'agcomUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).",
      }),
    anatelRating: z
      .enum([
        'anatelUnspecified',
        'anatelF',
        'anatelI',
        'anatelI7',
        'anatelI10',
        'anatelI12',
        'anatelR',
        'anatelA',
        'anatelUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.",
      }),
    bbfcRating: z
      .enum([
        'bbfcUnspecified',
        'bbfcU',
        'bbfcPg',
        'bbfc12a',
        'bbfc12',
        'bbfc15',
        'bbfc18',
        'bbfcR18',
        'bbfcUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's British Board of Film Classification (BBFC) rating." }),
    bfvcRating: z
      .enum([
        'bfvcUnspecified',
        'bfvcG',
        'bfvcE',
        'bfvc13',
        'bfvc15',
        'bfvc18',
        'bfvc20',
        'bfvcB',
        'bfvcUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's rating from Thailand's Board of Film and Video Censors.",
      }),
    bmukkRating: z
      .enum([
        'bmukkUnspecified',
        'bmukkAa',
        'bmukk6',
        'bmukk8',
        'bmukk10',
        'bmukk12',
        'bmukk14',
        'bmukk16',
        'bmukkUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).",
      }),
    catvRating: z
      .enum([
        'catvUnspecified',
        'catvC',
        'catvC8',
        'catvG',
        'catvPg',
        'catv14plus',
        'catv18plus',
        'catvUnrated',
        'catvE',
      ])
      .exactOptional()
      .openapi({
        description:
          "Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.",
      }),
    catvfrRating: z
      .enum([
        'catvfrUnspecified',
        'catvfrG',
        'catvfr8plus',
        'catvfr13plus',
        'catvfr16plus',
        'catvfr18plus',
        'catvfrUnrated',
        'catvfrE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.",
      }),
    cbfcRating: z
      .enum([
        'cbfcUnspecified',
        'cbfcU',
        'cbfcUA',
        'cbfcUA7plus',
        'cbfcUA13plus',
        'cbfcUA16plus',
        'cbfcA',
        'cbfcS',
        'cbfcUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's Central Board of Film Certification (CBFC - India) rating.",
      }),
    cccRating: z
      .enum(['cccUnspecified', 'cccTe', 'ccc6', 'ccc14', 'ccc18', 'ccc18v', 'ccc18s', 'cccUnrated'])
      .exactOptional()
      .openapi({
        description: "The video's Consejo de Calificación Cinematográfica (Chile) rating.",
      }),
    cceRating: z
      .enum([
        'cceUnspecified',
        'cceM4',
        'cceM6',
        'cceM12',
        'cceM16',
        'cceM18',
        'cceUnrated',
        'cceM14',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Portugal's Comissão de Classificação de Espect´culos.",
      }),
    chfilmRating: z
      .enum([
        'chfilmUnspecified',
        'chfilm0',
        'chfilm6',
        'chfilm12',
        'chfilm16',
        'chfilm18',
        'chfilmUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Switzerland." }),
    chvrsRating: z
      .enum([
        'chvrsUnspecified',
        'chvrsG',
        'chvrsPg',
        'chvrs14a',
        'chvrs18a',
        'chvrsR',
        'chvrsE',
        'chvrsUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's Canadian Home Video Rating System (CHVRS) rating." }),
    cicfRating: z
      .enum(['cicfUnspecified', 'cicfE', 'cicfKtEa', 'cicfKntEna', 'cicfUnrated'])
      .exactOptional()
      .openapi({
        description: "The video's rating from the Commission de Contrôle des Films (Belgium).",
      }),
    cnaRating: z
      .enum(['cnaUnspecified', 'cnaAp', 'cna12', 'cna15', 'cna18', 'cna18plus', 'cnaUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).",
      }),
    cncRating: z
      .enum([
        'cncUnspecified',
        'cncT',
        'cnc10',
        'cnc12',
        'cnc16',
        'cnc18',
        'cncE',
        'cncInterdiction',
        'cncUnrated',
      ])
      .exactOptional()
      .openapi({
        description: 'Rating system in France - Commission de classification cinematographique',
      }),
    csaRating: z
      .enum([
        'csaUnspecified',
        'csaT',
        'csa10',
        'csa12',
        'csa16',
        'csa18',
        'csaInterdiction',
        'csaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content.",
      }),
    cscfRating: z
      .enum([
        'cscfUnspecified',
        'cscfAl',
        'cscfA',
        'cscf6',
        'cscf9',
        'cscf12',
        'cscf16',
        'cscf18',
        'cscfUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).",
      }),
    czfilmRating: z
      .enum(['czfilmUnspecified', 'czfilmU', 'czfilm12', 'czfilm14', 'czfilm18', 'czfilmUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating in the Czech Republic." }),
    djctqRating: z
      .enum([
        'djctqUnspecified',
        'djctqL',
        'djctq10',
        'djctq12',
        'djctq14',
        'djctq16',
        'djctq18',
        'djctqEr',
        'djctqL10',
        'djctqL12',
        'djctqL14',
        'djctqL16',
        'djctqL18',
        'djctq1012',
        'djctq1014',
        'djctq1016',
        'djctq1018',
        'djctq1214',
        'djctq1216',
        'djctq1218',
        'djctq1416',
        'djctq1418',
        'djctq1618',
        'djctqUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.",
      }),
    djctqRatingReasons: z
      .array(
        z.enum([
          'djctqRatingReasonUnspecified',
          'djctqViolence',
          'djctqExtremeViolence',
          'djctqSexualContent',
          'djctqNudity',
          'djctqSex',
          'djctqExplicitSex',
          'djctqDrugs',
          'djctqLegalDrugs',
          'djctqIllegalDrugs',
          'djctqInappropriateLanguage',
          'djctqCriminalActs',
          'djctqImpactingContent',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Reasons that explain why the video received its DJCQT (Brazil) rating.',
      }),
    ecbmctRating: z
      .enum([
        'ecbmctUnspecified',
        'ecbmctG',
        'ecbmct7a',
        'ecbmct7plus',
        'ecbmct13a',
        'ecbmct13plus',
        'ecbmct15a',
        'ecbmct15plus',
        'ecbmct18plus',
        'ecbmctUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          'Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism',
      }),
    eefilmRating: z
      .enum([
        'eefilmUnspecified',
        'eefilmPere',
        'eefilmL',
        'eefilmMs6',
        'eefilmK6',
        'eefilmMs12',
        'eefilmK12',
        'eefilmK14',
        'eefilmK16',
        'eefilmUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Estonia." }),
    egfilmRating: z
      .enum(['egfilmUnspecified', 'egfilmGn', 'egfilm18', 'egfilmBn', 'egfilmUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating in Egypt." }),
    eirinRating: z
      .enum([
        'eirinUnspecified',
        'eirinG',
        'eirinPg12',
        'eirinR15plus',
        'eirinR18plus',
        'eirinUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's Eirin (映倫) rating. Eirin is the Japanese rating system.",
      }),
    fcbmRating: z
      .enum([
        'fcbmUnspecified',
        'fcbmU',
        'fcbmPg13',
        'fcbmP13',
        'fcbm18',
        'fcbm18sx',
        'fcbm18pa',
        'fcbm18sg',
        'fcbm18pl',
        'fcbmUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating from Malaysia's Film Censorship Board." }),
    fcoRating: z
      .enum(['fcoUnspecified', 'fcoI', 'fcoIia', 'fcoIib', 'fcoIi', 'fcoIii', 'fcoUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.",
      }),
    fmocRating: z
      .enum([
        'fmocUnspecified',
        'fmocU',
        'fmoc10',
        'fmoc12',
        'fmoc16',
        'fmoc18',
        'fmocE',
        'fmocUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          'This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.',
      }),
    fpbRating: z
      .enum([
        'fpbUnspecified',
        'fpbA',
        'fpbPg',
        'fpb79Pg',
        'fpb1012Pg',
        'fpb13',
        'fpb16',
        'fpb18',
        'fpbX18',
        'fpbXx',
        'fpbUnrated',
        'fpb10',
      ])
      .exactOptional()
      .openapi({
        description: "The video's rating from South Africa's Film and Publication Board.",
      }),
    fpbRatingReasons: z
      .array(
        z.enum([
          'fpbRatingReasonUnspecified',
          'fpbBlasphemy',
          'fpbLanguage',
          'fpbNudity',
          'fpbPrejudice',
          'fpbSex',
          'fpbViolence',
          'fpbDrugs',
          'fpbSexualViolence',
          'fpbHorror',
          'fpbCriminalTechniques',
          'fpbImitativeActsTechniques',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Reasons that explain why the video received its FPB (South Africa) rating.',
      }),
    fskRating: z
      .enum(['fskUnspecified', 'fsk0', 'fsk6', 'fsk12', 'fsk16', 'fsk18', 'fskUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.",
      }),
    grfilmRating: z
      .enum([
        'grfilmUnspecified',
        'grfilmK',
        'grfilmE',
        'grfilmK12',
        'grfilmK13',
        'grfilmK15',
        'grfilmK17',
        'grfilmK18',
        'grfilmUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Greece." }),
    icaaRating: z
      .enum([
        'icaaUnspecified',
        'icaaApta',
        'icaa7',
        'icaa12',
        'icaa13',
        'icaa16',
        'icaa18',
        'icaaX',
        'icaaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.",
      }),
    ifcoRating: z
      .enum([
        'ifcoUnspecified',
        'ifcoG',
        'ifcoPg',
        'ifco12',
        'ifco12a',
        'ifco15',
        'ifco15a',
        'ifco16',
        'ifco18',
        'ifcoUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.",
      }),
    ilfilmRating: z
      .enum([
        'ilfilmUnspecified',
        'ilfilmAa',
        'ilfilm12',
        'ilfilm14',
        'ilfilm16',
        'ilfilm18',
        'ilfilmUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Israel." }),
    incaaRating: z
      .enum([
        'incaaUnspecified',
        'incaaAtp',
        'incaaSam13',
        'incaaSam16',
        'incaaSam18',
        'incaaC',
        'incaaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.",
      }),
    kfcbRating: z
      .enum(['kfcbUnspecified', 'kfcbG', 'kfcbPg', 'kfcb16plus', 'kfcbR', 'kfcbUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating from the Kenya Film Classification Board." }),
    kijkwijzerRating: z
      .enum([
        'kijkwijzerUnspecified',
        'kijkwijzerAl',
        'kijkwijzer6',
        'kijkwijzer9',
        'kijkwijzer12',
        'kijkwijzer16',
        'kijkwijzer18',
        'kijkwijzerUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).",
      }),
    kmrbRating: z
      .enum([
        'kmrbUnspecified',
        'kmrbAll',
        'kmrb12plus',
        'kmrb15plus',
        'kmrbTeenr',
        'kmrbR',
        'kmrbUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.",
      }),
    lsfRating: z
      .enum([
        'lsfUnspecified',
        'lsfSu',
        'lsfA',
        'lsfBo',
        'lsf13',
        'lsfR',
        'lsf17',
        'lsfD',
        'lsf21',
        'lsfUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating from Indonesia's Lembaga Sensor Film." }),
    mccaaRating: z
      .enum([
        'mccaaUnspecified',
        'mccaaU',
        'mccaaPg',
        'mccaa12a',
        'mccaa12',
        'mccaa14',
        'mccaa15',
        'mccaa16',
        'mccaa18',
        'mccaaUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating from Malta's Film Age-Classification Board." }),
    mccypRating: z
      .enum(['mccypUnspecified', 'mccypA', 'mccyp7', 'mccyp11', 'mccyp15', 'mccypUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.",
      }),
    mcstRating: z
      .enum([
        'mcstUnspecified',
        'mcstP',
        'mcst0',
        'mcstC13',
        'mcstC16',
        'mcst16plus',
        'mcstC18',
        'mcstGPg',
        'mcstUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating system for Vietnam - MCST" }),
    mdaRating: z
      .enum([
        'mdaUnspecified',
        'mdaG',
        'mdaPg',
        'mdaPg13',
        'mdaNc16',
        'mdaM18',
        'mdaR21',
        'mdaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).",
      }),
    medietilsynetRating: z
      .enum([
        'medietilsynetUnspecified',
        'medietilsynetA',
        'medietilsynet6',
        'medietilsynet7',
        'medietilsynet9',
        'medietilsynet11',
        'medietilsynet12',
        'medietilsynet15',
        'medietilsynet18',
        'medietilsynetUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's rating from Medietilsynet, the Norwegian Media Authority.",
      }),
    mekuRating: z
      .enum(['mekuUnspecified', 'mekuS', 'meku7', 'meku12', 'meku16', 'meku18', 'mekuUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).",
      }),
    menaMpaaRating: z
      .enum([
        'menaMpaaUnspecified',
        'menaMpaaG',
        'menaMpaaPg',
        'menaMpaaPg13',
        'menaMpaaR',
        'menaMpaaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          'The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.',
      }),
    mibacRating: z
      .enum([
        'mibacUnspecified',
        'mibacT',
        'mibacVap',
        'mibacVm6',
        'mibacVm12',
        'mibacVm14',
        'mibacVm16',
        'mibacVm18',
        'mibacUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).",
      }),
    mocRating: z
      .enum([
        'mocUnspecified',
        'mocE',
        'mocT',
        'moc7',
        'moc12',
        'moc15',
        'moc18',
        'mocX',
        'mocBanned',
        'mocUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's Ministerio de Cultura (Colombia) rating." }),
    moctwRating: z
      .enum([
        'moctwUnspecified',
        'moctwG',
        'moctwP',
        'moctwPg',
        'moctwR',
        'moctwUnrated',
        'moctwR12',
        'moctwR15',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating from Taiwan's Ministry of Culture (文化部)." }),
    mpaaRating: z
      .enum([
        'mpaaUnspecified',
        'mpaaG',
        'mpaaPg',
        'mpaaPg13',
        'mpaaR',
        'mpaaNc17',
        'mpaaX',
        'mpaaUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's Motion Picture Association of America (MPAA) rating." }),
    mpaatRating: z
      .enum(['mpaatUnspecified', 'mpaatGb', 'mpaatRb'])
      .exactOptional()
      .openapi({
        description:
          'The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.',
      }),
    mtrcbRating: z
      .enum([
        'mtrcbUnspecified',
        'mtrcbG',
        'mtrcbPg',
        'mtrcbR13',
        'mtrcbR16',
        'mtrcbR18',
        'mtrcbX',
        'mtrcbUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Movie and Television Review and Classification Board (Philippines).",
      }),
    nbcRating: z
      .enum([
        'nbcUnspecified',
        'nbcG',
        'nbcPg',
        'nbc12plus',
        'nbc15plus',
        'nbc18plus',
        'nbc18plusr',
        'nbcPu',
        'nbcUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's rating from the Maldives National Bureau of Classification.",
      }),
    nbcplRating: z
      .enum([
        'nbcplUnspecified',
        'nbcplI',
        'nbcplIi',
        'nbcplIii',
        'nbcplIv',
        'nbcpl18plus',
        'nbcplUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Poland." }),
    nfrcRating: z
      .enum(['nfrcUnspecified', 'nfrcA', 'nfrcB', 'nfrcC', 'nfrcD', 'nfrcX', 'nfrcUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating from the Bulgarian National Film Center." }),
    nfvcbRating: z
      .enum([
        'nfvcbUnspecified',
        'nfvcbG',
        'nfvcbPg',
        'nfvcb12',
        'nfvcb12a',
        'nfvcb15',
        'nfvcb18',
        'nfvcbRe',
        'nfvcbUnrated',
      ])
      .exactOptional()
      .openapi({
        description: "The video's rating from Nigeria's National Film and Video Censors Board.",
      }),
    nkclvRating: z
      .enum([
        'nkclvUnspecified',
        'nkclvU',
        'nkclv7plus',
        'nkclv12plus',
        'nkclv16plus',
        'nkclv18plus',
        'nkclvUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).",
      }),
    nmcRating: z
      .enum([
        'nmcUnspecified',
        'nmcG',
        'nmcPg',
        'nmcPg13',
        'nmcPg15',
        'nmc15plus',
        'nmc18plus',
        'nmc18tc',
        'nmcUnrated',
      ])
      .exactOptional()
      .openapi({
        description: 'The National Media Council ratings system for United Arab Emirates.',
      }),
    oflcRating: z
      .enum([
        'oflcUnspecified',
        'oflcG',
        'oflcPg',
        'oflcM',
        'oflcR13',
        'oflcR15',
        'oflcR16',
        'oflcR18',
        'oflcUnrated',
        'oflcRp13',
        'oflcRp16',
        'oflcRp18',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.",
      }),
    pefilmRating: z
      .enum(['pefilmUnspecified', 'pefilmPt', 'pefilmPg', 'pefilm14', 'pefilm18', 'pefilmUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating in Peru." }),
    rcnofRating: z
      .enum([
        'rcnofUnspecified',
        'rcnofI',
        'rcnofIi',
        'rcnofIii',
        'rcnofIv',
        'rcnofV',
        'rcnofVi',
        'rcnofUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.",
      }),
    resorteviolenciaRating: z
      .enum([
        'resorteviolenciaUnspecified',
        'resorteviolenciaA',
        'resorteviolenciaB',
        'resorteviolenciaC',
        'resorteviolenciaD',
        'resorteviolenciaE',
        'resorteviolenciaUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Venezuela." }),
    rtcRating: z
      .enum(['rtcUnspecified', 'rtcAa', 'rtcA', 'rtcB', 'rtcB15', 'rtcC', 'rtcD', 'rtcUnrated'])
      .exactOptional()
      .openapi({
        description:
          "The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.",
      }),
    rteRating: z
      .enum(['rteUnspecified', 'rteGa', 'rteCh', 'rtePs', 'rteMa', 'rteUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating from Ireland's Raidió Teilifís Éireann." }),
    russiaRating: z
      .enum([
        'russiaUnspecified',
        'russia0',
        'russia6',
        'russia12',
        'russia16',
        'russia18',
        'russiaUnrated',
      ])
      .exactOptional()
      .openapi({
        description:
          "The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.",
      }),
    skfilmRating: z
      .enum(['skfilmUnspecified', 'skfilmG', 'skfilmP2', 'skfilmP5', 'skfilmP8', 'skfilmUnrated'])
      .exactOptional()
      .openapi({ description: "The video's rating in Slovakia." }),
    smaisRating: z
      .enum([
        'smaisUnspecified',
        'smaisL',
        'smais7',
        'smais12',
        'smais14',
        'smais16',
        'smais18',
        'smaisUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's rating in Iceland." }),
    smsaRating: z
      .enum(['smsaUnspecified', 'smsaA', 'smsa7', 'smsa11', 'smsa15', 'smsaUnrated'])
      .exactOptional()
      .openapi({
        description: "The video's rating from Statens medieråd (Sweden's National Media Council).",
      }),
    tvpgRating: z
      .enum([
        'tvpgUnspecified',
        'tvpgY',
        'tvpgY7',
        'tvpgY7Fv',
        'tvpgG',
        'tvpgPg',
        'pg14',
        'tvpgMa',
        'tvpgUnrated',
      ])
      .exactOptional()
      .openapi({ description: "The video's TV Parental Guidelines (TVPG) rating." }),
    ytRating: z
      .enum(['ytUnspecified', 'ytAgeRestricted'])
      .exactOptional()
      .openapi({ description: 'A rating that YouTube uses to identify age-restricted content.' }),
  })
  .openapi({
    description:
      'Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange',
    required: [],
  })
  .openapi('ContentRating')

const CuepointSchema = z
  .object({
    cueType: z.enum(['cueTypeUnspecified', 'cueTypeAd']).exactOptional(),
    durationSecs: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The duration of this cuepoint.' }),
    etag: z.string().exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier for cuepoint resource.' }),
    insertionOffsetTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the cuepoint should be inserted by offset to the broadcast actual start time.',
      }),
    walltimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time.',
      }),
  })
  .openapi({
    description:
      'Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.',
    required: [],
  })
  .openapi('Cuepoint')

const GeoPointSchema = z
  .object({
    altitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Altitude above the reference ellipsoid, in meters.' }),
    latitude: z.float64().exactOptional().openapi({ description: 'Latitude in degrees.' }),
    longitude: z.float64().exactOptional().openapi({ description: 'Longitude in degrees.' }),
  })
  .openapi({ description: 'Geographical coordinates of a point, in WGS84.', required: [] })
  .openapi('GeoPoint')

const I18nLanguageSnippetSchema = z
  .object({
    hl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short BCP-47 code that uniquely identifies a language.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the language in the language itself.' }),
  })
  .openapi({
    description:
      'Basic details about an i18n language, such as language code and human-readable name.',
    required: [],
  })
  .openapi('I18nLanguageSnippet')

const I18nLanguageSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the i18n language.' }),
    kind: z
      .string()
      .default('youtube#i18nLanguage')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".',
      }),
    snippet: I18nLanguageSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the i18n language, such as language code and human-readable name.',
    }),
  })
  .openapi({
    description:
      'An *i18nLanguage* resource identifies a UI language currently supported by YouTube.',
    required: [],
  })
  .openapi('I18nLanguage')

const I18nLanguageListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(I18nLanguageSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.',
      }),
    kind: z
      .string()
      .default('youtube#i18nLanguageListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('I18nLanguageListResponse')

const I18nRegionSnippetSchema = z
  .object({
    gl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region code as a 2-letter ISO country code.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the region.' }),
  })
  .openapi({
    description: 'Basic details about an i18n region, such as region code and human-readable name.',
    required: [],
  })
  .openapi('I18nRegionSnippet')

const I18nRegionSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the i18n region.' }),
    kind: z
      .string()
      .default('youtube#i18nRegion')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".',
      }),
    snippet: I18nRegionSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the i18n region, such as region code and human-readable name.',
    }),
  })
  .openapi({
    description: 'A *i18nRegion* resource identifies a region where YouTube is available.',
    required: [],
  })
  .openapi('I18nRegion')

const I18nRegionListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(I18nRegionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.',
      }),
    kind: z
      .string()
      .default('youtube#i18nRegionListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('I18nRegionListResponse')

const InvideoPositionSchema = z
  .object({
    cornerPosition: z
      .enum(['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
      .exactOptional()
      .openapi({
        description: 'Describes in which corner of the video the visual widget will appear.',
      }),
    type: z
      .literal('corner')
      .exactOptional()
      .openapi({ description: 'Defines the position type.' }),
  })
  .openapi({
    description:
      'Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.',
    required: [],
  })
  .openapi('InvideoPosition')

const InvideoTimingSchema = z
  .object({
    durationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.',
      }),
    offsetMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.',
      }),
    type: z
      .enum(['offsetFromStart', 'offsetFromEnd'])
      .exactOptional()
      .openapi({
        description:
          'Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.',
      }),
  })
  .openapi({
    description: 'Describes a temporal position of a visual widget inside a video.',
    required: [],
  })
  .openapi('InvideoTiming')

const InvideoBrandingSchema = z
  .object({
    imageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The bytes the uploaded image. Only used in api to youtube communication.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url of the uploaded image. Only used in apiary to api communication.',
      }),
    position: InvideoPositionSchema.exactOptional().openapi({
      description:
        'The spatial position within the video where the branding watermark will be displayed.',
    }),
    targetChannelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The channel to which this branding links. If not present it defaults to the current channel.',
      }),
    timing: InvideoTimingSchema.exactOptional().openapi({
      description: 'The temporal position within the video where watermark will be displayed.',
    }),
  })
  .openapi({ description: 'LINT.IfChange Describes an invideo branding.', required: [] })
  .openapi('InvideoBranding')

const LevelDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name that should be used when referring to this level.' }),
  })
  .openapi({ required: [] })
  .openapi('LevelDetails')

const MonitorStreamInfoSchema = z
  .object({
    broadcastStreamDelayMs: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.',
      }),
    embedHtml: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTML code that embeds a player that plays the monitor stream.' }),
    enableMonitorStream: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state.",
      }),
  })
  .openapi({ description: 'Settings and Info of the monitor stream', required: [] })
  .openapi('MonitorStreamInfo')

const LiveBroadcastContentDetailsSchema = z
  .object({
    boundStreamId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This value uniquely identifies the live stream bound to the broadcast.',
      }),
    boundStreamLastUpdateTimeMs: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time that the live stream referenced by boundStreamId was last updated.',
      }),
    closedCaptionsType: z
      .enum([
        'closedCaptionsTypeUnspecified',
        'closedCaptionsDisabled',
        'closedCaptionsHttpPost',
        'closedCaptionsEmbedded',
      ])
      .exactOptional(),
    enableAutoStart: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.',
      }),
    enableAutoStop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.',
      }),
    enableClosedCaptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.',
      }),
    enableContentEncryption: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This setting indicates whether YouTube should enable content encryption for the broadcast.',
      }),
    enableDvr: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.",
      }),
    enableEmbed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.',
      }),
    enableLowLatency: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this broadcast has low latency enabled.' }),
    latencyPreference: z
      .enum(['latencyPreferenceUnspecified', 'normal', 'low', 'ultraLow'])
      .exactOptional()
      .openapi({
        description:
          'If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.',
      }),
    mesh: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.',
      }),
    monitorStream: MonitorStreamInfoSchema.exactOptional().openapi({
      description:
        'The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.',
    }),
    projection: z
      .enum(['projectionUnspecified', 'rectangular', '360', 'mesh'])
      .exactOptional()
      .openapi({
        description: 'The projection format of this broadcast. This defaults to rectangular.',
      }),
    recordFromStart: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.",
      }),
    startWithSlate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.",
      }),
    stereoLayout: z
      .enum(['stereoLayoutUnspecified', 'mono', 'leftRight', 'topBottom'])
      .exactOptional()
      .openapi({ description: 'The 3D stereo layout of this broadcast. This defaults to mono.' }),
  })
  .openapi({ description: 'Detailed settings of a broadcast.', required: [] })
  .openapi('LiveBroadcastContentDetails')

const LiveBroadcastSnippetSchema = z
  .object({
    actualEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete.",
      }),
    actualStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time that the broadcast actually started. This information is only available once the broadcast's state is live.",
      }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.",
      }),
    isDefaultBroadcast: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this broadcast is the default broadcast. Internal only.',
      }),
    liveChatId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the live chat for this broadcast.' }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time that the broadcast was added to YouTube's live broadcast schedule.",
      }),
    scheduledEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the broadcast is scheduled to end.' }),
    scheduledStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the broadcast is scheduled to start.' }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.",
      }),
  })
  .openapi({ description: 'Basic broadcast information.', required: [] })
  .openapi('LiveBroadcastSnippet')

const LiveBroadcastStatisticsSchema = z
  .object({
    concurrentViewers: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.',
      }),
  })
  .openapi({
    description:
      'Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.',
    required: [],
  })
  .openapi('LiveBroadcastStatistics')

const LiveBroadcastStatusSchema = z
  .object({
    lifeCycleStatus: z
      .enum([
        'lifeCycleStatusUnspecified',
        'created',
        'ready',
        'testing',
        'live',
        'complete',
        'revoked',
        'testStarting',
        'liveStarting',
      ])
      .exactOptional()
      .openapi({
        description:
          "The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.",
      }),
    liveBroadcastPriority: z
      .enum(['liveBroadcastPriorityUnspecified', 'low', 'normal', 'high'])
      .exactOptional()
      .openapi({ description: 'Priority of the live broadcast event (internal state).' }),
    madeForKids: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.',
      }),
    privacyStatus: z
      .enum(['public', 'unlisted', 'private'])
      .exactOptional()
      .openapi({
        description:
          "The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.",
      }),
    recordingStatus: z
      .enum(['liveBroadcastRecordingStatusUnspecified', 'notRecording', 'recording', 'recorded'])
      .exactOptional()
      .openapi({ description: "The broadcast's recording status." }),
    selfDeclaredMadeForKids: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.',
      }),
  })
  .openapi({ description: 'Live broadcast state.', required: [] })
  .openapi('LiveBroadcastStatus')

const LiveBroadcastSchema = z
  .object({
    contentDetails: LiveBroadcastContentDetailsSchema.exactOptional().openapi({
      description:
        "The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.",
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube assigns to uniquely identify the broadcast.' }),
    kind: z
      .string()
      .default('youtube#liveBroadcast')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".',
      }),
    snippet: LiveBroadcastSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the event, including its title, description, start time, and end time.',
    }),
    statistics: LiveBroadcastStatisticsSchema.exactOptional().openapi({
      description:
        "The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.",
    }),
    status: LiveBroadcastStatusSchema.exactOptional().openapi({
      description: "The status object contains information about the event's status.",
    }),
  })
  .openapi({
    description:
      'A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.',
    required: [],
  })
  .openapi('LiveBroadcast')

const LiveBroadcastListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(LiveBroadcastSchema)
      .exactOptional()
      .openapi({ description: 'A list of broadcasts that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#liveBroadcastListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveBroadcastListResponse')

const LiveChatBanSnippetSchema = z
  .object({
    banDurationSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The duration of a ban, only filled if the ban has type TEMPORARY.',
      }),
    bannedUserDetails: ChannelProfileDetailsSchema.exactOptional(),
    liveChatId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The chat this ban is pertinent to.' }),
    type: z
      .enum(['liveChatBanTypeUnspecified', 'permanent', 'temporary'])
      .exactOptional()
      .openapi({ description: 'The type of ban.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatBanSnippet')

const LiveChatBanSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube assigns to uniquely identify the ban.' }),
    kind: z
      .string()
      .default('youtube#liveChatBan')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.',
      }),
    snippet: LiveChatBanSnippetSchema.exactOptional().openapi({
      description: 'The `snippet` object contains basic details about the ban.',
    }),
  })
  .openapi({
    description: 'A `__liveChatBan__` resource represents a ban for a YouTube live chat.',
    required: [],
  })
  .openapi('LiveChatBan')

const LiveChatFanFundingEventDetailsSchema = z
  .object({
    amountDisplayString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A rendered string that displays the fund amount and currency to the user.',
      }),
    amountMicros: z.string().exactOptional().openapi({ description: 'The amount of the fund.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency in which the fund was made.' }),
    userComment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The comment added by the user to this fan funding event.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatFanFundingEventDetails')

const LiveChatGiftMembershipReceivedDetailsSchema = z
  .object({
    associatedMembershipGiftingMessageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'.",
      }),
    gifterChannelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message.',
      }),
    memberLevelName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatGiftMembershipReceivedDetails')

const LiveChatMemberMilestoneChatDetailsSchema = z
  .object({
    memberLevelName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.",
      }),
    memberMonth: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.',
      }),
    userComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatMemberMilestoneChatDetails')

const LiveChatMembershipGiftingDetailsSchema = z
  .object({
    giftMembershipsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of gift memberships purchased by the user.' }),
    giftMembershipsLevelName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatMembershipGiftingDetails')

const LiveChatMessageAuthorDetailsSchema = z
  .object({
    channelId: z.string().exactOptional().openapi({ description: 'The YouTube channel ID.' }),
    channelUrl: z.string().exactOptional().openapi({ description: "The channel's URL." }),
    displayName: z.string().exactOptional().openapi({ description: "The channel's display name." }),
    isChatModerator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the author is a moderator of the live chat.' }),
    isChatOwner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the author is the owner of the live chat.' }),
    isChatSponsor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the author is a sponsor of the live chat.' }),
    isVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether the author's identity has been verified by YouTube." }),
    profileImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The channels's avatar URL." }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatMessageAuthorDetails')

const LiveChatMessageDeletedDetailsSchema = z
  .object({ deletedMessageId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LiveChatMessageDeletedDetails')

const LiveChatMessageRetractedDetailsSchema = z
  .object({ retractedMessageId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LiveChatMessageRetractedDetails')

const LiveChatNewSponsorDetailsSchema = z
  .object({
    isUpgrade: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false.',
      }),
    memberLevelName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatNewSponsorDetails')

const LiveChatSuperChatDetailsSchema = z
  .object({
    amountDisplayString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A rendered string that displays the fund amount and currency to the user.',
      }),
    amountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount purchased by the user, in micros (1,750,000 micros = 1.75).',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency in which the purchase was made.' }),
    tier: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.',
      }),
    userComment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The comment added by the user to this Super Chat event.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatSuperChatDetails')

const SuperStickerMetadataSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Internationalized alt text that describes the sticker image and any animation associated with it.',
      }),
    altTextLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies the localization language in which the alt text is returned.',
      }),
    stickerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SuperStickerMetadata')

const LiveChatSuperStickerDetailsSchema = z
  .object({
    amountDisplayString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A rendered string that displays the fund amount and currency to the user.',
      }),
    amountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount purchased by the user, in micros (1,750,000 micros = 1.75).',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency in which the purchase was made.' }),
    superStickerMetadata: SuperStickerMetadataSchema.exactOptional().openapi({
      description: 'Information about the Super Sticker.',
    }),
    tier: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatSuperStickerDetails')

const LiveChatTextMessageDetailsSchema = z
  .object({
    messageText: z.string().exactOptional().openapi({ description: "The user's message." }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatTextMessageDetails')

const LiveChatUserBannedMessageDetailsSchema = z
  .object({
    banDurationSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration of the ban. This property is only present if the banType is temporary.',
      }),
    banType: z
      .enum(['permanent', 'temporary'])
      .exactOptional()
      .openapi({ description: 'The type of ban.' }),
    bannedUserDetails: ChannelProfileDetailsSchema.exactOptional().openapi({
      description: 'The details of the user that was banned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatUserBannedMessageDetails')

const LiveChatMessageSnippetSchema = z
  .object({
    authorChannelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase',
      }),
    displayMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.',
      }),
    fanFundingEventDetails: LiveChatFanFundingEventDetailsSchema.exactOptional().openapi({
      description:
        "Details about the funding event, this is only set if the type is 'fanFundingEvent'.",
    }),
    giftMembershipReceivedDetails:
      LiveChatGiftMembershipReceivedDetailsSchema.exactOptional().openapi({
        description:
          "Details about the Gift Membership Received event, this is only set if the type is 'giftMembershipReceivedEvent'.",
      }),
    hasDisplayContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the message has display content that should be displayed to users.',
      }),
    liveChatId: z.string().exactOptional(),
    memberMilestoneChatDetails: LiveChatMemberMilestoneChatDetailsSchema.exactOptional().openapi({
      description:
        "Details about the Member Milestone Chat event, this is only set if the type is 'memberMilestoneChatEvent'.",
    }),
    membershipGiftingDetails: LiveChatMembershipGiftingDetailsSchema.exactOptional().openapi({
      description:
        "Details about the Membership Gifting event, this is only set if the type is 'membershipGiftingEvent'.",
    }),
    messageDeletedDetails: LiveChatMessageDeletedDetailsSchema.exactOptional(),
    messageRetractedDetails: LiveChatMessageRetractedDetailsSchema.exactOptional(),
    newSponsorDetails: LiveChatNewSponsorDetailsSchema.exactOptional().openapi({
      description:
        'Details about the New Member Announcement event, this is only set if the type is \'newSponsorEvent\'. Please note that "member" is the new term for "sponsor".',
    }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the message was orignally published.' }),
    superChatDetails: LiveChatSuperChatDetailsSchema.exactOptional().openapi({
      description:
        "Details about the Super Chat event, this is only set if the type is 'superChatEvent'.",
    }),
    superStickerDetails: LiveChatSuperStickerDetailsSchema.exactOptional().openapi({
      description:
        "Details about the Super Sticker event, this is only set if the type is 'superStickerEvent'.",
    }),
    textMessageDetails: LiveChatTextMessageDetailsSchema.exactOptional().openapi({
      description:
        "Details about the text message, this is only set if the type is 'textMessageEvent'.",
    }),
    type: z
      .enum([
        'invalidType',
        'textMessageEvent',
        'tombstone',
        'fanFundingEvent',
        'chatEndedEvent',
        'sponsorOnlyModeStartedEvent',
        'sponsorOnlyModeEndedEvent',
        'newSponsorEvent',
        'memberMilestoneChatEvent',
        'membershipGiftingEvent',
        'giftMembershipReceivedEvent',
        'messageDeletedEvent',
        'messageRetractedEvent',
        'userBannedEvent',
        'superChatEvent',
        'superStickerEvent',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.',
      }),
    userBannedDetails: LiveChatUserBannedMessageDetailsSchema.exactOptional(),
  })
  .openapi({ description: 'Next ID: 33', required: [] })
  .openapi('LiveChatMessageSnippet')

const LiveChatMessageSchema = z
  .object({
    authorDetails: LiveChatMessageAuthorDetailsSchema.exactOptional().openapi({
      description:
        'The authorDetails object contains basic details about the user that posted this message.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube assigns to uniquely identify the message.' }),
    kind: z
      .string()
      .default('youtube#liveChatMessage')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".',
      }),
    snippet: LiveChatMessageSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the message.',
    }),
  })
  .openapi({
    description: 'A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.',
    required: [],
  })
  .openapi('LiveChatMessage')

const LiveChatMessageListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z.array(LiveChatMessageSchema).exactOptional(),
    kind: z
      .string()
      .default('youtube#liveChatMessageListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".',
      }),
    nextPageToken: z.string().exactOptional(),
    offlineAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the underlying stream went offline.' }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    pollingIntervalMillis: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The amount of time the client should wait before polling again.' }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatMessageListResponse')

const LiveChatModeratorSnippetSchema = z
  .object({
    liveChatId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the live chat this moderator can act on.' }),
    moderatorDetails: ChannelProfileDetailsSchema.exactOptional().openapi({
      description: 'Details about the moderator.',
    }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatModeratorSnippet')

const LiveChatModeratorSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube assigns to uniquely identify the moderator.' }),
    kind: z
      .string()
      .default('youtube#liveChatModerator')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".',
      }),
    snippet: LiveChatModeratorSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the moderator.',
    }),
  })
  .openapi({
    description:
      'A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.',
    required: [],
  })
  .openapi('LiveChatModerator')

const LiveChatModeratorListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(LiveChatModeratorSchema)
      .exactOptional()
      .openapi({ description: 'A list of moderators that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#liveChatModeratorListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveChatModeratorListResponse')

const LiveStreamContentDetailsSchema = z
  .object({
    closedCaptionsIngestionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ingestion URL where the closed captions of this stream are sent.',
      }),
    isReusable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. ',
      }),
  })
  .openapi({ description: 'Detailed settings of a stream.', required: [] })
  .openapi('LiveStreamContentDetails')

const LiveStreamSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: "The stream's description. The value cannot be longer than 10000 characters.",
      }),
    isDefaultStream: z.boolean().exactOptional(),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the stream was created.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: "The stream's title. The value must be between 1 and 128 characters long.",
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveStreamSnippet')

const LiveStreamConfigurationIssueSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The long-form description of the issue and how to resolve it.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The short-form reason for this issue.' }),
    severity: z
      .enum(['info', 'warning', 'error'])
      .exactOptional()
      .openapi({ description: 'How severe this issue is to the stream.' }),
    type: z
      .enum([
        'gopSizeOver',
        'gopSizeLong',
        'gopSizeShort',
        'openGop',
        'badContainer',
        'audioBitrateHigh',
        'audioBitrateLow',
        'audioSampleRate',
        'bitrateHigh',
        'bitrateLow',
        'audioCodec',
        'videoCodec',
        'noAudioStream',
        'noVideoStream',
        'multipleVideoStreams',
        'multipleAudioStreams',
        'audioTooManyChannels',
        'interlacedVideo',
        'frameRateHigh',
        'resolutionMismatch',
        'videoCodecMismatch',
        'videoInterlaceMismatch',
        'videoProfileMismatch',
        'videoBitrateMismatch',
        'framerateMismatch',
        'gopMismatch',
        'audioSampleRateMismatch',
        'audioStereoMismatch',
        'audioCodecMismatch',
        'audioBitrateMismatch',
        'videoResolutionSuboptimal',
        'videoResolutionUnsupported',
        'videoIngestionStarved',
        'videoIngestionFasterThanRealtime',
      ])
      .exactOptional()
      .openapi({ description: 'The kind of error happening.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveStreamConfigurationIssue')

const LiveStreamHealthStatusSchema = z
  .object({
    configurationIssues: z
      .array(LiveStreamConfigurationIssueSchema)
      .exactOptional()
      .openapi({ description: 'The configurations issues on this stream' }),
    lastUpdateTimeSeconds: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time this status was updated (in seconds)' }),
    status: z
      .enum(['good', 'ok', 'bad', 'noData', 'revoked'])
      .exactOptional()
      .openapi({ description: 'The status code of this stream' }),
  })
  .openapi({ required: [] })
  .openapi('LiveStreamHealthStatus')

const LiveStreamStatusSchema = z
  .object({
    healthStatus: LiveStreamHealthStatusSchema.exactOptional().openapi({
      description: 'The health status of the stream.',
    }),
    streamStatus: z.enum(['created', 'ready', 'active', 'inactive', 'error']).exactOptional(),
  })
  .openapi({ description: 'Brief description of the live stream status.', required: [] })
  .openapi('LiveStreamStatus')

const LiveStreamSchema = z
  .object({
    cdn: CdnSettingsSchema.exactOptional().openapi({
      description:
        "The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.",
    }),
    contentDetails: LiveStreamContentDetailsSchema.exactOptional().openapi({
      description:
        'The content_details object contains information about the stream, including the closed captions ingestion URL.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube assigns to uniquely identify the stream.' }),
    kind: z
      .string()
      .default('youtube#liveStream')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".',
      }),
    snippet: LiveStreamSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the stream, including its channel, title, and description.',
    }),
    status: LiveStreamStatusSchema.exactOptional().openapi({
      description: "The status object contains information about live stream's status.",
    }),
  })
  .openapi({ description: 'A live stream describes a live ingestion point.', required: [] })
  .openapi('LiveStream')

const LiveStreamListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(LiveStreamSchema)
      .exactOptional()
      .openapi({ description: 'A list of live streams that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#liveStreamListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional(),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('LiveStreamListResponse')

const MembershipsDurationSchema = z
  .object({
    memberSince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time when the user became a continuous member across all levels.',
      }),
    memberTotalDurationMonths: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).',
      }),
  })
  .openapi({ required: [] })
  .openapi('MembershipsDuration')

const MembershipsDurationAtLevelSchema = z
  .object({
    level: z.string().exactOptional().openapi({ description: 'Pricing level ID.' }),
    memberSince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time when the user became a continuous member for the given level.',
      }),
    memberTotalDurationMonths: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).',
      }),
  })
  .openapi({ required: [] })
  .openapi('MembershipsDurationAtLevel')

const MembershipsDetailsSchema = z
  .object({
    accessibleLevels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.',
      }),
    highestAccessibleLevel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the highest level that the user has access to at the moment.',
      }),
    highestAccessibleLevelDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name for the highest level that the user has access to at the moment.',
      }),
    membershipsDuration: MembershipsDurationSchema.exactOptional().openapi({
      description:
        'Data about memberships duration without taking into consideration pricing levels.',
    }),
    membershipsDurationAtLevels: z
      .array(MembershipsDurationAtLevelSchema)
      .exactOptional()
      .openapi({ description: 'Data about memberships duration on particular pricing levels.' }),
  })
  .openapi({ required: [] })
  .openapi('MembershipsDetails')

const MemberSnippetSchema = z
  .object({
    creatorChannelId: z
      .string()
      .exactOptional()
      .openapi({ description: "The id of the channel that's offering memberships." }),
    memberDetails: ChannelProfileDetailsSchema.exactOptional().openapi({
      description: 'Details about the member.',
    }),
    membershipsDetails: MembershipsDetailsSchema.exactOptional().openapi({
      description: "Details about the user's membership.",
    }),
  })
  .openapi({ required: [] })
  .openapi('MemberSnippet')

const MemberSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    kind: z
      .string()
      .default('youtube#member')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#member".',
      }),
    snippet: MemberSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the member.',
    }),
  })
  .openapi({
    description:
      'A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.',
    required: [],
  })
  .openapi('Member')

const MemberListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(MemberSchema)
      .exactOptional()
      .openapi({ description: 'A list of members that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#memberListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional(),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('MemberListResponse')

const MembershipsLevelSnippetSchema = z
  .object({
    creatorChannelId: z
      .string()
      .exactOptional()
      .openapi({ description: "The id of the channel that's offering channel memberships." }),
    levelDetails: LevelDetailsSchema.exactOptional().openapi({
      description: 'Details about the pricing level.',
    }),
  })
  .openapi({ required: [] })
  .openapi('MembershipsLevelSnippet')

const MembershipsLevelSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube assigns to uniquely identify the memberships level.',
      }),
    kind: z
      .string()
      .default('youtube#membershipsLevel')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".',
      }),
    snippet: MembershipsLevelSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the level.',
    }),
  })
  .openapi({
    description:
      'A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.',
    required: [],
  })
  .openapi('MembershipsLevel')

const MembershipsLevelListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(MembershipsLevelSchema)
      .exactOptional()
      .openapi({ description: 'A list of pricing levels offered by a creator to the fans.' }),
    kind: z
      .string()
      .default('youtube#membershipsLevelListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('MembershipsLevelListResponse')

const PlaylistContentDetailsSchema = z
  .object({
    itemCount: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The number of videos in the playlist.' }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistContentDetails')

const PlaylistLocalizationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The localized strings for playlist's description." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "The localized strings for playlist's title." }),
  })
  .openapi({ description: 'Playlist localization setting', required: [] })
  .openapi('PlaylistLocalization')

const PlaylistPlayerSchema = z
  .object({
    embedHtml: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An <iframe> tag that embeds a player that will play the playlist.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistPlayer')

const PlaylistSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel that published the playlist.',
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The channel title of the channel that the video belongs to.' }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: "The language of the playlist's default title and description." }),
    description: z.string().exactOptional().openapi({ description: "The playlist's description." }),
    localized: PlaylistLocalizationSchema.exactOptional().openapi({
      description: 'Localized title and description, read-only.',
    }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the playlist was created.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Keyword tags associated with the playlist.' }),
    thumbnailVideoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted.',
      }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z.string().exactOptional().openapi({ description: "The playlist's title." }),
  })
  .openapi({
    description: 'Basic details about a playlist, including title, description and thumbnails.',
    required: [],
  })
  .openapi('PlaylistSnippet')

const PlaylistStatusSchema = z
  .object({
    privacyStatus: z
      .enum(['public', 'unlisted', 'private'])
      .exactOptional()
      .openapi({ description: "The playlist's privacy status." }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistStatus')

const PlaylistSchema = z
  .object({
    contentDetails: PlaylistContentDetailsSchema.exactOptional().openapi({
      description: 'The contentDetails object contains information like video count.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the playlist.' }),
    kind: z
      .string()
      .default('youtube#playlist')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".',
      }),
    localizations: z
      .record(z.string(), PlaylistLocalizationSchema)
      .exactOptional()
      .openapi({ description: 'Localizations for different languages' }),
    player: PlaylistPlayerSchema.exactOptional().openapi({
      description:
        'The player object contains information that you would use to play the playlist in an embedded player.',
    }),
    snippet: PlaylistSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the playlist, such as its title and description.',
    }),
    status: PlaylistStatusSchema.exactOptional().openapi({
      description: 'The status object contains status information for the playlist.',
    }),
  })
  .openapi({
    description:
      "A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.",
    required: [],
  })
  .openapi('Playlist')

const PlaylistItemContentDetailsSchema = z
  .object({
    endAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-generated note for this item.' }),
    startAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.',
      }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.',
      }),
    videoPublishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the video was published to YouTube.' }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistItemContentDetails')

const PlaylistItemSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the user that added the item to the playlist.',
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel title for the channel that the playlist item belongs to.' }),
    description: z.string().exactOptional().openapi({ description: "The item's description." }),
    playlistId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.',
      }),
    position: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.',
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the item was added to the playlist.' }),
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.',
    }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z.string().exactOptional().openapi({ description: "The item's title." }),
    videoOwnerChannelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel id for the channel this video belongs to.' }),
    videoOwnerChannelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel title for the channel this video belongs to.' }),
  })
  .openapi({
    description:
      'Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15',
    required: [],
  })
  .openapi('PlaylistItemSnippet')

const PlaylistItemStatusSchema = z
  .object({
    privacyStatus: z
      .enum(['public', 'unlisted', 'private'])
      .exactOptional()
      .openapi({ description: "This resource's privacy status." }),
  })
  .openapi({ description: "Information about the playlist item's privacy status.", required: [] })
  .openapi('PlaylistItemStatus')

const PlaylistItemSchema = z
  .object({
    contentDetails: PlaylistItemContentDetailsSchema.exactOptional().openapi({
      description:
        'The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the playlist item.' }),
    kind: z
      .string()
      .default('youtube#playlistItem')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".',
      }),
    snippet: PlaylistItemSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the playlist item, such as its title and position in the playlist.',
    }),
    status: PlaylistItemStatusSchema.exactOptional().openapi({
      description:
        "The status object contains information about the playlist item's privacy status.",
    }),
  })
  .openapi({
    description:
      "A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.",
    required: [],
  })
  .openapi('PlaylistItem')

const PlaylistItemListResponseSchema = z
  .object({
    etag: z.string().exactOptional(),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(PlaylistItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of playlist items that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#playlistItemListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". Etag of this resource.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistItemListResponse')

const PlaylistListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(PlaylistSchema)
      .exactOptional()
      .openapi({ description: 'A list of playlists that match the request criteria' }),
    kind: z
      .string()
      .default('youtube#playlistListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistListResponse')

const SearchResultSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.',
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the channel that published the resource that the search result identifies.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the search result.' }),
    liveBroadcastContent: z
      .enum(['none', 'upcoming', 'live', 'completed'])
      .exactOptional()
      .openapi({
        description:
          'It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it\'s "none" if there is not any upcoming/active live broadcasts.',
      }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The creation date and time of the resource that the search result identifies.',
      }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title of the search result.' }),
  })
  .openapi({
    description:
      'Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.',
    required: [],
  })
  .openapi('SearchResultSnippet')

const SearchResultSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description:
        'The id object contains information that can be used to uniquely identify the resource that matches the search request.',
    }),
    kind: z
      .string()
      .default('youtube#searchResult')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".',
      }),
    snippet: SearchResultSnippetSchema.exactOptional().openapi({
      description:
        "The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description.",
    }),
  })
  .openapi({
    description:
      'A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.',
    required: [],
  })
  .openapi('SearchResult')

const SearchListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(SearchResultSchema)
      .exactOptional()
      .openapi({ description: 'Pagination information for token pagination.' }),
    kind: z
      .string()
      .default('youtube#searchListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    regionCode: z.string().exactOptional(),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('SearchListResponse')

const SubscriptionContentDetailsSchema = z
  .object({
    activityType: z
      .enum(['subscriptionActivityTypeUnspecified', 'all', 'uploads'])
      .exactOptional()
      .openapi({
        description: 'The type of activity this subscription is for (only uploads, everything).',
      }),
    newItemCount: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'The number of new items in the subscription since its content was last read.',
      }),
    totalItemCount: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The approximate number of items that the subscription points to.' }),
  })
  .openapi({
    description: 'Details about the content to witch a subscription refers.',
    required: [],
  })
  .openapi('SubscriptionContentDetails')

const SubscriptionSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description: "The ID that YouTube uses to uniquely identify the subscriber's channel.",
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel title for the channel that the subscription belongs to.' }),
    description: z.string().exactOptional().openapi({ description: "The subscription's details." }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the subscription was created.' }),
    resourceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The id object contains information about the channel that the user subscribed to.',
    }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z.string().exactOptional().openapi({ description: "The subscription's title." }),
  })
  .openapi({
    description:
      'Basic details about a subscription, including title, description and thumbnails of the subscribed item.',
    required: [],
  })
  .openapi('SubscriptionSnippet')

const SubscriptionSubscriberSnippetSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The channel ID of the subscriber.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the subscriber.' }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description: 'Thumbnails for this subscriber.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title of the subscriber.' }),
  })
  .openapi({
    description:
      "Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.",
    required: [],
  })
  .openapi('SubscriptionSubscriberSnippet')

const SubscriptionSchema = z
  .object({
    contentDetails: SubscriptionContentDetailsSchema.exactOptional().openapi({
      description: 'The contentDetails object contains basic statistics about the subscription.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the subscription.' }),
    kind: z
      .string()
      .default('youtube#subscription')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".',
      }),
    snippet: SubscriptionSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.',
    }),
    subscriberSnippet: SubscriptionSubscriberSnippetSchema.exactOptional().openapi({
      description: 'The subscriberSnippet object contains basic details about the subscriber.',
    }),
  })
  .openapi({
    description:
      'A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.',
    required: [],
  })
  .openapi('Subscription')

const SubscriptionListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'A list of subscriptions that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#subscriptionListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional(),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionListResponse')

const SuperChatEventSnippetSchema = z
  .object({
    amountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.',
      }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel id where the event occurred.' }),
    commentText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text contents of the comment left by the user.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the event occurred.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency in which the purchase was made. ISO 4217.' }),
    displayString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.',
      }),
    isSuperStickerEvent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this event is a Super Sticker event.' }),
    messageType: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The tier for the paid message, which is based on the amount of money spent to purchase the message.',
      }),
    superStickerMetadata: SuperStickerMetadataSchema.exactOptional().openapi({
      description:
        'If this event is a Super Sticker event, this field will contain metadata about the Super Sticker.',
    }),
    supporterDetails: ChannelProfileDetailsSchema.exactOptional().openapi({
      description: 'Details about the supporter.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SuperChatEventSnippet')

const SuperChatEventSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube assigns to uniquely identify the Super Chat event.',
      }),
    kind: z
      .string()
      .default('youtube#superChatEvent')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`.',
      }),
    snippet: SuperChatEventSnippetSchema.exactOptional().openapi({
      description: 'The `snippet` object contains basic details about the Super Chat event.',
    }),
  })
  .openapi({
    description:
      'A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.',
    required: [],
  })
  .openapi('SuperChatEvent')

const SuperChatEventListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(SuperChatEventSchema)
      .exactOptional()
      .openapi({ description: 'A list of Super Chat purchases that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#superChatEventListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional(),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('SuperChatEventListResponse')

const TestItemTestItemSnippetSchema = z.object({}).openapi('TestItemTestItemSnippet')

const TestItemSchema = z
  .object({
    featuredPart: z.boolean().exactOptional(),
    gaia: z.string().exactOptional(),
    id: z.string().exactOptional(),
    snippet: TestItemTestItemSnippetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestItem')

const ThirdPartyLinkSnippetSchema = z
  .object({
    channelToStoreLink: ChannelToStoreLinkDetailsSchema.exactOptional().openapi({
      description:
        'Information specific to a link between a channel and a store on a merchandising platform.',
    }),
    type: z
      .enum(['linkUnspecified', 'channelToStoreLink'])
      .exactOptional()
      .openapi({ description: 'Type of the link named after the entities that are being linked.' }),
  })
  .openapi({
    description:
      'Basic information about a third party account link, including its type and type-specific information.',
    required: [],
  })
  .openapi('ThirdPartyLinkSnippet')

const ThirdPartyLinkStatusSchema = z
  .object({ linkStatus: z.enum(['unknown', 'failed', 'pending', 'linked']).exactOptional() })
  .openapi({
    description:
      'The third-party link status object contains information about the status of the link.',
    required: [],
  })
  .openapi('ThirdPartyLinkStatus')

const ThirdPartyLinkSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource' }),
    kind: z
      .string()
      .default('youtube#thirdPartyLink')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".',
      }),
    linkingToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The linking_token identifies a YouTube account and channel with which the third party account is linked.',
      }),
    snippet: ThirdPartyLinkSnippetSchema.exactOptional().openapi({
      description: 'The snippet object contains basic details about the third- party account link.',
    }),
    status: ThirdPartyLinkStatusSchema.exactOptional().openapi({
      description: 'The status object contains information about the status of the link.',
    }),
  })
  .openapi({
    description:
      'A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.',
    required: [],
  })
  .openapi('ThirdPartyLink')

const ThirdPartyLinkListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    items: z.array(ThirdPartyLinkSchema).exactOptional(),
    kind: z
      .string()
      .default('youtube#thirdPartyLinkListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ThirdPartyLinkListResponse')

const ThumbnailSetResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(ThumbnailDetailsSchema)
      .exactOptional()
      .openapi({ description: 'A list of thumbnails.' }),
    kind: z
      .string()
      .default('youtube#thumbnailSetResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('ThumbnailSetResponse')

const VideoAgeGatingSchema = z
  .object({
    alcoholContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.',
      }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.",
      }),
    videoGameRating: z
      .enum(['anyone', 'm15Plus', 'm16Plus', 'm17Plus'])
      .exactOptional()
      .openapi({ description: 'Video game rating, if any.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoAgeGating')

const VideoContentDetailsRegionRestrictionSchema = z
  .object({
    allowed: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.',
      }),
    blocked: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.',
      }),
  })
  .openapi({ description: 'DEPRECATED Region restriction of the video.', required: [] })
  .openapi('VideoContentDetailsRegionRestriction')

const VideoContentDetailsSchema = z
  .object({
    caption: z
      .enum(['true', 'false'])
      .exactOptional()
      .openapi({
        description: 'The value of captions indicates whether the video has captions or not.',
      }),
    contentRating: ContentRatingSchema.exactOptional().openapi({
      description: 'Specifies the ratings that the video received under various rating schemes.',
    }),
    countryRestriction: AccessPolicySchema.exactOptional().openapi({
      description:
        'The countryRestriction object contains information about the countries where a video is (or is not) viewable.',
    }),
    definition: z
      .enum(['sd', 'hd'])
      .exactOptional()
      .openapi({
        description:
          'The value of definition indicates whether the video is available in high definition or only in standard definition.',
      }),
    dimension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of dimension indicates whether the video is available in 3D or in 2D.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.',
      }),
    hasCustomThumbnail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.',
      }),
    licensedContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The value of is_license_content indicates whether the video is licensed content.',
      }),
    projection: z
      .enum(['rectangular', '360'])
      .exactOptional()
      .openapi({ description: 'Specifies the projection format of the video.' }),
    regionRestriction: VideoContentDetailsRegionRestrictionSchema.exactOptional().openapi({
      description:
        'The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.',
    }),
  })
  .openapi({ description: 'Details about the content of a YouTube Video.', required: [] })
  .openapi('VideoContentDetails')

const VideoFileDetailsAudioStreamSchema = z
  .object({
    bitrateBps: z
      .string()
      .exactOptional()
      .openapi({ description: "The audio stream's bitrate, in bits per second." }),
    channelCount: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The number of audio channels that the stream contains.' }),
    codec: z
      .string()
      .exactOptional()
      .openapi({ description: 'The audio codec that the stream uses.' }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.',
      }),
  })
  .openapi({ description: 'Information about an audio stream.', required: [] })
  .openapi('VideoFileDetailsAudioStream')

const VideoFileDetailsVideoStreamSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.",
      }),
    bitrateBps: z
      .string()
      .exactOptional()
      .openapi({ description: "The video stream's bitrate, in bits per second." }),
    codec: z
      .string()
      .exactOptional()
      .openapi({ description: 'The video codec that the stream uses.' }),
    frameRateFps: z
      .float64()
      .exactOptional()
      .openapi({ description: "The video stream's frame rate, in frames per second." }),
    heightPixels: z
      .uint32()
      .exactOptional()
      .openapi({ description: "The encoded video content's height in pixels." }),
    rotation: z
      .enum(['none', 'clockwise', 'upsideDown', 'counterClockwise', 'other'])
      .exactOptional()
      .openapi({
        description:
          'The amount that YouTube needs to rotate the original source content to properly display the video.',
      }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.',
      }),
    widthPixels: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          "The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.",
      }),
  })
  .openapi({ description: 'Information about a video stream.', required: [] })
  .openapi('VideoFileDetailsVideoStream')

const VideoFileDetailsSchema = z
  .object({
    audioStreams: z
      .array(VideoFileDetailsAudioStreamSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.',
      }),
    bitrateBps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The uploaded video file's combined (video and audio) bitrate in bits per second.",
      }),
    container: z
      .string()
      .exactOptional()
      .openapi({ description: "The uploaded video file's container format." }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM ',
      }),
    durationMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The length of the uploaded video in milliseconds.' }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The uploaded file's name. This field is present whether a video file or another type of file was uploaded.",
      }),
    fileSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.",
      }),
    fileType: z
      .enum(['video', 'audio', 'image', 'archive', 'document', 'project', 'other'])
      .exactOptional()
      .openapi({
        description:
          "The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.",
      }),
    videoStreams: z
      .array(VideoFileDetailsVideoStreamSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.',
      }),
  })
  .openapi({
    description:
      'Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.',
    required: [],
  })
  .openapi('VideoFileDetails')

const VideoLiveStreamingDetailsSchema = z
  .object({
    activeLiveChatId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.',
      }),
    actualEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time that the broadcast actually ended. This value will not be available until the broadcast is over.',
      }),
    actualStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time that the broadcast actually started. This value will not be available until the broadcast begins.',
      }),
    concurrentViewers: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.',
      }),
    scheduledEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to contiue indefinitely.',
      }),
    scheduledStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time that the broadcast is scheduled to begin.' }),
  })
  .openapi({ description: 'Details about the live streaming metadata.', required: [] })
  .openapi('VideoLiveStreamingDetails')

const VideoLocalizationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Localized version of the video's description." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "Localized version of the video's title." }),
  })
  .openapi({
    description: 'Localized versions of certain video properties (e.g. title).',
    required: [],
  })
  .openapi('VideoLocalization')

const VideoMonetizationDetailsSchema = z
  .object({
    access: AccessPolicySchema.exactOptional().openapi({
      description: 'The value of access indicates whether the video can be monetized or not.',
    }),
  })
  .openapi({ description: 'Details about monetization of a YouTube Video.', required: [] })
  .openapi('VideoMonetizationDetails')

const VideoPlayerSchema = z
  .object({
    embedHeight: z.string().exactOptional(),
    embedHtml: z
      .string()
      .exactOptional()
      .openapi({ description: 'An <iframe> tag that embeds a player that will play the video.' }),
    embedWidth: z.string().exactOptional().openapi({ description: 'The embed width' }),
  })
  .openapi({ description: 'Player to be used for a video playback.', required: [] })
  .openapi('VideoPlayer')

const VideoProcessingDetailsProcessingProgressSchema = z
  .object({
    partsProcessed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.',
      }),
    partsTotal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.',
      }),
    timeLeftMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.',
      }),
  })
  .openapi({ description: 'Video processing progress and completion time estimate.', required: [] })
  .openapi('VideoProcessingDetailsProcessingProgress')

const VideoProcessingDetailsSchema = z
  .object({
    editorSuggestionsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.',
      }),
    fileDetailsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.",
      }),
    processingFailureReason: z
      .enum(['uploadFailed', 'transcodeFailed', 'streamingFailed', 'other'])
      .exactOptional()
      .openapi({
        description:
          "The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.",
      }),
    processingIssuesAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.",
      }),
    processingProgress: VideoProcessingDetailsProcessingProgressSchema.exactOptional().openapi({
      description:
        "The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing.",
    }),
    processingStatus: z
      .enum(['processing', 'succeeded', 'failed', 'terminated'])
      .exactOptional()
      .openapi({
        description:
          "The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.",
      }),
    tagSuggestionsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.",
      }),
    thumbnailsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value indicates whether thumbnail images have been generated for the video.',
      }),
  })
  .openapi({
    description:
      'Describes processing status and progress and availability of some other Video resource parts.',
    required: [],
  })
  .openapi('VideoProcessingDetails')

const VideoProjectDetailsSchema = z
  .object({})
  .openapi({
    description:
      'DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677',
  })
  .openapi('VideoProjectDetails')

const VideoRecordingDetailsSchema = z
  .object({
    location: GeoPointSchema.exactOptional().openapi({
      description: 'The geolocation information associated with the video.',
    }),
    locationDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The text description of the location where the video was recorded.',
      }),
    recordingDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the video was recorded.' }),
  })
  .openapi({ description: 'Recording information associated with the video.', required: [] })
  .openapi('VideoRecordingDetails')

const VideoSnippetSchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The YouTube video category associated with the video.' }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.',
      }),
    channelTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel title for the channel that the video belongs to.' }),
    defaultAudioLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The default_audio_language property specifies the language spoken in the video's default audio track.",
      }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: "The language of the videos's default snippet." }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The video's description. @mutable youtube.videos.insert youtube.videos.update",
      }),
    liveBroadcastContent: z
      .enum(['none', 'upcoming', 'live', 'completed'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if the video is an upcoming/active live broadcast. Or it\'s "none" if the video is not an upcoming/active live broadcast.',
      }),
    localized: VideoLocalizationSchema.exactOptional().openapi({
      description:
        'Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)',
    }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the video was uploaded.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of keyword tags associated with the video. Tags may contain spaces.',
      }),
    thumbnails: ThumbnailDetailsSchema.exactOptional().openapi({
      description:
        'A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: "The video's title. @mutable youtube.videos.insert youtube.videos.update",
      }),
  })
  .openapi({
    description:
      'Basic details about a video, including title, description, uploader, thumbnails and category.',
    required: [],
  })
  .openapi('VideoSnippet')

const VideoStatisticsSchema = z
  .object({
    commentCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of comments for the video.' }),
    dislikeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of users who have indicated that they disliked the video by giving it a negative rating.',
      }),
    favoriteCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of users who currently have the video marked as a favorite video.',
      }),
    likeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of users who have indicated that they liked the video by giving it a positive rating.',
      }),
    viewCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of times the video has been viewed.' }),
  })
  .openapi({
    description:
      'Statistics about the video, such as the number of times the video was viewed or liked.',
    required: [],
  })
  .openapi('VideoStatistics')

const VideoStatusSchema = z
  .object({
    embeddable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update',
      }),
    failureReason: z
      .enum(['conversion', 'invalidFile', 'emptyFile', 'tooSmall', 'codec', 'uploadAborted'])
      .exactOptional()
      .openapi({
        description:
          'This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.',
      }),
    license: z
      .enum(['youtube', 'creativeCommon'])
      .exactOptional()
      .openapi({
        description: "The video's license. @mutable youtube.videos.insert youtube.videos.update",
      }),
    madeForKids: z.boolean().exactOptional(),
    privacyStatus: z
      .enum(['public', 'unlisted', 'private'])
      .exactOptional()
      .openapi({ description: "The video's privacy status." }),
    publicStatsViewable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update',
      }),
    publishAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private..',
      }),
    rejectionReason: z
      .enum([
        'copyright',
        'inappropriate',
        'duplicate',
        'termsOfUse',
        'uploaderAccountSuspended',
        'length',
        'claim',
        'uploaderAccountClosed',
        'trademark',
        'legal',
      ])
      .exactOptional()
      .openapi({
        description:
          'This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.',
      }),
    selfDeclaredMadeForKids: z.boolean().exactOptional(),
    uploadStatus: z
      .enum(['uploaded', 'processed', 'failed', 'rejected', 'deleted'])
      .exactOptional()
      .openapi({ description: 'The status of the uploaded video.' }),
  })
  .openapi({
    description: 'Basic details about a video category, such as its localized title. Next Id: 18',
    required: [],
  })
  .openapi('VideoStatus')

const VideoSuggestionsTagSuggestionSchema = z
  .object({
    categoryRestricts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The keyword tag suggested for the video.' }),
  })
  .openapi({
    description: "A single tag suggestion with it's relevance information.",
    required: [],
  })
  .openapi('VideoSuggestionsTagSuggestion')

const VideoSuggestionsSchema = z
  .object({
    editorSuggestions: z
      .array(z.enum(['videoAutoLevels', 'videoStabilize', 'videoCrop', 'audioQuietAudioSwap']))
      .exactOptional()
      .openapi({
        description:
          'A list of video editing operations that might improve the video quality or playback experience of the uploaded video.',
      }),
    processingErrors: z
      .array(
        z.enum([
          'audioFile',
          'imageFile',
          'projectFile',
          'notAVideoFile',
          'docFile',
          'archiveFile',
          'unsupportedSpatialAudioLayout',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.",
      }),
    processingHints: z
      .array(
        z.enum([
          'nonStreamableMov',
          'sendBestQualityVideo',
          'sphericalVideo',
          'spatialAudio',
          'vrVideo',
          'hdrVideo',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "A list of suggestions that may improve YouTube's ability to process the video.",
      }),
    processingWarnings: z
      .array(
        z.enum([
          'unknownContainer',
          'unknownVideoCodec',
          'unknownAudioCodec',
          'inconsistentResolution',
          'hasEditlist',
          'problematicVideoCodec',
          'problematicAudioCodec',
          'unsupportedVrStereoMode',
          'unsupportedSphericalProjectionType',
          'unsupportedHdrPixelFormat',
          'unsupportedHdrColorMetadata',
          'problematicHdrLookupTable',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.',
      }),
    tagSuggestions: z
      .array(VideoSuggestionsTagSuggestionSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.",
      }),
  })
  .openapi({
    description:
      'Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.',
    required: [],
  })
  .openapi('VideoSuggestions')

const VideoTopicDetailsSchema = z
  .object({
    relevantTopicIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.',
      }),
    topicCategories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of Wikipedia URLs that provide a high-level description of the video's content.",
      }),
    topicIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API">Freebase Topic API.',
      }),
  })
  .openapi({ description: 'Freebase topic information related to the video.', required: [] })
  .openapi('VideoTopicDetails')

const VideoSchema = z
  .object({
    ageGating: VideoAgeGatingSchema.exactOptional().openapi({
      description:
        'Age restriction details related to a video. This data can only be retrieved by the video owner.',
    }),
    contentDetails: VideoContentDetailsSchema.exactOptional().openapi({
      description:
        'The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    fileDetails: VideoFileDetailsSchema.exactOptional().openapi({
      description:
        "The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the video.' }),
    kind: z
      .string()
      .default('youtube#video')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#video".',
      }),
    liveStreamingDetails: VideoLiveStreamingDetailsSchema.exactOptional().openapi({
      description:
        'The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.',
    }),
    localizations: z
      .record(z.string(), VideoLocalizationSchema)
      .exactOptional()
      .openapi({
        description:
          'The localizations object contains localized versions of the basic details about the video, such as its title and description.',
      }),
    monetizationDetails: VideoMonetizationDetailsSchema.exactOptional().openapi({
      description:
        'The monetizationDetails object encapsulates information about the monetization status of the video.',
    }),
    player: VideoPlayerSchema.exactOptional().openapi({
      description:
        'The player object contains information that you would use to play the video in an embedded player.',
    }),
    processingDetails: VideoProcessingDetailsSchema.exactOptional().openapi({
      description:
        "The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.",
    }),
    projectDetails: VideoProjectDetailsSchema.exactOptional().openapi({
      description:
        'The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677',
    }),
    recordingDetails: VideoRecordingDetailsSchema.exactOptional().openapi({
      description:
        'The recordingDetails object encapsulates information about the location, date and address where the video was recorded.',
    }),
    snippet: VideoSnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the video, such as its title, description, and category.',
    }),
    statistics: VideoStatisticsSchema.exactOptional().openapi({
      description: 'The statistics object contains statistics about the video.',
    }),
    status: VideoStatusSchema.exactOptional().openapi({
      description:
        "The status object contains information about the video's uploading, processing, and privacy statuses.",
    }),
    suggestions: VideoSuggestionsSchema.exactOptional().openapi({
      description:
        'The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.',
    }),
    topicDetails: VideoTopicDetailsSchema.exactOptional().openapi({
      description:
        'The topicDetails object encapsulates information about Freebase topics associated with the video.',
    }),
  })
  .openapi({ description: 'A *video* resource represents a YouTube video.', required: [] })
  .openapi('Video')

const VideoAbuseReportSchema = z
  .object({
    comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional comments regarding the abuse report.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language that the content was viewed in.' }),
    reasonId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.',
      }),
    secondaryReasonId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.',
      }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the video.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoAbuseReport')

const VideoAbuseReportSecondaryReasonSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of this abuse report secondary reason.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized label for this abuse report secondary reason.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoAbuseReportSecondaryReason')

const VideoAbuseReportReasonSnippetSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized label belonging to this abuse report reason.' }),
    secondaryReasons: z
      .array(VideoAbuseReportSecondaryReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)',
      }),
  })
  .openapi({
    description: 'Basic details about a video category, such as its localized title.',
    required: [],
  })
  .openapi('VideoAbuseReportReasonSnippet')

const VideoAbuseReportReasonSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this abuse report reason.' }),
    kind: z
      .string()
      .default('youtube#videoAbuseReportReason')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`.',
      }),
    snippet: VideoAbuseReportReasonSnippetSchema.exactOptional().openapi({
      description: 'The `snippet` object contains basic details about the abuse report reason.',
    }),
  })
  .openapi({
    description:
      'A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.',
    required: [],
  })
  .openapi('VideoAbuseReportReason')

const VideoAbuseReportReasonListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(VideoAbuseReportReasonSchema)
      .exactOptional()
      .openapi({
        description: 'A list of valid abuse reasons that are used with `video.ReportAbuse`.',
      }),
    kind: z
      .string()
      .default('youtube#videoAbuseReportReasonListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`.',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `visitorId` identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoAbuseReportReasonListResponse')

const VideoCategorySnippetSchema = z
  .object({
    assignable: z.boolean().exactOptional(),
    channelId: z
      .string()
      .default('UCBR8-60-B28hp2BmDPdntcQ')
      .exactOptional()
      .openapi({ description: 'The YouTube channel that created the video category.' }),
    title: z.string().exactOptional().openapi({ description: "The video category's title." }),
  })
  .openapi({
    description: 'Basic details about a video category, such as its localized title.',
    required: [],
  })
  .openapi('VideoCategorySnippet')

const VideoCategorySchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID that YouTube uses to uniquely identify the video category.',
      }),
    kind: z
      .string()
      .default('youtube#videoCategory')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".',
      }),
    snippet: VideoCategorySnippetSchema.exactOptional().openapi({
      description:
        'The snippet object contains basic details about the video category, including its title.',
    }),
  })
  .openapi({
    description:
      'A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.',
    required: [],
  })
  .openapi('VideoCategory')

const VideoCategoryListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(VideoCategorySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.',
      }),
    kind: z
      .string()
      .default('youtube#videoCategoryListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoCategoryListResponse')

const VideoRatingSchema = z
  .object({
    rating: z
      .enum(['none', 'like', 'dislike'])
      .exactOptional()
      .openapi({ description: 'Rating of a video.' }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID that YouTube uses to uniquely identify the video.' }),
  })
  .openapi({ description: 'Basic details about rating of a video.', required: [] })
  .openapi('VideoRating')

const VideoGetRatingResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z
      .array(VideoRatingSchema)
      .exactOptional()
      .openapi({ description: 'A list of ratings that match the request criteria.' }),
    kind: z
      .string()
      .default('youtube#videoGetRatingResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoGetRatingResponse')

const VideoListResponseSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serialized EventId of the request which produced this response.' }),
    items: z.array(VideoSchema).exactOptional(),
    kind: z
      .string()
      .default('youtube#videoListResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional(),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visitorId identifies the visitor.' }),
  })
  .openapi({ required: [] })
  .openapi('VideoListResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/youtube': 'Manage your YouTube account',
        'https://www.googleapis.com/auth/youtube.channel-memberships.creator':
          'See a list of your current active channel members, their current level, and when they became a member',
        'https://www.googleapis.com/auth/youtube.force-ssl':
          'See, edit, and permanently delete your YouTube videos, ratings, comments and captions',
        'https://www.googleapis.com/auth/youtube.readonly': 'View your YouTube account',
        'https://www.googleapis.com/auth/youtube.upload': 'Manage your YouTube videos',
        'https://www.googleapis.com/auth/youtubepartner':
          'View and manage your assets and associated content on YouTube',
        'https://www.googleapis.com/auth/youtubepartner-channel-audit':
          'View private information of your YouTube channel relevant during the audit process with a YouTube partner',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/youtube': 'Manage your YouTube account',
        'https://www.googleapis.com/auth/youtube.channel-memberships.creator':
          'See a list of your current active channel members, their current level, and when they became a member',
        'https://www.googleapis.com/auth/youtube.force-ssl':
          'See, edit, and permanently delete your YouTube videos, ratings, comments and captions',
        'https://www.googleapis.com/auth/youtube.readonly': 'View your YouTube account',
        'https://www.googleapis.com/auth/youtube.upload': 'Manage your YouTube videos',
        'https://www.googleapis.com/auth/youtubepartner':
          'View and manage your assets and associated content on YouTube',
        'https://www.googleapis.com/auth/youtubepartner-channel-audit':
          'View private information of your YouTube channel relevant during the audit process with a YouTube partner',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postYoutubeV3AbuseReportsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/abuseReports',
  tags: ['abuseReports'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.abuseReports.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AbuseReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AbuseReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3ActivitiesRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/activities',
  tags: ['activities'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.activities.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'channelId', schema: { type: 'string' }, required: false },
        }),
      home: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'home', schema: { type: 'boolean' }, required: false },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'mine', schema: { type: 'boolean' }, required: false },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishedAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'publishedAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishedBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'publishedBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'regionCode', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ActivityListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const getYoutubeV3CaptionsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/captions',
  tags: ['captions'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.captions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      videoId: z
        .string()
        .openapi({
          param: {
            description: 'Returns the captions for the specified video.',
            in: 'query',
            name: 'videoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the captions with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      onBehalfOf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the Google+ Page for the channel that the request is on behalf of.',
            in: 'query',
            name: 'onBehalfOf',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaptionListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const putYoutubeV3CaptionsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/captions',
  tags: ['captions'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.captions.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the Google+ Page for the channel that the request is on behalf of.',
            in: 'query',
            name: 'onBehalfOf',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sync: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.',
            in: 'query',
            name: 'sync',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: CaptionSchema },
        'text/xml': { schema: CaptionSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3CaptionsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/captions',
  tags: ['captions'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.captions.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the Google+ Page for the channel that the request is be on behalf of',
            in: 'query',
            name: 'onBehalfOf',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sync: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.',
            in: 'query',
            name: 'sync',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: CaptionSchema },
        'text/xml': { schema: CaptionSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3CaptionsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/captions',
  tags: ['captions'],
  description: 'Deletes a resource.',
  operationId: 'youtube.captions.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the Google+ Page for the channel that the request is be on behalf of',
            in: 'query',
            name: 'onBehalfOf',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3CaptionsIdRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/captions/{id}',
  tags: ['captions'],
  description: 'Downloads a caption track.',
  operationId: 'youtube.captions.download',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      onBehalfOf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the Google+ Page for the channel that the request is be on behalf of',
            in: 'query',
            name: 'onBehalfOf',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tfmt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Convert the captions into this format. Supported options are sbv, srt, and vtt.',
            in: 'query',
            name: 'tfmt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tlang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'tlang is the language code; machine translate the captions into this language.',
            in: 'query',
            name: 'tlang',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the caption track to download, required for One Platform.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3ChannelBannersInsertRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/channelBanners/insert',
  tags: ['channelBanners'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.channelBanners.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unused, channel_id is currently derived from the security context of the requestor.',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: ChannelBannerResourceSchema },
        'image/jpeg': { schema: ChannelBannerResourceSchema },
        'image/png': { schema: ChannelBannerResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelBannerResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.upload'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.upload'],
    },
  ],
})

export const getYoutubeV3ChannelSectionsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/channelSections',
  tags: ['channelSections'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.channelSections.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the ChannelSections owned by the specified channel ID.',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return content in specified language',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the ChannelSections with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the ChannelSections owned by the authenticated user.',
            in: 'query',
            name: 'mine',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSectionListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const putYoutubeV3ChannelSectionsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/channelSections',
  tags: ['channelSections'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.channelSections.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSectionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSectionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3ChannelSectionsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/channelSections',
  tags: ['channelSections'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.channelSections.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSectionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSectionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3ChannelSectionsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/channelSections',
  tags: ['channelSections'],
  description: 'Deletes a resource.',
  operationId: 'youtube.channelSections.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3ChannelsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/channels',
  tags: ['channels'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.channels.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the channels within the specified guide category ID.',
            in: 'query',
            name: 'categoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      forUsername: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the channel associated with a YouTube username.',
            in: 'query',
            name: 'forUsername',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the channels with the specified IDs.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      managedByMe: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the channels managed by the authenticated user.',
            in: 'query',
            name: 'managedByMe',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the ids of channels owned by the authenticated user.',
            in: 'query',
            name: 'mine',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      mySubscribers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the channels subscribed to the authenticated user',
            in: 'query',
            name: 'mySubscribers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner-channel-audit'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner-channel-audit'],
    },
  ],
})

export const putYoutubeV3ChannelsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/channels',
  tags: ['channels'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.channels.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.',
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3CommentThreadsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/commentThreads',
  tags: ['commentThreads'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.commentThreads.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      allThreadsRelatedToChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns the comment threads of all videos of the channel and the channel comments as well.',
            in: 'query',
            name: 'allThreadsRelatedToChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns the comment threads for all the channel comments (ie does not include comments left on videos).',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the comment threads with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      moderationStatus: z
        .enum(['published', 'heldForReview', 'likelySpam', 'rejected'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.",
            in: 'query',
            name: 'moderationStatus',
            schema: {
              enum: ['published', 'heldForReview', 'likelySpam', 'rejected'],
              type: 'string',
            },
            required: false,
          },
        }),
      order: z
        .enum(['orderUnspecified', 'time', 'relevance'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            schema: { enum: ['orderUnspecified', 'time', 'relevance'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.",
            in: 'query',
            name: 'searchTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      textFormat: z
        .enum(['textFormatUnspecified', 'html', 'plainText'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The requested text format for the returned comments.',
            in: 'query',
            name: 'textFormat',
            schema: { enum: ['textFormatUnspecified', 'html', 'plainText'], type: 'string' },
            required: false,
          },
        }),
      videoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the comment threads of the specified video.',
            in: 'query',
            name: 'videoId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentThreadListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const putYoutubeV3CommentThreadsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/commentThreads',
  tags: ['youtube'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.youtube.v3.updateCommentThreads',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.',
            explode: true,
            in: 'query',
            name: 'part',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentThreadSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentThreadSchema } },
    },
  },
})

export const postYoutubeV3CommentThreadsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/commentThreads',
  tags: ['commentThreads'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.commentThreads.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentThreadSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentThreadSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3CommentsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/comments',
  tags: ['comments'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.comments.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the comments with the given IDs for One Platform.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.',
            in: 'query',
            name: 'parentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      textFormat: z
        .enum(['textFormatUnspecified', 'html', 'plainText'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The requested text format for the returned comments.',
            in: 'query',
            name: 'textFormat',
            schema: { enum: ['textFormatUnspecified', 'html', 'plainText'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const putYoutubeV3CommentsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/comments',
  tags: ['comments'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.comments.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3CommentsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/comments',
  tags: ['comments'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.comments.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3CommentsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/comments',
  tags: ['comments'],
  description: 'Deletes a resource.',
  operationId: 'youtube.comments.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3CommentsMarkAsSpamRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/comments/markAsSpam',
  tags: ['comments'],
  description:
    "Expresses the caller's opinion that one or more comments should be flagged as spam.",
  operationId: 'youtube.comments.markAsSpam',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: "Flags the comments with the given IDs as spam in the caller's opinion.",
            explode: true,
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3CommentsSetModerationStatusRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/comments/setModerationStatus',
  tags: ['comments'],
  description: 'Sets the moderation status of one or more comments.',
  operationId: 'youtube.comments.setModerationStatus',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Modifies the moderation status of the comments with the given IDs',
            explode: true,
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      moderationStatus: z
        .enum(['published', 'heldForReview', 'likelySpam', 'rejected'])
        .openapi({
          param: {
            description:
              "Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: MODERATION_STATUS_PUBLISHED, MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.",
            in: 'query',
            name: 'moderationStatus',
            required: true,
            schema: {
              enum: ['published', 'heldForReview', 'likelySpam', 'rejected'],
              type: 'string',
            },
          },
        }),
      banAuthor: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.',
            in: 'query',
            name: 'banAuthor',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3I18nLanguagesRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/i18nLanguages',
  tags: ['i18nLanguages'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.i18nLanguages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'hl', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: I18nLanguageListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3I18nRegionsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/i18nRegions',
  tags: ['i18nRegions'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.i18nRegions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'hl', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: I18nRegionListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3LiveBroadcastsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/liveBroadcasts',
  tags: ['liveBroadcasts'],
  description: 'Retrieve the list of broadcasts associated with the given channel.',
  operationId: 'youtube.liveBroadcasts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      broadcastStatus: z
        .enum(['broadcastStatusFilterUnspecified', 'all', 'active', 'upcoming', 'completed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Return broadcasts with a certain status, e.g. active broadcasts.',
            in: 'query',
            name: 'broadcastStatus',
            schema: {
              enum: ['broadcastStatusFilterUnspecified', 'all', 'active', 'upcoming', 'completed'],
              type: 'string',
            },
            required: false,
          },
        }),
      broadcastType: z
        .enum(['broadcastTypeFilterUnspecified', 'all', 'event', 'persistent'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only broadcasts with the selected type.',
            in: 'query',
            name: 'broadcastType',
            schema: {
              enum: ['broadcastTypeFilterUnspecified', 'all', 'event', 'persistent'],
              type: 'string',
            },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return broadcasts with the given ids from Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'mine', schema: { type: 'boolean' }, required: false },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveBroadcastListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const putYoutubeV3LiveBroadcastsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/liveBroadcasts',
  tags: ['liveBroadcasts'],
  description: 'Updates an existing broadcast for the authenticated user.',
  operationId: 'youtube.liveBroadcasts.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              "The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.",
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveBroadcastSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveBroadcastSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3LiveBroadcastsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveBroadcasts',
  tags: ['liveBroadcasts'],
  description: 'Inserts a new stream for the authenticated user.',
  operationId: 'youtube.liveBroadcasts.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveBroadcastSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveBroadcastSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3LiveBroadcastsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/liveBroadcasts',
  tags: ['liveBroadcasts'],
  description: 'Delete a given broadcast.',
  operationId: 'youtube.liveBroadcasts.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: {
            description: 'Broadcast to delete.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3LiveBroadcastsBindRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveBroadcasts/bind',
  tags: ['liveBroadcasts'],
  description: 'Bind a broadcast to a stream.',
  operationId: 'youtube.liveBroadcasts.bind',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: {
            description: 'Broadcast to bind to the stream',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      streamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Stream to bind, if not set unbind the current one.',
            in: 'query',
            name: 'streamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveBroadcastSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3LiveBroadcastsCuepointRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveBroadcasts/cuepoint',
  tags: ['liveBroadcasts'],
  description: 'Insert cuepoints in a broadcast',
  operationId: 'youtube.liveBroadcasts.insertCuepoint',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Broadcast to insert ads to, or equivalently `external_video_id` for internal use.',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CuepointSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CuepointSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3LiveBroadcastsTransitionRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveBroadcasts/transition',
  tags: ['liveBroadcasts'],
  description: 'Transition a broadcast to a given status.',
  operationId: 'youtube.liveBroadcasts.transition',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      broadcastStatus: z
        .enum(['statusUnspecified', 'testing', 'live', 'complete'])
        .openapi({
          param: {
            description: 'The status to which the broadcast is going to transition.',
            in: 'query',
            name: 'broadcastStatus',
            required: true,
            schema: { enum: ['statusUnspecified', 'testing', 'live', 'complete'], type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Broadcast to transition.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveBroadcastSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3LiveChatBansRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveChat/bans',
  tags: ['liveChatBans'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.liveChatBans.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveChatBanSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveChatBanSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3LiveChatBansRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/liveChat/bans',
  tags: ['liveChatBans'],
  description: 'Deletes a chat ban.',
  operationId: 'youtube.liveChatBans.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3LiveChatMessagesRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/liveChat/messages',
  tags: ['liveChatMessages'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.liveChatMessages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      liveChatId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the live chat for which comments should be returned.',
            in: 'query',
            name: 'liveChatId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the localization language in which the system messages should be returned.',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(200).max(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 2000, minimum: 200, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      profileImageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(16).max(720),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the size of the profile image that should be returned for each user.',
            in: 'query',
            name: 'profileImageSize',
            schema: { maximum: 720, minimum: 16, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveChatMessageListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const postYoutubeV3LiveChatMessagesRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveChat/messages',
  tags: ['liveChatMessages'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.liveChatMessages.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveChatMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveChatMessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3LiveChatMessagesRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/liveChat/messages',
  tags: ['liveChatMessages'],
  description: 'Deletes a chat message.',
  operationId: 'youtube.liveChatMessages.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3LiveChatModeratorsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/liveChat/moderators',
  tags: ['liveChatModerators'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.liveChatModerators.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      liveChatId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the live chat for which moderators should be returned.',
            in: 'query',
            name: 'liveChatId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveChatModeratorListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const postYoutubeV3LiveChatModeratorsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveChat/moderators',
  tags: ['liveChatModerators'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.liveChatModerators.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveChatModeratorSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveChatModeratorSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3LiveChatModeratorsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/liveChat/moderators',
  tags: ['liveChatModerators'],
  description: 'Deletes a chat moderator.',
  operationId: 'youtube.liveChatModerators.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3LiveStreamsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/liveStreams',
  tags: ['liveStreams'],
  description: 'Retrieve the list of streams associated with the given channel. --',
  operationId: 'youtube.liveStreams.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return LiveStreams with the given ids from Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'mine', schema: { type: 'boolean' }, required: false },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveStreamListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const putYoutubeV3LiveStreamsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/liveStreams',
  tags: ['liveStreams'],
  description: 'Updates an existing stream for the authenticated user.',
  operationId: 'youtube.liveStreams.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveStreamSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveStreamSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const postYoutubeV3LiveStreamsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/liveStreams',
  tags: ['liveStreams'],
  description: 'Inserts a new stream for the authenticated user.',
  operationId: 'youtube.liveStreams.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiveStreamSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiveStreamSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const deleteYoutubeV3LiveStreamsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/liveStreams',
  tags: ['liveStreams'],
  description: 'Deletes an existing stream for the authenticated user.',
  operationId: 'youtube.liveStreams.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
  ],
})

export const getYoutubeV3MembersRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/members',
  tags: ['members'],
  description: 'Retrieves a list of members that match the request criteria for a channel.',
  operationId: 'youtube.members.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      filterByMemberChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.',
            in: 'query',
            name: 'filterByMemberChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hasAccessToLevel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter members in the results set to the ones that have access to a level.',
            in: 'query',
            name: 'hasAccessToLevel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mode: z
        .enum(['listMembersModeUnknown', 'updates', 'all_current'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Parameter that specifies which channel members to return.',
            in: 'query',
            name: 'mode',
            schema: { enum: ['listMembersModeUnknown', 'updates', 'all_current'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MemberListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.channel-memberships.creator'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.channel-memberships.creator'],
    },
  ],
})

export const getYoutubeV3MembershipsLevelsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/membershipsLevels',
  tags: ['membershipsLevels'],
  description: 'Retrieves a list of all pricing levels offered by a creator to the fans.',
  operationId: 'youtube.membershipsLevels.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MembershipsLevelListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.channel-memberships.creator'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.channel-memberships.creator'],
    },
  ],
})

export const getYoutubeV3PlaylistItemsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/playlistItems',
  tags: ['playlistItems'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.playlistItems.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      playlistId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the playlist items within the given playlist.',
            in: 'query',
            name: 'playlistId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the playlist items associated with the given video ID.',
            in: 'query',
            name: 'videoId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistItemListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const putYoutubeV3PlaylistItemsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/playlistItems',
  tags: ['playlistItems'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.playlistItems.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              "The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.",
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlaylistItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3PlaylistItemsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/playlistItems',
  tags: ['playlistItems'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.playlistItems.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlaylistItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3PlaylistItemsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/playlistItems',
  tags: ['playlistItems'],
  description: 'Deletes a resource.',
  operationId: 'youtube.playlistItems.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3PlaylistsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/playlists',
  tags: ['playlists'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.playlists.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the playlists owned by the specified channel ID.',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return content in specified language',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the playlists with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the playlists owned by the authenticated user.',
            in: 'query',
            name: 'mine',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const putYoutubeV3PlaylistsRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/playlists',
  tags: ['playlists'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.playlists.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              "The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.",
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlaylistSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3PlaylistsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/playlists',
  tags: ['playlists'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.playlists.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlaylistSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlaylistSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3PlaylistsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/playlists',
  tags: ['playlists'],
  description: 'Deletes a resource.',
  operationId: 'youtube.playlists.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3SearchRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/search',
  tags: ['search'],
  description: 'Retrieves a list of search resources',
  operationId: 'youtube.search.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on resources belonging to this channelId.',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      channelType: z
        .enum(['channelTypeUnspecified', 'any', 'show'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Add a filter on the channel search.',
            in: 'query',
            name: 'channelType',
            schema: { enum: ['channelTypeUnspecified', 'any', 'show'], type: 'string' },
            required: false,
          },
        }),
      eventType: z
        .enum(['none', 'upcoming', 'live', 'completed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the livestream status of the videos.',
            in: 'query',
            name: 'eventType',
            schema: { enum: ['none', 'upcoming', 'live', 'completed'], type: 'string' },
            required: false,
          },
        }),
      forContentOwner: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search owned by a content owner.',
            in: 'query',
            name: 'forContentOwner',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      forDeveloper: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.',
            in: 'query',
            name: 'forDeveloper',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      forMine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search for the private videos of the authenticated user.',
            in: 'query',
            name: 'forMine',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on location of the video',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locationRadius: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on distance from the location (specified above).',
            in: 'query',
            name: 'locationRadius',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .enum([
          'searchSortUnspecified',
          'date',
          'rating',
          'viewCount',
          'relevance',
          'title',
          'videoCount',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order of the results.',
            in: 'query',
            name: 'order',
            schema: {
              enum: [
                'searchSortUnspecified',
                'date',
                'rating',
                'viewCount',
                'relevance',
                'title',
                'videoCount',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishedAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on resources published after this date.',
            in: 'query',
            name: 'publishedAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishedBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on resources published before this date.',
            in: 'query',
            name: 'publishedBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Textual search terms to match.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Display the content as seen by viewers in this country.',
            in: 'query',
            name: 'regionCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relatedToVideoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search related to a resource.',
            in: 'query',
            name: 'relatedToVideoId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relevanceLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results relevant to this language.',
            in: 'query',
            name: 'relevanceLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      safeSearch: z
        .enum(['safeSearchSettingUnspecified', 'none', 'moderate', 'strict'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether the search results should include restricted content as well as standard content.',
            in: 'query',
            name: 'safeSearch',
            schema: {
              enum: ['safeSearchSettingUnspecified', 'none', 'moderate', 'strict'],
              type: 'string',
            },
            required: false,
          },
        }),
      topicId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict results to a particular topic.',
            in: 'query',
            name: 'topicId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict results to a particular set of resource types from One Platform.',
            explode: true,
            in: 'query',
            name: 'type',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      videoCaption: z
        .enum(['videoCaptionUnspecified', 'any', 'closedCaption', 'none'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the presence of captions on the videos.',
            in: 'query',
            name: 'videoCaption',
            schema: {
              enum: ['videoCaptionUnspecified', 'any', 'closedCaption', 'none'],
              type: 'string',
            },
            required: false,
          },
        }),
      videoCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on videos in a specific category.',
            in: 'query',
            name: 'videoCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoDefinition: z
        .enum(['any', 'standard', 'high'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the definition of the videos.',
            in: 'query',
            name: 'videoDefinition',
            schema: { enum: ['any', 'standard', 'high'], type: 'string' },
            required: false,
          },
        }),
      videoDimension: z
        .enum(['any', '2d', '3d'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on 3d videos.',
            in: 'query',
            name: 'videoDimension',
            schema: { enum: ['any', '2d', '3d'], type: 'string' },
            required: false,
          },
        }),
      videoDuration: z
        .enum(['videoDurationUnspecified', 'any', 'short', 'medium', 'long'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the duration of the videos.',
            in: 'query',
            name: 'videoDuration',
            schema: {
              enum: ['videoDurationUnspecified', 'any', 'short', 'medium', 'long'],
              type: 'string',
            },
            required: false,
          },
        }),
      videoEmbeddable: z
        .enum(['videoEmbeddableUnspecified', 'any', 'true'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on embeddable videos.',
            in: 'query',
            name: 'videoEmbeddable',
            schema: { enum: ['videoEmbeddableUnspecified', 'any', 'true'], type: 'string' },
            required: false,
          },
        }),
      videoLicense: z
        .enum(['any', 'youtube', 'creativeCommon'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the license of the videos.',
            in: 'query',
            name: 'videoLicense',
            schema: { enum: ['any', 'youtube', 'creativeCommon'], type: 'string' },
            required: false,
          },
        }),
      videoSyndicated: z
        .enum(['videoSyndicatedUnspecified', 'any', 'true'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on syndicated videos.',
            in: 'query',
            name: 'videoSyndicated',
            schema: { enum: ['videoSyndicatedUnspecified', 'any', 'true'], type: 'string' },
            required: false,
          },
        }),
      videoType: z
        .enum(['videoTypeUnspecified', 'any', 'movie', 'episode'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on videos of a specific type.',
            in: 'query',
            name: 'videoType',
            schema: { enum: ['videoTypeUnspecified', 'any', 'movie', 'episode'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3SubscriptionsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/subscriptions',
  tags: ['subscriptions'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.subscriptions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the subscriptions of the given channel owner.',
            in: 'query',
            name: 'channelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      forChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.',
            in: 'query',
            name: 'forChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the subscriptions with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag for returning the subscriptions of the authenticated user.',
            in: 'query',
            name: 'mine',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      myRecentSubscribers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'myRecentSubscribers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      mySubscribers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the subscribers of the given channel owner.',
            in: 'query',
            name: 'mySubscribers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .enum(['subscriptionOrderUnspecified', 'relevance', 'unread', 'alphabetical'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The order of the returned subscriptions',
            in: 'query',
            name: 'order',
            schema: {
              enum: ['subscriptionOrderUnspecified', 'relevance', 'unread', 'alphabetical'],
              type: 'string',
            },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3SubscriptionsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/subscriptions',
  tags: ['subscriptions'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.subscriptions.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3SubscriptionsRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/subscriptions',
  tags: ['subscriptions'],
  description: 'Deletes a resource.',
  operationId: 'youtube.subscriptions.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3SuperChatEventsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/superChatEvents',
  tags: ['superChatEvents'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.superChatEvents.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return rendered funding amounts in specified language.',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SuperChatEventListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const postYoutubeV3TestsRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/tests',
  tags: ['tests'],
  description: 'POST method.',
  operationId: 'youtube.tests.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      externalChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'externalChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const getYoutubeV3ThirdPartyLinksRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/thirdPartyLinks',
  tags: ['thirdPartyLinks'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.thirdPartyLinks.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      externalChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Channel ID to which changes should be applied, for delegation.',
            in: 'query',
            name: 'externalChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      linkingToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get a third party link with the given linking token.',
            in: 'query',
            name: 'linkingToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['linkUnspecified', 'channelToStoreLink'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Get a third party link of the given type.',
            in: 'query',
            name: 'type',
            schema: { enum: ['linkUnspecified', 'channelToStoreLink'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThirdPartyLinkListResponseSchema } },
    },
  },
})

export const putYoutubeV3ThirdPartyLinksRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/thirdPartyLinks',
  tags: ['thirdPartyLinks'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.thirdPartyLinks.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      externalChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Channel ID to which changes should be applied, for delegation.',
            in: 'query',
            name: 'externalChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThirdPartyLinkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThirdPartyLinkSchema } },
    },
  },
})

export const postYoutubeV3ThirdPartyLinksRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/thirdPartyLinks',
  tags: ['thirdPartyLinks'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.thirdPartyLinks.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      externalChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Channel ID to which changes should be applied, for delegation.',
            in: 'query',
            name: 'externalChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThirdPartyLinkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThirdPartyLinkSchema } },
    },
  },
})

export const deleteYoutubeV3ThirdPartyLinksRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/thirdPartyLinks',
  tags: ['thirdPartyLinks'],
  description: 'Deletes a resource.',
  operationId: 'youtube.thirdPartyLinks.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      linkingToken: z
        .string()
        .openapi({
          param: {
            description: 'Delete the partner links with the given linking token.',
            in: 'query',
            name: 'linkingToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['linkUnspecified', 'channelToStoreLink'])
        .openapi({
          param: {
            description: 'Type of the link to be deleted.',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['linkUnspecified', 'channelToStoreLink'], type: 'string' },
          },
        }),
      externalChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Channel ID to which changes should be applied, for delegation.',
            in: 'query',
            name: 'externalChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Do not use. Required for compatibility.',
            explode: true,
            in: 'query',
            name: 'part',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postYoutubeV3ThumbnailsSetRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/thumbnails/set',
  tags: ['thumbnails'],
  description:
    "As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.",
  operationId: 'youtube.thumbnails.set',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      videoId: z
        .string()
        .openapi({
          param: {
            description: 'Returns the Thumbnail with the given video IDs for Stubby or Apiary.',
            in: 'query',
            name: 'videoId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ThumbnailSetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.upload'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.upload'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3VideoAbuseReportReasonsRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/videoAbuseReportReasons',
  tags: ['videoAbuseReportReasons'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.videoAbuseReportReasons.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'hl', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoAbuseReportReasonListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
  ],
})

export const getYoutubeV3VideoCategoriesRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/videoCategories',
  tags: ['videoCategories'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.videoCategories.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'hl', schema: { type: 'string' }, required: false },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the video categories with the given IDs for Stubby or Apiary.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'regionCode', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoCategoryListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3VideosRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/videos',
  tags: ['videos'],
  description: 'Retrieves a list of resources, possibly filtered.',
  operationId: 'youtube.videos.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      chart: z
        .enum(['chartUnspecified', 'mostPopular'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the videos that are in the specified chart.',
            in: 'query',
            name: 'chart',
            schema: { enum: ['chartUnspecified', 'mostPopular'], type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return videos with the given ids.',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'locale', schema: { type: 'string' }, required: false },
        }),
      maxHeight: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(72).max(8192),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxHeight',
            schema: { maximum: 8192, minimum: 72, type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      maxWidth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(72).max(8192),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the player with maximum height specified in',
            in: 'query',
            name: 'maxWidth',
            schema: { maximum: 8192, minimum: 72, type: 'integer' },
            required: false,
          },
        }),
      myRating: z
        .enum(['none', 'like', 'dislike'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.',
            in: 'query',
            name: 'myRating',
            schema: { enum: ['none', 'like', 'dislike'], type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use a chart that is specific to the specified region',
            in: 'query',
            name: 'regionCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use chart that is specific to the specified video category',
            in: 'query',
            name: 'videoCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const putYoutubeV3VideosRoute = createRoute({
  method: 'put',
  path: '/youtube/v3/videos',
  tags: ['videos'],
  description: 'Updates an existing resource.',
  operationId: 'youtube.videos.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              "The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.",
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VideoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3VideosRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/videos',
  tags: ['videos'],
  description: 'Inserts a new resource into this collection.',
  operationId: 'youtube.videos.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      part: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.',
            explode: true,
            in: 'query',
            name: 'part',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      autoLevels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Should auto-levels be applied to the upload.',
            in: 'query',
            name: 'autoLevels',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      notifySubscribers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Notify the channel subscribers about the new video. As default, the notification is enabled.',
            in: 'query',
            name: 'notifySubscribers',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwnerChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.',
            in: 'query',
            name: 'onBehalfOfContentOwnerChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      stabilize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Should stabilize be applied to the upload.',
            in: 'query',
            name: 'stabilize',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: VideoSchema },
        'video/1d-interleaved-parityfec': { schema: VideoSchema },
        'video/3gpp': { schema: VideoSchema },
        'video/3gpp-tt': { schema: VideoSchema },
        'video/3gpp2': { schema: VideoSchema },
        'video/av1': { schema: VideoSchema },
        'video/bmpeg': { schema: VideoSchema },
        'video/bt656': { schema: VideoSchema },
        'video/celb': { schema: VideoSchema },
        'video/dv': { schema: VideoSchema },
        'video/encaprtp': { schema: VideoSchema },
        'video/ffv1': { schema: VideoSchema },
        'video/flexfec': { schema: VideoSchema },
        'video/h261': { schema: VideoSchema },
        'video/h263': { schema: VideoSchema },
        'video/h263-1998': { schema: VideoSchema },
        'video/h263-2000': { schema: VideoSchema },
        'video/h264': { schema: VideoSchema },
        'video/h264-rcdo': { schema: VideoSchema },
        'video/h264-svc': { schema: VideoSchema },
        'video/h265': { schema: VideoSchema },
        'video/iso.segment': { schema: VideoSchema },
        'video/jpeg': { schema: VideoSchema },
        'video/jpeg2000': { schema: VideoSchema },
        'video/jpm': { schema: VideoSchema },
        'video/jxsv': { schema: VideoSchema },
        'video/mj2': { schema: VideoSchema },
        'video/mp1s': { schema: VideoSchema },
        'video/mp2p': { schema: VideoSchema },
        'video/mp2t': { schema: VideoSchema },
        'video/mp4': { schema: VideoSchema },
        'video/mp4v-es': { schema: VideoSchema },
        'video/mpeg': { schema: VideoSchema },
        'video/mpeg4-generic': { schema: VideoSchema },
        'video/mpv': { schema: VideoSchema },
        'video/nv': { schema: VideoSchema },
        'video/ogg': { schema: VideoSchema },
        'video/parityfec': { schema: VideoSchema },
        'video/pointer': { schema: VideoSchema },
        'video/quicktime': { schema: VideoSchema },
        'video/raptorfec': { schema: VideoSchema },
        'video/raw': { schema: VideoSchema },
        'video/rtp-enc-aescm128': { schema: VideoSchema },
        'video/rtploopback': { schema: VideoSchema },
        'video/rtx': { schema: VideoSchema },
        'video/scip': { schema: VideoSchema },
        'video/smpte291': { schema: VideoSchema },
        'video/smpte292m': { schema: VideoSchema },
        'video/ulpfec': { schema: VideoSchema },
        'video/vc1': { schema: VideoSchema },
        'video/vc2': { schema: VideoSchema },
        'video/vnd.cctv': { schema: VideoSchema },
        'video/vnd.dece.hd': { schema: VideoSchema },
        'video/vnd.dece.mobile': { schema: VideoSchema },
        'video/vnd.dece.mp4': { schema: VideoSchema },
        'video/vnd.dece.pd': { schema: VideoSchema },
        'video/vnd.dece.sd': { schema: VideoSchema },
        'video/vnd.dece.video': { schema: VideoSchema },
        'video/vnd.directv.mpeg': { schema: VideoSchema },
        'video/vnd.directv.mpeg-tts': { schema: VideoSchema },
        'video/vnd.dlna.mpeg-tts': { schema: VideoSchema },
        'video/vnd.dvb.file': { schema: VideoSchema },
        'video/vnd.fvt': { schema: VideoSchema },
        'video/vnd.hns.video': { schema: VideoSchema },
        'video/vnd.iptvforum.1dparityfec-1010': { schema: VideoSchema },
        'video/vnd.iptvforum.1dparityfec-2005': { schema: VideoSchema },
        'video/vnd.iptvforum.2dparityfec-1010': { schema: VideoSchema },
        'video/vnd.iptvforum.2dparityfec-2005': { schema: VideoSchema },
        'video/vnd.iptvforum.ttsavc': { schema: VideoSchema },
        'video/vnd.iptvforum.ttsmpeg2': { schema: VideoSchema },
        'video/vnd.motorola.video': { schema: VideoSchema },
        'video/vnd.motorola.videop': { schema: VideoSchema },
        'video/vnd.mpegurl': { schema: VideoSchema },
        'video/vnd.ms-playready.media.pyv': { schema: VideoSchema },
        'video/vnd.nokia.interleaved-multimedia': { schema: VideoSchema },
        'video/vnd.nokia.mp4vr': { schema: VideoSchema },
        'video/vnd.nokia.videovoip': { schema: VideoSchema },
        'video/vnd.objectvideo': { schema: VideoSchema },
        'video/vnd.radgamettools.bink': { schema: VideoSchema },
        'video/vnd.radgamettools.smacker': { schema: VideoSchema },
        'video/vnd.sealed.mpeg1': { schema: VideoSchema },
        'video/vnd.sealed.mpeg4': { schema: VideoSchema },
        'video/vnd.sealed.swf': { schema: VideoSchema },
        'video/vnd.sealedmedia.softseal.mov': { schema: VideoSchema },
        'video/vnd.uvvu.mp4': { schema: VideoSchema },
        'video/vnd.vivo': { schema: VideoSchema },
        'video/vnd.youtube.yt': { schema: VideoSchema },
        'video/vp8': { schema: VideoSchema },
        'video/vp9': { schema: VideoSchema },
        'video/webm': { schema: VideoSchema },
        'video/x-f4v': { schema: VideoSchema },
        'video/x-fli': { schema: VideoSchema },
        'video/x-flv': { schema: VideoSchema },
        'video/x-m4v': { schema: VideoSchema },
        'video/x-matroska': { schema: VideoSchema },
        'video/x-mng': { schema: VideoSchema },
        'video/x-ms-asf': { schema: VideoSchema },
        'video/x-ms-vob': { schema: VideoSchema },
        'video/x-ms-wm': { schema: VideoSchema },
        'video/x-ms-wmv': { schema: VideoSchema },
        'video/x-ms-wmx': { schema: VideoSchema },
        'video/x-ms-wvx': { schema: VideoSchema },
        'video/x-msvideo': { schema: VideoSchema },
        'video/x-sgi-movie': { schema: VideoSchema },
        'video/x-smv': { schema: VideoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.upload'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.upload'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const deleteYoutubeV3VideosRoute = createRoute({
  method: 'delete',
  path: '/youtube/v3/videos',
  tags: ['videos'],
  description: 'Deletes a resource.',
  operationId: 'youtube.videos.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const getYoutubeV3VideosGetRatingRoute = createRoute({
  method: 'get',
  path: '/youtube/v3/videos/getRating',
  tags: ['videos'],
  description: 'Retrieves the ratings that the authorized user gave to a list of specified videos.',
  operationId: 'youtube.videos.getRating',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoGetRatingResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3VideosRateRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/videos/rate',
  tags: ['videos'],
  description: 'Adds a like or dislike rating to a video or removes a rating from a video.',
  operationId: 'youtube.videos.rate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      rating: z
        .enum(['none', 'like', 'dislike'])
        .openapi({
          param: {
            in: 'query',
            name: 'rating',
            required: true,
            schema: { enum: ['none', 'like', 'dislike'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3VideosReportAbuseRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/videos/reportAbuse',
  tags: ['videos'],
  description: 'Report abuse for a video.',
  operationId: 'youtube.videos.reportAbuse',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VideoAbuseReportSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3WatermarksSetRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/watermarks/set',
  tags: ['watermarks'],
  description: 'Allows upload of watermark image and setting it for a channel.',
  operationId: 'youtube.watermarks.set',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      channelId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'channelId', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: InvideoBrandingSchema },
        'image/jpeg': { schema: InvideoBrandingSchema },
        'image/png': { schema: InvideoBrandingSchema },
      },
    },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.upload'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.upload'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})

export const postYoutubeV3WatermarksUnsetRoute = createRoute({
  method: 'post',
  path: '/youtube/v3/watermarks/unset',
  tags: ['watermarks'],
  description: 'Allows removal of channel watermark.',
  operationId: 'youtube.watermarks.unset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      channelId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'channelId', required: true, schema: { type: 'string' } },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtube.force-ssl'],
      Oauth2c: ['https://www.googleapis.com/auth/youtube.force-ssl'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/youtubepartner'],
      Oauth2c: ['https://www.googleapis.com/auth/youtubepartner'],
    },
  ],
})
