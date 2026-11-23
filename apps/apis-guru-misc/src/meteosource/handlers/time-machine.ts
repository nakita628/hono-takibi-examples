import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimeMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const timeMachineHandler = app.openapi(getTimeMachineRoute, (c) => {
  throw new Error('Not implemented')
})
