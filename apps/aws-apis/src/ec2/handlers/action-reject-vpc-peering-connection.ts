import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRejectVpcPeeringConnectionRoute,
  postActionRejectVpcPeeringConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRejectVpcPeeringConnectionHandler = app
  .openapi(getActionRejectVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
