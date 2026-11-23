import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetEbsDefaultKmsKeyIdRoute,
  postActionGetEbsDefaultKmsKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetEbsDefaultKmsKeyIdHandler = app
  .openapi(getActionGetEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
