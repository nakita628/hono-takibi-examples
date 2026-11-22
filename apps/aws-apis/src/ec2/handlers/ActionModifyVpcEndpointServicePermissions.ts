import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpcEndpointServicePermissionsRoute,
  postActionModifyVpcEndpointServicePermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpcEndpointServicePermissionsHandler = app
  .openapi(getActionModifyVpcEndpointServicePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcEndpointServicePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
