import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdOperatingSystemVersionsIdRoute,
  getUserprofilesProfileIdOperatingSystemVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operatingSystemVersionsHandler = app
  .openapi(getUserprofilesProfileIdOperatingSystemVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdOperatingSystemVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
