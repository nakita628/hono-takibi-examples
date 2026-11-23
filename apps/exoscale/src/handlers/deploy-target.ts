import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeployTargetIdRoute, getDeployTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const deployTargetHandler = app
  .openapi(getDeployTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeployTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
