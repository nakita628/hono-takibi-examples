import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceAttributeRoute,
  postActionModifyInstanceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstanceAttributeHandler = app
  .openapi(getActionModifyInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
