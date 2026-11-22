import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostCreatePermitKey() {
  return ['createPermit', '/createPermit', 'POST'] as const
}

export function usePostCreatePermit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPermit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createPermit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreatePermitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createPermit.$post> }) =>
        parseResponse(client.createPermit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisableKey() {
  return ['disable', '/disable', 'POST'] as const
}

export function usePostDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disable.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disable.$post> }) =>
        parseResponse(client.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisablePermitKey() {
  return ['disablePermit', '/disablePermit', 'POST'] as const
}

export function usePostDisablePermit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disablePermit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.disablePermit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisablePermitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disablePermit.$post> }) =>
        parseResponse(client.disablePermit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListRecurringDetailsKey() {
  return ['listRecurringDetails', '/listRecurringDetails', 'POST'] as const
}

export function usePostListRecurringDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listRecurringDetails.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listRecurringDetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListRecurringDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listRecurringDetails.$post> },
      ) => parseResponse(client.listRecurringDetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotifyShopperKey() {
  return ['notifyShopper', '/notifyShopper', 'POST'] as const
}

export function usePostNotifyShopper<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifyShopper.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifyShopper.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotifyShopperKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notifyShopper.$post> }) =>
        parseResponse(client.notifyShopper.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScheduleAccountUpdaterKey() {
  return ['scheduleAccountUpdater', '/scheduleAccountUpdater', 'POST'] as const
}

export function usePostScheduleAccountUpdater<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scheduleAccountUpdater.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.scheduleAccountUpdater.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduleAccountUpdaterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.scheduleAccountUpdater.$post> },
      ) => parseResponse(client.scheduleAccountUpdater.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
