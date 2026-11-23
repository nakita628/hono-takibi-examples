import { OpenAPIHono } from '@hono/zod-openapi'
import { postOutlierRoute } from '../routes'

const app = new OpenAPIHono()

export const outlierHandler = app.openapi(postOutlierRoute, (c) => {
  throw new Error('Not implemented')
})
