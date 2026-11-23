import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHumanLoopsHumanLoopNameRoute,
  getHumanLoopsHumanLoopNameRoute,
  postHumanLoopsRoute,
  postHumanLoopsStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const humanLoopsHandler = app
  .openapi(deleteHumanLoopsHumanLoopNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHumanLoopsHumanLoopNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHumanLoopsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHumanLoopsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
