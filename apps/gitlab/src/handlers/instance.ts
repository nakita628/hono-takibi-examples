import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ApplicationAppearanceRoute,
  getApiV4ApplicationSettingsRoute,
  getApiV4ApplicationStatisticsRoute,
  putApiV4ApplicationAppearanceRoute,
  putApiV4ApplicationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceHandler = app
  .openapi(getApiV4ApplicationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ApplicationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ApplicationStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ApplicationAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ApplicationAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
