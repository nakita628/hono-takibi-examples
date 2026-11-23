import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdAddressesAddressIdRoute,
  deleteOrganisationsPartyIdBusinessNamesProductIdRoute,
  deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  deleteOrganisationsPartyIdLicensesProductIdRoute,
  deleteOrganisationsPartyIdRolesRoleIdRoute,
  deleteOrganisationsPartyIdRoute,
  getOrganisationsPartyIdAddressesAddressIdRoute,
  getOrganisationsPartyIdAddressesRoute,
  getOrganisationsPartyIdBusinessNamesProductIdRoute,
  getOrganisationsPartyIdBusinessNamesRoute,
  getOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  getOrganisationsPartyIdElectronicAddressesRoute,
  getOrganisationsPartyIdLicensesProductIdRoute,
  getOrganisationsPartyIdLicensesRoute,
  getOrganisationsPartyIdRolesRoleIdRoute,
  getOrganisationsPartyIdRolesRoute,
  getOrganisationsPartyIdRoute,
  getOrganisationsRoute,
  postOrganisationsPartyIdAddressesRoute,
  postOrganisationsPartyIdBusinessNamesRoute,
  postOrganisationsPartyIdElectronicAddressesRoute,
  postOrganisationsPartyIdLicensesRoute,
  postOrganisationsPartyIdRolesRoute,
  postOrganisationsRoute,
  putOrganisationsPartyIdAddressesAddressIdRoute,
  putOrganisationsPartyIdBusinessNamesProductIdRoute,
  putOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  putOrganisationsPartyIdLicensesProductIdRoute,
  putOrganisationsPartyIdRolesRoleIdRoute,
  putOrganisationsPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsHandler = app
  .openapi(getOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
