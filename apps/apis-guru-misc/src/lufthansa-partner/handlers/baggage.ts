import { OpenAPIHono } from '@hono/zod-openapi'
import { getBaggageBaggagetripandcontactSearchIDRoute } from '../routes'

const app = new OpenAPIHono()

export const baggageHandler = app.openapi(getBaggageBaggagetripandcontactSearchIDRoute, (c) => {
  throw new Error('Not implemented')
})
