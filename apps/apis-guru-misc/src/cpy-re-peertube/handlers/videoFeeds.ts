import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedsSubscriptionsFormatRoute,
  getFeedsVideoCommentsFormatRoute,
  getFeedsVideosFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoFeedsHandler = app
  .openapi(getFeedsSubscriptionsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsVideoCommentsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsVideosFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
