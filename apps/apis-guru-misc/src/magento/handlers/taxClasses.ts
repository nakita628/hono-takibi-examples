import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TaxClassesRoute } from '../routes'

const app = new OpenAPIHono()

export const taxClassesHandler = app.openapi(postV1TaxClassesRoute, (c) => {
  throw new Error('Not implemented')
})
