import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUntagServerCertificateRoute,
  postActionUntagServerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUntagServerCertificateHandler = app
  .openapi(getActionUntagServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
