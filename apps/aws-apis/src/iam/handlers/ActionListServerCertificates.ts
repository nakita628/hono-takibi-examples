import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListServerCertificatesRoute,
  postActionListServerCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListServerCertificatesHandler = app
  .openapi(getActionListServerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListServerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
