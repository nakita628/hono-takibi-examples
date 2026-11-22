import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1alpha1ClaimsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const claimsHandler = app.openapi(getV1alpha1ClaimsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
