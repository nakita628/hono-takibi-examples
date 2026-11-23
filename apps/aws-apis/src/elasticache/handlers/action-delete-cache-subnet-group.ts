import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCacheSubnetGroupRoute,
  postActionDeleteCacheSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteCacheSubnetGroupHandler = app
  .openapi(getActionDeleteCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
