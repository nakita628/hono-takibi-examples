import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4SpreadsheetsKey() {
  return ['v4', '/v4/spreadsheets', 'POST'] as const
}

export function usePostV4Spreadsheets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.spreadsheets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.spreadsheets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.spreadsheets.$post> }) =>
        parseResponse(client.v4.spreadsheets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SpreadsheetsSpreadsheetIdKey(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId', args] as const
}

export function useGetV4SpreadsheetsSpreadsheetId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
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
        ? getGetV4SpreadsheetsSpreadsheetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.spreadsheets[':spreadsheetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SpreadsheetsSpreadsheetId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
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
        ? getGetV4SpreadsheetsSpreadsheetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.spreadsheets[':spreadsheetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/developerMetadata/:metadataId', args] as const
}

export function useGetV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
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
          client.v4.spreadsheets[':spreadsheetId'].developerMetadata[':metadataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
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
          client.v4.spreadsheets[':spreadsheetId'].developerMetadata[':metadataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/developerMetadata:search', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['developerMetadata:search'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/sheets/:sheetId:copyTo', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId'].sheets[':sheetId:copyTo'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SpreadsheetsSpreadsheetIdValuesRangeKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range', args] as const
}

export function useGetV4SpreadsheetsSpreadsheetIdValuesRange<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdValuesRangeKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
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
          client.v4.spreadsheets[':spreadsheetId'].values[':range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SpreadsheetsSpreadsheetIdValuesRange<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdValuesRangeKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
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
          client.v4.spreadsheets[':spreadsheetId'].values[':range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4SpreadsheetsSpreadsheetIdValuesRangeKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range', 'PUT'] as const
}

export function usePutV4SpreadsheetsSpreadsheetIdValuesRange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SpreadsheetsSpreadsheetIdValuesRangeKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId'].values[':range'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range:append', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesRangeAppend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId'].values[':range:append'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range:clear', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesRangeClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId'].values[':range:clear'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchClear', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesBatchClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['values:batchClear'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchClearByDataFilter', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilter<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['values:batchClearByDataFilter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SpreadsheetsSpreadsheetIdValuesBatchGetKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchGet', args] as const
}

export function useGetV4SpreadsheetsSpreadsheetIdValuesBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdValuesBatchGetKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
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
          client.v4.spreadsheets[':spreadsheetId']['values:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SpreadsheetsSpreadsheetIdValuesBatchGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
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
        ? getGetV4SpreadsheetsSpreadsheetIdValuesBatchGetKey(args)
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
                (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
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
          client.v4.spreadsheets[':spreadsheetId']['values:batchGet'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchGetByDataFilter', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilter<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['values:batchGetByDataFilter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchUpdate', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['values:batchUpdate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchUpdateByDataFilter', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilter<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId']['values:batchUpdateByDataFilter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdBatchUpdateKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId:batchUpdate', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdBatchUpdateKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId:batchUpdate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId:getByDataFilter', 'POST'] as const
}

export function usePostV4SpreadsheetsSpreadsheetIdGetByDataFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterKey()
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
            (typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.spreadsheets[':spreadsheetId:getByDataFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
