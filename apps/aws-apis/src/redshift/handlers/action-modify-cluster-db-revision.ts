import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterDbRevisionRoute,
  postActionModifyClusterDbRevisionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterDbRevisionHandler = app
  .openapi(getActionModifyClusterDbRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterDbRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
