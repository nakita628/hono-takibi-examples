import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWorkUnitResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const getWorkUnitResultsHandler = app.openapi(postGetWorkUnitResultsRoute, (c) => {
  throw new Error('Not implemented')
})
