import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwaysByOntologyTermRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwaysByOntologyTermHandler = app.openapi(
  getGetPathwaysByOntologyTermRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
