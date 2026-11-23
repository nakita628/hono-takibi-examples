import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVpcEndpointServiceConfigurationsRoute,
  postActionDeleteVpcEndpointServiceConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpcEndpointServiceConfigurationsHandler = app
  .openapi(getActionDeleteVpcEndpointServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpcEndpointServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
