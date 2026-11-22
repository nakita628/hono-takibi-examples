import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DagSourcesDagIdRoute } from '../routes'

const app = new OpenAPIHono()

export const dagSourceHandler = app.openapi(getApiV2DagSourcesDagIdRoute, (c) => {
  throw new Error('Not implemented')
})
