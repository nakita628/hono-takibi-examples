import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2TargetFailuresRoute, getApiV2TargetFailuresTargetFailureIdRoute } from '../routes'

const app = new OpenAPIHono()

export const targetFailuresHandler = app
  .openapi(getApiV2TargetFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetFailuresTargetFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
