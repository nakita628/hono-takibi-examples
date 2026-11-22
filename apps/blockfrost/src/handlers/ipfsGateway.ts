import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpfsGatewayIPFSPathRoute } from '../routes'

const app = new OpenAPIHono()

export const ipfsGatewayHandler = app.openapi(getIpfsGatewayIPFSPathRoute, (c) => {
  throw new Error('Not implemented')
})
