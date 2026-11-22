import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
  getOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
  postOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsSettingsHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
