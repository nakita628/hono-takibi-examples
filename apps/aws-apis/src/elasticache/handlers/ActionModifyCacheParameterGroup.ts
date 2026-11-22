import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCacheParameterGroupRoute,
  postActionModifyCacheParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyCacheParameterGroupHandler = app
  .openapi(getActionModifyCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCacheParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
