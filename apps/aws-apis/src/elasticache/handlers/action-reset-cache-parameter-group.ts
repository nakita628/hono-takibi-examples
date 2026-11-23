import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetCacheParameterGroupRoute,
  postActionResetCacheParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetCacheParameterGroupHandler = app
  .openapi(getActionResetCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
