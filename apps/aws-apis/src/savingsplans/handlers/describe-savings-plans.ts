import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSavingsPlansHandler = app.openapi(postDescribeSavingsPlansRoute, (c) => {
  throw new Error('Not implemented')
})
