import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableVgwRoutePropagationRoute,
  postActionDisableVgwRoutePropagationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableVgwRoutePropagationHandler = app
  .openapi(getActionDisableVgwRoutePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableVgwRoutePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
