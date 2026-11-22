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

export function getGetApisFlowcontrolApiserverK8sIoV1IndexKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/'] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
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
        ? getGetApisFlowcontrolApiserverK8sIoV1IndexKey()
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']>
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
        ? getGetApisFlowcontrolApiserverK8sIoV1IndexKey()
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['index']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1FlowschemasKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', args] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1Flowschemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1Flowschemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisFlowcontrolApiserverK8sIoV1FlowschemasKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', 'POST'] as const
}

export function usePostApisFlowcontrolApiserverK8sIoV1Flowschemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisFlowcontrolApiserverK8sIoV1FlowschemasKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', 'DELETE'] as const
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1Flowschemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', args] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1FlowschemasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1FlowschemasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'PUT'] as const
}

export function usePutApisFlowcontrolApiserverK8sIoV1FlowschemasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'DELETE'] as const
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', 'PATCH'] as const
}

export function usePatchApisFlowcontrolApiserverK8sIoV1FlowschemasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', args] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey() {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', 'PUT'] as const
}

export function usePutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatusKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    args,
  ] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    'POST',
  ] as const
}

export function usePostApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations',
    'DELETE',
  ] as const
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    args,
  ] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'PUT',
  ] as const
}

export function usePutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name',
    'PATCH',
  ] as const
}

export function usePatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    args,
  ] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    'PUT',
  ] as const
}

export function usePutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey() {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatusKey()
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
            (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', args] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
) {
  return ['apis', '/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', args] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchFlowschemasNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations',
    args,
  ] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameKey(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name',
    args,
  ] as const
}

export function useGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
        ? getGetApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsNameKey(args)
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
                (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
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
          client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
