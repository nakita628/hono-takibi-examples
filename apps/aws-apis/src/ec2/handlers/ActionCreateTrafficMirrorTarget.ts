import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTrafficMirrorTargetRoute,
  postActionCreateTrafficMirrorTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTrafficMirrorTargetHandler = app
  .openapi(getActionCreateTrafficMirrorTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTrafficMirrorTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
