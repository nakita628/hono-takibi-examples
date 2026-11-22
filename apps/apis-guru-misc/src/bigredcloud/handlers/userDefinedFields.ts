import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UserDefinedFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const userDefinedFieldsHandler = app.openapi(getV1UserDefinedFieldsRoute, (c) => {
  throw new Error('Not implemented')
})
