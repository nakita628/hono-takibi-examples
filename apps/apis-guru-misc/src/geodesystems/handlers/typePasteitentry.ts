import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePasteitentryRoute } from '../routes'

const app = new OpenAPIHono()

export const typePasteitentryHandler = app.openapi(
  getRepositorySearchTypePasteitentryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
