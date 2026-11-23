import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceMetadataOptionsRoute,
  postActionModifyInstanceMetadataOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstanceMetadataOptionsHandler = app
  .openapi(getActionModifyInstanceMetadataOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceMetadataOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
