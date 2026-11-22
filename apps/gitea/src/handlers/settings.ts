import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsApiRoute,
  getSettingsAttachmentRoute,
  getSettingsRepositoryRoute,
  getSettingsUiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsUiRoute, (c) => {
    throw new Error('Not implemented')
  })
