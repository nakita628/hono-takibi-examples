import { OpenAPIHono } from '@hono/zod-openapi'
import { getShuttleMappingErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttleMappingErrorsHandler = app.openapi(getShuttleMappingErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
