import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1EidparamsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app.openapi(getV1beta1EidparamsRoute, (c) => {
  throw new Error('Not implemented')
})
