import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCacheSubnetGroupRoute,
  postActionModifyCacheSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyCacheSubnetGroupHandler = app
  .openapi(getActionModifyCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
