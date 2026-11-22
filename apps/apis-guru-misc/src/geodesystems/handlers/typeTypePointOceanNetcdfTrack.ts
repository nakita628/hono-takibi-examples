import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanNetcdfTrackRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanNetcdfTrackHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanNetcdfTrackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
