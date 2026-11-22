import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsSiteSearch202609IndexedDataContentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(getCmsSiteSearch202609IndexedDataContentIdRoute, (c) => {
  throw new Error('Not implemented')
})
