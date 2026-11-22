import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMlInfoRoute,
  getMlMemoryNodeIdStatsRoute,
  getMlMemoryStatsRoute,
  postMlSetUpgradeModeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlHandler = app
  .openapi(getMlMemoryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlMemoryNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlSetUpgradeModeRoute, (c) => {
    throw new Error('Not implemented')
  })
