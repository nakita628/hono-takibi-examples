import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthenticatorsKey() {
  return ['authenticators'] as const
}

export function getAuthnKey() {
  return ['authn'] as const
}

export function getAuthnAzureKey() {
  return ['authn-azure'] as const
}

export function getAuthnGcpKey() {
  return ['authn-gcp'] as const
}

export function getAuthnIamKey() {
  return ['authn-iam'] as const
}

export function getAuthnJwtKey() {
  return ['authn-jwt'] as const
}

export function getAuthnK8sKey() {
  return ['authn-k8s'] as const
}

export function getAuthnLdapKey() {
  return ['authn-ldap'] as const
}

export function getAuthnOidcKey() {
  return ['authn-oidc'] as const
}

export function getCaKey() {
  return ['ca'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getHostFactoriesKey() {
  return ['host_factories'] as const
}

export function getHostFactoryTokensKey() {
  return ['host_factory_tokens'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getPoliciesKey() {
  return ['policies'] as const
}

export function getPublicKeysKey() {
  return ['public_keys'] as const
}

export function getRemoteHealthKey() {
  return ['remote_health'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getWhoamiKey() {
  return ['whoami'] as const
}

export function getAuthenticatorKey() {
  return ['{authenticator}'] as const
}

export function getGetAuthenticatorsKey(args: InferRequestType<typeof client.authenticators.$get>) {
  const { header: _, ...keyArgs } = args
  return ['authenticators', '/authenticators', keyArgs] as const
}

export function useGetAuthenticators<TError = unknown>(
  args: InferRequestType<typeof client.authenticators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthenticatorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authenticators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticators<TError = unknown>(
  args: InferRequestType<typeof client.authenticators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthenticatorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authenticators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthnAzureServiceIdAccountLoginAuthenticateKey() {
  return ['authn-azure', '/authn-azure/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function usePostAuthnAzureServiceIdAccountLoginAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnAzureServiceIdAccountLoginAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-azure'][':service_id'][':account'][':login'].authenticate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnGcpAccountAuthenticateKey() {
  return ['authn-gcp', '/authn-gcp/:account/authenticate', 'POST'] as const
}

export function usePostAuthnGcpAccountAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnGcpAccountAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>
        },
      ) => parseResponse(client['authn-gcp'][':account'].authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthnGcpAccountStatusKey(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn-gcp', '/authn-gcp/:account/status', keyArgs] as const
}

export function useGetAuthnGcpAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnGcpAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authn-gcp'][':account'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthnGcpAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnGcpAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authn-gcp'][':account'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthnIamServiceIdAccountLoginAuthenticateKey() {
  return ['authn-iam', '/authn-iam/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function usePostAuthnIamServiceIdAccountLoginAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnIamServiceIdAccountLoginAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-iam'][':service_id'][':account'][':login'].authenticate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnJwtServiceIdAccountAuthenticateKey() {
  return ['authn-jwt', '/authn-jwt/:service_id/:account/authenticate', 'POST'] as const
}

export function usePostAuthnJwtServiceIdAccountAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnJwtServiceIdAccountAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-jwt'][':service_id'][':account'].authenticate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnJwtServiceIdAccountIdAuthenticateKey() {
  return ['authn-jwt', '/authn-jwt/:service_id/:account/:id/authenticate', 'POST'] as const
}

export function usePostAuthnJwtServiceIdAccountIdAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnJwtServiceIdAccountIdAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-jwt'][':service_id'][':account'][':id'].authenticate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnK8sServiceIdInjectClientCertKey() {
  return ['authn-k8s', '/authn-k8s/:service_id/inject_client_cert', 'POST'] as const
}

export function usePostAuthnK8sServiceIdInjectClientCert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnK8sServiceIdInjectClientCertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-k8s'][':service_id'].inject_client_cert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnK8sServiceIdAccountLoginAuthenticateKey() {
  return ['authn-k8s', '/authn-k8s/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function usePostAuthnK8sServiceIdAccountLoginAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnK8sServiceIdAccountLoginAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-k8s'][':service_id'][':account'][':login'].authenticate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthnLdapServiceIdAccountLoginKey(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn-ldap', '/authn-ldap/:service_id/:account/login', keyArgs] as const
}

export function useGetAuthnLdapServiceIdAccountLogin<TError = unknown>(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnLdapServiceIdAccountLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['authn-ldap'][':service_id'][':account'].login.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthnLdapServiceIdAccountLogin<TError = unknown>(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnLdapServiceIdAccountLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['authn-ldap'][':service_id'][':account'].login.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuthnLdapServiceIdAccountLoginAuthenticateKey() {
  return ['authn-ldap', '/authn-ldap/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function usePostAuthnLdapServiceIdAccountLoginAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnLdapServiceIdAccountLoginAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-ldap'][':service_id'][':account'][':login'].authenticate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnOidcServiceIdAccountAuthenticateKey() {
  return ['authn-oidc', '/authn-oidc/:service_id/:account/authenticate', 'POST'] as const
}

export function usePostAuthnOidcServiceIdAccountAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnOidcServiceIdAccountAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['authn-oidc'][':service_id'][':account'].authenticate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAuthnAccountApiKeyKey() {
  return ['authn', '/authn/:account/api_key', 'PUT'] as const
}

export function usePutAuthnAccountApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authn)[':account']['api_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authn)[':account']['api_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthnAccountApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authn)[':account']['api_key']['$put']> },
      ) => parseResponse(client.authn[':account'].api_key.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthnAccountLoginKey(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn', '/authn/:account/login', keyArgs] as const
}

export function useGetAuthnAccountLogin<TError = unknown>(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnAccountLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authn[':account'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthnAccountLogin<TError = unknown>(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthnAccountLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authn[':account'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuthnAccountPasswordKey() {
  return ['authn', '/authn/:account/password', 'PUT'] as const
}

export function usePutAuthnAccountPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.authn)[':account']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthnAccountPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authn)[':account']['password']['$put']> },
      ) => parseResponse(client.authn[':account'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthnAccountLoginAuthenticateKey() {
  return ['authn', '/authn/:account/:login/authenticate', 'POST'] as const
}

export function usePostAuthnAccountLoginAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthnAccountLoginAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.authn)[':account'][':login']['authenticate']['$post']
          >
        },
      ) => parseResponse(client.authn[':account'][':login'].authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCaAccountServiceIdSignKey() {
  return ['ca', '/ca/:account/:service_id/sign', 'POST'] as const
}

export function usePostCaAccountServiceIdSign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCaAccountServiceIdSignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>
        },
      ) => parseResponse(client.ca[':account'][':service_id'].sign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHostFactoriesHostsKey() {
  return ['host_factories', '/host_factories/hosts', 'POST'] as const
}

export function usePostHostFactoriesHosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.host_factories.hosts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.host_factories.hosts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostFactoriesHostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.host_factories.hosts.$post> },
      ) => parseResponse(client.host_factories.hosts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHostFactoryTokensKey() {
  return ['host_factory_tokens', '/host_factory_tokens', 'POST'] as const
}

export function usePostHostFactoryTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.host_factory_tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.host_factory_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHostFactoryTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.host_factory_tokens.$post> }) =>
        parseResponse(client.host_factory_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteHostFactoryTokensTokenKey() {
  return ['host_factory_tokens', '/host_factory_tokens/:token', 'DELETE'] as const
}

export function useDeleteHostFactoryTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.host_factory_tokens)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHostFactoryTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']> },
      ) => parseResponse(client.host_factory_tokens[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInfoKey() {
  return ['info', '/info'] as const
}

export function useGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPoliciesAccountPolicyIdentifierKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'PUT'] as const
}

export function usePutPoliciesAccountPolicyIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPoliciesAccountPolicyIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.policies)[':account']['policy'][':identifier']['$put']
          >
        },
      ) =>
        parseResponse(client.policies[':account'].policy[':identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPoliciesAccountPolicyIdentifierKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'POST'] as const
}

export function usePostPoliciesAccountPolicyIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.policies)[':account']['policy'][':identifier']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPoliciesAccountPolicyIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.policies)[':account']['policy'][':identifier']['$post']
          >
        },
      ) =>
        parseResponse(client.policies[':account'].policy[':identifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPoliciesAccountPolicyIdentifierKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'PATCH'] as const
}

export function usePatchPoliciesAccountPolicyIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.policies)[':account']['policy'][':identifier']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPoliciesAccountPolicyIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.policies)[':account']['policy'][':identifier']['$patch']
          >
        },
      ) =>
        parseResponse(client.policies[':account'].policy[':identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicKeysAccountKindIdentifierKey(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['public_keys', '/public_keys/:account/:kind/:identifier', keyArgs] as const
}

export function useGetPublicKeysAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicKeysAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public_keys[':account'][':kind'][':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicKeysAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicKeysAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public_keys[':account'][':kind'][':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRemoteHealthRemoteKey(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
) {
  return ['remote_health', '/remote_health/:remote', args] as const
}

export function useGetRemoteHealthRemote<TError = unknown>(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteHealthRemoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_health[':remote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoteHealthRemote<TError = unknown>(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoteHealthRemoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remote_health[':remote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesKey(args: InferRequestType<typeof client.resources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources', keyArgs] as const
}

export function useGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesAccountKey(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account', keyArgs] as const
}

export function useGetResourcesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesAccount<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesAccountKindKey(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account/:kind', keyArgs] as const
}

export function useGetResourcesAccountKind<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':account'][':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesAccountKind<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':account'][':kind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesAccountKindIdentifierKey(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account/:kind/:identifier', keyArgs] as const
}

export function useGetResourcesAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources[':account'][':kind'][':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.resources[':account'][':kind'][':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRolesAccountKindIdentifierKey(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles/:account/:kind/:identifier', keyArgs] as const
}

export function useGetRolesAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRolesAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.roles[':account'][':kind'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRolesAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRolesAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.roles[':account'][':kind'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRolesAccountKindIdentifierKey() {
  return ['roles', '/roles/:account/:kind/:identifier', 'POST'] as const
}

export function usePostRolesAccountKindIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRolesAccountKindIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>
        },
      ) =>
        parseResponse(client.roles[':account'][':kind'][':identifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRolesAccountKindIdentifierKey() {
  return ['roles', '/roles/:account/:kind/:identifier', 'DELETE'] as const
}

export function useDeleteRolesAccountKindIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRolesAccountKindIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.roles)[':account'][':kind'][':identifier']['$delete']
          >
        },
      ) =>
        parseResponse(client.roles[':account'][':kind'][':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsKey(args: InferRequestType<typeof client.secrets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['secrets', '/secrets', keyArgs] as const
}

export function useGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSecretsAccountKindIdentifierKey(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['secrets', '/secrets/:account/:kind/:identifier', keyArgs] as const
}

export function useGetSecretsAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets[':account'][':kind'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsAccountKindIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsAccountKindIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets[':account'][':kind'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecretsAccountKindIdentifierKey() {
  return ['secrets', '/secrets/:account/:kind/:identifier', 'POST'] as const
}

export function usePostSecretsAccountKindIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsAccountKindIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.secrets)[':account'][':kind'][':identifier']['$post']
          >
        },
      ) =>
        parseResponse(client.secrets[':account'][':kind'][':identifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhoamiKey(args: InferRequestType<typeof client.whoami.$get>) {
  const { header: _, ...keyArgs } = args
  return ['whoami', '/whoami', keyArgs] as const
}

export function useGetWhoami<TError = unknown>(
  args: InferRequestType<typeof client.whoami.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWhoamiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.whoami.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWhoami<TError = unknown>(
  args: InferRequestType<typeof client.whoami.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWhoamiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.whoami.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchAuthenticatorAccountKey() {
  return [':authenticator', '/:authenticator/:account', 'PATCH'] as const
}

export function usePatchAuthenticatorAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':authenticator'][':account']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':authenticator'][':account']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthenticatorAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':authenticator'][':account']['$patch']> },
      ) => parseResponse(client[':authenticator'][':account'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthenticatorServiceIdAccountKey() {
  return [':authenticator', '/:authenticator/:service_id/:account', 'PATCH'] as const
}

export function usePatchAuthenticatorServiceIdAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':authenticator'][':service_id'][':account']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthenticatorServiceIdAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':authenticator'][':service_id'][':account']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':authenticator'][':service_id'][':account'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticatorServiceIdAccountStatusKey(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':authenticator', '/:authenticator/:service_id/:account/status', keyArgs] as const
}

export function useGetAuthenticatorServiceIdAccountStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticatorServiceIdAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':authenticator'][':service_id'][':account'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticatorServiceIdAccountStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthenticatorServiceIdAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':authenticator'][':service_id'][':account'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
