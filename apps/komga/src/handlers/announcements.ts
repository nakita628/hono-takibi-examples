import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AnnouncementsRoute, putApiV1AnnouncementsRoute } from '../routes'

const app = new OpenAPIHono()

export const announcementsHandler = app
  .openapi(getApiV1AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
