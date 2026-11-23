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
  args: InferRequestType<typeof client.public.interstitial.$get>,
) {
  return ['public', '/public/interstitial', args] as const
}

export function getPublicInterstitialQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.public.interstitial.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicInterstitialQueryKey>
  >({
    queryKey: getPublicInterstitialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.interstitial.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPublicInterstitial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.interstitial.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPublicInterstitialQueryKey>
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
    return { ...getPublicInterstitialQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJwksQueryKey() {
  return ['jwks', '/jwks'] as const
}

export function getJwksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJwksQueryKey>
  >({
    queryKey: getJwksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.jwks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJwks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getJwksQueryKey>
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
    return { ...getJwksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getClientsQueryKey(args: InferRequestType<typeof client.clients.$get>) {
  return ['clients', '/clients', args] as const
}

export function getClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >({
    queryKey: getClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getClientsQueryKey>
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
    return { ...getClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostClientsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clients.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.clients.verify.$post>,
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
    const mutationDefaults = getPostClientsVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
) {
  return ['clients', '/clients/:client_id', args] as const
}

export function getClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsClientIdQueryKey>
  >({
    queryKey: getClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':client_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clients)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClientsClientIdQueryKey>
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
    return { ...getClientsClientIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostClientsClientIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostClientsClientIdRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEmailAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email_addresses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.email_addresses.$post>,
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
    const mutationDefaults = getPostEmailAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailAddressesEmailAddressIdQueryKey(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
) {
  return ['email_addresses', '/email_addresses/:email_address_id', args] as const
}

export function getEmailAddressesEmailAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmailAddressesEmailAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email_addresses[':email_address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailAddressesEmailAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getEmailAddressesEmailAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteEmailAddressesEmailAddressId<
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
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>,
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
    const mutationDefaults = getDeleteEmailAddressesEmailAddressIdMutationOptions<
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

export function createPatchEmailAddressesEmailAddressId<
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
                Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>,
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
    const mutationDefaults = getPatchEmailAddressesEmailAddressIdMutationOptions<
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

export function createPostEmailAddressesEmailAddressIdPrepareVerification<
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
    const mutationDefaults = getPostEmailAddressesEmailAddressIdPrepareVerificationMutationOptions<
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

export function createPostEmailAddressesEmailAddressIdAttemptVerification<
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
    const mutationDefaults = getPostEmailAddressesEmailAddressIdAttemptVerificationMutationOptions<
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

export function createPutUsersUserIdEmailAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutUsersUserIdEmailAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPhoneNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.phone_numbers.$post>,
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
    const mutationDefaults = getPostPhoneNumbersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneNumbersPhoneNumberIdQueryKey(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', args] as const
}

export function getPhoneNumbersPhoneNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPhoneNumbersPhoneNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers[':phone_number_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneNumbersPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getPhoneNumbersPhoneNumberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeletePhoneNumbersPhoneNumberId<
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
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>,
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
    const mutationDefaults = getDeletePhoneNumbersPhoneNumberIdMutationOptions<
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

export function createPatchPhoneNumbersPhoneNumberId<
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
                Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>,
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
    const mutationDefaults = getPatchPhoneNumbersPhoneNumberIdMutationOptions<
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

export function createPostPhoneNumbersPhoneNumberIdPrepareVerification<
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
    const mutationDefaults = getPostPhoneNumbersPhoneNumberIdPrepareVerificationMutationOptions<
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

export function createPostPhoneNumbersPhoneNumberIdAttemptVerification<
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
    const mutationDefaults = getPostPhoneNumbersPhoneNumberIdAttemptVerificationMutationOptions<
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

export function createPutUsersUserIdPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutUsersUserIdPhoneNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSessionsQueryKey(args: InferRequestType<typeof client.sessions.$get>) {
  return ['sessions', '/sessions', args] as const
}

export function getSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >({
    queryKey: getSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sessions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSessionsQueryKey>
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
    return { ...getSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$post>,
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
    const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
) {
  return ['sessions', '/sessions/:session_id', args] as const
}

export function getSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdQueryKey>
  >({
    queryKey: getSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions[':session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSessionsSessionIdQueryKey>
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
    return { ...getSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsSessionIdRefresh<
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
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['refresh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>,
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
    const mutationDefaults = getPostSessionsSessionIdRefreshMutationOptions<
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

export function getSessionsSessionIdReverificationsReverificationIdQueryKey(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
) {
  return ['sessions', '/sessions/:session_id/reverifications/:reverification_id', args] as const
}

export function getSessionsSessionIdReverificationsReverificationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSessionsSessionIdReverificationsReverificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions[':session_id'].reverifications[':reverification_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSessionsSessionIdReverificationsReverificationId<
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
  args: () => InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
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
                    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSessionsSessionIdReverificationsReverificationIdQueryKey>
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
      ...getSessionsSessionIdReverificationsReverificationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostSessionsSessionIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostSessionsSessionIdRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsSessionIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostSessionsSessionIdTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSessionsSessionIdTokensTemplateName<
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
    const mutationDefaults = getPostSessionsSessionIdTokensTemplateNameMutationOptions<
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

export function getTemplatesTemplateTypeQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
) {
  return ['templates', '/templates/:template_type', args] as const
}

export function getTemplatesTemplateTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplatesTemplateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTemplatesTemplateTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTemplatesTemplateTypeSlugQueryKey(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
) {
  return ['templates', '/templates/:template_type/:slug', args] as const
}

export function getTemplatesTemplateTypeSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesTemplateTypeSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':template_type'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplatesTemplateTypeSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTemplatesTemplateTypeSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutTemplatesTemplateTypeSlug<
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
                Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>,
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
    const mutationDefaults = getPutTemplatesTemplateTypeSlugMutationOptions<
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

export function createPostTemplatesTemplateTypeSlugRevert<
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
                    (typeof client.templates)[':template_type'][':slug']['revert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>,
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
    const mutationDefaults = getPostTemplatesTemplateTypeSlugRevertMutationOptions<
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

export function createPostTemplatesTemplateTypeSlugPreview<
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
    const mutationDefaults = getPostTemplatesTemplateTypeSlugPreviewMutationOptions<
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

export function createPostTemplatesTemplateTypeSlugToggleDelivery<
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
    const mutationDefaults = getPostTemplatesTemplateTypeSlugToggleDeliveryMutationOptions<
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

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
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
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersCountQueryKey(args: InferRequestType<typeof client.users.count.$get>) {
  return ['users', '/users/count', args] as const
}

export function getUsersCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersCountQueryKey>
  >({
    queryKey: getUsersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.count.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersCountQueryKey>
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
    return { ...getUsersCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdQueryKey>
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
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdBanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdUnban<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdUnbanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ban.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.ban.$post>,
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
    const mutationDefaults = getPostUsersBanMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUnban<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.unban.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.unban.$post>,
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
    const mutationDefaults = getPostUsersUnbanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdLockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdUnlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdMergeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdProfileImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdProfileImage<
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
                Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdProfileImageMutationOptions<
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

export function createPutUsersUserIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutUsersUserIdMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUsersUserIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchUsersUserIdMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdBillingSubscriptionQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
) {
  return ['users', '/users/:user_id/billing/subscription', args] as const
}

export function getUsersUserIdBillingSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdBillingSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].billing.subscription.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdBillingSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['billing']['subscription']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getUsersUserIdBillingSubscriptionQueryKey>
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
      ...getUsersUserIdBillingSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdBillingCreditsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
) {
  return ['users', '/users/:user_id/billing/credits', args] as const
}

export function getUsersUserIdBillingCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdBillingCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].billing.credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getUsersUserIdBillingCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersUserIdBillingCredits<
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
                  ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdBillingCreditsMutationOptions<
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

export function getUsersUserIdOauthAccessTokensProviderQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
) {
  return ['users', '/users/:user_id/oauth_access_tokens/:provider', args] as const
}

export function getUsersUserIdOauthAccessTokensProviderQueryOptions<
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
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdOauthAccessTokensProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].oauth_access_tokens[':provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdOauthAccessTokensProvider<
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
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
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
                    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdOauthAccessTokensProviderQueryKey>
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
      ...getUsersUserIdOauthAccessTokensProviderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdOrganizationMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
) {
  return ['users', '/users/:user_id/organization_memberships', args] as const
}

export function getUsersUserIdOrganizationMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdOrganizationMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].organization_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['organization_memberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getUsersUserIdOrganizationMembershipsQueryKey>
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
      ...getUsersUserIdOrganizationMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdOrganizationInvitationsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
) {
  return ['users', '/users/:user_id/organization_invitations', args] as const
}

export function getUsersUserIdOrganizationInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdOrganizationInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].organization_invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdOrganizationInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['organization_invitations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getUsersUserIdOrganizationInvitationsQueryKey>
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
      ...getUsersUserIdOrganizationInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersUserIdRemovePassword<
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
                Awaited<ReturnType<(typeof client.users)[':user_id']['remove_password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdRemovePasswordMutationOptions<
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

export function createPostUsersUserIdVerifyPassword<
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
                Awaited<ReturnType<(typeof client.users)[':user_id']['verify_password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdVerifyPasswordMutationOptions<
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

export function createPostUsersUserIdVerifyTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdVerifyTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdMfaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdBackupCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdBackupCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdPasskeysPasskeyIdentificationId<
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
    const mutationDefaults = getDeleteUsersUserIdPasskeysPasskeyIdentificationIdMutationOptions<
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

export function getUsersUserIdTrustedDevicesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
) {
  return ['users', '/users/:user_id/trusted_devices', args] as const
}

export function getUsersUserIdTrustedDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdTrustedDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].trusted_devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdTrustedDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getUsersUserIdTrustedDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdTrustedDevicesTrustedDeviceId<
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
    const mutationDefaults = getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdMutationOptions<
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

export function createDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationId<
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
    const mutationDefaults =
      getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdMutationOptions<
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

export function createDeleteUsersUserIdTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdExternalAccountsExternalAccountId<
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
    const mutationDefaults = getDeleteUsersUserIdExternalAccountsExternalAccountIdMutationOptions<
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

export function getInvitationsQueryKey(args: InferRequestType<typeof client.invitations.$get>) {
  return ['invitations', '/invitations', args] as const
}

export function getInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >({
    queryKey: getInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInvitationsQueryKey>
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
    return { ...getInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invitations.$post>,
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
    const mutationDefaults = getPostInvitationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvitationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invitations.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invitations.bulk.$post>,
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
    const mutationDefaults = getPostInvitationsBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteInvitationsInvitationId<
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
                Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>,
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
    const mutationDefaults = getDeleteInvitationsInvitationIdMutationOptions<
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

export function createPostInvitationsInvitationIdRevoke<
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
                  ReturnType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>,
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
    const mutationDefaults = getPostInvitationsInvitationIdRevokeMutationOptions<
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

export function getOrganizationInvitationsQueryKey(
  args: InferRequestType<typeof client.organization_invitations.$get>,
) {
  return ['organization_invitations', '/organization_invitations', args] as const
}

export function getOrganizationInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization_invitations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitationsQueryKey>
  >({
    queryKey: getOrganizationInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization_invitations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationInvitationsQueryKey>
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
      ...getOrganizationInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAllowlistIdentifiersQueryKey(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
) {
  return ['allowlist_identifiers', '/allowlist_identifiers', args] as const
}

export function getAllowlistIdentifiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAllowlistIdentifiersQueryKey>
  >({
    queryKey: getAllowlistIdentifiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allowlist_identifiers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAllowlistIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.allowlist_identifiers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAllowlistIdentifiersQueryKey>
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
      ...getAllowlistIdentifiersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAllowlistIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.allowlist_identifiers.$post>,
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
    const mutationDefaults = getPostAllowlistIdentifiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAllowlistIdentifiersIdentifierId<
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
                  ReturnType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>,
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
    const mutationDefaults = getDeleteAllowlistIdentifiersIdentifierIdMutationOptions<
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

export function getBlocklistIdentifiersQueryKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers'] as const
}

export function getBlocklistIdentifiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistIdentifiersQueryKey>
  >({
    queryKey: getBlocklistIdentifiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist_identifiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocklistIdentifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistIdentifiersQueryKey>
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
    return { ...getBlocklistIdentifiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostBlocklistIdentifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist_identifiers.$post>,
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
    const mutationDefaults = getPostBlocklistIdentifiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBlocklistIdentifiersIdentifierId<
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
                  ReturnType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>,
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
    const mutationDefaults = getDeleteBlocklistIdentifiersIdentifierIdMutationOptions<
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

export function createPatchBetaFeaturesInstanceSettings<
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
                Awaited<ReturnType<typeof client.beta_features.instance_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta_features.instance_settings.$patch>,
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
    const mutationDefaults = getPatchBetaFeaturesInstanceSettingsMutationOptions<
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

export function createPutBetaFeaturesDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta_features.domain.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta_features.domain.$put>,
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
    const mutationDefaults = getPutBetaFeaturesDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostActorTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actor_tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.actor_tokens.$post>,
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
    const mutationDefaults = getPostActorTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostActorTokensActorTokenIdRevoke<
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
                  ReturnType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>,
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
    const mutationDefaults = getPostActorTokensActorTokenIdRevokeMutationOptions<
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

export function getDomainsQueryKey() {
  return ['domains', '/domains'] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsQueryKey>
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
    return { ...getDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
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
    const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstanceQueryKey() {
  return ['instance', '/instance'] as const
}

export function getInstanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstanceQueryKey>
  >({
    queryKey: getInstanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInstance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInstanceQueryKey>
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
    return { ...getInstanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.instance.$patch>,
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
    const mutationDefaults = getPatchInstanceMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchInstanceRestrictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.restrictions.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.restrictions.$patch>,
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
    const mutationDefaults = getPatchInstanceRestrictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstanceProtectQueryKey() {
  return ['instance', '/instance/protect'] as const
}

export function getInstanceProtectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceProtectQueryKey>
  >({
    queryKey: getInstanceProtectQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.protect.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInstanceProtect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInstanceProtectQueryKey>
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
    return { ...getInstanceProtectQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchInstanceProtect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.protect.$patch>,
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
    const mutationDefaults = getPatchInstanceProtectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstanceCommunicationQueryKey() {
  return ['instance', '/instance/communication'] as const
}

export function getInstanceCommunicationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceCommunicationQueryKey>
  >({
    queryKey: getInstanceCommunicationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.communication.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstanceCommunication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInstanceCommunicationQueryKey>
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
    return { ...getInstanceCommunicationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchInstanceCommunication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.communication.$patch>,
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
    const mutationDefaults = getPatchInstanceCommunicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstanceOauthApplicationSettingsQueryKey() {
  return ['instance', '/instance/oauth_application_settings'] as const
}

export function getInstanceOauthApplicationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getInstanceOauthApplicationSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.oauth_application_settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstanceOauthApplicationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getInstanceOauthApplicationSettingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchInstanceOauthApplicationSettings<
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
                Awaited<ReturnType<typeof client.instance.oauth_application_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.instance.oauth_application_settings.$patch>,
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
    const mutationDefaults = getPatchInstanceOauthApplicationSettingsMutationOptions<
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

export function createPostInstanceChangeDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instance.change_domain.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.instance.change_domain.$post>,
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
    const mutationDefaults = getPostInstanceChangeDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInstanceOrganizationSettingsQueryKey() {
  return ['instance', '/instance/organization_settings'] as const
}

export function getInstanceOrganizationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceOrganizationSettingsQueryKey>
  >({
    queryKey: getInstanceOrganizationSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.organization_settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstanceOrganizationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.instance.organization_settings.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInstanceOrganizationSettingsQueryKey>
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
      ...getInstanceOrganizationSettingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchInstanceOrganizationSettings<
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
                Awaited<ReturnType<typeof client.instance.organization_settings.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.instance.organization_settings.$patch>,
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
    const mutationDefaults = getPatchInstanceOrganizationSettingsMutationOptions<
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

export function createPostWebhooksSvix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$post>>>>
          >,
          TError,
          void,
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
    const mutationDefaults = getPostWebhooksSvixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWebhooksSvix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
    const mutationDefaults = getDeleteWebhooksSvixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWebhooksSvixUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix_url.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostWebhooksSvixUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJwtTemplatesQueryKey(args: InferRequestType<typeof client.jwt_templates.$get>) {
  return ['jwt_templates', '/jwt_templates', args] as const
}

export function getJwtTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jwt_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJwtTemplatesQueryKey>
  >({
    queryKey: getJwtTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jwt_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJwtTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jwt_templates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getJwtTemplatesQueryKey>
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
    return { ...getJwtTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostJwtTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.jwt_templates.$post>,
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
    const mutationDefaults = getPostJwtTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJwtTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
) {
  return ['jwt_templates', '/jwt_templates/:template_id', args] as const
}

export function getJwtTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJwtTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jwt_templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJwtTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getJwtTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteJwtTemplatesTemplateId<
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
                Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>,
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
    const mutationDefaults = getDeleteJwtTemplatesTemplateIdMutationOptions<
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

export function createPatchJwtTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchJwtTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMachinesQueryKey(args: InferRequestType<typeof client.machines.$get>) {
  return ['machines', '/machines', args] as const
}

export function getMachinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.machines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMachinesQueryKey>
  >({
    queryKey: getMachinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.machines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMachines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.machines.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMachinesQueryKey>
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
    return { ...getMachinesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMachines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.machines.$post>,
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
    const mutationDefaults = getPostMachinesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMachinesMachineIdQueryKey(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
) {
  return ['machines', '/machines/:machine_id', args] as const
}

export function getMachinesMachineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMachinesMachineIdQueryKey>
  >({
    queryKey: getMachinesMachineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.machines[':machine_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMachinesMachineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMachinesMachineIdQueryKey>
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
    return { ...getMachinesMachineIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteMachinesMachineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteMachinesMachineIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchMachinesMachineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchMachinesMachineIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMachinesMachineIdSecretKeyQueryKey(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
) {
  return ['machines', '/machines/:machine_id/secret_key', args] as const
}

export function getMachinesMachineIdSecretKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMachinesMachineIdSecretKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.machines[':machine_id'].secret_key.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMachinesMachineIdSecretKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getMachinesMachineIdSecretKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMachinesMachineIdSecretKeyRotate<
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
    const mutationDefaults = getPostMachinesMachineIdSecretKeyRotateMutationOptions<
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

export function createPostMachinesMachineIdScopes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostMachinesMachineIdScopesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMachinesMachineIdScopesOtherMachineId<
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
    const mutationDefaults = getDeleteMachinesMachineIdScopesOtherMachineIdMutationOptions<
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

export function getOrganizationsQueryKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organizations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsQueryKey>
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
    return { ...getOrganizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
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
    const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id', args] as const
}

export function getOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrganizationsOrganizationIdMutationOptions<
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

export function createPatchOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>,
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
    const mutationDefaults = getPatchOrganizationsOrganizationIdMutationOptions<
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

export function createPutOrganizationsOrganizationIdMetadata<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['metadata']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>,
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
    const mutationDefaults = getPutOrganizationsOrganizationIdMetadataMutationOptions<
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

export function createPatchOrganizationsOrganizationIdMetadata<
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
                    (typeof client.organizations)[':organization_id']['metadata']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>,
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
    const mutationDefaults = getPatchOrganizationsOrganizationIdMetadataMutationOptions<
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

export function createPutOrganizationsOrganizationIdLogo<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['logo']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>,
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
    const mutationDefaults = getPutOrganizationsOrganizationIdLogoMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdLogo<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['logo']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>,
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
    const mutationDefaults = getDeleteOrganizationsOrganizationIdLogoMutationOptions<
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

export function getOrganizationsOrganizationIdBillingSubscriptionQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/billing/subscription', args] as const
}

export function getOrganizationsOrganizationIdBillingSubscriptionQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdBillingSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].billing.subscription.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdBillingSubscription<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
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
                    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdBillingSubscriptionQueryKey>
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
      ...getOrganizationsOrganizationIdBillingSubscriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdBillingCreditsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/billing/credits', args] as const
}

export function getOrganizationsOrganizationIdBillingCreditsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdBillingCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].billing.credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdBillingCredits<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
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
                    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdBillingCreditsQueryKey>
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
      ...getOrganizationsOrganizationIdBillingCreditsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdBillingCredits<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdBillingCreditsMutationOptions<
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

export function getOrganizationsOrganizationIdInvitationsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/invitations', args] as const
}

export function getOrganizationsOrganizationIdInvitationsQueryOptions<
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
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInvitations<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
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
      ...getOrganizationsOrganizationIdInvitationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdInvitations<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsMutationOptions<
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

export function createPostOrganizationsOrganizationIdInvitationsBulk<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsBulkMutationOptions<
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

export function getOrganizationsOrganizationIdInvitationsPendingQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/invitations/pending', args] as const
}

export function getOrganizationsOrganizationIdInvitationsPendingQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdInvitationsPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].invitations.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInvitationsPending<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsPendingQueryKey>
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
      ...getOrganizationsOrganizationIdInvitationsPendingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id/invitations/:invitation_id',
    args,
  ] as const
}

export function getOrganizationsOrganizationIdInvitationsInvitationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].invitations[':invitation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInvitationsInvitationId<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
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
                    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsInvitationIdQueryKey>
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
      ...getOrganizationsOrganizationIdInvitationsInvitationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdInvitationsInvitationIdRevoke<
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
    const mutationDefaults =
      getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeMutationOptions<
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

export function getOrganizationRolesQueryKey(
  args: InferRequestType<typeof client.organization_roles.$get>,
) {
  return ['organization_roles', '/organization_roles', args] as const
}

export function getOrganizationRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization_roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationRolesQueryKey>
  >({
    queryKey: getOrganizationRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization_roles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationRolesQueryKey>
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
    return { ...getOrganizationRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrganizationRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization_roles.$post>,
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
    const mutationDefaults = getPostOrganizationRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationRolesOrganizationRoleIdQueryKey(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
) {
  return ['organization_roles', '/organization_roles/:organization_role_id', args] as const
}

export function getOrganizationRolesOrganizationRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationRolesOrganizationRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_roles[':organization_role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationRolesOrganizationRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationRolesOrganizationRoleIdQueryKey>
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
      ...getOrganizationRolesOrganizationRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrganizationRolesOrganizationRoleId<
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
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrganizationRolesOrganizationRoleIdMutationOptions<
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

export function createPatchOrganizationRolesOrganizationRoleId<
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
                  ReturnType<(typeof client.organization_roles)[':organization_role_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>,
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
    const mutationDefaults = getPatchOrganizationRolesOrganizationRoleIdMutationOptions<
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

export function createPostOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
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
    const mutationDefaults =
      getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
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

export function createDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
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
    const mutationDefaults =
      getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdMutationOptions<
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

export function getOrganizationsOrganizationIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/memberships', args] as const
}

export function getOrganizationsOrganizationIdMembershipsQueryOptions<
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
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdMemberships<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['memberships']['$get']
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
                    (typeof client.organizations)[':organization_id']['memberships']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdMembershipsQueryKey>
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
      ...getOrganizationsOrganizationIdMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdMemberships<
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
    const mutationDefaults = getPostOrganizationsOrganizationIdMembershipsMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdMembershipsUserId<
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
    const mutationDefaults = getDeleteOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
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

export function createPatchOrganizationsOrganizationIdMembershipsUserId<
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
    const mutationDefaults = getPatchOrganizationsOrganizationIdMembershipsUserIdMutationOptions<
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

export function createPatchOrganizationsOrganizationIdMembershipsUserIdMetadata<
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
    const mutationDefaults =
      getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataMutationOptions<
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

export function getOrganizationsOrganizationIdDomainsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/domains', args] as const
}

export function getOrganizationsOrganizationIdDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationIdDomainsQueryKey>
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
      ...getOrganizationsOrganizationIdDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdDomains<
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
                  ReturnType<(typeof client.organizations)[':organization_id']['domains']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>,
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
    const mutationDefaults = getPostOrganizationsOrganizationIdDomainsMutationOptions<
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

export function createDeleteOrganizationsOrganizationIdDomainsDomainId<
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
    const mutationDefaults = getDeleteOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
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

export function createPatchOrganizationsOrganizationIdDomainsDomainId<
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
    const mutationDefaults = getPatchOrganizationsOrganizationIdDomainsDomainIdMutationOptions<
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

export function createPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnership<
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
    const mutationDefaults =
      getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipMutationOptions<
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

export function getOrganizationDomainsQueryKey(
  args: InferRequestType<typeof client.organization_domains.$get>,
) {
  return ['organization_domains', '/organization_domains', args] as const
}

export function getOrganizationDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization_domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationDomainsQueryKey>
  >({
    queryKey: getOrganizationDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization_domains.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationDomainsQueryKey>
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
    return { ...getOrganizationDomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProxyChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy_checks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.proxy_checks.$post>,
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
    const mutationDefaults = getPostProxyChecksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedirectUrlsQueryKey(args: InferRequestType<typeof client.redirect_urls.$get>) {
  return ['redirect_urls', '/redirect_urls', args] as const
}

export function getRedirectUrlsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.redirect_urls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectUrlsQueryKey>
  >({
    queryKey: getRedirectUrlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redirect_urls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedirectUrls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.redirect_urls.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRedirectUrlsQueryKey>
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
    return { ...getRedirectUrlsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostRedirectUrls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.redirect_urls.$post>,
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
    const mutationDefaults = getPostRedirectUrlsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedirectUrlsIdQueryKey(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
) {
  return ['redirect_urls', '/redirect_urls/:id', args] as const
}

export function getRedirectUrlsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectUrlsIdQueryKey>
  >({
    queryKey: getRedirectUrlsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redirect_urls[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedirectUrlsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRedirectUrlsIdQueryKey>
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
    return { ...getRedirectUrlsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteRedirectUrlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRedirectUrlsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignInTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sign_in_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sign_in_tokens.$post>,
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
    const mutationDefaults = getPostSignInTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignInTokensSignInTokenIdRevoke<
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
                  ReturnType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>,
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
    const mutationDefaults = getPostSignInTokensSignInTokenIdRevokeMutationOptions<
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

export function getSignUpsIdQueryKey(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
) {
  return ['sign_ups', '/sign_ups/:id', args] as const
}

export function getSignUpsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSignUpsIdQueryKey>
  >({
    queryKey: getSignUpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sign_ups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSignUpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSignUpsIdQueryKey>
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
    return { ...getSignUpsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchSignUpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sign_ups)[':id']['$patch']>,
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
    const mutationDefaults = getPatchSignUpsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOauthApplicationsQueryKey(
  args: InferRequestType<typeof client.oauth_applications.$get>,
) {
  return ['oauth_applications', '/oauth_applications', args] as const
}

export function getOauthApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth_applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthApplicationsQueryKey>
  >({
    queryKey: getOauthApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth_applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauthApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oauth_applications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOauthApplicationsQueryKey>
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
    return { ...getOauthApplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOauthApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth_applications.$post>,
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
    const mutationDefaults = getPostOauthApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOauthApplicationsOauthApplicationIdQueryKey(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
) {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', args] as const
}

export function getOauthApplicationsOauthApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOauthApplicationsOauthApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth_applications[':oauth_application_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOauthApplicationsOauthApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOauthApplicationsOauthApplicationIdQueryKey>
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
      ...getOauthApplicationsOauthApplicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOauthApplicationsOauthApplicationId<
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
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>,
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
    const mutationDefaults = getDeleteOauthApplicationsOauthApplicationIdMutationOptions<
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

export function createPatchOauthApplicationsOauthApplicationId<
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
                  ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>,
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
    const mutationDefaults = getPatchOauthApplicationsOauthApplicationIdMutationOptions<
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

export function createPutOauthApplicationsOauthApplicationIdLogo<
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
    const mutationDefaults = getPutOauthApplicationsOauthApplicationIdLogoMutationOptions<
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

export function createPostOauthApplicationsOauthApplicationIdRotateSecret<
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
    const mutationDefaults = getPostOauthApplicationsOauthApplicationIdRotateSecretMutationOptions<
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

export function createPostOauthApplicationsOauthApplicationIdRevokeToken<
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
    const mutationDefaults = getPostOauthApplicationsOauthApplicationIdRevokeTokenMutationOptions<
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

export function getSamlConnectionsQueryKey(
  args: InferRequestType<typeof client.saml_connections.$get>,
) {
  return ['saml_connections', '/saml_connections', args] as const
}

export function getSamlConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saml_connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlConnectionsQueryKey>
  >({
    queryKey: getSamlConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saml_connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSamlConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.saml_connections.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSamlConnectionsQueryKey>
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
    return { ...getSamlConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSamlConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.saml_connections.$post>,
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
    const mutationDefaults = getPostSamlConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSamlConnectionsSamlConnectionIdQueryKey(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
) {
  return ['saml_connections', '/saml_connections/:saml_connection_id', args] as const
}

export function getSamlConnectionsSamlConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSamlConnectionsSamlConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saml_connections[':saml_connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSamlConnectionsSamlConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSamlConnectionsSamlConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSamlConnectionsSamlConnectionId<
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
                  ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>,
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
    const mutationDefaults = getDeleteSamlConnectionsSamlConnectionIdMutationOptions<
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

export function createPatchSamlConnectionsSamlConnectionId<
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
                  ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>,
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
    const mutationDefaults = getPatchSamlConnectionsSamlConnectionIdMutationOptions<
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

export function getEnterpriseConnectionsQueryKey(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
) {
  return ['enterprise_connections', '/enterprise_connections', args] as const
}

export function getEnterpriseConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseConnectionsQueryKey>
  >({
    queryKey: getEnterpriseConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprise_connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnterpriseConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.enterprise_connections.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEnterpriseConnectionsQueryKey>
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
      ...getEnterpriseConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEnterpriseConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.enterprise_connections.$post>,
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
    const mutationDefaults = getPostEnterpriseConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnterpriseConnectionsEnterpriseConnectionIdQueryKey(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
  >,
) {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    args,
  ] as const
}

export function getEnterpriseConnectionsEnterpriseConnectionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnterpriseConnectionsEnterpriseConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnterpriseConnectionsEnterpriseConnectionId<
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
  args: () => InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdQueryKey>
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
      ...getEnterpriseConnectionsEnterpriseConnectionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteEnterpriseConnectionsEnterpriseConnectionId<
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
    const mutationDefaults = getDeleteEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
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

export function createPatchEnterpriseConnectionsEnterpriseConnectionId<
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
    const mutationDefaults = getPatchEnterpriseConnectionsEnterpriseConnectionIdMutationOptions<
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

export function getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
  >,
) {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id/test_runs',
    args,
  ] as const
}

export function getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryOptions<
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
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
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
  args: () => InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
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
                    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryKey>
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
      ...getEnterpriseConnectionsEnterpriseConnectionIdTestRunsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
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
    const mutationDefaults =
      getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsMutationOptions<
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

export function createPostTestingTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testing_tokens.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostTestingTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationMembershipsQueryKey(
  args: InferRequestType<typeof client.organization_memberships.$get>,
) {
  return ['organization_memberships', '/organization_memberships', args] as const
}

export function getOrganizationMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationMembershipsQueryKey>
  >({
    queryKey: getOrganizationMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization_memberships.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationMembershipsQueryKey>
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
      ...getOrganizationMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWaitlistEntriesQueryKey(
  args: InferRequestType<typeof client.waitlist_entries.$get>,
) {
  return ['waitlist_entries', '/waitlist_entries', args] as const
}

export function getWaitlistEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.waitlist_entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitlistEntriesQueryKey>
  >({
    queryKey: getWaitlistEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.waitlist_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWaitlistEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.waitlist_entries.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWaitlistEntriesQueryKey>
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
    return { ...getWaitlistEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWaitlistEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.waitlist_entries.$post>,
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
    const mutationDefaults = getPostWaitlistEntriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWaitlistEntriesWaitlistEntryId<
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
                  ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>,
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
    const mutationDefaults = getDeleteWaitlistEntriesWaitlistEntryIdMutationOptions<
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

export function createPostWaitlistEntriesWaitlistEntryIdInvite<
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
    const mutationDefaults = getPostWaitlistEntriesWaitlistEntryIdInviteMutationOptions<
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

export function createPostWaitlistEntriesWaitlistEntryIdReject<
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
    const mutationDefaults = getPostWaitlistEntriesWaitlistEntryIdRejectMutationOptions<
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

export function getCommercePlansQueryKey(
  args: InferRequestType<typeof client.commerce.plans.$get>,
) {
  return ['commerce', '/commerce/plans', args] as const
}

export function getCommercePlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.commerce.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePlansQueryKey>
  >({
    queryKey: getCommercePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommercePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.commerce.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCommercePlansQueryKey>
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
    return { ...getCommercePlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommerceSubscriptionItemsQueryKey(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
) {
  return ['commerce', '/commerce/subscription_items', args] as const
}

export function getCommerceSubscriptionItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommerceSubscriptionItemsQueryKey>
  >({
    queryKey: getCommerceSubscriptionItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce.subscription_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommerceSubscriptionItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.commerce.subscription_items.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommerceSubscriptionItemsQueryKey>
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
      ...getCommerceSubscriptionItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCommerceSubscriptionItemsSubscriptionItemId<
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
    const mutationDefaults = getDeleteCommerceSubscriptionItemsSubscriptionItemIdMutationOptions<
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

export function createPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrial<
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
    const mutationDefaults =
      getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialMutationOptions<
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

export function createPostBillingSubscriptionItemsSubscriptionItemIdPriceTransition<
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
    const mutationDefaults =
      getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionMutationOptions<
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

export function createPostBillingSubscriptionItemsSubscriptionItemIdDiscounts<
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
    const mutationDefaults =
      getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsMutationOptions<
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

export function createDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountId<
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
    const mutationDefaults =
      getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdMutationOptions<
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

export function getOrganizationPermissionsQueryKey(
  args: InferRequestType<typeof client.organization_permissions.$get>,
) {
  return ['organization_permissions', '/organization_permissions', args] as const
}

export function getOrganizationPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization_permissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationPermissionsQueryKey>
  >({
    queryKey: getOrganizationPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization_permissions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationPermissionsQueryKey>
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
      ...getOrganizationPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostOrganizationPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationPermissionsPermissionIdQueryKey(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
) {
  return ['organization_permissions', '/organization_permissions/:permission_id', args] as const
}

export function getOrganizationPermissionsPermissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationPermissionsPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization_permissions[':permission_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationPermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationPermissionsPermissionIdQueryKey>
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
      ...getOrganizationPermissionsPermissionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrganizationPermissionsPermissionId<
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
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrganizationPermissionsPermissionIdMutationOptions<
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

export function createPatchOrganizationPermissionsPermissionId<
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
                  ReturnType<(typeof client.organization_permissions)[':permission_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>,
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
    const mutationDefaults = getPatchOrganizationPermissionsPermissionIdMutationOptions<
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

export function getRoleSetsQueryKey(args: InferRequestType<typeof client.role_sets.$get>) {
  return ['role_sets', '/role_sets', args] as const
}

export function getRoleSetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.role_sets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoleSetsQueryKey>
  >({
    queryKey: getRoleSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.role_sets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoleSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.role_sets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRoleSetsQueryKey>
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
    return { ...getRoleSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostRoleSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.role_sets.$post>,
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
    const mutationDefaults = getPostRoleSetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoleSetsRoleSetKeyOrIdQueryKey(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
) {
  return ['role_sets', '/role_sets/:role_set_key_or_id', args] as const
}

export function getRoleSetsRoleSetKeyOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoleSetsRoleSetKeyOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.role_sets[':role_set_key_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoleSetsRoleSetKeyOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getRoleSetsRoleSetKeyOrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchRoleSetsRoleSetKeyOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchRoleSetsRoleSetKeyOrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRoleSetsRoleSetKeyOrIdReplace<
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
                  ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>,
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
    const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdReplaceMutationOptions<
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

export function createPostRoleSetsRoleSetKeyOrIdRoles<
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
                  ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>,
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
    const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdRolesMutationOptions<
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

export function createPostRoleSetsRoleSetKeyOrIdRolesReplace<
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
    const mutationDefaults = getPostRoleSetsRoleSetKeyOrIdRolesReplaceMutationOptions<
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

export function getLogsQueryKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLogsQueryKey>
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
    return { ...getLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsSchemasQueryKey(args: InferRequestType<typeof client.logs.schemas.$get>) {
  return ['logs', '/logs/schemas', args] as const
}

export function getLogsSchemasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.schemas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsSchemasQueryKey>
  >({
    queryKey: getLogsSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.schemas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.schemas.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLogsSchemasQueryKey>
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
    return { ...getLogsSchemasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLogsTypesQueryKey() {
  return ['logs', '/logs/types'] as const
}

export function getLogsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsTypesQueryKey>
  >({
    queryKey: getLogsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLogsTypesQueryKey>
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
    return { ...getLogsTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLogsGroupsGroupIdEventsQueryKey(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
) {
  return ['logs', '/logs/groups/:group_id/events', args] as const
}

export function getLogsGroupsGroupIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLogsGroupsGroupIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.groups[':group_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLogsGroupsGroupIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getLogsGroupsGroupIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLogsEventTimeAndIdQueryKey(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
) {
  return ['logs', '/logs/:event_time_and_id', args] as const
}

export function getLogsEventTimeAndIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLogsEventTimeAndIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':event_time_and_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLogsEventTimeAndId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getLogsEventTimeAndIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAdminPortalLinkTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostAdminPortalLinkTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevoke<
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
    const mutationDefaults =
      getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeMutationOptions<
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

export function getApiKeysQueryKey(args: InferRequestType<typeof client.api_keys.$get>) {
  return ['api_keys', '/api_keys', args] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_keys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysQueryKey>
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
    return { ...getApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_keys.$post>,
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
    const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysApiKeyIDQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
) {
  return ['api_keys', '/api_keys/:apiKeyID', args] as const
}

export function getApiKeysApiKeyIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysApiKeyIDQueryKey>
  >({
    queryKey: getApiKeysApiKeyIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':apiKeyID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeysApiKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysApiKeyIDQueryKey>
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
    return { ...getApiKeysApiKeyIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysApiKeyIDSecretQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
) {
  return ['api_keys', '/api_keys/:apiKeyID/secret', args] as const
}

export function getApiKeysApiKeyIDSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiKeysApiKeyIDSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':apiKeyID'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiKeysApiKeyIDSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiKeysApiKeyIDSecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiKeysApiKeyIDRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostApiKeysApiKeyIDRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiKeysVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api_keys.verify.$post>,
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
    const mutationDefaults = getPostApiKeysVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getM2mTokensQueryKey(args: InferRequestType<typeof client.m2m_tokens.$get>) {
  return ['m2m_tokens', '/m2m_tokens', args] as const
}

export function getM2mTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.m2m_tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getM2mTokensQueryKey>
  >({
    queryKey: getM2mTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.m2m_tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createM2mTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.m2m_tokens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getM2mTokensQueryKey>
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
    return { ...getM2mTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostM2mTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.m2m_tokens.$post>,
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
    const mutationDefaults = getPostM2mTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostM2mTokensM2mTokenIdRevoke<
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
                Awaited<ReturnType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>,
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
    const mutationDefaults = getPostM2mTokensM2mTokenIdRevokeMutationOptions<
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

export function createPostM2mTokensVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.m2m_tokens.verify.$post>,
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
    const mutationDefaults = getPostM2mTokensVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthApplicationsAccessTokensVerify<
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
                Awaited<ReturnType<typeof client.oauth_applications.access_tokens.verify.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>,
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
    const mutationDefaults = getPostOauthApplicationsAccessTokensVerifyMutationOptions<
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
