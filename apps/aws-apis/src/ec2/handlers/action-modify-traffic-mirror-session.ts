import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTrafficMirrorSessionRoute,
  postActionModifyTrafficMirrorSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyTrafficMirrorSessionHandler = app
  .openapi(getActionModifyTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
