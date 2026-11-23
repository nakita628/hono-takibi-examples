import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestV1FeedRoute,
  getRestV1FeedTodayRoute,
  getRestV1NeoAsteroidIdRoute,
  getRestV1NeoBrowseRoute,
  getRestV1NeoSentryAsteroidIdRoute,
  getRestV1NeoSentryRoute,
  getRestV1StatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restHandler = app
  .openapi(getRestV1FeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1FeedTodayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoSentryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoSentryAsteroidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1NeoAsteroidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestV1StatsRoute, (c) => {
    throw new Error('Not implemented')
  })
