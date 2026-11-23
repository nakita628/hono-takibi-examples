import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWellKnownJwksJson(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['jwks.json'].$get(undefined, options))
}

export async function getWellKnownOpenidConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['openid-configuration'].$get(undefined, options))
}

export async function postApiApiKey(
  args: InferRequestType<(typeof client.api)['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'].$post(args, options))
}

export async function getApiApiKeyKeyId(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'][':keyId'].$get(args, options))
}

export async function putApiApiKeyKeyId(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'][':keyId'].$put(args, options))
}

export async function postApiApiKeyKeyId(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'][':keyId'].$post(args, options))
}

export async function deleteApiApiKeyKeyId(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'][':keyId'].$delete(args, options))
}

export async function patchApiApiKeyKeyId(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['api-key'][':keyId'].$patch(args, options))
}

export async function getApiApplication(
  args: InferRequestType<typeof client.api.application.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application.$get(args, options))
}

export async function postApiApplication(
  args: InferRequestType<typeof client.api.application.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application.$post(args, options))
}

export async function postApiApplicationSearch(
  args: InferRequestType<typeof client.api.application.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application.search.$post(args, options))
}

export async function getApiApplicationApplicationId(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].$get(args, options))
}

export async function putApiApplicationApplicationId(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].$put(args, options))
}

export async function postApiApplicationApplicationId(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].$post(args, options))
}

export async function deleteApiApplicationApplicationId(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].$delete(args, options))
}

export async function patchApiApplicationApplicationId(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].$patch(args, options))
}

export async function getApiApplicationApplicationIdOauthConfiguration(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId']['oauth-configuration'].$get(args, options),
  )
}

export async function postApiApplicationApplicationIdRole(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].role.$post(args, options))
}

export async function putApiApplicationApplicationIdRoleRoleId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['role'][':roleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].role[':roleId'].$put(args, options),
  )
}

export async function postApiApplicationApplicationIdRoleRoleId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].role[':roleId'].$post(args, options),
  )
}

export async function deleteApiApplicationApplicationIdRoleRoleId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].role[':roleId'].$delete(args, options),
  )
}

export async function patchApiApplicationApplicationIdRoleRoleId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].role[':roleId'].$patch(args, options),
  )
}

export async function postApiApplicationApplicationIdScope(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.application[':applicationId'].scope.$post(args, options))
}

export async function getApiApplicationApplicationIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].scope[':scopeId'].$get(args, options),
  )
}

export async function putApiApplicationApplicationIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].scope[':scopeId'].$put(args, options),
  )
}

export async function postApiApplicationApplicationIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].scope[':scopeId'].$post(args, options),
  )
}

export async function deleteApiApplicationApplicationIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].scope[':scopeId'].$delete(args, options),
  )
}

export async function patchApiApplicationApplicationIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.application[':applicationId'].scope[':scopeId'].$patch(args, options),
  )
}

export async function getApiCimdDomain(options?: ClientRequestOptions) {
  return await parseResponse(client.api.cimd.domain.$get(undefined, options))
}

export async function postApiCimdDomain(
  args: InferRequestType<typeof client.api.cimd.domain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain.$post(args, options))
}

export async function postApiCimdDomainSearch(
  args: InferRequestType<typeof client.api.cimd.domain.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain.search.$post(args, options))
}

export async function getApiCimdDomainDomainId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].$get(args, options))
}

export async function putApiCimdDomainDomainId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].$put(args, options))
}

export async function postApiCimdDomainDomainId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].$post(args, options))
}

export async function deleteApiCimdDomainDomainId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].$delete(args, options))
}

export async function patchApiCimdDomainDomainId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].$patch(args, options))
}

export async function postApiCimdDomainDomainIdScope(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.domain[':domainId'].scope.$post(args, options))
}

export async function getApiCimdDomainDomainIdScopeScopeId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.cimd.domain[':domainId'].scope[':scopeId'].$get(args, options),
  )
}

export async function putApiCimdDomainDomainIdScopeScopeId(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.cimd.domain[':domainId'].scope[':scopeId'].$put(args, options),
  )
}

export async function postApiCimdDomainDomainIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.cimd.domain[':domainId'].scope[':scopeId'].$post(args, options),
  )
}

export async function deleteApiCimdDomainDomainIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.cimd.domain[':domainId'].scope[':scopeId'].$delete(args, options),
  )
}

export async function patchApiCimdDomainDomainIdScopeScopeId(
  args: InferRequestType<
    (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.cimd.domain[':domainId'].scope[':scopeId'].$patch(args, options),
  )
}

export async function postApiCimdRegistrationSearch(
  args: InferRequestType<typeof client.api.cimd.registration.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.registration.search.$post(args, options))
}

export async function getApiCimdRegistrationRegistrationId(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.registration[':registrationId'].$get(args, options))
}

export async function deleteApiCimdRegistrationRegistrationId(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cimd.registration[':registrationId'].$delete(args, options))
}

export async function getApiConnector(options?: ClientRequestOptions) {
  return await parseResponse(client.api.connector.$get(undefined, options))
}

export async function postApiConnector(
  args: InferRequestType<typeof client.api.connector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector.$post(args, options))
}

export async function getApiConnectorConnectorId(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector[':connectorId'].$get(args, options))
}

export async function putApiConnectorConnectorId(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector[':connectorId'].$put(args, options))
}

export async function postApiConnectorConnectorId(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector[':connectorId'].$post(args, options))
}

export async function deleteApiConnectorConnectorId(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector[':connectorId'].$delete(args, options))
}

export async function patchApiConnectorConnectorId(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connector[':connectorId'].$patch(args, options))
}

export async function getApiConsent(
  args: InferRequestType<typeof client.api.consent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent.$get(args, options))
}

export async function postApiConsent(
  args: InferRequestType<typeof client.api.consent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent.$post(args, options))
}

export async function getApiConsentSearch(
  args: InferRequestType<typeof client.api.consent.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent.search.$get(args, options))
}

export async function postApiConsentSearch(
  args: InferRequestType<typeof client.api.consent.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent.search.$post(args, options))
}

export async function getApiConsentConsentId(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent[':consentId'].$get(args, options))
}

export async function putApiConsentConsentId(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent[':consentId'].$put(args, options))
}

export async function postApiConsentConsentId(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent[':consentId'].$post(args, options))
}

export async function deleteApiConsentConsentId(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent[':consentId'].$delete(args, options))
}

export async function patchApiConsentConsentId(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent[':consentId'].$patch(args, options))
}

export async function postApiEmailSendEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.send[':emailTemplateId'].$post(args, options))
}

export async function getApiEmailTemplate(
  args: InferRequestType<typeof client.api.email.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template.$get(args, options))
}

export async function postApiEmailTemplate(
  args: InferRequestType<typeof client.api.email.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template.$post(args, options))
}

export async function postApiEmailTemplatePreview(
  args: InferRequestType<typeof client.api.email.template.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template.preview.$post(args, options))
}

export async function postApiEmailTemplateSearch(
  args: InferRequestType<typeof client.api.email.template.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template.search.$post(args, options))
}

export async function getApiEmailTemplateEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template[':emailTemplateId'].$get(args, options))
}

export async function putApiEmailTemplateEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template[':emailTemplateId'].$put(args, options))
}

export async function postApiEmailTemplateEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template[':emailTemplateId'].$post(args, options))
}

export async function deleteApiEmailTemplateEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template[':emailTemplateId'].$delete(args, options))
}

export async function patchApiEmailTemplateEmailTemplateId(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.email.template[':emailTemplateId'].$patch(args, options))
}

export async function postApiEntity(
  args: InferRequestType<typeof client.api.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.$post(args, options))
}

export async function getApiEntityGrantSearch(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.grant.search.$get(args, options))
}

export async function postApiEntityGrantSearch(
  args: InferRequestType<typeof client.api.entity.grant.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.grant.search.$post(args, options))
}

export async function getApiEntitySearch(
  args: InferRequestType<typeof client.api.entity.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.search.$get(args, options))
}

export async function putApiEntitySearch(options?: ClientRequestOptions) {
  return await parseResponse(client.api.entity.search.$put(undefined, options))
}

export async function postApiEntitySearch(
  args: InferRequestType<typeof client.api.entity.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.search.$post(args, options))
}

export async function getApiEntityType(options?: ClientRequestOptions) {
  return await parseResponse(client.api.entity.type.$get(undefined, options))
}

export async function postApiEntityType(
  args: InferRequestType<typeof client.api.entity.type.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type.$post(args, options))
}

export async function getApiEntityTypeSearch(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type.search.$get(args, options))
}

export async function postApiEntityTypeSearch(
  args: InferRequestType<typeof client.api.entity.type.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type.search.$post(args, options))
}

export async function getApiEntityTypeEntityTypeId(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type[':entityTypeId'].$get(args, options))
}

export async function putApiEntityTypeEntityTypeId(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type[':entityTypeId'].$put(args, options))
}

export async function postApiEntityTypeEntityTypeId(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type[':entityTypeId'].$post(args, options))
}

export async function deleteApiEntityTypeEntityTypeId(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type[':entityTypeId'].$delete(args, options))
}

export async function patchApiEntityTypeEntityTypeId(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity.type[':entityTypeId'].$patch(args, options))
}

export async function postApiEntityTypeEntityTypeIdPermission(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.entity.type[':entityTypeId'].permission.$post(args, options),
  )
}

export async function putApiEntityTypeEntityTypeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.entity.type[':entityTypeId'].permission[':permissionId'].$put(args, options),
  )
}

export async function postApiEntityTypeEntityTypeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.entity.type[':entityTypeId'].permission[':permissionId'].$post(args, options),
  )
}

export async function deleteApiEntityTypeEntityTypeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.entity.type[':entityTypeId'].permission[':permissionId'].$delete(args, options),
  )
}

export async function patchApiEntityTypeEntityTypeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.entity.type[':entityTypeId'].permission[':permissionId'].$patch(args, options),
  )
}

export async function getApiEntityEntityId(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].$get(args, options))
}

export async function putApiEntityEntityId(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].$put(args, options))
}

export async function postApiEntityEntityId(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].$post(args, options))
}

export async function deleteApiEntityEntityId(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].$delete(args, options))
}

export async function patchApiEntityEntityId(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].$patch(args, options))
}

export async function getApiEntityEntityIdGrant(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].grant.$get(args, options))
}

export async function postApiEntityEntityIdGrant(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].grant.$post(args, options))
}

export async function deleteApiEntityEntityIdGrant(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entity[':entityId'].grant.$delete(args, options))
}

export async function getApiForm(options?: ClientRequestOptions) {
  return await parseResponse(client.api.form.$get(undefined, options))
}

export async function postApiForm(
  args: InferRequestType<typeof client.api.form.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.$post(args, options))
}

export async function getApiFormField(options?: ClientRequestOptions) {
  return await parseResponse(client.api.form.field.$get(undefined, options))
}

export async function postApiFormField(
  args: InferRequestType<typeof client.api.form.field.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field.$post(args, options))
}

export async function getApiFormFieldFieldId(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field[':fieldId'].$get(args, options))
}

export async function putApiFormFieldFieldId(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field[':fieldId'].$put(args, options))
}

export async function postApiFormFieldFieldId(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field[':fieldId'].$post(args, options))
}

export async function deleteApiFormFieldFieldId(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field[':fieldId'].$delete(args, options))
}

export async function patchApiFormFieldFieldId(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form.field[':fieldId'].$patch(args, options))
}

export async function getApiFormFormId(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form[':formId'].$get(args, options))
}

export async function putApiFormFormId(
  args: InferRequestType<(typeof client.api.form)[':formId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form[':formId'].$put(args, options))
}

export async function postApiFormFormId(
  args: InferRequestType<(typeof client.api.form)[':formId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form[':formId'].$post(args, options))
}

export async function deleteApiFormFormId(
  args: InferRequestType<(typeof client.api.form)[':formId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form[':formId'].$delete(args, options))
}

export async function patchApiFormFormId(
  args: InferRequestType<(typeof client.api.form)[':formId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.form[':formId'].$patch(args, options))
}

export async function getApiGroup(
  args: InferRequestType<typeof client.api.group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.$get(args, options))
}

export async function postApiGroup(
  args: InferRequestType<typeof client.api.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.$post(args, options))
}

export async function putApiGroupMember(
  args: InferRequestType<typeof client.api.group.member.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.member.$put(args, options))
}

export async function postApiGroupMember(
  args: InferRequestType<typeof client.api.group.member.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.member.$post(args, options))
}

export async function deleteApiGroupMember(
  args: InferRequestType<typeof client.api.group.member.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.member.$delete(args, options))
}

export async function postApiGroupMemberSearch(
  args: InferRequestType<typeof client.api.group.member.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.member.search.$post(args, options))
}

export async function postApiGroupSearch(
  args: InferRequestType<typeof client.api.group.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group.search.$post(args, options))
}

export async function getApiGroupGroupId(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group[':groupId'].$get(args, options))
}

export async function putApiGroupGroupId(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group[':groupId'].$put(args, options))
}

export async function postApiGroupGroupId(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group[':groupId'].$post(args, options))
}

export async function deleteApiGroupGroupId(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group[':groupId'].$delete(args, options))
}

export async function patchApiGroupGroupId(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.group[':groupId'].$patch(args, options))
}

export async function getApiHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.health.$get(undefined, options))
}

export async function getApiIdentityProvider(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].$get(args, options))
}

export async function postApiIdentityProvider(
  args: InferRequestType<(typeof client.api)['identity-provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].$post(args, options))
}

export async function getApiIdentityProviderLink(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].link.$get(args, options))
}

export async function postApiIdentityProviderLink(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].link.$post(args, options))
}

export async function deleteApiIdentityProviderLink(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].link.$delete(args, options))
}

export async function getApiIdentityProviderLinkPendingPendingLinkId(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'].link.pending[':pendingLinkId'].$get(args, options),
  )
}

export async function postApiIdentityProviderLogin(
  args: InferRequestType<(typeof client.api)['identity-provider']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].login.$post(args, options))
}

export async function getApiIdentityProviderLookup(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].lookup.$get(args, options))
}

export async function getApiIdentityProviderSearch(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].search.$get(args, options))
}

export async function postApiIdentityProviderSearch(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].search.$post(args, options))
}

export async function postApiIdentityProviderStart(
  args: InferRequestType<(typeof client.api)['identity-provider']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].start.$post(args, options))
}

export async function getApiIdentityProviderTest(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].test.$get(args, options))
}

export async function postApiIdentityProviderTest(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['identity-provider'].test.$post(args, options))
}

export async function getApiIdentityProviderIdentityProviderId(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'][':identityProviderId'].$get(args, options),
  )
}

export async function putApiIdentityProviderIdentityProviderId(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'][':identityProviderId'].$put(args, options),
  )
}

export async function postApiIdentityProviderIdentityProviderId(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'][':identityProviderId'].$post(args, options),
  )
}

export async function deleteApiIdentityProviderIdentityProviderId(
  args: InferRequestType<
    (typeof client.api)['identity-provider'][':identityProviderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'][':identityProviderId'].$delete(args, options),
  )
}

export async function patchApiIdentityProviderIdentityProviderId(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['identity-provider'][':identityProviderId'].$patch(args, options),
  )
}

export async function postApiIdentityVerify(
  args: InferRequestType<typeof client.api.identity.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identity.verify.$post(args, options))
}

export async function postApiIdentityVerifyComplete(
  args: InferRequestType<typeof client.api.identity.verify.complete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identity.verify.complete.$post(args, options))
}

export async function postApiIdentityVerifySend(
  args: InferRequestType<typeof client.api.identity.verify.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identity.verify.send.$post(args, options))
}

export async function postApiIdentityVerifyStart(
  args: InferRequestType<typeof client.api.identity.verify.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identity.verify.start.$post(args, options))
}

export async function getApiIntegration(options?: ClientRequestOptions) {
  return await parseResponse(client.api.integration.$get(undefined, options))
}

export async function putApiIntegration(
  args: InferRequestType<typeof client.api.integration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.integration.$put(args, options))
}

export async function patchApiIntegration(
  args: InferRequestType<typeof client.api.integration.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.integration.$patch(args, options))
}

export async function postApiIpAcl(
  args: InferRequestType<(typeof client.api)['ip-acl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'].$post(args, options))
}

export async function getApiIpAclSearch(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'].search.$get(args, options))
}

export async function postApiIpAclSearch(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'].search.$post(args, options))
}

export async function putApiIpAclAccessControlListId(
  args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'][':accessControlListId'].$put(args, options))
}

export async function postApiIpAclAccessControlListId(
  args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'][':accessControlListId'].$post(args, options))
}

export async function patchApiIpAclAccessControlListId(
  args: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'][':accessControlListId'].$patch(args, options))
}

export async function getApiIpAclIpAccessControlListId(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$get(args, options))
}

export async function deleteApiIpAclIpAccessControlListId(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$delete(args, options))
}

export async function getApiJwtIssue(
  args: InferRequestType<typeof client.api.jwt.issue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.issue.$get(args, options))
}

export async function getApiJwtPublicKey(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt['public-key'].$get(args, options))
}

export async function postApiJwtReconcile(
  args: InferRequestType<typeof client.api.jwt.reconcile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.reconcile.$post(args, options))
}

export async function getApiJwtRefresh(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.refresh.$get(args, options))
}

export async function postApiJwtRefresh(
  args: InferRequestType<typeof client.api.jwt.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.refresh.$post(args, options))
}

export async function deleteApiJwtRefresh(
  args: InferRequestType<typeof client.api.jwt.refresh.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.refresh.$delete(args, options))
}

export async function getApiJwtRefreshTokenId(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.refresh[':tokenId'].$get(args, options))
}

export async function deleteApiJwtRefreshTokenId(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.refresh[':tokenId'].$delete(args, options))
}

export async function getApiJwtValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.jwt.validate.$get(undefined, options))
}

export async function postApiJwtVend(
  args: InferRequestType<typeof client.api.jwt.vend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jwt.vend.$post(args, options))
}

export async function getApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.api.key.$get(undefined, options))
}

export async function postApiKeyGenerate(
  args: InferRequestType<typeof client.api.key.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.generate.$post(args, options))
}

export async function postApiKeyGenerateKeyId(
  args: InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.generate[':keyId'].$post(args, options))
}

export async function postApiKeyImport(
  args: InferRequestType<typeof client.api.key.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.import.$post(args, options))
}

export async function postApiKeyImportKeyId(
  args: InferRequestType<(typeof client.api.key.import)[':keyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.import[':keyId'].$post(args, options))
}

export async function getApiKeySearch(
  args: InferRequestType<typeof client.api.key.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.search.$get(args, options))
}

export async function postApiKeySearch(
  args: InferRequestType<typeof client.api.key.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key.search.$post(args, options))
}

export async function getApiKeyKeyId(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key[':keyId'].$get(args, options))
}

export async function putApiKeyKeyId(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key[':keyId'].$put(args, options))
}

export async function deleteApiKeyKeyId(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.key[':keyId'].$delete(args, options))
}

export async function getApiLambda(
  args: InferRequestType<typeof client.api.lambda.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.$get(args, options))
}

export async function postApiLambda(
  args: InferRequestType<typeof client.api.lambda.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.$post(args, options))
}

export async function postApiLambdaSearch(
  args: InferRequestType<typeof client.api.lambda.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.search.$post(args, options))
}

export async function getApiLambdaLambdaId(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda[':lambdaId'].$get(args, options))
}

export async function putApiLambdaLambdaId(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda[':lambdaId'].$put(args, options))
}

export async function postApiLambdaLambdaId(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda[':lambdaId'].$post(args, options))
}

export async function deleteApiLambdaLambdaId(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda[':lambdaId'].$delete(args, options))
}

export async function patchApiLambdaLambdaId(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda[':lambdaId'].$patch(args, options))
}

export async function putApiLogin(
  args: InferRequestType<typeof client.api.login.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.login.$put(args, options))
}

export async function postApiLogin(
  args: InferRequestType<typeof client.api.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.login.$post(args, options))
}

export async function putApiLoginUserIdApplicationId(
  args: InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.login[':userId'][':applicationId'].$put(args, options))
}

export async function postApiLogout(
  args: InferRequestType<typeof client.api.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logout.$post(args, options))
}

export async function getApiMessageTemplate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.message.template.$get(undefined, options))
}

export async function postApiMessageTemplate(
  args: InferRequestType<typeof client.api.message.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.message.template.$post(args, options))
}

export async function postApiMessageTemplatePreview(
  args: InferRequestType<typeof client.api.message.template.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.message.template.preview.$post(args, options))
}

export async function getApiMessageTemplateMessageTemplateId(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.message.template[':messageTemplateId'].$get(args, options))
}

export async function putApiMessageTemplateMessageTemplateId(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.message.template[':messageTemplateId'].$put(args, options))
}

export async function postApiMessageTemplateMessageTemplateId(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.message.template[':messageTemplateId'].$post(args, options))
}

export async function deleteApiMessageTemplateMessageTemplateId(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.message.template[':messageTemplateId'].$delete(args, options),
  )
}

export async function patchApiMessageTemplateMessageTemplateId(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.message.template[':messageTemplateId'].$patch(args, options),
  )
}

export async function getApiMessenger(options?: ClientRequestOptions) {
  return await parseResponse(client.api.messenger.$get(undefined, options))
}

export async function postApiMessenger(
  args: InferRequestType<typeof client.api.messenger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger.$post(args, options))
}

export async function getApiMessengerMessengerId(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger[':messengerId'].$get(args, options))
}

export async function putApiMessengerMessengerId(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger[':messengerId'].$put(args, options))
}

export async function postApiMessengerMessengerId(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger[':messengerId'].$post(args, options))
}

export async function deleteApiMessengerMessengerId(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger[':messengerId'].$delete(args, options))
}

export async function patchApiMessengerMessengerId(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messenger[':messengerId'].$patch(args, options))
}

export async function postApiPasswordlessLogin(
  args: InferRequestType<typeof client.api.passwordless.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.passwordless.login.$post(args, options))
}

export async function postApiPasswordlessSend(
  args: InferRequestType<typeof client.api.passwordless.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.passwordless.send.$post(args, options))
}

export async function postApiPasswordlessStart(
  args: InferRequestType<typeof client.api.passwordless.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.passwordless.start.$post(args, options))
}

export async function getApiReactor(options?: ClientRequestOptions) {
  return await parseResponse(client.api.reactor.$get(undefined, options))
}

export async function putApiReactor(options?: ClientRequestOptions) {
  return await parseResponse(client.api.reactor.$put(undefined, options))
}

export async function postApiReactor(
  args: InferRequestType<typeof client.api.reactor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reactor.$post(args, options))
}

export async function deleteApiReactor(options?: ClientRequestOptions) {
  return await parseResponse(client.api.reactor.$delete(undefined, options))
}

export async function getApiReactorMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.reactor.metrics.$get(undefined, options))
}

export async function getApiReportDailyActiveUser(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.report['daily-active-user'].$get(args, options))
}

export async function getApiReportLogin(
  args: InferRequestType<typeof client.api.report.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.report.login.$get(args, options))
}

export async function getApiReportMonthlyActiveUser(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.report['monthly-active-user'].$get(args, options))
}

export async function getApiReportRegistration(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.report.registration.$get(args, options))
}

export async function getApiReportTotals(
  args: InferRequestType<typeof client.api.report.totals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.report.totals.$get(args, options))
}

export async function getApiStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.status.$get(undefined, options))
}

export async function getApiSystemConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.api['system-configuration'].$get(undefined, options))
}

export async function putApiSystemConfiguration(
  args: InferRequestType<(typeof client.api)['system-configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['system-configuration'].$put(args, options))
}

export async function patchApiSystemConfiguration(
  args: InferRequestType<(typeof client.api)['system-configuration']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['system-configuration'].$patch(args, options))
}

export async function postApiSystemAuditLog(
  args: InferRequestType<(typeof client.api.system)['audit-log']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['audit-log'].$post(args, options))
}

export async function postApiSystemAuditLogSearch(
  args: InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['audit-log'].search.$post(args, options))
}

export async function getApiSystemAuditLogAuditLogId(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['audit-log'][':auditLogId'].$get(args, options))
}

export async function postApiSystemEventLogSearch(
  args: InferRequestType<(typeof client.api.system)['event-log']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['event-log'].search.$post(args, options))
}

export async function getApiSystemEventLogEventLogId(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['event-log'][':eventLogId'].$get(args, options))
}

export async function postApiSystemLoginRecordSearch(
  args: InferRequestType<(typeof client.api.system)['login-record']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['login-record'].search.$post(args, options))
}

export async function getApiSystemReindex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.reindex.$get(undefined, options))
}

export async function postApiSystemReindex(
  args: InferRequestType<typeof client.api.system.reindex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system.reindex.$post(args, options))
}

export async function getApiSystemVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.system.version.$get(undefined, options))
}

export async function getApiSystemWebhookAttemptLogWebhookAttemptLogId(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.system['webhook-attempt-log'][':webhookAttemptLogId'].$get(args, options),
  )
}

export async function postApiSystemWebhookEventLogSearch(
  args: InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.system['webhook-event-log'].search.$post(args, options))
}

export async function getApiSystemWebhookEventLogWebhookEventLogId(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.system['webhook-event-log'][':webhookEventLogId'].$get(args, options),
  )
}

export async function getApiTenant(
  args: InferRequestType<typeof client.api.tenant.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant.$get(args, options))
}

export async function postApiTenant(
  args: InferRequestType<typeof client.api.tenant.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant.$post(args, options))
}

export async function getApiTenantManager(options?: ClientRequestOptions) {
  return await parseResponse(client.api['tenant-manager'].$get(undefined, options))
}

export async function putApiTenantManager(
  args: InferRequestType<(typeof client.api)['tenant-manager']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['tenant-manager'].$put(args, options))
}

export async function patchApiTenantManager(
  args: InferRequestType<(typeof client.api)['tenant-manager']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['tenant-manager'].$patch(args, options))
}

export async function putApiTenantManagerIdentityProviderType(
  args: InferRequestType<
    (typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['tenant-manager']['identity-provider'][':type'].$put(args, options),
  )
}

export async function postApiTenantManagerIdentityProviderType(
  args: InferRequestType<
    (typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['tenant-manager']['identity-provider'][':type'].$post(args, options),
  )
}

export async function deleteApiTenantManagerIdentityProviderType(
  args: InferRequestType<
    (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['tenant-manager']['identity-provider'][':type'].$delete(args, options),
  )
}

export async function patchApiTenantManagerIdentityProviderType(
  args: InferRequestType<
    (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['tenant-manager']['identity-provider'][':type'].$patch(args, options),
  )
}

export async function getApiTenantPasswordValidationRules(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.tenant['password-validation-rules'].$get(undefined, options),
  )
}

export async function getApiTenantPasswordValidationRulesTenantId(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.tenant['password-validation-rules'][':tenantId'].$get(args, options),
  )
}

export async function postApiTenantSearch(
  args: InferRequestType<typeof client.api.tenant.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant.search.$post(args, options))
}

export async function getApiTenantTenantId(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant[':tenantId'].$get(args, options))
}

export async function putApiTenantTenantId(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant[':tenantId'].$put(args, options))
}

export async function postApiTenantTenantId(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant[':tenantId'].$post(args, options))
}

export async function deleteApiTenantTenantId(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant[':tenantId'].$delete(args, options))
}

export async function patchApiTenantTenantId(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tenant[':tenantId'].$patch(args, options))
}

export async function getApiTheme(options?: ClientRequestOptions) {
  return await parseResponse(client.api.theme.$get(undefined, options))
}

export async function postApiTheme(
  args: InferRequestType<typeof client.api.theme.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme.$post(args, options))
}

export async function postApiThemeSearch(
  args: InferRequestType<typeof client.api.theme.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme.search.$post(args, options))
}

export async function getApiThemeThemeId(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme[':themeId'].$get(args, options))
}

export async function putApiThemeThemeId(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme[':themeId'].$put(args, options))
}

export async function postApiThemeThemeId(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme[':themeId'].$post(args, options))
}

export async function deleteApiThemeThemeId(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme[':themeId'].$delete(args, options))
}

export async function patchApiThemeThemeId(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.theme[':themeId'].$patch(args, options))
}

export async function postApiTwoFactorLogin(
  args: InferRequestType<(typeof client.api)['two-factor']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['two-factor'].login.$post(args, options))
}

export async function getApiTwoFactorSecret(options?: ClientRequestOptions) {
  return await parseResponse(client.api['two-factor'].secret.$get(undefined, options))
}

export async function postApiTwoFactorSend(
  args: InferRequestType<(typeof client.api)['two-factor']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['two-factor'].send.$post(args, options))
}

export async function postApiTwoFactorSendTwoFactorId(
  args: InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['two-factor'].send[':twoFactorId'].$post(args, options))
}

export async function postApiTwoFactorStart(
  args: InferRequestType<(typeof client.api)['two-factor']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['two-factor'].start.$post(args, options))
}

export async function postApiTwoFactorStatus(
  args: InferRequestType<(typeof client.api)['two-factor']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['two-factor'].status.$post(args, options))
}

export async function getApiTwoFactorStatusTwoFactorTrustId(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['two-factor'].status[':twoFactorTrustId'].$get(args, options),
  )
}

export async function getApiUser(
  args: InferRequestType<typeof client.api.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.$get(args, options))
}

export async function postApiUser(
  args: InferRequestType<typeof client.api.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.$post(args, options))
}

export async function getApiUserAction(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'].$get(args, options))
}

export async function postApiUserAction(
  args: InferRequestType<(typeof client.api)['user-action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'].$post(args, options))
}

export async function getApiUserActionReason(options?: ClientRequestOptions) {
  return await parseResponse(client.api['user-action-reason'].$get(undefined, options))
}

export async function postApiUserActionReason(
  args: InferRequestType<(typeof client.api)['user-action-reason']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action-reason'].$post(args, options))
}

export async function getApiUserActionReasonUserActionReasonId(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['user-action-reason'][':userActionReasonId'].$get(args, options),
  )
}

export async function putApiUserActionReasonUserActionReasonId(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['user-action-reason'][':userActionReasonId'].$put(args, options),
  )
}

export async function postApiUserActionReasonUserActionReasonId(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['user-action-reason'][':userActionReasonId'].$post(args, options),
  )
}

export async function deleteApiUserActionReasonUserActionReasonId(
  args: InferRequestType<
    (typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['user-action-reason'][':userActionReasonId'].$delete(args, options),
  )
}

export async function patchApiUserActionReasonUserActionReasonId(
  args: InferRequestType<
    (typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['user-action-reason'][':userActionReasonId'].$patch(args, options),
  )
}

export async function getApiUserActionUserActionId(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'][':userActionId'].$get(args, options))
}

export async function putApiUserActionUserActionId(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'][':userActionId'].$put(args, options))
}

export async function postApiUserActionUserActionId(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'][':userActionId'].$post(args, options))
}

export async function deleteApiUserActionUserActionId(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'][':userActionId'].$delete(args, options))
}

export async function patchApiUserActionUserActionId(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-action'][':userActionId'].$patch(args, options))
}

export async function getApiUserAction2(
  args: InferRequestType<typeof client.api.user.action.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.action.$get(args, options))
}

export async function postApiUserAction2(
  args: InferRequestType<typeof client.api.user.action.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.action.$post(args, options))
}

export async function getApiUserActionActionId(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.action[':actionId'].$get(args, options))
}

export async function putApiUserActionActionId(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.action[':actionId'].$put(args, options))
}

export async function deleteApiUserActionActionId(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.action[':actionId'].$delete(args, options))
}

export async function deleteApiUserBulk(
  args: InferRequestType<typeof client.api.user.bulk.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.bulk.$delete(args, options))
}

export async function getApiUserChangePassword(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['change-password'].$get(args, options))
}

export async function postApiUserChangePassword(
  args: InferRequestType<(typeof client.api.user)['change-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['change-password'].$post(args, options))
}

export async function getApiUserChangePasswordChangePasswordId(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user['change-password'][':changePasswordId'].$get(args, options),
  )
}

export async function postApiUserChangePasswordChangePasswordId(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user['change-password'][':changePasswordId'].$post(args, options),
  )
}

export async function postApiUserComment(
  args: InferRequestType<typeof client.api.user.comment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.comment.$post(args, options))
}

export async function postApiUserCommentSearch(
  args: InferRequestType<typeof client.api.user.comment.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.comment.search.$post(args, options))
}

export async function getApiUserCommentUserId(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.comment[':userId'].$get(args, options))
}

export async function getApiUserConsent(
  args: InferRequestType<typeof client.api.user.consent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent.$get(args, options))
}

export async function postApiUserConsent(
  args: InferRequestType<typeof client.api.user.consent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent.$post(args, options))
}

export async function getApiUserConsentUserConsentId(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent[':userConsentId'].$get(args, options))
}

export async function putApiUserConsentUserConsentId(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent[':userConsentId'].$put(args, options))
}

export async function postApiUserConsentUserConsentId(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent[':userConsentId'].$post(args, options))
}

export async function deleteApiUserConsentUserConsentId(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent[':userConsentId'].$delete(args, options))
}

export async function patchApiUserConsentUserConsentId(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.consent[':userConsentId'].$patch(args, options))
}

export async function getApiUserFamily(
  args: InferRequestType<typeof client.api.user.family.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family.$get(args, options))
}

export async function postApiUserFamily(
  args: InferRequestType<typeof client.api.user.family.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family.$post(args, options))
}

export async function getApiUserFamilyPending(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family.pending.$get(args, options))
}

export async function postApiUserFamilyRequest(
  args: InferRequestType<typeof client.api.user.family.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family.request.$post(args, options))
}

export async function getApiUserFamilyFamilyId(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family[':familyId'].$get(args, options))
}

export async function putApiUserFamilyFamilyId(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family[':familyId'].$put(args, options))
}

export async function postApiUserFamilyFamilyId(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family[':familyId'].$post(args, options))
}

export async function deleteApiUserFamilyFamilyIdUserId(
  args: InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.family[':familyId'][':userId'].$delete(args, options))
}

export async function postApiUserForgotPassword(
  args: InferRequestType<(typeof client.api.user)['forgot-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['forgot-password'].$post(args, options))
}

export async function postApiUserImport(
  args: InferRequestType<typeof client.api.user.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.import.$post(args, options))
}

export async function getApiUserRecentLogin(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['recent-login'].$get(args, options))
}

export async function postApiUserRefreshTokenImport(
  args: InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['refresh-token'].import.$post(args, options))
}

export async function postApiUserRegistration(
  args: InferRequestType<typeof client.api.user.registration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.registration.$post(args, options))
}

export async function putApiUserRegistrationUserId(
  args: InferRequestType<(typeof client.api.user.registration)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.registration[':userId'].$put(args, options))
}

export async function postApiUserRegistrationUserId(
  args: InferRequestType<(typeof client.api.user.registration)[':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.registration[':userId'].$post(args, options))
}

export async function patchApiUserRegistrationUserId(
  args: InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.registration[':userId'].$patch(args, options))
}

export async function getApiUserRegistrationUserIdApplicationId(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user.registration[':userId'][':applicationId'].$get(args, options),
  )
}

export async function deleteApiUserRegistrationUserIdApplicationId(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user.registration[':userId'][':applicationId'].$delete(args, options),
  )
}

export async function getApiUserSearch(
  args: InferRequestType<typeof client.api.user.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.search.$get(args, options))
}

export async function putApiUserSearch(options?: ClientRequestOptions) {
  return await parseResponse(client.api.user.search.$put(undefined, options))
}

export async function postApiUserSearch(
  args: InferRequestType<typeof client.api.user.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user.search.$post(args, options))
}

export async function getApiUserTwoFactorRecoveryCodeUserId(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user['two-factor']['recovery-code'][':userId'].$get(args, options),
  )
}

export async function postApiUserTwoFactorRecoveryCodeUserId(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.user['two-factor']['recovery-code'][':userId'].$post(args, options),
  )
}

export async function putApiUserTwoFactorUserId(
  args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['two-factor'][':userId'].$put(args, options))
}

export async function postApiUserTwoFactorUserId(
  args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['two-factor'][':userId'].$post(args, options))
}

export async function deleteApiUserTwoFactorUserId(
  args: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['two-factor'][':userId'].$delete(args, options))
}

export async function putApiUserVerifyEmail(
  args: InferRequestType<(typeof client.api.user)['verify-email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['verify-email'].$put(args, options))
}

export async function postApiUserVerifyEmail(
  args: InferRequestType<(typeof client.api.user)['verify-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['verify-email'].$post(args, options))
}

export async function putApiUserVerifyRegistration(
  args: InferRequestType<(typeof client.api.user)['verify-registration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['verify-registration'].$put(args, options))
}

export async function postApiUserVerifyRegistration(
  args: InferRequestType<(typeof client.api.user)['verify-registration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user['verify-registration'].$post(args, options))
}

export async function getApiUserUserId(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':userId'].$get(args, options))
}

export async function putApiUserUserId(
  args: InferRequestType<(typeof client.api.user)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':userId'].$put(args, options))
}

export async function postApiUserUserId(
  args: InferRequestType<(typeof client.api.user)[':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':userId'].$post(args, options))
}

export async function deleteApiUserUserId(
  args: InferRequestType<(typeof client.api.user)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':userId'].$delete(args, options))
}

export async function patchApiUserUserId(
  args: InferRequestType<(typeof client.api.user)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user[':userId'].$patch(args, options))
}

export async function getApiWebauthn(
  args: InferRequestType<typeof client.api.webauthn.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.$get(args, options))
}

export async function deleteApiWebauthn(
  args: InferRequestType<typeof client.api.webauthn.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.$delete(args, options))
}

export async function postApiWebauthnAssert(
  args: InferRequestType<typeof client.api.webauthn.assert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.assert.$post(args, options))
}

export async function postApiWebauthnImport(
  args: InferRequestType<typeof client.api.webauthn.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.import.$post(args, options))
}

export async function postApiWebauthnLogin(
  args: InferRequestType<typeof client.api.webauthn.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.login.$post(args, options))
}

export async function postApiWebauthnRegisterComplete(
  args: InferRequestType<typeof client.api.webauthn.register.complete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.register.complete.$post(args, options))
}

export async function postApiWebauthnRegisterStart(
  args: InferRequestType<typeof client.api.webauthn.register.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.register.start.$post(args, options))
}

export async function postApiWebauthnStart(
  args: InferRequestType<typeof client.api.webauthn.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn.start.$post(args, options))
}

export async function getApiWebauthnId(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn[':id'].$get(args, options))
}

export async function deleteApiWebauthnId(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webauthn[':id'].$delete(args, options))
}

export async function getApiWebhook(options?: ClientRequestOptions) {
  return await parseResponse(client.api.webhook.$get(undefined, options))
}

export async function postApiWebhook(
  args: InferRequestType<typeof client.api.webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook.$post(args, options))
}

export async function getApiWebhookSearch(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook.search.$get(args, options))
}

export async function postApiWebhookSearch(
  args: InferRequestType<typeof client.api.webhook.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook.search.$post(args, options))
}

export async function getApiWebhookWebhookId(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook[':webhookId'].$get(args, options))
}

export async function putApiWebhookWebhookId(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook[':webhookId'].$put(args, options))
}

export async function postApiWebhookWebhookId(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook[':webhookId'].$post(args, options))
}

export async function deleteApiWebhookWebhookId(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook[':webhookId'].$delete(args, options))
}

export async function patchApiWebhookWebhookId(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhook[':webhookId'].$patch(args, options))
}

export async function postOauth2DeviceApprove(
  args: InferRequestType<typeof client.oauth2.device.approve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.device.approve.$post(args, options))
}

export async function postOauth2DeviceUserCode(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.device['user-code'].$post(undefined, options))
}

export async function getOauth2DeviceValidate(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.device.validate.$get(args, options))
}

export async function postOauth2DeviceAuthorize(
  args: InferRequestType<typeof client.oauth2.device_authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.device_authorize.$post(args, options))
}

export async function postOauth2Introspect(
  args: InferRequestType<typeof client.oauth2.introspect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.introspect.$post(args, options))
}

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function getOauth2Userinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.userinfo.$get(undefined, options))
}
