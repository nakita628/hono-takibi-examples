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

export function getGetApisStoragemigrationK8sIoV1IndexKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/'] as const
}

export function useGetApisStoragemigrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStoragemigrationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStoragemigrationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStoragemigrationK8sIoV1StorageversionmigrationsKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', args] as const
}

export function useGetApisStoragemigrationK8sIoV1Storageversionmigrations<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1Storageversionmigrations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisStoragemigrationK8sIoV1StorageversionmigrationsKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', 'POST'] as const
}

export function usePostApisStoragemigrationK8sIoV1Storageversionmigrations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStoragemigrationK8sIoV1StorageversionmigrationsKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', 'DELETE'] as const
}

export function useDeleteApisStoragemigrationK8sIoV1Storageversionmigrations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name', args] as const
}

export function useGetApisStoragemigrationK8sIoV1StorageversionmigrationsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1StorageversionmigrationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name', 'PUT'] as const
}

export function usePutApisStoragemigrationK8sIoV1StorageversionmigrationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name',
    'PATCH',
  ] as const
}

export function usePatchApisStoragemigrationK8sIoV1StorageversionmigrationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    args,
  ] as const
}

export function useGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    'PUT',
  ] as const
}

export function usePutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusKey()
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
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations', args] as const
}

export function useGetApisStoragemigrationK8sIoV1WatchStorageversionmigrations<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1WatchStorageversionmigrations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations/:name',
    args,
  ] as const
}

export function useGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
        ? getGetApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameKey(args)
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
                (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
