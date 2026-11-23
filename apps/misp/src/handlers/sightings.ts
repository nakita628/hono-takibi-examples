import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSightingsIndexEventIdRoute,
  postSightingsAddAttributeIdRoute,
  postSightingsAddRoute,
  postSightingsDeleteSightingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sightingsHandler = app
  .openapi(getSightingsIndexEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSightingsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSightingsAddAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSightingsDeleteSightingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
