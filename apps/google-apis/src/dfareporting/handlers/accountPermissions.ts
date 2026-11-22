import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAccountPermissionsIdRoute,
  getUserprofilesProfileIdAccountPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPermissionsHandler = app
  .openapi(getUserprofilesProfileIdAccountPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAccountPermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
