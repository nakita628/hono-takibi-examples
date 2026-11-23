import { OpenAPIHono } from '@hono/zod-openapi'
import { putOrderIsReadyForPickupRoute } from '../routes'

const app = new OpenAPIHono()

export const orderIsReadyForPickupHandler = app.openapi(putOrderIsReadyForPickupRoute, (c) => {
  throw new Error('Not implemented')
})
