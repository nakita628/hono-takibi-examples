import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetAnomalyGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const GetAnomalyGroupHandler = app.openapi(postGetAnomalyGroupRoute, (c) => {
  throw new Error('Not implemented')
})
