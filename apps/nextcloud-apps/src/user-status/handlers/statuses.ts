import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsUserStatusApiV1StatusesRoute,
  getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusesHandler = app
  .openapi(getOcsV2PhpAppsUserStatusApiV1StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
