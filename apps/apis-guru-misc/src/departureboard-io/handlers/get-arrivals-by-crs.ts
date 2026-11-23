import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetArrivalsByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const getArrivalsByCrsHandler = app.openapi(getGetArrivalsByCRSCRSRoute, (c) => {
  throw new Error('Not implemented')
})
