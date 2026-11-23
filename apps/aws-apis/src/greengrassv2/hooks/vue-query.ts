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

export function getGreengrassKey() {
  return ['greengrass'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGreengrassServiceroleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.servicerole.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/servicerole', keyArgs] as const
}

export function getGreengrassServiceroleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.servicerole.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassServiceroleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.servicerole.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassServicerole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.servicerole.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
            >
          >,
          ReturnType<typeof getGreengrassServiceroleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassServiceroleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassServiceroleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.servicerole.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGreengrassServiceroleMutationKey() {
  return ['greengrass', '/greengrass/servicerole', 'PUT'] as const
}

export function getPutGreengrassServiceroleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.servicerole.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassServiceroleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.servicerole.$put>) {
      return parseResponse(client.greengrass.servicerole.$put(args, options))
    },
  })
}

export function usePutGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.greengrass.servicerole.$put>,
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
  const mutationDefaults = getPutGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGreengrassServiceroleMutationKey() {
  return ['greengrass', '/greengrass/servicerole', 'DELETE'] as const
}

export function getDeleteGreengrassServiceroleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.servicerole.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassServiceroleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.servicerole.$delete>) {
      return parseResponse(client.greengrass.servicerole.$delete(args, options))
    },
  })
}

export function useDeleteGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.greengrass.servicerole.$delete>,
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
  const mutationDefaults = getDeleteGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesMutationKey() {
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associateClientDevices',
    'POST',
  ] as const
}

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].associateClientDevices.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevices<
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
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
    getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesMutationOptions<
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

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesMutationKey() {
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/disassociateClientDevices',
    'POST',
  ] as const
}

export function getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].disassociateClientDevices.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevices<
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
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
    getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesMutationOptions<
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

export function getPostGreengrassV2DeploymentsDeploymentIdCancelMutationKey() {
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId/cancel', 'POST'] as const
}

export function getPostGreengrassV2DeploymentsDeploymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassV2DeploymentsDeploymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.v2.deployments[':deploymentId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassV2DeploymentsDeploymentIdCancel<
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
                    (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
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
  const mutationDefaults = getPostGreengrassV2DeploymentsDeploymentIdCancelMutationOptions<
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

export function getPostGreengrassV2CreateComponentVersionMutationKey() {
  return ['greengrass', '/greengrass/v2/createComponentVersion', 'POST'] as const
}

export function getPostGreengrassV2CreateComponentVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.v2.createComponentVersion.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassV2CreateComponentVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post>,
    ) {
      return parseResponse(client.greengrass.v2.createComponentVersion.$post(args, options))
    },
  })
}

export function usePostGreengrassV2CreateComponentVersion<
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
                Awaited<ReturnType<typeof client.greengrass.v2.createComponentVersion.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post>,
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
  const mutationDefaults = getPostGreengrassV2CreateComponentVersionMutationOptions<
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

export function getGreengrassV2DeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.deployments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/deployments', keyArgs] as const
}

export function getGreengrassV2DeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.deployments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2DeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2Deployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.deployments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>
              >
            >
          >,
          ReturnType<typeof getGreengrassV2DeploymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2DeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2DeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGreengrassV2DeploymentsMutationKey() {
  return ['greengrass', '/greengrass/v2/deployments', 'POST'] as const
}

export function getPostGreengrassV2DeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.v2.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassV2DeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.v2.deployments.$post>) {
      return parseResponse(client.greengrass.v2.deployments.$post(args, options))
    },
  })
}

export function usePostGreengrassV2Deployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.v2.deployments.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.greengrass.v2.deployments.$post>,
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
  const mutationDefaults = getPostGreengrassV2DeploymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGreengrassV2ComponentsArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/components/:arn', keyArgs] as const
}

export function getGreengrassV2ComponentsArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2ComponentsArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2ComponentsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGreengrassV2ComponentsArnQueryKey>
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
          Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2ComponentsArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.components[':arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGreengrassV2ComponentsArnMutationKey() {
  return ['greengrass', '/greengrass/v2/components/:arn', 'DELETE'] as const
}

export function getDeleteGreengrassV2ComponentsArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassV2ComponentsArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']>,
    ) {
      return parseResponse(client.greengrass.v2.components[':arn'].$delete(args, options))
    },
  })
}

export function useDeleteGreengrassV2ComponentsArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']>,
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
  const mutationDefaults = getDeleteGreengrassV2ComponentsArnMutationOptions<
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

export function getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/coreDevices/:coreDeviceThingName', keyArgs] as const
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2CoreDevicesCoreDeviceThingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey>
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
            ReturnType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameMutationKey() {
  return ['greengrass', '/greengrass/v2/coreDevices/:coreDeviceThingName', 'DELETE'] as const
}

export function getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassV2CoreDevicesCoreDeviceThingName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']
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
  const mutationDefaults = getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameMutationOptions<
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

export function getGreengrassV2DeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId', keyArgs] as const
}

export function getGreengrassV2DeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2DeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.deployments[':deploymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2DeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>
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
                  ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassV2DeploymentsDeploymentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2DeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2DeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.deployments[':deploymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGreengrassV2DeploymentsDeploymentIdMutationKey() {
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId', 'DELETE'] as const
}

export function getDeleteGreengrassV2DeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassV2DeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>,
    ) {
      return parseResponse(client.greengrass.v2.deployments[':deploymentId'].$delete(args, options))
    },
  })
}

export function useDeleteGreengrassV2DeploymentsDeploymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>,
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
  const mutationDefaults = getDeleteGreengrassV2DeploymentsDeploymentIdMutationOptions<
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

export function getGreengrassV2ComponentsArnMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/components/:arn/metadata', keyArgs] as const
}

export function getGreengrassV2ComponentsArnMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2ComponentsArnMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2ComponentsArnMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
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
                  ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassV2ComponentsArnMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsArnMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2ComponentsArnMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.components[':arn'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/components/:arn/artifacts/:artifactName', keyArgs] as const
}

export function getGreengrassV2ComponentsArnArtifactsArtifactNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2ComponentsArnArtifactsArtifactName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
                    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
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
                    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey>
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
              (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassThingsThingNameConnectivityInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/things/:thingName/connectivityInfo', keyArgs] as const
}

export function getGreengrassThingsThingNameConnectivityInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassThingsThingNameConnectivityInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.things[':thingName'].connectivityInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassThingsThingNameConnectivityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']>
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
                    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
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
                    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
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
            ReturnType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassThingsThingNameConnectivityInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.things[':thingName'].connectivityInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGreengrassThingsThingNameConnectivityInfoMutationKey() {
  return ['greengrass', '/greengrass/things/:thingName/connectivityInfo', 'PUT'] as const
}

export function getPutGreengrassThingsThingNameConnectivityInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassThingsThingNameConnectivityInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.things[':thingName'].connectivityInfo.$put(args, options),
      )
    },
  })
}

export function usePutGreengrassThingsThingNameConnectivityInfo<
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
                    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']
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
  const mutationDefaults = getPutGreengrassThingsThingNameConnectivityInfoMutationOptions<
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

export function getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/associatedClientDevices',
    keyArgs,
  ] as const
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevices<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey
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
              (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2ComponentsArnVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/components/:arn/versions', keyArgs] as const
}

export function getGreengrassV2ComponentsArnVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2ComponentsArnVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2ComponentsArnVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
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
                  ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGreengrassV2ComponentsArnVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsArnVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2ComponentsArnVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.components[':arn'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2ComponentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.components.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/components', keyArgs] as const
}

export function getGreengrassV2ComponentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.components.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2ComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2Components<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.components.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
            >
          >,
          ReturnType<typeof getGreengrassV2ComponentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2ComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2CoreDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.coreDevices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['greengrass', '/greengrass/v2/coreDevices', keyArgs] as const
}

export function getGreengrassV2CoreDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.coreDevices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGreengrassV2CoreDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.coreDevices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGreengrassV2CoreDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.greengrass.v2.coreDevices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>
              >
            >
          >,
          ReturnType<typeof getGreengrassV2CoreDevicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGreengrassV2CoreDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.coreDevices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/effectiveDeployments',
    keyArgs,
  ] as const
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeployments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey
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
              (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'greengrass',
    '/greengrass/v2/coreDevices/:coreDeviceThingName/installedComponents',
    keyArgs,
  ] as const
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponents<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
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
                    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey
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
              (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGreengrassV2ResolveComponentCandidatesMutationKey() {
  return ['greengrass', '/greengrass/v2/resolveComponentCandidates', 'POST'] as const
}

export function getPostGreengrassV2ResolveComponentCandidatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.v2.resolveComponentCandidates.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassV2ResolveComponentCandidatesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post>,
    ) {
      return parseResponse(client.greengrass.v2.resolveComponentCandidates.$post(args, options))
    },
  })
}

export function usePostGreengrassV2ResolveComponentCandidates<
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
                Awaited<ReturnType<typeof client.greengrass.v2.resolveComponentCandidates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post>,
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
  const mutationDefaults = getPostGreengrassV2ResolveComponentCandidatesMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
