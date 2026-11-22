import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1TaxClassesClassIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taxClassesClassIdHandler = app.openapi(putV1TaxClassesClassIdRoute, (c) => {
  throw new Error('Not implemented')
})
