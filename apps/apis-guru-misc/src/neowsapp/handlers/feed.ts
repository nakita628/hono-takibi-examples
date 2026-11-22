import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestV1FeedRoute, getRestV1FeedTodayRoute } from '../routes'

const app = new OpenAPIHono()

export const feedHandler = app
  .openapi(getRestV1FeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1FeedTodayRoute, (c) => {
    throw new Error('Not implemented')
  })
