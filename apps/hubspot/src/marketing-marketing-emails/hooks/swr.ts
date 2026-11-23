import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getGetMarketingEmails202609Key(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09', args] as const
}

export function useGetMarketingEmails202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
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
        ? getGetMarketingEmails202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.emails['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
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
        ? getGetMarketingEmails202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.emails['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingEmails202609Key() {
  return ['marketing', '/marketing/emails/2026-09', 'POST'] as const
}

export function usePostMarketingEmails202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']> },
      ) => parseResponse(client.marketing.emails['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609AbTestCreateVariationKey() {
  return ['marketing', '/marketing/emails/2026-09/ab-test/create-variation', 'POST'] as const
}

export function usePostMarketingEmails202609AbTestCreateVariation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609AbTestCreateVariationKey()
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
            (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09']['ab-test']['create-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609CloneKey() {
  return ['marketing', '/marketing/emails/2026-09/clone', 'POST'] as const
}

export function usePostMarketingEmails202609Clone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609CloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']> },
      ) => parseResponse(client.marketing.emails['2026-09'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingEmails202609StatisticsHistogramKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/statistics/histogram', args] as const
}

export function useGetMarketingEmails202609StatisticsHistogram<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
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
        ? getGetMarketingEmails202609StatisticsHistogramKey(args)
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
                (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
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
          client.marketing.emails['2026-09'].statistics.histogram.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609StatisticsHistogram<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
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
        ? getGetMarketingEmails202609StatisticsHistogramKey(args)
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
                (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
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
          client.marketing.emails['2026-09'].statistics.histogram.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingEmails202609StatisticsListKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/statistics/list', args] as const
}

export function useGetMarketingEmails202609StatisticsList<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
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
        ? getGetMarketingEmails202609StatisticsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.emails['2026-09'].statistics.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609StatisticsList<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
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
        ? getGetMarketingEmails202609StatisticsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.emails['2026-09'].statistics.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingEmails202609EmailIdKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId', args] as const
}

export function useGetMarketingEmails202609EmailId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
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
        ? getGetMarketingEmails202609EmailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.emails['2026-09'][':emailId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609EmailId<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
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
        ? getGetMarketingEmails202609EmailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing.emails['2026-09'][':emailId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingEmails202609EmailIdKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId', 'DELETE'] as const
}

export function useDeleteMarketingEmails202609EmailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingEmails202609EmailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>
        },
      ) =>
        parseResponse(client.marketing.emails['2026-09'][':emailId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingEmails202609EmailIdKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId', 'PATCH'] as const
}

export function usePatchMarketingEmails202609EmailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingEmails202609EmailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>
        },
      ) => parseResponse(client.marketing.emails['2026-09'][':emailId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingEmails202609EmailIdAbTestGetVariationKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/ab-test/get-variation', args] as const
}

export function useGetMarketingEmails202609EmailIdAbTestGetVariation<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
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
        ? getGetMarketingEmails202609EmailIdAbTestGetVariationKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
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
          client.marketing.emails['2026-09'][':emailId']['ab-test']['get-variation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609EmailIdAbTestGetVariation<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
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
        ? getGetMarketingEmails202609EmailIdAbTestGetVariationKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
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
          client.marketing.emails['2026-09'][':emailId']['ab-test']['get-variation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingEmails202609EmailIdDraftKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft', args] as const
}

export function useGetMarketingEmails202609EmailIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
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
        ? getGetMarketingEmails202609EmailIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609EmailIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
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
        ? getGetMarketingEmails202609EmailIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMarketingEmails202609EmailIdDraftKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft', 'PATCH'] as const
}

export function usePatchMarketingEmails202609EmailIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingEmails202609EmailIdDraftKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].draft.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609EmailIdDraftResetKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft/reset', 'POST'] as const
}

export function usePostMarketingEmails202609EmailIdDraftReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609EmailIdDraftResetKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].draft.reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609EmailIdPublishKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/publish', 'POST'] as const
}

export function usePostMarketingEmails202609EmailIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609EmailIdPublishKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingEmails202609EmailIdRevisionsKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/revisions', args] as const
}

export function useGetMarketingEmails202609EmailIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
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
        ? getGetMarketingEmails202609EmailIdRevisionsKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
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
          client.marketing.emails['2026-09'][':emailId'].revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609EmailIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
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
        ? getGetMarketingEmails202609EmailIdRevisionsKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
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
          client.marketing.emails['2026-09'][':emailId'].revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingEmails202609EmailIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/revisions/:revisionId', args] as const
}

export function useGetMarketingEmails202609EmailIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
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
        ? getGetMarketingEmails202609EmailIdRevisionsRevisionIdKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
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
          client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingEmails202609EmailIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
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
        ? getGetMarketingEmails202609EmailIdRevisionsRevisionIdKey(args)
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
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
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
          client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreKey() {
  return [
    'marketing',
    '/marketing/emails/2026-09/:emailId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function usePostMarketingEmails202609EmailIdRevisionsRevisionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftKey() {
  return [
    'marketing',
    '/marketing/emails/2026-09/:emailId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function usePostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraft<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'][
            'restore-to-draft'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingEmails202609EmailIdUnpublishKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/unpublish', 'POST'] as const
}

export function usePostMarketingEmails202609EmailIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmails202609EmailIdUnpublishKey()
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
            (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.emails['2026-09'][':emailId'].unpublish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
