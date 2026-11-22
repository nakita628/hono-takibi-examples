import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TokenActivityRoute, getV1TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationTokenManagementInThisRegionHandler = app
  .openapi(getV1TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
