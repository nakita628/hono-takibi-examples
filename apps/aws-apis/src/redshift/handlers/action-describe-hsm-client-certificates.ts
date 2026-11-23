import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeHsmClientCertificatesRoute,
  postActionDescribeHsmClientCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeHsmClientCertificatesHandler = app
  .openapi(getActionDescribeHsmClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeHsmClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
