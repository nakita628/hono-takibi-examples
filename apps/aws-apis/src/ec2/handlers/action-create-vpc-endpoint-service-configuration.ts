import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVpcEndpointServiceConfigurationRoute,
  postActionCreateVpcEndpointServiceConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVpcEndpointServiceConfigurationHandler = app
  .openapi(getActionCreateVpcEndpointServiceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpcEndpointServiceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
