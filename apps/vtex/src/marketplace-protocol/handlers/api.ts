import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiCheckoutPubOrderFormsSimulationRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(postApiCheckoutPubOrderFormsSimulationRoute, (c) => {
  throw new Error('Not implemented')
})
