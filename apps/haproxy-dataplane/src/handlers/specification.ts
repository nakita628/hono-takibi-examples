import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpecificationRoute } from '../routes'

const app = new OpenAPIHono()

export const specificationHandler = app.openapi(getSpecificationRoute, (c) => {
  throw new Error('Not implemented')
})
