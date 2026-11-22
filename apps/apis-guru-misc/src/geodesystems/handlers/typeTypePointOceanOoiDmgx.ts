import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanOoiDmgxRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanOoiDmgxHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanOoiDmgxRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
