import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBClusterEndpointRoute,
  postActionDeleteDBClusterEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbClusterEndpointHandler = app
  .openapi(getActionDeleteDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
