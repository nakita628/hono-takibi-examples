import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectSurveylocationRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectSurveylocationHandler = app.openapi(
  getRepositorySearchTypeProjectSurveylocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
