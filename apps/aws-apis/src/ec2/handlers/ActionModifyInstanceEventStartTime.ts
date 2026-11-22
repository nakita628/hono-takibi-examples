import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceEventStartTimeRoute,
  postActionModifyInstanceEventStartTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyInstanceEventStartTimeHandler = app
  .openapi(getActionModifyInstanceEventStartTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceEventStartTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
