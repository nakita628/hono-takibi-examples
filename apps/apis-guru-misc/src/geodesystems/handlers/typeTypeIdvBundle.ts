import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeIdvBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeIdvBundleHandler = app.openapi(
  getRepositorySearchTypeTypeIdvBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
