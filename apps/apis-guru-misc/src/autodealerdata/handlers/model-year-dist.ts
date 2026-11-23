import { OpenAPIHono } from '@hono/zod-openapi'
import { getModelYearDistRoute } from '../routes'

const app = new OpenAPIHono()

export const modelYearDistHandler = app.openapi(getModelYearDistRoute, (c) => {
  throw new Error('Not implemented')
})
