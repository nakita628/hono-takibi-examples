import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostCreateNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.createNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.createNotificationConfiguration.$post>,
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
    const mutationDefaults = getPostCreateNotificationConfigurationMutationOptions<
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

export function createPostDeleteNotificationConfigurations<
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
                Awaited<ReturnType<typeof client.deleteNotificationConfigurations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.deleteNotificationConfigurations.$post>,
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
    const mutationDefaults = getPostDeleteNotificationConfigurationsMutationOptions<
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

export function createPostGetNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.getNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getNotificationConfiguration.$post>,
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
    const mutationDefaults = getPostGetNotificationConfigurationMutationOptions<
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

export function createPostGetNotificationConfigurationList<
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
                Awaited<ReturnType<typeof client.getNotificationConfigurationList.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getNotificationConfigurationList.$post>,
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
    const mutationDefaults = getPostGetNotificationConfigurationListMutationOptions<
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

export function createPostTestNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.testNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.testNotificationConfiguration.$post>,
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
    const mutationDefaults = getPostTestNotificationConfigurationMutationOptions<
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

export function createPostUpdateNotificationConfiguration<
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
                Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateNotificationConfiguration.$post>,
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
    const mutationDefaults = getPostUpdateNotificationConfigurationMutationOptions<
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
