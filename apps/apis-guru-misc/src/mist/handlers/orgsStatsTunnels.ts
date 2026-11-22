import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdStatsTunnelsCountRoute,
  getApiV1OrgsOrgIdStatsTunnelsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsStatsTunnelsHandler = app
  .openapi(getApiV1OrgsOrgIdStatsTunnelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsTunnelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
