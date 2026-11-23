import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetroAreasIdRoute, getMetroAreasRoute } from '../routes'

const app = new OpenAPIHono()

export const metroAreasHandler = app
  .openapi(getMetroAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetroAreasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
