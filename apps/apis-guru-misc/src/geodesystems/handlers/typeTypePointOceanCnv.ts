import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanCnvRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanCnvHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanCnvRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
