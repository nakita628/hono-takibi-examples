import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRegisterDBProxyTargetsRoute,
  postActionRegisterDBProxyTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterDBProxyTargetsHandler = app
  .openapi(getActionRegisterDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
