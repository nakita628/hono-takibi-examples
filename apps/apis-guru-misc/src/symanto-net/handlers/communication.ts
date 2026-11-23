import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommunicationRoute } from '../routes'

const app = new OpenAPIHono()

export const communicationHandler = app.openapi(postCommunicationRoute, (c) => {
  throw new Error('Not implemented')
})
