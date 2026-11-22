import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClusterParameterGroupRoute,
  postActionCreateClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateClusterParameterGroupHandler = app
  .openapi(getActionCreateClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
