import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdOperatingSystemsDartIdRoute,
  getUserprofilesProfileIdOperatingSystemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operatingSystemsHandler = app
  .openapi(getUserprofilesProfileIdOperatingSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemsDartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
