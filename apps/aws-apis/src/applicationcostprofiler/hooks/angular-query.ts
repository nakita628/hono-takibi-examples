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

export function getImportApplicationUsageKey() {
  return ['importApplicationUsage'] as const
}

export function getReportDefinitionKey() {
  return ['reportDefinition'] as const
}

export function getReportDefinitionReportIdQueryKey(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reportDefinition', '/reportDefinition/:reportId', keyArgs] as const
}

export function getReportDefinitionReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportDefinitionReportIdQueryKey>
  >({
    queryKey: getReportDefinitionReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reportDefinition[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportDefinitionReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportDefinitionReportIdQueryKey>
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
      ...getReportDefinitionReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutReportDefinitionReportIdMutationKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'PUT'] as const
}

export function getPutReportDefinitionReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportDefinitionReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
    ) {
      return parseResponse(client.reportDefinition[':reportId'].$put(args, options))
    },
  })
}

export function injectPutReportDefinitionReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
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
    const mutationDefaults = getPutReportDefinitionReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteReportDefinitionReportIdMutationKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'DELETE'] as const
}

export function getDeleteReportDefinitionReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportDefinitionReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
    ) {
      return parseResponse(client.reportDefinition[':reportId'].$delete(args, options))
    },
  })
}

export function injectDeleteReportDefinitionReportId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
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
    const mutationDefaults = getDeleteReportDefinitionReportIdMutationOptions<
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

export function getPostImportApplicationUsageMutationKey() {
  return ['importApplicationUsage', '/importApplicationUsage', 'POST'] as const
}

export function getPostImportApplicationUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.importApplicationUsage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.importApplicationUsage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportApplicationUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.importApplicationUsage.$post>) {
      return parseResponse(client.importApplicationUsage.$post(args, options))
    },
  })
}

export function injectPostImportApplicationUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.importApplicationUsage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.importApplicationUsage.$post>,
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
    const mutationDefaults = getPostImportApplicationUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReportDefinitionQueryKey(
  args: InferRequestType<typeof client.reportDefinition.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['reportDefinition', '/reportDefinition', keyArgs] as const
}

export function getReportDefinitionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reportDefinition.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportDefinitionQueryKey>
  >({
    queryKey: getReportDefinitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reportDefinition.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportDefinition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reportDefinition.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportDefinitionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportDefinitionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostReportDefinitionMutationKey() {
  return ['reportDefinition', '/reportDefinition', 'POST'] as const
}

export function getPostReportDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reportDefinition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportDefinitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reportDefinition.$post>) {
      return parseResponse(client.reportDefinition.$post(args, options))
    },
  })
}

export function injectPostReportDefinition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reportDefinition.$post>,
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
    const mutationDefaults = getPostReportDefinitionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
