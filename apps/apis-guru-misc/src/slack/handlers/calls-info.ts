import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const callsInfoHandler = app.openapi(getCallsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
