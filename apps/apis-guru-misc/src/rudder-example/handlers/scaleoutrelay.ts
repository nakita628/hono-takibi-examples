import { OpenAPIHono } from '@hono/zod-openapi'
import { postScaleoutrelayDemoteNodeIdRoute, postScaleoutrelayPromoteNodeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const scaleoutrelayHandler = app
  .openapi(postScaleoutrelayDemoteNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScaleoutrelayPromoteNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
