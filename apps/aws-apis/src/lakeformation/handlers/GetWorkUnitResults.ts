import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWorkUnitResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetWorkUnitResultsHandler = app.openapi(postGetWorkUnitResultsRoute, (c) => {
  throw new Error('Not implemented')
})
