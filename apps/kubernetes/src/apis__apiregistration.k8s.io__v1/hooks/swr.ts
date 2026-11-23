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

export function getGetApisApiregistrationK8sIoV1IndexKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/'] as const
}

export function useGetApisApiregistrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisApiregistrationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisApiregistrationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiregistrationK8sIoV1ApiservicesKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', args] as const
}

export function useGetApisApiregistrationK8sIoV1Apiservices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1Apiservices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisApiregistrationK8sIoV1ApiservicesKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'POST'] as const
}

export function usePostApisApiregistrationK8sIoV1Apiservices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiregistrationK8sIoV1ApiservicesKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'DELETE'] as const
}

export function useDeleteApisApiregistrationK8sIoV1Apiservices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiregistrationK8sIoV1ApiservicesKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiregistrationK8sIoV1ApiservicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', args] as const
}

export function useGetApisApiregistrationK8sIoV1ApiservicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesNameKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1ApiservicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesNameKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PUT'] as const
}

export function usePutApisApiregistrationK8sIoV1ApiservicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiregistrationK8sIoV1ApiservicesNameKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesNameKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'DELETE'] as const
}

export function useDeleteApisApiregistrationK8sIoV1ApiservicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiregistrationK8sIoV1ApiservicesNameKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PATCH'] as const
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisApiregistrationK8sIoV1ApiservicesNameKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiregistrationK8sIoV1ApiservicesNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', args] as const
}

export function useGetApisApiregistrationK8sIoV1ApiservicesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesNameStatusKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1ApiservicesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
        ? getGetApisApiregistrationK8sIoV1ApiservicesNameStatusKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameStatusKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PUT'] as const
}

export function usePutApisApiregistrationK8sIoV1ApiservicesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiregistrationK8sIoV1ApiservicesNameStatusKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PATCH'] as const
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusKey()
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
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiregistrationK8sIoV1WatchApiservicesKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices', args] as const
}

export function useGetApisApiregistrationK8sIoV1WatchApiservices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
        ? getGetApisApiregistrationK8sIoV1WatchApiservicesKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1WatchApiservices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
        ? getGetApisApiregistrationK8sIoV1WatchApiservicesKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiregistrationK8sIoV1WatchApiservicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', args] as const
}

export function useGetApisApiregistrationK8sIoV1WatchApiservicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
        ? getGetApisApiregistrationK8sIoV1WatchApiservicesNameKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiregistrationK8sIoV1WatchApiservicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
        ? getGetApisApiregistrationK8sIoV1WatchApiservicesNameKey(args)
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
                (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
