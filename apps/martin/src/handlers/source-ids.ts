import { OpenAPIHono } from '@hono/zod-openapi'
import { getSourceIdsRoute, getSourceIdsZXYRoute } from '../routes'

const app = new OpenAPIHono()

export const sourceIdsHandler = app
  .openapi(getSourceIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceIdsZXYRoute, (c) => {
    throw new Error('Not implemented')
  })
