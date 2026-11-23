import { OpenAPIHono } from '@hono/zod-openapi'
import { getDownloadResourceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app.openapi(getDownloadResourceNameRoute, (c) => {
  throw new Error('Not implemented')
})
