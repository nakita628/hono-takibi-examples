import { OpenAPIHono } from '@hono/zod-openapi'
import { putLprReprocessRoute } from '../routes'

const app = new OpenAPIHono()

export const lprHandler = app.openapi(putLprReprocessRoute, (c) => {
  throw new Error('Not implemented')
})
