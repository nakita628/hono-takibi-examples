import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeMbRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeMbHandler = app.openapi(getRepositorySearchTypeTypeMbRoute, (c) => {
  throw new Error('Not implemented')
})
