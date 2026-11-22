import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataIpGeolocationFullRoute, getDataIpGeolocationWithConfidenceRoute } from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataIpGeolocationFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIpGeolocationWithConfidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
