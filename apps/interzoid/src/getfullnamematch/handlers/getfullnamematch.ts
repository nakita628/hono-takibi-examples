import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnamematchRoute } from '../routes'

const app = new OpenAPIHono()

export const getfullnamematchHandler = app.openapi(getGetfullnamematchRoute, (c) => {
  throw new Error('Not implemented')
})
