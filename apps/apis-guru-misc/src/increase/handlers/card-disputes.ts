import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCardDisputesCardDisputeIdRoute,
  getCardDisputesRoute,
  postCardDisputesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardDisputesHandler = app
  .openapi(getCardDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardDisputesCardDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
