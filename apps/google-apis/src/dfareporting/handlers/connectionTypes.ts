import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdConnectionTypesIdRoute,
  getUserprofilesProfileIdConnectionTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionTypesHandler = app
  .openapi(getUserprofilesProfileIdConnectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdConnectionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
