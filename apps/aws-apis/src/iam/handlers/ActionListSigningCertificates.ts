import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListSigningCertificatesRoute,
  postActionListSigningCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListSigningCertificatesHandler = app
  .openapi(getActionListSigningCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSigningCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
