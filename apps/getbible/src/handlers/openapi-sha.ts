import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiShaRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiShaHandler = app.openapi(getOpenapiShaRoute, (c) => {
  throw new Error('Not implemented')
})
