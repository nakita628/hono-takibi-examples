import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserprofilesProfileIdDimensionvaluesQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const dimensionValuesHandler = app.openapi(
  postUserprofilesProfileIdDimensionvaluesQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
