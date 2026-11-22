import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBClusterEndpointRoute,
  postActionCreateDBClusterEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBClusterEndpointHandler = app
  .openapi(getActionCreateDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
