import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateAlertHandler = app.openapi(postCreateAlertRoute, (c) => {
  throw new Error('Not implemented')
})
