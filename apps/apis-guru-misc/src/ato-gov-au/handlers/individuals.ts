import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdAddressesAddressIdRoute,
  deleteIndividualsPartyIdBusinessNamesProductIdRoute,
  deleteIndividualsPartyIdElectronicAddressesAddressIdRoute,
  deleteIndividualsPartyIdLicensesProductIdRoute,
  deleteIndividualsPartyIdRolesRoleIdRoute,
  deleteIndividualsPartyIdRoute,
  getIndividualsPartyIdAddressesAddressIdRoute,
  getIndividualsPartyIdAddressesRoute,
  getIndividualsPartyIdBusinessNamesProductIdRoute,
  getIndividualsPartyIdBusinessNamesRoute,
  getIndividualsPartyIdElectronicAddressesAddressIdRoute,
  getIndividualsPartyIdElectronicAddressesRoute,
  getIndividualsPartyIdLicensesProductIdRoute,
  getIndividualsPartyIdLicensesRoute,
  getIndividualsPartyIdRolesRoleIdRoute,
  getIndividualsPartyIdRolesRoute,
  getIndividualsPartyIdRoute,
  getIndividualsRoute,
  postIndividualsPartyIdAddressesRoute,
  postIndividualsPartyIdBusinessNamesRoute,
  postIndividualsPartyIdElectronicAddressesRoute,
  postIndividualsPartyIdLicensesRoute,
  postIndividualsPartyIdRolesRoute,
  postIndividualsRoute,
  putIndividualsPartyIdAddressesAddressIdRoute,
  putIndividualsPartyIdBusinessNamesProductIdRoute,
  putIndividualsPartyIdElectronicAddressesAddressIdRoute,
  putIndividualsPartyIdLicensesProductIdRoute,
  putIndividualsPartyIdRolesRoleIdRoute,
  putIndividualsPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsHandler = app
  .openapi(getIndividualsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdElectronicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdElectronicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
