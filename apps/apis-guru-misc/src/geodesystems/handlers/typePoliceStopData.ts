import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePoliceStopDataRoute } from '../routes'

const app = new OpenAPIHono()

export const typePoliceStopDataHandler = app.openapi(
  getRepositorySearchTypePoliceStopDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
