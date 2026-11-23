import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaskAddressFeaturesIdIndexRoute, getTaskAddressFeaturesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taskAddressFeaturesHandler = app
  .openapi(getTaskAddressFeaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskAddressFeaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
