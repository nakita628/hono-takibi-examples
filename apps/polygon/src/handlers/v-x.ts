import { OpenAPIHono } from '@hono/zod-openapi'
import { getVXReferenceIposRoute, getVXReferenceTickersIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const vXHandler = app
  .openapi(getVXReferenceIposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVXReferenceTickersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
