import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLimitsLimitIdRoute,
  getLimitsRoute,
  patchLimitsLimitIdRoute,
  postLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const limitsHandler = app
  .openapi(getLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLimitsLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLimitsLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
