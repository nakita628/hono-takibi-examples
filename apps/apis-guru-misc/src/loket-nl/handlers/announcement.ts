import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdAnnouncementsRoute,
  patchProvidersEmployersAnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const announcementHandler = app
  .openapi(patchProvidersEmployersAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
