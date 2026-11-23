import { OpenAPIHono } from '@hono/zod-openapi'
import { getWaybackV1AvailableRoute, postWaybackV1AvailableRoute } from '../routes'

const app = new OpenAPIHono()

export const waybackHandler = app
  .openapi(getWaybackV1AvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWaybackV1AvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
