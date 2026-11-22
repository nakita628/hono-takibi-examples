import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicExperimentItemsRoute, getApiPublicExperimentsRoute } from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getApiPublicExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicExperimentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
