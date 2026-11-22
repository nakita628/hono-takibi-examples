import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TaxClassesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const taxClassesSearchHandler = app.openapi(getV1TaxClassesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
