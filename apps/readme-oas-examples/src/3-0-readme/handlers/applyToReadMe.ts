import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplyRoute, postApplyRoute } from '../routes'

const app = new OpenAPIHono()

export const applyToReadMeHandler = app
  .openapi(getApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
