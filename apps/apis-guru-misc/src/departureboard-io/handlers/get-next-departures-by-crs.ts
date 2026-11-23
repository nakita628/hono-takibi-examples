import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetNextDeparturesByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const getNextDeparturesByCrsHandler = app.openapi(getGetNextDeparturesByCRSCRSRoute, (c) => {
  throw new Error('Not implemented')
})
