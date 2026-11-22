import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTrafficMirrorSessionRoute,
  postActionModifyTrafficMirrorSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyTrafficMirrorSessionHandler = app
  .openapi(getActionModifyTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
