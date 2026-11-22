import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVpcVpcIdSubnetSubnetIdRouteIdRoute,
  getVpcVpcIdRouteRoute,
  getVpcVpcIdSubnetSubnetIdRouteRoute,
  postVpcVpcIdSubnetSubnetIdRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcRouteHandler = app
  .openapi(getVpcVpcIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetSubnetIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVpcVpcIdSubnetSubnetIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcVpcIdSubnetSubnetIdRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
