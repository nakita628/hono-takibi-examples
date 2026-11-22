import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableVgwRoutePropagationRoute,
  postActionEnableVgwRoutePropagationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableVgwRoutePropagationHandler = app
  .openapi(getActionEnableVgwRoutePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableVgwRoutePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
