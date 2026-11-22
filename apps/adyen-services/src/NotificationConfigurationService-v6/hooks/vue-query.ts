import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateNotificationConfigurationKey() {
  return ['createNotificationConfiguration'] as const
}

export function getDeleteNotificationConfigurationsKey() {
  return ['deleteNotificationConfigurations'] as const
}

export function getGetNotificationConfigurationKey() {
  return ['getNotificationConfiguration'] as const
}

export function getGetNotificationConfigurationListKey() {
  return ['getNotificationConfigurationList'] as const
}

export function getTestNotificationConfigurationKey() {
  return ['testNotificationConfiguration'] as const
}

export function getUpdateNotificationConfigurationKey() {
  return ['updateNotificationConfiguration'] as const
}

export function getPostCreateNotificationConfigurationMutationKey() {
  return ['createNotificationConfiguration', '/createNotificationConfiguration', 'POST'] as const
}

export function getPostCreateNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.createNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.createNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateNotificationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createNotificationConfiguration.$post>) {
      return parseResponse(client.createNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostCreateNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.createNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.createNotificationConfiguration.$post>,
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
  const mutationDefaults = getPostCreateNotificationConfigurationMutationOptions<
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

export function getPostDeleteNotificationConfigurationsMutationKey() {
  return ['deleteNotificationConfigurations', '/deleteNotificationConfigurations', 'POST'] as const
}

export function getPostDeleteNotificationConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.deleteNotificationConfigurations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.deleteNotificationConfigurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteNotificationConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteNotificationConfigurations.$post>) {
      return parseResponse(client.deleteNotificationConfigurations.$post(args, options))
    },
  })
}

export function usePostDeleteNotificationConfigurations<
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
                Awaited<ReturnType<typeof client.deleteNotificationConfigurations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.deleteNotificationConfigurations.$post>,
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
  const mutationDefaults = getPostDeleteNotificationConfigurationsMutationOptions<
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

export function getPostGetNotificationConfigurationMutationKey() {
  return ['getNotificationConfiguration', '/getNotificationConfiguration', 'POST'] as const
}

export function getPostGetNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getNotificationConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetNotificationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getNotificationConfiguration.$post>) {
      return parseResponse(client.getNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostGetNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.getNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getNotificationConfiguration.$post>,
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
  const mutationDefaults = getPostGetNotificationConfigurationMutationOptions<
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

export function getPostGetNotificationConfigurationListMutationKey() {
  return ['getNotificationConfigurationList', '/getNotificationConfigurationList', 'POST'] as const
}

export function getPostGetNotificationConfigurationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.getNotificationConfigurationList.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.getNotificationConfigurationList.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetNotificationConfigurationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getNotificationConfigurationList.$post>) {
      return parseResponse(client.getNotificationConfigurationList.$post(args, options))
    },
  })
}

export function usePostGetNotificationConfigurationList<
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
                Awaited<ReturnType<typeof client.getNotificationConfigurationList.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getNotificationConfigurationList.$post>,
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
  const mutationDefaults = getPostGetNotificationConfigurationListMutationOptions<
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

export function getPostTestNotificationConfigurationMutationKey() {
  return ['testNotificationConfiguration', '/testNotificationConfiguration', 'POST'] as const
}

export function getPostTestNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testNotificationConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.testNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestNotificationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testNotificationConfiguration.$post>) {
      return parseResponse(client.testNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostTestNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.testNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.testNotificationConfiguration.$post>,
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
  const mutationDefaults = getPostTestNotificationConfigurationMutationOptions<
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

export function getPostUpdateNotificationConfigurationMutationKey() {
  return ['updateNotificationConfiguration', '/updateNotificationConfiguration', 'POST'] as const
}

export function getPostUpdateNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateNotificationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateNotificationConfiguration.$post>) {
      return parseResponse(client.updateNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostUpdateNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateNotificationConfiguration.$post>,
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
  const mutationDefaults = getPostUpdateNotificationConfigurationMutationOptions<
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
