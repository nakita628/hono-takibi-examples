import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnnouncementsRoute, postAnnouncementsRoute } from '../routes'

const app = new OpenAPIHono()

export const announcementsHandler = app
  .openapi(getAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
