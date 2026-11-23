type CreatedAt = string
type DownloadExpiration = string
type DownloadUrl = string
type JobId = string
type ComplianceJobName = string
type ComplianceJobStatus = 'created' | 'in_progress' | 'failed' | 'complete' | 'expired'
type ComplianceJobType = 'tweets' | 'users'
type UploadExpiration = string
type UploadUrl = string
type ComplianceJob = {
  created_at: CreatedAt
  download_expires_at: DownloadExpiration
  download_url: DownloadUrl
  id: JobId
  name?: ComplianceJobName | undefined
  status: ComplianceJobStatus
  type: ComplianceJobType
  upload_expires_at: UploadExpiration
  upload_url: UploadUrl
}
type Problem = {
  detail?: string | undefined
  status?: number | undefined
  title: string
  type: string
}
type ResultCount = number
type Get2ComplianceJobsResponse = {
  data?: ComplianceJob[] | undefined
  errors?: Problem[] | undefined
  meta?: { result_count?: ResultCount | undefined } | undefined
}
type Error = { code: number; message: string }
type CreateComplianceJobRequest = {
  name?: ComplianceJobName | undefined
  resumable?: boolean | undefined
  type: 'tweets' | 'users'
}
type CreateComplianceJobResponse = {
  data?: ComplianceJob | undefined
  errors?: Problem[] | undefined
}
type Get2ComplianceJobsIdResponse = {
  data?: ComplianceJob | undefined
  errors?: Problem[] | undefined
}
type MediaId = string
type DmMediaAttachment = { media_id: MediaId }
type DmAttachments = DmMediaAttachment[]
type CreateTextMessageRequest = { attachments?: DmAttachments | undefined; text: string }
type CreateAttachmentsMessageRequest = { attachments: DmAttachments; text?: string | undefined }
type CreateMessageRequest = CreateTextMessageRequest | CreateAttachmentsMessageRequest
type UserId = string
type DmParticipants = UserId[]
type CreateDmConversationRequest = {
  conversation_type: 'Group'
  message: CreateMessageRequest
  participant_ids: DmParticipants
}
type DmConversationId = string
type DmEventId = string
type CreateDmEventResponse = {
  data?: { dm_conversation_id: DmConversationId; dm_event_id: DmEventId } | undefined
  errors?: Problem[] | undefined
}
type PaginationToken32 = string
type MediaKey = string
type TweetId = string
type DmEvent = {
  attachments?: { card_ids?: string[] | undefined; media_keys?: MediaKey[] | undefined } | undefined
  created_at?: string | undefined
  dm_conversation_id?: DmConversationId | undefined
  event_type: string
  id: DmEventId
  participant_ids?: UserId[] | undefined
  referenced_tweets?: { id: TweetId }[] | undefined
  sender_id?: UserId | undefined
  text?: string | undefined
}
type MediaHeight = number
type MediaWidth = number
type Media = {
  height?: MediaHeight | undefined
  media_key?: MediaKey | undefined
  type: string
  width?: MediaWidth | undefined
}
type PlaceId = string
type CountryCode = string
type Position = number[]
type Point = { coordinates: Position; type: 'Point' }
type Geo = {
  bbox: number[]
  geometry?: Point | undefined
  properties: { [x: string]: unknown }
  type: 'Feature'
}
type PlaceType = 'poi' | 'neighborhood' | 'city' | 'admin' | 'country' | 'unknown'
type Place = {
  contained_within?: PlaceId[] | undefined
  country?: string | undefined
  country_code?: CountryCode | undefined
  full_name: string
  geo?: Geo | undefined
  id: PlaceId
  name?: string | undefined
  place_type?: PlaceType | undefined
}
type PollId = string
type PollOptionLabel = string
type PollOption = { label: PollOptionLabel; position: number; votes: number }
type Poll = {
  duration_minutes?: number | undefined
  end_datetime?: string | undefined
  id: PollId
  options: PollOption[]
  voting_status?: 'open' | 'closed' | undefined
}
type TopicId = string
type Topic = { description?: string | undefined; id: TopicId; name: string }
type ContextAnnotationDomainFields = {
  description?: string | undefined
  id: string
  name?: string | undefined
}
type ContextAnnotationEntityFields = {
  description?: string | undefined
  id: string
  name?: string | undefined
}
type ContextAnnotation = {
  domain: ContextAnnotationDomainFields
  entity: ContextAnnotationEntityFields
}
type CashtagEntity = { end: number; start: number; tag: string }
type HashtagEntity = { end: number; start: number; tag: string }
type UserName = string
type MentionEntity = { end: number; start: number; id?: UserId | undefined; username: UserName }
type Url = string
type UrlImage = {
  height?: MediaHeight | undefined
  url?: Url | undefined
  width?: MediaWidth | undefined
}
type HttpStatusCode = number
type UrlEntity = {
  end: number
  start: number
  description?: string | undefined
  display_url?: string | undefined
  expanded_url?: Url | undefined
  images?: UrlImage[] | undefined
  media_key?: MediaKey | undefined
  status?: HttpStatusCode | undefined
  title?: string | undefined
  unwound_url?: string | undefined
  url: Url
}
type FullTextEntities = {
  annotations?:
    | {
        end: number
        start: number
        normalized_text?: string | undefined
        probability?: number | undefined
        type?: string | undefined
      }[]
    | undefined
  cashtags?: CashtagEntity[] | undefined
  hashtags?: HashtagEntity[] | undefined
  mentions?: MentionEntity[] | undefined
  urls?: UrlEntity[] | undefined
}
type ReplySettings = 'everyone' | 'mentionedUsers' | 'following' | 'other'
type TweetText = string
type TweetWithheld = {
  copyright: boolean
  country_codes: CountryCode[]
  scope?: 'tweet' | 'user' | undefined
}
type Tweet = {
  attachments?: { media_keys?: MediaKey[] | undefined; poll_ids?: PollId[] | undefined } | undefined
  author_id?: UserId | undefined
  context_annotations?: ContextAnnotation[] | undefined
  conversation_id?: TweetId | undefined
  created_at?: string | undefined
  edit_controls?:
    | { editable_until: string; edits_remaining: number; is_edit_eligible: boolean }
    | undefined
  edit_history_tweet_ids: TweetId[]
  entities?: FullTextEntities | undefined
  geo?: { coordinates?: Point | undefined; place_id?: PlaceId | undefined } | undefined
  id: TweetId
  in_reply_to_user_id?: UserId | undefined
  lang?: string | undefined
  non_public_metrics?: { impression_count?: number | undefined } | undefined
  organic_metrics?:
    | { impression_count: number; like_count: number; reply_count: number; retweet_count: number }
    | undefined
  possibly_sensitive?: boolean | undefined
  promoted_metrics?:
    | {
        impression_count?: number | undefined
        like_count?: number | undefined
        reply_count?: number | undefined
        retweet_count?: number | undefined
      }
    | undefined
  public_metrics?:
    | {
        impression_count: number
        like_count: number
        quote_count?: number | undefined
        reply_count: number
        retweet_count: number
      }
    | undefined
  referenced_tweets?: { id: TweetId; type: 'retweeted' | 'quoted' | 'replied_to' }[] | undefined
  reply_settings?: ReplySettings | undefined
  source?: string | undefined
  text: TweetText
  withheld?: TweetWithheld | undefined
}
type UserWithheld = { country_codes: CountryCode[]; scope?: 'user' | undefined }
type User = {
  created_at?: string | undefined
  description?: string | undefined
  entities?:
    | {
        description?: FullTextEntities | undefined
        url?: { urls?: UrlEntity[] | undefined } | undefined
      }
    | undefined
  id: UserId
  location?: string | undefined
  name: string
  pinned_tweet_id?: TweetId | undefined
  profile_image_url?: string | undefined
  protected?: boolean | undefined
  public_metrics?:
    | {
        followers_count: number
        following_count: number
        listed_count: number
        tweet_count: number
      }
    | undefined
  url?: string | undefined
  username: UserName
  verified?: boolean | undefined
  verified_type?: string | undefined
  withheld?: UserWithheld | undefined
}
type Expansions = {
  media?: Media[] | undefined
  places?: Place[] | undefined
  polls?: Poll[] | undefined
  topics?: Topic[] | undefined
  tweets?: Tweet[] | undefined
  users?: User[] | undefined
}
type NextToken = string
type PreviousToken = string
type Get2DmConversationsWithParticipantIdDmEventsResponse = {
  data?: DmEvent[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2DmConversationsIdDmEventsResponse = {
  data?: DmEvent[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2DmEventsResponse = {
  data?: DmEvent[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type ListCreateRequest = {
  description?: string | undefined
  name: string
  private?: boolean | undefined
}
type ListId = string
type ListCreateResponse = {
  data?: { id: ListId; name: string } | undefined
  errors?: Problem[] | undefined
}
type ListDeleteResponse = {
  data?: { deleted?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type List = {
  created_at?: string | undefined
  description?: string | undefined
  follower_count?: number | undefined
  id: ListId
  member_count?: number | undefined
  name: string
  owner_id?: UserId | undefined
  private?: boolean | undefined
}
type Get2ListsIdResponse = {
  data?: List | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type ListUpdateRequest = {
  description?: string | undefined
  name?: string | undefined
  private?: boolean | undefined
}
type ListUpdateResponse = {
  data?: { updated?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type PaginationTokenLong = string
type Get2ListsIdFollowersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2ListsIdMembersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type ListAddUserRequest = { user_id: UserId }
type ListMutateResponse = {
  data?: { is_member?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type PaginationToken36 = string
type Get2ListsIdTweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type SpaceId = string
type Space = {
  created_at?: string | undefined
  creator_id?: UserId | undefined
  ended_at?: string | undefined
  host_ids?: UserId[] | undefined
  id: SpaceId
  invited_user_ids?: UserId[] | undefined
  is_ticketed?: boolean | undefined
  lang?: string | undefined
  participant_count?: number | undefined
  scheduled_start?: string | undefined
  speaker_ids?: UserId[] | undefined
  started_at?: string | undefined
  state: 'live' | 'scheduled' | 'ended'
  subscriber_count?: number | undefined
  title?: string | undefined
  topics?: { description?: string | undefined; id: string; name: string }[] | undefined
  updated_at?: string | undefined
}
type Get2SpacesResponse = {
  data?: Space[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2SpacesByCreatorIdsResponse = {
  data?: Space[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?: { result_count?: ResultCount | undefined } | undefined
}
type Get2SpacesSearchResponse = {
  data?: Space[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?: { result_count?: ResultCount | undefined } | undefined
}
type Get2SpacesIdResponse = {
  data?: Space | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2SpacesIdBuyersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2SpacesIdTweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2TweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type TweetCreateRequest = {
  card_uri?: string | undefined
  direct_message_deep_link?: string | undefined
  for_super_followers_only?: boolean | undefined
  geo?: { place_id?: string | undefined } | undefined
  media?: { media_ids: MediaId[]; tagged_user_ids?: UserId[] | undefined } | undefined
  nullcast?: boolean | undefined
  poll?:
    | {
        duration_minutes: number
        options: string[]
        reply_settings?: 'following' | 'mentionedUsers' | undefined
      }
    | undefined
  quote_tweet_id?: TweetId | undefined
  reply?:
    | { exclude_reply_user_ids?: UserId[] | undefined; in_reply_to_tweet_id: TweetId }
    | undefined
  reply_settings?: 'following' | 'mentionedUsers' | undefined
  text?: TweetText | undefined
}
type TweetCreateResponse = {
  data?: { id: TweetId; text: TweetText } | undefined
  errors?: Problem[] | undefined
}
type TweetComplianceSchema = {
  event_at: string
  quote_tweet_id?: TweetId | undefined
  tweet: { author_id: UserId; id: TweetId }
}
type TweetDeleteComplianceSchema = { delete: TweetComplianceSchema }
type TweetTakedownComplianceSchema = {
  event_at: string
  quote_tweet_id?: TweetId | undefined
  tweet: { author_id: UserId; id: TweetId }
  withheld_in_countries: CountryCode[]
}
type TweetWithheldComplianceSchema = { withheld: TweetTakedownComplianceSchema }
type TweetDropComplianceSchema = { drop: TweetComplianceSchema }
type TweetUndropComplianceSchema = { undrop: TweetComplianceSchema }
type TweetEditComplianceObjectSchema = {
  edit_tweet_ids: TweetId[]
  event_at: string
  initial_tweet_id: TweetId
  tweet: { id: TweetId }
}
type TweetEditComplianceSchema = { tweet_edit: TweetEditComplianceObjectSchema }
type TweetComplianceData =
  | TweetDeleteComplianceSchema
  | TweetWithheldComplianceSchema
  | TweetDropComplianceSchema
  | TweetUndropComplianceSchema
  | TweetEditComplianceSchema
type TweetComplianceStreamResponse = { data: TweetComplianceData } | { errors: Problem[] }
type End = string
type Start = string
type TweetCount = number
type SearchCount = { end: End; start: Start; tweet_count: TweetCount }
type NewestId = string
type OldestId = string
type Aggregate = number
type Get2TweetsCountsAllResponse = {
  data?: SearchCount[] | undefined
  errors?: Problem[] | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        total_tweet_count?: Aggregate | undefined
      }
    | undefined
}
type Get2TweetsCountsRecentResponse = {
  data?: SearchCount[] | undefined
  errors?: Problem[] | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        total_tweet_count?: Aggregate | undefined
      }
    | undefined
}
type StreamingTweetResponse = {
  data?: Tweet | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type TweetNotice = {
  application: string
  details?: string | undefined
  event_at: string
  event_type: string
  extended_details_url?: string | undefined
  label_title?: string | undefined
  tweet: { author_id: UserId; id: TweetId }
}
type TweetNoticeSchema = { public_tweet_notice: TweetNotice }
type TweetUnviewable = {
  application: string
  event_at: string
  tweet: { author_id: UserId; id: TweetId }
}
type TweetUnviewableSchema = { public_tweet_unviewable: TweetUnviewable }
type TweetLabelData = TweetNoticeSchema | TweetUnviewableSchema
type TweetLabelStreamResponse = { data: TweetLabelData } | { errors: Problem[] }
type Get2TweetsSample10StreamResponse = {
  data?: Tweet | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2TweetsSearchAllResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2TweetsSearchRecentResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type RuleId = string
type RuleTag = string
type FilteredStreamingTweetResponse = {
  data?: Tweet | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  matching_rules?: { id: RuleId; tag?: RuleTag | undefined }[] | undefined
}
type RuleValue = string
type Rule = { id?: RuleId | undefined; tag?: RuleTag | undefined; value: RuleValue }
type RulesRequestSummary =
  | { created: number; invalid: number; not_created: number; valid: number }
  | { deleted: number; not_deleted: number }
type RulesResponseMetadata = {
  next_token?: NextToken | undefined
  result_count?: number | undefined
  sent: string
  summary?: RulesRequestSummary | undefined
}
type RulesLookupResponse = { data?: Rule[] | undefined; meta: RulesResponseMetadata }
type RuleNoId = { tag?: RuleTag | undefined; value: RuleValue }
type AddRulesRequest = { add: RuleNoId[] }
type DeleteRulesRequest = {
  delete: { ids?: RuleId[] | undefined; values?: RuleValue[] | undefined }
}
type AddOrDeleteRulesRequest = AddRulesRequest | DeleteRulesRequest
type AddOrDeleteRulesResponse = {
  data?: Rule[] | undefined
  errors?: Problem[] | undefined
  meta: RulesResponseMetadata
}
type TweetDeleteResponse = {
  data?: { deleted: boolean } | undefined
  errors?: Problem[] | undefined
}
type Get2TweetsIdResponse = {
  data?: Tweet | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2TweetsIdLikingUsersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2TweetsIdQuoteTweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?: { next_token?: NextToken | undefined; result_count?: ResultCount | undefined } | undefined
}
type Get2TweetsIdRetweetedByResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type TweetHideRequest = { hidden: boolean }
type TweetHideResponse = { data?: { hidden?: boolean | undefined } | undefined }
type Get2UsersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2UsersByResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2UsersByUsernameUsernameResponse = {
  data?: User | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type UserComplianceSchema = { event_at: string; user: { id: UserId } }
type UserProtectComplianceSchema = { user_protect: UserComplianceSchema }
type UserUnprotectComplianceSchema = { user_unprotect: UserComplianceSchema }
type UserDeleteComplianceSchema = { user_delete: UserComplianceSchema }
type UserUndeleteComplianceSchema = { user_undelete: UserComplianceSchema }
type UserSuspendComplianceSchema = { user_suspend: UserComplianceSchema }
type UserUnsuspendComplianceSchema = { user_unsuspend: UserComplianceSchema }
type UserTakedownComplianceSchema = {
  event_at: string
  user: { id: UserId }
  withheld_in_countries: CountryCode[]
}
type UserWithheldComplianceSchema = { user_withheld: UserTakedownComplianceSchema }
type UserScrubGeoObjectSchema = { event_at: string; up_to_tweet_id: TweetId; user: { id: UserId } }
type UserScrubGeoSchema = { scrub_geo: UserScrubGeoObjectSchema }
type UserProfileModificationObjectSchema = {
  event_at: string
  new_value: string
  profile_field: string
  user: { id: UserId }
}
type UserProfileModificationComplianceSchema = {
  user_profile_modification: UserProfileModificationObjectSchema
}
type UserComplianceData =
  | UserProtectComplianceSchema
  | UserUnprotectComplianceSchema
  | UserDeleteComplianceSchema
  | UserUndeleteComplianceSchema
  | UserSuspendComplianceSchema
  | UserUnsuspendComplianceSchema
  | UserWithheldComplianceSchema
  | UserScrubGeoSchema
  | UserProfileModificationComplianceSchema
type UserComplianceStreamResponse = { data: UserComplianceData } | { errors: Problem[] }
type Get2UsersMeResponse = {
  data?: User | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type Get2UsersIdResponse = {
  data?: User | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
}
type UserIdMatchesAuthenticatedUser = string
type Get2UsersIdBlockingResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type BlockUserRequest = { target_user_id: UserId }
type BlockUserMutationResponse = {
  data?: { blocking?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdBookmarksResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type BookmarkAddRequest = { tweet_id: TweetId }
type BookmarkMutationResponse = {
  data?: { bookmarked?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdFollowedListsResponse = {
  data?: List[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type ListFollowedRequest = { list_id: ListId }
type ListFollowedResponse = {
  data?: { following?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdFollowersResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2UsersIdFollowingResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type UsersFollowingCreateRequest = { target_user_id: UserId }
type UsersFollowingCreateResponse = {
  data?: { following?: boolean | undefined; pending_follow?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdLikedTweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type UsersLikesCreateRequest = { tweet_id: TweetId }
type UsersLikesCreateResponse = {
  data?: { liked?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type UsersLikesDeleteResponse = {
  data?: { liked?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdListMembershipsResponse = {
  data?: List[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2UsersIdMentionsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2UsersIdMutingResponse = {
  data?: User[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type MuteUserRequest = { target_user_id: UserId }
type MuteUserMutationResponse = {
  data?: { muting?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdOwnedListsResponse = {
  data?: List[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        next_token?: NextToken | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2UsersIdPinnedListsResponse = {
  data?: List[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?: { result_count?: ResultCount | undefined } | undefined
}
type ListPinnedRequest = { list_id: ListId }
type ListPinnedResponse = {
  data?: { pinned?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type ListUnpinResponse = {
  data?: { pinned?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type UsersRetweetsCreateRequest = { tweet_id: TweetId }
type UsersRetweetsCreateResponse = {
  data?: { retweeted?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type UsersRetweetsDeleteResponse = {
  data?: { retweeted?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
type Get2UsersIdTimelinesReverseChronologicalResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type Get2UsersIdTweetsResponse = {
  data?: Tweet[] | undefined
  errors?: Problem[] | undefined
  includes?: Expansions | undefined
  meta?:
    | {
        newest_id?: NewestId | undefined
        next_token?: NextToken | undefined
        oldest_id?: OldestId | undefined
        previous_token?: PreviousToken | undefined
        result_count?: ResultCount | undefined
      }
    | undefined
}
type UsersFollowingDeleteResponse = {
  data?: { following?: boolean | undefined } | undefined
  errors?: Problem[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2/compliance/jobs': {
      $get:
        | {
            input: {
              query: {
                type: 'tweets' | 'users'
                status?: 'created' | 'in_progress' | 'failed' | 'complete' | undefined
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Get2ComplianceJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'tweets' | 'users'
                status?: 'created' | 'in_progress' | 'failed' | 'complete' | undefined
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'tweets' | 'users'
                status?: 'created' | 'in_progress' | 'failed' | 'complete' | undefined
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateComplianceJobRequest }
            output: CreateComplianceJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateComplianceJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateComplianceJobRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/compliance/jobs/:id': {
      $get:
        | {
            input: { param: { id: JobId } } & {
              query: {
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Get2ComplianceJobsIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: JobId } } & {
              query: {
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: JobId } } & {
              query: {
                'compliance_job.fields'?:
                  | (
                      | 'created_at'
                      | 'download_expires_at'
                      | 'download_url'
                      | 'id'
                      | 'name'
                      | 'resumable'
                      | 'status'
                      | 'type'
                      | 'upload_expires_at'
                      | 'upload_url'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_conversations': {
      $post:
        | {
            input: { json: CreateDmConversationRequest }
            output: CreateDmEventResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDmConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDmConversationRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_conversations/with/:participant_id/dm_events': {
      $get:
        | {
            input: { param: { participant_id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2DmConversationsWithParticipantIdDmEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { participant_id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { participant_id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_conversations/with/:participant_id/messages': {
      $post:
        | {
            input: { param: { participant_id: UserId } } & { json: CreateMessageRequest }
            output: CreateDmEventResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { participant_id: UserId } } & { json: CreateMessageRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { participant_id: UserId } } & { json: CreateMessageRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_conversations/:dm_conversation_id/messages': {
      $post:
        | {
            input: { param: { dm_conversation_id: string } } & { json: CreateMessageRequest }
            output: CreateDmEventResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dm_conversation_id: string } } & { json: CreateMessageRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dm_conversation_id: string } } & { json: CreateMessageRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_conversations/:id/dm_events': {
      $get:
        | {
            input: { param: { id: DmConversationId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2DmConversationsIdDmEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: DmConversationId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: DmConversationId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/dm_events': {
      $get:
        | {
            input: {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2DmEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                event_types?:
                  | ('MessageCreate' | 'ParticipantsJoin' | 'ParticipantsLeave')[]
                  | undefined
                'dm_event.fields'?:
                  | (
                      | 'attachments'
                      | 'created_at'
                      | 'dm_conversation_id'
                      | 'event_type'
                      | 'id'
                      | 'participant_ids'
                      | 'referenced_tweets'
                      | 'sender_id'
                      | 'text'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'participant_ids'
                      | 'referenced_tweets.id'
                      | 'sender_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/lists': {
      $post:
        | {
            input: { json: ListCreateRequest }
            output: ListCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ListCreateRequest }; output: Error; outputFormat: 'json'; status: 200 }
        | { input: { json: ListCreateRequest }; output: Problem; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/2/lists/:id': {
      $delete:
        | {
            input: { param: { id: ListId } }
            output: ListDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: ListId } }; output: Error; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: ListId } }; output: Problem; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: ListId } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2ListsIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: ListId } } & { json: ListUpdateRequest }
            output: ListUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & { json: ListUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & { json: ListUpdateRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/lists/:id/followers': {
      $get:
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2ListsIdFollowersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/lists/:id/members': {
      $get:
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2ListsIdMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: ListId } } & { json: ListAddUserRequest }
            output: ListMutateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & { json: ListAddUserRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & { json: ListAddUserRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/lists/:id/members/:user_id': {
      $delete:
        | {
            input: { param: { id: ListId; user_id: UserId } }
            output: ListMutateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId; user_id: UserId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId; user_id: UserId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/lists/:id/tweets': {
      $get:
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2ListsIdTweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: ListId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/openapi.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/2/spaces': {
      $get:
        | {
            input: {
              query: {
                ids: string[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Get2SpacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: string[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: string[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/spaces/by/creator_ids': {
      $get:
        | {
            input: {
              query: {
                user_ids: UserId[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Get2SpacesByCreatorIdsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_ids: UserId[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_ids: UserId[]
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/spaces/search': {
      $get:
        | {
            input: {
              query: {
                query: string
                state?: 'live' | 'scheduled' | 'all' | undefined
                max_results?: number | undefined
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Get2SpacesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                state?: 'live' | 'scheduled' | 'all' | undefined
                max_results?: number | undefined
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                state?: 'live' | 'scheduled' | 'all' | undefined
                max_results?: number | undefined
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/spaces/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Get2SpacesIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'space.fields'?:
                  | (
                      | 'created_at'
                      | 'creator_id'
                      | 'ended_at'
                      | 'host_ids'
                      | 'id'
                      | 'invited_user_ids'
                      | 'is_ticketed'
                      | 'lang'
                      | 'participant_count'
                      | 'scheduled_start'
                      | 'speaker_ids'
                      | 'started_at'
                      | 'state'
                      | 'subscriber_count'
                      | 'title'
                      | 'topic_ids'
                      | 'updated_at'
                    )[]
                  | undefined
                expansions?:
                  | ('creator_id' | 'host_ids' | 'invited_user_ids' | 'speaker_ids' | 'topic_ids')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'topic.fields'?: ('description' | 'id' | 'name')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/spaces/:id/buyers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                pagination_token?: PaginationToken32 | undefined
                max_results?: number | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2SpacesIdBuyersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                pagination_token?: PaginationToken32 | undefined
                max_results?: number | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                pagination_token?: PaginationToken32 | undefined
                max_results?: number | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/spaces/:id/tweets': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                max_results?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2SpacesIdTweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_results?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_results?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets': {
      $get:
        | {
            input: {
              query: {
                ids: TweetId[]
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: TweetId[]
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: TweetId[]
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: TweetCreateRequest }
            output: TweetCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: TweetCreateRequest }; output: Error; outputFormat: 'json'; status: 200 }
        | {
            input: { json: TweetCreateRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/compliance/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: TweetComplianceStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/counts/all': {
      $get:
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Get2TweetsCountsAllResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/counts/recent': {
      $get:
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Get2TweetsCountsRecentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
                'search_count.fields'?: ('end' | 'start' | 'tweet_count')[] | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/firehose/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: StreamingTweetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/label/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: TweetLabelStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/sample/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: StreamingTweetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/sample10/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsSample10StreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/search/all': {
      $get:
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsSearchAllResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/search/recent': {
      $get:
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsSearchRecentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                start_time?: string | undefined
                end_time?: string | undefined
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                next_token?: PaginationToken36 | undefined
                pagination_token?: PaginationToken36 | undefined
                sort_order?: 'recency' | 'relevancy' | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/search/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: FilteredStreamingTweetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/search/stream/rules': {
      $get:
        | {
            input: {
              query: {
                ids?: RuleId[] | undefined
                max_results?: number | undefined
                pagination_token?: string | undefined
              }
            }
            output: RulesLookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: RuleId[] | undefined
                max_results?: number | undefined
                pagination_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: RuleId[] | undefined
                max_results?: number | undefined
                pagination_token?: string | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { dry_run?: boolean | undefined } } & { json: AddOrDeleteRulesRequest }
            output: AddOrDeleteRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dry_run?: boolean | undefined } } & { json: AddOrDeleteRulesRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dry_run?: boolean | undefined } } & { json: AddOrDeleteRulesRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/:id': {
      $delete:
        | {
            input: { param: { id: TweetId } }
            output: TweetDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: TweetId } }; output: Error; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: TweetId } }; output: Problem; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: TweetId } } & {
              query: {
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/:id/liking_users': {
      $get:
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsIdLikingUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/:id/quote_tweets': {
      $get:
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsIdQuoteTweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/:id/retweeted_by': {
      $get:
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2TweetsIdRetweetedByResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: TweetId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/tweets/:tweet_id/hidden': {
      $put:
        | {
            input: { param: { tweet_id: TweetId } } & { json: TweetHideRequest }
            output: TweetHideResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tweet_id: TweetId } } & { json: TweetHideRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tweet_id: TweetId } } & { json: TweetHideRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users': {
      $get:
        | {
            input: {
              query: {
                ids: UserId[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: UserId[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: UserId[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/by': {
      $get:
        | {
            input: {
              query: {
                usernames: string[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersByResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                usernames: string[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                usernames: string[]
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/by/username/:username': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersByUsernameUsernameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/compliance/stream': {
      $get:
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: UserComplianceStreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                backfill_minutes?: number | undefined
                partition: number
                start_time?: string | undefined
                end_time?: string | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/me': {
      $get:
        | {
            input: {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersMeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/blocking': {
      $get:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdBlockingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BlockUserRequest }
            output: BlockUserMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BlockUserRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BlockUserRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/bookmarks': {
      $get:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdBookmarksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BookmarkAddRequest }
            output: BookmarkMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BookmarkAddRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: BookmarkAddRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/bookmarks/:tweet_id': {
      $delete:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: BookmarkMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/followed_lists': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdFollowedListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListFollowedRequest }
            output: ListFollowedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListFollowedRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListFollowedRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/followed_lists/:list_id': {
      $delete:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: ListFollowedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/followers': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdFollowersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/following': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdFollowingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken32 | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersFollowingCreateRequest
            }
            output: UsersFollowingCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersFollowingCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersFollowingCreateRequest
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/liked_tweets': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdLikedTweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/likes': {
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersLikesCreateRequest
            }
            output: UsersLikesCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersLikesCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersLikesCreateRequest
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/likes/:tweet_id': {
      $delete:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: UsersLikesDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; tweet_id: TweetId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/list_memberships': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdListMembershipsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/mentions': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdMentionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/muting': {
      $get:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdMutingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?: 'pinned_tweet_id'[] | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: MuteUserRequest }
            output: MuteUserMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: MuteUserRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: MuteUserRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/owned_lists': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdOwnedListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                max_results?: number | undefined
                pagination_token?: PaginationTokenLong | undefined
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/pinned_lists': {
      $get:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdPinnedListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                'list.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'follower_count'
                      | 'id'
                      | 'member_count'
                      | 'name'
                      | 'owner_id'
                      | 'private'
                    )[]
                  | undefined
                expansions?: 'owner_id'[] | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListPinnedRequest }
            output: ListPinnedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListPinnedRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & { json: ListPinnedRequest }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/pinned_lists/:list_id': {
      $delete:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: ListUnpinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; list_id: ListId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/retweets': {
      $post:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersRetweetsCreateRequest
            }
            output: UsersRetweetsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersRetweetsCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              json: UsersRetweetsCreateRequest
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/retweets/:source_tweet_id': {
      $delete:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; source_tweet_id: TweetId } }
            output: UsersRetweetsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; source_tweet_id: TweetId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser; source_tweet_id: TweetId } }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/timelines/reverse_chronological': {
      $get:
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdTimelinesReverseChronologicalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserIdMatchesAuthenticatedUser } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:id/tweets': {
      $get:
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Get2UsersIdTweetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: UserId } } & {
              query: {
                since_id?: TweetId | undefined
                until_id?: TweetId | undefined
                max_results?: number | undefined
                pagination_token?: PaginationToken36 | undefined
                exclude?: ('replies' | 'retweets')[] | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                'tweet.fields'?:
                  | (
                      | 'attachments'
                      | 'author_id'
                      | 'context_annotations'
                      | 'conversation_id'
                      | 'created_at'
                      | 'edit_controls'
                      | 'edit_history_tweet_ids'
                      | 'entities'
                      | 'geo'
                      | 'id'
                      | 'in_reply_to_user_id'
                      | 'lang'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'possibly_sensitive'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'referenced_tweets'
                      | 'reply_settings'
                      | 'source'
                      | 'text'
                      | 'withheld'
                    )[]
                  | undefined
                expansions?:
                  | (
                      | 'attachments.media_keys'
                      | 'attachments.poll_ids'
                      | 'author_id'
                      | 'edit_history_tweet_ids'
                      | 'entities.mentions.username'
                      | 'geo.place_id'
                      | 'in_reply_to_user_id'
                      | 'referenced_tweets.id'
                      | 'referenced_tweets.id.author_id'
                    )[]
                  | undefined
                'media.fields'?:
                  | (
                      | 'alt_text'
                      | 'duration_ms'
                      | 'height'
                      | 'media_key'
                      | 'non_public_metrics'
                      | 'organic_metrics'
                      | 'preview_image_url'
                      | 'promoted_metrics'
                      | 'public_metrics'
                      | 'type'
                      | 'url'
                      | 'variants'
                      | 'width'
                    )[]
                  | undefined
                'poll.fields'?:
                  | ('duration_minutes' | 'end_datetime' | 'id' | 'options' | 'voting_status')[]
                  | undefined
                'user.fields'?:
                  | (
                      | 'created_at'
                      | 'description'
                      | 'entities'
                      | 'id'
                      | 'location'
                      | 'name'
                      | 'pinned_tweet_id'
                      | 'profile_image_url'
                      | 'protected'
                      | 'public_metrics'
                      | 'url'
                      | 'username'
                      | 'verified'
                      | 'verified_type'
                      | 'withheld'
                    )[]
                  | undefined
                'place.fields'?:
                  | (
                      | 'contained_within'
                      | 'country'
                      | 'country_code'
                      | 'full_name'
                      | 'geo'
                      | 'id'
                      | 'name'
                      | 'place_type'
                    )[]
                  | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:source_user_id/blocking/:target_user_id': {
      $delete:
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: BlockUserMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:source_user_id/following/:target_user_id': {
      $delete:
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: UsersFollowingDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/2/users/:source_user_id/muting/:target_user_id': {
      $delete:
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: MuteUserMutationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { source_user_id: UserIdMatchesAuthenticatedUser; target_user_id: UserId }
            }
            output: Problem
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
