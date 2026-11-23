import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupertrendHeikinashicandlesRoute } from '../routes'

const app = new OpenAPIHono()

export const supertrendHeikinashicandlesHandler = app.openapi(
  getSupertrendHeikinashicandlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
