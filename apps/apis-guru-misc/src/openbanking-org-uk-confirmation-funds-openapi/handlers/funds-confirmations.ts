import { OpenAPIHono } from '@hono/zod-openapi'
import { postFundsConfirmationsRoute } from '../routes'

const app = new OpenAPIHono()

export const fundsConfirmationsHandler = app.openapi(postFundsConfirmationsRoute, (c) => {
  throw new Error('Not implemented')
})
