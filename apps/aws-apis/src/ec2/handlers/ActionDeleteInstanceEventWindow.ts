import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteInstanceEventWindowRoute,
  postActionDeleteInstanceEventWindowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteInstanceEventWindowHandler = app
  .openapi(getActionDeleteInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
