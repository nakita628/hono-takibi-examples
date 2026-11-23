import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3LogImpressionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v3LogImpressionsHandler = app.openapi(postV3LogImpressionsRoute, (c) => {
  throw new Error('Not implemented')
})
