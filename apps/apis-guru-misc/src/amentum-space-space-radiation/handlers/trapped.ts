import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrappedFluxMeanRoute, getTrappedFluxPercentileRoute } from '../routes'

const app = new OpenAPIHono()

export const trappedHandler = app
  .openapi(getTrappedFluxMeanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrappedFluxPercentileRoute, (c) => {
    throw new Error('Not implemented')
  })
