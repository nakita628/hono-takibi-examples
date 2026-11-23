import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1LocationRegistrationsRetrieveImportableDomainsRoute,
  getV1beta1LocationRegistrationsRetrieveRegisterParametersRoute,
  getV1beta1LocationRegistrationsRetrieveTransferParametersRoute,
  getV1beta1LocationRegistrationsSearchDomainsRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentRegistrationsRoute,
  getV1beta1RegistrationRetrieveAuthorizationCodeRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameExportRoute,
  postV1beta1ParentRegistrationsImportRoute,
  postV1beta1ParentRegistrationsRegisterRoute,
  postV1beta1ParentRegistrationsTransferRoute,
  postV1beta1RegistrationConfigureContactSettingsRoute,
  postV1beta1RegistrationConfigureDnsSettingsRoute,
  postV1beta1RegistrationConfigureManagementSettingsRoute,
  postV1beta1RegistrationResetAuthorizationCodeRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1LocationRegistrationsRetrieveImportableDomainsRouteHandler,
  getV1beta1LocationRegistrationsRetrieveRegisterParametersRouteHandler,
  getV1beta1LocationRegistrationsRetrieveTransferParametersRouteHandler,
  getV1beta1LocationRegistrationsSearchDomainsRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentRegistrationsRouteHandler,
  getV1beta1RegistrationRetrieveAuthorizationCodeRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameExportRouteHandler,
  postV1beta1ParentRegistrationsImportRouteHandler,
  postV1beta1ParentRegistrationsRegisterRouteHandler,
  postV1beta1ParentRegistrationsTransferRouteHandler,
  postV1beta1RegistrationConfigureContactSettingsRouteHandler,
  postV1beta1RegistrationConfigureDnsSettingsRouteHandler,
  postV1beta1RegistrationConfigureManagementSettingsRouteHandler,
  postV1beta1RegistrationResetAuthorizationCodeRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1beta1LocationRegistrationsRetrieveImportableDomainsRoute,
    getV1beta1LocationRegistrationsRetrieveImportableDomainsRouteHandler,
  )
  .openapi(
    getV1beta1LocationRegistrationsRetrieveRegisterParametersRoute,
    getV1beta1LocationRegistrationsRetrieveRegisterParametersRouteHandler,
  )
  .openapi(
    getV1beta1LocationRegistrationsRetrieveTransferParametersRoute,
    getV1beta1LocationRegistrationsRetrieveTransferParametersRouteHandler,
  )
  .openapi(
    getV1beta1LocationRegistrationsSearchDomainsRoute,
    getV1beta1LocationRegistrationsSearchDomainsRouteHandler,
  )
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameExportRoute, postV1beta1NameExportRouteHandler)
  .openapi(getV1beta1ParentRegistrationsRoute, getV1beta1ParentRegistrationsRouteHandler)
  .openapi(
    postV1beta1ParentRegistrationsImportRoute,
    postV1beta1ParentRegistrationsImportRouteHandler,
  )
  .openapi(
    postV1beta1ParentRegistrationsRegisterRoute,
    postV1beta1ParentRegistrationsRegisterRouteHandler,
  )
  .openapi(
    postV1beta1ParentRegistrationsTransferRoute,
    postV1beta1ParentRegistrationsTransferRouteHandler,
  )
  .openapi(
    postV1beta1RegistrationConfigureContactSettingsRoute,
    postV1beta1RegistrationConfigureContactSettingsRouteHandler,
  )
  .openapi(
    postV1beta1RegistrationConfigureDnsSettingsRoute,
    postV1beta1RegistrationConfigureDnsSettingsRouteHandler,
  )
  .openapi(
    postV1beta1RegistrationConfigureManagementSettingsRoute,
    postV1beta1RegistrationConfigureManagementSettingsRouteHandler,
  )
  .openapi(
    postV1beta1RegistrationResetAuthorizationCodeRoute,
    postV1beta1RegistrationResetAuthorizationCodeRouteHandler,
  )
  .openapi(
    getV1beta1RegistrationRetrieveAuthorizationCodeRoute,
    getV1beta1RegistrationRetrieveAuthorizationCodeRouteHandler,
  )
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
