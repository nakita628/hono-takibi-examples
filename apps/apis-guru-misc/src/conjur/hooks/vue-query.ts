import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.authenticators.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authenticators', '/authenticators', keyArgs] as const
}

export function getAuthenticatorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authenticators.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authenticators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authenticators.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
          >,
          ReturnType<typeof getAuthenticatorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authenticators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authenticators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthnAzureServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnAzureServiceIdAccountLoginAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnGcpAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnGcpAccountAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthnGcpAccountStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authn-gcp', '/authn-gcp/:account/status', keyArgs] as const
}

export function getAuthnGcpAccountStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthnGcpAccountStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['authn-gcp'][':account'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthnGcpAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-gcp'][':account']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authn-gcp'][':account']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthnGcpAccountStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthnGcpAccountStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['authn-gcp'][':account'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthnIamServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnIamServiceIdAccountLoginAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnJwtServiceIdAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnJwtServiceIdAccountAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnJwtServiceIdAccountIdAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnJwtServiceIdAccountIdAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnK8sServiceIdInjectClientCert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnK8sServiceIdInjectClientCertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnK8sServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnK8sServiceIdAccountLoginAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthnLdapServiceIdAccountLoginQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authn-ldap', '/authn-ldap/:service_id/:account/login', keyArgs] as const
}

export function getAuthnLdapServiceIdAccountLoginQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthnLdapServiceIdAccountLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['authn-ldap'][':service_id'][':account'].login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthnLdapServiceIdAccountLogin<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authn-ldap'][':service_id'][':account']['login']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAuthnLdapServiceIdAccountLoginQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthnLdapServiceIdAccountLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['authn-ldap'][':service_id'][':account'].login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthnLdapServiceIdAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnLdapServiceIdAccountLoginAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnOidcServiceIdAccountAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnOidcServiceIdAccountAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAuthnAccountApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthnAccountApiKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthnAccountLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authn)[':account']['login']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authn', '/authn/:account/login', keyArgs] as const
}

export function getAuthnAccountLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authn)[':account']['login']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthnAccountLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authn[':account'].login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthnAccountLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authn)[':account']['login']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authn)[':account']['login']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthnAccountLoginQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthnAccountLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authn[':account'].login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAuthnAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthnAccountPasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthnAccountLoginAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthnAccountLoginAuthenticateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCaAccountServiceIdSign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCaAccountServiceIdSignMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHostFactoriesHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.host_factories.hosts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.host_factories.hosts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHostFactoriesHostsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostHostFactoryTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.host_factory_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.host_factory_tokens.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHostFactoryTokensMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteHostFactoryTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHostFactoryTokensTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInfoQueryKey() {
  return ['info', '/info'] as const
}

export function getInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          ReturnType<typeof getInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPoliciesAccountPolicyIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPoliciesAccountPolicyIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPoliciesAccountPolicyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPoliciesAccountPolicyIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPublicKeysAccountKindIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['public_keys', '/public_keys/:account/:kind/:identifier', keyArgs] as const
}

export function getPublicKeysAccountKindIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicKeysAccountKindIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public_keys[':account'][':kind'][':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicKeysAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public_keys)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getPublicKeysAccountKindIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicKeysAccountKindIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public_keys[':account'][':kind'][':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRemoteHealthRemoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.remote_health)[':remote']['$get']>>,
) {
  return ['remote_health', '/remote_health/:remote', toValue(args)] as const
}

export function getRemoteHealthRemoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.remote_health)[':remote']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRemoteHealthRemoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.remote_health[':remote'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRemoteHealthRemote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.remote_health)[':remote']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRemoteHealthRemoteQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remote_health)[':remote']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemoteHealthRemoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRemoteHealthRemoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.remote_health[':remote'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources', keyArgs] as const
}

export function getResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          ReturnType<typeof getResourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources/:account', keyArgs] as const
}

export function getResourcesAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':account'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':account'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesAccountKindQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources/:account/:kind', keyArgs] as const
}

export function getResourcesAccountKindQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesAccountKindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':account'][':kind'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesAccountKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':account'][':kind']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':account'][':kind']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesAccountKindQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesAccountKindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':account'][':kind'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesAccountKindIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources/:account/:kind/:identifier', keyArgs] as const
}

export function getResourcesAccountKindIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesAccountKindIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':account'][':kind'][':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesAccountKindIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesAccountKindIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':account'][':kind'][':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRolesAccountKindIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['roles', '/roles/:account/:kind/:identifier', keyArgs] as const
}

export function getRolesAccountKindIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesAccountKindIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':account'][':kind'][':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRolesAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.roles)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRolesAccountKindIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesAccountKindIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':account'][':kind'][':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRolesAccountKindIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesAccountKindIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteRolesAccountKindIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRolesAccountKindIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['secrets', '/secrets', keyArgs] as const
}

export function getSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          ReturnType<typeof getSecretsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecretsAccountKindIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['secrets', '/secrets/:account/:kind/:identifier', keyArgs] as const
}

export function getSecretsAccountKindIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsAccountKindIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets[':account'][':kind'][':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsAccountKindIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)[':account'][':kind'][':identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSecretsAccountKindIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsAccountKindIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets[':account'][':kind'][':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSecretsAccountKindIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsAccountKindIdentifierMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWhoamiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whoami.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['whoami', '/whoami', keyArgs] as const
}

export function getWhoamiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whoami.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhoamiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whoami.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWhoami<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whoami.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
          ReturnType<typeof getWhoamiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWhoamiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhoamiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whoami.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAuthenticatorAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthenticatorAccountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAuthenticatorServiceIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthenticatorServiceIdAccountMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthenticatorServiceIdAccountStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':authenticator', '/:authenticator/:service_id/:account/status', keyArgs] as const
}

export function getAuthenticatorServiceIdAccountStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticatorServiceIdAccountStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':authenticator'][':service_id'][':account'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticatorServiceIdAccountStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':authenticator'][':service_id'][':account']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAuthenticatorServiceIdAccountStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticatorServiceIdAccountStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':authenticator'][':service_id'][':account'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
