import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryObjectsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryObjectsDirectoryObjectFunctionsHandler = app.openapi(
  getDirectoryObjectsDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
