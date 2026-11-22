import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuthenticators(
  args: InferRequestType<typeof client.authenticators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticators.$get(args, options))
}

export async function postAuthnAzureServiceIdAccountLoginAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-azure'][':service_id'][':account'][':login'].authenticate.$post(args, options),
  )
}

export async function postAuthnGcpAccountAuthenticate(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authn-gcp'][':account'].authenticate.$post(args, options))
}

export async function getAuthnGcpAccountStatus(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authn-gcp'][':account'].status.$get(args, options))
}

export async function postAuthnIamServiceIdAccountLoginAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-iam'][':service_id'][':account'][':login'].authenticate.$post(args, options),
  )
}

export async function postAuthnJwtServiceIdAccountAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-jwt'][':service_id'][':account'].authenticate.$post(args, options),
  )
}

export async function postAuthnJwtServiceIdAccountIdAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-jwt'][':service_id'][':account'][':id'].authenticate.$post(args, options),
  )
}

export async function postAuthnK8sServiceIdInjectClientCert(
  args: InferRequestType<
    (typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-k8s'][':service_id'].inject_client_cert.$post(args, options),
  )
}

export async function postAuthnK8sServiceIdAccountLoginAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-k8s'][':service_id'][':account'][':login'].authenticate.$post(args, options),
  )
}

export async function getAuthnLdapServiceIdAccountLogin(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-ldap'][':service_id'][':account'].login.$get(args, options),
  )
}

export async function postAuthnLdapServiceIdAccountLoginAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-ldap'][':service_id'][':account'][':login'].authenticate.$post(args, options),
  )
}

export async function postAuthnOidcServiceIdAccountAuthenticate(
  args: InferRequestType<
    (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authn-oidc'][':service_id'][':account'].authenticate.$post(args, options),
  )
}

export async function putAuthnAccountApiKey(
  args: InferRequestType<(typeof client.authn)[':account']['api_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authn[':account'].api_key.$put(args, options))
}

export async function getAuthnAccountLogin(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authn[':account'].login.$get(args, options))
}

export async function putAuthnAccountPassword(
  args: InferRequestType<(typeof client.authn)[':account']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authn[':account'].password.$put(args, options))
}

export async function postAuthnAccountLoginAuthenticate(
  args: InferRequestType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authn[':account'][':login'].authenticate.$post(args, options))
}

export async function postCaAccountServiceIdSign(
  args: InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca[':account'][':service_id'].sign.$post(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function postHostFactoriesHosts(
  args: InferRequestType<typeof client.host_factories.hosts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.host_factories.hosts.$post(args, options))
}

export async function postHostFactoryTokens(
  args: InferRequestType<typeof client.host_factory_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.host_factory_tokens.$post(args, options))
}

export async function deleteHostFactoryTokensToken(
  args: InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.host_factory_tokens[':token'].$delete(args, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function putPoliciesAccountPolicyIdentifier(
  args: InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':account'].policy[':identifier'].$put(args, options))
}

export async function postPoliciesAccountPolicyIdentifier(
  args: InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':account'].policy[':identifier'].$post(args, options))
}

export async function patchPoliciesAccountPolicyIdentifier(
  args: InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies[':account'].policy[':identifier'].$patch(args, options),
  )
}

export async function getPublicKeysAccountKindIdentifier(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public_keys[':account'][':kind'][':identifier'].$get(args, options),
  )
}

export async function getRemoteHealthRemote(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remote_health[':remote'].$get(args, options))
}

export async function getResources(
  args: InferRequestType<typeof client.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$get(args, options))
}

export async function getResourcesAccount(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':account'].$get(args, options))
}

export async function getResourcesAccountKind(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':account'][':kind'].$get(args, options))
}

export async function getResourcesAccountKindIdentifier(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources[':account'][':kind'][':identifier'].$get(args, options),
  )
}

export async function getRolesAccountKindIdentifier(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':account'][':kind'][':identifier'].$get(args, options))
}

export async function postRolesAccountKindIdentifier(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':account'][':kind'][':identifier'].$post(args, options))
}

export async function deleteRolesAccountKindIdentifier(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.roles[':account'][':kind'][':identifier'].$delete(args, options),
  )
}

export async function getSecrets(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$get(args, options))
}

export async function getSecretsAccountKindIdentifier(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':account'][':kind'][':identifier'].$get(args, options))
}

export async function postSecretsAccountKindIdentifier(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.secrets[':account'][':kind'][':identifier'].$post(args, options),
  )
}

export async function getWhoami(
  args: InferRequestType<typeof client.whoami.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whoami.$get(args, options))
}

export async function patchAuthenticatorAccount(
  args: InferRequestType<(typeof client)[':authenticator'][':account']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':authenticator'][':account'].$patch(args, options))
}

export async function patchAuthenticatorServiceIdAccount(
  args: InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':authenticator'][':service_id'][':account'].$patch(args, options),
  )
}

export async function getAuthenticatorServiceIdAccountStatus(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':authenticator'][':service_id'][':account'].status.$get(args, options),
  )
}
