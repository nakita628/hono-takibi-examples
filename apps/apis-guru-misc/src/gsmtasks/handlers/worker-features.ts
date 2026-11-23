import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkerFeaturesIndexRoute, getWorkerFeaturesUserIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const workerFeaturesHandler = app
  .openapi(getWorkerFeaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkerFeaturesUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
