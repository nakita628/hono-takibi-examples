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

export function getActorTokensKey() {
  return ['actor_tokens'] as const
}

export function getAdminPortalLinkTokensKey() {
  return ['admin_portal_link_tokens'] as const
}

export function getAllowlistIdentifiersKey() {
  return ['allowlist_identifiers'] as const
}

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getBetaFeaturesKey() {
  return ['beta_features'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getBlocklistIdentifiersKey() {
  return ['blocklist_identifiers'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getEmailAddressesKey() {
  return ['email_addresses'] as const
}

export function getEnterpriseConnectionsKey() {
  return ['enterprise_connections'] as const
}

export function getInstanceKey() {
  return ['instance'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getJwksKey() {
  return ['jwks'] as const
}

export function getJwtTemplatesKey() {
  return ['jwt_templates'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getM2mTokensKey() {
  return ['m2m_tokens'] as const
}

export function getMachinesKey() {
  return ['machines'] as const
}

export function getOauthApplicationsKey() {
  return ['oauth_applications'] as const
}

export function getOrganizationDomainsKey() {
  return ['organization_domains'] as const
}

export function getOrganizationInvitationsKey() {
  return ['organization_invitations'] as const
}

export function getOrganizationMembershipsKey() {
  return ['organization_memberships'] as const
}

export function getOrganizationPermissionsKey() {
  return ['organization_permissions'] as const
}

export function getOrganizationRolesKey() {
  return ['organization_roles'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPhoneNumbersKey() {
  return ['phone_numbers'] as const
}

export function getProxyChecksKey() {
  return ['proxy_checks'] as const
}

export function getPublicKey() {
  return ['public'] as const
}

export function getRedirectUrlsKey() {
  return ['redirect_urls'] as const
}

export function getRoleSetsKey() {
  return ['role_sets'] as const
}

export function getSamlConnectionsKey() {
  return ['saml_connections'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getSignInTokensKey() {
  return ['sign_in_tokens'] as const
}

export function getSignUpsKey() {
  return ['sign_ups'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getTestingTokensKey() {
  return ['testing_tokens'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWaitlistEntriesKey() {
  return ['waitlist_entries'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getPublicInterstitialQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.interstitial.$get>>,
) {
  return ['public', '/public/interstitial', toValue(args)] as const
}

export function getPublicInterstitialQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.interstitial.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicInterstitialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.interstitial.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicInterstitial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.interstitial.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
            >
          >,
          ReturnType<typeof getPublicInterstitialQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicInterstitialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicInterstitialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.interstitial.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJwksQueryKey() {
  return ['jwks', '/jwks'] as const
}

export function getJwksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJwksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jwks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJwks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
          ReturnType<typeof getJwksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJwksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJwksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.jwks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
) {
  return ['clients', '/clients', toValue(args)] as const
}

export function getClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          ReturnType<typeof getClientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientsVerifyMutationKey() {
  return ['clients', '/clients/verify', 'POST'] as const
}

export function getPostClientsVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clients.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clients.verify.$post>) {
      return parseResponse(client.clients.verify.$post(args, options))
    },
  })
}

export function usePostClientsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clients.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.clients.verify.$post>,
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
  const mutationDefaults = getPostClientsVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getClientsClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client_id']['$get']>>,
) {
  return ['clients', '/clients/:client_id', toValue(args)] as const
}

export function getClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':client_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClientsClientIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':client_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientsClientIdRevokeMutationKey() {
  return ['clients', '/clients/:client_id/revoke', 'POST'] as const
}

export function getPostClientsClientIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':client_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsClientIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.clients[':client_id'].revoke.$post(args, options))
    },
  })
}

export function usePostClientsClientIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_id']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostClientsClientIdRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmailAddressesMutationKey() {
  return ['email_addresses', '/email_addresses', 'POST'] as const
}

export function getPostEmailAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email_addresses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email_addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email_addresses.$post>) {
      return parseResponse(client.email_addresses.$post(args, options))
    },
  })
}

export function usePostEmailAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email_addresses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.email_addresses.$post>,
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
  const mutationDefaults = getPostEmailAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getEmailAddressesEmailAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>
  >,
) {
  return ['email_addresses', '/email_addresses/:email_address_id', toValue(args)] as const
}

export function getEmailAddressesEmailAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailAddressesEmailAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.email_addresses[':email_address_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailAddressesEmailAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailAddressesEmailAddressIdQueryKey>
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
          Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailAddressesEmailAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailAddressesEmailAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.email_addresses[':email_address_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEmailAddressesEmailAddressIdMutationKey() {
  return ['email_addresses', '/email_addresses/:email_address_id', 'DELETE'] as const
}

export function getDeleteEmailAddressesEmailAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailAddressesEmailAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>,
    ) {
      return parseResponse(client.email_addresses[':email_address_id'].$delete(args, options))
    },
  })
}

export function useDeleteEmailAddressesEmailAddressId<
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
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>,
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
  const mutationDefaults = getDeleteEmailAddressesEmailAddressIdMutationOptions<
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

export function getPatchEmailAddressesEmailAddressIdMutationKey() {
  return ['email_addresses', '/email_addresses/:email_address_id', 'PATCH'] as const
}

export function getPatchEmailAddressesEmailAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmailAddressesEmailAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>,
    ) {
      return parseResponse(client.email_addresses[':email_address_id'].$patch(args, options))
    },
  })
}

export function usePatchEmailAddressesEmailAddressId<
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
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>,
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
  const mutationDefaults = getPatchEmailAddressesEmailAddressIdMutationOptions<
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

export function getPostEmailAddressesEmailAddressIdPrepareVerificationMutationKey() {
  return [
    'email_addresses',
    '/email_addresses/:email_address_id/prepare_verification',
    'POST',
  ] as const
}

export function getPostEmailAddressesEmailAddressIdPrepareVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmailAddressesEmailAddressIdPrepareVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.email_addresses[':email_address_id'].prepare_verification.$post(args, options),
      )
    },
  })
}

export function usePostEmailAddressesEmailAddressIdPrepareVerification<
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
                    (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
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
  const mutationDefaults = getPostEmailAddressesEmailAddressIdPrepareVerificationMutationOptions<
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

export function getPostEmailAddressesEmailAddressIdAttemptVerificationMutationKey() {
  return [
    'email_addresses',
    '/email_addresses/:email_address_id/attempt_verification',
    'POST',
  ] as const
}

export function getPostEmailAddressesEmailAddressIdAttemptVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmailAddressesEmailAddressIdAttemptVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.email_addresses[':email_address_id'].attempt_verification.$post(args, options),
      )
    },
  })
}

export function usePostEmailAddressesEmailAddressIdAttemptVerification<
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
                    (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
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
  const mutationDefaults = getPostEmailAddressesEmailAddressIdAttemptVerificationMutationOptions<
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

export function getPutUsersUserIdEmailAddressMutationKey() {
  return ['users', '/users/:user_id/email_address', 'PUT'] as const
}

export function getPutUsersUserIdEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].email_address.$put(args, options))
    },
  })
}

export function usePutUsersUserIdEmailAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['email_address']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdEmailAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostPhoneNumbersMutationKey() {
  return ['phone_numbers', '/phone_numbers', 'POST'] as const
}

export function getPostPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone_numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone_numbers.$post>) {
      return parseResponse(client.phone_numbers.$post(args, options))
    },
  })
}

export function usePostPhoneNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.phone_numbers.$post>,
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
  const mutationDefaults = getPostPhoneNumbersMutationOptions<TError, TOnMutateResult>(
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

export function getPhoneNumbersPhoneNumberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>
  >,
) {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', toValue(args)] as const
}

export function getPhoneNumbersPhoneNumberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersPhoneNumberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone_numbers[':phone_number_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbersPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumbersPhoneNumberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersPhoneNumberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersPhoneNumberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone_numbers[':phone_number_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePhoneNumbersPhoneNumberIdMutationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', 'DELETE'] as const
}

export function getDeletePhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>,
    ) {
      return parseResponse(client.phone_numbers[':phone_number_id'].$delete(args, options))
    },
  })
}

export function useDeletePhoneNumbersPhoneNumberId<
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
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>,
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
  const mutationDefaults = getDeletePhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPatchPhoneNumbersPhoneNumberIdMutationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', 'PATCH'] as const
}

export function getPatchPhoneNumbersPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumbersPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>,
    ) {
      return parseResponse(client.phone_numbers[':phone_number_id'].$patch(args, options))
    },
  })
}

export function usePatchPhoneNumbersPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>,
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
  const mutationDefaults = getPatchPhoneNumbersPhoneNumberIdMutationOptions<
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

export function getPostPhoneNumbersPhoneNumberIdPrepareVerificationMutationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id/prepare_verification', 'POST'] as const
}

export function getPostPhoneNumbersPhoneNumberIdPrepareVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersPhoneNumberIdPrepareVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.phone_numbers[':phone_number_id'].prepare_verification.$post(args, options),
      )
    },
  })
}

export function usePostPhoneNumbersPhoneNumberIdPrepareVerification<
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
                    (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
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
  const mutationDefaults = getPostPhoneNumbersPhoneNumberIdPrepareVerificationMutationOptions<
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

export function getPostPhoneNumbersPhoneNumberIdAttemptVerificationMutationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id/attempt_verification', 'POST'] as const
}

export function getPostPhoneNumbersPhoneNumberIdAttemptVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumbersPhoneNumberIdAttemptVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.phone_numbers[':phone_number_id'].attempt_verification.$post(args, options),
      )
    },
  })
}

export function usePostPhoneNumbersPhoneNumberIdAttemptVerification<
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
                    (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
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
  const mutationDefaults = getPostPhoneNumbersPhoneNumberIdAttemptVerificationMutationOptions<
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

export function getPutUsersUserIdPhoneNumberMutationKey() {
  return ['users', '/users/:user_id/phone_number', 'PUT'] as const
}

export function getPutUsersUserIdPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['phone_number']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdPhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].phone_number.$put(args, options))
    },
  })
}

export function usePutUsersUserIdPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['phone_number']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdPhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
) {
  return ['sessions', '/sessions', toValue(args)] as const
}

export function getSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          ReturnType<typeof getSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function usePostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$post>,
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
  const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
) {
  return ['sessions', '/sessions/:session_id', toValue(args)] as const
}

export function getSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions[':session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionsSessionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions[':session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSessionsSessionIdMutationKey() {
  return ['sessions', '/sessions/:session_id', 'PATCH'] as const
}

export function getPatchSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSessionsSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':session_id']['$patch']>) {
      return parseResponse(client.sessions[':session_id'].$patch(args, options))
    },
  })
}

export function usePatchSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':session_id']['$patch']>,
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
  const mutationDefaults = getPatchSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdRefreshMutationKey() {
  return ['sessions', '/sessions/:session_id/refresh', 'POST'] as const
}

export function getPostSessionsSessionIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>,
    ) {
      return parseResponse(client.sessions[':session_id'].refresh.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['refresh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getSessionsSessionIdReverificationsReverificationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
    >
  >,
) {
  return [
    'sessions',
    '/sessions/:session_id/reverifications/:reverification_id',
    toValue(args),
  ] as const
}

export function getSessionsSessionIdReverificationsReverificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsSessionIdReverificationsReverificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions[':session_id'].reverifications[':reverification_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsSessionIdReverificationsReverificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
    >
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
                    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
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
                    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSessionsSessionIdReverificationsReverificationIdQueryKey>
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
              (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdReverificationsReverificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsSessionIdReverificationsReverificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions[':session_id'].reverifications[':reverification_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionsSessionIdRevokeMutationKey() {
  return ['sessions', '/sessions/:session_id/revoke', 'POST'] as const
}

export function getPostSessionsSessionIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.sessions[':session_id'].revoke.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdTokensMutationKey() {
  return ['sessions', '/sessions/:session_id/tokens', 'POST'] as const
}

export function getPostSessionsSessionIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']>,
    ) {
      return parseResponse(client.sessions[':session_id'].tokens.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdTokensTemplateNameMutationKey() {
  return ['sessions', '/sessions/:session_id/tokens/:template_name', 'POST'] as const
}

export function getPostSessionsSessionIdTokensTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdTokensTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']
      >,
    ) {
      return parseResponse(
        client.sessions[':session_id'].tokens[':template_name'].$post(args, options),
      )
    },
  })
}

export function usePostSessionsSessionIdTokensTemplateName<
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
                    (typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']
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
  const mutationDefaults = getPostSessionsSessionIdTokensTemplateNameMutationOptions<
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

export function getTemplatesTemplateTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_type']['$get']>>,
) {
  return ['templates', '/templates/:template_type', toValue(args)] as const
}

export function getTemplatesTemplateTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':template_type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesTemplateTypeSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>
  >,
) {
  return ['templates', '/templates/:template_type/:slug', toValue(args)] as const
}

export function getTemplatesTemplateTypeSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateTypeSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':template_type'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateTypeSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesTemplateTypeSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateTypeSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateTypeSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':template_type'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTemplatesTemplateTypeSlugMutationKey() {
  return ['templates', '/templates/:template_type/:slug', 'PUT'] as const
}

export function getPutTemplatesTemplateTypeSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesTemplateTypeSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>,
    ) {
      return parseResponse(client.templates[':template_type'][':slug'].$put(args, options))
    },
  })
}

export function usePutTemplatesTemplateTypeSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>,
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
  const mutationDefaults = getPutTemplatesTemplateTypeSlugMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateTypeSlugRevertMutationKey() {
  return ['templates', '/templates/:template_type/:slug/revert', 'POST'] as const
}

export function getPostTemplatesTemplateTypeSlugRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateTypeSlugRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_type'][':slug']['revert']['$post']
      >,
    ) {
      return parseResponse(client.templates[':template_type'][':slug'].revert.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateTypeSlugRevert<
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
                    (typeof client.templates)[':template_type'][':slug']['revert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>,
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
  const mutationDefaults = getPostTemplatesTemplateTypeSlugRevertMutationOptions<
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

export function getPostTemplatesTemplateTypeSlugPreviewMutationKey() {
  return ['templates', '/templates/:template_type/:slug/preview', 'POST'] as const
}

export function getPostTemplatesTemplateTypeSlugPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.templates)[':template_type'][':slug']['preview']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateTypeSlugPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_type'][':slug']['preview']['$post']
      >,
    ) {
      return parseResponse(client.templates[':template_type'][':slug'].preview.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateTypeSlugPreview<
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
                    (typeof client.templates)[':template_type'][':slug']['preview']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_type'][':slug']['preview']['$post']
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
  const mutationDefaults = getPostTemplatesTemplateTypeSlugPreviewMutationOptions<
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

export function getPostTemplatesTemplateTypeSlugToggleDeliveryMutationKey() {
  return ['templates', '/templates/:template_type/:slug/toggle_delivery', 'POST'] as const
}

export function getPostTemplatesTemplateTypeSlugToggleDeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateTypeSlugToggleDeliveryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
      >,
    ) {
      return parseResponse(
        client.templates[':template_type'][':slug'].toggle_delivery.$post(args, options),
      )
    },
  })
}

export function usePostTemplatesTemplateTypeSlugToggleDelivery<
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
                    (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
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
  const mutationDefaults = getPostTemplatesTemplateTypeSlugToggleDeliveryMutationOptions<
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.count.$get>>,
) {
  return ['users', '/users/count', toValue(args)] as const
}

export function getUsersCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.count.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
          >,
          ReturnType<typeof getUsersCountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$delete']>) {
      return parseResponse(client.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$patch']>) {
      return parseResponse(client.users[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdBanMutationKey() {
  return ['users', '/users/:user_id/ban', 'POST'] as const
}

export function getPostUsersUserIdBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['ban']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['ban']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdBanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['ban']['$post']>) {
      return parseResponse(client.users[':user_id'].ban.$post(args, options))
    },
  })
}

export function usePostUsersUserIdBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['ban']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['ban']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdBanMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdUnbanMutationKey() {
  return ['users', '/users/:user_id/unban', 'POST'] as const
}

export function getPostUsersUserIdUnbanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['unban']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['unban']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdUnbanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['unban']['$post']>) {
      return parseResponse(client.users[':user_id'].unban.$post(args, options))
    },
  })
}

export function usePostUsersUserIdUnban<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['unban']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['unban']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdUnbanMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersBanMutationKey() {
  return ['users', '/users/ban', 'POST'] as const
}

export function getPostUsersBanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ban.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.ban.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersBanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.ban.$post>) {
      return parseResponse(client.users.ban.$post(args, options))
    },
  })
}

export function usePostUsersBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ban.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.ban.$post>,
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
  const mutationDefaults = getPostUsersBanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersUnbanMutationKey() {
  return ['users', '/users/unban', 'POST'] as const
}

export function getPostUsersUnbanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.unban.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.unban.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUnbanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.unban.$post>) {
      return parseResponse(client.users.unban.$post(args, options))
    },
  })
}

export function usePostUsersUnban<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.unban.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.unban.$post>,
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
  const mutationDefaults = getPostUsersUnbanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersUserIdLockMutationKey() {
  return ['users', '/users/:user_id/lock', 'POST'] as const
}

export function getPostUsersUserIdLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['lock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['lock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdLockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['lock']['$post']>) {
      return parseResponse(client.users[':user_id'].lock.$post(args, options))
    },
  })
}

export function usePostUsersUserIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['lock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['lock']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdLockMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdUnlockMutationKey() {
  return ['users', '/users/:user_id/unlock', 'POST'] as const
}

export function getPostUsersUserIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['unlock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdUnlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']>) {
      return parseResponse(client.users[':user_id'].unlock.$post(args, options))
    },
  })
}

export function usePostUsersUserIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['unlock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdUnlockMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdMergeMutationKey() {
  return ['users', '/users/:user_id/merge', 'POST'] as const
}

export function getPostUsersUserIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdMergeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['merge']['$post']>) {
      return parseResponse(client.users[':user_id'].merge.$post(args, options))
    },
  })
}

export function usePostUsersUserIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['merge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['merge']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdMergeMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdProfileImageMutationKey() {
  return ['users', '/users/:user_id/profile_image', 'POST'] as const
}

export function getPostUsersUserIdProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdProfileImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].profile_image.$post(args, options))
    },
  })
}

export function usePostUsersUserIdProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdProfileImageMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdProfileImageMutationKey() {
  return ['users', '/users/:user_id/profile_image', 'DELETE'] as const
}

export function getDeleteUsersUserIdProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdProfileImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].profile_image.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdProfileImageMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersUserIdMetadataMutationKey() {
  return ['users', '/users/:user_id/metadata', 'PUT'] as const
}

export function getPutUsersUserIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']>,
    ) {
      return parseResponse(client.users[':user_id'].metadata.$put(args, options))
    },
  })
}

export function usePutUsersUserIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMetadataMutationKey() {
  return ['users', '/users/:user_id/metadata', 'PATCH'] as const
}

export function getPatchUsersUserIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']>,
    ) {
      return parseResponse(client.users[':user_id'].metadata.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdBillingSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
  >,
) {
  return ['users', '/users/:user_id/billing/subscription', toValue(args)] as const
}

export function getUsersUserIdBillingSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdBillingSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].billing.subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdBillingSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdBillingSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdBillingSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdBillingSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].billing.subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdBillingCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>
  >,
) {
  return ['users', '/users/:user_id/billing/credits', toValue(args)] as const
}

export function getUsersUserIdBillingCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdBillingCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].billing.credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdBillingCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdBillingCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdBillingCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].billing.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdBillingCreditsMutationKey() {
  return ['users', '/users/:user_id/billing/credits', 'POST'] as const
}

export function getPostUsersUserIdBillingCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdBillingCreditsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].billing.credits.$post(args, options))
    },
  })
}

export function usePostUsersUserIdBillingCredits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdBillingCreditsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdOauthAccessTokensProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']>
  >,
) {
  return ['users', '/users/:user_id/oauth_access_tokens/:provider', toValue(args)] as const
}

export function getUsersUserIdOauthAccessTokensProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOauthAccessTokensProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].oauth_access_tokens[':provider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdOauthAccessTokensProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']>
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
                    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
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
                    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOauthAccessTokensProviderQueryKey>
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
              (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOauthAccessTokensProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOauthAccessTokensProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].oauth_access_tokens[':provider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdOrganizationMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
  >,
) {
  return ['users', '/users/:user_id/organization_memberships', toValue(args)] as const
}

export function getUsersUserIdOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOrganizationMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].organization_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOrganizationMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOrganizationMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOrganizationMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].organization_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdOrganizationInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
  >,
) {
  return ['users', '/users/:user_id/organization_invitations', toValue(args)] as const
}

export function getUsersUserIdOrganizationInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOrganizationInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].organization_invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdOrganizationInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
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
                  ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOrganizationInvitationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOrganizationInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOrganizationInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].organization_invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdRemovePasswordMutationKey() {
  return ['users', '/users/:user_id/remove_password', 'POST'] as const
}

export function getPostUsersUserIdRemovePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['remove_password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdRemovePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].remove_password.$post(args, options))
    },
  })
}

export function usePostUsersUserIdRemovePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['remove_password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdRemovePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdVerifyPasswordMutationKey() {
  return ['users', '/users/:user_id/verify_password', 'POST'] as const
}

export function getPostUsersUserIdVerifyPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['verify_password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdVerifyPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].verify_password.$post(args, options))
    },
  })
}

export function usePostUsersUserIdVerifyPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['verify_password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdVerifyPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdVerifyTotpMutationKey() {
  return ['users', '/users/:user_id/verify_totp', 'POST'] as const
}

export function getPostUsersUserIdVerifyTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['verify_totp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdVerifyTotpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].verify_totp.$post(args, options))
    },
  })
}

export function usePostUsersUserIdVerifyTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['verify_totp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdVerifyTotpMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdMfaMutationKey() {
  return ['users', '/users/:user_id/mfa', 'DELETE'] as const
}

export function getDeleteUsersUserIdMfaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['mfa']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMfaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']>) {
      return parseResponse(client.users[':user_id'].mfa.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['mfa']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMfaMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdBackupCodeMutationKey() {
  return ['users', '/users/:user_id/backup_code', 'DELETE'] as const
}

export function getDeleteUsersUserIdBackupCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['backup_code']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdBackupCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].backup_code.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdBackupCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['backup_code']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdBackupCodeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdPasskeysPasskeyIdentificationIdMutationKey() {
  return ['users', '/users/:user_id/passkeys/:passkey_identification_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdPasskeysPasskeyIdentificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdPasskeysPasskeyIdentificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].passkeys[':passkey_identification_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdPasskeysPasskeyIdentificationId<
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
                    (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdPasskeysPasskeyIdentificationIdMutationOptions<
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

export function getUsersUserIdTrustedDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>
  >,
) {
  return ['users', '/users/:user_id/trusted_devices', toValue(args)] as const
}

export function getUsersUserIdTrustedDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTrustedDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].trusted_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTrustedDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTrustedDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTrustedDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTrustedDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].trusted_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdMutationKey() {
  return ['users', '/users/:user_id/trusted_devices/:trusted_device_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].trusted_devices[':trusted_device_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdTrustedDevicesTrustedDeviceId<
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
                    (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdMutationOptions<
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

export function getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdMutationKey() {
  return ['users', '/users/:user_id/web3_wallets/:web3_wallet_identification_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].web3_wallets[':web3_wallet_identification_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationId<
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
                    (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdMutationOptions<
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

export function getDeleteUsersUserIdTotpMutationKey() {
  return ['users', '/users/:user_id/totp', 'DELETE'] as const
}

export function getDeleteUsersUserIdTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['totp']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdTotpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']>) {
      return parseResponse(client.users[':user_id'].totp.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['totp']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdTotpMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdExternalAccountsExternalAccountIdMutationKey() {
  return ['users', '/users/:user_id/external_accounts/:external_account_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdExternalAccountsExternalAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdExternalAccountsExternalAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':user_id'].external_accounts[':external_account_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdExternalAccountsExternalAccountId<
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
                    (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdExternalAccountsExternalAccountIdMutationOptions<
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

export function getInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
) {
  return ['invitations', '/invitations', toValue(args)] as const
}

export function getInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invitations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          ReturnType<typeof getInvitationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInvitationsMutationKey() {
  return ['invitations', '/invitations', 'POST'] as const
}

export function getPostInvitationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>>,
    TError,
    InferRequestType<typeof client.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.$post>) {
      return parseResponse(client.invitations.$post(args, options))
    },
  })
}

export function usePostInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invitations.$post>,
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
  const mutationDefaults = getPostInvitationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvitationsBulkMutationKey() {
  return ['invitations', '/invitations/bulk', 'POST'] as const
}

export function getPostInvitationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.bulk.$post>) {
      return parseResponse(client.invitations.bulk.$post(args, options))
    },
  })
}

export function usePostInvitationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invitations.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invitations.bulk.$post>,
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
  const mutationDefaults = getPostInvitationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInvitationsInvitationIdMutationKey() {
  return ['invitations', '/invitations/:invitation_id', 'DELETE'] as const
}

export function getDeleteInvitationsInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitationsInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>,
    ) {
      return parseResponse(client.invitations[':invitation_id'].$delete(args, options))
    },
  })
}

export function useDeleteInvitationsInvitationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>,
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
  const mutationDefaults = getDeleteInvitationsInvitationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitationsInvitationIdRevokeMutationKey() {
  return ['invitations', '/invitations/:invitation_id/revoke', 'POST'] as const
}

export function getPostInvitationsInvitationIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsInvitationIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.invitations[':invitation_id'].revoke.$post(args, options))
    },
  })
}

export function usePostInvitationsInvitationIdRevoke<
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
                  ReturnType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostInvitationsInvitationIdRevokeMutationOptions<
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

export function getOrganizationInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_invitations.$get>>,
) {
  return ['organization_invitations', '/organization_invitations', toValue(args)] as const
}

export function getOrganizationInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationInvitationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAllowlistIdentifiersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allowlist_identifiers.$get>>,
) {
  return ['allowlist_identifiers', '/allowlist_identifiers', toValue(args)] as const
}

export function getAllowlistIdentifiersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allowlist_identifiers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAllowlistIdentifiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.allowlist_identifiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAllowlistIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allowlist_identifiers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
            >
          >,
          ReturnType<typeof getAllowlistIdentifiersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllowlistIdentifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAllowlistIdentifiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.allowlist_identifiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAllowlistIdentifiersMutationKey() {
  return ['allowlist_identifiers', '/allowlist_identifiers', 'POST'] as const
}

export function getPostAllowlistIdentifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.allowlist_identifiers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAllowlistIdentifiersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.allowlist_identifiers.$post>) {
      return parseResponse(client.allowlist_identifiers.$post(args, options))
    },
  })
}

export function usePostAllowlistIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.allowlist_identifiers.$post>,
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
  const mutationDefaults = getPostAllowlistIdentifiersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAllowlistIdentifiersIdentifierIdMutationKey() {
  return ['allowlist_identifiers', '/allowlist_identifiers/:identifier_id', 'DELETE'] as const
}

export function getDeleteAllowlistIdentifiersIdentifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAllowlistIdentifiersIdentifierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>,
    ) {
      return parseResponse(client.allowlist_identifiers[':identifier_id'].$delete(args, options))
    },
  })
}

export function useDeleteAllowlistIdentifiersIdentifierId<
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
                  ReturnType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>,
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
  const mutationDefaults = getDeleteAllowlistIdentifiersIdentifierIdMutationOptions<
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

export function getBlocklistIdentifiersQueryKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers'] as const
}

export function getBlocklistIdentifiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBlocklistIdentifiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocklist_identifiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocklistIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
            >
          >,
          ReturnType<typeof getBlocklistIdentifiersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistIdentifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBlocklistIdentifiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.blocklist_identifiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBlocklistIdentifiersMutationKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers', 'POST'] as const
}

export function getPostBlocklistIdentifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.blocklist_identifiers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistIdentifiersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist_identifiers.$post>) {
      return parseResponse(client.blocklist_identifiers.$post(args, options))
    },
  })
}

export function usePostBlocklistIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist_identifiers.$post>,
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
  const mutationDefaults = getPostBlocklistIdentifiersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBlocklistIdentifiersIdentifierIdMutationKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers/:identifier_id', 'DELETE'] as const
}

export function getDeleteBlocklistIdentifiersIdentifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlocklistIdentifiersIdentifierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>,
    ) {
      return parseResponse(client.blocklist_identifiers[':identifier_id'].$delete(args, options))
    },
  })
}

export function useDeleteBlocklistIdentifiersIdentifierId<
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
                  ReturnType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>,
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
  const mutationDefaults = getDeleteBlocklistIdentifiersIdentifierIdMutationOptions<
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

export function getPatchBetaFeaturesInstanceSettingsMutationKey() {
  return ['beta_features', '/beta_features/instance_settings', 'PATCH'] as const
}

export function getPatchBetaFeaturesInstanceSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta_features.instance_settings.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta_features.instance_settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchBetaFeaturesInstanceSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta_features.instance_settings.$patch>) {
      return parseResponse(client.beta_features.instance_settings.$patch(args, options))
    },
  })
}

export function usePatchBetaFeaturesInstanceSettings<
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
                Awaited<ReturnType<typeof client.beta_features.instance_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta_features.instance_settings.$patch>,
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
  const mutationDefaults = getPatchBetaFeaturesInstanceSettingsMutationOptions<
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

export function getPutBetaFeaturesDomainMutationKey() {
  return ['beta_features', '/beta_features/domain', 'PUT'] as const
}

export function getPutBetaFeaturesDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta_features.domain.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.beta_features.domain.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBetaFeaturesDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta_features.domain.$put>) {
      return parseResponse(client.beta_features.domain.$put(args, options))
    },
  })
}

export function usePutBetaFeaturesDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta_features.domain.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta_features.domain.$put>,
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
  const mutationDefaults = getPutBetaFeaturesDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPostActorTokensMutationKey() {
  return ['actor_tokens', '/actor_tokens', 'POST'] as const
}

export function getPostActorTokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actor_tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.actor_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActorTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actor_tokens.$post>) {
      return parseResponse(client.actor_tokens.$post(args, options))
    },
  })
}

export function usePostActorTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actor_tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.actor_tokens.$post>,
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
  const mutationDefaults = getPostActorTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostActorTokensActorTokenIdRevokeMutationKey() {
  return ['actor_tokens', '/actor_tokens/:actor_token_id/revoke', 'POST'] as const
}

export function getPostActorTokensActorTokenIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActorTokensActorTokenIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.actor_tokens[':actor_token_id'].revoke.$post(args, options))
    },
  })
}

export function usePostActorTokensActorTokenIdRevoke<
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
                  ReturnType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostActorTokensActorTokenIdRevokeMutationOptions<
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

export function getDomainsQueryKey() {
  return ['domains', '/domains'] as const
}

export function getDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function usePostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
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
  const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>) {
      return parseResponse(client.domains[':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
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
  const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domain_id', 'PATCH'] as const
}

export function getPatchDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain_id']['$patch']>) {
      return parseResponse(client.domains[':domain_id'].$patch(args, options))
    },
  })
}

export function usePatchDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
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
  const mutationDefaults = getPatchDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceQueryKey() {
  return ['instance', '/instance'] as const
}

export function getInstanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
          >,
          ReturnType<typeof getInstanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInstanceMutationKey() {
  return ['instance', '/instance', 'PATCH'] as const
}

export function getPatchInstanceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.instance.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.$patch>) {
      return parseResponse(client.instance.$patch(args, options))
    },
  })
}

export function usePatchInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.instance.$patch>,
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
  const mutationDefaults = getPatchInstanceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchInstanceRestrictionsMutationKey() {
  return ['instance', '/instance/restrictions', 'PATCH'] as const
}

export function getPatchInstanceRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.restrictions.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.instance.restrictions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceRestrictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.restrictions.$patch>) {
      return parseResponse(client.instance.restrictions.$patch(args, options))
    },
  })
}

export function usePatchInstanceRestrictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.restrictions.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.restrictions.$patch>,
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
  const mutationDefaults = getPatchInstanceRestrictionsMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceProtectQueryKey() {
  return ['instance', '/instance/protect'] as const
}

export function getInstanceProtectQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceProtectQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.protect.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstanceProtect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>
            >
          >,
          ReturnType<typeof getInstanceProtectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceProtectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceProtectQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.protect.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInstanceProtectMutationKey() {
  return ['instance', '/instance/protect', 'PATCH'] as const
}

export function getPatchInstanceProtectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.instance.protect.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceProtectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.protect.$patch>) {
      return parseResponse(client.instance.protect.$patch(args, options))
    },
  })
}

export function usePatchInstanceProtect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.protect.$patch>,
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
  const mutationDefaults = getPatchInstanceProtectMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceCommunicationQueryKey() {
  return ['instance', '/instance/communication'] as const
}

export function getInstanceCommunicationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceCommunicationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.communication.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceCommunication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
            >
          >,
          ReturnType<typeof getInstanceCommunicationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceCommunicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceCommunicationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.communication.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInstanceCommunicationMutationKey() {
  return ['instance', '/instance/communication', 'PATCH'] as const
}

export function getPatchInstanceCommunicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.instance.communication.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceCommunicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.communication.$patch>) {
      return parseResponse(client.instance.communication.$patch(args, options))
    },
  })
}

export function usePatchInstanceCommunication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.communication.$patch>,
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
  const mutationDefaults = getPatchInstanceCommunicationMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceOauthApplicationSettingsQueryKey() {
  return ['instance', '/instance/oauth_application_settings'] as const
}

export function getInstanceOauthApplicationSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceOauthApplicationSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.oauth_application_settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceOauthApplicationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
              >
            >
          >,
          ReturnType<typeof getInstanceOauthApplicationSettingsQueryKey>
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
          Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceOauthApplicationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceOauthApplicationSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.oauth_application_settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInstanceOauthApplicationSettingsMutationKey() {
  return ['instance', '/instance/oauth_application_settings', 'PATCH'] as const
}

export function getPatchInstanceOauthApplicationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.oauth_application_settings.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.instance.oauth_application_settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceOauthApplicationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.instance.oauth_application_settings.$patch>,
    ) {
      return parseResponse(client.instance.oauth_application_settings.$patch(args, options))
    },
  })
}

export function usePatchInstanceOauthApplicationSettings<
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
                Awaited<ReturnType<typeof client.instance.oauth_application_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.instance.oauth_application_settings.$patch>,
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
  const mutationDefaults = getPatchInstanceOauthApplicationSettingsMutationOptions<
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

export function getPostInstanceChangeDomainMutationKey() {
  return ['instance', '/instance/change_domain', 'POST'] as const
}

export function getPostInstanceChangeDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.change_domain.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.instance.change_domain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceChangeDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.change_domain.$post>) {
      return parseResponse(client.instance.change_domain.$post(args, options))
    },
  })
}

export function usePostInstanceChangeDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.change_domain.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.change_domain.$post>,
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
  const mutationDefaults = getPostInstanceChangeDomainMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceOrganizationSettingsQueryKey() {
  return ['instance', '/instance/organization_settings'] as const
}

export function getInstanceOrganizationSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceOrganizationSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.organization_settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceOrganizationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.instance.organization_settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.instance.organization_settings.$get>>
              >
            >
          >,
          ReturnType<typeof getInstanceOrganizationSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceOrganizationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceOrganizationSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.organization_settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchInstanceOrganizationSettingsMutationKey() {
  return ['instance', '/instance/organization_settings', 'PATCH'] as const
}

export function getPatchInstanceOrganizationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.organization_settings.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.instance.organization_settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInstanceOrganizationSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.organization_settings.$patch>) {
      return parseResponse(client.instance.organization_settings.$patch(args, options))
    },
  })
}

export function usePatchInstanceOrganizationSettings<
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
                Awaited<ReturnType<typeof client.instance.organization_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.instance.organization_settings.$patch>,
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
  const mutationDefaults = getPatchInstanceOrganizationSettingsMutationOptions<
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

export function getPostWebhooksSvixMutationKey() {
  return ['webhooks', '/webhooks/svix', 'POST'] as const
}

export function getPostWebhooksSvixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksSvixMutationKey(),
    async mutationFn() {
      return parseResponse(client.webhooks.svix.$post(undefined, options))
    },
  })
}

export function usePostWebhooksSvix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostWebhooksSvixMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksSvixMutationKey() {
  return ['webhooks', '/webhooks/svix', 'DELETE'] as const
}

export function getDeleteWebhooksSvixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksSvixMutationKey(),
    async mutationFn() {
      return parseResponse(client.webhooks.svix.$delete(undefined, options))
    },
  })
}

export function useDeleteWebhooksSvix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteWebhooksSvixMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksSvixUrlMutationKey() {
  return ['webhooks', '/webhooks/svix_url', 'POST'] as const
}

export function getPostWebhooksSvixUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix_url.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksSvixUrlMutationKey(),
    async mutationFn() {
      return parseResponse(client.webhooks.svix_url.$post(undefined, options))
    },
  })
}

export function usePostWebhooksSvixUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix_url.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostWebhooksSvixUrlMutationOptions<TError, TOnMutateResult>(
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

export function getJwtTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jwt_templates.$get>>,
) {
  return ['jwt_templates', '/jwt_templates', toValue(args)] as const
}

export function getJwtTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jwt_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJwtTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jwt_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJwtTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jwt_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
          >,
          ReturnType<typeof getJwtTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJwtTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJwtTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jwt_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJwtTemplatesMutationKey() {
  return ['jwt_templates', '/jwt_templates', 'POST'] as const
}

export function getPostJwtTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.jwt_templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJwtTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jwt_templates.$post>) {
      return parseResponse(client.jwt_templates.$post(args, options))
    },
  })
}

export function usePostJwtTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.jwt_templates.$post>,
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
  const mutationDefaults = getPostJwtTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getJwtTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>>,
) {
  return ['jwt_templates', '/jwt_templates/:template_id', toValue(args)] as const
}

export function getJwtTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJwtTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jwt_templates[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJwtTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJwtTemplatesTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJwtTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJwtTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jwt_templates[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteJwtTemplatesTemplateIdMutationKey() {
  return ['jwt_templates', '/jwt_templates/:template_id', 'DELETE'] as const
}

export function getDeleteJwtTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJwtTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>,
    ) {
      return parseResponse(client.jwt_templates[':template_id'].$delete(args, options))
    },
  })
}

export function useDeleteJwtTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>,
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
  const mutationDefaults = getDeleteJwtTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchJwtTemplatesTemplateIdMutationKey() {
  return ['jwt_templates', '/jwt_templates/:template_id', 'PATCH'] as const
}

export function getPatchJwtTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchJwtTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']>,
    ) {
      return parseResponse(client.jwt_templates[':template_id'].$patch(args, options))
    },
  })
}

export function usePatchJwtTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']>,
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
  const mutationDefaults = getPatchJwtTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getMachinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.machines.$get>>,
) {
  return ['machines', '/machines', toValue(args)] as const
}

export function getMachinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.machines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMachinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.machines.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMachines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.machines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
          >,
          ReturnType<typeof getMachinesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMachinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMachinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.machines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMachinesMutationKey() {
  return ['machines', '/machines', 'POST'] as const
}

export function getPostMachinesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$post>>>>>,
    TError,
    InferRequestType<typeof client.machines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMachinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.machines.$post>) {
      return parseResponse(client.machines.$post(args, options))
    },
  })
}

export function usePostMachines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.machines.$post>,
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
  const mutationDefaults = getPostMachinesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMachinesMachineIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.machines)[':machine_id']['$get']>>,
) {
  return ['machines', '/machines/:machine_id', toValue(args)] as const
}

export function getMachinesMachineIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.machines)[':machine_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMachinesMachineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.machines[':machine_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMachinesMachineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.machines)[':machine_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMachinesMachineIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMachinesMachineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMachinesMachineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.machines[':machine_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMachinesMachineIdMutationKey() {
  return ['machines', '/machines/:machine_id', 'DELETE'] as const
}

export function getDeleteMachinesMachineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.machines)[':machine_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.machines)[':machine_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMachinesMachineIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.machines)[':machine_id']['$delete']>) {
      return parseResponse(client.machines[':machine_id'].$delete(args, options))
    },
  })
}

export function useDeleteMachinesMachineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.machines)[':machine_id']['$delete']>,
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
  const mutationDefaults = getDeleteMachinesMachineIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMachinesMachineIdMutationKey() {
  return ['machines', '/machines/:machine_id', 'PATCH'] as const
}

export function getPatchMachinesMachineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.machines)[':machine_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMachinesMachineIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.machines)[':machine_id']['$patch']>) {
      return parseResponse(client.machines[':machine_id'].$patch(args, options))
    },
  })
}

export function usePatchMachinesMachineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.machines)[':machine_id']['$patch']>,
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
  const mutationDefaults = getPatchMachinesMachineIdMutationOptions<TError, TOnMutateResult>(
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

export function getMachinesMachineIdSecretKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>
  >,
) {
  return ['machines', '/machines/:machine_id/secret_key', toValue(args)] as const
}

export function getMachinesMachineIdSecretKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMachinesMachineIdSecretKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.machines[':machine_id'].secret_key.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMachinesMachineIdSecretKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMachinesMachineIdSecretKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMachinesMachineIdSecretKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMachinesMachineIdSecretKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.machines[':machine_id'].secret_key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMachinesMachineIdSecretKeyRotateMutationKey() {
  return ['machines', '/machines/:machine_id/secret_key/rotate', 'POST'] as const
}

export function getPostMachinesMachineIdSecretKeyRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMachinesMachineIdSecretKeyRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']
      >,
    ) {
      return parseResponse(client.machines[':machine_id'].secret_key.rotate.$post(args, options))
    },
  })
}

export function usePostMachinesMachineIdSecretKeyRotate<
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
                    (typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']
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
  const mutationDefaults = getPostMachinesMachineIdSecretKeyRotateMutationOptions<
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

export function getPostMachinesMachineIdScopesMutationKey() {
  return ['machines', '/machines/:machine_id/scopes', 'POST'] as const
}

export function getPostMachinesMachineIdScopesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.machines)[':machine_id']['scopes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMachinesMachineIdScopesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']>,
    ) {
      return parseResponse(client.machines[':machine_id'].scopes.$post(args, options))
    },
  })
}

export function usePostMachinesMachineIdScopes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['scopes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']>,
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
  const mutationDefaults = getPostMachinesMachineIdScopesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMachinesMachineIdScopesOtherMachineIdMutationKey() {
  return ['machines', '/machines/:machine_id/scopes/:other_machine_id', 'DELETE'] as const
}

export function getDeleteMachinesMachineIdScopesOtherMachineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMachinesMachineIdScopesOtherMachineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.machines[':machine_id'].scopes[':other_machine_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMachinesMachineIdScopesOtherMachineId<
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
                    (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
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
  const mutationDefaults = getDeleteMachinesMachineIdScopesOtherMachineIdMutationOptions<
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

export function getOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
) {
  return ['organizations', '/organizations', toValue(args)] as const
}

export function getOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
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
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id', toValue(args)] as const
}

export function getOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationIdMutationKey() {
  return ['organizations', '/organizations/:organization_id', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdMutationKey() {
  return ['organizations', '/organizations/:organization_id', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].$patch(args, options))
    },
  })
}

export function usePatchOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdMutationOptions<
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

export function getPutOrganizationsOrganizationIdMetadataMutationKey() {
  return ['organizations', '/organizations/:organization_id/metadata', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].metadata.$put(args, options))
    },
  })
}

export function usePutOrganizationsOrganizationIdMetadata<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['metadata']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>,
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
  const mutationDefaults = getPutOrganizationsOrganizationIdMetadataMutationOptions<
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

export function getPatchOrganizationsOrganizationIdMetadataMutationKey() {
  return ['organizations', '/organizations/:organization_id/metadata', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['metadata']['$patch']
      >,
    ) {
      return parseResponse(client.organizations[':organization_id'].metadata.$patch(args, options))
    },
  })
}

export function usePatchOrganizationsOrganizationIdMetadata<
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
                    (typeof client.organizations)[':organization_id']['metadata']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdMetadataMutationOptions<
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

export function getPutOrganizationsOrganizationIdLogoMutationKey() {
  return ['organizations', '/organizations/:organization_id/logo', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['logo']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].logo.$put(args, options))
    },
  })
}

export function usePutOrganizationsOrganizationIdLogo<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['logo']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>,
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
  const mutationDefaults = getPutOrganizationsOrganizationIdLogoMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdLogoMutationKey() {
  return ['organizations', '/organizations/:organization_id/logo', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].logo.$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsOrganizationIdLogo<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['logo']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdLogoMutationOptions<
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

export function getOrganizationsOrganizationIdBillingSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/billing/subscription',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdBillingSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdBillingSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].billing.subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdBillingSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
    >
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
                    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
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
                    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdBillingSubscriptionQueryKey>
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
              (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdBillingSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdBillingSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].billing.subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdBillingCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/billing/credits',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdBillingCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdBillingCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].billing.credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
    >
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
                    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
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
                    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdBillingCreditsQueryKey>
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
              (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdBillingCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdBillingCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].billing.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdBillingCreditsMutationKey() {
  return ['organizations', '/organizations/:organization_id/billing/credits', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdBillingCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdBillingCreditsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].billing.credits.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdBillingCredits<
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
                    (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdBillingCreditsMutationOptions<
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

export function getOrganizationsOrganizationIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/invitations', toValue(args)] as const
}

export function getOrganizationsOrganizationIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
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
                    (typeof client.organizations)[':organization_id']['invitations']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdInvitationsMutationKey() {
  return ['organizations', '/organizations/:organization_id/invitations', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['invitations']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdInvitations<
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
                    (typeof client.organizations)[':organization_id']['invitations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['invitations']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsMutationOptions<
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

export function getPostOrganizationsOrganizationIdInvitationsBulkMutationKey() {
  return ['organizations', '/organizations/:organization_id/invitations/bulk', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdInvitationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInvitationsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.bulk.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdInvitationsBulk<
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
                    (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsBulkMutationOptions<
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

export function getOrganizationsOrganizationIdInvitationsPendingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/invitations/pending',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdInvitationsPendingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdInvitationsPendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.pending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInvitationsPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
    >
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
                    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsPendingQueryKey>
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
              (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInvitationsPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdInvitationsPendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].invitations.pending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/invitations/:invitation_id',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdInvitationsInvitationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].invitations[':invitation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
    >
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
                    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey>
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
              (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].invitations[':invitation_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/invitations/:invitation_id/revoke',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].invitations[':invitation_id'].revoke.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdInvitationsInvitationIdRevoke<
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
                    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeMutationOptions<
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

export function getOrganizationRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_roles.$get>>,
) {
  return ['organization_roles', '/organization_roles', toValue(args)] as const
}

export function getOrganizationRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationRolesMutationKey() {
  return ['organization_roles', '/organization_roles', 'POST'] as const
}

export function getPostOrganizationRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization_roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization_roles.$post>) {
      return parseResponse(client.organization_roles.$post(args, options))
    },
  })
}

export function usePostOrganizationRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization_roles.$post>,
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
  const mutationDefaults = getPostOrganizationRolesMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationRolesOrganizationRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>
  >,
) {
  return ['organization_roles', '/organization_roles/:organization_role_id', toValue(args)] as const
}

export function getOrganizationRolesOrganizationRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationRolesOrganizationRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_roles[':organization_role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationRolesOrganizationRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>
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
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationRolesOrganizationRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesOrganizationRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationRolesOrganizationRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_roles[':organization_role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationRolesOrganizationRoleIdMutationKey() {
  return ['organization_roles', '/organization_roles/:organization_role_id', 'DELETE'] as const
}

export function getDeleteOrganizationRolesOrganizationRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization_roles)[':organization_role_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationRolesOrganizationRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization_roles)[':organization_role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization_roles[':organization_role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationRolesOrganizationRoleId<
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
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationRolesOrganizationRoleIdMutationOptions<
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

export function getPatchOrganizationRolesOrganizationRoleIdMutationKey() {
  return ['organization_roles', '/organization_roles/:organization_role_id', 'PATCH'] as const
}

export function getPatchOrganizationRolesOrganizationRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationRolesOrganizationRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>,
    ) {
      return parseResponse(client.organization_roles[':organization_role_id'].$patch(args, options))
    },
  })
}

export function usePatchOrganizationRolesOrganizationRoleId<
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
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationRolesOrganizationRoleIdMutationOptions<
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

export function getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationKey() {
  return [
    'organization_roles',
    '/organization_roles/:organization_role_id/permissions/:permission_id',
    'POST',
  ] as const
}

export function getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organization_roles[':organization_role_id'].permissions[':permission_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
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
                    (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
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
  const mutationDefaults =
    getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
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

export function getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationKey() {
  return [
    'organization_roles',
    '/organization_roles/:organization_role_id/permissions/:permission_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization_roles[':organization_role_id'].permissions[':permission_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
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
                    (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
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
  const mutationDefaults =
    getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
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

export function getOrganizationsOrganizationIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/memberships', toValue(args)] as const
}

export function getOrganizationsOrganizationIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
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
                    (typeof client.organizations)[':organization_id']['memberships']['$get']
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
                    (typeof client.organizations)[':organization_id']['memberships']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdMembershipsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdMembershipsMutationKey() {
  return ['organizations', '/organizations/:organization_id/memberships', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['memberships']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].memberships.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdMemberships<
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
                    (typeof client.organizations)[':organization_id']['memberships']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['memberships']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdMembershipsMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdMembershipsUserIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/memberships/:user_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].memberships[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdMembershipsUserId<
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
                    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdMembershipsUserIdMutationKey() {
  return ['organizations', '/organizations/:organization_id/memberships/:user_id', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].memberships[':user_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationIdMembershipsUserId<
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
                    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/memberships/:user_id/metadata',
    'PATCH',
  ] as const
}

export function getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].memberships[':user_id'].metadata.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationIdMembershipsUserIdMetadata<
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
                    (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
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
  const mutationDefaults =
    getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataMutationOptions<
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

export function getOrganizationsOrganizationIdDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/domains', toValue(args)] as const
}

export function getOrganizationsOrganizationIdDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdDomainsMutationKey() {
  return ['organizations', '/organizations/:organization_id/domains', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>,
    ) {
      return parseResponse(client.organizations[':organization_id'].domains.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationIdDomains<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['domains']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationIdDomainsMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdDomainsDomainIdMutationKey() {
  return ['organizations', '/organizations/:organization_id/domains/:domain_id', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].domains[':domain_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationIdDomainsDomainId<
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
                    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdDomainsDomainIdMutationKey() {
  return ['organizations', '/organizations/:organization_id/domains/:domain_id', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].domains[':domain_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationIdDomainsDomainId<
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
                    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
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

export function getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id/domains/:domain_id/verify_ownership',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].domains[':domain_id'].verify_ownership.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnership<
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
                    (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipMutationOptions<
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

export function getOrganizationDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_domains.$get>>,
) {
  return ['organization_domains', '/organization_domains', toValue(args)] as const
}

export function getOrganizationDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationDomainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProxyChecksMutationKey() {
  return ['proxy_checks', '/proxy_checks', 'POST'] as const
}

export function getPostProxyChecksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy_checks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.proxy_checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProxyChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy_checks.$post>) {
      return parseResponse(client.proxy_checks.$post(args, options))
    },
  })
}

export function usePostProxyChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy_checks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.proxy_checks.$post>,
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
  const mutationDefaults = getPostProxyChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRedirectUrlsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redirect_urls.$get>>,
) {
  return ['redirect_urls', '/redirect_urls', toValue(args)] as const
}

export function getRedirectUrlsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redirect_urls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedirectUrlsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redirect_urls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedirectUrls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.redirect_urls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
          >,
          ReturnType<typeof getRedirectUrlsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectUrlsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedirectUrlsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redirect_urls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRedirectUrlsMutationKey() {
  return ['redirect_urls', '/redirect_urls', 'POST'] as const
}

export function getPostRedirectUrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.redirect_urls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRedirectUrlsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.redirect_urls.$post>) {
      return parseResponse(client.redirect_urls.$post(args, options))
    },
  })
}

export function usePostRedirectUrls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.redirect_urls.$post>,
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
  const mutationDefaults = getPostRedirectUrlsMutationOptions<TError, TOnMutateResult>(
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

export function getRedirectUrlsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect_urls)[':id']['$get']>>,
) {
  return ['redirect_urls', '/redirect_urls/:id', toValue(args)] as const
}

export function getRedirectUrlsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect_urls)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedirectUrlsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redirect_urls[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedirectUrlsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect_urls)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRedirectUrlsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectUrlsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedirectUrlsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redirect_urls[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRedirectUrlsIdMutationKey() {
  return ['redirect_urls', '/redirect_urls/:id', 'DELETE'] as const
}

export function getDeleteRedirectUrlsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.redirect_urls)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRedirectUrlsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.redirect_urls)[':id']['$delete']>) {
      return parseResponse(client.redirect_urls[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRedirectUrlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.redirect_urls)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRedirectUrlsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignInTokensMutationKey() {
  return ['sign_in_tokens', '/sign_in_tokens', 'POST'] as const
}

export function getPostSignInTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_in_tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sign_in_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignInTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sign_in_tokens.$post>) {
      return parseResponse(client.sign_in_tokens.$post(args, options))
    },
  })
}

export function usePostSignInTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sign_in_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sign_in_tokens.$post>,
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
  const mutationDefaults = getPostSignInTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignInTokensSignInTokenIdRevokeMutationKey() {
  return ['sign_in_tokens', '/sign_in_tokens/:sign_in_token_id/revoke', 'POST'] as const
}

export function getPostSignInTokensSignInTokenIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignInTokensSignInTokenIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']
      >,
    ) {
      return parseResponse(client.sign_in_tokens[':sign_in_token_id'].revoke.$post(args, options))
    },
  })
}

export function usePostSignInTokensSignInTokenIdRevoke<
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
                  ReturnType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostSignInTokensSignInTokenIdRevokeMutationOptions<
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

export function getSignUpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sign_ups)[':id']['$get']>>,
) {
  return ['sign_ups', '/sign_ups/:id', toValue(args)] as const
}

export function getSignUpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sign_ups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignUpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sign_ups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignUpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sign_ups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSignUpsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignUpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignUpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sign_ups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSignUpsIdMutationKey() {
  return ['sign_ups', '/sign_ups/:id', 'PATCH'] as const
}

export function getPatchSignUpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sign_ups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSignUpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sign_ups)[':id']['$patch']>) {
      return parseResponse(client.sign_ups[':id'].$patch(args, options))
    },
  })
}

export function usePatchSignUpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sign_ups)[':id']['$patch']>,
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
  const mutationDefaults = getPatchSignUpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauthApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_applications.$get>>,
) {
  return ['oauth_applications', '/oauth_applications', toValue(args)] as const
}

export function getOauthApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth_applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>
            >
          >,
          ReturnType<typeof getOauthApplicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth_applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthApplicationsMutationKey() {
  return ['oauth_applications', '/oauth_applications', 'POST'] as const
}

export function getPostOauthApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth_applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth_applications.$post>) {
      return parseResponse(client.oauth_applications.$post(args, options))
    },
  })
}

export function usePostOauthApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth_applications.$post>,
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
  const mutationDefaults = getPostOauthApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getOauthApplicationsOauthApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>
  >,
) {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', toValue(args)] as const
}

export function getOauthApplicationsOauthApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthApplicationsOauthApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthApplicationsOauthApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>
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
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOauthApplicationsOauthApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthApplicationsOauthApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthApplicationsOauthApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth_applications[':oauth_application_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOauthApplicationsOauthApplicationIdMutationKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', 'DELETE'] as const
}

export function getDeleteOauthApplicationsOauthApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOauthApplicationsOauthApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth_applications)[':oauth_application_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOauthApplicationsOauthApplicationId<
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
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>,
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
  const mutationDefaults = getDeleteOauthApplicationsOauthApplicationIdMutationOptions<
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

export function getPatchOauthApplicationsOauthApplicationIdMutationKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', 'PATCH'] as const
}

export function getPatchOauthApplicationsOauthApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOauthApplicationsOauthApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>,
    ) {
      return parseResponse(client.oauth_applications[':oauth_application_id'].$patch(args, options))
    },
  })
}

export function usePatchOauthApplicationsOauthApplicationId<
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
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>,
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
  const mutationDefaults = getPatchOauthApplicationsOauthApplicationIdMutationOptions<
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

export function getPutOauthApplicationsOauthApplicationIdLogoMutationKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id/logo', 'PUT'] as const
}

export function getPutOauthApplicationsOauthApplicationIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOauthApplicationsOauthApplicationIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']
      >,
    ) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].logo.$put(args, options),
      )
    },
  })
}

export function usePutOauthApplicationsOauthApplicationIdLogo<
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
                    (typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']
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
  const mutationDefaults = getPutOauthApplicationsOauthApplicationIdLogoMutationOptions<
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

export function getPostOauthApplicationsOauthApplicationIdRotateSecretMutationKey() {
  return [
    'oauth_applications',
    '/oauth_applications/:oauth_application_id/rotate_secret',
    'POST',
  ] as const
}

export function getPostOauthApplicationsOauthApplicationIdRotateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOauthApplicationsOauthApplicationIdRotateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
      >,
    ) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].rotate_secret.$post(args, options),
      )
    },
  })
}

export function usePostOauthApplicationsOauthApplicationIdRotateSecret<
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
                    (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
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
  const mutationDefaults = getPostOauthApplicationsOauthApplicationIdRotateSecretMutationOptions<
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

export function getPostOauthApplicationsOauthApplicationIdRevokeTokenMutationKey() {
  return [
    'oauth_applications',
    '/oauth_applications/:oauth_application_id/revoke_token',
    'POST',
  ] as const
}

export function getPostOauthApplicationsOauthApplicationIdRevokeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOauthApplicationsOauthApplicationIdRevokeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
      >,
    ) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].revoke_token.$post(args, options),
      )
    },
  })
}

export function usePostOauthApplicationsOauthApplicationIdRevokeToken<
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
                      (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
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
  const mutationDefaults = getPostOauthApplicationsOauthApplicationIdRevokeTokenMutationOptions<
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

export function getSamlConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml_connections.$get>>,
) {
  return ['saml_connections', '/saml_connections', toValue(args)] as const
}

export function getSamlConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml_connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSamlConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saml_connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamlConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml_connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>
            >
          >,
          ReturnType<typeof getSamlConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSamlConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saml_connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSamlConnectionsMutationKey() {
  return ['saml_connections', '/saml_connections', 'POST'] as const
}

export function getPostSamlConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.saml_connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamlConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saml_connections.$post>) {
      return parseResponse(client.saml_connections.$post(args, options))
    },
  })
}

export function usePostSamlConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.saml_connections.$post>,
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
  const mutationDefaults = getPostSamlConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getSamlConnectionsSamlConnectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>
  >,
) {
  return ['saml_connections', '/saml_connections/:saml_connection_id', toValue(args)] as const
}

export function getSamlConnectionsSamlConnectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSamlConnectionsSamlConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saml_connections[':saml_connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamlConnectionsSamlConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSamlConnectionsSamlConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSamlConnectionsSamlConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSamlConnectionsSamlConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saml_connections[':saml_connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSamlConnectionsSamlConnectionIdMutationKey() {
  return ['saml_connections', '/saml_connections/:saml_connection_id', 'DELETE'] as const
}

export function getDeleteSamlConnectionsSamlConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSamlConnectionsSamlConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>,
    ) {
      return parseResponse(client.saml_connections[':saml_connection_id'].$delete(args, options))
    },
  })
}

export function useDeleteSamlConnectionsSamlConnectionId<
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
                  ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>,
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
  const mutationDefaults = getDeleteSamlConnectionsSamlConnectionIdMutationOptions<
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

export function getPatchSamlConnectionsSamlConnectionIdMutationKey() {
  return ['saml_connections', '/saml_connections/:saml_connection_id', 'PATCH'] as const
}

export function getPatchSamlConnectionsSamlConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSamlConnectionsSamlConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>,
    ) {
      return parseResponse(client.saml_connections[':saml_connection_id'].$patch(args, options))
    },
  })
}

export function usePatchSamlConnectionsSamlConnectionId<
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
                  ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>,
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
  const mutationDefaults = getPatchSamlConnectionsSamlConnectionIdMutationOptions<
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

export function getEnterpriseConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.enterprise_connections.$get>>,
) {
  return ['enterprise_connections', '/enterprise_connections', toValue(args)] as const
}

export function getEnterpriseConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.enterprise_connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterpriseConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprise_connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterpriseConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.enterprise_connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
            >
          >,
          ReturnType<typeof getEnterpriseConnectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterpriseConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprise_connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnterpriseConnectionsMutationKey() {
  return ['enterprise_connections', '/enterprise_connections', 'POST'] as const
}

export function getPostEnterpriseConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enterprise_connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enterprise_connections.$post>) {
      return parseResponse(client.enterprise_connections.$post(args, options))
    },
  })
}

export function usePostEnterpriseConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.enterprise_connections.$post>,
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
  const mutationDefaults = getPostEnterpriseConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getEnterpriseConnectionsEnterpriseConnectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$get']>
  >,
) {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    toValue(args),
  ] as const
}

export function getEnterpriseConnectionsEnterpriseConnectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterpriseConnectionsEnterpriseConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterpriseConnectionsEnterpriseConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$get']>
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdQueryKey>
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
            ReturnType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterpriseConnectionsEnterpriseConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprise_connections[':enterprise_connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEnterpriseConnectionsEnterpriseConnectionIdMutationKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    'DELETE',
  ] as const
}

export function getDeleteEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnterpriseConnectionsEnterpriseConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEnterpriseConnectionsEnterpriseConnectionId<
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
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
  const mutationDefaults = getDeleteEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
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

export function getPatchEnterpriseConnectionsEnterpriseConnectionIdMutationKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    'PATCH',
  ] as const
}

export function getPatchEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEnterpriseConnectionsEnterpriseConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchEnterpriseConnectionsEnterpriseConnectionId<
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
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
  const mutationDefaults = getPatchEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
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

export function getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
    >
  >,
) {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id/test_runs',
    toValue(args),
  ] as const
}

export function getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
    >
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey>
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
              (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsMutationKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id/test_runs',
    'POST',
  ] as const
}

export function getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
      >,
    ) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].test_runs.$post(args, options),
      )
    },
  })
}

export function usePostEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
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
  const mutationDefaults =
    getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsMutationOptions<
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

export function getPostTestingTokensMutationKey() {
  return ['testing_tokens', '/testing_tokens', 'POST'] as const
}

export function getPostTestingTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testing_tokens.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTestingTokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.testing_tokens.$post(undefined, options))
    },
  })
}

export function usePostTestingTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testing_tokens.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTestingTokensMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_memberships.$get>>,
) {
  return ['organization_memberships', '/organization_memberships', toValue(args)] as const
}

export function getOrganizationMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_memberships.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_memberships.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationMembershipsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWaitlistEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitlist_entries.$get>>,
) {
  return ['waitlist_entries', '/waitlist_entries', toValue(args)] as const
}

export function getWaitlistEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitlist_entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWaitlistEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.waitlist_entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWaitlistEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitlist_entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>
            >
          >,
          ReturnType<typeof getWaitlistEntriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitlistEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWaitlistEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.waitlist_entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWaitlistEntriesMutationKey() {
  return ['waitlist_entries', '/waitlist_entries', 'POST'] as const
}

export function getPostWaitlistEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.waitlist_entries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWaitlistEntriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.waitlist_entries.$post>) {
      return parseResponse(client.waitlist_entries.$post(args, options))
    },
  })
}

export function usePostWaitlistEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.waitlist_entries.$post>,
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
  const mutationDefaults = getPostWaitlistEntriesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWaitlistEntriesWaitlistEntryIdMutationKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id', 'DELETE'] as const
}

export function getDeleteWaitlistEntriesWaitlistEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWaitlistEntriesWaitlistEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>,
    ) {
      return parseResponse(client.waitlist_entries[':waitlist_entry_id'].$delete(args, options))
    },
  })
}

export function useDeleteWaitlistEntriesWaitlistEntryId<
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
                  ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>,
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
  const mutationDefaults = getDeleteWaitlistEntriesWaitlistEntryIdMutationOptions<
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

export function getPostWaitlistEntriesWaitlistEntryIdInviteMutationKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id/invite', 'POST'] as const
}

export function getPostWaitlistEntriesWaitlistEntryIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWaitlistEntriesWaitlistEntryIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.waitlist_entries[':waitlist_entry_id'].invite.$post(args, options),
      )
    },
  })
}

export function usePostWaitlistEntriesWaitlistEntryIdInvite<
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
                    (typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']
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
  const mutationDefaults = getPostWaitlistEntriesWaitlistEntryIdInviteMutationOptions<
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

export function getPostWaitlistEntriesWaitlistEntryIdRejectMutationKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id/reject', 'POST'] as const
}

export function getPostWaitlistEntriesWaitlistEntryIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWaitlistEntriesWaitlistEntryIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.waitlist_entries[':waitlist_entry_id'].reject.$post(args, options),
      )
    },
  })
}

export function usePostWaitlistEntriesWaitlistEntryIdReject<
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
                    (typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']
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
  const mutationDefaults = getPostWaitlistEntriesWaitlistEntryIdRejectMutationOptions<
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

export function getCommercePlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.plans.$get>>,
) {
  return ['commerce', '/commerce/plans', toValue(args)] as const
}

export function getCommercePlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommercePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commerce.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommercePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
          >,
          ReturnType<typeof getCommercePlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommercePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.commerce.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommerceSubscriptionItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.subscription_items.$get>>,
) {
  return ['commerce', '/commerce/subscription_items', toValue(args)] as const
}

export function getCommerceSubscriptionItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.subscription_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommerceSubscriptionItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commerce.subscription_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommerceSubscriptionItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commerce.subscription_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>
              >
            >
          >,
          ReturnType<typeof getCommerceSubscriptionItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommerceSubscriptionItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommerceSubscriptionItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.commerce.subscription_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCommerceSubscriptionItemsSubscriptionItemIdMutationKey() {
  return ['commerce', '/commerce/subscription_items/:subscription_item_id', 'DELETE'] as const
}

export function getDeleteCommerceSubscriptionItemsSubscriptionItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommerceSubscriptionItemsSubscriptionItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.commerce.subscription_items[':subscription_item_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCommerceSubscriptionItemsSubscriptionItemId<
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
                    (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
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
  const mutationDefaults = getDeleteCommerceSubscriptionItemsSubscriptionItemIdMutationOptions<
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

export function getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialMutationKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/extend_free_trial',
    'POST',
  ] as const
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
      >,
    ) {
      return parseResponse(
        client.billing.subscription_items[':subscription_item_id'].extend_free_trial.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrial<
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
                    (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
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
  const mutationDefaults =
    getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialMutationOptions<
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

export function getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionMutationKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/price_transition',
    'POST',
  ] as const
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
      >,
    ) {
      return parseResponse(
        client.billing.subscription_items[':subscription_item_id'].price_transition.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdPriceTransition<
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
                    (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
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
  const mutationDefaults =
    getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionMutationOptions<
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

export function getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsMutationKey() {
  return ['billing', '/billing/subscription_items/:subscription_item_id/discounts', 'POST'] as const
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
      >,
    ) {
      return parseResponse(
        client.billing.subscription_items[':subscription_item_id'].discounts.$post(args, options),
      )
    },
  })
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdDiscounts<
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
                    (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
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
  const mutationDefaults =
    getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsMutationOptions<
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

export function getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdMutationKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/discounts/:discount_id',
    'DELETE',
  ] as const
}

export function getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.billing.subscription_items[':subscription_item_id'].discounts[
          ':discount_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountId<
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
                    (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
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
  const mutationDefaults =
    getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdMutationOptions<
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

export function getOrganizationPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_permissions.$get>>,
) {
  return ['organization_permissions', '/organization_permissions', toValue(args)] as const
}

export function getOrganizationPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization_permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationPermissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationPermissionsMutationKey() {
  return ['organization_permissions', '/organization_permissions', 'POST'] as const
}

export function getPostOrganizationPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization_permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization_permissions.$post>) {
      return parseResponse(client.organization_permissions.$post(args, options))
    },
  })
}

export function usePostOrganizationPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization_permissions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization_permissions.$post>,
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
  const mutationDefaults = getPostOrganizationPermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationPermissionsPermissionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>
  >,
) {
  return [
    'organization_permissions',
    '/organization_permissions/:permission_id',
    toValue(args),
  ] as const
}

export function getOrganizationPermissionsPermissionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationPermissionsPermissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization_permissions[':permission_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationPermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>
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
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationPermissionsPermissionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationPermissionsPermissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationPermissionsPermissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization_permissions[':permission_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationPermissionsPermissionIdMutationKey() {
  return ['organization_permissions', '/organization_permissions/:permission_id', 'DELETE'] as const
}

export function getDeleteOrganizationPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>,
    ) {
      return parseResponse(client.organization_permissions[':permission_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationPermissionsPermissionId<
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
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationPermissionsPermissionIdMutationOptions<
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

export function getPatchOrganizationPermissionsPermissionIdMutationKey() {
  return ['organization_permissions', '/organization_permissions/:permission_id', 'PATCH'] as const
}

export function getPatchOrganizationPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>,
    ) {
      return parseResponse(client.organization_permissions[':permission_id'].$patch(args, options))
    },
  })
}

export function usePatchOrganizationPermissionsPermissionId<
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
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationPermissionsPermissionIdMutationOptions<
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

export function getRoleSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.role_sets.$get>>,
) {
  return ['role_sets', '/role_sets', toValue(args)] as const
}

export function getRoleSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.role_sets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.role_sets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoleSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.role_sets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
          >,
          ReturnType<typeof getRoleSetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoleSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.role_sets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoleSetsMutationKey() {
  return ['role_sets', '/role_sets', 'POST'] as const
}

export function getPostRoleSetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$post>>>>>,
    TError,
    InferRequestType<typeof client.role_sets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.role_sets.$post>) {
      return parseResponse(client.role_sets.$post(args, options))
    },
  })
}

export function usePostRoleSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.role_sets.$post>,
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
  const mutationDefaults = getPostRoleSetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoleSetsRoleSetKeyOrIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>
  >,
) {
  return ['role_sets', '/role_sets/:role_set_key_or_id', toValue(args)] as const
}

export function getRoleSetsRoleSetKeyOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleSetsRoleSetKeyOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.role_sets[':role_set_key_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoleSetsRoleSetKeyOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoleSetsRoleSetKeyOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleSetsRoleSetKeyOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleSetsRoleSetKeyOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.role_sets[':role_set_key_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchRoleSetsRoleSetKeyOrIdMutationKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id', 'PATCH'] as const
}

export function getPatchRoleSetsRoleSetKeyOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoleSetsRoleSetKeyOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>,
    ) {
      return parseResponse(client.role_sets[':role_set_key_or_id'].$patch(args, options))
    },
  })
}

export function usePatchRoleSetsRoleSetKeyOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>,
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
  const mutationDefaults = getPatchRoleSetsRoleSetKeyOrIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostRoleSetsRoleSetKeyOrIdReplaceMutationKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/replace', 'POST'] as const
}

export function getPostRoleSetsRoleSetKeyOrIdReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleSetsRoleSetKeyOrIdReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>,
    ) {
      return parseResponse(client.role_sets[':role_set_key_or_id'].replace.$post(args, options))
    },
  })
}

export function usePostRoleSetsRoleSetKeyOrIdReplace<
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
                  ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>,
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
  const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdReplaceMutationOptions<
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

export function getPostRoleSetsRoleSetKeyOrIdRolesMutationKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/roles', 'POST'] as const
}

export function getPostRoleSetsRoleSetKeyOrIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleSetsRoleSetKeyOrIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>,
    ) {
      return parseResponse(client.role_sets[':role_set_key_or_id'].roles.$post(args, options))
    },
  })
}

export function usePostRoleSetsRoleSetKeyOrIdRoles<
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
                  ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>,
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
  const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdRolesMutationOptions<
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

export function getPostRoleSetsRoleSetKeyOrIdRolesReplaceMutationKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/roles/replace', 'POST'] as const
}

export function getPostRoleSetsRoleSetKeyOrIdRolesReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleSetsRoleSetKeyOrIdRolesReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
      >,
    ) {
      return parseResponse(
        client.role_sets[':role_set_key_or_id'].roles.replace.$post(args, options),
      )
    },
  })
}

export function usePostRoleSetsRoleSetKeyOrIdRolesReplace<
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
                    (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
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
  const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdRolesReplaceMutationOptions<
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

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsSchemasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.schemas.$get>>,
) {
  return ['logs', '/logs/schemas', toValue(args)] as const
}

export function getLogsSchemasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.schemas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.schemas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.schemas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
          >,
          ReturnType<typeof getLogsSchemasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsSchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsTypesQueryKey() {
  return ['logs', '/logs/types'] as const
}

export function getLogsTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogsTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
          >,
          ReturnType<typeof getLogsTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogsTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsGroupsGroupIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>
  >,
) {
  return ['logs', '/logs/groups/:group_id/events', toValue(args)] as const
}

export function getLogsGroupsGroupIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsGroupsGroupIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.groups[':group_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsGroupsGroupIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsGroupsGroupIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsGroupsGroupIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsGroupsGroupIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.groups[':group_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsEventTimeAndIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>>,
) {
  return ['logs', '/logs/:event_time_and_id', toValue(args)] as const
}

export function getLogsEventTimeAndIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsEventTimeAndIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':event_time_and_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsEventTimeAndId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsEventTimeAndIdQueryKey>
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
          Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsEventTimeAndIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsEventTimeAndIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':event_time_and_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPortalLinkTokensMutationKey() {
  return ['admin_portal_link_tokens', '/admin_portal_link_tokens', 'POST'] as const
}

export function getPostAdminPortalLinkTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin_portal_link_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin_portal_link_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPortalLinkTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin_portal_link_tokens.$post>) {
      return parseResponse(client.admin_portal_link_tokens.$post(args, options))
    },
  })
}

export function usePostAdminPortalLinkTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin_portal_link_tokens.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin_portal_link_tokens.$post>,
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
  const mutationDefaults = getPostAdminPortalLinkTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeMutationKey() {
  return [
    'admin_portal_link_tokens',
    '/admin_portal_link_tokens/:adminPortalLinkTokenID/revoke',
    'POST',
  ] as const
}

export function getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.admin_portal_link_tokens[':adminPortalLinkTokenID'].revoke.$post(args, options),
      )
    },
  })
}

export function usePostAdminPortalLinkTokensAdminPortalLinkTokenIDRevoke<
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
                    (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
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
  const mutationDefaults = getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeMutationOptions<
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

export function getApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
) {
  return ['api_keys', '/api_keys', toValue(args)] as const
}

export function getApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          ReturnType<typeof getApiKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeysMutationKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.$post>) {
      return parseResponse(client.api_keys.$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_keys.$post>,
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
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeysApiKeyIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>>,
) {
  return ['api_keys', '/api_keys/:apiKeyID', toValue(args)] as const
}

export function getApiKeysApiKeyIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysApiKeyIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_keys[':apiKeyID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysApiKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeysApiKeyIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysApiKeyIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysApiKeyIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_keys[':apiKeyID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiKeysApiKeyIDMutationKey() {
  return ['api_keys', '/api_keys/:apiKeyID', 'DELETE'] as const
}

export function getDeleteApiKeysApiKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysApiKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']>) {
      return parseResponse(client.api_keys[':apiKeyID'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']>,
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
  const mutationDefaults = getDeleteApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiKeysApiKeyIDMutationKey() {
  return ['api_keys', '/api_keys/:apiKeyID', 'PATCH'] as const
}

export function getPatchApiKeysApiKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeysApiKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']>) {
      return parseResponse(client.api_keys[':apiKeyID'].$patch(args, options))
    },
  })
}

export function usePatchApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']>,
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
  const mutationDefaults = getPatchApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeysApiKeyIDSecretQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>,
) {
  return ['api_keys', '/api_keys/:apiKeyID/secret', toValue(args)] as const
}

export function getApiKeysApiKeyIDSecretQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysApiKeyIDSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_keys[':apiKeyID'].secret.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysApiKeyIDSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeysApiKeyIDSecretQueryKey>
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
          Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysApiKeyIDSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysApiKeyIDSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_keys[':apiKeyID'].secret.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeysApiKeyIDRevokeMutationKey() {
  return ['api_keys', '/api_keys/:apiKeyID/revoke', 'POST'] as const
}

export function getPostApiKeysApiKeyIDRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysApiKeyIDRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>,
    ) {
      return parseResponse(client.api_keys[':apiKeyID'].revoke.$post(args, options))
    },
  })
}

export function usePostApiKeysApiKeyIDRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>,
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
  const mutationDefaults = getPostApiKeysApiKeyIDRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiKeysVerifyMutationKey() {
  return ['api_keys', '/api_keys/verify', 'POST'] as const
}

export function getPostApiKeysVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api_keys.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.verify.$post>) {
      return parseResponse(client.api_keys.verify.$post(args, options))
    },
  })
}

export function usePostApiKeysVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api_keys.verify.$post>,
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
  const mutationDefaults = getPostApiKeysVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getM2mTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.m2m_tokens.$get>>,
) {
  return ['m2m_tokens', '/m2m_tokens', toValue(args)] as const
}

export function getM2mTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.m2m_tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getM2mTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.m2m_tokens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useM2mTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.m2m_tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
          >,
          ReturnType<typeof getM2mTokensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getM2mTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getM2mTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.m2m_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostM2mTokensMutationKey() {
  return ['m2m_tokens', '/m2m_tokens', 'POST'] as const
}

export function getPostM2mTokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$post>>>>>,
    TError,
    InferRequestType<typeof client.m2m_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostM2mTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.m2m_tokens.$post>) {
      return parseResponse(client.m2m_tokens.$post(args, options))
    },
  })
}

export function usePostM2mTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.m2m_tokens.$post>,
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
  const mutationDefaults = getPostM2mTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostM2mTokensM2mTokenIdRevokeMutationKey() {
  return ['m2m_tokens', '/m2m_tokens/:m2m_token_id/revoke', 'POST'] as const
}

export function getPostM2mTokensM2mTokenIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostM2mTokensM2mTokenIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>,
    ) {
      return parseResponse(client.m2m_tokens[':m2m_token_id'].revoke.$post(args, options))
    },
  })
}

export function usePostM2mTokensM2mTokenIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>,
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
  const mutationDefaults = getPostM2mTokensM2mTokenIdRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostM2mTokensVerifyMutationKey() {
  return ['m2m_tokens', '/m2m_tokens/verify', 'POST'] as const
}

export function getPostM2mTokensVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.m2m_tokens.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostM2mTokensVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.m2m_tokens.verify.$post>) {
      return parseResponse(client.m2m_tokens.verify.$post(args, options))
    },
  })
}

export function usePostM2mTokensVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.m2m_tokens.verify.$post>,
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
  const mutationDefaults = getPostM2mTokensVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthApplicationsAccessTokensVerifyMutationKey() {
  return ['oauth_applications', '/oauth_applications/access_tokens/verify', 'POST'] as const
}

export function getPostOauthApplicationsAccessTokensVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.oauth_applications.access_tokens.verify.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthApplicationsAccessTokensVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>,
    ) {
      return parseResponse(client.oauth_applications.access_tokens.verify.$post(args, options))
    },
  })
}

export function usePostOauthApplicationsAccessTokensVerify<
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
                Awaited<ReturnType<typeof client.oauth_applications.access_tokens.verify.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>,
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
  const mutationDefaults = getPostOauthApplicationsAccessTokensVerifyMutationOptions<
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
