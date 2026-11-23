import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClusterSubnetGroupRoute,
  postActionCreateClusterSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateClusterSubnetGroupHandler = app
  .openapi(getActionCreateClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
