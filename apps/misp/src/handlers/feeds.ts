import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedsRoute,
  getFeedsViewFeedIdRoute,
  postFeedsAddRoute,
  postFeedsCacheFeedsCacheFeedsScopeRoute,
  postFeedsDisableFeedIdRoute,
  postFeedsEnableFeedIdRoute,
  postFeedsFetchFromAllFeedsRoute,
  postFeedsFetchFromFeedFeedIdRoute,
  putFeedsEditFeedIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedsHandler = app
  .openapi(getFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsViewFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeedsEditFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsEnableFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsDisableFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsCacheFeedsCacheFeedsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsFetchFromFeedFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsFetchFromAllFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
