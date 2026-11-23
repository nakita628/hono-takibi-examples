import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClassificationsAddressTypesRoute,
  getClassificationsBusinessNameLifecycleStatesRoute,
  getClassificationsElectronicAddressTypesRoute,
  getClassificationsGendersRoute,
  getClassificationsLegalEntityTypesRoute,
  getClassificationsLicenseLifecycleStatesRoute,
  getClassificationsLicenseTypesRoute,
  getClassificationsNameDirectionsRoute,
  getClassificationsNamePrefixesRoute,
  getClassificationsNameTypesRoute,
  getClassificationsRegisteredIdentifierTypesRoute,
  getClassificationsRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationsHandler = app
  .openapi(getClassificationsAddressTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsBusinessNameLifecycleStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsElectronicAddressTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsGendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsLegalEntityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsLicenseLifecycleStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsLicenseTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsNameDirectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsNamePrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsNameTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsRegisteredIdentifierTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
