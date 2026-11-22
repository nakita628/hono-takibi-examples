import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1ExAppConfigRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appConfigHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1ExAppConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
