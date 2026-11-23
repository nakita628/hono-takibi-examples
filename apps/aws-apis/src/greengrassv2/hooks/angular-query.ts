import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/servicerole', keyArgs] as const
}

export function getGreengrassServiceroleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassServiceroleQueryKey>
  >({
    queryKey: getGreengrassServiceroleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.servicerole.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassServicerole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassServiceroleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassServiceroleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.servicerole.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.servicerole.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2DeploymentsDeploymentIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGreengrassV2DeploymentsDeploymentIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2CreateComponentVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGreengrassV2CreateComponentVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2DeploymentsQueryKey(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/deployments', keyArgs] as const
}

export function getGreengrassV2DeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2DeploymentsQueryKey>
  >({
    queryKey: getGreengrassV2DeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2Deployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.greengrass.v2.deployments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassV2DeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2DeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2Deployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.deployments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.v2.deployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGreengrassV2DeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2ComponentsArnQueryKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn', keyArgs] as const
}

export function getGreengrassV2ComponentsArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2ComponentsArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2ComponentsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2ComponentsArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteGreengrassV2ComponentsArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGreengrassV2ComponentsArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey(
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/coreDevices/:coreDeviceThingName', keyArgs] as const
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameQueryOptions<
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
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2CoreDevicesCoreDeviceThingName<
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
  args: () => InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGreengrassV2CoreDevicesCoreDeviceThingNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2CoreDevicesCoreDeviceThingNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteGreengrassV2CoreDevicesCoreDeviceThingName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGreengrassV2CoreDevicesCoreDeviceThingNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2DeploymentsDeploymentIdQueryKey(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/deployments/:deploymentId', keyArgs] as const
}

export function getGreengrassV2DeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2DeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2DeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGreengrassV2DeploymentsDeploymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2DeploymentsDeploymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteGreengrassV2DeploymentsDeploymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGreengrassV2DeploymentsDeploymentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2ComponentsArnMetadataQueryKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/metadata', keyArgs] as const
}

export function getGreengrassV2ComponentsArnMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2ComponentsArnMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2ComponentsArnMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['metadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGreengrassV2ComponentsArnMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2ComponentsArnMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/artifacts/:artifactName', keyArgs] as const
}

export function getGreengrassV2ComponentsArnArtifactsArtifactNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2ComponentsArnArtifactsArtifactNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2ComponentsArnArtifactsArtifactName<
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
  args: () => InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2ComponentsArnArtifactsArtifactNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassThingsThingNameConnectivityInfoQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:thingName/connectivityInfo', keyArgs] as const
}

export function getGreengrassThingsThingNameConnectivityInfoQueryOptions<
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
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassThingsThingNameConnectivityInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.things[':thingName'].connectivityInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassThingsThingNameConnectivityInfo<
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
  args: () => InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassThingsThingNameConnectivityInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGreengrassThingsThingNameConnectivityInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGreengrassThingsThingNameConnectivityInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey(
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

export function getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevices<
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
  args: () => InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2ComponentsArnVersionsQueryKey(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components/:arn/versions', keyArgs] as const
}

export function getGreengrassV2ComponentsArnVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2ComponentsArnVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.components[':arn'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2ComponentsArnVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGreengrassV2ComponentsArnVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2ComponentsArnVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2ComponentsQueryKey(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/components', keyArgs] as const
}

export function getGreengrassV2ComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2ComponentsQueryKey>
  >({
    queryKey: getGreengrassV2ComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.components.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2Components<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.greengrass.v2.components.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.components.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassV2ComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2ComponentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2CoreDevicesQueryKey(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/v2/coreDevices', keyArgs] as const
}

export function getGreengrassV2CoreDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassV2CoreDevicesQueryKey>
  >({
    queryKey: getGreengrassV2CoreDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.coreDevices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2CoreDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.v2.coreDevices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassV2CoreDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2CoreDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey(
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

export function getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeployments<
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
  args: () => InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey(
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

export function getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponents<
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
  args: () => InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGreengrassV2ResolveComponentCandidates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGreengrassV2ResolveComponentCandidatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
