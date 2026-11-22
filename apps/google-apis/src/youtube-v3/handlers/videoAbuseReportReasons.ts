import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3VideoAbuseReportReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const videoAbuseReportReasonsHandler = app.openapi(
  getYoutubeV3VideoAbuseReportReasonsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
