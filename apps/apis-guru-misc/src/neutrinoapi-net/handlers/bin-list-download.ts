import { OpenAPIHono } from '@hono/zod-openapi'
import { getBinListDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const binListDownloadHandler = app.openapi(getBinListDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
