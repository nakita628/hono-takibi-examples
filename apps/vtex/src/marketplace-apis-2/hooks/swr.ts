import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSuggestionsKey() {
  return ['suggestions'] as const
}

export function getGetSuggestionsKey(args: InferRequestType<typeof client.suggestions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions', keyArgs] as const
}

export function useGetSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuggestionsConfigurationKey(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration', keyArgs] as const
}

export function useGetSuggestionsConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
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
        ? getGetSuggestionsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggestions.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
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
        ? getGetSuggestionsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suggestions.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSuggestionsConfigurationKey() {
  return ['suggestions', '/suggestions/configuration', 'PUT'] as const
}

export function usePutSuggestionsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suggestions.configuration.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.suggestions.configuration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suggestions.configuration.$put> },
      ) => parseResponse(client.suggestions.configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuggestionsConfigurationAutoapprovalToggleKey(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration/autoapproval/toggle', keyArgs] as const
}

export function useGetSuggestionsConfigurationAutoapprovalToggle<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
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
        ? getGetSuggestionsConfigurationAutoapprovalToggleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suggestions.configuration.autoapproval.toggle.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsConfigurationAutoapprovalToggle<TError = unknown>(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
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
        ? getGetSuggestionsConfigurationAutoapprovalToggleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suggestions.configuration.autoapproval.toggle.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSuggestionsConfigurationAutoapprovalToggleKey() {
  return ['suggestions', '/suggestions/configuration/autoapproval/toggle', 'PUT'] as const
}

export function usePutSuggestionsConfigurationAutoapprovalToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.suggestions.configuration.autoapproval.toggle.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsConfigurationAutoapprovalToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>
        },
      ) =>
        parseResponse(
          client.suggestions.configuration.autoapproval.toggle.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdKey() {
  return [
    'suggestions',
    '/suggestions/configuration/autoapproval/toggle/seller/:sellerId',
    'PUT',
  ] as const
}

export function usePutSuggestionsConfigurationAutoapprovalToggleSellerSellerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsConfigurationAutoapprovalToggleSellerSellerIdKey()
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
            (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.suggestions.configuration.autoapproval.toggle.seller[':sellerId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSuggestionsConfigurationSellerSellerIdKey(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/configuration/seller/:sellerId', keyArgs] as const
}

export function useGetSuggestionsConfigurationSellerSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
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
        ? getGetSuggestionsConfigurationSellerSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suggestions.configuration.seller[':sellerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsConfigurationSellerSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
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
        ? getGetSuggestionsConfigurationSellerSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suggestions.configuration.seller[':sellerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSuggestionsConfigurationSellerSellerIdKey() {
  return ['suggestions', '/suggestions/configuration/seller/:sellerId', 'PUT'] as const
}

export function usePutSuggestionsConfigurationSellerSellerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsConfigurationSellerSellerIdKey()
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
            (typeof client.suggestions.configuration.seller)[':sellerId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.suggestions.configuration.seller[':sellerId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSuggestionsMatchesActionActionNameKey() {
  return ['suggestions', '/suggestions/matches/action/:actionName', 'PUT'] as const
}

export function usePutSuggestionsMatchesActionActionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions.matches.action)[':actionName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsMatchesActionActionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>
        },
      ) => parseResponse(client.suggestions.matches.action[':actionName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuggestionsSellerIdSellerSkuIdKey(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', keyArgs] as const
}

export function useGetSuggestionsSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
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
        ? getGetSuggestionsSellerIdSellerSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
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
        ? getGetSuggestionsSellerIdSellerSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSuggestionsSellerIdSellerSkuIdKey() {
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', 'PUT'] as const
}

export function usePutSuggestionsSellerIdSellerSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsSellerIdSellerSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>
        },
      ) => parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSuggestionsSellerIdSellerSkuIdKey() {
  return ['suggestions', '/suggestions/:sellerId/:sellerSkuId', 'DELETE'] as const
}

export function useDeleteSuggestionsSellerIdSellerSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuggestionsSellerIdSellerSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>
        },
      ) =>
        parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuggestionsSellerIdSellerskuidVersionsKey(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerskuid/versions', keyArgs] as const
}

export function useGetSuggestionsSellerIdSellerskuidVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
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
        ? getGetSuggestionsSellerIdSellerskuidVersionsKey(args)
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
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
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
          client.suggestions[':sellerId'][':sellerskuid'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsSellerIdSellerskuidVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
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
        ? getGetSuggestionsSellerIdSellerskuidVersionsKey(args)
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
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
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
          client.suggestions[':sellerId'][':sellerskuid'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSuggestionsSellerIdSellerskuidVersionsVersionKey(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['suggestions', '/suggestions/:sellerId/:sellerskuid/versions/:version', keyArgs] as const
}

export function useGetSuggestionsSellerIdSellerskuidVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
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
        ? getGetSuggestionsSellerIdSellerskuidVersionsVersionKey(args)
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
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
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
          client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuggestionsSellerIdSellerskuidVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
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
        ? getGetSuggestionsSellerIdSellerskuidVersionsVersionKey(args)
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
                (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
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
          client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidKey() {
  return [
    'suggestions',
    '/suggestions/:sellerId/:sellerskuid/versions/:version/matches/:matchid',
    'PUT',
  ] as const
}

export function usePutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchidKey()
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
            (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].matches[
            ':matchid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
