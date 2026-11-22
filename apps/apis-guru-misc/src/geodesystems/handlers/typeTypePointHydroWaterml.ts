import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointHydroWatermlRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointHydroWatermlHandler = app.openapi(
  getRepositorySearchTypeTypePointHydroWatermlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
