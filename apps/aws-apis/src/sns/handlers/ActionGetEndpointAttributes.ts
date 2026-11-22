import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetEndpointAttributesRoute,
  postActionGetEndpointAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetEndpointAttributesHandler = app
  .openapi(getActionGetEndpointAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetEndpointAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
