import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetstateabbreviationRoute } from '../routes'

const app = new OpenAPIHono()

export const stateDataStandardizationHandler = app.openapi(getGetstateabbreviationRoute, (c) => {
  throw new Error('Not implemented')
})
