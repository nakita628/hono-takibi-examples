import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBProxyTargetGroupRoute,
  postActionModifyDBProxyTargetGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyDbProxyTargetGroupHandler = app
  .openapi(getActionModifyDBProxyTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBProxyTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
