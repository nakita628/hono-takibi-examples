import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLidarLvisRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLidarLvisHandler = app.openapi(getRepositorySearchTypeLidarLvisRoute, (c) => {
  throw new Error('Not implemented')
})
