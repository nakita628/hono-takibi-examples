import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchcreate', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchcreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsBatchcreateKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchcreate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.batchcreate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchdelete', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchdelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchdelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.batchdelete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchupdate', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchupdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupdateKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.batchupdate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/batchupsert', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsBatchupsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsBatchupsertKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['batchupsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.batchupsert.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkbooksWorkbookIdTablesTableIdImportJobIdKey(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/import/:jobId', keyArgs] as const
}

export function useGetWorkbooksWorkbookIdTablesTableIdImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWorkbooksWorkbookIdTablesTableIdImportJobIdKey(args)
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
                (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
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
          client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkbooksWorkbookIdTablesTableIdImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWorkbooksWorkbookIdTablesTableIdImportJobIdKey(args)
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
                (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import'][':jobId']['$get']
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
          client.workbooks[':workbookId'].tables[':tableId'].import[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostScreendataKey() {
  return ['screendata', '/screendata', 'POST'] as const
}

export function usePostScreendata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.screendata.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.screendata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScreendataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.screendata.$post> }) =>
        parseResponse(client.screendata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdKey() {
  return [
    'workbooks',
    '/workbooks/:workbookId/apps/:appId/screens/:screenId/automations/:automationId',
    'POST',
  ] as const
}

export function usePostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdKey()
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
            (typeof client.workbooks)[':workbookId']['apps'][':appId']['screens'][':screenId']['automations'][':automationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].apps[':appId'].screens[':screenId'].automations[
            ':automationId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkbooksWorkbookIdTablesTableIdColumnsKey(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/columns', keyArgs] as const
}

export function useGetWorkbooksWorkbookIdTablesTableIdColumns<TError = unknown>(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWorkbooksWorkbookIdTablesTableIdColumnsKey(args)
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
                (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
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
          client.workbooks[':workbookId'].tables[':tableId'].columns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkbooksWorkbookIdTablesTableIdColumns<TError = unknown>(
  args: InferRequestType<
    (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWorkbooksWorkbookIdTablesTableIdColumnsKey(args)
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
                (typeof client.workbooks)[':workbookId']['tables'][':tableId']['columns']['$get']
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
          client.workbooks[':workbookId'].tables[':tableId'].columns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsListKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/list', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsListKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.list.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkbooksWorkbookIdTablesKey(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workbooks', '/workbooks/:workbookId/tables', keyArgs] as const
}

export function useGetWorkbooksWorkbookIdTables<TError = unknown>(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
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
        ? getGetWorkbooksWorkbookIdTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workbooks[':workbookId'].tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkbooksWorkbookIdTables<TError = unknown>(
  args: InferRequestType<(typeof client.workbooks)[':workbookId']['tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
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
        ? getGetWorkbooksWorkbookIdTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workbooks)[':workbookId']['tables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workbooks[':workbookId'].tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdRowsQueryKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/rows/query', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdRowsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdRowsQueryKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['rows']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].rows.query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkbooksWorkbookIdTablesTableIdImportKey() {
  return ['workbooks', '/workbooks/:workbookId/tables/:tableId/import', 'POST'] as const
}

export function usePostWorkbooksWorkbookIdTablesTableIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkbooksWorkbookIdTablesTableIdImportKey()
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
            (typeof client.workbooks)[':workbookId']['tables'][':tableId']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workbooks[':workbookId'].tables[':tableId'].import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
