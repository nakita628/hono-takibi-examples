import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchedulesScheduleFIndexRoute, getSchedulesScheduleFSubIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const partyCoordinatedExpendituresHandler = app
  .openapi(getSchedulesScheduleFIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleFSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
