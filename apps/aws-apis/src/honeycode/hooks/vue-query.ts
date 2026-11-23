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

export function getScreendataKey() {
  return ['screendata'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getWorkbooksKey() {
  return ['workbooks'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchcreate', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.batchcreate.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchcreate<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateMutationOptions<
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

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchdelete', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.batchdelete.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchdelete<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteMutationOptions<
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

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchupdate', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.batchupdate.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchupdate<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateMutationOptions<
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

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchupsert', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.batchupsert.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchupsert<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertMutationOptions<
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

export function getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/import/:jobId', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkbooksWorkbookIdTablesTableIdImportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey>
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
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScreendataMutationKey() {
  return ['screendata', '/screendata', 'POST'] as const
}

export function getPostScreendataMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.screendata.$post>>>>>,
    TError,
    InferRequestType<typeof client.screendata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScreendataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.screendata.$post>) {
      return parseResponse(client.screendata.$post(args, options))
    },
  })
}

export function usePostScreendata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.screendata.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.screendata.$post>,
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
  const mutationDefaults = getPostScreendataMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdMutationKey() {
  return [
    'workbooks',
    '/workbooks/:workbookId/apps/:appId/screens/:screenId/automations/:automationId',
    'POST',
  ] as const
}

export function getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].apps[':appId'].screens[':screenId'].automations[
          ':automationId'
        ].$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationId<
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
                    (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
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
    getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdMutationOptions<
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

export function getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/columns', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesTableIdColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].columns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkbooksWorkbookIdTablesTableIdColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey>
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
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].columns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsListMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/list', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.list.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsList<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsListMutationOptions<
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

export function getWorkbooksWorkbookIdTablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workbooks', '/workbooks/:workbookId/tables', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkbooksWorkbookIdTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workbooks[':workbookId'].tables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkbooksWorkbookIdTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkbooksWorkbookIdTablesQueryKey>
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
          Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkbooksWorkbookIdTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkbooksWorkbookIdTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workbooks[':workbookId'].tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostWorkbooksWorkbookIdTablesTableIdRowsQueryMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/query', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdRowsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].rows.query.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsQuery<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsQueryMutationOptions<
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

export function getPostWorkbooksWorkbookIdTablesTableIdImportMutationKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/import', 'POST'] as const
}

export function getPostWorkbooksWorkbookIdTablesTableIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkbooksWorkbookIdTablesTableIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].import.$post(args, options),
      )
    },
  })
}

export function usePostWorkbooksWorkbookIdTablesTableIdImport<
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
                    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
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
  const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdImportMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
