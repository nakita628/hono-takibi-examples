import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AuditsRoute, getV1EventsIdRoute, getV1EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditsHandler = app
  .openapi(getV1AuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
