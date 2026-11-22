import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1SetupCheckRoute,
  postOcsV2PhpAppsAppApiApiV1SetupCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const setupCheckHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1SetupCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1SetupCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
