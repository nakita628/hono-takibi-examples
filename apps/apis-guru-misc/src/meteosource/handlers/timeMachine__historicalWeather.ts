import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimeMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const timeMachine__historicalWeatherHandler = app.openapi(getTimeMachineRoute, (c) => {
  throw new Error('Not implemented')
})
