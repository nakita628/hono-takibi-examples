import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetOntologyTermsByPathwayRoute } from '../routes'

const app = new OpenAPIHono()

export const getOntologyTermsByPathwayHandler = app.openapi(
  getGetOntologyTermsByPathwayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
