import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTrafficMirrorSessionRoute,
  postActionCreateTrafficMirrorSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTrafficMirrorSessionHandler = app
  .openapi(getActionCreateTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
