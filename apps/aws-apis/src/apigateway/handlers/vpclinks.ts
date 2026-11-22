import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVpclinksVpclinkIdRoute,
  getVpclinksRoute,
  getVpclinksVpclinkIdRoute,
  patchVpclinksVpclinkIdRoute,
  postVpclinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpclinksHandler = app
  .openapi(postVpclinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpclinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpclinksVpclinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpclinksVpclinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVpclinksVpclinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
