import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTrafficMirrorSessionRoute,
  postActionDeleteTrafficMirrorSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTrafficMirrorSessionHandler = app
  .openapi(getActionDeleteTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTrafficMirrorSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
