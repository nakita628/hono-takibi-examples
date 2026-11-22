import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1OrgsOrgIdLogsCountRoute, getApiV1OrgsOrgIdLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsLogsHandler = app
  .openapi(getApiV1OrgsOrgIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLogsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
