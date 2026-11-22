import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLidarLasRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLidarLasHandler = app.openapi(getRepositorySearchTypeLidarLasRoute, (c) => {
  throw new Error('Not implemented')
})
