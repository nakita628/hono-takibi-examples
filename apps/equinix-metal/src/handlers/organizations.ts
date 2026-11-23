import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdRoute,
  getOrganizationsIdCapacityMetrosRoute,
  getOrganizationsIdCapacityRoute,
  getOrganizationsIdCustomdataRoute,
  getOrganizationsIdDevicesRoute,
  getOrganizationsIdEventsRoute,
  getOrganizationsIdFacilitiesRoute,
  getOrganizationsIdFirmwareSetsRoute,
  getOrganizationsIdInvitationsRoute,
  getOrganizationsIdInvoicesRoute,
  getOrganizationsIdOperatingSystemsRoute,
  getOrganizationsIdPaymentMethodsRoute,
  getOrganizationsIdPlansRoute,
  getOrganizationsIdProjectsRoute,
  getOrganizationsIdRoute,
  getOrganizationsIdTransfersRoute,
  getOrganizationsOrganizationIdConnectionsRoute,
  getOrganizationsRoute,
  postOrganizationsIdInvitationsRoute,
  postOrganizationsIdPaymentMethodsRoute,
  postOrganizationsIdProjectsRoute,
  postOrganizationsOrganizationIdConnectionsRoute,
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
  .openapi(getOrganizationsIdCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdCapacityMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdInvoicesRoute, (c) => {
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
  .openapi(getOrganizationsOrganizationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
