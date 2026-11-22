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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1WhoamiQueryKey() {
  return ['v1', '/v1/whoami'] as const
}

export function getV1WhoamiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          ReturnType<typeof getV1WhoamiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WhoamiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.whoami.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
) {
  return ['v1', '/v1/organizations', toValue(args)] as const
}

export function getV1OrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          ReturnType<typeof getV1OrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].$patch(args, options))
    },
  })
}

export function usePatchV1OrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>,
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPrometheusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPrometheusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPrometheusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].prometheus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['prometheus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPrometheusQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPrometheusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].prometheus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus/discovery', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].prometheus.discovery.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPrometheusDiscovery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].prometheus.discovery.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/roles', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdRolesMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/roles', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].roles.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdRoles<
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>,
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdRolesMutationOptions<
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

export function getV1OrganizationsOrganizationIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles[':roleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdRolesRoleIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].roles[':roleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdRolesRoleIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles[':roleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdRolesRoleId<
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
                    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdRolesRoleIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles[':roleId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdRolesRoleId<
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
                    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdQuotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdQuotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdQuotasQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas/:quotaCode', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdQuotasQuotaCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServiceProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/serviceProfiles', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdServiceProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdServiceProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].serviceProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServiceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServiceProfilesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServiceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdServiceProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].serviceProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPreviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/previews', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPreviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPreviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].previews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['previews']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['previews']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPreviewsQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPreviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPreviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].previews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/previews/:previewId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].previews[':previewId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPreviewsPreviewId<
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
                    (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['services']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services']['$post']
      >,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].services.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServices<
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
                    (typeof client.v1.organizations)[':organizationId']['services']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services']['$post']
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdServicesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpointConfig',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].privateEndpointConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].privateEndpointConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].serviceQueryEndpoint.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].serviceQueryEndpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].serviceQueryEndpoint.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].serviceQueryEndpoint.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdStateMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/state', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].state.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdState<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdStateMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/scaling', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].scaling.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdScaling<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaScaling',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].replicaScaling.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScaling<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/password', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].password.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdPassword<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpoint',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].privateEndpoint.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/prometheus',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
          ':jwtProviderName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
            ':jwtProviderName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
          ':jwtProviderName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
          ':jwtProviderName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/schema',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickhouseSettings.schema.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickhouseSettings.schema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/:settingName',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
          ':settingName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
            ':settingName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/:settingName',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
          ':settingName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backups',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backups/:backupId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backups[':backupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backups[
            ':backupId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshots',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshots/:snapshotId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[
          ':snapshotId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[
            ':snapshotId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupConfiguration',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupConfiguration.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].backupConfiguration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupConfiguration',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].backupConfiguration.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshotConfiguration',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].snapshotConfiguration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].snapshotConfiguration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshotConfiguration',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].snapshotConfiguration.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaAwareRouting',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].replicaAwareRouting.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].replicaAwareRouting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaAwareRouting',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].replicaAwareRouting.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function getV1OrganizationsOrganizationIdKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/keys', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdKeysMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/keys', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].keys.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdKeys<
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>,
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdKeysMutationOptions<
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

export function getV1OrganizationsOrganizationIdKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys[':keyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdKeysKeyIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].keys[':keyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdKeysKeyIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys[':keyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdKeysKeyId<
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
                    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdKeysKeyIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys[':keyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdKeysKeyId<
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
                    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/members', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdMembersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdMembersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdMembersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdMembersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdMembersUserIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdMembersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdMembersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdMembersUserId<
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdMembersUserId<
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/invitations', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdInvitationsQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdInvitationsMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/invitations', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['invitations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdInvitations<
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
                    (typeof client.v1.organizations)[':organizationId']['invitations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['invitations']['$post']
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdInvitationsMutationOptions<
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

export function getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/invitations/:invitationId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/invitations/:invitationId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations[':invitationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdInvitationsInvitationId<
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
                    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activities', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['activities']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['activities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdActivitiesQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activities/:activityId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdActivitiesActivityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activities[':activityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].activities[':activityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['notifications']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notifications', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['notifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['notifications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['notifications']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdNotificationsQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['notifications']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdNotificationTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notificationTypes', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdNotificationTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdNotificationTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].notificationTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdNotificationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdNotificationTypesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdNotificationTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdNotificationTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].notificationTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/members/:userId/notificationSettings',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/members/:userId/notificationSettings',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
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
                    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
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
    getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsMutationOptions<
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

export function getV1OrganizationsOrganizationIdUsageCostQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/usageCost', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdUsageCostQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdUsageCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].usageCost.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUsageCost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['usageCost']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['usageCost']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdUsageCostQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUsageCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdUsageCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].usageCost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/inferenceUsageCost', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdInferenceUsageCostQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].inferenceUsageCost.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdInferenceUsageCost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].inferenceUsageCost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdActiveBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activeBalances', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdActiveBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdActiveBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activeBalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdActiveBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdActiveBalancesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdActiveBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdActiveBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].activeBalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdCreditBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/creditBalances', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdCreditBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdCreditBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].creditBalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdCreditBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdCreditBalancesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdCreditBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdCreditBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].creditBalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/clickpipes', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/context',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/settings',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].settings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/settings',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].settings.$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/schemaDiscovery',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipes.schemaDiscovery.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscovery<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/scaling',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].scaling.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScaling<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/state',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].state.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdState<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesCdcScaling',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipesCdcScaling.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesCdcScaling.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesCdcScaling',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesCdcScaling.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickstack.dashboards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickstack.dashboards.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
          ':clickStackDashboardId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
            ':clickStackDashboardId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
          ':clickStackDashboardId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
          ':clickStackDashboardId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/validate',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickstack.dashboards.validate.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidate<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
          ':clickStackSourceId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
            ':clickStackSourceId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
          ':clickStackSourceId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
          ':clickStackSourceId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId/silenced',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].silenced.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId/silenced',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].silenced.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/validate',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickstack.webhooks.validate.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidate<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateMutationOptions<
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

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/:clickStackWebhookId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
          ':clickStackWebhookId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/:clickStackWebhookId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
          ':clickStackWebhookId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
          ':clickStackRoleId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
            ':clickStackRoleId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
          ':clickStackRoleId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
          ':clickStackRoleId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ][':clickStackSavedSearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ][':clickStackSavedSearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ][':clickStackSavedSearchId'].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ][':clickStackSavedSearchId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPostgresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
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
                    (typeof client.v1.organizations)[':organizationId']['postgres']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdPostgresMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdPostgresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdPostgresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres']['$post']
      >,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].postgres.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdPostgres<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres']['$post']
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdPostgresMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/prometheus', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPostgresPrometheusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres.prometheus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres.prometheus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdPostgresPostgresId<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdPostgresPostgresIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresId<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
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
  const mutationDefaults = getPatchV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/caCertificates',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/restoredService',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].restoredService.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredService<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
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
    getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/password', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].password.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdPassword<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
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
    getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/state', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].state.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdState<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
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
    getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/readReplica',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].readReplica.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplica<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
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
    getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/config',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
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
    getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', 'PATCH'] as const
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
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
    getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/prometheus',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/metrics',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
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
    getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
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
    getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/backups',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatterns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns/:queryId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
          ':queryId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
            ':queryId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/blockingQueries',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/logs',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPostgresPostgresIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/privateEndpointConfig', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].privateEndpointConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdPrivateEndpointConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].privateEndpointConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/byocInfrastructure', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdByocInfrastructureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructure<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdByocInfrastructureMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdByocInfrastructureValidateMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/byocInfrastructure/validate', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdByocInfrastructureValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure.validate.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructureValidate<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
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
    getPostV1OrganizationsOrganizationIdByocInfrastructureValidateMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/enrollmentToken',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].enrollmentToken.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentToken<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
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
    getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenMutationOptions<
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

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[':byocInfrastructureId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
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
    getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/progress',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].progress.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/tags',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/privateEndpointConfig',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].privateEndpointConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].privateEndpointConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/customerAuthorizedAccess',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].customerAuthorizedAccess.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].customerAuthorizedAccess.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/customerAuthorizedAccess',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].customerAuthorizedAccess.$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
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
                    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
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
    getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
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

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    'PATCH',
  ] as const
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
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
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'][
          'query-api-endpoints'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'][
            'query-api-endpoints'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'][
          'query-api-endpoints'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
          ':endpointId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
            ':endpointId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
          ':endpointId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
          ':endpointId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries',
    'POST',
  ] as const
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
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
    getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
          ':queryId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
            ':queryId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
          ':queryId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
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
    getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
          ':queryId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
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
                    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdUdfUploadsUrlMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/udfUploads/url', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdUdfUploadsUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdUdfUploadsUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfUploads.url.$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdUdfUploadsUrl<
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
                    (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdUdfUploadsUrlMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdUdfsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdUdfsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUdfs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdUdfsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUdfsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdUdfsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].udfs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdUdfsMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdUdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdUdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].udfs.$post(args, options))
    },
  })
}

export function usePostV1OrganizationsOrganizationIdUdfs<
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
                  ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>,
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
  const mutationDefaults = getPostV1OrganizationsOrganizationIdUdfsMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
    >
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName', toValue(args)] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUdfsFunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionName<
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
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
  const mutationDefaults = getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUdfsFunctionNameAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
          ':serviceId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey
          >
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
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
            ':serviceId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    'PUT',
  ] as const
}

export function getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
          ':serviceId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
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
    getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
          ':serviceId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/versions',
    toValue(args),
  ] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey>
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
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/versions', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
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
    getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionMutationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/versions/:version',
    'DELETE',
  ] as const
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].versions[
          ':version'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersion<
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
                    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
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
    getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionMutationOptions<
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
