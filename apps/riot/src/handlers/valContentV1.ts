import { OpenAPIHono } from '@hono/zod-openapi'
import { getValContentV1ContentsRoute } from '../routes'

const app = new OpenAPIHono()

export const valContentV1Handler = app.openapi(getValContentV1ContentsRoute, (c) => {
  throw new Error('Not implemented')
})
