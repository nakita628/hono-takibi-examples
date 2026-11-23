import { OpenAPIHono } from '@hono/zod-openapi'
import { getBridgeDownloadFileRoute } from '../routes'

const app = new OpenAPIHono()

export const bridgeDownloadFileHandler = app.openapi(getBridgeDownloadFileRoute, (c) => {
  throw new Error('Not implemented')
})
