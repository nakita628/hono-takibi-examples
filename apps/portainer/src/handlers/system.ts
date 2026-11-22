import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemInfoRoute,
  getSystemNodesRoute,
  getSystemStatusRoute,
  getSystemVersionRoute,
  postSystemUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
