import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressTypesHandler,
  businessNameLifecycleStatesHandler,
  businessNamesHandler,
  electronicAddressTypesHandler,
  gendersHandler,
  individualsAddressesHandler,
  individualsBusinessNamesHandler,
  individualsElectronicAddressesHandler,
  individualsHandler,
  individualsLicensesHandler,
  individualsRolesHandler,
  legalEntityTypesHandler,
  licenseLifecycleStatesHandler,
  licensesHandler,
  licenseTypesHandler,
  nameDirectionsHandler,
  namePrefixesHandler,
  nameTypesHandler,
  organisationsAddressesHandler,
  organisationsBusinessNamesHandler,
  organisationsElectronicAddressesHandler,
  organisationsHandler,
  organisationsLicensesHandler,
  organisationsRolesHandler,
  registeredIdentifierTypesHandler,
  rolesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessNamesHandler)
  .route('/', addressTypesHandler)
  .route('/', businessNameLifecycleStatesHandler)
  .route('/', electronicAddressTypesHandler)
  .route('/', gendersHandler)
  .route('/', legalEntityTypesHandler)
  .route('/', licenseLifecycleStatesHandler)
  .route('/', licenseTypesHandler)
  .route('/', nameDirectionsHandler)
  .route('/', namePrefixesHandler)
  .route('/', nameTypesHandler)
  .route('/', registeredIdentifierTypesHandler)
  .route('/', rolesHandler)
  .route('/', individualsHandler)
  .route('/', individualsAddressesHandler)
  .route('/', individualsBusinessNamesHandler)
  .route('/', individualsElectronicAddressesHandler)
  .route('/', individualsLicensesHandler)
  .route('/', individualsRolesHandler)
  .route('/', licensesHandler)
  .route('/', organisationsHandler)
  .route('/', organisationsAddressesHandler)
  .route('/', organisationsBusinessNamesHandler)
  .route('/', organisationsElectronicAddressesHandler)
  .route('/', organisationsLicensesHandler)
  .route('/', organisationsRolesHandler)

export default app
