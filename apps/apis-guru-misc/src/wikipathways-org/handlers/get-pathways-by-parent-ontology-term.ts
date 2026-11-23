import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwaysByParentOntologyTermRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwaysByParentOntologyTermHandler = app.openapi(
  getGetPathwaysByParentOntologyTermRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
