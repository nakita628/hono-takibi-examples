import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountstatusesBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const accountstatusesHandler = app.openapi(postAccountstatusesBatchRoute, (c) => {
  throw new Error('Not implemented')
})
