import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DagWarningsRoute } from '../routes'

const app = new OpenAPIHono()

export const dagWarningHandler = app.openapi(getApiV2DagWarningsRoute, (c) => {
  throw new Error('Not implemented')
})
