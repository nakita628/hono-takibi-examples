import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateApplicationResourceLifecycleRoute,
  postActionUpdateApplicationResourceLifecycleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateApplicationResourceLifecycleHandler = app
  .openapi(getActionUpdateApplicationResourceLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateApplicationResourceLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
