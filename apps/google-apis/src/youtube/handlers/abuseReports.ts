import { OpenAPIHono } from '@hono/zod-openapi'
import { postYoutubeV3AbuseReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const abuseReportsHandler = app.openapi(postYoutubeV3AbuseReportsRoute, (c) => {
  throw new Error('Not implemented')
})
