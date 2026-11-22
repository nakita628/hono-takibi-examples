import { OpenAPIHono } from '@hono/zod-openapi'
import { postYoutubeV3TestsRoute } from '../routes'

const app = new OpenAPIHono()

export const testsHandler = app.openapi(postYoutubeV3TestsRoute, (c) => {
  throw new Error('Not implemented')
})
