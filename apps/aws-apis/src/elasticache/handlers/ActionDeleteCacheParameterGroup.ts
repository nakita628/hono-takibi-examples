import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCacheParameterGroupRoute,
  postActionDeleteCacheParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCacheParameterGroupHandler = app
  .openapi(getActionDeleteCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
