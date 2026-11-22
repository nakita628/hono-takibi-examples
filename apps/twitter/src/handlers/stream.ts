import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get2ActivityStreamRoute,
  get2LikesComplianceStreamRoute,
  get2LikesFirehoseStreamRoute,
  get2LikesSample10StreamRoute,
  get2TweetsComplianceStreamRoute,
  get2TweetsFirehoseStreamLangEnRoute,
  get2TweetsFirehoseStreamLangJaRoute,
  get2TweetsFirehoseStreamLangKoRoute,
  get2TweetsFirehoseStreamLangPtRoute,
  get2TweetsFirehoseStreamRoute,
  get2TweetsLabelStreamRoute,
  get2TweetsSample10StreamRoute,
  get2TweetsSampleStreamRoute,
  get2TweetsSearchStreamRoute,
  get2TweetsSearchStreamRulesCountsRoute,
  get2TweetsSearchStreamRulesRoute,
  get2UsersComplianceStreamRoute,
  post2TweetsSearchStreamRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamHandler = app
  .openapi(get2ActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2LikesComplianceStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2LikesFirehoseStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2LikesSample10StreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsComplianceStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamLangEnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamLangJaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamLangKoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsFirehoseStreamLangPtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsLabelStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSampleStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsSample10StreamRoute, (c) => {
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
  .openapi(get2TweetsSearchStreamRulesCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersComplianceStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
