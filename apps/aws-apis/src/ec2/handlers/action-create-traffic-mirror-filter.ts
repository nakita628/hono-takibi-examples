import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTrafficMirrorFilterRoute,
  postActionCreateTrafficMirrorFilterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTrafficMirrorFilterHandler = app
  .openapi(getActionCreateTrafficMirrorFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTrafficMirrorFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
