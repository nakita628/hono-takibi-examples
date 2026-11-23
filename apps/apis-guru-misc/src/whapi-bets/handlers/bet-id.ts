import { OpenAPIHono } from '@hono/zod-openapi'
import { putBetIdCashinRoute } from '../routes'

const app = new OpenAPIHono()

export const betIdHandler = app.openapi(putBetIdCashinRoute, (c) => {
  throw new Error('Not implemented')
})
