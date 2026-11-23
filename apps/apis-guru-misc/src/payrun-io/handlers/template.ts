import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplateDtoDataTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app.openapi(getTemplateDtoDataTypeRoute, (c) => {
  throw new Error('Not implemented')
})
