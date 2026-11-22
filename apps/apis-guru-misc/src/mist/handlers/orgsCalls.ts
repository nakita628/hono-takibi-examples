import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdCallEventsCountRoute,
  getApiV1OrgsOrgIdCallEventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsCallsHandler = app
  .openapi(getApiV1OrgsOrgIdCallEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdCallEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
