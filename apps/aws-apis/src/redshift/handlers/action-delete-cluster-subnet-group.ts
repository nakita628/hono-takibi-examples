import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteClusterSubnetGroupRoute,
  postActionDeleteClusterSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteClusterSubnetGroupHandler = app
  .openapi(getActionDeleteClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
