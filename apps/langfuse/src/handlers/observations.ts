import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicV2ObservationsRoute } from '../routes'

const app = new OpenAPIHono()

export const observationsHandler = app.openapi(getApiPublicV2ObservationsRoute, (c) => {
  throw new Error('Not implemented')
})
