import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AccountEmailSettingsRoute,
  getApiV2AccountSettingsRoute,
  putApiV2AccountEmailSettingsRoute,
  putApiV2AccountSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSettingsHandler = app
  .openapi(getApiV2AccountEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AccountEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
