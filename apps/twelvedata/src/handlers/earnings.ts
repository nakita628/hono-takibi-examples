import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarningsRoute } from '../routes'

const app = new OpenAPIHono()

export const earningsHandler = app.openapi(getEarningsRoute, (c) => {
  throw new Error('Not implemented')
})
