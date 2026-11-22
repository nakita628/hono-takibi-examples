import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const v1OutputFormatHandler = app.openapi(getV1OutputFormatRoute, (c) => {
  throw new Error('Not implemented')
})
