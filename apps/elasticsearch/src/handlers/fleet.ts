import { OpenAPIHono } from '@hono/zod-openapi'
import { getFleetFleetMsearchRoute, postFleetFleetMsearchRoute } from '../routes'

const app = new OpenAPIHono()

export const fleetHandler = app
  .openapi(getFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
