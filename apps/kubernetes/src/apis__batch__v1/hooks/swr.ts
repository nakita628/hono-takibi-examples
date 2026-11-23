import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getGetApisBatchV1IndexKey() {
  return ['apis', '/apis/batch/v1/'] as const
}

export function useGetApisBatchV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisBatchV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisBatchV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1CronjobsKey(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
) {
  return ['apis', '/apis/batch/v1/cronjobs', args] as const
}

export function useGetApisBatchV1Cronjobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
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
        ? getGetApisBatchV1CronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.cronjobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1Cronjobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
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
        ? getGetApisBatchV1CronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.cronjobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1JobsKey(
  args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
) {
  return ['apis', '/apis/batch/v1/jobs', args] as const
}

export function useGetApisBatchV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
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
        ? getGetApisBatchV1JobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
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
        ? getGetApisBatchV1JobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceCronjobsKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceCronjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceCronjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisBatchV1NamespacesNamespaceCronjobsKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', 'POST'] as const
}

export function usePostApisBatchV1NamespacesNamespaceCronjobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisBatchV1NamespacesNamespaceCronjobsKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', 'DELETE'] as const
}

export function useDeleteApisBatchV1NamespacesNamespaceCronjobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisBatchV1NamespacesNamespaceCronjobsKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceCronjobsNameKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceCronjobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsNameKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceCronjobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsNameKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'PUT'] as const
}

export function usePutApisBatchV1NamespacesNamespaceCronjobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisBatchV1NamespacesNamespaceCronjobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'DELETE'] as const
}

export function useDeleteApisBatchV1NamespacesNamespaceCronjobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisBatchV1NamespacesNamespaceCronjobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'PATCH'] as const
}

export function usePatchApisBatchV1NamespacesNamespaceCronjobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisBatchV1NamespacesNamespaceCronjobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceCronjobsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceCronjobsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsNameStatusKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceCronjobsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceCronjobsNameStatusKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', 'PUT'] as const
}

export function usePutApisBatchV1NamespacesNamespaceCronjobsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', 'PATCH'] as const
}

export function usePatchApisBatchV1NamespacesNamespaceCronjobsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceJobsKey(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceJobs<TError = unknown>(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
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
        ? getGetApisBatchV1NamespacesNamespaceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.batch.v1.namespaces[':namespace'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceJobs<TError = unknown>(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
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
        ? getGetApisBatchV1NamespacesNamespaceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.batch.v1.namespaces[':namespace'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisBatchV1NamespacesNamespaceJobsKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', 'POST'] as const
}

export function usePostApisBatchV1NamespacesNamespaceJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisBatchV1NamespacesNamespaceJobsKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']
          >
        },
      ) =>
        parseResponse(client.apis.batch.v1.namespaces[':namespace'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisBatchV1NamespacesNamespaceJobsKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', 'DELETE'] as const
}

export function useDeleteApisBatchV1NamespacesNamespaceJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisBatchV1NamespacesNamespaceJobsKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceJobsNameKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceJobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceJobsNameKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceJobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceJobsNameKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'PUT'] as const
}

export function usePutApisBatchV1NamespacesNamespaceJobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisBatchV1NamespacesNamespaceJobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisBatchV1NamespacesNamespaceJobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'DELETE'] as const
}

export function useDeleteApisBatchV1NamespacesNamespaceJobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisBatchV1NamespacesNamespaceJobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisBatchV1NamespacesNamespaceJobsNameKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'PATCH'] as const
}

export function usePatchApisBatchV1NamespacesNamespaceJobsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisBatchV1NamespacesNamespaceJobsNameKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1NamespacesNamespaceJobsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', args] as const
}

export function useGetApisBatchV1NamespacesNamespaceJobsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceJobsNameStatusKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1NamespacesNamespaceJobsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
        ? getGetApisBatchV1NamespacesNamespaceJobsNameStatusKey(args)
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
                (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameStatusKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', 'PUT'] as const
}

export function usePutApisBatchV1NamespacesNamespaceJobsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisBatchV1NamespacesNamespaceJobsNameStatusKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisBatchV1NamespacesNamespaceJobsNameStatusKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', 'PATCH'] as const
}

export function usePatchApisBatchV1NamespacesNamespaceJobsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisBatchV1NamespacesNamespaceJobsNameStatusKey()
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
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisBatchV1WatchCronjobsKey(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
) {
  return ['apis', '/apis/batch/v1/watch/cronjobs', args] as const
}

export function useGetApisBatchV1WatchCronjobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
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
        ? getGetApisBatchV1WatchCronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.watch.cronjobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchCronjobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
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
        ? getGetApisBatchV1WatchCronjobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.watch.cronjobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1WatchJobsKey(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
) {
  return ['apis', '/apis/batch/v1/watch/jobs', args] as const
}

export function useGetApisBatchV1WatchJobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
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
        ? getGetApisBatchV1WatchJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.watch.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchJobs<TError = unknown>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
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
        ? getGetApisBatchV1WatchJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.batch.v1.watch.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1WatchNamespacesNamespaceCronjobsKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/cronjobs', args] as const
}

export function useGetApisBatchV1WatchNamespacesNamespaceCronjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceCronjobsKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchNamespacesNamespaceCronjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceCronjobsKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1WatchNamespacesNamespaceCronjobsNameKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name', args] as const
}

export function useGetApisBatchV1WatchNamespacesNamespaceCronjobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceCronjobsNameKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchNamespacesNamespaceCronjobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceCronjobsNameKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1WatchNamespacesNamespaceJobsKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs', args] as const
}

export function useGetApisBatchV1WatchNamespacesNamespaceJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceJobsKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchNamespacesNamespaceJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceJobsKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisBatchV1WatchNamespacesNamespaceJobsNameKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', args] as const
}

export function useGetApisBatchV1WatchNamespacesNamespaceJobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceJobsNameKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisBatchV1WatchNamespacesNamespaceJobsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
        ? getGetApisBatchV1WatchNamespacesNamespaceJobsNameKey(args)
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
                (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
