import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPathwaysByLiteratureRoute } from '../routes'

const app = new OpenAPIHono()

export const findPathwaysByLiteratureHandler = app.openapi(
  getFindPathwaysByLiteratureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
