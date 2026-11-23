import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplyRoute, postApplyRoute } from '../routes'

const app = new OpenAPIHono()

export const applyHandler = app
  .openapi(getApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
