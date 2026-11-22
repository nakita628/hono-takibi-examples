import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpcEndpointServiceConfigurationRoute,
  postActionModifyVpcEndpointServiceConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpcEndpointServiceConfigurationHandler = app
  .openapi(getActionModifyVpcEndpointServiceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcEndpointServiceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
