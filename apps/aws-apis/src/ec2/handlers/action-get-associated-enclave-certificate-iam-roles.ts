import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAssociatedEnclaveCertificateIamRolesRoute,
  postActionGetAssociatedEnclaveCertificateIamRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetAssociatedEnclaveCertificateIamRolesHandler = app
  .openapi(getActionGetAssociatedEnclaveCertificateIamRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAssociatedEnclaveCertificateIamRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
