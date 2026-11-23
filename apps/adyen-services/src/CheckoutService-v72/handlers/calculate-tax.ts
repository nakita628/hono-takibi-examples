import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateTaxRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateTaxHandler = app.openapi(postCalculateTaxRoute, (c) => {
  throw new Error('Not implemented')
})
