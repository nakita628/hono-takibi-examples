import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCopyDBClusterParameterGroupRoute,
  postActionCopyDBClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCopyDBClusterParameterGroupHandler = app
  .openapi(getActionCopyDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
