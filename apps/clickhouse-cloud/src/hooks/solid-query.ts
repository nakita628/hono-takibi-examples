import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1WhoamiQueryKey() {
  return ['v1', '/v1/whoami'] as const
}

export function getV1WhoamiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >({
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1WhoamiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WhoamiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OrganizationsQueryKey(
  args: InferRequestType<typeof client.v1.organizations.$get>,
) {
  return ['v1', '/v1/organizations', args] as const
}

export function getV1OrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >({
    queryKey: getV1OrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.organizations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OrganizationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrganizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId', args] as const
}

export function getV1OrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPrometheusQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus', args] as const
}

export function getV1OrganizationsOrganizationIdPrometheusQueryOptions<
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
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPrometheusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].prometheus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPrometheus<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdPrometheusQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdPrometheusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus/discovery', args] as const
}

export function getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].prometheus.discovery.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPrometheusDiscovery<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPrometheusDiscoveryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdRolesQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/roles', args] as const
}

export function getV1OrganizationsOrganizationIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdRolesQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdRolesMutationOptions<
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

export function getV1OrganizationsOrganizationIdRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', args] as const
}

export function getV1OrganizationsOrganizationIdRolesRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].roles[':roleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdRolesRoleId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdRolesRoleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdQuotasQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas', args] as const
}

export function getV1OrganizationsOrganizationIdQuotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdQuotasQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdQuotasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas/:quotaCode', args] as const
}

export function getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdQuotasQuotaCode<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdQuotasQuotaCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServiceProfilesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/serviceProfiles', args] as const
}

export function getV1OrganizationsOrganizationIdServiceProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServiceProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].serviceProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServiceProfiles<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServiceProfilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPreviewsQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/previews', args] as const
}

export function getV1OrganizationsOrganizationIdPreviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPreviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].previews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['previews']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdPreviewsQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdPreviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdPreviewsPreviewId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/services', args] as const
}

export function getV1OrganizationsOrganizationIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdServicesQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdServicesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdServicesServiceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpointConfig',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].privateEndpointConfig.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfig<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].serviceQueryEndpoint.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdStateMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/prometheus', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdPrometheus<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdPrometheusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/jwtProviders', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
          ':jwtProviderName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/schema',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickhouseSettings.schema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchema<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/:settingName',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
          ':settingName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/backups', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdBackups<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdBackupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backups/:backupId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backups[':backupId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/snapshots', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdSnapshots<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshots/:snapshotId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[
          ':snapshotId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupConfiguration',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupConfiguration.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshotConfiguration',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].snapshotConfiguration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaAwareRouting',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].replicaAwareRouting.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/backupBucket', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketMutationOptions<
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

export function getV1OrganizationsOrganizationIdKeysQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/keys', args] as const
}

export function getV1OrganizationsOrganizationIdKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdKeysQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdKeysMutationOptions<
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

export function getV1OrganizationsOrganizationIdKeysKeyIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', args] as const
}

export function getV1OrganizationsOrganizationIdKeysKeyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].keys[':keyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdKeysKeyId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdKeysKeyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdKeysKeyIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdMembersQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/members', args] as const
}

export function getV1OrganizationsOrganizationIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdMembersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', args] as const
}

export function getV1OrganizationsOrganizationIdMembersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdMembersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdMembersUserId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdMembersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdInvitationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/invitations', args] as const
}

export function getV1OrganizationsOrganizationIdInvitationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdInvitations<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdInvitationsQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdInvitationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdInvitationsMutationOptions<
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

export function getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/invitations/:invitationId', args] as const
}

export function getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdInvitationsInvitationId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdInvitationsInvitationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdInvitationsInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdActivitiesQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/activities', args] as const
}

export function getV1OrganizationsOrganizationIdActivitiesQueryOptions<
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
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdActivities<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdActivitiesQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdActivitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activities/:activityId', args] as const
}

export function getV1OrganizationsOrganizationIdActivitiesActivityIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdActivitiesActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activities[':activityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdActivitiesActivityId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdActivitiesActivityIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdNotificationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notifications', args] as const
}

export function getV1OrganizationsOrganizationIdNotificationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdNotifications<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdNotificationsQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdNotificationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdNotificationTypesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notificationTypes', args] as const
}

export function getV1OrganizationsOrganizationIdNotificationTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdNotificationTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].notificationTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdNotificationTypes<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdNotificationTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/members/:userId/notificationSettings',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsMutationOptions<
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

export function getV1OrganizationsOrganizationIdUsageCostQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/usageCost', args] as const
}

export function getV1OrganizationsOrganizationIdUsageCostQueryOptions<
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
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUsageCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].usageCost.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUsageCost<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['usageCost']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdUsageCostQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdUsageCostQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/inferenceUsageCost', args] as const
}

export function getV1OrganizationsOrganizationIdInferenceUsageCostQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdInferenceUsageCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].inferenceUsageCost.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdInferenceUsageCost<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdInferenceUsageCostQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdActiveBalancesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activeBalances', args] as const
}

export function getV1OrganizationsOrganizationIdActiveBalancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdActiveBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].activeBalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdActiveBalances<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdActiveBalancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdCreditBalancesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/creditBalances', args] as const
}

export function getV1OrganizationsOrganizationIdCreditBalancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdCreditBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].creditBalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdCreditBalances<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdCreditBalancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/clickpipes', args] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/context',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesContext<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/settings',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
          ':clickPipeId'
        ].settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscovery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesCdcScaling',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickpipesCdcScaling.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickstack.dashboards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
          ':clickStackDashboardId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
          ':clickStackSourceId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
          ':clickStackAlertId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateMutationOptions<
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
          ':clickStackRoleId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
          'saved-searches'
        ][':clickStackSavedSearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdPostgresQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdPostgresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdPostgres<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdPostgresMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/prometheus', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPrometheusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPrometheusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres.prometheus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPrometheus<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPrometheusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdPostgresPostgresId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdPostgresPostgresId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsOrganizationIdPostgresPostgresIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/caCertificates',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificates<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdPostgresPostgresIdPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdPostgresPostgresIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplica<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/prometheus', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdPrometheus<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/metrics', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdMetrics<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointMutationOptions<
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

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/backups', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdBackups<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatterns<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns/:queryId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
          ':queryId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/blockingQueries',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueries<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/logs', args] as const
}

export function getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPostgresPostgresIdLogs<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPostgresPostgresIdLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/privateEndpointConfig', args] as const
}

export function getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].privateEndpointConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdPrivateEndpointConfig<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdPrivateEndpointConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdByocInfrastructure<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdByocInfrastructureMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdByocInfrastructureValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdByocInfrastructureValidateMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenMutationOptions<
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

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[':byocInfrastructureId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/progress',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgress<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/tags',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTags<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/privateEndpointConfig',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].privateEndpointConfig.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfig<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/customerAuthorizedAccess',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].byocInfrastructure[
          ':byocInfrastructureId'
        ].customerAuthorizedAccess.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[
          ':serviceId'
        ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
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

export function createPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId'][
          'query-api-endpoints'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
          ':endpointId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesMutationOptions<
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

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
          ':queryId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdMutationOptions<
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

export function createPostV1OrganizationsOrganizationIdUdfUploadsUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdUdfUploadsUrlMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs', args] as const
}

export function getV1OrganizationsOrganizationIdUdfsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUdfsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUdfs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1OrganizationsOrganizationIdUdfsQueryKey>
        >
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
      ...getV1OrganizationsOrganizationIdUdfsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdUdfs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdUdfsMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName', args] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUdfsFunctionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUdfsFunctionName<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdUdfsFunctionNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1OrganizationsOrganizationIdUdfsFunctionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/attachments', args] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUdfsFunctionNameAttachments<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    args,
  ] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
          ':serviceId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryKey
          >
        >
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
      ...getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdMutationOptions<
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

export function getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/versions', args] as const
}

export function getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
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
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsMutationOptions<
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

export function createDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionMutationOptions<
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
