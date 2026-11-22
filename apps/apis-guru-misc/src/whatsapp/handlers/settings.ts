import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSettingsProfilePhotoRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app.openapi(deleteSettingsProfilePhotoRoute, (c) => {
  throw new Error('Not implemented')
})
