import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreatePermitKey() {
  return ['createPermit'] as const
}

export function getDisableKey() {
  return ['disable'] as const
}

export function getDisablePermitKey() {
  return ['disablePermit'] as const
}

export function getListRecurringDetailsKey() {
  return ['listRecurringDetails'] as const
}

export function getNotifyShopperKey() {
  return ['notifyShopper'] as const
}

export function getScheduleAccountUpdaterKey() {
  return ['scheduleAccountUpdater'] as const
}

export function getPostCreatePermitMutationKey() {
  return ['createPermit', '/createPermit', 'POST'] as const
}

export function getPostCreatePermitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPermit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createPermit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreatePermitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createPermit.$post>) {
      return parseResponse(client.createPermit.$post(args, options))
    },
  })
}

export function usePostCreatePermit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPermit.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createPermit.$post>,
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
  const mutationDefaults = getPostCreatePermitMutationOptions<TError, TOnMutateResult>(
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

export function getPostDisableMutationKey() {
  return ['disable', '/disable', 'POST'] as const
}

export function getPostDisableMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disable.$post>>>>>,
    TError,
    InferRequestType<typeof client.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disable.$post>) {
      return parseResponse(client.disable.$post(args, options))
    },
  })
}

export function usePostDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disable.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.disable.$post>,
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
  const mutationDefaults = getPostDisableMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDisablePermitMutationKey() {
  return ['disablePermit', '/disablePermit', 'POST'] as const
}

export function getPostDisablePermitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disablePermit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.disablePermit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisablePermitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disablePermit.$post>) {
      return parseResponse(client.disablePermit.$post(args, options))
    },
  })
}

export function usePostDisablePermit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disablePermit.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.disablePermit.$post>,
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
  const mutationDefaults = getPostDisablePermitMutationOptions<TError, TOnMutateResult>(
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

export function getPostListRecurringDetailsMutationKey() {
  return ['listRecurringDetails', '/listRecurringDetails', 'POST'] as const
}

export function getPostListRecurringDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listRecurringDetails.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listRecurringDetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListRecurringDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listRecurringDetails.$post>) {
      return parseResponse(client.listRecurringDetails.$post(args, options))
    },
  })
}

export function usePostListRecurringDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listRecurringDetails.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listRecurringDetails.$post>,
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
  const mutationDefaults = getPostListRecurringDetailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostNotifyShopperMutationKey() {
  return ['notifyShopper', '/notifyShopper', 'POST'] as const
}

export function getPostNotifyShopperMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifyShopper.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifyShopper.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotifyShopperMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifyShopper.$post>) {
      return parseResponse(client.notifyShopper.$post(args, options))
    },
  })
}

export function usePostNotifyShopper<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifyShopper.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.notifyShopper.$post>,
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
  const mutationDefaults = getPostNotifyShopperMutationOptions<TError, TOnMutateResult>(
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

export function getPostScheduleAccountUpdaterMutationKey() {
  return ['scheduleAccountUpdater', '/scheduleAccountUpdater', 'POST'] as const
}

export function getPostScheduleAccountUpdaterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scheduleAccountUpdater.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.scheduleAccountUpdater.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduleAccountUpdaterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scheduleAccountUpdater.$post>) {
      return parseResponse(client.scheduleAccountUpdater.$post(args, options))
    },
  })
}

export function usePostScheduleAccountUpdater<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scheduleAccountUpdater.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scheduleAccountUpdater.$post>,
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
  const mutationDefaults = getPostScheduleAccountUpdaterMutationOptions<TError, TOnMutateResult>(
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
