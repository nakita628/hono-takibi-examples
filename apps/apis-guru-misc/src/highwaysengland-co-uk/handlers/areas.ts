import { OpenAPIHono } from '@hono/zod-openapi'
import { getVVersionAreasAreaIdsRoute, getVVersionAreasRoute } from '../routes'

const app = new OpenAPIHono()

export const areasHandler = app
  .openapi(getVVersionAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionAreasAreaIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
