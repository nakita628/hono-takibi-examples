import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceEventWindowRoute,
  postActionModifyInstanceEventWindowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstanceEventWindowHandler = app
  .openapi(getActionModifyInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
