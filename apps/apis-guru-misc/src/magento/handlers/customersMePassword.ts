import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomersMePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const customersMePasswordHandler = app.openapi(putV1CustomersMePasswordRoute, (c) => {
  throw new Error('Not implemented')
})
