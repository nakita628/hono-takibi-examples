import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstitutionsInstitutionStringIdArticlesFilterByRoute } from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app.openapi(
  getInstitutionsInstitutionStringIdArticlesFilterByRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
