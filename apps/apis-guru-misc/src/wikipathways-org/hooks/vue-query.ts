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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPathway.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createPathway.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.findInteractions.$get>>,
) {
  return ['findInteractions', '/findInteractions', toValue(args)] as const
}

export function getFindInteractionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findInteractions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindInteractionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.findInteractions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindInteractions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findInteractions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>
            >
          >,
          ReturnType<typeof getFindInteractionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindInteractionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindInteractionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.findInteractions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindPathwaysByLiteratureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByLiterature.$get>>,
) {
  return ['findPathwaysByLiterature', '/findPathwaysByLiterature', toValue(args)] as const
}

export function getFindPathwaysByLiteratureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByLiterature.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindPathwaysByLiteratureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.findPathwaysByLiterature.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindPathwaysByLiterature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByLiterature.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
            >
          >,
          ReturnType<typeof getFindPathwaysByLiteratureQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByLiteratureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindPathwaysByLiteratureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.findPathwaysByLiterature.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindPathwaysByTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByText.$get>>,
) {
  return ['findPathwaysByText', '/findPathwaysByText', toValue(args)] as const
}

export function getFindPathwaysByTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByText.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindPathwaysByTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.findPathwaysByText.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindPathwaysByText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByText.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>
            >
          >,
          ReturnType<typeof getFindPathwaysByTextQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindPathwaysByTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.findPathwaysByText.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindPathwaysByXrefQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByXref.$get>>,
) {
  return ['findPathwaysByXref', '/findPathwaysByXref', toValue(args)] as const
}

export function getFindPathwaysByXrefQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByXref.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindPathwaysByXrefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.findPathwaysByXref.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindPathwaysByXref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.findPathwaysByXref.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>
            >
          >,
          ReturnType<typeof getFindPathwaysByXrefQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindPathwaysByXrefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindPathwaysByXrefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.findPathwaysByXref.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetColoredPathwayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getColoredPathway.$get>>,
) {
  return ['getColoredPathway', '/getColoredPathway', toValue(args)] as const
}

export function getGetColoredPathwayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getColoredPathway.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetColoredPathwayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getColoredPathway.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetColoredPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getColoredPathway.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>
            >
          >,
          ReturnType<typeof getGetColoredPathwayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetColoredPathwayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetColoredPathwayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getColoredPathway.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetCurationTagHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagHistory.$get>>,
) {
  return ['getCurationTagHistory', '/getCurationTagHistory', toValue(args)] as const
}

export function getGetCurationTagHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetCurationTagHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getCurationTagHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetCurationTagHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
            >
          >,
          ReturnType<typeof getGetCurationTagHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetCurationTagHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getCurationTagHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetCurationTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTags.$get>>,
) {
  return ['getCurationTags', '/getCurationTags', toValue(args)] as const
}

export function getGetCurationTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetCurationTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getCurationTags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetCurationTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>
            >
          >,
          ReturnType<typeof getGetCurationTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetCurationTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getCurationTags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetCurationTagsByNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagsByName.$get>>,
) {
  return ['getCurationTagsByName', '/getCurationTagsByName', toValue(args)] as const
}

export function getGetCurationTagsByNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagsByName.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetCurationTagsByNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getCurationTagsByName.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetCurationTagsByName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getCurationTagsByName.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
            >
          >,
          ReturnType<typeof getGetCurationTagsByNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetCurationTagsByNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetCurationTagsByNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getCurationTagsByName.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetOntologyTermsByPathwayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getOntologyTermsByPathway.$get>>,
) {
  return ['getOntologyTermsByPathway', '/getOntologyTermsByPathway', toValue(args)] as const
}

export function getGetOntologyTermsByPathwayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getOntologyTermsByPathway.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetOntologyTermsByPathwayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getOntologyTermsByPathway.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetOntologyTermsByPathway<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getOntologyTermsByPathway.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>
              >
            >
          >,
          ReturnType<typeof getGetOntologyTermsByPathwayQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetOntologyTermsByPathwayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetOntologyTermsByPathwayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getOntologyTermsByPathway.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathway.$get>>,
) {
  return ['getPathway', '/getPathway', toValue(args)] as const
}

export function getGetPathwayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathway.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathway.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathway.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
          >,
          ReturnType<typeof getGetPathwayQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPathwayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathway.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwayAsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayAs.$get>>,
) {
  return ['getPathwayAs', '/getPathwayAs', toValue(args)] as const
}

export function getGetPathwayAsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayAs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwayAsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathwayAs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetPathwayAs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayAs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
          >,
          ReturnType<typeof getGetPathwayAsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPathwayAsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwayAsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathwayAs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwayHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayHistory.$get>>,
) {
  return ['getPathwayHistory', '/getPathwayHistory', toValue(args)] as const
}

export function getGetPathwayHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwayHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathwayHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPathwayHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>
            >
          >,
          ReturnType<typeof getGetPathwayHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwayHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwayHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathwayHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwayInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayInfo.$get>>,
) {
  return ['getPathwayInfo', '/getPathwayInfo', toValue(args)] as const
}

export function getGetPathwayInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwayInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathwayInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPathwayInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwayInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
          >,
          ReturnType<typeof getGetPathwayInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwayInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwayInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathwayInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwaysByOntologyTermQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>>,
) {
  return ['getPathwaysByOntologyTerm', '/getPathwaysByOntologyTerm', toValue(args)] as const
}

export function getGetPathwaysByOntologyTermQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwaysByOntologyTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathwaysByOntologyTerm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPathwaysByOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>
              >
            >
          >,
          ReturnType<typeof getGetPathwaysByOntologyTermQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwaysByOntologyTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwaysByOntologyTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathwaysByOntologyTerm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPathwaysByParentOntologyTermQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>>,
) {
  return [
    'getPathwaysByParentOntologyTerm',
    '/getPathwaysByParentOntologyTerm',
    toValue(args),
  ] as const
}

export function getGetPathwaysByParentOntologyTermQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPathwaysByParentOntologyTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPathwaysByParentOntologyTerm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPathwaysByParentOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
              >
            >
          >,
          ReturnType<typeof getGetPathwaysByParentOntologyTermQueryKey>
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
          Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPathwaysByParentOntologyTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPathwaysByParentOntologyTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPathwaysByParentOntologyTerm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetRecentChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRecentChanges.$get>>,
) {
  return ['getRecentChanges', '/getRecentChanges', toValue(args)] as const
}

export function getGetRecentChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRecentChanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRecentChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRecentChanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetRecentChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRecentChanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>
            >
          >,
          ReturnType<typeof getGetRecentChangesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRecentChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRecentChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRecentChanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetUserByOrcidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getUserByOrcid.$get>>,
) {
  return ['getUserByOrcid', '/getUserByOrcid', toValue(args)] as const
}

export function getGetUserByOrcidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getUserByOrcid.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetUserByOrcidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getUserByOrcid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetUserByOrcid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getUserByOrcid.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
          >,
          ReturnType<typeof getGetUserByOrcidQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetUserByOrcidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetUserByOrcidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getUserByOrcid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetXrefListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getXrefList.$get>>,
) {
  return ['getXrefList', '/getXrefList', toValue(args)] as const
}

export function getGetXrefListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getXrefList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetXrefListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getXrefList.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetXrefList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getXrefList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
          >,
          ReturnType<typeof getGetXrefListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetXrefListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetXrefListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getXrefList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListOrganismsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listOrganisms.$get>>,
) {
  return ['listOrganisms', '/listOrganisms', toValue(args)] as const
}

export function getListOrganismsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listOrganisms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListOrganismsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listOrganisms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListOrganisms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listOrganisms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
          >,
          ReturnType<typeof getListOrganismsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListOrganismsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListOrganismsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listOrganisms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListPathwaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPathways.$get>>,
) {
  return ['listPathways', '/listPathways', toValue(args)] as const
}

export function getListPathwaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPathways.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListPathwaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listPathways.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListPathways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPathways.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
          >,
          ReturnType<typeof getListPathwaysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPathwaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListPathwaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listPathways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.$get>>,
) {
  return ['login', '/login', toValue(args)] as const
}

export function getLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.login.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          ReturnType<typeof getLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRemoveCurationTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeCurationTag.$get>>,
) {
  return ['removeCurationTag', '/removeCurationTag', toValue(args)] as const
}

export function getRemoveCurationTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeCurationTag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRemoveCurationTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.removeCurationTag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRemoveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeCurationTag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>
            >
          >,
          ReturnType<typeof getRemoveCurationTagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRemoveCurationTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRemoveCurationTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.removeCurationTag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRemoveOntologyTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeOntologyTag.$get>>,
) {
  return ['removeOntologyTag', '/removeOntologyTag', toValue(args)] as const
}

export function getRemoveOntologyTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeOntologyTag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRemoveOntologyTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.removeOntologyTag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRemoveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.removeOntologyTag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>
            >
          >,
          ReturnType<typeof getRemoveOntologyTagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRemoveOntologyTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRemoveOntologyTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.removeOntologyTag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSaveCurationTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveCurationTag.$get>>,
) {
  return ['saveCurationTag', '/saveCurationTag', toValue(args)] as const
}

export function getSaveCurationTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveCurationTag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSaveCurationTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saveCurationTag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSaveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveCurationTag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>
            >
          >,
          ReturnType<typeof getSaveCurationTagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSaveCurationTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSaveCurationTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saveCurationTag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSaveOntologyTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveOntologyTag.$get>>,
) {
  return ['saveOntologyTag', '/saveOntologyTag', toValue(args)] as const
}

export function getSaveOntologyTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveOntologyTag.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSaveOntologyTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saveOntologyTag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSaveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveOntologyTag.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>
            >
          >,
          ReturnType<typeof getSaveOntologyTagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSaveOntologyTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSaveOntologyTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saveOntologyTag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUpdatePathwayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.updatePathway.$get>>,
) {
  return ['updatePathway', '/updatePathway', toValue(args)] as const
}

export function getUpdatePathwayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.updatePathway.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUpdatePathwayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.updatePathway.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUpdatePathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.updatePathway.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
          >,
          ReturnType<typeof getUpdatePathwayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUpdatePathwayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUpdatePathwayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.updatePathway.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
