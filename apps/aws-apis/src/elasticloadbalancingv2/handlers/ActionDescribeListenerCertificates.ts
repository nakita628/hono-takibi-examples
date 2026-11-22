import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeListenerCertificatesRoute,
  postActionDescribeListenerCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeListenerCertificatesHandler = app
  .openapi(getActionDescribeListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
