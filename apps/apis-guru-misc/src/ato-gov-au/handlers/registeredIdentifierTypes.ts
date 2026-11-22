import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsRegisteredIdentifierTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const registeredIdentifierTypesHandler = app.openapi(
  getClassificationsRegisteredIdentifierTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
