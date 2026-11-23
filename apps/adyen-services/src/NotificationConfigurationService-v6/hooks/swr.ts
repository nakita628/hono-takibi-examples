import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostCreateNotificationConfigurationKey() {
  return ['createNotificationConfiguration', '/createNotificationConfiguration', 'POST'] as const
}

export function usePostCreateNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.createNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createNotificationConfiguration.$post> },
      ) => parseResponse(client.createNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteNotificationConfigurationsKey() {
  return ['deleteNotificationConfigurations', '/deleteNotificationConfigurations', 'POST'] as const
}

export function usePostDeleteNotificationConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.deleteNotificationConfigurations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteNotificationConfigurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteNotificationConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteNotificationConfigurations.$post> },
      ) => parseResponse(client.deleteNotificationConfigurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetNotificationConfigurationKey() {
  return ['getNotificationConfiguration', '/getNotificationConfiguration', 'POST'] as const
}

export function usePostGetNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getNotificationConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getNotificationConfiguration.$post> },
      ) => parseResponse(client.getNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetNotificationConfigurationListKey() {
  return ['getNotificationConfigurationList', '/getNotificationConfigurationList', 'POST'] as const
}

export function usePostGetNotificationConfigurationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.getNotificationConfigurationList.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getNotificationConfigurationList.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetNotificationConfigurationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getNotificationConfigurationList.$post> },
      ) => parseResponse(client.getNotificationConfigurationList.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestNotificationConfigurationKey() {
  return ['testNotificationConfiguration', '/testNotificationConfiguration', 'POST'] as const
}

export function usePostTestNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testNotificationConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.testNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.testNotificationConfiguration.$post> },
      ) => parseResponse(client.testNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateNotificationConfigurationKey() {
  return ['updateNotificationConfiguration', '/updateNotificationConfiguration', 'POST'] as const
}

export function usePostUpdateNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateNotificationConfiguration.$post> },
      ) => parseResponse(client.updateNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
