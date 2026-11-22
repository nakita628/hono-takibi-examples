import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3AnnouncementBannerRoute, putRestApi3AnnouncementBannerRoute } from '../routes'

const app = new OpenAPIHono()

export const announcementBannerHandler = app
  .openapi(getRestApi3AnnouncementBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AnnouncementBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
