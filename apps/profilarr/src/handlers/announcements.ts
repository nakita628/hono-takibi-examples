import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnnouncementsIdRoute, getAnnouncementsRoute } from '../routes'

const app = new OpenAPIHono()

export const announcementsHandler = app
  .openapi(getAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
