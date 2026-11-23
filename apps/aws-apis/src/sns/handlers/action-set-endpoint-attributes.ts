import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetEndpointAttributesRoute,
  postActionSetEndpointAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetEndpointAttributesHandler = app
  .openapi(getActionSetEndpointAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetEndpointAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
