import { OpenAPIHono } from '@hono/zod-openapi'
import { postManagedDataIdentifiersListRoute } from '../routes'

const app = new OpenAPIHono()

export const managedDataIdentifiersHandler = app.openapi(
  postManagedDataIdentifiersListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
