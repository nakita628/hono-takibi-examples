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

export function injectPostCreatePathway<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreatePathwayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFindInteractions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findInteractions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindInteractionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFindPathwaysByLiterature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFindPathwaysByLiteratureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFindPathwaysByText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindPathwaysByTextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFindPathwaysByXref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFindPathwaysByXrefQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetColoredPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getColoredPathway.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetColoredPathwayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetCurationTagHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetCurationTagHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetCurationTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getCurationTags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetCurationTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetCurationTagsByName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetCurationTagsByNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetOntologyTermsByPathway<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetOntologyTermsByPathwayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetPathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathway.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPathwayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetPathwayAs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathwayAs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPathwayAsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetPathwayHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPathwayHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetPathwayInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPathwayInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetPathwaysByOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetPathwaysByOntologyTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetPathwaysByParentOntologyTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetPathwaysByParentOntologyTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetRecentChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRecentChanges.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetRecentChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetUserByOrcid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetUserByOrcidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetXrefList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getXrefList.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetXrefListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListOrganisms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listOrganisms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListOrganismsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListPathways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listPathways.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListPathwaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.login.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRemoveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.removeCurationTag.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemoveCurationTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRemoveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemoveOntologyTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSaveCurationTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.saveCurationTag.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSaveCurationTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSaveOntologyTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSaveOntologyTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUpdatePathway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.updatePathway.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUpdatePathwayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
