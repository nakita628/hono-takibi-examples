import { OpenAPIHono } from '@hono/zod-openapi'
import { getLabelNameValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const labelHandler = app.openapi(getLabelNameValuesRoute, (c) => {
  throw new Error('Not implemented')
})
