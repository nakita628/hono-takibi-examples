import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpSettingsApiDeclarativeFormsRoute,
  postOcsV2PhpSettingsApiDeclarativeValueRoute,
  postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpSettingsApiDeclarativeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpSettingsApiDeclarativeFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
