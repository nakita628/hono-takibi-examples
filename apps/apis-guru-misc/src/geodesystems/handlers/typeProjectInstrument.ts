import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectInstrumentRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectInstrumentHandler = app.openapi(
  getRepositorySearchTypeProjectInstrumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
