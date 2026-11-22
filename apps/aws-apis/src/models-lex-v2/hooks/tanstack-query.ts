import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotsKey() {
  return ['bots'] as const
}

export function getBuiltinsKey() {
  return ['builtins'] as const
}

export function getCreateuploadurlKey() {
  return ['createuploadurl'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getPolicyKey() {
  return ['policy'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchcreate',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.DEFAULT.batchcreate.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchdelete',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.DEFAULT.batchdelete.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteMutationOptions<
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchupdate',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.DEFAULT.batchupdate.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', keyArgs] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryKey>
  >({
    queryKey: getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'PUT'] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'POST'] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
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

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'DELETE'] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexMutationOptions<
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

export function getPutBotsIndexMutationKey() {
  return ['bots', '/bots/', 'PUT'] as const
}

export function getPutBotsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$put>>>>>,
    TError,
    InferRequestType<typeof client.bots.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bots.index.$put>) {
      return parseResponse(client.bots.index.$put(args, options))
    },
  })
}

export function usePutBotsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.bots.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBotsIndexMutationKey() {
  return ['bots', '/bots/', 'POST'] as const
}

export function getPostBotsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.bots.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bots.index.$post>) {
      return parseResponse(client.bots.index.$post(args, options))
    },
  })
}

export function usePostBotsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.bots.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotaliasesIndexMutationKey() {
  return ['bots', '/bots/:botId/botaliases/', 'PUT'] as const
}

export function getPutBotsBotIdBotaliasesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotaliasesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>,
    ) {
      return parseResponse(client.bots[':botId'].botaliases.index.$put(args, options))
    },
  })
}

export function usePutBotsBotIdBotaliasesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsBotIdBotaliasesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBotsBotIdBotaliasesIndexMutationKey() {
  return ['bots', '/bots/:botId/botaliases/', 'POST'] as const
}

export function getPostBotsBotIdBotaliasesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotaliasesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>,
    ) {
      return parseResponse(client.bots[':botId'].botaliases.index.$post(args, options))
    },
  })
}

export function usePostBotsBotIdBotaliasesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotsBotIdBotaliasesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/', 'PUT'] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotversionsBotVersionBotlocalesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales.index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsBotIdBotversionsBotVersionBotlocalesIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/', 'POST'] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotversionsBotVersionBotlocalesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales.index.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotsBotIdBotversionsBotVersionBotlocalesIndexMutationOptions<
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

export function getPutBotsBotIdBotversionsIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/', 'PUT'] as const
}

export function getPutBotsBotIdBotversionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotversionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>,
    ) {
      return parseResponse(client.bots[':botId'].botversions.index.$put(args, options))
    },
  })
}

export function usePutBotsBotIdBotversionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsBotIdBotversionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBotsBotIdBotversionsIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/', 'POST'] as const
}

export function getPostBotsBotIdBotversionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotversionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>,
    ) {
      return parseResponse(client.bots[':botId'].botversions.index.$post(args, options))
    },
  })
}

export function usePostBotsBotIdBotversionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotsBotIdBotversionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPutExportsIndexMutationKey() {
  return ['exports', '/exports/', 'PUT'] as const
}

export function getPutExportsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutExportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.index.$put>) {
      return parseResponse(client.exports.index.$put(args, options))
    },
  })
}

export function usePutExportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExportsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExportsIndexMutationKey() {
  return ['exports', '/exports/', 'POST'] as const
}

export function getPostExportsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.index.$post>) {
      return parseResponse(client.exports.index.$post(args, options))
    },
  })
}

export function usePostExportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].intents.index.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexMutationOptions<
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

export function getPolicyResourceArnIndexQueryKey(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/:resourceArn/', keyArgs] as const
}

export function getPolicyResourceArnIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPolicyResourceArnIndexQueryKey>
  >({
    queryKey: getPolicyResourceArnIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policy[':resourceArn'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePolicyResourceArnIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPolicyResourceArnIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPolicyResourceArnIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePolicyResourceArnIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPolicyResourceArnIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPolicyResourceArnIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPolicyResourceArnIndexMutationKey() {
  return ['policy', '/policy/:resourceArn/', 'PUT'] as const
}

export function getPutPolicyResourceArnIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPolicyResourceArnIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']>,
    ) {
      return parseResponse(client.policy[':resourceArn'].index.$put(args, options))
    },
  })
}

export function usePutPolicyResourceArnIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPolicyResourceArnIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostPolicyResourceArnIndexMutationKey() {
  return ['policy', '/policy/:resourceArn/', 'POST'] as const
}

export function getPostPolicyResourceArnIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPolicyResourceArnIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']>,
    ) {
      return parseResponse(client.policy[':resourceArn'].index.$post(args, options))
    },
  })
}

export function usePostPolicyResourceArnIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPolicyResourceArnIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePolicyResourceArnIndexMutationKey() {
  return ['policy', '/policy/:resourceArn/', 'DELETE'] as const
}

export function getDeletePolicyResourceArnIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePolicyResourceArnIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']>,
    ) {
      return parseResponse(client.policy[':resourceArn'].index.$delete(args, options))
    },
  })
}

export function useDeletePolicyResourceArnIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePolicyResourceArnIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostPolicyResourceArnStatementsIndexMutationKey() {
  return ['policy', '/policy/:resourceArn/statements/', 'POST'] as const
}

export function getPostPolicyResourceArnStatementsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPolicyResourceArnStatementsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policy)[':resourceArn']['statements']['index']['$post']
      >,
    ) {
      return parseResponse(client.policy[':resourceArn'].statements.index.$post(args, options))
    },
  })
}

export function usePostPolicyResourceArnStatementsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPolicyResourceArnStatementsIndexMutationOptions<
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].slots.index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].slots.index.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexMutationOptions<
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].slottypes.index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].slottypes.index.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexMutationOptions<
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

export function getPostCreateuploadurlIndexMutationKey() {
  return ['createuploadurl', '/createuploadurl/', 'POST'] as const
}

export function getPostCreateuploadurlIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createuploadurl.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createuploadurl.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateuploadurlIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createuploadurl.index.$post>) {
      return parseResponse(client.createuploadurl.index.$post(args, options))
    },
  })
}

export function usePostCreateuploadurlIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createuploadurl.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createuploadurl.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateuploadurlIndexMutationOptions<TError, TOnMutateResult>(
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

export function getBotsBotIdIndexQueryKey(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/', keyArgs] as const
}

export function getBotsBotIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdIndexQueryKey>
  >({
    queryKey: getBotsBotIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBotsBotIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBotsBotIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBotsBotIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBotsBotIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBotsBotIdIndexMutationKey() {
  return ['bots', '/bots/:botId/', 'PUT'] as const
}

export function getPutBotsBotIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':botId']['index']['$put']>) {
      return parseResponse(client.bots[':botId'].index.$put(args, options))
    },
  })
}

export function usePutBotsBotIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsBotIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBotsBotIdIndexMutationKey() {
  return ['bots', '/bots/:botId/', 'DELETE'] as const
}

export function getDeleteBotsBotIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':botId']['index']['$delete']>) {
      return parseResponse(client.bots[':botId'].index.$delete(args, options))
    },
  })
}

export function useDeleteBotsBotIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBotsBotIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getBotsBotIdBotaliasesBotAliasIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', keyArgs] as const
}

export function getBotsBotIdBotaliasesBotAliasIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdBotaliasesBotAliasIdIndexQueryKey>
  >({
    queryKey: getBotsBotIdBotaliasesBotAliasIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botaliases[':botAliasId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBotsBotIdBotaliasesBotAliasIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotaliasesBotAliasIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotaliasesBotAliasIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotaliasesBotAliasIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotaliasesBotAliasIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotaliasesBotAliasIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotaliasesBotAliasIdIndexMutationKey() {
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', 'PUT'] as const
}

export function getPutBotsBotIdBotaliasesBotAliasIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdBotaliasesBotAliasIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botaliases[':botAliasId'].index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotaliasesBotAliasIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBotsBotIdBotaliasesBotAliasIdIndexMutationOptions<
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

export function getDeleteBotsBotIdBotaliasesBotAliasIdIndexMutationKey() {
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', 'DELETE'] as const
}

export function getDeleteBotsBotIdBotaliasesBotAliasIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdBotaliasesBotAliasIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botaliases[':botAliasId'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotaliasesBotAliasIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBotsBotIdBotaliasesBotAliasIdIndexMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botversions/:botVersion/', keyArgs] as const
}

export function getBotsBotIdBotversionsBotVersionIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdBotversionsBotVersionIndexQueryKey>
  >({
    queryKey: getBotsBotIdBotversionsBotVersionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotversionsBotVersionIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdBotversionsBotVersionIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteBotsBotIdBotversionsBotVersionIndexMutationKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/', 'DELETE'] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdBotversionsBotVersionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBotsBotIdBotversionsBotVersionIndexMutationOptions<
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

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary',
    'DELETE',
  ] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabulary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyMutationOptions<
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

export function getExportsExportIdIndexQueryKey(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exports', '/exports/:exportId/', keyArgs] as const
}

export function getExportsExportIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdIndexQueryKey>
  >({
    queryKey: getExportsExportIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports[':exportId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportsExportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportsExportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExportsExportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportsExportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutExportsExportIdIndexMutationKey() {
  return ['exports', '/exports/:exportId/', 'PUT'] as const
}

export function getPutExportsExportIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.exports)[':exportId']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExportsExportIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.exports)[':exportId']['index']['$put']>,
    ) {
      return parseResponse(client.exports[':exportId'].index.$put(args, options))
    },
  })
}

export function usePutExportsExportIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.exports)[':exportId']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExportsExportIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteExportsExportIdIndexMutationKey() {
  return ['exports', '/exports/:exportId/', 'DELETE'] as const
}

export function getDeleteExportsExportIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExportsExportIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']>,
    ) {
      return parseResponse(client.exports[':exportId'].index.$delete(args, options))
    },
  })
}

export function useDeleteExportsExportIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExportsExportIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getImportsImportIdIndexQueryKey(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['imports', '/imports/:importId/', keyArgs] as const
}

export function getImportsImportIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImportIdIndexQueryKey>
  >({
    queryKey: getImportsImportIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports[':importId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImportsImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImportsImportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImportsImportIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImportIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImportsImportIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteImportsImportIdIndexMutationKey() {
  return ['imports', '/imports/:importId/', 'DELETE'] as const
}

export function getDeleteImportsImportIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports)[':importId']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImportsImportIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.imports)[':importId']['index']['$delete']>,
    ) {
      return parseResponse(client.imports[':importId'].index.$delete(args, options))
    },
  })
}

export function useDeleteImportsImportIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports)[':importId']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImportsImportIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    keyArgs,
  ] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryKey
    >
  >({
    queryKey: getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationOptions<
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

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    'DELETE',
  ] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexMutationOptions<
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

export function getDeletePolicyResourceArnStatementsStatementIdIndexMutationKey() {
  return ['policy', '/policy/:resourceArn/statements/:statementId/', 'DELETE'] as const
}

export function getDeletePolicyResourceArnStatementsStatementIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePolicyResourceArnStatementsStatementIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.policy[':resourceArn'].statements[':statementId'].index.$delete(args, options),
      )
    },
  })
}

export function useDeletePolicyResourceArnStatementsStatementIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePolicyResourceArnStatementsStatementIdIndexMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    keyArgs,
  ] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryKey
    >
  >({
    queryKey:
      getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].slots[':slotId'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].slots[':slotId'].index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationOptions<
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

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    'DELETE',
  ] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
          ':intentId'
        ].slots[':slotId'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    keyArgs,
  ] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryKey
    >
  >({
    queryKey:
      getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
          ':slotTypeId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
          ':slotTypeId'
        ].index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationOptions<
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

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    'DELETE',
  ] as const
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
          ':slotTypeId'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexMutationOptions<
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

export function getDeleteBotsBotIdUtterancesIndexMutationKey() {
  return ['bots', '/bots/:botId/utterances/', 'DELETE'] as const
}

export function getDeleteBotsBotIdUtterancesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdUtterancesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>,
    ) {
      return parseResponse(client.bots[':botId'].utterances.index.$delete(args, options))
    },
  })
}

export function useDeleteBotsBotIdUtterancesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBotsBotIdUtterancesIndexMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/',
    keyArgs,
  ] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryKey
    >
  >({
    queryKey:
      getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
          ':botRecommendationId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
          ':botRecommendationId'
        ].index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexMutationOptions<
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

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/metadata',
    keyArgs,
  ] as const
}

export function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryKey
    >
  >({
    queryKey:
      getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.DEFAULT.metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBotsBotIdAggregatedutterancesIndexMutationKey() {
  return ['bots', '/bots/:botId/aggregatedutterances/', 'POST'] as const
}

export function getPostBotsBotIdAggregatedutterancesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdAggregatedutterancesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']
      >,
    ) {
      return parseResponse(client.bots[':botId'].aggregatedutterances.index.$post(args, options))
    },
  })
}

export function usePostBotsBotIdAggregatedutterancesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotsBotIdAggregatedutterancesIndexMutationOptions<
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].botrecommendations.index.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].botrecommendations.index.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexMutationOptions<
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

export function getPostBuiltinsLocalesLocaleIdIntentsIndexMutationKey() {
  return ['builtins', '/builtins/locales/:localeId/intents/', 'POST'] as const
}

export function getPostBuiltinsLocalesLocaleIdIntentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.builtins.locales)[':localeId']['intents']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.builtins.locales)[':localeId']['intents']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuiltinsLocalesLocaleIdIntentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.builtins.locales)[':localeId']['intents']['index']['$post']
      >,
    ) {
      return parseResponse(client.builtins.locales[':localeId'].intents.index.$post(args, options))
    },
  })
}

export function usePostBuiltinsLocalesLocaleIdIntentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.builtins.locales)[':localeId']['intents']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.builtins.locales)[':localeId']['intents']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuiltinsLocalesLocaleIdIntentsIndexMutationOptions<
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

export function getPostBuiltinsLocalesLocaleIdSlottypesIndexMutationKey() {
  return ['builtins', '/builtins/locales/:localeId/slottypes/', 'POST'] as const
}

export function getPostBuiltinsLocalesLocaleIdSlottypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuiltinsLocalesLocaleIdSlottypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.builtins.locales[':localeId'].slottypes.index.$post(args, options),
      )
    },
  })
}

export function usePostBuiltinsLocalesLocaleIdSlottypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuiltinsLocalesLocaleIdSlottypesIndexMutationOptions<
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/list',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[
          ':localeId'
        ].customvocabulary.DEFAULT.list.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListMutationOptions<
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

export function getPutImportsIndexMutationKey() {
  return ['imports', '/imports/', 'PUT'] as const
}

export function getPutImportsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.imports.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutImportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imports.index.$put>) {
      return parseResponse(client.imports.index.$put(args, options))
    },
  })
}

export function usePutImportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.imports.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImportsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImportsIndexMutationKey() {
  return ['imports', '/imports/', 'POST'] as const
}

export function getPostImportsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.imports.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imports.index.$post>) {
      return parseResponse(client.imports.index.$post(args, options))
    },
  })
}

export function usePostImportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.imports.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/intents',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
          ':botRecommendationId'
        ].intents.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsMutationOptions<
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

export function getTagsResourceARNQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceARN', keyArgs] as const
}

export function getTagsResourceARNQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceARNQueryKey>
  >({
    queryKey: getTagsResourceARNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceARN'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceARN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceARNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceARNQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceARN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceARNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceARNQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceARNMutationKey() {
  return ['tags', '/tags/:resourceARN', 'POST'] as const
}

export function getPostTagsResourceARNMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceARN']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceARNMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceARN']['$post']>) {
      return parseResponse(client.tags[':resourceARN'].$post(args, options))
    },
  })
}

export function usePostTagsResourceARN<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceARN']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceARNMutationOptions<TError, TOnMutateResult>(
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/associatedtranscripts',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
          ':botRecommendationId'
        ].associatedtranscripts.$post(args, options),
      )
    },
  })
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscripts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsMutationOptions<
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

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationMutationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/stopbotrecommendation',
    'PUT',
  ] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
          ':botRecommendationId'
        ].stopbotrecommendation.$put(args, options),
      )
    },
  })
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationMutationOptions<
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

export function getDeleteTagsResourceARNTagKeysMutationKey() {
  return ['tags', '/tags/:resourceARN#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceARNTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceARNTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceARN#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceARNTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceARNTagKeysMutationOptions<TError, TOnMutateResult>(
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
