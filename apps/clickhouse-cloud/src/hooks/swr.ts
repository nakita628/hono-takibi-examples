import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1WhoamiKey() {
  return ['v1', '/v1/whoami'] as const
}

export function useGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsKey(
  args: InferRequestType<typeof client.v1.organizations.$get>,
) {
  return ['v1', '/v1/organizations', args] as const
}

export function useGetV1Organizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
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
        ? getGetV1OrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Organizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
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
        ? getGetV1OrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId', args] as const
}

export function useGetV1OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdKey() {
  return ['v1', '/v1/organizations/:organizationId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']> },
      ) => parseResponse(client.v1.organizations[':organizationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPrometheusKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus', args] as const
}

export function useGetV1OrganizationsOrganizationIdPrometheus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPrometheusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].prometheus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPrometheus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPrometheusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].prometheus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPrometheusDiscoveryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/prometheus/discovery', args] as const
}

export function useGetV1OrganizationsOrganizationIdPrometheusDiscovery<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPrometheusDiscoveryKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
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
          client.v1.organizations[':organizationId'].prometheus.discovery.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPrometheusDiscovery<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPrometheusDiscoveryKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
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
          client.v1.organizations[':organizationId'].prometheus.discovery.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdRolesKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/roles', args] as const
}

export function useGetV1OrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdRolesKey() {
  return ['v1', '/v1/organizations/:organizationId/roles', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdRolesKey()
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
            (typeof client.v1.organizations)[':organizationId']['roles']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.organizations[':organizationId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', args] as const
}

export function useGetV1OrganizationsOrganizationIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdRolesRoleIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
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
          client.v1.organizations[':organizationId'].roles[':roleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdRolesRoleIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
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
          client.v1.organizations[':organizationId'].roles[':roleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdRolesRoleIdKey() {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdRolesRoleIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].roles[':roleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdRolesRoleIdKey() {
  return ['v1', '/v1/organizations/:organizationId/roles/:roleId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdRolesRoleIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].roles[':roleId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdQuotasKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas', args] as const
}

export function useGetV1OrganizationsOrganizationIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdQuotasQuotaCodeKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/quotas/:quotaCode', args] as const
}

export function useGetV1OrganizationsOrganizationIdQuotasQuotaCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdQuotasQuotaCodeKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
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
          client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdQuotasQuotaCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdQuotasQuotaCodeKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
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
          client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServiceProfilesKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/serviceProfiles', args] as const
}

export function useGetV1OrganizationsOrganizationIdServiceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServiceProfilesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
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
          client.v1.organizations[':organizationId'].serviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServiceProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServiceProfilesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
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
          client.v1.organizations[':organizationId'].serviceProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPreviewsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/previews', args] as const
}

export function useGetV1OrganizationsOrganizationIdPreviews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPreviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].previews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPreviews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPreviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].previews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdKey() {
  return ['v1', '/v1/organizations/:organizationId/previews/:previewId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdPreviewsPreviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdPreviewsPreviewIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].previews[':previewId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/services', args] as const
}

export function useGetV1OrganizationsOrganizationIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesKey() {
  return ['v1', '/v1/organizations/:organizationId/services', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdServicesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].privateEndpointConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].privateEndpointConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].serviceQueryEndpoint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].serviceQueryEndpoint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].serviceQueryEndpoint.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].serviceQueryEndpoint.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdStateKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/state', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdStateKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].state.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/scaling', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdScalingKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].scaling.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaScaling',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaScalingKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].replicaScaling.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/password', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdPasswordKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].password.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpoint',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].privateEndpoint.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdPrometheusKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/prometheus', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdPrometheus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdPrometheus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdScalingScheduleKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindowKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/jwtProviders', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdJwtProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
            ':jwtProviderName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
            ':jwtProviderName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
            ':jwtProviderName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderNameKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
            ':jwtProviderName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickhouseSettings.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchema<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickhouseSettings.schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchema<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchemaKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickhouseSettings.schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
            ':settingName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
            ':settingName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/:settingName',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingNameKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
            ':settingName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/backups', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdBackups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backups[
            ':backupId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backups[
            ':backupId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/snapshots', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdSnapshots<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[
            ':snapshotId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[
            ':snapshotId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].backupConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].backupConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupConfiguration',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].backupConfiguration.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].snapshotConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].snapshotConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/snapshotConfiguration',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].snapshotConfiguration.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].replicaAwareRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].replicaAwareRouting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/replicaAwareRouting',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRoutingKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].replicaAwareRouting.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/backupBucket', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdKeysKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/keys', args] as const
}

export function useGetV1OrganizationsOrganizationIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdKeysKey() {
  return ['v1', '/v1/organizations/:organizationId/keys', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdKeysKey()
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
            (typeof client.v1.organizations)[':organizationId']['keys']['$post']
          >
        },
      ) => parseResponse(client.v1.organizations[':organizationId'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdKeysKeyIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', args] as const
}

export function useGetV1OrganizationsOrganizationIdKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdKeysKeyIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
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
          client.v1.organizations[':organizationId'].keys[':keyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdKeysKeyIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
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
          client.v1.organizations[':organizationId'].keys[':keyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdKeysKeyIdKey() {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdKeysKeyIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].keys[':keyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdKeysKeyIdKey() {
  return ['v1', '/v1/organizations/:organizationId/keys/:keyId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdKeysKeyIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].keys[':keyId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdMembersKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/members', args] as const
}

export function useGetV1OrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdMembersUserIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', args] as const
}

export function useGetV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdMembersUserIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
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
          client.v1.organizations[':organizationId'].members[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdMembersUserIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
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
          client.v1.organizations[':organizationId'].members[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdMembersUserIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdMembersUserIdKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdMembersUserIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdInvitationsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/invitations', args] as const
}

export function useGetV1OrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['invitations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].invitations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdInvitationsKey() {
  return ['v1', '/v1/organizations/:organizationId/invitations', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['invitations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdInvitationsKey()
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
            (typeof client.v1.organizations)[':organizationId']['invitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].invitations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdInvitationsInvitationIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/invitations/:invitationId', args] as const
}

export function useGetV1OrganizationsOrganizationIdInvitationsInvitationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdInvitationsInvitationIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
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
          client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdInvitationsInvitationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdInvitationsInvitationIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
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
          client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdKey() {
  return ['v1', '/v1/organizations/:organizationId/invitations/:invitationId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdInvitationsInvitationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdInvitationsInvitationIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].invitations[':invitationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdActivitiesKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/activities', args] as const
}

export function useGetV1OrganizationsOrganizationIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdActivitiesActivityIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activities/:activityId', args] as const
}

export function useGetV1OrganizationsOrganizationIdActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdActivitiesActivityIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
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
          client.v1.organizations[':organizationId'].activities[':activityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdActivitiesActivityIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
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
          client.v1.organizations[':organizationId'].activities[':activityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdNotificationsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notifications', args] as const
}

export function useGetV1OrganizationsOrganizationIdNotifications<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdNotificationsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
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
          client.v1.organizations[':organizationId'].notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdNotifications<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdNotificationsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
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
          client.v1.organizations[':organizationId'].notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdNotificationTypesKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/notificationTypes', args] as const
}

export function useGetV1OrganizationsOrganizationIdNotificationTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdNotificationTypesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
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
          client.v1.organizations[':organizationId'].notificationTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdNotificationTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdNotificationTypesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
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
          client.v1.organizations[':organizationId'].notificationTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsKey(
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

export function useGetV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
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
          client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
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
          client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/members/:userId/notificationSettings',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsKey()
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
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUsageCostKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/usageCost', args] as const
}

export function useGetV1OrganizationsOrganizationIdUsageCost<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdUsageCostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].usageCost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUsageCost<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdUsageCostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].usageCost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdInferenceUsageCostKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/inferenceUsageCost', args] as const
}

export function useGetV1OrganizationsOrganizationIdInferenceUsageCost<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdInferenceUsageCostKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
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
          client.v1.organizations[':organizationId'].inferenceUsageCost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdInferenceUsageCost<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdInferenceUsageCostKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
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
          client.v1.organizations[':organizationId'].inferenceUsageCost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdActiveBalancesKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/activeBalances', args] as const
}

export function useGetV1OrganizationsOrganizationIdActiveBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdActiveBalancesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
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
          client.v1.organizations[':organizationId'].activeBalances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdActiveBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdActiveBalancesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
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
          client.v1.organizations[':organizationId'].activeBalances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdCreditBalancesKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/creditBalances', args] as const
}

export function useGetV1OrganizationsOrganizationIdCreditBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdCreditBalancesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
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
          client.v1.organizations[':organizationId'].creditBalances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdCreditBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdCreditBalancesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
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
          client.v1.organizations[':organizationId'].creditBalances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/clickpipes', args] as const
}

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesKey() {
  return ['v1', '/v1/organizations/:organizationId/services/:serviceId/clickpipes', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesContext<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesContext<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/settings',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/schemaDiscovery',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscovery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipes.schemaDiscovery.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/scaling',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].scaling.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/state',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
            ':clickPipeId'
          ].state.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesCdcScaling.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesCdcScaling.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesCdcScaling',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesCdcScaling.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.dashboards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.dashboards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.dashboards.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
            ':clickStackDashboardId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
            ':clickStackDashboardId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
            ':clickStackDashboardId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
            ':clickStackDashboardId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/validate',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidateKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.dashboards.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackSources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.sources.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
            ':clickStackSourceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
            ':clickStackSourceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
            ':clickStackSourceId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
            ':clickStackSourceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId/silenced',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].silenced.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId/silenced',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilencedKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
            ':clickStackAlertId'
          ].silenced.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.webhooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.webhooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.webhooks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/validate',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidateKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickstack.webhooks.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/:clickStackWebhookId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
            ':clickStackWebhookId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/:clickStackWebhookId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
            ':clickStackWebhookId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
            ':clickStackRoleId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
            ':clickStackRoleId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
            ':clickStackRoleId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
            ':clickStackRoleId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ][':clickStackSavedSearchId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ][':clickStackSavedSearchId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ][':clickStackSavedSearchId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
            'saved-searches'
          ][':clickStackSavedSearchId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgres<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPostgresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgres<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdPostgresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdPostgresKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdPostgres<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdPostgresKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPrometheusKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/prometheus', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPrometheus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].postgres.prometheus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPrometheus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].postgres.prometheus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdPostgresPostgresId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdPostgresPostgresIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesKey(
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

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/restoredService',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].restoredService.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/password', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].password.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/state', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdPostgresPostgresIdStateKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].state.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/readReplica',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].readReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey() {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/config', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdPostgresPostgresIdConfigKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/prometheus', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdPrometheus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdPrometheus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdMetricsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/metrics', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdMetricsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdMetricsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey(
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

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[
            ':postgresId'
          ].privateEndpoint.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointKey()
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
            (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdBackupsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/backups', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdBackupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdBackups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdBackupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsKey(
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

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatterns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatterns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdKey(
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

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
            ':queryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
            ':queryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesKey(
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

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPostgresPostgresIdLogsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/postgres/:postgresId/logs', args] as const
}

export function useGetV1OrganizationsOrganizationIdPostgresPostgresIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdLogsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPostgresPostgresIdLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPostgresPostgresIdLogsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
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
          client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdPrivateEndpointConfigKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/privateEndpointConfig', args] as const
}

export function useGetV1OrganizationsOrganizationIdPrivateEndpointConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPrivateEndpointConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].privateEndpointConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdPrivateEndpointConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdPrivateEndpointConfigKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].privateEndpointConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureKey() {
  return ['v1', '/v1/organizations/:organizationId/byocInfrastructure', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdByocInfrastructureKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureValidateKey() {
  return ['v1', '/v1/organizations/:organizationId/byocInfrastructure/validate', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructureValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdByocInfrastructureValidateKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure.validate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/enrollmentToken',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentTokenKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].enrollmentToken.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey(
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

export function useGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressKey(
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

export function useGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgressKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsKey(
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

export function useGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTagsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigKey(
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

export function useGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].privateEndpointConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfigKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].privateEndpointConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessKey(
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

export function useGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].customerAuthorizedAccess.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
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
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].customerAuthorizedAccess.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/customerAuthorizedAccess',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccessKey()
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
            (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].byocInfrastructure[
            ':byocInfrastructureId'
          ].customerAuthorizedAccess.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey(
            args,
          )
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
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
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId',
    'PATCH',
  ] as const
}

export function usePatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[
            ':serviceId'
          ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'][
            'query-api-endpoints'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId'][
            'query-api-endpoints'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId'][
            'query-api-endpoints'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
            ':endpointId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
            ':endpointId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
            ':endpointId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
            ':endpointId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries',
    'POST',
  ] as const
}

export function usePostV1OrganizationsOrganizationIdServicesServiceIdSavedQueries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey(
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

export function useGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
            ':queryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
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
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
            ':queryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
            ':queryId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
            ':queryId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdUdfUploadsUrlKey() {
  return ['v1', '/v1/organizations/:organizationId/udfUploads/url', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdUdfUploadsUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdUdfUploadsUrlKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfUploads.url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUdfsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs', args] as const
}

export function useGetV1OrganizationsOrganizationIdUdfs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdUdfsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].udfs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUdfs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdUdfsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].udfs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdUdfsKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdUdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdUdfsKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs']['$post']
          >
        },
      ) => parseResponse(client.v1.organizations[':organizationId'].udfs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUdfsFunctionNameKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName', args] as const
}

export function useGetV1OrganizationsOrganizationIdUdfsFunctionName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUdfsFunctionName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/attachments', args] as const
}

export function useGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey(
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

export function useGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
            ':serviceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
            ':serviceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    'PUT',
  ] as const
}

export function usePutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
            ':serviceId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
            ':serviceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdUdfsFunctionNameVersionsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/versions', args] as const
}

export function useGetV1OrganizationsOrganizationIdUdfsFunctionNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameVersionsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1OrganizationsOrganizationIdUdfsFunctionNameVersionsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
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
          client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsKey() {
  return ['v1', '/v1/organizations/:organizationId/udfs/:functionName/versions', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdUdfsFunctionNameVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdUdfsFunctionNameVersionsKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionKey() {
  return [
    'v1',
    '/v1/organizations/:organizationId/udfs/:functionName/versions/:version',
    'DELETE',
  ] as const
}

export function useDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionKey()
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
            (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].udfs[':functionName'].versions[
            ':version'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
