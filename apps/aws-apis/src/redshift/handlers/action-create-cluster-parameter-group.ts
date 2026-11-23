import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClusterParameterGroupRoute,
  postActionCreateClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateClusterParameterGroupHandler = app
  .openapi(getActionCreateClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
