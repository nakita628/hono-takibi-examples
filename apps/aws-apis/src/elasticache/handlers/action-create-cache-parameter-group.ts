import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCacheParameterGroupRoute,
  postActionCreateCacheParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateCacheParameterGroupHandler = app
  .openapi(getActionCreateCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
