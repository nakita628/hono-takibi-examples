import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterSubnetGroupRoute,
  postActionModifyClusterSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterSubnetGroupHandler = app
  .openapi(getActionModifyClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
