import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1RenameRoute } from '../routes'

const app = new OpenAPIHono()

export const renameTrackHandler = app.openapi(getApiV1RenameRoute, (c) => {
  throw new Error('Not implemented')
})
