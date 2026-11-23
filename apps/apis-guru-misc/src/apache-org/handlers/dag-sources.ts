import { OpenAPIHono } from '@hono/zod-openapi'
import { getDagSourcesFileTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const dagSourcesHandler = app.openapi(getDagSourcesFileTokenRoute, (c) => {
  throw new Error('Not implemented')
})
