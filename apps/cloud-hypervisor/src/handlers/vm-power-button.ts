import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmPowerButtonRoute } from '../routes'

const app = new OpenAPIHono()

export const vmPowerButtonHandler = app.openapi(putVmPowerButtonRoute, (c) => {
  throw new Error('Not implemented')
})
