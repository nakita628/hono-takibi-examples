import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateEnclaveCertificateIamRoleRoute,
  postActionDisassociateEnclaveCertificateIamRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateEnclaveCertificateIamRoleHandler = app
  .openapi(getActionDisassociateEnclaveCertificateIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateEnclaveCertificateIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
