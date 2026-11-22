import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetEbsDefaultKmsKeyIdRoute,
  postActionResetEbsDefaultKmsKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionResetEbsDefaultKmsKeyIdHandler = app
  .openapi(getActionResetEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetEbsDefaultKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
