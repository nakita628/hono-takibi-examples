import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEnterpriseAuthObtainIndexRoute,
  postEnterpriseAuthRefreshIndexRoute,
  postEnterpriseAuthRevokeIndexRoute,
  postEnterpriseAuthVerifyIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseHandler = app
  .openapi(postEnterpriseAuthObtainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseAuthRefreshIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseAuthRevokeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseAuthVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
