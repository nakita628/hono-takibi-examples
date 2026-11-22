import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2CallsScheduledIdRoute,
  get2CallsIdRoute,
  get2CallsScheduledIdRoute,
  get2CallsScheduledRoute,
  post2CallsIdJoinRoute,
  post2CallsIdLeaveRoute,
  post2CallsRoute,
  post2CallsScheduledIdRsvpRoute,
  post2CallsScheduledRoute,
  put2CallsScheduledIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(post2CallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2CallsScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2CallsScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2CallsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2CallsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2CallsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2CallsScheduledIdRsvpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2CallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2CallsIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2CallsIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
