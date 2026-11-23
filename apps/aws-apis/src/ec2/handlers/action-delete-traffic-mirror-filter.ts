import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTrafficMirrorFilterRoute,
  postActionDeleteTrafficMirrorFilterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTrafficMirrorFilterHandler = app
  .openapi(getActionDeleteTrafficMirrorFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTrafficMirrorFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
