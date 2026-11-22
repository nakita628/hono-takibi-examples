import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preferencesHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
