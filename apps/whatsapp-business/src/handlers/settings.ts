import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDSettingsRoute,
  postVersionPhoneNumberIDSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getVersionPhoneNumberIDSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
