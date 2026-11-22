import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceTickersTickerRoute, getVXReferenceTickersIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceTickersGetHandler = app
  .openapi(getV3ReferenceTickersTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVXReferenceTickersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
