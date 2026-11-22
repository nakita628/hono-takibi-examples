import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailscaleSubnetRoutersIdRoute,
  getTailscaleSubnetRoutersIdRoute,
  getTailscaleSubnetRoutersRoute,
  patchTailscaleSubnetRoutersIdRoute,
  postTailscaleSubnetRoutersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tailscaleSubnetRoutersHandler = app
  .openapi(getTailscaleSubnetRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailscaleSubnetRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailscaleSubnetRoutersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailscaleSubnetRoutersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailscaleSubnetRoutersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
