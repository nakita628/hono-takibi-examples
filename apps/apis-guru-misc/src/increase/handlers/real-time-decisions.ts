import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRealTimeDecisionsRealTimeDecisionIdRoute,
  postRealTimeDecisionsRealTimeDecisionIdActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realTimeDecisionsHandler = app
  .openapi(getRealTimeDecisionsRealTimeDecisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealTimeDecisionsRealTimeDecisionIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
