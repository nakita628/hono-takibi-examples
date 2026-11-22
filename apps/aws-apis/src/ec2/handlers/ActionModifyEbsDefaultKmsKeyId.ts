import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyEbsDefaultKmsKeyIdRoute,
  postActionModifyEbsDefaultKmsKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyEbsDefaultKmsKeyIdHandler = app
  .openapi(getActionModifyEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
