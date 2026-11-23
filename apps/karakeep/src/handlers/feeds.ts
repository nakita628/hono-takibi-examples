import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeedsFeedIdRoute,
  getFeedsFeedIdRoute,
  getFeedsRoute,
  patchFeedsFeedIdRoute,
  postFeedsFeedIdFetchRoute,
  postFeedsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedsHandler = app
  .openapi(getFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsFeedIdFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
