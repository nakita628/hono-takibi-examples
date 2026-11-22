import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallsCallControlIdRoute } from '../routes'

const app = new OpenAPIHono()

export const callInformationHandler = app.openapi(getCallsCallControlIdRoute, (c) => {
  throw new Error('Not implemented')
})
