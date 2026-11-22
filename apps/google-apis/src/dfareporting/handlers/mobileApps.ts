import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdMobileAppsIdRoute,
  getUserprofilesProfileIdMobileAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileAppsHandler = app
  .openapi(getUserprofilesProfileIdMobileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdMobileAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
