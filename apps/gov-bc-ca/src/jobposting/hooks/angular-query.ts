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

export function getIndustriesKey() {
  return ['Industries'] as const
}

export function getJobTypesKey() {
  return ['jobTypes'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getMajorProjectsKey() {
  return ['majorProjects'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getIndustriesQueryKey() {
  return ['Industries', '/Industries'] as const
}

export function getIndustriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Industries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Industries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndustriesQueryKey>
  >({
    queryKey: getIndustriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Industries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndustries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Industries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Industries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndustriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndustriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getJobTypesQueryKey() {
  return ['jobTypes', '/jobTypes'] as const
}

export function getJobTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobTypesQueryKey>
  >({
    queryKey: getJobTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.jobTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobTypes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function injectPostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.jobs.$post>,
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
    const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMajorProjectsQueryKey() {
  return ['majorProjects', '/majorProjects'] as const
}

export function getMajorProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.majorProjects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.majorProjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMajorProjectsQueryKey>
  >({
    queryKey: getMajorProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.majorProjects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMajorProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.majorProjects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.majorProjects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMajorProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMajorProjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
