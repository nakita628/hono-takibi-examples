import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateInstanceEventWindowRoute,
  postActionCreateInstanceEventWindowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateInstanceEventWindowHandler = app
  .openapi(getActionCreateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
