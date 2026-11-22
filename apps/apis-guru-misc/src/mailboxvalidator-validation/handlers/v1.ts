import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ValidationSingleRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1ValidationSingleRoute, (c) => {
  throw new Error('Not implemented')
})
