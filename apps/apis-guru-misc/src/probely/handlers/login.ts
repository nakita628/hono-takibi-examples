import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAuthObtainIndexRoute,
  postAuthRefreshIndexRoute,
  postAuthRevokeIndexRoute,
  postAuthVerifyIndexRoute,
  postEnterpriseAuthObtainIndexRoute,
  postEnterpriseAuthRefreshIndexRoute,
  postEnterpriseAuthRevokeIndexRoute,
  postEnterpriseAuthVerifyIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(postAuthObtainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRefreshIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRevokeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
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
