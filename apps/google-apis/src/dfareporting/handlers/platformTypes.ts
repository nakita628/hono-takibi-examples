import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdPlatformTypesIdRoute,
  getUserprofilesProfileIdPlatformTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformTypesHandler = app
  .openapi(getUserprofilesProfileIdPlatformTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPlatformTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
