import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBClusterParameterGroupRoute,
  postActionDeleteDBClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbClusterParameterGroupHandler = app
  .openapi(getActionDeleteDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
