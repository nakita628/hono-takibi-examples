import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesRemoteShareRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteShareHandler = app.openapi(getFilesRemoteShareRoute, (c) => {
  throw new Error('Not implemented')
})
