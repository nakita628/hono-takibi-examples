import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLocationsHandler = app.openapi(getRepositorySearchTypeLocationsRoute, (c) => {
  throw new Error('Not implemented')
})
