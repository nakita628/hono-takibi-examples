import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get2ComplianceJobs(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs.$get(args, options))
}

export async function post2ComplianceJobs(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs.$post(args, options))
}

export async function get2ComplianceJobsId(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].compliance.jobs[':id'].$get(args, options))
}

export async function post2DmConversations(
  args: InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_conversations.$post(args, options))
}

export async function get2DmConversationsWithParticipantIdDmEvents(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, options),
  )
}

export async function post2DmConversationsWithParticipantIdMessages(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations.with[':participant_id'].messages.$post(args, options),
  )
}

export async function post2DmConversationsDmConversationIdMessages(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].dm_conversations[':dm_conversation_id'].messages.$post(args, options),
  )
}

export async function get2DmConversationsIdDmEvents(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, options))
}

export async function get2DmEvents(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].dm_events.$get(args, options))
}

export async function post2Lists(
  args: InferRequestType<(typeof client)['2']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists.$post(args, options))
}

export async function get2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$get(args, options))
}

export async function put2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$put(args, options))
}

export async function delete2ListsId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].$delete(args, options))
}

export async function get2ListsIdFollowers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].followers.$get(args, options))
}

export async function get2ListsIdMembers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members.$get(args, options))
}

export async function post2ListsIdMembers(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members.$post(args, options))
}

export async function delete2ListsIdMembersUserId(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(args, options))
}

export async function get2ListsIdTweets(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].lists[':id'].tweets.$get(args, options))
}

export async function get2OpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['2']['openapi.json'].$get(undefined, options))
}

export async function get2Spaces(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.$get(args, options))
}

export async function get2SpacesByCreatorIds(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.by.creator_ids.$get(args, options))
}

export async function get2SpacesSearch(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces.search.$get(args, options))
}

export async function get2SpacesId(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].$get(args, options))
}

export async function get2SpacesIdBuyers(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].buyers.$get(args, options))
}

export async function get2SpacesIdTweets(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].spaces[':id'].tweets.$get(args, options))
}

export async function get2Tweets(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.$get(args, options))
}

export async function post2Tweets(
  args: InferRequestType<(typeof client)['2']['tweets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.$post(args, options))
}

export async function get2TweetsComplianceStream(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.compliance.stream.$get(args, options))
}

export async function get2TweetsCountsAll(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.counts.all.$get(args, options))
}

export async function get2TweetsCountsRecent(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.counts.recent.$get(args, options))
}

export async function get2TweetsFirehoseStream(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.firehose.stream.$get(args, options))
}

export async function get2TweetsLabelStream(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.label.stream.$get(args, options))
}

export async function get2TweetsSampleStream(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.sample.stream.$get(args, options))
}

export async function get2TweetsSample10Stream(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.sample10.stream.$get(args, options))
}

export async function get2TweetsSearchAll(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.all.$get(args, options))
}

export async function get2TweetsSearchRecent(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.recent.$get(args, options))
}

export async function get2TweetsSearchStream(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.$get(args, options))
}

export async function get2TweetsSearchStreamRules(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.rules.$get(args, options))
}

export async function post2TweetsSearchStreamRules(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets.search.stream.rules.$post(args, options))
}

export async function get2TweetsId(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].$get(args, options))
}

export async function delete2TweetsId(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].$delete(args, options))
}

export async function get2TweetsIdLikingUsers(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].liking_users.$get(args, options))
}

export async function get2TweetsIdQuoteTweets(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, options))
}

export async function get2TweetsIdRetweetedBy(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, options))
}

export async function put2TweetsTweetIdHidden(
  args: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(args, options))
}

export async function get2Users(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.$get(args, options))
}

export async function get2UsersBy(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.by.$get(args, options))
}

export async function get2UsersByUsernameUsername(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.by.username[':username'].$get(args, options))
}

export async function get2UsersComplianceStream(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.compliance.stream.$get(args, options))
}

export async function get2UsersMe(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users.me.$get(args, options))
}

export async function get2UsersId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].$get(args, options))
}

export async function get2UsersIdBlocking(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].blocking.$get(args, options))
}

export async function post2UsersIdBlocking(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].blocking.$post(args, options))
}

export async function get2UsersIdBookmarks(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.$get(args, options))
}

export async function post2UsersIdBookmarks(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks.$post(args, options))
}

export async function delete2UsersIdBookmarksTweetId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(args, options))
}

export async function get2UsersIdFollowedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followed_lists.$get(args, options))
}

export async function post2UsersIdFollowedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followed_lists.$post(args, options))
}

export async function delete2UsersIdFollowedListsListId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].followed_lists[':list_id'].$delete(args, options),
  )
}

export async function get2UsersIdFollowers(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].followers.$get(args, options))
}

export async function get2UsersIdFollowing(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].following.$get(args, options))
}

export async function post2UsersIdFollowing(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].following.$post(args, options))
}

export async function get2UsersIdLikedTweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].liked_tweets.$get(args, options))
}

export async function post2UsersIdLikes(
  args: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].likes.$post(args, options))
}

export async function delete2UsersIdLikesTweetId(
  args: InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(args, options))
}

export async function get2UsersIdListMemberships(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].list_memberships.$get(args, options))
}

export async function get2UsersIdMentions(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].mentions.$get(args, options))
}

export async function get2UsersIdMuting(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].muting.$get(args, options))
}

export async function post2UsersIdMuting(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].muting.$post(args, options))
}

export async function get2UsersIdOwnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].owned_lists.$get(args, options))
}

export async function get2UsersIdPinnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].pinned_lists.$get(args, options))
}

export async function post2UsersIdPinnedLists(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].pinned_lists.$post(args, options))
}

export async function delete2UsersIdPinnedListsListId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].pinned_lists[':list_id'].$delete(args, options),
  )
}

export async function post2UsersIdRetweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].retweets.$post(args, options))
}

export async function delete2UsersIdRetweetsSourceTweetId(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].retweets[':source_tweet_id'].$delete(args, options),
  )
}

export async function get2UsersIdTimelinesReverseChronological(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':id'].timelines.reverse_chronological.$get(args, options),
  )
}

export async function get2UsersIdTweets(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2'].users[':id'].tweets.$get(args, options))
}

export async function delete2UsersSourceUserIdBlockingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(args, options),
  )
}

export async function delete2UsersSourceUserIdFollowingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].following[':target_user_id'].$delete(args, options),
  )
}

export async function delete2UsersSourceUserIdMutingTargetUserId(
  args: InferRequestType<
    (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(args, options),
  )
}
