import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportEngagespotIdRoute,
  getApiTransportEngagespotIdRoute,
  getApiTransportEngagespotRoute,
  postApiTransportEngagespotRoute,
  putApiTransportEngagespotIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportEngagespotHandler = app
  .openapi(getApiTransportEngagespotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEngagespotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEngagespotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
