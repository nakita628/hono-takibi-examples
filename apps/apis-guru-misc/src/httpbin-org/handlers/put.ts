import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutRoute } from '../routes'

const app = new OpenAPIHono()

export const putHandler = app.openapi(putPutRoute, (c) => {
  throw new Error('Not implemented')
})
