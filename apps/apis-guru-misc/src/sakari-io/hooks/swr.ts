import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdCampaignsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/campaigns', args] as const
}

export function useGetV1AccountsAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
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
        ? getGetV1AccountsAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
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
        ? getGetV1AccountsAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdCampaignsKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns', 'POST'] as const
}

export function usePostV1AccountsAccountIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':accountId'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', args] as const
}

export function useGetV1AccountsAccountIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
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
        ? getGetV1AccountsAccountIdCampaignsCampaignIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
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
          client.v1.accounts[':accountId'].campaigns[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
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
        ? getGetV1AccountsAccountIdCampaignsCampaignIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
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
          client.v1.accounts[':accountId'].campaigns[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountsAccountIdCampaignsCampaignIdKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', 'PUT'] as const
}

export function usePutV1AccountsAccountIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountsAccountIdCampaignsCampaignIdKey()
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
            (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].campaigns[':campaignId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdCampaignsCampaignIdKey() {
  return ['v1', '/v1/accounts/:accountId/campaigns/:campaignId', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdCampaignsCampaignIdKey()
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
            (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].campaigns[':campaignId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdContactsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/contacts', args] as const
}

export function useGetV1AccountsAccountIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
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
        ? getGetV1AccountsAccountIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
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
        ? getGetV1AccountsAccountIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdContactsKey() {
  return ['v1', '/v1/accounts/:accountId/contacts', 'POST'] as const
}

export function usePostV1AccountsAccountIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':accountId'].contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdContactsContactIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', args] as const
}

export function useGetV1AccountsAccountIdContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
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
        ? getGetV1AccountsAccountIdContactsContactIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
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
          client.v1.accounts[':accountId'].contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdContactsContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
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
        ? getGetV1AccountsAccountIdContactsContactIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
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
          client.v1.accounts[':accountId'].contacts[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountsAccountIdContactsContactIdKey() {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', 'PUT'] as const
}

export function usePutV1AccountsAccountIdContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountsAccountIdContactsContactIdKey()
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
            (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].contacts[':contactId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdContactsContactIdKey() {
  return ['v1', '/v1/accounts/:accountId/contacts/:contactId', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdContactsContactIdKey()
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
            (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].contacts[':contactId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdConversationsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/conversations', args] as const
}

export function useGetV1AccountsAccountIdConversations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
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
        ? getGetV1AccountsAccountIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdConversations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
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
        ? getGetV1AccountsAccountIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdConversationsConversationIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/conversations/:conversationId', args] as const
}

export function useGetV1AccountsAccountIdConversationsConversationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
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
        ? getGetV1AccountsAccountIdConversationsConversationIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
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
          client.v1.accounts[':accountId'].conversations[':conversationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdConversationsConversationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
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
        ? getGetV1AccountsAccountIdConversationsConversationIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
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
          client.v1.accounts[':accountId'].conversations[':conversationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountsAccountIdConversationsConversationIdCloseKey() {
  return ['v1', '/v1/accounts/:accountId/conversations/:conversationId/close', 'PUT'] as const
}

export function usePutV1AccountsAccountIdConversationsConversationIdClose<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountsAccountIdConversationsConversationIdCloseKey()
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
            (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].conversations[':conversationId'].close.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdMessagesKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/messages', args] as const
}

export function useGetV1AccountsAccountIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
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
        ? getGetV1AccountsAccountIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
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
        ? getGetV1AccountsAccountIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdMessagesKey() {
  return ['v1', '/v1/accounts/:accountId/messages', 'POST'] as const
}

export function usePostV1AccountsAccountIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':accountId'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdMessagesMessageIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/messages/:messageId', args] as const
}

export function useGetV1AccountsAccountIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
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
        ? getGetV1AccountsAccountIdMessagesMessageIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
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
          client.v1.accounts[':accountId'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
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
        ? getGetV1AccountsAccountIdMessagesMessageIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
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
          client.v1.accounts[':accountId'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTemplatesKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/templates', args] as const
}

export function useGetV1AccountsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
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
        ? getGetV1AccountsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
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
        ? getGetV1AccountsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdTemplatesKey() {
  return ['v1', '/v1/accounts/:accountId/templates', 'POST'] as const
}

export function usePostV1AccountsAccountIdTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':accountId'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTemplatesTemplateIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', args] as const
}

export function useGetV1AccountsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
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
        ? getGetV1AccountsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
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
          client.v1.accounts[':accountId'].templates[':templateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
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
        ? getGetV1AccountsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
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
          client.v1.accounts[':accountId'].templates[':templateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AccountsAccountIdTemplatesTemplateIdKey() {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', 'PUT'] as const
}

export function usePutV1AccountsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AccountsAccountIdTemplatesTemplateIdKey()
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
            (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].templates[':templateId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdTemplatesTemplateIdKey() {
  return ['v1', '/v1/accounts/:accountId/templates/:templateId', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdTemplatesTemplateIdKey()
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
            (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].templates[':templateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdWebhooksKey(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
) {
  return ['v1', '/v1/accounts/:accountId/webhooks', args] as const
}

export function useGetV1AccountsAccountIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
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
        ? getGetV1AccountsAccountIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
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
        ? getGetV1AccountsAccountIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':accountId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdWebhooksKey() {
  return ['v1', '/v1/accounts/:accountId/webhooks', 'POST'] as const
}

export function usePostV1AccountsAccountIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':accountId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdWebhooksUrlKey() {
  return ['v1', '/v1/accounts/:accountId/webhooks/:url', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdWebhooksUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdWebhooksUrlKey()
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
            (typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':accountId'].webhooks[':url'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ToolsSharefileKey() {
  return ['v1', '/v1/tools/sharefile', 'POST'] as const
}

export function usePostV1ToolsSharefile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tools.sharefile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tools.sharefile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ToolsSharefileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tools.sharefile.$post> }) =>
        parseResponse(client.v1.tools.sharefile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
