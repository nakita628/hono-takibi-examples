import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreatePathwayKey() {
  return ['createPathway'] as const
}

export function getFindInteractionsKey() {
  return ['findInteractions'] as const
}

export function getFindPathwaysByLiteratureKey() {
  return ['findPathwaysByLiterature'] as const
}

export function getFindPathwaysByTextKey() {
  return ['findPathwaysByText'] as const
}

export function getFindPathwaysByXrefKey() {
  return ['findPathwaysByXref'] as const
}

export function getGetColoredPathwayKey() {
  return ['getColoredPathway'] as const
}

export function getGetCurationTagHistoryKey() {
  return ['getCurationTagHistory'] as const
}

export function getGetCurationTagsKey() {
  return ['getCurationTags'] as const
}

export function getGetCurationTagsByNameKey() {
  return ['getCurationTagsByName'] as const
}

export function getGetOntologyTermsByPathwayKey() {
  return ['getOntologyTermsByPathway'] as const
}

export function getGetPathwayKey() {
  return ['getPathway'] as const
}

export function getGetPathwayAsKey() {
  return ['getPathwayAs'] as const
}

export function getGetPathwayHistoryKey() {
  return ['getPathwayHistory'] as const
}

export function getGetPathwayInfoKey() {
  return ['getPathwayInfo'] as const
}

export function getGetPathwaysByOntologyTermKey() {
  return ['getPathwaysByOntologyTerm'] as const
}

export function getGetPathwaysByParentOntologyTermKey() {
  return ['getPathwaysByParentOntologyTerm'] as const
}

export function getGetRecentChangesKey() {
  return ['getRecentChanges'] as const
}

export function getGetUserByOrcidKey() {
  return ['getUserByOrcid'] as const
}

export function getGetXrefListKey() {
  return ['getXrefList'] as const
}

export function getListOrganismsKey() {
  return ['listOrganisms'] as const
}

export function getListPathwaysKey() {
  return ['listPathways'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getRemoveCurationTagKey() {
  return ['removeCurationTag'] as const
}

export function getRemoveOntologyTagKey() {
  return ['removeOntologyTag'] as const
}

export function getSaveCurationTagKey() {
  return ['saveCurationTag'] as const
}

export function getSaveOntologyTagKey() {
  return ['saveOntologyTag'] as const
}

export function getUpdatePathwayKey() {
  return ['updatePathway'] as const
}

export function getPostCreatePathwayMutationKey() {
  return ['createPathway', '/createPathway', 'POST'] as const
}

export function getPostCreatePathwayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPathway.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createPathway.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreatePathwayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createPathway.$post>) {
      return parseResponse(client.createPathway.$post(args, options))
    },
  })
}

export function usePostCreatePathway<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPathway.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createPathway.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreatePathwayMutationOptions<TError, TOnMutateResult>(
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

export function getFindInteractionsQueryKey(
  args: InferRequestType<typeof client.findInteractions.$get>,
) {
  return ['findInteractions', '/findInteractions', args] as const
}

export function getFindInteractionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.findInteractions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindInteractionsQueryKey>
  >({
    queryKey: getFindInteractionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findInteractions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindInteractions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findInteractions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindInteractionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindInteractionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindInteractions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findInteractions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFindInteractionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindInteractionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFindPathwaysByLiteratureQueryKey(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
) {
  return ['findPathwaysByLiterature', '/findPathwaysByLiterature', args] as const
}

export function getFindPathwaysByLiteratureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByLiteratureQueryKey>
  >({
    queryKey: getFindPathwaysByLiteratureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findPathwaysByLiterature.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFindPathwaysByLiterature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByLiteratureQueryKey>
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
      ...getFindPathwaysByLiteratureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFindPathwaysByLiterature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByLiteratureQueryKey>
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
      ...getFindPathwaysByLiteratureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFindPathwaysByTextQueryKey(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
) {
  return ['findPathwaysByText', '/findPathwaysByText', args] as const
}

export function getFindPathwaysByTextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.findPathwaysByText.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByTextQueryKey>
  >({
    queryKey: getFindPathwaysByTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findPathwaysByText.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindPathwaysByText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindPathwaysByTextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindPathwaysByText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindPathwaysByTextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFindPathwaysByXrefQueryKey(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
) {
  return ['findPathwaysByXref', '/findPathwaysByXref', args] as const
}

export function getFindPathwaysByXrefQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.findPathwaysByXref.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByXrefQueryKey>
  >({
    queryKey: getFindPathwaysByXrefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findPathwaysByXref.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindPathwaysByXref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByXrefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindPathwaysByXrefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindPathwaysByXref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindPathwaysByXrefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindPathwaysByXrefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetColoredPathwayQueryKey(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
) {
  return ['getColoredPathway', '/getColoredPathway', args] as const
}

export function getGetColoredPathwayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getColoredPathway.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetColoredPathwayQueryKey>
  >({
    queryKey: getGetColoredPathwayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getColoredPathway.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetColoredPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetColoredPathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetColoredPathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetColoredPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetColoredPathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetColoredPathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetCurationTagHistoryQueryKey(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
) {
  return ['getCurationTagHistory', '/getCurationTagHistory', args] as const
}

export function getGetCurationTagHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagHistoryQueryKey>
  >({
    queryKey: getGetCurationTagHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getCurationTagHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetCurationTagHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagHistoryQueryKey>
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
      ...getGetCurationTagHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetCurationTagHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagHistoryQueryKey>
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
      ...getGetCurationTagHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetCurationTagsQueryKey(
  args: InferRequestType<typeof client.getCurationTags.$get>,
) {
  return ['getCurationTags', '/getCurationTags', args] as const
}

export function getGetCurationTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getCurationTags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagsQueryKey>
  >({
    queryKey: getGetCurationTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getCurationTags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetCurationTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetCurationTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetCurationTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetCurationTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetCurationTagsByNameQueryKey(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
) {
  return ['getCurationTagsByName', '/getCurationTagsByName', args] as const
}

export function getGetCurationTagsByNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagsByNameQueryKey>
  >({
    queryKey: getGetCurationTagsByNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getCurationTagsByName.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetCurationTagsByName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagsByNameQueryKey>
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
      ...getGetCurationTagsByNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetCurationTagsByName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetCurationTagsByNameQueryKey>
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
      ...getGetCurationTagsByNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetOntologyTermsByPathwayQueryKey(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
) {
  return ['getOntologyTermsByPathway', '/getOntologyTermsByPathway', args] as const
}

export function getGetOntologyTermsByPathwayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetOntologyTermsByPathwayQueryKey>
  >({
    queryKey: getGetOntologyTermsByPathwayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getOntologyTermsByPathway.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetOntologyTermsByPathway<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetOntologyTermsByPathwayQueryKey>
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
      ...getGetOntologyTermsByPathwayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetOntologyTermsByPathway<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetOntologyTermsByPathwayQueryKey>
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
      ...getGetOntologyTermsByPathwayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetPathwayQueryKey(args: InferRequestType<typeof client.getPathway.$get>) {
  return ['getPathway', '/getPathway', args] as const
}

export function getGetPathwayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPathway.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPathwayQueryKey>
  >({
    queryKey: getGetPathwayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathway.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathway.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetPathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathway.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetPathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetPathwayAsQueryKey(args: InferRequestType<typeof client.getPathwayAs.$get>) {
  return ['getPathwayAs', '/getPathwayAs', args] as const
}

export function getGetPathwayAsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPathwayAs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPathwayAsQueryKey>
  >({
    queryKey: getGetPathwayAsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathwayAs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetPathwayAs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayAs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayAsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetPathwayAsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetPathwayAs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayAs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayAsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetPathwayAsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetPathwayHistoryQueryKey(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
) {
  return ['getPathwayHistory', '/getPathwayHistory', args] as const
}

export function getGetPathwayHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPathwayHistory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwayHistoryQueryKey>
  >({
    queryKey: getGetPathwayHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathwayHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetPathwayHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetPathwayHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetPathwayHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetPathwayHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetPathwayInfoQueryKey(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
) {
  return ['getPathwayInfo', '/getPathwayInfo', args] as const
}

export function getGetPathwayInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPathwayInfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwayInfoQueryKey>
  >({
    queryKey: getGetPathwayInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathwayInfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetPathwayInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetPathwayInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetPathwayInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwayInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetPathwayInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetPathwaysByOntologyTermQueryKey(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
) {
  return ['getPathwaysByOntologyTerm', '/getPathwaysByOntologyTerm', args] as const
}

export function getGetPathwaysByOntologyTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwaysByOntologyTermQueryKey>
  >({
    queryKey: getGetPathwaysByOntologyTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathwaysByOntologyTerm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetPathwaysByOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwaysByOntologyTermQueryKey>
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
      ...getGetPathwaysByOntologyTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetPathwaysByOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwaysByOntologyTermQueryKey>
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
      ...getGetPathwaysByOntologyTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetPathwaysByParentOntologyTermQueryKey(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
) {
  return ['getPathwaysByParentOntologyTerm', '/getPathwaysByParentOntologyTerm', args] as const
}

export function getGetPathwaysByParentOntologyTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwaysByParentOntologyTermQueryKey>
  >({
    queryKey: getGetPathwaysByParentOntologyTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPathwaysByParentOntologyTerm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetPathwaysByParentOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwaysByParentOntologyTermQueryKey>
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
      ...getGetPathwaysByParentOntologyTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetPathwaysByParentOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetPathwaysByParentOntologyTermQueryKey>
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
      ...getGetPathwaysByParentOntologyTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetRecentChangesQueryKey(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
) {
  return ['getRecentChanges', '/getRecentChanges', args] as const
}

export function getGetRecentChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getRecentChanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRecentChangesQueryKey>
  >({
    queryKey: getGetRecentChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRecentChanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetRecentChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetRecentChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetRecentChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetRecentChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetRecentChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetRecentChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetUserByOrcidQueryKey(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
) {
  return ['getUserByOrcid', '/getUserByOrcid', args] as const
}

export function getGetUserByOrcidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getUserByOrcid.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetUserByOrcidQueryKey>
  >({
    queryKey: getGetUserByOrcidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getUserByOrcid.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetUserByOrcid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetUserByOrcidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetUserByOrcidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetUserByOrcid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetUserByOrcidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetUserByOrcidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetXrefListQueryKey(args: InferRequestType<typeof client.getXrefList.$get>) {
  return ['getXrefList', '/getXrefList', args] as const
}

export function getGetXrefListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getXrefList.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetXrefListQueryKey>
  >({
    queryKey: getGetXrefListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getXrefList.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetXrefList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getXrefList.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetXrefListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetXrefListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetXrefList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getXrefList.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetXrefListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetXrefListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListOrganismsQueryKey(args: InferRequestType<typeof client.listOrganisms.$get>) {
  return ['listOrganisms', '/listOrganisms', args] as const
}

export function getListOrganismsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listOrganisms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListOrganismsQueryKey>
  >({
    queryKey: getListOrganismsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listOrganisms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListOrganisms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listOrganisms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListOrganismsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListOrganismsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListOrganisms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listOrganisms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListOrganismsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListOrganismsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListPathwaysQueryKey(args: InferRequestType<typeof client.listPathways.$get>) {
  return ['listPathways', '/listPathways', args] as const
}

export function getListPathwaysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listPathways.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPathwaysQueryKey>
  >({
    queryKey: getListPathwaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listPathways.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListPathways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listPathways.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListPathwaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListPathwaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListPathways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listPathways.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListPathwaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListPathwaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoginQueryKey(args: InferRequestType<typeof client.login.$get>) {
  return ['login', '/login', args] as const
}

export function getLoginQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >({
    queryKey: getLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.login.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.login.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRemoveCurationTagQueryKey(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
) {
  return ['removeCurationTag', '/removeCurationTag', args] as const
}

export function getRemoveCurationTagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.removeCurationTag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRemoveCurationTagQueryKey>
  >({
    queryKey: getRemoveCurationTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.removeCurationTag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRemoveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemoveCurationTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRemoveCurationTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRemoveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemoveCurationTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRemoveCurationTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRemoveOntologyTagQueryKey(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
) {
  return ['removeOntologyTag', '/removeOntologyTag', args] as const
}

export function getRemoveOntologyTagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.removeOntologyTag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRemoveOntologyTagQueryKey>
  >({
    queryKey: getRemoveOntologyTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.removeOntologyTag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRemoveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemoveOntologyTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRemoveOntologyTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRemoveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemoveOntologyTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRemoveOntologyTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSaveCurationTagQueryKey(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
) {
  return ['saveCurationTag', '/saveCurationTag', args] as const
}

export function getSaveCurationTagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saveCurationTag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSaveCurationTagQueryKey>
  >({
    queryKey: getSaveCurationTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saveCurationTag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSaveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveCurationTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSaveCurationTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSaveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveCurationTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSaveCurationTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSaveOntologyTagQueryKey(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
) {
  return ['saveOntologyTag', '/saveOntologyTag', args] as const
}

export function getSaveOntologyTagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saveOntologyTag.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSaveOntologyTagQueryKey>
  >({
    queryKey: getSaveOntologyTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saveOntologyTag.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSaveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveOntologyTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSaveOntologyTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSaveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveOntologyTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSaveOntologyTagQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUpdatePathwayQueryKey(args: InferRequestType<typeof client.updatePathway.$get>) {
  return ['updatePathway', '/updatePathway', args] as const
}

export function getUpdatePathwayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.updatePathway.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUpdatePathwayQueryKey>
  >({
    queryKey: getUpdatePathwayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.updatePathway.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUpdatePathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.updatePathway.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUpdatePathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUpdatePathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUpdatePathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.updatePathway.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUpdatePathwayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUpdatePathwayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
