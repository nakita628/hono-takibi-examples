import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getGetV1betaAccountSummariesKey(
  args: InferRequestType<typeof client.v1beta.accountSummaries.$get>,
) {
  return ['v1beta', '/v1beta/accountSummaries', args] as const
}

export function useGetV1betaAccountSummaries<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.accountSummaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
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
        ? getGetV1betaAccountSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.accountSummaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountSummaries<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.accountSummaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
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
        ? getGetV1betaAccountSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.accountSummaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAccountsKey(
  args: InferRequestType<typeof client.v1beta.accounts.$get>,
) {
  return ['v1beta', '/v1beta/accounts', args] as const
}

export function useGetV1betaAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1betaAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1betaAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAccountsProvisionAccountTicketKey() {
  return ['v1beta', '/v1beta/accounts:provisionAccountTicket', 'POST'] as const
}

export function usePostV1betaAccountsProvisionAccountTicket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountsProvisionAccountTicketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>
        },
      ) =>
        parseResponse(client.v1beta['accounts:provisionAccountTicket'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaPropertiesKey(
  args: InferRequestType<typeof client.v1beta.properties.$get>,
) {
  return ['v1beta', '/v1beta/properties', args] as const
}

export function useGetV1betaProperties<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.properties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
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
        ? getGetV1betaPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaProperties<TError = unknown>(
  args: InferRequestType<typeof client.v1beta.properties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
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
        ? getGetV1betaPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaPropertiesKey() {
  return ['v1beta', '/v1beta/properties', 'POST'] as const
}

export function usePostV1betaProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1beta.properties.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1beta.properties.$post> }) =>
        parseResponse(client.v1beta.properties.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaAccountSearchChangeHistoryEventsKey() {
  return ['v1beta', '/v1beta/:account:searchChangeHistoryEvents', 'POST'] as const
}

export function usePostV1betaAccountSearchChangeHistoryEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountSearchChangeHistoryEventsKey()
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
            (typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta[':account:searchChangeHistoryEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaEntityRunAccessReportKey() {
  return ['v1beta', '/v1beta/:entity:runAccessReport', 'POST'] as const
}

export function usePostV1betaEntityRunAccessReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaEntityRunAccessReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']> },
      ) => parseResponse(client.v1beta[':entity:runAccessReport'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaNameKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function useGetV1betaName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1betaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1betaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaNameKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function useDeleteV1betaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':name']['$delete']> },
      ) => parseResponse(client.v1beta[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaNameKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function usePatchV1betaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':name']['$patch']> },
      ) => parseResponse(client.v1beta[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaNameArchiveKey() {
  return ['v1beta', '/v1beta/:name:archive', 'POST'] as const
}

export function usePostV1betaNameArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':name:archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaNameArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':name:archive']['$post']> },
      ) => parseResponse(client.v1beta[':name:archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentConversionEventsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/conversionEvents', args] as const
}

export function useGetV1betaParentConversionEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
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
        ? getGetV1betaParentConversionEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent'].conversionEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentConversionEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
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
        ? getGetV1betaParentConversionEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent'].conversionEvents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentConversionEventsKey() {
  return ['v1beta', '/v1beta/:parent/conversionEvents', 'POST'] as const
}

export function usePostV1betaParentConversionEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentConversionEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>
        },
      ) => parseResponse(client.v1beta[':parent'].conversionEvents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentCustomDimensionsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/customDimensions', args] as const
}

export function useGetV1betaParentCustomDimensions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
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
        ? getGetV1betaParentCustomDimensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent'].customDimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentCustomDimensions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
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
        ? getGetV1betaParentCustomDimensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent'].customDimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentCustomDimensionsKey() {
  return ['v1beta', '/v1beta/:parent/customDimensions', 'POST'] as const
}

export function usePostV1betaParentCustomDimensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentCustomDimensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>
        },
      ) => parseResponse(client.v1beta[':parent'].customDimensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentCustomMetricsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/customMetrics', args] as const
}

export function useGetV1betaParentCustomMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
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
        ? getGetV1betaParentCustomMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].customMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentCustomMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
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
        ? getGetV1betaParentCustomMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].customMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentCustomMetricsKey() {
  return ['v1beta', '/v1beta/:parent/customMetrics', 'POST'] as const
}

export function usePostV1betaParentCustomMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentCustomMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']> },
      ) => parseResponse(client.v1beta[':parent'].customMetrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentDataStreamsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/dataStreams', args] as const
}

export function useGetV1betaParentDataStreams<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
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
        ? getGetV1betaParentDataStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].dataStreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentDataStreams<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
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
        ? getGetV1betaParentDataStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].dataStreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentDataStreamsKey() {
  return ['v1beta', '/v1beta/:parent/dataStreams', 'POST'] as const
}

export function usePostV1betaParentDataStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentDataStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']> },
      ) => parseResponse(client.v1beta[':parent'].dataStreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentFirebaseLinksKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/firebaseLinks', args] as const
}

export function useGetV1betaParentFirebaseLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
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
        ? getGetV1betaParentFirebaseLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].firebaseLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentFirebaseLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
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
        ? getGetV1betaParentFirebaseLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].firebaseLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentFirebaseLinksKey() {
  return ['v1beta', '/v1beta/:parent/firebaseLinks', 'POST'] as const
}

export function usePostV1betaParentFirebaseLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentFirebaseLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']> },
      ) => parseResponse(client.v1beta[':parent'].firebaseLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentGoogleAdsLinksKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/googleAdsLinks', args] as const
}

export function useGetV1betaParentGoogleAdsLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
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
        ? getGetV1betaParentGoogleAdsLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].googleAdsLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentGoogleAdsLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
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
        ? getGetV1betaParentGoogleAdsLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].googleAdsLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentGoogleAdsLinksKey() {
  return ['v1beta', '/v1beta/:parent/googleAdsLinks', 'POST'] as const
}

export function usePostV1betaParentGoogleAdsLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentGoogleAdsLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']> },
      ) => parseResponse(client.v1beta[':parent'].googleAdsLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentMeasurementProtocolSecretsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/measurementProtocolSecrets', args] as const
}

export function useGetV1betaParentMeasurementProtocolSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
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
        ? getGetV1betaParentMeasurementProtocolSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta[':parent'].measurementProtocolSecrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentMeasurementProtocolSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
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
        ? getGetV1betaParentMeasurementProtocolSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta[':parent'].measurementProtocolSecrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentMeasurementProtocolSecretsKey() {
  return ['v1beta', '/v1beta/:parent/measurementProtocolSecrets', 'POST'] as const
}

export function usePostV1betaParentMeasurementProtocolSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentMeasurementProtocolSecretsKey()
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
            (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta[':parent'].measurementProtocolSecrets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaPropertyAcknowledgeUserDataCollectionKey() {
  return ['v1beta', '/v1beta/:property:acknowledgeUserDataCollection', 'POST'] as const
}

export function usePostV1betaPropertyAcknowledgeUserDataCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaPropertyAcknowledgeUserDataCollectionKey()
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
            (typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta[':property:acknowledgeUserDataCollection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
