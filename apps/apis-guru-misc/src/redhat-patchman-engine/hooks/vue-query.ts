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

export function getApiKey() {
  return ['api'] as const
}

export function getApiPatchV1AdvisoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.advisories.$get>>,
) {
  return ['api', '/api/patch/v1/advisories', toValue(args)] as const
}

export function getApiPatchV1AdvisoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.advisories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1AdvisoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.advisories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1Advisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.advisories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
            >
          >,
          ReturnType<typeof getApiPatchV1AdvisoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.advisories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1AdvisoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.advisories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1AdvisoriesAdvisoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id', toValue(args)] as const
}

export function getApiPatchV1AdvisoriesAdvisoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1AdvisoriesAdvisoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.advisories[':advisory_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1AdvisoriesAdvisoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1AdvisoriesAdvisoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.advisories[':advisory_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/advisories/:advisory_id/systems', toValue(args)] as const
}

export function getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.advisories[':advisory_id'].systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1AdvisoriesAdvisoryIdSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
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
                    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
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
                    (typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey>
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
            ReturnType<(typeof client.api.patch.v1.advisories)[':advisory_id']['systems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1AdvisoriesAdvisoryIdSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.advisories[':advisory_id'].systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportAdvisoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.advisories.$get>>,
) {
  return ['api', '/api/patch/v1/export/advisories', toValue(args)] as const
}

export function getApiPatchV1ExportAdvisoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.advisories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportAdvisoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.advisories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.advisories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportAdvisoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.advisories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportAdvisoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportAdvisoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.advisories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
    >
  >,
) {
  return ['api', '/api/patch/v1/export/advisories/:advisory_id/systems', toValue(args)] as const
}

export function getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportAdvisoriesAdvisoryIdSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
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
                    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
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
                    (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey>
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
              (typeof client.api.patch.v1.export.advisories)[':advisory_id']['systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.advisories[':advisory_id'].systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportPackagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.packages.$get>>,
) {
  return ['api', '/api/patch/v1/export/packages', toValue(args)] as const
}

export function getApiPatchV1ExportPackagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.packages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.packages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportPackagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.packages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportPackagesPackageNameSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
    >
  >,
) {
  return ['api', '/api/patch/v1/export/packages/:package_name/systems', toValue(args)] as const
}

export function getApiPatchV1ExportPackagesPackageNameSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportPackagesPackageNameSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.packages[':package_name'].systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportPackagesPackageNameSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
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
                    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
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
                    (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportPackagesPackageNameSystemsQueryKey>
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
              (typeof client.api.patch.v1.export.packages)[':package_name']['systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportPackagesPackageNameSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportPackagesPackageNameSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.packages[':package_name'].systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportSystemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.systems.$get>>,
) {
  return ['api', '/api/patch/v1/export/systems', toValue(args)] as const
}

export function getApiPatchV1ExportSystemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.systems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.export.systems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportSystemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.export.systems.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
    >
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/advisories', toValue(args)] as const
}

export function getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportSystemsInventoryIdAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
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
                    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
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
                    (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey>
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
              (typeof client.api.patch.v1.export.systems)[':inventory_id']['advisories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportSystemsInventoryIdAdvisoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.systems[':inventory_id'].advisories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
    >
  >,
) {
  return ['api', '/api/patch/v1/export/systems/:inventory_id/packages', toValue(args)] as const
}

export function getApiPatchV1ExportSystemsInventoryIdPackagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.export.systems[':inventory_id'].packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1ExportSystemsInventoryIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
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
                    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
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
                    (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey>
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
              (typeof client.api.patch.v1.export.systems)[':inventory_id']['packages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1ExportSystemsInventoryIdPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.export.systems[':inventory_id'].packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1PackagesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.packages.index.$get>>,
) {
  return ['api', '/api/patch/v1/packages/', toValue(args)] as const
}

export function getApiPatchV1PackagesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.packages.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1PackagesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.packages.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1PackagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.packages.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1PackagesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.packages.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1PackagesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.packages.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1PackagesPackageNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/packages/:package_name', toValue(args)] as const
}

export function getApiPatchV1PackagesPackageNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1PackagesPackageNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1PackagesPackageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1PackagesPackageNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1PackagesPackageNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.packages[':package_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1PackagesPackageNameSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/packages/:package_name/systems', toValue(args)] as const
}

export function getApiPatchV1PackagesPackageNameSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1PackagesPackageNameSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1PackagesPackageNameSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
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
                    (typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']
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
                    (typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1PackagesPackageNameSystemsQueryKey>
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
            ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['systems']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1PackagesPackageNameSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.packages[':package_name'].systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1PackagesPackageNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/packages/:package_name/versions', toValue(args)] as const
}

export function getApiPatchV1PackagesPackageNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1PackagesPackageNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.packages[':package_name'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1PackagesPackageNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
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
                    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
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
                    (typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1PackagesPackageNameVersionsQueryKey>
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
            ReturnType<(typeof client.api.patch.v1.packages)[':package_name']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1PackagesPackageNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1PackagesPackageNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.packages[':package_name'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1SystemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.systems.$get>>,
) {
  return ['api', '/api/patch/v1/systems', toValue(args)] as const
}

export function getApiPatchV1SystemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.systems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1SystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1Systems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.patch.v1.systems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>
            >
          >,
          ReturnType<typeof getApiPatchV1SystemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.v1.systems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1SystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1SystemsInventoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id', toValue(args)] as const
}

export function getApiPatchV1SystemsInventoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1SystemsInventoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1SystemsInventoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPatchV1SystemsInventoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1SystemsInventoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.systems[':inventory_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiPatchV1SystemsInventoryIdMutationKey() {
  return ['api', '/api/patch/v1/systems/:inventory_id', 'DELETE'] as const
}

export function getDeleteApiPatchV1SystemsInventoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatchV1SystemsInventoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
    ) {
      return parseResponse(client.api.patch.v1.systems[':inventory_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPatchV1SystemsInventoryId<
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
                  ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiPatchV1SystemsInventoryIdMutationOptions<
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

export function getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/advisories', toValue(args)] as const
}

export function getApiPatchV1SystemsInventoryIdAdvisoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].advisories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1SystemsInventoryIdAdvisories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
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
                    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
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
                    (typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey>
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
            ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['advisories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1SystemsInventoryIdAdvisoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.systems[':inventory_id'].advisories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPatchV1SystemsInventoryIdPackagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
  >,
) {
  return ['api', '/api/patch/v1/systems/:inventory_id/packages', toValue(args)] as const
}

export function getApiPatchV1SystemsInventoryIdPackagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatchV1SystemsInventoryIdPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.patch.v1.systems[':inventory_id'].packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatchV1SystemsInventoryIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
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
                    (typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']
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
                    (typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPatchV1SystemsInventoryIdPackagesQueryKey>
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
            ReturnType<(typeof client.api.patch.v1.systems)[':inventory_id']['packages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatchV1SystemsInventoryIdPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatchV1SystemsInventoryIdPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.patch.v1.systems[':inventory_id'].packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPatchV1ViewsAdvisoriesSystemsMutationKey() {
  return ['api', '/api/patch/v1/views/advisories/systems', 'POST'] as const
}

export function getPostApiPatchV1ViewsAdvisoriesSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.advisories.systems.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatchV1ViewsAdvisoriesSystemsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
    ) {
      return parseResponse(client.api.patch.v1.views.advisories.systems.$post(args, options))
    },
  })
}

export function usePostApiPatchV1ViewsAdvisoriesSystems<
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
                Awaited<ReturnType<typeof client.api.patch.v1.views.advisories.systems.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.patch.v1.views.advisories.systems.$post>,
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
  const mutationDefaults = getPostApiPatchV1ViewsAdvisoriesSystemsMutationOptions<
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

export function getPostApiPatchV1ViewsSystemsAdvisoriesMutationKey() {
  return ['api', '/api/patch/v1/views/systems/advisories', 'POST'] as const
}

export function getPostApiPatchV1ViewsSystemsAdvisoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.patch.v1.views.systems.advisories.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatchV1ViewsSystemsAdvisoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
    ) {
      return parseResponse(client.api.patch.v1.views.systems.advisories.$post(args, options))
    },
  })
}

export function usePostApiPatchV1ViewsSystemsAdvisories<
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
                Awaited<ReturnType<typeof client.api.patch.v1.views.systems.advisories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.patch.v1.views.systems.advisories.$post>,
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
  const mutationDefaults = getPostApiPatchV1ViewsSystemsAdvisoriesMutationOptions<
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
