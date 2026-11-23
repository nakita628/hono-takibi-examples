import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDhcpLeasesIpRoute, getDhcpLeasesRoute } from '../routes'

const app = new OpenAPIHono()

export const dhcpHandler = app
  .openapi(getDhcpLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDhcpLeasesIpRoute, (c) => {
    throw new Error('Not implemented')
  })
