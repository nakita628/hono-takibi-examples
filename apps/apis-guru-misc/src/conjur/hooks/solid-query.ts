import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getAuthenticatorsQueryKey(
  args: InferRequestType<typeof client.authenticators.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['authenticators', '/authenticators', keyArgs] as const
}

export function getAuthenticatorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authenticators.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticatorsQueryKey>
  >({
    queryKey: getAuthenticatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authenticators.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthenticators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.authenticators.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAuthenticatorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthenticatorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAuthnAzureServiceIdAccountLoginAuthenticateMutationKey() {
  return ['authn-azure', '/authn-azure/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function getPostAuthnAzureServiceIdAccountLoginAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnAzureServiceIdAccountLoginAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-azure'][':service_id'][':account'][':login'].authenticate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostAuthnAzureServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-azure'][':service_id'][':account'][':login']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnAzureServiceIdAccountLoginAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnGcpAccountAuthenticateMutationKey() {
  return ['authn-gcp', '/authn-gcp/:account/authenticate', 'POST'] as const
}

export function getPostAuthnGcpAccountAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnGcpAccountAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>,
    ) {
      return parseResponse(client['authn-gcp'][':account'].authenticate.$post(args, options))
    },
  })
}

export function createPostAuthnGcpAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['authn-gcp'][':account']['authenticate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnGcpAccountAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthnGcpAccountStatusQueryKey(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn-gcp', '/authn-gcp/:account/status', keyArgs] as const
}

export function getAuthnGcpAccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthnGcpAccountStatusQueryKey>
  >({
    queryKey: getAuthnGcpAccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['authn-gcp'][':account'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthnGcpAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthnGcpAccountStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthnGcpAccountStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthnIamServiceIdAccountLoginAuthenticateMutationKey() {
  return ['authn-iam', '/authn-iam/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function getPostAuthnIamServiceIdAccountLoginAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnIamServiceIdAccountLoginAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-iam'][':service_id'][':account'][':login'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnIamServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-iam'][':service_id'][':account'][':login']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnIamServiceIdAccountLoginAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnJwtServiceIdAccountAuthenticateMutationKey() {
  return ['authn-jwt', '/authn-jwt/:service_id/:account/authenticate', 'POST'] as const
}

export function getPostAuthnJwtServiceIdAccountAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnJwtServiceIdAccountAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-jwt'][':service_id'][':account'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnJwtServiceIdAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-jwt'][':service_id'][':account']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnJwtServiceIdAccountAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnJwtServiceIdAccountIdAuthenticateMutationKey() {
  return ['authn-jwt', '/authn-jwt/:service_id/:account/:id/authenticate', 'POST'] as const
}

export function getPostAuthnJwtServiceIdAccountIdAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnJwtServiceIdAccountIdAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-jwt'][':service_id'][':account'][':id'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnJwtServiceIdAccountIdAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-jwt'][':service_id'][':account'][':id']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnJwtServiceIdAccountIdAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnK8sServiceIdInjectClientCertMutationKey() {
  return ['authn-k8s', '/authn-k8s/:service_id/inject_client_cert', 'POST'] as const
}

export function getPostAuthnK8sServiceIdInjectClientCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnK8sServiceIdInjectClientCertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-k8s'][':service_id'].inject_client_cert.$post(args, options),
      )
    },
  })
}

export function createPostAuthnK8sServiceIdInjectClientCert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['authn-k8s'][':service_id']['inject_client_cert']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnK8sServiceIdInjectClientCertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnK8sServiceIdAccountLoginAuthenticateMutationKey() {
  return ['authn-k8s', '/authn-k8s/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function getPostAuthnK8sServiceIdAccountLoginAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnK8sServiceIdAccountLoginAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-k8s'][':service_id'][':account'][':login'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnK8sServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-k8s'][':service_id'][':account'][':login']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnK8sServiceIdAccountLoginAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthnLdapServiceIdAccountLoginQueryKey(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn-ldap', '/authn-ldap/:service_id/:account/login', keyArgs] as const
}

export function getAuthnLdapServiceIdAccountLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthnLdapServiceIdAccountLoginQueryKey>
  >({
    queryKey: getAuthnLdapServiceIdAccountLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['authn-ldap'][':service_id'][':account'].login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthnLdapServiceIdAccountLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthnLdapServiceIdAccountLoginQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthnLdapServiceIdAccountLoginQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthnLdapServiceIdAccountLoginAuthenticateMutationKey() {
  return ['authn-ldap', '/authn-ldap/:service_id/:account/:login/authenticate', 'POST'] as const
}

export function getPostAuthnLdapServiceIdAccountLoginAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnLdapServiceIdAccountLoginAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-ldap'][':service_id'][':account'][':login'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnLdapServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-ldap'][':service_id'][':account'][':login']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnLdapServiceIdAccountLoginAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnOidcServiceIdAccountAuthenticateMutationKey() {
  return ['authn-oidc', '/authn-oidc/:service_id/:account/authenticate', 'POST'] as const
}

export function getPostAuthnOidcServiceIdAccountAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnOidcServiceIdAccountAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client['authn-oidc'][':service_id'][':account'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthnOidcServiceIdAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['authn-oidc'][':service_id'][':account']['authenticate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnOidcServiceIdAccountAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAuthnAccountApiKeyMutationKey() {
  return ['authn', '/authn/:account/api_key', 'PUT'] as const
}

export function getPutAuthnAccountApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authn)[':account']['api_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authn)[':account']['api_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthnAccountApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.authn)[':account']['api_key']['$put']>) {
      return parseResponse(client.authn[':account'].api_key.$put(args, options))
    },
  })
}

export function createPutAuthnAccountApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authn)[':account']['api_key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authn)[':account']['api_key']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthnAccountApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthnAccountLoginQueryKey(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authn', '/authn/:account/login', keyArgs] as const
}

export function getAuthnAccountLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthnAccountLoginQueryKey>
  >({
    queryKey: getAuthnAccountLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authn[':account'].login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthnAccountLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.authn)[':account']['login']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthnAccountLoginQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthnAccountLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutAuthnAccountPasswordMutationKey() {
  return ['authn', '/authn/:account/password', 'PUT'] as const
}

export function getPutAuthnAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authn)[':account']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.authn)[':account']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthnAccountPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authn)[':account']['password']['$put']>,
    ) {
      return parseResponse(client.authn[':account'].password.$put(args, options))
    },
  })
}

export function createPutAuthnAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.authn)[':account']['password']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.authn)[':account']['password']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthnAccountPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthnAccountLoginAuthenticateMutationKey() {
  return ['authn', '/authn/:account/:login/authenticate', 'POST'] as const
}

export function getPostAuthnAccountLoginAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthnAccountLoginAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>,
    ) {
      return parseResponse(client.authn[':account'][':login'].authenticate.$post(args, options))
    },
  })
}

export function createPostAuthnAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authn)[':account'][':login']['authenticate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthnAccountLoginAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCaAccountServiceIdSignMutationKey() {
  return ['ca', '/ca/:account/:service_id/sign', 'POST'] as const
}

export function getPostCaAccountServiceIdSignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCaAccountServiceIdSignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>,
    ) {
      return parseResponse(client.ca[':account'][':service_id'].sign.$post(args, options))
    },
  })
}

export function createPostCaAccountServiceIdSign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ca)[':account'][':service_id']['sign']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCaAccountServiceIdSignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHealthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostHostFactoriesHostsMutationKey() {
  return ['host_factories', '/host_factories/hosts', 'POST'] as const
}

export function getPostHostFactoriesHostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.host_factories.hosts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.host_factories.hosts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHostFactoriesHostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.host_factories.hosts.$post>) {
      return parseResponse(client.host_factories.hosts.$post(args, options))
    },
  })
}

export function createPostHostFactoriesHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.host_factories.hosts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.host_factories.hosts.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHostFactoriesHostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostHostFactoryTokensMutationKey() {
  return ['host_factory_tokens', '/host_factory_tokens', 'POST'] as const
}

export function getPostHostFactoryTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.host_factory_tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.host_factory_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHostFactoryTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.host_factory_tokens.$post>) {
      return parseResponse(client.host_factory_tokens.$post(args, options))
    },
  })
}

export function createPostHostFactoryTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.host_factory_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.host_factory_tokens.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHostFactoryTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteHostFactoryTokensTokenMutationKey() {
  return ['host_factory_tokens', '/host_factory_tokens/:token', 'DELETE'] as const
}

export function getDeleteHostFactoryTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.host_factory_tokens)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHostFactoryTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']>,
    ) {
      return parseResponse(client.host_factory_tokens[':token'].$delete(args, options))
    },
  })
}

export function createDeleteHostFactoryTokensToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.host_factory_tokens)[':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.host_factory_tokens)[':token']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteHostFactoryTokensTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInfoQueryKey() {
  return ['info', '/info'] as const
}

export function getInfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >({
    queryKey: getInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutPoliciesAccountPolicyIdentifierMutationKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'PUT'] as const
}

export function getPutPoliciesAccountPolicyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPoliciesAccountPolicyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>,
    ) {
      return parseResponse(client.policies[':account'].policy[':identifier'].$put(args, options))
    },
  })
}

export function createPutPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPoliciesAccountPolicyIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPoliciesAccountPolicyIdentifierMutationKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'POST'] as const
}

export function getPostPoliciesAccountPolicyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPoliciesAccountPolicyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policies)[':account']['policy'][':identifier']['$post']
      >,
    ) {
      return parseResponse(client.policies[':account'].policy[':identifier'].$post(args, options))
    },
  })
}

export function createPostPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPoliciesAccountPolicyIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPoliciesAccountPolicyIdentifierMutationKey() {
  return ['policies', '/policies/:account/policy/:identifier', 'PATCH'] as const
}

export function getPatchPoliciesAccountPolicyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPoliciesAccountPolicyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policies)[':account']['policy'][':identifier']['$patch']
      >,
    ) {
      return parseResponse(client.policies[':account'].policy[':identifier'].$patch(args, options))
    },
  })
}

export function createPatchPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.policies)[':account']['policy'][':identifier']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':account']['policy'][':identifier']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPoliciesAccountPolicyIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPublicKeysAccountKindIdentifierQueryKey(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['public_keys', '/public_keys/:account/:kind/:identifier', keyArgs] as const
}

export function getPublicKeysAccountKindIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicKeysAccountKindIdentifierQueryKey>
  >({
    queryKey: getPublicKeysAccountKindIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public_keys[':account'][':kind'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPublicKeysAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public_keys)[':account'][':kind'][':identifier']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.public_keys)[':account'][':kind'][':identifier']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPublicKeysAccountKindIdentifierQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPublicKeysAccountKindIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRemoteHealthRemoteQueryKey(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
) {
  return ['remote_health', '/remote_health/:remote', args] as const
}

export function getRemoteHealthRemoteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteHealthRemoteQueryKey>
  >({
    queryKey: getRemoteHealthRemoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remote_health[':remote'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRemoteHealthRemote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.remote_health)[':remote']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRemoteHealthRemoteQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemoteHealthRemoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getResourcesQueryKey(args: InferRequestType<typeof client.resources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources', keyArgs] as const
}

export function getResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >({
    queryKey: getResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getResourcesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getResourcesAccountQueryKey(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account', keyArgs] as const
}

export function getResourcesAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAccountQueryKey>
  >({
    queryKey: getResourcesAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':account'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createResourcesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)[':account']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResourcesAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getResourcesAccountKindQueryKey(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account/:kind', keyArgs] as const
}

export function getResourcesAccountKindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAccountKindQueryKey>
  >({
    queryKey: getResourcesAccountKindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':account'][':kind'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResourcesAccountKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResourcesAccountKindQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesAccountKindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getResourcesAccountKindIdentifierQueryKey(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:account/:kind/:identifier', keyArgs] as const
}

export function getResourcesAccountKindIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAccountKindIdentifierQueryKey>
  >({
    queryKey: getResourcesAccountKindIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':account'][':kind'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResourcesAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources)[':account'][':kind'][':identifier']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResourcesAccountKindIdentifierQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesAccountKindIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRolesAccountKindIdentifierQueryKey(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles/:account/:kind/:identifier', keyArgs] as const
}

export function getRolesAccountKindIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesAccountKindIdentifierQueryKey>
  >({
    queryKey: getRolesAccountKindIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':account'][':kind'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRolesAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRolesAccountKindIdentifierQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRolesAccountKindIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRolesAccountKindIdentifierMutationKey() {
  return ['roles', '/roles/:account/:kind/:identifier', 'POST'] as const
}

export function getPostRolesAccountKindIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesAccountKindIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>,
    ) {
      return parseResponse(client.roles[':account'][':kind'][':identifier'].$post(args, options))
    },
  })
}

export function createPostRolesAccountKindIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRolesAccountKindIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRolesAccountKindIdentifierMutationKey() {
  return ['roles', '/roles/:account/:kind/:identifier', 'DELETE'] as const
}

export function getDeleteRolesAccountKindIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesAccountKindIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>,
    ) {
      return parseResponse(client.roles[':account'][':kind'][':identifier'].$delete(args, options))
    },
  })
}

export function createDeleteRolesAccountKindIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRolesAccountKindIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecretsQueryKey(args: InferRequestType<typeof client.secrets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['secrets', '/secrets', keyArgs] as const
}

export function getSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >({
    queryKey: getSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.secrets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSecretsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSecretsAccountKindIdentifierQueryKey(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['secrets', '/secrets/:account/:kind/:identifier', keyArgs] as const
}

export function getSecretsAccountKindIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsAccountKindIdentifierQueryKey>
  >({
    queryKey: getSecretsAccountKindIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets[':account'][':kind'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecretsAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSecretsAccountKindIdentifierQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecretsAccountKindIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSecretsAccountKindIdentifierMutationKey() {
  return ['secrets', '/secrets/:account/:kind/:identifier', 'POST'] as const
}

export function getPostSecretsAccountKindIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsAccountKindIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>,
    ) {
      return parseResponse(client.secrets[':account'][':kind'][':identifier'].$post(args, options))
    },
  })
}

export function createPostSecretsAccountKindIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecretsAccountKindIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWhoamiQueryKey(args: InferRequestType<typeof client.whoami.$get>) {
  const { header: _, ...keyArgs } = args
  return ['whoami', '/whoami', keyArgs] as const
}

export function getWhoamiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.whoami.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWhoamiQueryKey>
  >({
    queryKey: getWhoamiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whoami.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWhoami<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whoami.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getWhoamiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhoamiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchAuthenticatorAccountMutationKey() {
  return [':authenticator', '/:authenticator/:account', 'PATCH'] as const
}

export function getPatchAuthenticatorAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':authenticator'][':account']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':authenticator'][':account']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticatorAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':authenticator'][':account']['$patch']>,
    ) {
      return parseResponse(client[':authenticator'][':account'].$patch(args, options))
    },
  })
}

export function createPatchAuthenticatorAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)[':authenticator'][':account']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':authenticator'][':account']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthenticatorAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAuthenticatorServiceIdAccountMutationKey() {
  return [':authenticator', '/:authenticator/:service_id/:account', 'PATCH'] as const
}

export function getPatchAuthenticatorServiceIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticatorServiceIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':authenticator'][':service_id'][':account']['$patch']
      >,
    ) {
      return parseResponse(
        client[':authenticator'][':service_id'][':account'].$patch(args, options),
      )
    },
  })
}

export function createPatchAuthenticatorServiceIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client)[':authenticator'][':service_id'][':account']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthenticatorServiceIdAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthenticatorServiceIdAccountStatusQueryKey(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':authenticator', '/:authenticator/:service_id/:account/status', keyArgs] as const
}

export function getAuthenticatorServiceIdAccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':authenticator'][':service_id'][':account']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthenticatorServiceIdAccountStatusQueryKey>
  >({
    queryKey: getAuthenticatorServiceIdAccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':authenticator'][':service_id'][':account'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthenticatorServiceIdAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':authenticator'][':service_id'][':account']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':authenticator'][':service_id'][':account']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAuthenticatorServiceIdAccountStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthenticatorServiceIdAccountStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
