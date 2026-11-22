import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
  getApiVersionVpcsVpcIdSubnetsRoute,
  getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
  postApiVersionVpcsVpcIdSubnetsRoute,
  putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcSubnetsHandler = app
  .openapi(postApiVersionVpcsVpcIdSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
