import { OpenAPIHono } from '@hono/zod-openapi'
import { postCardacquisitionRoute } from '../routes'

const app = new OpenAPIHono()

export const cardacquisitionHandler = app.openapi(postCardacquisitionRoute, (c) => {
  throw new Error('Not implemented')
})
