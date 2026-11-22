import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdRoute,
  getOrganizationsIdCustomdataRoute,
  getOrganizationsIdInvitationsRoute,
  getOrganizationsIdOperatingSystemsRoute,
  getOrganizationsIdPaymentMethodsRoute,
  getOrganizationsIdPlansRoute,
  getOrganizationsIdProjectsRoute,
  getOrganizationsIdRoute,
  getOrganizationsIdTransfersRoute,
  getOrganizationsRoute,
  postOrganizationsIdInvitationsRoute,
  postOrganizationsIdPaymentMethodsRoute,
  postOrganizationsIdProjectsRoute,
  postOrganizationsRoute,
  putOrganizationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOperatingSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
