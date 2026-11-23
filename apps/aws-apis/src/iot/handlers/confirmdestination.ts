import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfirmdestinationConfirmationTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const confirmdestinationHandler = app.openapi(
  getConfirmdestinationConfirmationTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
