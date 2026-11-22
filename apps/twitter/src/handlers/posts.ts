import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2PostsDraftsIdRoute,
  delete2TweetsIdRoute,
  get2PostsDraftsRoute,
  get2TweetsAnalyticsRoute,
  get2TweetsCountsAllRoute,
  get2TweetsCountsRecentRoute,
  get2TweetsIdLikingUsersRoute,
  get2TweetsIdQuoteTweetsRoute,
  get2TweetsIdRetweetedByRoute,
  get2TweetsIdRetweetsRoute,
  get2TweetsIdRoute,
  get2TweetsRoute,
  get2TweetsSearchAllRoute,
  get2TweetsSearchRecentRoute,
  post2PostsDraftsRoute,
  post2TweetsRoute,
  put2TweetsTweetIdHiddenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(get2PostsDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2PostsDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2PostsDraftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2TweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsCountsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsCountsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSearchRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2TweetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdLikingUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdQuoteTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdRetweetedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdRetweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2TweetsTweetIdHiddenRoute, (c) => {
    throw new Error('Not implemented')
  })
