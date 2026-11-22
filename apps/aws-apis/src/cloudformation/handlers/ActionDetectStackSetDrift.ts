import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetectStackSetDriftRoute, postActionDetectStackSetDriftRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDetectStackSetDriftHandler = app
  .openapi(getActionDetectStackSetDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetectStackSetDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
