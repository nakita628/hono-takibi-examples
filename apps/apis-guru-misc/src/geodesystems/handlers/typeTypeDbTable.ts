import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDbTableRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDbTableHandler = app.openapi(getRepositorySearchTypeTypeDbTableRoute, (c) => {
  throw new Error('Not implemented')
})
