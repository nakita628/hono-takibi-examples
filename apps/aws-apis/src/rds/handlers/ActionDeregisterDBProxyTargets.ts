import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeregisterDBProxyTargetsRoute,
  postActionDeregisterDBProxyTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterDBProxyTargetsHandler = app
  .openapi(getActionDeregisterDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
