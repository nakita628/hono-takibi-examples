import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2TweetsIdRoute,
  delete2UsersIdLikesTweetIdRoute,
  delete2UsersIdRetweetsSourceTweetIdRoute,
  get2ListsIdTweetsRoute,
  get2TweetsCountsAllRoute,
  get2TweetsCountsRecentRoute,
  get2TweetsFirehoseStreamRoute,
  get2TweetsIdQuoteTweetsRoute,
  get2TweetsIdRoute,
  get2TweetsRoute,
  get2TweetsSample10StreamRoute,
  get2TweetsSampleStreamRoute,
  get2TweetsSearchAllRoute,
  get2TweetsSearchRecentRoute,
  get2TweetsSearchStreamRoute,
  get2TweetsSearchStreamRulesRoute,
  get2UsersIdLikedTweetsRoute,
  get2UsersIdMentionsRoute,
  get2UsersIdTimelinesReverseChronologicalRoute,
  get2UsersIdTweetsRoute,
  post2TweetsRoute,
  post2TweetsSearchStreamRulesRoute,
  post2UsersIdLikesRoute,
  post2UsersIdRetweetsRoute,
  put2TweetsTweetIdHiddenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tweetsHandler = app
  .openapi(get2ListsIdTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2TweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsCountsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsCountsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSampleStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSample10StreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchStreamRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2TweetsSearchStreamRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2TweetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdQuoteTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2TweetsTweetIdHiddenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdLikedTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdLikesTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdMentionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdRetweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdRetweetsSourceTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdTimelinesReverseChronologicalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
