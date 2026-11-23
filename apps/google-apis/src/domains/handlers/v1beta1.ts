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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1LocationRegistrationsRetrieveImportableDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1LocationRegistrationsRetrieveRegisterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1LocationRegistrationsRetrieveTransferParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1LocationRegistrationsSearchDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRegistrationsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRegistrationsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRegistrationsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1RegistrationConfigureContactSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1RegistrationConfigureDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1RegistrationConfigureManagementSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1RegistrationResetAuthorizationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1RegistrationRetrieveAuthorizationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
