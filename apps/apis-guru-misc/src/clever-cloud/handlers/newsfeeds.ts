import { OpenAPIHono } from '@hono/zod-openapi'
import { getNewsfeedsBlogRoute, getNewsfeedsEngineeringRoute } from '../routes'

const app = new OpenAPIHono()

export const newsfeedsHandler = app
  .openapi(getNewsfeedsBlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsfeedsEngineeringRoute, (c) => {
    throw new Error('Not implemented')
  })
