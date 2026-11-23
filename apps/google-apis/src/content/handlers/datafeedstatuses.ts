import { OpenAPIHono } from '@hono/zod-openapi'
import { postDatafeedstatusesBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const datafeedstatusesHandler = app.openapi(postDatafeedstatusesBatchRoute, (c) => {
  throw new Error('Not implemented')
})
