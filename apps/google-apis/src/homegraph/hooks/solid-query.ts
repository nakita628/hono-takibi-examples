import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1DevicesQueryMutationKey() {
  return ['v1', '/v1/devices:query', 'POST'] as const
}

export function getPostV1DevicesQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['devices:query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['devices:query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevicesQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['devices:query']['$post']>) {
      return parseResponse(client.v1['devices:query'].$post(args, options))
    },
  })
}

export function createPostV1DevicesQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['devices:query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['devices:query']['$post']>,
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
    const mutationDefaults = getPostV1DevicesQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DevicesReportStateAndNotificationMutationKey() {
  return ['v1', '/v1/devices:reportStateAndNotification', 'POST'] as const
}

export function getPostV1DevicesReportStateAndNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevicesReportStateAndNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>,
    ) {
      return parseResponse(client.v1['devices:reportStateAndNotification'].$post(args, options))
    },
  })
}

export function createPostV1DevicesReportStateAndNotification<
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
                Awaited<
                  ReturnType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>,
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
    const mutationDefaults = getPostV1DevicesReportStateAndNotificationMutationOptions<
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

export function getPostV1DevicesRequestSyncMutationKey() {
  return ['v1', '/v1/devices:requestSync', 'POST'] as const
}

export function getPostV1DevicesRequestSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['devices:requestSync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['devices:requestSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevicesRequestSyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['devices:requestSync']['$post']>) {
      return parseResponse(client.v1['devices:requestSync'].$post(args, options))
    },
  })
}

export function createPostV1DevicesRequestSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['devices:requestSync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['devices:requestSync']['$post']>,
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
    const mutationDefaults = getPostV1DevicesRequestSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DevicesSyncMutationKey() {
  return ['v1', '/v1/devices:sync', 'POST'] as const
}

export function getPostV1DevicesSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['devices:sync']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['devices:sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevicesSyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['devices:sync']['$post']>) {
      return parseResponse(client.v1['devices:sync'].$post(args, options))
    },
  })
}

export function createPostV1DevicesSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['devices:sync']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['devices:sync']['$post']>,
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
    const mutationDefaults = getPostV1DevicesSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AgentUserIdMutationKey() {
  return ['v1', '/v1/:agentUserId', 'DELETE'] as const
}

export function getDeleteV1AgentUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':agentUserId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':agentUserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':agentUserId']['$delete']>) {
      return parseResponse(client.v1[':agentUserId'].$delete(args, options))
    },
  })
}

export function createDeleteV1AgentUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':agentUserId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':agentUserId']['$delete']>,
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
    const mutationDefaults = getDeleteV1AgentUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
