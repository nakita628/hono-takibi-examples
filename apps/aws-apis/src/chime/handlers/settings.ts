import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsPhoneNumberRoute,
  getSettingsRoute,
  putSettingsPhoneNumberRoute,
  putSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
