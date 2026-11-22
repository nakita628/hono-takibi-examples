import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCacheSubnetGroupRoute,
  postActionCreateCacheSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCacheSubnetGroupHandler = app
  .openapi(getActionCreateCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
