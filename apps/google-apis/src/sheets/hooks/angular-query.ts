import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4SpreadsheetsMutationKey() {
  return ['v4', '/v4/spreadsheets', 'POST'] as const
}

export function getPostV4SpreadsheetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.spreadsheets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.spreadsheets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.spreadsheets.$post>) {
      return parseResponse(client.v4.spreadsheets.$post(args, options))
    },
  })
}

export function injectPostV4Spreadsheets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.spreadsheets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.spreadsheets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV4SpreadsheetsSpreadsheetIdQueryKey(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId', args] as const
}

export function getV4SpreadsheetsSpreadsheetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SpreadsheetsSpreadsheetIdQueryKey>
  >({
    queryKey: getV4SpreadsheetsSpreadsheetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4SpreadsheetsSpreadsheetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4SpreadsheetsSpreadsheetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4SpreadsheetsSpreadsheetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/developerMetadata/:metadataId', args] as const
}

export function getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryKey>
  >({
    queryKey: getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].developerMetadata[':metadataId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata'][':metadataId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/developerMetadata:search', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['developerMetadata:search'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['developerMetadata:search']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/sheets/:sheetId:copyTo', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].sheets[':sheetId:copyTo'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyTo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['sheets'][':sheetId:copyTo']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV4SpreadsheetsSpreadsheetIdValuesRangeQueryKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range', args] as const
}

export function getV4SpreadsheetsSpreadsheetIdValuesRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4SpreadsheetsSpreadsheetIdValuesRangeQueryKey>
  >({
    queryKey: getV4SpreadsheetsSpreadsheetIdValuesRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].values[':range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4SpreadsheetsSpreadsheetIdValuesRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4SpreadsheetsSpreadsheetIdValuesRangeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4SpreadsheetsSpreadsheetIdValuesRangeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV4SpreadsheetsSpreadsheetIdValuesRangeMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range', 'PUT'] as const
}

export function getPutV4SpreadsheetsSpreadsheetIdValuesRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SpreadsheetsSpreadsheetIdValuesRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].values[':range'].$put(args, options),
      )
    },
  })
}

export function injectPutV4SpreadsheetsSpreadsheetIdValuesRange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV4SpreadsheetsSpreadsheetIdValuesRangeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range:append', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].values[':range:append'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesRangeAppend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:append']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdValuesRangeAppendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values/:range:clear', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId'].values[':range:clear'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesRangeClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values'][':range:clear']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdValuesRangeClearMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchClear', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchClear'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesBatchClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClear']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchClearByDataFilter', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchClearByDataFilter'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchClearByDataFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryKey(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
) {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchGet', args] as const
}

export function getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryKey>
  >({
    queryKey: getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4SpreadsheetsSpreadsheetIdValuesBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4SpreadsheetsSpreadsheetIdValuesBatchGetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchGetByDataFilter', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchGetByDataFilter'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchGetByDataFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchUpdate', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchUpdate'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId/values:batchUpdateByDataFilter', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId']['values:batchUpdateByDataFilter'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId']['values:batchUpdateByDataFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdBatchUpdateMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId:batchUpdate', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId:batchUpdate'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:batchUpdate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdBatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterMutationKey() {
  return ['v4', '/v4/spreadsheets/:spreadsheetId:getByDataFilter', 'POST'] as const
}

export function getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.spreadsheets[':spreadsheetId:getByDataFilter'].$post(args, options),
      )
    },
  })
}

export function injectPostV4SpreadsheetsSpreadsheetIdGetByDataFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v4.spreadsheets)[':spreadsheetId:getByDataFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4SpreadsheetsSpreadsheetIdGetByDataFilterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
