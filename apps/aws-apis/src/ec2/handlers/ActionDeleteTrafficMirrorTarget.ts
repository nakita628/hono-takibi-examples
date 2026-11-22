import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTrafficMirrorTargetRoute,
  postActionDeleteTrafficMirrorTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTrafficMirrorTargetHandler = app
  .openapi(getActionDeleteTrafficMirrorTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTrafficMirrorTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
