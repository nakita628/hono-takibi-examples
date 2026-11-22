import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeNitfRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeNitfHandler = app.openapi(getRepositorySearchTypeTypeNitfRoute, (c) => {
  throw new Error('Not implemented')
})
