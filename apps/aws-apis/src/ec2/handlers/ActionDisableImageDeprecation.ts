import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableImageDeprecationRoute,
  postActionDisableImageDeprecationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableImageDeprecationHandler = app
  .openapi(getActionDisableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
