import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpcEndpointServicePayerResponsibilityRoute,
  postActionModifyVpcEndpointServicePayerResponsibilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpcEndpointServicePayerResponsibilityHandler = app
  .openapi(getActionModifyVpcEndpointServicePayerResponsibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcEndpointServicePayerResponsibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
