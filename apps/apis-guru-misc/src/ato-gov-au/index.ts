import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdAddressesAddressIdRoute,
  deleteIndividualsPartyIdBusinessNamesProductIdRoute,
  deleteIndividualsPartyIdElectronicAddressesAddressIdRoute,
  deleteIndividualsPartyIdLicensesProductIdRoute,
  deleteIndividualsPartyIdRolesRoleIdRoute,
  deleteIndividualsPartyIdRoute,
  deleteOrganisationsPartyIdAddressesAddressIdRoute,
  deleteOrganisationsPartyIdBusinessNamesProductIdRoute,
  deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  deleteOrganisationsPartyIdLicensesProductIdRoute,
  deleteOrganisationsPartyIdRolesRoleIdRoute,
  deleteOrganisationsPartyIdRoute,
  getBusinessNamesRoute,
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
  getLicensesRoute,
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
  postIndividualsPartyIdAddressesRoute,
  postIndividualsPartyIdBusinessNamesRoute,
  postIndividualsPartyIdElectronicAddressesRoute,
  postIndividualsPartyIdLicensesRoute,
  postIndividualsPartyIdRolesRoute,
  postIndividualsRoute,
  postOrganisationsPartyIdAddressesRoute,
  postOrganisationsPartyIdBusinessNamesRoute,
  postOrganisationsPartyIdElectronicAddressesRoute,
  postOrganisationsPartyIdLicensesRoute,
  postOrganisationsPartyIdRolesRoute,
  postOrganisationsRoute,
  putIndividualsPartyIdAddressesAddressIdRoute,
  putIndividualsPartyIdBusinessNamesProductIdRoute,
  putIndividualsPartyIdElectronicAddressesAddressIdRoute,
  putIndividualsPartyIdLicensesProductIdRoute,
  putIndividualsPartyIdRolesRoleIdRoute,
  putIndividualsPartyIdRoute,
  putOrganisationsPartyIdAddressesAddressIdRoute,
  putOrganisationsPartyIdBusinessNamesProductIdRoute,
  putOrganisationsPartyIdElectronicAddressesAddressIdRoute,
  putOrganisationsPartyIdLicensesProductIdRoute,
  putOrganisationsPartyIdRolesRoleIdRoute,
  putOrganisationsPartyIdRoute,
} from './routes'
import {
  deleteIndividualsPartyIdAddressesAddressIdRouteHandler,
  deleteIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  deleteIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  deleteIndividualsPartyIdLicensesProductIdRouteHandler,
  deleteIndividualsPartyIdRolesRoleIdRouteHandler,
  deleteIndividualsPartyIdRouteHandler,
  deleteOrganisationsPartyIdAddressesAddressIdRouteHandler,
  deleteOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  deleteOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  deleteOrganisationsPartyIdLicensesProductIdRouteHandler,
  deleteOrganisationsPartyIdRolesRoleIdRouteHandler,
  deleteOrganisationsPartyIdRouteHandler,
  getBusinessNamesRouteHandler,
  getClassificationsAddressTypesRouteHandler,
  getClassificationsBusinessNameLifecycleStatesRouteHandler,
  getClassificationsElectronicAddressTypesRouteHandler,
  getClassificationsGendersRouteHandler,
  getClassificationsLegalEntityTypesRouteHandler,
  getClassificationsLicenseLifecycleStatesRouteHandler,
  getClassificationsLicenseTypesRouteHandler,
  getClassificationsNameDirectionsRouteHandler,
  getClassificationsNamePrefixesRouteHandler,
  getClassificationsNameTypesRouteHandler,
  getClassificationsRegisteredIdentifierTypesRouteHandler,
  getClassificationsRolesRouteHandler,
  getIndividualsPartyIdAddressesAddressIdRouteHandler,
  getIndividualsPartyIdAddressesRouteHandler,
  getIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  getIndividualsPartyIdBusinessNamesRouteHandler,
  getIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  getIndividualsPartyIdElectronicAddressesRouteHandler,
  getIndividualsPartyIdLicensesProductIdRouteHandler,
  getIndividualsPartyIdLicensesRouteHandler,
  getIndividualsPartyIdRolesRoleIdRouteHandler,
  getIndividualsPartyIdRolesRouteHandler,
  getIndividualsPartyIdRouteHandler,
  getIndividualsRouteHandler,
  getLicensesRouteHandler,
  getOrganisationsPartyIdAddressesAddressIdRouteHandler,
  getOrganisationsPartyIdAddressesRouteHandler,
  getOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  getOrganisationsPartyIdBusinessNamesRouteHandler,
  getOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  getOrganisationsPartyIdElectronicAddressesRouteHandler,
  getOrganisationsPartyIdLicensesProductIdRouteHandler,
  getOrganisationsPartyIdLicensesRouteHandler,
  getOrganisationsPartyIdRolesRoleIdRouteHandler,
  getOrganisationsPartyIdRolesRouteHandler,
  getOrganisationsPartyIdRouteHandler,
  getOrganisationsRouteHandler,
  postIndividualsPartyIdAddressesRouteHandler,
  postIndividualsPartyIdBusinessNamesRouteHandler,
  postIndividualsPartyIdElectronicAddressesRouteHandler,
  postIndividualsPartyIdLicensesRouteHandler,
  postIndividualsPartyIdRolesRouteHandler,
  postIndividualsRouteHandler,
  postOrganisationsPartyIdAddressesRouteHandler,
  postOrganisationsPartyIdBusinessNamesRouteHandler,
  postOrganisationsPartyIdElectronicAddressesRouteHandler,
  postOrganisationsPartyIdLicensesRouteHandler,
  postOrganisationsPartyIdRolesRouteHandler,
  postOrganisationsRouteHandler,
  putIndividualsPartyIdAddressesAddressIdRouteHandler,
  putIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  putIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  putIndividualsPartyIdLicensesProductIdRouteHandler,
  putIndividualsPartyIdRolesRoleIdRouteHandler,
  putIndividualsPartyIdRouteHandler,
  putOrganisationsPartyIdAddressesAddressIdRouteHandler,
  putOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  putOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  putOrganisationsPartyIdLicensesProductIdRouteHandler,
  putOrganisationsPartyIdRolesRoleIdRouteHandler,
  putOrganisationsPartyIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBusinessNamesRoute, getBusinessNamesRouteHandler)
  .openapi(getClassificationsAddressTypesRoute, getClassificationsAddressTypesRouteHandler)
  .openapi(
    getClassificationsBusinessNameLifecycleStatesRoute,
    getClassificationsBusinessNameLifecycleStatesRouteHandler,
  )
  .openapi(
    getClassificationsElectronicAddressTypesRoute,
    getClassificationsElectronicAddressTypesRouteHandler,
  )
  .openapi(getClassificationsGendersRoute, getClassificationsGendersRouteHandler)
  .openapi(getClassificationsLegalEntityTypesRoute, getClassificationsLegalEntityTypesRouteHandler)
  .openapi(
    getClassificationsLicenseLifecycleStatesRoute,
    getClassificationsLicenseLifecycleStatesRouteHandler,
  )
  .openapi(getClassificationsLicenseTypesRoute, getClassificationsLicenseTypesRouteHandler)
  .openapi(getClassificationsNameDirectionsRoute, getClassificationsNameDirectionsRouteHandler)
  .openapi(getClassificationsNamePrefixesRoute, getClassificationsNamePrefixesRouteHandler)
  .openapi(getClassificationsNameTypesRoute, getClassificationsNameTypesRouteHandler)
  .openapi(
    getClassificationsRegisteredIdentifierTypesRoute,
    getClassificationsRegisteredIdentifierTypesRouteHandler,
  )
  .openapi(getClassificationsRolesRoute, getClassificationsRolesRouteHandler)
  .openapi(getIndividualsRoute, getIndividualsRouteHandler)
  .openapi(postIndividualsRoute, postIndividualsRouteHandler)
  .openapi(deleteIndividualsPartyIdRoute, deleteIndividualsPartyIdRouteHandler)
  .openapi(getIndividualsPartyIdRoute, getIndividualsPartyIdRouteHandler)
  .openapi(putIndividualsPartyIdRoute, putIndividualsPartyIdRouteHandler)
  .openapi(getIndividualsPartyIdAddressesRoute, getIndividualsPartyIdAddressesRouteHandler)
  .openapi(postIndividualsPartyIdAddressesRoute, postIndividualsPartyIdAddressesRouteHandler)
  .openapi(
    deleteIndividualsPartyIdAddressesAddressIdRoute,
    deleteIndividualsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    getIndividualsPartyIdAddressesAddressIdRoute,
    getIndividualsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    putIndividualsPartyIdAddressesAddressIdRoute,
    putIndividualsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(getIndividualsPartyIdBusinessNamesRoute, getIndividualsPartyIdBusinessNamesRouteHandler)
  .openapi(
    postIndividualsPartyIdBusinessNamesRoute,
    postIndividualsPartyIdBusinessNamesRouteHandler,
  )
  .openapi(
    deleteIndividualsPartyIdBusinessNamesProductIdRoute,
    deleteIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    getIndividualsPartyIdBusinessNamesProductIdRoute,
    getIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    putIndividualsPartyIdBusinessNamesProductIdRoute,
    putIndividualsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    getIndividualsPartyIdElectronicAddressesRoute,
    getIndividualsPartyIdElectronicAddressesRouteHandler,
  )
  .openapi(
    postIndividualsPartyIdElectronicAddressesRoute,
    postIndividualsPartyIdElectronicAddressesRouteHandler,
  )
  .openapi(
    deleteIndividualsPartyIdElectronicAddressesAddressIdRoute,
    deleteIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(
    getIndividualsPartyIdElectronicAddressesAddressIdRoute,
    getIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(
    putIndividualsPartyIdElectronicAddressesAddressIdRoute,
    putIndividualsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(getIndividualsPartyIdLicensesRoute, getIndividualsPartyIdLicensesRouteHandler)
  .openapi(postIndividualsPartyIdLicensesRoute, postIndividualsPartyIdLicensesRouteHandler)
  .openapi(
    deleteIndividualsPartyIdLicensesProductIdRoute,
    deleteIndividualsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(
    getIndividualsPartyIdLicensesProductIdRoute,
    getIndividualsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(
    putIndividualsPartyIdLicensesProductIdRoute,
    putIndividualsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(getIndividualsPartyIdRolesRoute, getIndividualsPartyIdRolesRouteHandler)
  .openapi(postIndividualsPartyIdRolesRoute, postIndividualsPartyIdRolesRouteHandler)
  .openapi(
    deleteIndividualsPartyIdRolesRoleIdRoute,
    deleteIndividualsPartyIdRolesRoleIdRouteHandler,
  )
  .openapi(getIndividualsPartyIdRolesRoleIdRoute, getIndividualsPartyIdRolesRoleIdRouteHandler)
  .openapi(putIndividualsPartyIdRolesRoleIdRoute, putIndividualsPartyIdRolesRoleIdRouteHandler)
  .openapi(getLicensesRoute, getLicensesRouteHandler)
  .openapi(getOrganisationsRoute, getOrganisationsRouteHandler)
  .openapi(postOrganisationsRoute, postOrganisationsRouteHandler)
  .openapi(deleteOrganisationsPartyIdRoute, deleteOrganisationsPartyIdRouteHandler)
  .openapi(getOrganisationsPartyIdRoute, getOrganisationsPartyIdRouteHandler)
  .openapi(putOrganisationsPartyIdRoute, putOrganisationsPartyIdRouteHandler)
  .openapi(getOrganisationsPartyIdAddressesRoute, getOrganisationsPartyIdAddressesRouteHandler)
  .openapi(postOrganisationsPartyIdAddressesRoute, postOrganisationsPartyIdAddressesRouteHandler)
  .openapi(
    deleteOrganisationsPartyIdAddressesAddressIdRoute,
    deleteOrganisationsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdAddressesAddressIdRoute,
    getOrganisationsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    putOrganisationsPartyIdAddressesAddressIdRoute,
    putOrganisationsPartyIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdBusinessNamesRoute,
    getOrganisationsPartyIdBusinessNamesRouteHandler,
  )
  .openapi(
    postOrganisationsPartyIdBusinessNamesRoute,
    postOrganisationsPartyIdBusinessNamesRouteHandler,
  )
  .openapi(
    deleteOrganisationsPartyIdBusinessNamesProductIdRoute,
    deleteOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdBusinessNamesProductIdRoute,
    getOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    putOrganisationsPartyIdBusinessNamesProductIdRoute,
    putOrganisationsPartyIdBusinessNamesProductIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdElectronicAddressesRoute,
    getOrganisationsPartyIdElectronicAddressesRouteHandler,
  )
  .openapi(
    postOrganisationsPartyIdElectronicAddressesRoute,
    postOrganisationsPartyIdElectronicAddressesRouteHandler,
  )
  .openapi(
    deleteOrganisationsPartyIdElectronicAddressesAddressIdRoute,
    deleteOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdElectronicAddressesAddressIdRoute,
    getOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(
    putOrganisationsPartyIdElectronicAddressesAddressIdRoute,
    putOrganisationsPartyIdElectronicAddressesAddressIdRouteHandler,
  )
  .openapi(getOrganisationsPartyIdLicensesRoute, getOrganisationsPartyIdLicensesRouteHandler)
  .openapi(postOrganisationsPartyIdLicensesRoute, postOrganisationsPartyIdLicensesRouteHandler)
  .openapi(
    deleteOrganisationsPartyIdLicensesProductIdRoute,
    deleteOrganisationsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(
    getOrganisationsPartyIdLicensesProductIdRoute,
    getOrganisationsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(
    putOrganisationsPartyIdLicensesProductIdRoute,
    putOrganisationsPartyIdLicensesProductIdRouteHandler,
  )
  .openapi(getOrganisationsPartyIdRolesRoute, getOrganisationsPartyIdRolesRouteHandler)
  .openapi(postOrganisationsPartyIdRolesRoute, postOrganisationsPartyIdRolesRouteHandler)
  .openapi(
    deleteOrganisationsPartyIdRolesRoleIdRoute,
    deleteOrganisationsPartyIdRolesRoleIdRouteHandler,
  )
  .openapi(getOrganisationsPartyIdRolesRoleIdRoute, getOrganisationsPartyIdRolesRoleIdRouteHandler)
  .openapi(putOrganisationsPartyIdRolesRoleIdRoute, putOrganisationsPartyIdRolesRoleIdRouteHandler)

export default app
