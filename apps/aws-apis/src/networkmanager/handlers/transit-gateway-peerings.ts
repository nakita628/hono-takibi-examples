import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransitGatewayPeeringsPeeringIdRoute, postTransitGatewayPeeringsRoute } from '../routes'

const app = new OpenAPIHono()

export const transitGatewayPeeringsHandler = app
  .openapi(postTransitGatewayPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitGatewayPeeringsPeeringIdRoute, (c) => {
    throw new Error('Not implemented')
  })
