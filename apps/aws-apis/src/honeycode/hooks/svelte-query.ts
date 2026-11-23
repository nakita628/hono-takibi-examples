import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateMutationOptions<
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsBatchdelete<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteMutationOptions<
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateMutationOptions<
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsert<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertMutationOptions<
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

export function getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/import/:jobId', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkbooksWorkbookIdTablesTableIdImportJobId<
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
  args: () => InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWorkbooksWorkbookIdTablesTableIdImportJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostScreendata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.screendata.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.screendata.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScreendataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdMutationOptions<
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

export function getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/columns', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesTableIdColumnsQueryOptions<
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
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkbooksWorkbookIdTablesTableIdColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workbooks[':workbookId'].tables[':tableId'].columns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkbooksWorkbookIdTablesTableIdColumns<
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
  args: () => InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWorkbooksWorkbookIdTablesTableIdColumnsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsList<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsListMutationOptions<
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

export function getWorkbooksWorkbookIdTablesQueryKey(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables', keyArgs] as const
}

export function getWorkbooksWorkbookIdTablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkbooksWorkbookIdTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workbooks[':workbookId'].tables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkbooksWorkbookIdTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWorkbooksWorkbookIdTablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWorkbooksWorkbookIdTablesTableIdRowsQuery<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdRowsQueryMutationOptions<
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

export function createPostWorkbooksWorkbookIdTablesTableIdImport<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkbooksWorkbookIdTablesTableIdImportMutationOptions<
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

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
