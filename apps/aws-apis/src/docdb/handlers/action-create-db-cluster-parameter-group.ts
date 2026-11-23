import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBClusterParameterGroupRoute,
  postActionCreateDBClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateDbClusterParameterGroupHandler = app
  .openapi(getActionCreateDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
