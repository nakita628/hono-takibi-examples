import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteVpcPeeringConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteVpcPeeringConnectionHandler = app.openapi(
  postXAmzTargetGameLiftDeleteVpcPeeringConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
