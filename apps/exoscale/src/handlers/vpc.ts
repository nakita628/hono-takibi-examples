import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVpcIdRoute,
  deleteVpcVpcIdSubnetIdRoute,
  deleteVpcVpcIdSubnetSubnetIdRouteIdRoute,
  getVpcIdRoute,
  getVpcRoute,
  getVpcVpcIdRouteRoute,
  getVpcVpcIdSubnetIdRoute,
  getVpcVpcIdSubnetRoute,
  getVpcVpcIdSubnetSubnetIdRouteRoute,
  postVpcRoute,
  postVpcVpcIdSubnetRoute,
  postVpcVpcIdSubnetSubnetIdRouteRoute,
  putVpcIdRoute,
  putVpcVpcIdSubnetIdRoute,
  putVpcVpcIdSubnetSubnetIdAttachRoute,
  putVpcVpcIdSubnetSubnetIdDetachRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcHandler = app
  .openapi(putVpcVpcIdSubnetSubnetIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetSubnetIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVpcVpcIdSubnetSubnetIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVpcVpcIdSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcVpcIdSubnetSubnetIdRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcVpcIdSubnetSubnetIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
