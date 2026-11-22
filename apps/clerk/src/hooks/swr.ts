import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetPublicInterstitialKey(
  args: InferRequestType<typeof client.public.interstitial.$get>,
) {
  return ['public', '/public/interstitial', args] as const
}

export function useGetPublicInterstitial<TError = unknown>(
  args: InferRequestType<typeof client.public.interstitial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
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
        ? getGetPublicInterstitialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.interstitial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicInterstitial<TError = unknown>(
  args: InferRequestType<typeof client.public.interstitial.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
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
        ? getGetPublicInterstitialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.interstitial.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.interstitial.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJwksKey() {
  return ['jwks', '/jwks'] as const
}

export function useGetJwks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetJwksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJwks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetJwksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClientsKey(args: InferRequestType<typeof client.clients.$get>) {
  return ['clients', '/clients', args] as const
}

export function useGetClients<TError = unknown>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClients<TError = unknown>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostClientsVerifyKey() {
  return ['clients', '/clients/verify', 'POST'] as const
}

export function usePostClientsVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.clients.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientsVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clients.verify.$post> }) =>
        parseResponse(client.clients.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsClientIdKey(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
) {
  return ['clients', '/clients/:client_id', args] as const
}

export function useGetClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
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
        ? getGetClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
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
        ? getGetClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientsClientIdRevokeKey() {
  return ['clients', '/clients/:client_id/revoke', 'POST'] as const
}

export function usePostClientsClientIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':client_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientsClientIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clients)[':client_id']['revoke']['$post']> },
      ) => parseResponse(client.clients[':client_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailAddressesKey() {
  return ['email_addresses', '/email_addresses', 'POST'] as const
}

export function usePostEmailAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email_addresses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.email_addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email_addresses.$post> }) =>
        parseResponse(client.email_addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailAddressesEmailAddressIdKey(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
) {
  return ['email_addresses', '/email_addresses/:email_address_id', args] as const
}

export function useGetEmailAddressesEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
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
        ? getGetEmailAddressesEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email_addresses[':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailAddressesEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
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
        ? getGetEmailAddressesEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email_addresses[':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmailAddressesEmailAddressIdKey() {
  return ['email_addresses', '/email_addresses/:email_address_id', 'DELETE'] as const
}

export function useDeleteEmailAddressesEmailAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmailAddressesEmailAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$delete']>
        },
      ) => parseResponse(client.email_addresses[':email_address_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEmailAddressesEmailAddressIdKey() {
  return ['email_addresses', '/email_addresses/:email_address_id', 'PATCH'] as const
}

export function usePatchEmailAddressesEmailAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email_addresses)[':email_address_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmailAddressesEmailAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.email_addresses)[':email_address_id']['$patch']>
        },
      ) => parseResponse(client.email_addresses[':email_address_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailAddressesEmailAddressIdPrepareVerificationKey() {
  return [
    'email_addresses',
    '/email_addresses/:email_address_id/prepare_verification',
    'POST',
  ] as const
}

export function usePostEmailAddressesEmailAddressIdPrepareVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailAddressesEmailAddressIdPrepareVerificationKey()
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
            (typeof client.email_addresses)[':email_address_id']['prepare_verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.email_addresses[':email_address_id'].prepare_verification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEmailAddressesEmailAddressIdAttemptVerificationKey() {
  return [
    'email_addresses',
    '/email_addresses/:email_address_id/attempt_verification',
    'POST',
  ] as const
}

export function usePostEmailAddressesEmailAddressIdAttemptVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailAddressesEmailAddressIdAttemptVerificationKey()
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
            (typeof client.email_addresses)[':email_address_id']['attempt_verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.email_addresses[':email_address_id'].attempt_verification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdEmailAddressKey() {
  return ['users', '/users/:user_id/email_address', 'PUT'] as const
}

export function usePutUsersUserIdEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['email_address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdEmailAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['email_address']['$put']> },
      ) => parseResponse(client.users[':user_id'].email_address.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersKey() {
  return ['phone_numbers', '/phone_numbers', 'POST'] as const
}

export function usePostPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone_numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone_numbers.$post> }) =>
        parseResponse(client.phone_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumbersPhoneNumberIdKey(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
) {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', args] as const
}

export function useGetPhoneNumbersPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
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
        ? getGetPhoneNumbersPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':phone_number_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
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
        ? getGetPhoneNumbersPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers[':phone_number_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhoneNumbersPhoneNumberIdKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', 'DELETE'] as const
}

export function useDeletePhoneNumbersPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumbersPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$delete']> },
      ) => parseResponse(client.phone_numbers[':phone_number_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPhoneNumbersPhoneNumberIdKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id', 'PATCH'] as const
}

export function usePatchPhoneNumbersPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPhoneNumbersPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['$patch']> },
      ) => parseResponse(client.phone_numbers[':phone_number_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersPhoneNumberIdPrepareVerificationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id/prepare_verification', 'POST'] as const
}

export function usePostPhoneNumbersPhoneNumberIdPrepareVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersPhoneNumberIdPrepareVerificationKey()
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
            (typeof client.phone_numbers)[':phone_number_id']['prepare_verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone_numbers[':phone_number_id'].prepare_verification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumbersPhoneNumberIdAttemptVerificationKey() {
  return ['phone_numbers', '/phone_numbers/:phone_number_id/attempt_verification', 'POST'] as const
}

export function usePostPhoneNumbersPhoneNumberIdAttemptVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumbersPhoneNumberIdAttemptVerificationKey()
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
            (typeof client.phone_numbers)[':phone_number_id']['attempt_verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.phone_numbers[':phone_number_id'].attempt_verification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdPhoneNumberKey() {
  return ['users', '/users/:user_id/phone_number', 'PUT'] as const
}

export function usePutUsersUserIdPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['phone_number']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['phone_number']['$put']> },
      ) => parseResponse(client.users[':user_id'].phone_number.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsKey(args: InferRequestType<typeof client.sessions.$get>) {
  return ['sessions', '/sessions', args] as const
}

export function useGetSessions<TError = unknown>(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sessions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSessions<TError = unknown>(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sessions.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSessionsKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function usePostSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sessions.$post> }) =>
        parseResponse(client.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsSessionIdKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
) {
  return ['sessions', '/sessions/:session_id', args] as const
}

export function useGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSessionsSessionIdKey() {
  return ['sessions', '/sessions/:session_id', 'PATCH'] as const
}

export function usePatchSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['$patch']> },
      ) => parseResponse(client.sessions[':session_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdRefreshKey() {
  return ['sessions', '/sessions/:session_id/refresh', 'POST'] as const
}

export function usePostSessionsSessionIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['refresh']['$post']> },
      ) => parseResponse(client.sessions[':session_id'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsSessionIdReverificationsReverificationIdKey(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
) {
  return ['sessions', '/sessions/:session_id/reverifications/:reverification_id', args] as const
}

export function useGetSessionsSessionIdReverificationsReverificationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSessionsSessionIdReverificationsReverificationIdKey(args)
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
                (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
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
          client.sessions[':session_id'].reverifications[':reverification_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSessionIdReverificationsReverificationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSessionsSessionIdReverificationsReverificationIdKey(args)
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
                (typeof client.sessions)[':session_id']['reverifications'][':reverification_id']['$get']
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
          client.sessions[':session_id'].reverifications[':reverification_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSessionsSessionIdRevokeKey() {
  return ['sessions', '/sessions/:session_id/revoke', 'POST'] as const
}

export function usePostSessionsSessionIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['revoke']['$post']> },
      ) => parseResponse(client.sessions[':session_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdTokensKey() {
  return ['sessions', '/sessions/:session_id/tokens', 'POST'] as const
}

export function usePostSessionsSessionIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['tokens']['$post']> },
      ) => parseResponse(client.sessions[':session_id'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsSessionIdTokensTemplateNameKey() {
  return ['sessions', '/sessions/:session_id/tokens/:template_name', 'POST'] as const
}

export function usePostSessionsSessionIdTokensTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdTokensTemplateNameKey()
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
            (typeof client.sessions)[':session_id']['tokens'][':template_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sessions[':session_id'].tokens[':template_name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateTypeKey(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
) {
  return ['templates', '/templates/:template_type', args] as const
}

export function useGetTemplatesTemplateType<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
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
        ? getGetTemplatesTemplateTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateType<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
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
        ? getGetTemplatesTemplateTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':template_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateTypeSlugKey(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
) {
  return ['templates', '/templates/:template_type/:slug', args] as const
}

export function useGetTemplatesTemplateTypeSlug<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
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
        ? getGetTemplatesTemplateTypeSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_type'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateTypeSlug<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
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
        ? getGetTemplatesTemplateTypeSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':template_type'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplatesTemplateTypeSlugKey() {
  return ['templates', '/templates/:template_type/:slug', 'PUT'] as const
}

export function usePutTemplatesTemplateTypeSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':template_type'][':slug']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesTemplateTypeSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.templates)[':template_type'][':slug']['$put']> },
      ) => parseResponse(client.templates[':template_type'][':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateTypeSlugRevertKey() {
  return ['templates', '/templates/:template_type/:slug/revert', 'POST'] as const
}

export function usePostTemplatesTemplateTypeSlugRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateTypeSlugRevertKey()
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
            (typeof client.templates)[':template_type'][':slug']['revert']['$post']
          >
        },
      ) =>
        parseResponse(client.templates[':template_type'][':slug'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateTypeSlugPreviewKey() {
  return ['templates', '/templates/:template_type/:slug/preview', 'POST'] as const
}

export function usePostTemplatesTemplateTypeSlugPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.templates)[':template_type'][':slug']['preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateTypeSlugPreviewKey()
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
            (typeof client.templates)[':template_type'][':slug']['preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.templates[':template_type'][':slug'].preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTemplateTypeSlugToggleDeliveryKey() {
  return ['templates', '/templates/:template_type/:slug/toggle_delivery', 'POST'] as const
}

export function usePostTemplatesTemplateTypeSlugToggleDelivery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTemplateTypeSlugToggleDeliveryKey()
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
            (typeof client.templates)[':template_type'][':slug']['toggle_delivery']['$post']
          >
        },
      ) =>
        parseResponse(
          client.templates[':template_type'][':slug'].toggle_delivery.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersCountKey(args: InferRequestType<typeof client.users.count.$get>) {
  return ['users', '/users/count', args] as const
}

export function useGetUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.users.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.users.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$delete']> },
      ) => parseResponse(client.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$patch']> },
      ) => parseResponse(client.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdBanKey() {
  return ['users', '/users/:user_id/ban', 'POST'] as const
}

export function usePostUsersUserIdBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['ban']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['ban']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdBanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['ban']['$post']> },
      ) => parseResponse(client.users[':user_id'].ban.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdUnbanKey() {
  return ['users', '/users/:user_id/unban', 'POST'] as const
}

export function usePostUsersUserIdUnban<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['unban']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['unban']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdUnbanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['unban']['$post']> },
      ) => parseResponse(client.users[':user_id'].unban.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersBanKey() {
  return ['users', '/users/ban', 'POST'] as const
}

export function usePostUsersBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ban.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.ban.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersBanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.ban.$post> }) =>
        parseResponse(client.users.ban.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUnbanKey() {
  return ['users', '/users/unban', 'POST'] as const
}

export function usePostUsersUnban<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.unban.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.unban.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUnbanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.unban.$post> }) =>
        parseResponse(client.users.unban.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdLockKey() {
  return ['users', '/users/:user_id/lock', 'POST'] as const
}

export function usePostUsersUserIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['lock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['lock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['lock']['$post']> },
      ) => parseResponse(client.users[':user_id'].lock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdUnlockKey() {
  return ['users', '/users/:user_id/unlock', 'POST'] as const
}

export function usePostUsersUserIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['unlock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['unlock']['$post']> },
      ) => parseResponse(client.users[':user_id'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdMergeKey() {
  return ['users', '/users/:user_id/merge', 'POST'] as const
}

export function usePostUsersUserIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['merge']['$post']> },
      ) => parseResponse(client.users[':user_id'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdProfileImageKey() {
  return ['users', '/users/:user_id/profile_image', 'POST'] as const
}

export function usePostUsersUserIdProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdProfileImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$post']> },
      ) => parseResponse(client.users[':user_id'].profile_image.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdProfileImageKey() {
  return ['users', '/users/:user_id/profile_image', 'DELETE'] as const
}

export function useDeleteUsersUserIdProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['profile_image']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdProfileImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['profile_image']['$delete']> },
      ) => parseResponse(client.users[':user_id'].profile_image.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdMetadataKey() {
  return ['users', '/users/:user_id/metadata', 'PUT'] as const
}

export function usePutUsersUserIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['metadata']['$put']> },
      ) => parseResponse(client.users[':user_id'].metadata.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdMetadataKey() {
  return ['users', '/users/:user_id/metadata', 'PATCH'] as const
}

export function usePatchUsersUserIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['metadata']['$patch']> },
      ) => parseResponse(client.users[':user_id'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdBillingSubscriptionKey(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
) {
  return ['users', '/users/:user_id/billing/subscription', args] as const
}

export function useGetUsersUserIdBillingSubscription<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
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
        ? getGetUsersUserIdBillingSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].billing.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdBillingSubscription<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
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
        ? getGetUsersUserIdBillingSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['billing']['subscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].billing.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdBillingCreditsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
) {
  return ['users', '/users/:user_id/billing/credits', args] as const
}

export function useGetUsersUserIdBillingCredits<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
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
        ? getGetUsersUserIdBillingCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].billing.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdBillingCredits<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
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
        ? getGetUsersUserIdBillingCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].billing.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdBillingCreditsKey() {
  return ['users', '/users/:user_id/billing/credits', 'POST'] as const
}

export function usePostUsersUserIdBillingCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['billing']['credits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdBillingCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':user_id']['billing']['credits']['$post']>
        },
      ) => parseResponse(client.users[':user_id'].billing.credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdOauthAccessTokensProviderKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
) {
  return ['users', '/users/:user_id/oauth_access_tokens/:provider', args] as const
}

export function useGetUsersUserIdOauthAccessTokensProvider<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdOauthAccessTokensProviderKey(args)
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
                (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
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
          client.users[':user_id'].oauth_access_tokens[':provider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOauthAccessTokensProvider<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUsersUserIdOauthAccessTokensProviderKey(args)
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
                (typeof client.users)[':user_id']['oauth_access_tokens'][':provider']['$get']
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
          client.users[':user_id'].oauth_access_tokens[':provider'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdOrganizationMembershipsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
) {
  return ['users', '/users/:user_id/organization_memberships', args] as const
}

export function useGetUsersUserIdOrganizationMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
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
        ? getGetUsersUserIdOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOrganizationMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
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
        ? getGetUsersUserIdOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdOrganizationInvitationsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
) {
  return ['users', '/users/:user_id/organization_invitations', args] as const
}

export function useGetUsersUserIdOrganizationInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
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
        ? getGetUsersUserIdOrganizationInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].organization_invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOrganizationInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['organization_invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
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
        ? getGetUsersUserIdOrganizationInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['organization_invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id'].organization_invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdRemovePasswordKey() {
  return ['users', '/users/:user_id/remove_password', 'POST'] as const
}

export function usePostUsersUserIdRemovePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['remove_password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdRemovePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['remove_password']['$post']> },
      ) => parseResponse(client.users[':user_id'].remove_password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdVerifyPasswordKey() {
  return ['users', '/users/:user_id/verify_password', 'POST'] as const
}

export function usePostUsersUserIdVerifyPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['verify_password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdVerifyPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['verify_password']['$post']> },
      ) => parseResponse(client.users[':user_id'].verify_password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdVerifyTotpKey() {
  return ['users', '/users/:user_id/verify_totp', 'POST'] as const
}

export function usePostUsersUserIdVerifyTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['verify_totp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdVerifyTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['verify_totp']['$post']> },
      ) => parseResponse(client.users[':user_id'].verify_totp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdMfaKey() {
  return ['users', '/users/:user_id/mfa', 'DELETE'] as const
}

export function useDeleteUsersUserIdMfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['mfa']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdMfaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['mfa']['$delete']> },
      ) => parseResponse(client.users[':user_id'].mfa.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdBackupCodeKey() {
  return ['users', '/users/:user_id/backup_code', 'DELETE'] as const
}

export function useDeleteUsersUserIdBackupCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['backup_code']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdBackupCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['backup_code']['$delete']> },
      ) => parseResponse(client.users[':user_id'].backup_code.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdPasskeysPasskeyIdentificationIdKey() {
  return ['users', '/users/:user_id/passkeys/:passkey_identification_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdPasskeysPasskeyIdentificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdPasskeysPasskeyIdentificationIdKey()
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
            (typeof client.users)[':user_id']['passkeys'][':passkey_identification_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].passkeys[':passkey_identification_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTrustedDevicesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
) {
  return ['users', '/users/:user_id/trusted_devices', args] as const
}

export function useGetUsersUserIdTrustedDevices<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
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
        ? getGetUsersUserIdTrustedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].trusted_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTrustedDevices<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['trusted_devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
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
        ? getGetUsersUserIdTrustedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['trusted_devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].trusted_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdKey() {
  return ['users', '/users/:user_id/trusted_devices/:trusted_device_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdTrustedDevicesTrustedDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdTrustedDevicesTrustedDeviceIdKey()
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
            (typeof client.users)[':user_id']['trusted_devices'][':trusted_device_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].trusted_devices[':trusted_device_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdKey() {
  return ['users', '/users/:user_id/web3_wallets/:web3_wallet_identification_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdKey()
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
            (typeof client.users)[':user_id']['web3_wallets'][':web3_wallet_identification_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].web3_wallets[':web3_wallet_identification_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdTotpKey() {
  return ['users', '/users/:user_id/totp', 'DELETE'] as const
}

export function useDeleteUsersUserIdTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['totp']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['totp']['$delete']> },
      ) => parseResponse(client.users[':user_id'].totp.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdExternalAccountsExternalAccountIdKey() {
  return ['users', '/users/:user_id/external_accounts/:external_account_id', 'DELETE'] as const
}

export function useDeleteUsersUserIdExternalAccountsExternalAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdExternalAccountsExternalAccountIdKey()
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
            (typeof client.users)[':user_id']['external_accounts'][':external_account_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':user_id'].external_accounts[':external_account_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInvitationsKey(args: InferRequestType<typeof client.invitations.$get>) {
  return ['invitations', '/invitations', args] as const
}

export function useGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitations<TError = unknown>(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvitationsKey() {
  return ['invitations', '/invitations', 'POST'] as const
}

export function usePostInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.$post> }) =>
        parseResponse(client.invitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationsBulkKey() {
  return ['invitations', '/invitations/bulk', 'POST'] as const
}

export function usePostInvitationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitations.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitations.bulk.$post> }) =>
        parseResponse(client.invitations.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvitationsInvitationIdKey() {
  return ['invitations', '/invitations/:invitation_id', 'DELETE'] as const
}

export function useDeleteInvitationsInvitationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitationsInvitationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invitations)[':invitation_id']['$delete']> },
      ) => parseResponse(client.invitations[':invitation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationsInvitationIdRevokeKey() {
  return ['invitations', '/invitations/:invitation_id/revoke', 'POST'] as const
}

export function usePostInvitationsInvitationIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationsInvitationIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invitations)[':invitation_id']['revoke']['$post']>
        },
      ) => parseResponse(client.invitations[':invitation_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationInvitationsKey(
  args: InferRequestType<typeof client.organization_invitations.$get>,
) {
  return ['organization_invitations', '/organization_invitations', args] as const
}

export function useGetOrganizationInvitations<TError = unknown>(
  args: InferRequestType<typeof client.organization_invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
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
        ? getGetOrganizationInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationInvitations<TError = unknown>(
  args: InferRequestType<typeof client.organization_invitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
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
        ? getGetOrganizationInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_invitations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAllowlistIdentifiersKey(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
) {
  return ['allowlist_identifiers', '/allowlist_identifiers', args] as const
}

export function useGetAllowlistIdentifiers<TError = unknown>(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
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
        ? getGetAllowlistIdentifiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allowlist_identifiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllowlistIdentifiers<TError = unknown>(
  args: InferRequestType<typeof client.allowlist_identifiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
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
        ? getGetAllowlistIdentifiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allowlist_identifiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAllowlistIdentifiersKey() {
  return ['allowlist_identifiers', '/allowlist_identifiers', 'POST'] as const
}

export function usePostAllowlistIdentifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.allowlist_identifiers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.allowlist_identifiers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllowlistIdentifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.allowlist_identifiers.$post> },
      ) => parseResponse(client.allowlist_identifiers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAllowlistIdentifiersIdentifierIdKey() {
  return ['allowlist_identifiers', '/allowlist_identifiers/:identifier_id', 'DELETE'] as const
}

export function useDeleteAllowlistIdentifiersIdentifierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAllowlistIdentifiersIdentifierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.allowlist_identifiers)[':identifier_id']['$delete']>
        },
      ) =>
        parseResponse(client.allowlist_identifiers[':identifier_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistIdentifiersKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers'] as const
}

export function useGetBlocklistIdentifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlocklistIdentifiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist_identifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistIdentifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlocklistIdentifiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist_identifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlocklistIdentifiersKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers', 'POST'] as const
}

export function usePostBlocklistIdentifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocklist_identifiers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.blocklist_identifiers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistIdentifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.blocklist_identifiers.$post> },
      ) => parseResponse(client.blocklist_identifiers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBlocklistIdentifiersIdentifierIdKey() {
  return ['blocklist_identifiers', '/blocklist_identifiers/:identifier_id', 'DELETE'] as const
}

export function useDeleteBlocklistIdentifiersIdentifierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlocklistIdentifiersIdentifierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.blocklist_identifiers)[':identifier_id']['$delete']>
        },
      ) =>
        parseResponse(client.blocklist_identifiers[':identifier_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBetaFeaturesInstanceSettingsKey() {
  return ['beta_features', '/beta_features/instance_settings', 'PATCH'] as const
}

export function usePatchBetaFeaturesInstanceSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta_features.instance_settings.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta_features.instance_settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBetaFeaturesInstanceSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta_features.instance_settings.$patch> },
      ) => parseResponse(client.beta_features.instance_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBetaFeaturesDomainKey() {
  return ['beta_features', '/beta_features/domain', 'PUT'] as const
}

export function usePutBetaFeaturesDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta_features.domain.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta_features.domain.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBetaFeaturesDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beta_features.domain.$put> }) =>
        parseResponse(client.beta_features.domain.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActorTokensKey() {
  return ['actor_tokens', '/actor_tokens', 'POST'] as const
}

export function usePostActorTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actor_tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.actor_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActorTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.actor_tokens.$post> }) =>
        parseResponse(client.actor_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActorTokensActorTokenIdRevokeKey() {
  return ['actor_tokens', '/actor_tokens/:actor_token_id/revoke', 'POST'] as const
}

export function usePostActorTokensActorTokenIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActorTokensActorTokenIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.actor_tokens)[':actor_token_id']['revoke']['$post']>
        },
      ) => parseResponse(client.actor_tokens[':actor_token_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsKey() {
  return ['domains', '/domains'] as const
}

export function useGetDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDomainsKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function usePostDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.$post> }) =>
        parseResponse(client.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsDomainIdKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function useDeleteDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['$delete']> },
      ) => parseResponse(client.domains[':domain_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDomainsDomainIdKey() {
  return ['domains', '/domains/:domain_id', 'PATCH'] as const
}

export function usePatchDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['$patch']> },
      ) => parseResponse(client.domains[':domain_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceKey() {
  return ['instance', '/instance'] as const
}

export function useGetInstance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInstanceKey() {
  return ['instance', '/instance', 'PATCH'] as const
}

export function usePatchInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.instance.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instance.$patch> }) =>
        parseResponse(client.instance.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchInstanceRestrictionsKey() {
  return ['instance', '/instance/restrictions', 'PATCH'] as const
}

export function usePatchInstanceRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.restrictions.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.restrictions.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceRestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.instance.restrictions.$patch> },
      ) => parseResponse(client.instance.restrictions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceProtectKey() {
  return ['instance', '/instance/protect'] as const
}

export function useGetInstanceProtect<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceProtectKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.protect.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceProtect<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceProtectKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.protect.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInstanceProtectKey() {
  return ['instance', '/instance/protect', 'PATCH'] as const
}

export function usePatchInstanceProtect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.protect.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.protect.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceProtectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instance.protect.$patch> }) =>
        parseResponse(client.instance.protect.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceCommunicationKey() {
  return ['instance', '/instance/communication'] as const
}

export function useGetInstanceCommunication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceCommunicationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.communication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceCommunication<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceCommunicationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance.communication.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInstanceCommunicationKey() {
  return ['instance', '/instance/communication', 'PATCH'] as const
}

export function usePatchInstanceCommunication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.communication.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.communication.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceCommunicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.instance.communication.$patch> },
      ) => parseResponse(client.instance.communication.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceOauthApplicationSettingsKey() {
  return ['instance', '/instance/oauth_application_settings'] as const
}

export function useGetInstanceOauthApplicationSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceOauthApplicationSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance.oauth_application_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceOauthApplicationSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceOauthApplicationSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.instance.oauth_application_settings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance.oauth_application_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInstanceOauthApplicationSettingsKey() {
  return ['instance', '/instance/oauth_application_settings', 'PATCH'] as const
}

export function usePatchInstanceOauthApplicationSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.oauth_application_settings.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.oauth_application_settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceOauthApplicationSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.instance.oauth_application_settings.$patch> },
      ) => parseResponse(client.instance.oauth_application_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceChangeDomainKey() {
  return ['instance', '/instance/change_domain', 'POST'] as const
}

export function usePostInstanceChangeDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.change_domain.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.change_domain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceChangeDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.instance.change_domain.$post> },
      ) => parseResponse(client.instance.change_domain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceOrganizationSettingsKey() {
  return ['instance', '/instance/organization_settings'] as const
}

export function useGetInstanceOrganizationSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceOrganizationSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.instance.organization_settings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance.organization_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceOrganizationSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.instance.organization_settings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstanceOrganizationSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.instance.organization_settings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance.organization_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInstanceOrganizationSettingsKey() {
  return ['instance', '/instance/organization_settings', 'PATCH'] as const
}

export function usePatchInstanceOrganizationSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.instance.organization_settings.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.instance.organization_settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInstanceOrganizationSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.instance.organization_settings.$patch> },
      ) => parseResponse(client.instance.organization_settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksSvixKey() {
  return ['webhooks', '/webhooks/svix', 'POST'] as const
}

export function usePostWebhooksSvix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksSvixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.webhooks.svix.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksSvixKey() {
  return ['webhooks', '/webhooks/svix', 'DELETE'] as const
}

export function useDeleteWebhooksSvix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksSvixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.webhooks.svix.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksSvixUrlKey() {
  return ['webhooks', '/webhooks/svix_url', 'POST'] as const
}

export function usePostWebhooksSvixUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.svix_url.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksSvixUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.webhooks.svix_url.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJwtTemplatesKey(args: InferRequestType<typeof client.jwt_templates.$get>) {
  return ['jwt_templates', '/jwt_templates', args] as const
}

export function useGetJwtTemplates<TError = unknown>(
  args: InferRequestType<typeof client.jwt_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJwtTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwt_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJwtTemplates<TError = unknown>(
  args: InferRequestType<typeof client.jwt_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJwtTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwt_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJwtTemplatesKey() {
  return ['jwt_templates', '/jwt_templates', 'POST'] as const
}

export function usePostJwtTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt_templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.jwt_templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJwtTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jwt_templates.$post> }) =>
        parseResponse(client.jwt_templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJwtTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
) {
  return ['jwt_templates', '/jwt_templates/:template_id', args] as const
}

export function useGetJwtTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
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
        ? getGetJwtTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwt_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJwtTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.jwt_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
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
        ? getGetJwtTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jwt_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteJwtTemplatesTemplateIdKey() {
  return ['jwt_templates', '/jwt_templates/:template_id', 'DELETE'] as const
}

export function useDeleteJwtTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJwtTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.jwt_templates)[':template_id']['$delete']> },
      ) => parseResponse(client.jwt_templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchJwtTemplatesTemplateIdKey() {
  return ['jwt_templates', '/jwt_templates/:template_id', 'PATCH'] as const
}

export function usePatchJwtTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jwt_templates)[':template_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchJwtTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jwt_templates)[':template_id']['$patch']> },
      ) => parseResponse(client.jwt_templates[':template_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMachinesKey(args: InferRequestType<typeof client.machines.$get>) {
  return ['machines', '/machines', args] as const
}

export function useGetMachines<TError = unknown>(
  args: InferRequestType<typeof client.machines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMachinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.machines.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMachines<TError = unknown>(
  args: InferRequestType<typeof client.machines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMachinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.machines.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMachinesKey() {
  return ['machines', '/machines', 'POST'] as const
}

export function usePostMachines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.machines.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.machines.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMachinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.machines.$post> }) =>
        parseResponse(client.machines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMachinesMachineIdKey(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
) {
  return ['machines', '/machines/:machine_id', args] as const
}

export function useGetMachinesMachineId<TError = unknown>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
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
        ? getGetMachinesMachineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.machines[':machine_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMachinesMachineId<TError = unknown>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
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
        ? getGetMachinesMachineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.machines[':machine_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMachinesMachineIdKey() {
  return ['machines', '/machines/:machine_id', 'DELETE'] as const
}

export function useDeleteMachinesMachineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.machines)[':machine_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.machines)[':machine_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMachinesMachineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.machines)[':machine_id']['$delete']> },
      ) => parseResponse(client.machines[':machine_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMachinesMachineIdKey() {
  return ['machines', '/machines/:machine_id', 'PATCH'] as const
}

export function usePatchMachinesMachineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.machines)[':machine_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.machines)[':machine_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMachinesMachineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.machines)[':machine_id']['$patch']> },
      ) => parseResponse(client.machines[':machine_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMachinesMachineIdSecretKeyKey(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
) {
  return ['machines', '/machines/:machine_id/secret_key', args] as const
}

export function useGetMachinesMachineIdSecretKey<TError = unknown>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
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
        ? getGetMachinesMachineIdSecretKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.machines[':machine_id'].secret_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMachinesMachineIdSecretKey<TError = unknown>(
  args: InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
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
        ? getGetMachinesMachineIdSecretKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.machines)[':machine_id']['secret_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.machines[':machine_id'].secret_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMachinesMachineIdSecretKeyRotateKey() {
  return ['machines', '/machines/:machine_id/secret_key/rotate', 'POST'] as const
}

export function usePostMachinesMachineIdSecretKeyRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMachinesMachineIdSecretKeyRotateKey()
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
            (typeof client.machines)[':machine_id']['secret_key']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(client.machines[':machine_id'].secret_key.rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMachinesMachineIdScopesKey() {
  return ['machines', '/machines/:machine_id/scopes', 'POST'] as const
}

export function usePostMachinesMachineIdScopes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.machines)[':machine_id']['scopes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMachinesMachineIdScopesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.machines)[':machine_id']['scopes']['$post']> },
      ) => parseResponse(client.machines[':machine_id'].scopes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMachinesMachineIdScopesOtherMachineIdKey() {
  return ['machines', '/machines/:machine_id/scopes/:other_machine_id', 'DELETE'] as const
}

export function useDeleteMachinesMachineIdScopesOtherMachineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMachinesMachineIdScopesOtherMachineIdKey()
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
            (typeof client.machines)[':machine_id']['scopes'][':other_machine_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.machines[':machine_id'].scopes[':other_machine_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function useGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function usePostOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$post> }) =>
        parseResponse(client.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id', args] as const
}

export function useGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
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
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
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
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdKey() {
  return ['organizations', '/organizations/:organization_id', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':organization_id']['$delete']> },
      ) => parseResponse(client.organizations[':organization_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdKey() {
  return ['organizations', '/organizations/:organization_id', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':organization_id']['$patch']> },
      ) => parseResponse(client.organizations[':organization_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdMetadataKey() {
  return ['organizations', '/organizations/:organization_id/metadata', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdMetadataKey()
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
            (typeof client.organizations)[':organization_id']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(client.organizations[':organization_id'].metadata.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdMetadataKey() {
  return ['organizations', '/organizations/:organization_id/metadata', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdMetadataKey()
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
            (typeof client.organizations)[':organization_id']['metadata']['$patch']
          >
        },
      ) =>
        parseResponse(client.organizations[':organization_id'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdLogoKey() {
  return ['organizations', '/organizations/:organization_id/logo', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['logo']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$put']>
        },
      ) => parseResponse(client.organizations[':organization_id'].logo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdLogoKey() {
  return ['organizations', '/organizations/:organization_id/logo', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['logo']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['logo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdLogoKey()
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
            (typeof client.organizations)[':organization_id']['logo']['$delete']
          >
        },
      ) => parseResponse(client.organizations[':organization_id'].logo.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdBillingSubscriptionKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/billing/subscription', args] as const
}

export function useGetOrganizationsOrganizationIdBillingSubscription<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdBillingSubscriptionKey(args)
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
                (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
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
          client.organizations[':organization_id'].billing.subscription.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdBillingSubscription<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdBillingSubscriptionKey(args)
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
                (typeof client.organizations)[':organization_id']['billing']['subscription']['$get']
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
          client.organizations[':organization_id'].billing.subscription.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdBillingCreditsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/billing/credits', args] as const
}

export function useGetOrganizationsOrganizationIdBillingCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdBillingCreditsKey(args)
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
                (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
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
          client.organizations[':organization_id'].billing.credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdBillingCredits<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdBillingCreditsKey(args)
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
                (typeof client.organizations)[':organization_id']['billing']['credits']['$get']
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
          client.organizations[':organization_id'].billing.credits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdBillingCreditsKey() {
  return ['organizations', '/organizations/:organization_id/billing/credits', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdBillingCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdBillingCreditsKey()
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
            (typeof client.organizations)[':organization_id']['billing']['credits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].billing.credits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInvitationsKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/invitations', args] as const
}

export function useGetOrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
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
        ? getGetOrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
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
        ? getGetOrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInvitationsKey() {
  return ['organizations', '/organizations/:organization_id/invitations', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['invitations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInvitationsKey()
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
            (typeof client.organizations)[':organization_id']['invitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].invitations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInvitationsBulkKey() {
  return ['organizations', '/organizations/:organization_id/invitations/bulk', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdInvitationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInvitationsBulkKey()
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
            (typeof client.organizations)[':organization_id']['invitations']['bulk']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].invitations.bulk.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInvitationsPendingKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id/invitations/pending', args] as const
}

export function useGetOrganizationsOrganizationIdInvitationsPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdInvitationsPendingKey(args)
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
                (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
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
          client.organizations[':organization_id'].invitations.pending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInvitationsPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdInvitationsPendingKey(args)
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
                (typeof client.organizations)[':organization_id']['invitations']['pending']['$get']
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
          client.organizations[':organization_id'].invitations.pending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdInvitationsInvitationIdKey(
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

export function useGetOrganizationsOrganizationIdInvitationsInvitationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdInvitationsInvitationIdKey(args)
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
                (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
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
          client.organizations[':organization_id'].invitations[':invitation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdInvitationsInvitationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrganizationIdInvitationsInvitationIdKey(args)
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
                (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['$get']
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
          client.organizations[':organization_id'].invitations[':invitation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeKey() {
  return [
    'organizations',
    '/organizations/:organization_id/invitations/:invitation_id/revoke',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdInvitationsInvitationIdRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdInvitationsInvitationIdRevokeKey()
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
            (typeof client.organizations)[':organization_id']['invitations'][':invitation_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].invitations[':invitation_id'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationRolesKey(
  args: InferRequestType<typeof client.organization_roles.$get>,
) {
  return ['organization_roles', '/organization_roles', args] as const
}

export function useGetOrganizationRoles<TError = unknown>(
  args: InferRequestType<typeof client.organization_roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
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
        ? getGetOrganizationRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationRoles<TError = unknown>(
  args: InferRequestType<typeof client.organization_roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
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
        ? getGetOrganizationRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationRolesKey() {
  return ['organization_roles', '/organization_roles', 'POST'] as const
}

export function usePostOrganizationRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization_roles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization_roles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization_roles.$post> }) =>
        parseResponse(client.organization_roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationRolesOrganizationRoleIdKey(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
) {
  return ['organization_roles', '/organization_roles/:organization_role_id', args] as const
}

export function useGetOrganizationRolesOrganizationRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
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
        ? getGetOrganizationRolesOrganizationRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization_roles[':organization_role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationRolesOrganizationRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
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
        ? getGetOrganizationRolesOrganizationRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization_roles[':organization_role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationRolesOrganizationRoleIdKey() {
  return ['organization_roles', '/organization_roles/:organization_role_id', 'DELETE'] as const
}

export function useDeleteOrganizationRolesOrganizationRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationRolesOrganizationRoleIdKey()
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
            (typeof client.organization_roles)[':organization_role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization_roles[':organization_role_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationRolesOrganizationRoleIdKey() {
  return ['organization_roles', '/organization_roles/:organization_role_id', 'PATCH'] as const
}

export function usePatchOrganizationRolesOrganizationRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_roles)[':organization_role_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization_roles)[':organization_role_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationRolesOrganizationRoleIdKey()
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
            (typeof client.organization_roles)[':organization_role_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organization_roles[':organization_role_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdKey() {
  return [
    'organization_roles',
    '/organization_roles/:organization_role_id/permissions/:permission_id',
    'POST',
  ] as const
}

export function usePostOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationRolesOrganizationRoleIdPermissionsPermissionIdKey()
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
            (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization_roles[':organization_role_id'].permissions[':permission_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdKey() {
  return [
    'organization_roles',
    '/organization_roles/:organization_role_id/permissions/:permission_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdKey()
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
            (typeof client.organization_roles)[':organization_role_id']['permissions'][':permission_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization_roles[':organization_role_id'].permissions[':permission_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdMembershipsKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/memberships', args] as const
}

export function useGetOrganizationsOrganizationIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
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
        ? getGetOrganizationsOrganizationIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
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
        ? getGetOrganizationsOrganizationIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdMembershipsKey() {
  return ['organizations', '/organizations/:organization_id/memberships', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdMembershipsKey()
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
            (typeof client.organizations)[':organization_id']['memberships']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].memberships.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdMembershipsUserIdKey() {
  return [
    'organizations',
    '/organizations/:organization_id/memberships/:user_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdMembershipsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdMembershipsUserIdKey()
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
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].memberships[':user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdMembershipsUserIdKey() {
  return ['organizations', '/organizations/:organization_id/memberships/:user_id', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdMembershipsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdMembershipsUserIdKey()
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
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].memberships[':user_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataKey() {
  return [
    'organizations',
    '/organizations/:organization_id/memberships/:user_id/metadata',
    'PATCH',
  ] as const
}

export function usePatchOrganizationsOrganizationIdMembershipsUserIdMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdMembershipsUserIdMetadataKey()
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
            (typeof client.organizations)[':organization_id']['memberships'][':user_id']['metadata']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].memberships[':user_id'].metadata.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdDomainsKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/domains', args] as const
}

export function useGetOrganizationsOrganizationIdDomains<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
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
        ? getGetOrganizationsOrganizationIdDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organization_id'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdDomains<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
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
        ? getGetOrganizationsOrganizationIdDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id']['domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':organization_id'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdDomainsKey() {
  return ['organizations', '/organizations/:organization_id/domains', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organization_id']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdDomainsKey()
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
            (typeof client.organizations)[':organization_id']['domains']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':organization_id'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdDomainsDomainIdKey() {
  return ['organizations', '/organizations/:organization_id/domains/:domain_id', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdDomainsDomainIdKey()
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
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].domains[':domain_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdDomainsDomainIdKey() {
  return ['organizations', '/organizations/:organization_id/domains/:domain_id', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationIdDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdDomainsDomainIdKey()
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
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].domains[':domain_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipKey() {
  return [
    'organizations',
    '/organizations/:organization_id/domains/:domain_id/verify_ownership',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipKey()
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
            (typeof client.organizations)[':organization_id']['domains'][':domain_id']['verify_ownership']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id'].domains[':domain_id'].verify_ownership.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationDomainsKey(
  args: InferRequestType<typeof client.organization_domains.$get>,
) {
  return ['organization_domains', '/organization_domains', args] as const
}

export function useGetOrganizationDomains<TError = unknown>(
  args: InferRequestType<typeof client.organization_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
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
        ? getGetOrganizationDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationDomains<TError = unknown>(
  args: InferRequestType<typeof client.organization_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
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
        ? getGetOrganizationDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProxyChecksKey() {
  return ['proxy_checks', '/proxy_checks', 'POST'] as const
}

export function usePostProxyChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy_checks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.proxy_checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProxyChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy_checks.$post> }) =>
        parseResponse(client.proxy_checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedirectUrlsKey(args: InferRequestType<typeof client.redirect_urls.$get>) {
  return ['redirect_urls', '/redirect_urls', args] as const
}

export function useGetRedirectUrls<TError = unknown>(
  args: InferRequestType<typeof client.redirect_urls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedirectUrlsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect_urls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedirectUrls<TError = unknown>(
  args: InferRequestType<typeof client.redirect_urls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRedirectUrlsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect_urls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRedirectUrlsKey() {
  return ['redirect_urls', '/redirect_urls', 'POST'] as const
}

export function usePostRedirectUrls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.redirect_urls.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.redirect_urls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedirectUrlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.redirect_urls.$post> }) =>
        parseResponse(client.redirect_urls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedirectUrlsIdKey(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
) {
  return ['redirect_urls', '/redirect_urls/:id', args] as const
}

export function useGetRedirectUrlsId<TError = unknown>(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectUrlsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect_urls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedirectUrlsId<TError = unknown>(
  args: InferRequestType<(typeof client.redirect_urls)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectUrlsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect_urls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRedirectUrlsIdKey() {
  return ['redirect_urls', '/redirect_urls/:id', 'DELETE'] as const
}

export function useDeleteRedirectUrlsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.redirect_urls)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.redirect_urls)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRedirectUrlsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.redirect_urls)[':id']['$delete']> },
      ) => parseResponse(client.redirect_urls[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignInTokensKey() {
  return ['sign_in_tokens', '/sign_in_tokens', 'POST'] as const
}

export function usePostSignInTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sign_in_tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sign_in_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignInTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sign_in_tokens.$post> }) =>
        parseResponse(client.sign_in_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignInTokensSignInTokenIdRevokeKey() {
  return ['sign_in_tokens', '/sign_in_tokens/:sign_in_token_id/revoke', 'POST'] as const
}

export function usePostSignInTokensSignInTokenIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignInTokensSignInTokenIdRevokeKey()
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
            (typeof client.sign_in_tokens)[':sign_in_token_id']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(client.sign_in_tokens[':sign_in_token_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSignUpsIdKey(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
) {
  return ['sign_ups', '/sign_ups/:id', args] as const
}

export function useGetSignUpsId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSignUpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_ups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignUpsId<TError = unknown>(
  args: InferRequestType<(typeof client.sign_ups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSignUpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sign_ups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSignUpsIdKey() {
  return ['sign_ups', '/sign_ups/:id', 'PATCH'] as const
}

export function usePatchSignUpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sign_ups)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sign_ups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSignUpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sign_ups)[':id']['$patch']> },
      ) => parseResponse(client.sign_ups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthApplicationsKey(
  args: InferRequestType<typeof client.oauth_applications.$get>,
) {
  return ['oauth_applications', '/oauth_applications', args] as const
}

export function useGetOauthApplications<TError = unknown>(
  args: InferRequestType<typeof client.oauth_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
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
        ? getGetOauthApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthApplications<TError = unknown>(
  args: InferRequestType<typeof client.oauth_applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
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
        ? getGetOauthApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth_applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthApplicationsKey() {
  return ['oauth_applications', '/oauth_applications', 'POST'] as const
}

export function usePostOauthApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth_applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth_applications.$post> }) =>
        parseResponse(client.oauth_applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthApplicationsOauthApplicationIdKey(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
) {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', args] as const
}

export function useGetOauthApplicationsOauthApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
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
        ? getGetOauthApplicationsOauthApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth_applications[':oauth_application_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthApplicationsOauthApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
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
        ? getGetOauthApplicationsOauthApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth_applications[':oauth_application_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOauthApplicationsOauthApplicationIdKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', 'DELETE'] as const
}

export function useDeleteOauthApplicationsOauthApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOauthApplicationsOauthApplicationIdKey()
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
            (typeof client.oauth_applications)[':oauth_application_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.oauth_applications[':oauth_application_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOauthApplicationsOauthApplicationIdKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id', 'PATCH'] as const
}

export function usePatchOauthApplicationsOauthApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOauthApplicationsOauthApplicationIdKey()
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
            (typeof client.oauth_applications)[':oauth_application_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.oauth_applications[':oauth_application_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOauthApplicationsOauthApplicationIdLogoKey() {
  return ['oauth_applications', '/oauth_applications/:oauth_application_id/logo', 'PUT'] as const
}

export function usePutOauthApplicationsOauthApplicationIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOauthApplicationsOauthApplicationIdLogoKey()
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
            (typeof client.oauth_applications)[':oauth_application_id']['logo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.oauth_applications[':oauth_application_id'].logo.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOauthApplicationsOauthApplicationIdRotateSecretKey() {
  return [
    'oauth_applications',
    '/oauth_applications/:oauth_application_id/rotate_secret',
    'POST',
  ] as const
}

export function usePostOauthApplicationsOauthApplicationIdRotateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthApplicationsOauthApplicationIdRotateSecretKey()
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
            (typeof client.oauth_applications)[':oauth_application_id']['rotate_secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.oauth_applications[':oauth_application_id'].rotate_secret.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOauthApplicationsOauthApplicationIdRevokeTokenKey() {
  return [
    'oauth_applications',
    '/oauth_applications/:oauth_application_id/revoke_token',
    'POST',
  ] as const
}

export function usePostOauthApplicationsOauthApplicationIdRevokeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthApplicationsOauthApplicationIdRevokeTokenKey()
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
            (typeof client.oauth_applications)[':oauth_application_id']['revoke_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.oauth_applications[':oauth_application_id'].revoke_token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSamlConnectionsKey(
  args: InferRequestType<typeof client.saml_connections.$get>,
) {
  return ['saml_connections', '/saml_connections', args] as const
}

export function useGetSamlConnections<TError = unknown>(
  args: InferRequestType<typeof client.saml_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
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
        ? getGetSamlConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamlConnections<TError = unknown>(
  args: InferRequestType<typeof client.saml_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
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
        ? getGetSamlConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSamlConnectionsKey() {
  return ['saml_connections', '/saml_connections', 'POST'] as const
}

export function usePostSamlConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml_connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.saml_connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamlConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saml_connections.$post> }) =>
        parseResponse(client.saml_connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSamlConnectionsSamlConnectionIdKey(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
) {
  return ['saml_connections', '/saml_connections/:saml_connection_id', args] as const
}

export function useGetSamlConnectionsSamlConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
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
        ? getGetSamlConnectionsSamlConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saml_connections[':saml_connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamlConnectionsSamlConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
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
        ? getGetSamlConnectionsSamlConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saml_connections[':saml_connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSamlConnectionsSamlConnectionIdKey() {
  return ['saml_connections', '/saml_connections/:saml_connection_id', 'DELETE'] as const
}

export function useDeleteSamlConnectionsSamlConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSamlConnectionsSamlConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$delete']>
        },
      ) =>
        parseResponse(client.saml_connections[':saml_connection_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSamlConnectionsSamlConnectionIdKey() {
  return ['saml_connections', '/saml_connections/:saml_connection_id', 'PATCH'] as const
}

export function usePatchSamlConnectionsSamlConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSamlConnectionsSamlConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.saml_connections)[':saml_connection_id']['$patch']>
        },
      ) => parseResponse(client.saml_connections[':saml_connection_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterpriseConnectionsKey(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
) {
  return ['enterprise_connections', '/enterprise_connections', args] as const
}

export function useGetEnterpriseConnections<TError = unknown>(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
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
        ? getGetEnterpriseConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprise_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterpriseConnections<TError = unknown>(
  args: InferRequestType<typeof client.enterprise_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
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
        ? getGetEnterpriseConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprise_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnterpriseConnectionsKey() {
  return ['enterprise_connections', '/enterprise_connections', 'POST'] as const
}

export function usePostEnterpriseConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_connections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enterprise_connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enterprise_connections.$post> },
      ) => parseResponse(client.enterprise_connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterpriseConnectionsEnterpriseConnectionIdKey(
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

export function useGetEnterpriseConnectionsEnterpriseConnectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEnterpriseConnectionsEnterpriseConnectionIdKey(args)
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
                (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
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
          client.enterprise_connections[':enterprise_connection_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterpriseConnectionsEnterpriseConnectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEnterpriseConnectionsEnterpriseConnectionIdKey(args)
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
                (typeof client.enterprise_connections)[':enterprise_connection_id']['$get']
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
          client.enterprise_connections[':enterprise_connection_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnterpriseConnectionsEnterpriseConnectionIdKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    'DELETE',
  ] as const
}

export function useDeleteEnterpriseConnectionsEnterpriseConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnterpriseConnectionsEnterpriseConnectionIdKey()
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
            (typeof client.enterprise_connections)[':enterprise_connection_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enterprise_connections[':enterprise_connection_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEnterpriseConnectionsEnterpriseConnectionIdKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id',
    'PATCH',
  ] as const
}

export function usePatchEnterpriseConnectionsEnterpriseConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEnterpriseConnectionsEnterpriseConnectionIdKey()
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
            (typeof client.enterprise_connections)[':enterprise_connection_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.enterprise_connections[':enterprise_connection_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnterpriseConnectionsEnterpriseConnectionIdTestRunsKey(
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

export function useGetEnterpriseConnectionsEnterpriseConnectionIdTestRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEnterpriseConnectionsEnterpriseConnectionIdTestRunsKey(args)
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
                (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
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
          client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEnterpriseConnectionsEnterpriseConnectionIdTestRunsKey(args)
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
                (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$get']
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
          client.enterprise_connections[':enterprise_connection_id'].test_runs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsKey() {
  return [
    'enterprise_connections',
    '/enterprise_connections/:enterprise_connection_id/test_runs',
    'POST',
  ] as const
}

export function usePostEnterpriseConnectionsEnterpriseConnectionIdTestRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseConnectionsEnterpriseConnectionIdTestRunsKey()
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
            (typeof client.enterprise_connections)[':enterprise_connection_id']['test_runs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.enterprise_connections[':enterprise_connection_id'].test_runs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTestingTokensKey() {
  return ['testing_tokens', '/testing_tokens', 'POST'] as const
}

export function usePostTestingTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testing_tokens.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestingTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.testing_tokens.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationMembershipsKey(
  args: InferRequestType<typeof client.organization_memberships.$get>,
) {
  return ['organization_memberships', '/organization_memberships', args] as const
}

export function useGetOrganizationMemberships<TError = unknown>(
  args: InferRequestType<typeof client.organization_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
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
        ? getGetOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationMemberships<TError = unknown>(
  args: InferRequestType<typeof client.organization_memberships.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
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
        ? getGetOrganizationMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_memberships.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWaitlistEntriesKey(
  args: InferRequestType<typeof client.waitlist_entries.$get>,
) {
  return ['waitlist_entries', '/waitlist_entries', args] as const
}

export function useGetWaitlistEntries<TError = unknown>(
  args: InferRequestType<typeof client.waitlist_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
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
        ? getGetWaitlistEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitlist_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWaitlistEntries<TError = unknown>(
  args: InferRequestType<typeof client.waitlist_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
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
        ? getGetWaitlistEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitlist_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWaitlistEntriesKey() {
  return ['waitlist_entries', '/waitlist_entries', 'POST'] as const
}

export function usePostWaitlistEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitlist_entries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.waitlist_entries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWaitlistEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.waitlist_entries.$post> }) =>
        parseResponse(client.waitlist_entries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWaitlistEntriesWaitlistEntryIdKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id', 'DELETE'] as const
}

export function useDeleteWaitlistEntriesWaitlistEntryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWaitlistEntriesWaitlistEntryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['$delete']>
        },
      ) => parseResponse(client.waitlist_entries[':waitlist_entry_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWaitlistEntriesWaitlistEntryIdInviteKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id/invite', 'POST'] as const
}

export function usePostWaitlistEntriesWaitlistEntryIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWaitlistEntriesWaitlistEntryIdInviteKey()
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
            (typeof client.waitlist_entries)[':waitlist_entry_id']['invite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.waitlist_entries[':waitlist_entry_id'].invite.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWaitlistEntriesWaitlistEntryIdRejectKey() {
  return ['waitlist_entries', '/waitlist_entries/:waitlist_entry_id/reject', 'POST'] as const
}

export function usePostWaitlistEntriesWaitlistEntryIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWaitlistEntriesWaitlistEntryIdRejectKey()
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
            (typeof client.waitlist_entries)[':waitlist_entry_id']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.waitlist_entries[':waitlist_entry_id'].reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommercePlansKey(args: InferRequestType<typeof client.commerce.plans.$get>) {
  return ['commerce', '/commerce/plans', args] as const
}

export function useGetCommercePlans<TError = unknown>(
  args: InferRequestType<typeof client.commerce.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommercePlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commerce.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePlans<TError = unknown>(
  args: InferRequestType<typeof client.commerce.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommercePlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commerce.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commerce.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommerceSubscriptionItemsKey(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
) {
  return ['commerce', '/commerce/subscription_items', args] as const
}

export function useGetCommerceSubscriptionItems<TError = unknown>(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
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
        ? getGetCommerceSubscriptionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commerce.subscription_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommerceSubscriptionItems<TError = unknown>(
  args: InferRequestType<typeof client.commerce.subscription_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
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
        ? getGetCommerceSubscriptionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.commerce.subscription_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commerce.subscription_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCommerceSubscriptionItemsSubscriptionItemIdKey() {
  return ['commerce', '/commerce/subscription_items/:subscription_item_id', 'DELETE'] as const
}

export function useDeleteCommerceSubscriptionItemsSubscriptionItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommerceSubscriptionItemsSubscriptionItemIdKey()
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
            (typeof client.commerce.subscription_items)[':subscription_item_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.commerce.subscription_items[':subscription_item_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/extend_free_trial',
    'POST',
  ] as const
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrial<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialKey()
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
            (typeof client.billing.subscription_items)[':subscription_item_id']['extend_free_trial']['$post']
          >
        },
      ) =>
        parseResponse(
          client.billing.subscription_items[':subscription_item_id'].extend_free_trial.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/price_transition',
    'POST',
  ] as const
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdPriceTransition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingSubscriptionItemsSubscriptionItemIdPriceTransitionKey()
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
            (typeof client.billing.subscription_items)[':subscription_item_id']['price_transition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.billing.subscription_items[':subscription_item_id'].price_transition.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsKey() {
  return ['billing', '/billing/subscription_items/:subscription_item_id/discounts', 'POST'] as const
}

export function usePostBillingSubscriptionItemsSubscriptionItemIdDiscounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingSubscriptionItemsSubscriptionItemIdDiscountsKey()
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
            (typeof client.billing.subscription_items)[':subscription_item_id']['discounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.billing.subscription_items[':subscription_item_id'].discounts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdKey() {
  return [
    'billing',
    '/billing/subscription_items/:subscription_item_id/discounts/:discount_id',
    'DELETE',
  ] as const
}

export function useDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdKey()
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
            (typeof client.billing.subscription_items)[':subscription_item_id']['discounts'][':discount_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.billing.subscription_items[':subscription_item_id'].discounts[
            ':discount_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationPermissionsKey(
  args: InferRequestType<typeof client.organization_permissions.$get>,
) {
  return ['organization_permissions', '/organization_permissions', args] as const
}

export function useGetOrganizationPermissions<TError = unknown>(
  args: InferRequestType<typeof client.organization_permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
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
        ? getGetOrganizationPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationPermissions<TError = unknown>(
  args: InferRequestType<typeof client.organization_permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
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
        ? getGetOrganizationPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization_permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationPermissionsKey() {
  return ['organization_permissions', '/organization_permissions', 'POST'] as const
}

export function usePostOrganizationPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization_permissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization_permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization_permissions.$post> },
      ) => parseResponse(client.organization_permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationPermissionsPermissionIdKey(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
) {
  return ['organization_permissions', '/organization_permissions/:permission_id', args] as const
}

export function useGetOrganizationPermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
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
        ? getGetOrganizationPermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization_permissions[':permission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationPermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.organization_permissions)[':permission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
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
        ? getGetOrganizationPermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization_permissions[':permission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationPermissionsPermissionIdKey() {
  return ['organization_permissions', '/organization_permissions/:permission_id', 'DELETE'] as const
}

export function useDeleteOrganizationPermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationPermissionsPermissionIdKey()
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
            (typeof client.organization_permissions)[':permission_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization_permissions[':permission_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationPermissionsPermissionIdKey() {
  return ['organization_permissions', '/organization_permissions/:permission_id', 'PATCH'] as const
}

export function usePatchOrganizationPermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization_permissions)[':permission_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization_permissions)[':permission_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationPermissionsPermissionIdKey()
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
            (typeof client.organization_permissions)[':permission_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.organization_permissions[':permission_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoleSetsKey(args: InferRequestType<typeof client.role_sets.$get>) {
  return ['role_sets', '/role_sets', args] as const
}

export function useGetRoleSets<TError = unknown>(
  args: InferRequestType<typeof client.role_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoleSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.role_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleSets<TError = unknown>(
  args: InferRequestType<typeof client.role_sets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoleSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.role_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoleSetsKey() {
  return ['role_sets', '/role_sets', 'POST'] as const
}

export function usePostRoleSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.role_sets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.role_sets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.role_sets.$post> }) =>
        parseResponse(client.role_sets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoleSetsRoleSetKeyOrIdKey(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
) {
  return ['role_sets', '/role_sets/:role_set_key_or_id', args] as const
}

export function useGetRoleSetsRoleSetKeyOrId<TError = unknown>(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
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
        ? getGetRoleSetsRoleSetKeyOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.role_sets[':role_set_key_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleSetsRoleSetKeyOrId<TError = unknown>(
  args: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
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
        ? getGetRoleSetsRoleSetKeyOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.role_sets[':role_set_key_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRoleSetsRoleSetKeyOrIdKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id', 'PATCH'] as const
}

export function usePatchRoleSetsRoleSetKeyOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoleSetsRoleSetKeyOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['$patch']> },
      ) => parseResponse(client.role_sets[':role_set_key_or_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoleSetsRoleSetKeyOrIdReplaceKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/replace', 'POST'] as const
}

export function usePostRoleSetsRoleSetKeyOrIdReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleSetsRoleSetKeyOrIdReplaceKey()
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
            (typeof client.role_sets)[':role_set_key_or_id']['replace']['$post']
          >
        },
      ) => parseResponse(client.role_sets[':role_set_key_or_id'].replace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoleSetsRoleSetKeyOrIdRolesKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/roles', 'POST'] as const
}

export function usePostRoleSetsRoleSetKeyOrIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleSetsRoleSetKeyOrIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['$post']>
        },
      ) => parseResponse(client.role_sets[':role_set_key_or_id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoleSetsRoleSetKeyOrIdRolesReplaceKey() {
  return ['role_sets', '/role_sets/:role_set_key_or_id/roles/replace', 'POST'] as const
}

export function usePostRoleSetsRoleSetKeyOrIdRolesReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleSetsRoleSetKeyOrIdRolesReplaceKey()
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
            (typeof client.role_sets)[':role_set_key_or_id']['roles']['replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.role_sets[':role_set_key_or_id'].roles.replace.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLogsKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function useGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLogsSchemasKey(args: InferRequestType<typeof client.logs.schemas.$get>) {
  return ['logs', '/logs/schemas', args] as const
}

export function useGetLogsSchemas<TError = unknown>(
  args: InferRequestType<typeof client.logs.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsSchemas<TError = unknown>(
  args: InferRequestType<typeof client.logs.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.schemas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsTypesKey() {
  return ['logs', '/logs/types'] as const
}

export function useGetLogsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.types.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsGroupsGroupIdEventsKey(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
) {
  return ['logs', '/logs/groups/:group_id/events', args] as const
}

export function useGetLogsGroupsGroupIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
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
        ? getGetLogsGroupsGroupIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.groups[':group_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsGroupsGroupIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.logs.groups)[':group_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
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
        ? getGetLogsGroupsGroupIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs.groups)[':group_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.groups[':group_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsEventTimeAndIdKey(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
) {
  return ['logs', '/logs/:event_time_and_id', args] as const
}

export function useGetLogsEventTimeAndId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
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
        ? getGetLogsEventTimeAndIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':event_time_and_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsEventTimeAndId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':event_time_and_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
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
        ? getGetLogsEventTimeAndIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':event_time_and_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':event_time_and_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPortalLinkTokensKey() {
  return ['admin_portal_link_tokens', '/admin_portal_link_tokens', 'POST'] as const
}

export function usePostAdminPortalLinkTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin_portal_link_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin_portal_link_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPortalLinkTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin_portal_link_tokens.$post> },
      ) => parseResponse(client.admin_portal_link_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeKey() {
  return [
    'admin_portal_link_tokens',
    '/admin_portal_link_tokens/:adminPortalLinkTokenID/revoke',
    'POST',
  ] as const
}

export function usePostAdminPortalLinkTokensAdminPortalLinkTokenIDRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeKey()
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
            (typeof client.admin_portal_link_tokens)[':adminPortalLinkTokenID']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin_portal_link_tokens[':adminPortalLinkTokenID'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysKey(args: InferRequestType<typeof client.api_keys.$get>) {
  return ['api_keys', '/api_keys', args] as const
}

export function useGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_keys.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiKeysKey() {
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_keys.$post> }) =>
        parseResponse(client.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysApiKeyIDKey(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
) {
  return ['api_keys', '/api_keys/:apiKeyID', args] as const
}

export function useGetApiKeysApiKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
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
        ? getGetApiKeysApiKeyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':apiKeyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysApiKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
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
        ? getGetApiKeysApiKeyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':apiKeyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiKeysApiKeyIDKey() {
  return ['api_keys', '/api_keys/:apiKeyID', 'DELETE'] as const
}

export function useDeleteApiKeysApiKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysApiKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$delete']> },
      ) => parseResponse(client.api_keys[':apiKeyID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysApiKeyIDKey() {
  return ['api_keys', '/api_keys/:apiKeyID', 'PATCH'] as const
}

export function usePatchApiKeysApiKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysApiKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':apiKeyID']['$patch']> },
      ) => parseResponse(client.api_keys[':apiKeyID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysApiKeyIDSecretKey(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
) {
  return ['api_keys', '/api_keys/:apiKeyID/secret', args] as const
}

export function useGetApiKeysApiKeyIDSecret<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
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
        ? getGetApiKeysApiKeyIDSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':apiKeyID'].secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysApiKeyIDSecret<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
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
        ? getGetApiKeysApiKeyIDSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':apiKeyID'].secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeysApiKeyIDRevokeKey() {
  return ['api_keys', '/api_keys/:apiKeyID/revoke', 'POST'] as const
}

export function usePostApiKeysApiKeyIDRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysApiKeyIDRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api_keys)[':apiKeyID']['revoke']['$post']> },
      ) => parseResponse(client.api_keys[':apiKeyID'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysVerifyKey() {
  return ['api_keys', '/api_keys/verify', 'POST'] as const
}

export function usePostApiKeysVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api_keys.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_keys.verify.$post> }) =>
        parseResponse(client.api_keys.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetM2mTokensKey(args: InferRequestType<typeof client.m2m_tokens.$get>) {
  return ['m2m_tokens', '/m2m_tokens', args] as const
}

export function useGetM2mTokens<TError = unknown>(
  args: InferRequestType<typeof client.m2m_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetM2mTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.m2m_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetM2mTokens<TError = unknown>(
  args: InferRequestType<typeof client.m2m_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetM2mTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.m2m_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostM2mTokensKey() {
  return ['m2m_tokens', '/m2m_tokens', 'POST'] as const
}

export function usePostM2mTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.m2m_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostM2mTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.m2m_tokens.$post> }) =>
        parseResponse(client.m2m_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostM2mTokensM2mTokenIdRevokeKey() {
  return ['m2m_tokens', '/m2m_tokens/:m2m_token_id/revoke', 'POST'] as const
}

export function usePostM2mTokensM2mTokenIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostM2mTokensM2mTokenIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.m2m_tokens)[':m2m_token_id']['revoke']['$post']>
        },
      ) => parseResponse(client.m2m_tokens[':m2m_token_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostM2mTokensVerifyKey() {
  return ['m2m_tokens', '/m2m_tokens/verify', 'POST'] as const
}

export function usePostM2mTokensVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.m2m_tokens.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.m2m_tokens.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostM2mTokensVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.m2m_tokens.verify.$post> }) =>
        parseResponse(client.m2m_tokens.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthApplicationsAccessTokensVerifyKey() {
  return ['oauth_applications', '/oauth_applications/access_tokens/verify', 'POST'] as const
}

export function usePostOauthApplicationsAccessTokensVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.oauth_applications.access_tokens.verify.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthApplicationsAccessTokensVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.oauth_applications.access_tokens.verify.$post> },
      ) => parseResponse(client.oauth_applications.access_tokens.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
