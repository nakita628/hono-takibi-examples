import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetectStackDriftRoute, postActionDetectStackDriftRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDetectStackDriftHandler = app
  .openapi(getActionDetectStackDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetectStackDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
