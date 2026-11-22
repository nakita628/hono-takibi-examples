import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeSavingsPlansHandler = app.openapi(postDescribeSavingsPlansRoute, (c) => {
  throw new Error('Not implemented')
})
