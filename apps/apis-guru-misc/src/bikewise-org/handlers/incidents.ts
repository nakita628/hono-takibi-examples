import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2IncidentsIdRoute, getV2IncidentsRoute } from '../routes'

const app = new OpenAPIHono()

export const incidentsHandler = app
  .openapi(getV2IncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IncidentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
