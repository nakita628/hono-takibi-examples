import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanNetcdfGliderRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanNetcdfGliderHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanNetcdfGliderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
