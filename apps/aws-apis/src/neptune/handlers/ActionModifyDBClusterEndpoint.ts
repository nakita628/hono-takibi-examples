import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBClusterEndpointRoute,
  postActionModifyDBClusterEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBClusterEndpointHandler = app
  .openapi(getActionModifyDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBClusterEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
