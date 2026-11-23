import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGreengrassKey() {
  return ['greengrass'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetGreengrassServiceroleKey(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/servicerole', keyArgs] as const
}

export function useGetGreengrassServicerole<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
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
        ? getGetGreengrassServiceroleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.servicerole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassServicerole<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
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
        ? getGetGreengrassServiceroleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.servicerole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassServiceroleKey() {
  return ['greengrass', '/greengrass/servicerole', 'PUT'] as const
}

export function usePutGreengrassServicerole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.servicerole.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassServiceroleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.servicerole.$put> },
      ) => parseResponse(client.greengrass.servicerole.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassServiceroleKey() {
  return ['greengrass', '/greengrass/servicerole', 'DELETE'] as const
}

export function useDeleteGreengrassServicerole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.servicerole.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassServiceroleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.servicerole.$delete> },
      ) => parseResponse(client.greengrass.servicerole.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesKey() {
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associateClientDevices',
    'POST',
  ] as const
}

export function usePostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesKey()
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
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].associateClientDevices.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesKey() {
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/disassociateClientDevices',
    'POST',
  ] as const
}

export function usePostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesKey()
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
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].disassociateClientDevices.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassV2DeploymentsDeploymentIdCancelKey() {
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId/cancel', 'POST'] as const
}

export function usePostGreengrassV2DeploymentsDeploymentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassV2DeploymentsDeploymentIdCancelKey()
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
            (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.v2.deployments[':deploymentId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassV2CreateComponentVersionKey() {
  return ['greengrass', '/greengrass/v2/createComponentVersion', 'POST'] as const
}

export function usePostGreengrassV2CreateComponentVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.v2.createComponentVersion.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassV2CreateComponentVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post> },
      ) => parseResponse(client.greengrass.v2.createComponentVersion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2DeploymentsKey(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/deployments', keyArgs] as const
}

export function useGetGreengrassV2Deployments<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
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
        ? getGetGreengrassV2DeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2Deployments<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
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
        ? getGetGreengrassV2DeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassV2DeploymentsKey() {
  return ['greengrass', '/greengrass/v2/deployments', 'POST'] as const
}

export function usePostGreengrassV2Deployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.v2.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassV2DeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.v2.deployments.$post> },
      ) => parseResponse(client.greengrass.v2.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2ComponentsArnKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn', keyArgs] as const
}

export function useGetGreengrassV2ComponentsArn<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
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
        ? getGetGreengrassV2ComponentsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.components[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2ComponentsArn<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
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
        ? getGetGreengrassV2ComponentsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.components[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGreengrassV2ComponentsArnKey() {
  return ['greengrass', '/greengrass/v2/components/:arn', 'DELETE'] as const
}

export function useDeleteGreengrassV2ComponentsArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassV2ComponentsArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']> },
      ) => parseResponse(client.greengrass.v2.components[':arn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2CoreDevicesCoreDeviceThingNameKey(
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/coreDevices/:coreDeviceThingName', keyArgs] as const
}

export function useGetGreengrassV2CoreDevicesCoreDeviceThingName<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2CoreDevicesCoreDeviceThingName<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameKey() {
  return ['greengrass', '/greengrass/v2/coreDevices/:coreDeviceThingName', 'DELETE'] as const
}

export function useDeleteGreengrassV2CoreDevicesCoreDeviceThingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameKey()
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
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2DeploymentsDeploymentIdKey(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId', keyArgs] as const
}

export function useGetGreengrassV2DeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
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
        ? getGetGreengrassV2DeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.deployments[':deploymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2DeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
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
        ? getGetGreengrassV2DeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.deployments[':deploymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGreengrassV2DeploymentsDeploymentIdKey() {
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId', 'DELETE'] as const
}

export function useDeleteGreengrassV2DeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassV2DeploymentsDeploymentIdKey()
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
            (typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.v2.deployments[':deploymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2ComponentsArnMetadataKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/metadata', keyArgs] as const
}

export function useGetGreengrassV2ComponentsArnMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
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
        ? getGetGreengrassV2ComponentsArnMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.components[':arn'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2ComponentsArnMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
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
        ? getGetGreengrassV2ComponentsArnMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.components[':arn'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2ComponentsArnArtifactsArtifactNameKey(
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/artifacts/:artifactName', keyArgs] as const
}

export function useGetGreengrassV2ComponentsArnArtifactsArtifactName<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
        ? getGetGreengrassV2ComponentsArnArtifactsArtifactNameKey(args)
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
                (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
          client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2ComponentsArnArtifactsArtifactName<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
        ? getGetGreengrassV2ComponentsArnArtifactsArtifactNameKey(args)
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
                (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
          client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassThingsThingNameConnectivityInfoKey(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:thingName/connectivityInfo', keyArgs] as const
}

export function useGetGreengrassThingsThingNameConnectivityInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
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
        ? getGetGreengrassThingsThingNameConnectivityInfoKey(args)
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
                (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
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
          client.greengrass.things[':thingName'].connectivityInfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassThingsThingNameConnectivityInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
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
        ? getGetGreengrassThingsThingNameConnectivityInfoKey(args)
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
                (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
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
          client.greengrass.things[':thingName'].connectivityInfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassThingsThingNameConnectivityInfoKey() {
  return ['greengrass', '/greengrass/things/:thingName/connectivityInfo', 'PUT'] as const
}

export function usePutGreengrassThingsThingNameConnectivityInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassThingsThingNameConnectivityInfoKey()
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
            (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.things[':thingName'].connectivityInfo.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesKey(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associatedClientDevices',
    keyArgs,
  ] as const
}

export function useGetGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2ComponentsArnVersionsKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/versions', keyArgs] as const
}

export function useGetGreengrassV2ComponentsArnVersions<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
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
        ? getGetGreengrassV2ComponentsArnVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.components[':arn'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2ComponentsArnVersions<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
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
        ? getGetGreengrassV2ComponentsArnVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.v2.components[':arn'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2ComponentsKey(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components', keyArgs] as const
}

export function useGetGreengrassV2Components<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
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
        ? getGetGreengrassV2ComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2Components<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
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
        ? getGetGreengrassV2ComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2CoreDevicesKey(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/coreDevices', keyArgs] as const
}

export function useGetGreengrassV2CoreDevices<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
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
        ? getGetGreengrassV2CoreDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.coreDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2CoreDevices<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
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
        ? getGetGreengrassV2CoreDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.v2.coreDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsKey(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/effectiveDeployments',
    keyArgs,
  ] as const
}

export function useGetGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsKey(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/installedComponents',
    keyArgs,
  ] as const
}

export function useGetGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
        ? getGetGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsKey(args)
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
                (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassV2ResolveComponentCandidatesKey() {
  return ['greengrass', '/greengrass/v2/resolveComponentCandidates', 'POST'] as const
}

export function usePostGreengrassV2ResolveComponentCandidates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.v2.resolveComponentCandidates.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassV2ResolveComponentCandidatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post> },
      ) => parseResponse(client.greengrass.v2.resolveComponentCandidates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
