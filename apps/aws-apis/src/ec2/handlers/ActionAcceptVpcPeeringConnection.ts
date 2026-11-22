import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptVpcPeeringConnectionRoute,
  postActionAcceptVpcPeeringConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAcceptVpcPeeringConnectionHandler = app
  .openapi(getActionAcceptVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
