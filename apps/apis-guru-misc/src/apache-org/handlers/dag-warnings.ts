import { OpenAPIHono } from '@hono/zod-openapi'
import { getDagWarningsRoute } from '../routes'

const app = new OpenAPIHono()

export const dagWarningsHandler = app.openapi(getDagWarningsRoute, (c) => {
  throw new Error('Not implemented')
})
