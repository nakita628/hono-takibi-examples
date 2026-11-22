import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFecPacsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFecPacsHandler = app.openapi(getRepositorySearchTypeFecPacsRoute, (c) => {
  throw new Error('Not implemented')
})
