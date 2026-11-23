import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductstatusesBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const productstatusesHandler = app.openapi(postProductstatusesBatchRoute, (c) => {
  throw new Error('Not implemented')
})
