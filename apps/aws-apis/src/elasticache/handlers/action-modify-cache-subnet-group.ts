import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCacheSubnetGroupRoute,
  postActionModifyCacheSubnetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyCacheSubnetGroupHandler = app
  .openapi(getActionModifyCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCacheSubnetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
