import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateEnclaveCertificateIamRoleRoute,
  postActionAssociateEnclaveCertificateIamRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateEnclaveCertificateIamRoleHandler = app
  .openapi(getActionAssociateEnclaveCertificateIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateEnclaveCertificateIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
