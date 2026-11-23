import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyAddressAttributeRoute,
  postActionModifyAddressAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyAddressAttributeHandler = app
  .openapi(getActionModifyAddressAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyAddressAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
