import { OpenAPIHono } from '@hono/zod-openapi'
import { getDistanceOutputFormatRoute, postDistanceOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const distanceOutputFormatHandler = app
  .openapi(getDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistanceOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
