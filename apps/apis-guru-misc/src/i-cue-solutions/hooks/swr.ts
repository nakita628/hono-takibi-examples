import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdministrationKey() {
  return ['administration'] as const
}

export function getForecastKey() {
  return ['forecast'] as const
}

export function getHyperparameterKey() {
  return ['hyperparameter'] as const
}

export function getInventoryKey() {
  return ['inventory'] as const
}

export function getLifecycleKey() {
  return ['lifecycle'] as const
}

export function getOutlierKey() {
  return ['outlier'] as const
}

export function getPortfolioKey() {
  return ['portfolio'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getGetAdministrationEntityKey(
  args: InferRequestType<typeof client.administration.entity.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['administration', '/administration/entity', keyArgs] as const
}

export function useGetAdministrationEntity<TError = unknown>(
  args: InferRequestType<typeof client.administration.entity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
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
        ? getGetAdministrationEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.entity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdministrationEntity<TError = unknown>(
  args: InferRequestType<typeof client.administration.entity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
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
        ? getGetAdministrationEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.entity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdministrationEntityKey() {
  return ['administration', '/administration/entity', 'PUT'] as const
}

export function usePutAdministrationEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.entity.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdministrationEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administration.entity.$put> },
      ) => parseResponse(client.administration.entity.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdministrationEntityKey() {
  return ['administration', '/administration/entity', 'POST'] as const
}

export function usePostAdministrationEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.entity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administration.entity.$post> },
      ) => parseResponse(client.administration.entity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdministrationEntityIdKey() {
  return ['administration', '/administration/entity/:id', 'DELETE'] as const
}

export function useDeleteAdministrationEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.entity)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.administration.entity)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdministrationEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.administration.entity)[':id']['$delete']> },
      ) => parseResponse(client.administration.entity[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdministrationFileToJsonKey() {
  return ['administration', '/administration/file-to-json', 'POST'] as const
}

export function usePostAdministrationFileToJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration)['file-to-json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.administration)['file-to-json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationFileToJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.administration)['file-to-json']['$post']> },
      ) => parseResponse(client.administration['file-to-json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdministrationModelKey(
  args: InferRequestType<typeof client.administration.model.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['administration', '/administration/model', keyArgs] as const
}

export function useGetAdministrationModel<TError = unknown>(
  args: InferRequestType<typeof client.administration.model.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
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
        ? getGetAdministrationModelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.model.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdministrationModel<TError = unknown>(
  args: InferRequestType<typeof client.administration.model.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
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
        ? getGetAdministrationModelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.model.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdministrationModelKey() {
  return ['administration', '/administration/model', 'POST'] as const
}

export function usePostAdministrationModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.model.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administration.model.$post> },
      ) => parseResponse(client.administration.model.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdministrationModelEntityIdKey(
  args: InferRequestType<(typeof client.administration.model)[':entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['administration', '/administration/model/:entityId', keyArgs] as const
}

export function useGetAdministrationModelEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.administration.model)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
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
        ? getGetAdministrationModelEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.model[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdministrationModelEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.administration.model)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
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
        ? getGetAdministrationModelEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.model[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdministrationModelEntityIdKey() {
  return ['administration', '/administration/model/:entityId', 'POST'] as const
}

export function usePostAdministrationModelEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.administration.model)[':entityId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationModelEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.administration.model)[':entityId']['$post']> },
      ) => parseResponse(client.administration.model[':entityId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdministrationPlanningLevelLockKey() {
  return ['administration', '/administration/planning-level/lock', 'POST'] as const
}

export function usePostAdministrationPlanningLevelLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration)['planning-level']['lock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationPlanningLevelLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>
        },
      ) => parseResponse(client.administration['planning-level'].lock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdministrationPlanningLevelEntityIdIdKey() {
  return ['administration', '/administration/planning-level/:entityId/:id', 'DELETE'] as const
}

export function useDeleteAdministrationPlanningLevelEntityIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdministrationPlanningLevelEntityIdIdKey()
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
            (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.administration['planning-level'][':entityId'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdministrationTokenKey() {
  return ['administration', '/administration/token', 'POST'] as const
}

export function usePostAdministrationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administration.token.$post> },
      ) => parseResponse(client.administration.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdministrationUserKey() {
  return ['administration', '/administration/user', 'PUT'] as const
}

export function usePutAdministrationUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdministrationUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.administration.user.$put> }) =>
        parseResponse(client.administration.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdministrationUserKey() {
  return ['administration', '/administration/user', 'POST'] as const
}

export function usePostAdministrationUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdministrationUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.administration.user.$post> }) =>
        parseResponse(client.administration.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdministrationUserLockKey() {
  return ['administration', '/administration/user/lock', 'PUT'] as const
}

export function usePutAdministrationUserLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.lock.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.administration.user.lock.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdministrationUserLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.administration.user.lock.$put> },
      ) => parseResponse(client.administration.user.lock.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdministrationUserEntityIdKey(
  args: InferRequestType<(typeof client.administration.user)[':entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['administration', '/administration/user/:entityId', keyArgs] as const
}

export function useGetAdministrationUserEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.administration.user)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
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
        ? getGetAdministrationUserEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.user[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdministrationUserEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.administration.user)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
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
        ? getGetAdministrationUserEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.administration.user[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdministrationUserEntityIdIdKey() {
  return ['administration', '/administration/user/:entityId/:id', 'DELETE'] as const
}

export function useDeleteAdministrationUserEntityIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.user)[':entityId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdministrationUserEntityIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>
        },
      ) =>
        parseResponse(client.administration.user[':entityId'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastKey() {
  return ['forecast', '/forecast', 'POST'] as const
}

export function usePostForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.forecast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forecast.$post> }) =>
        parseResponse(client.forecast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastAIKey() {
  return ['forecast', '/forecast/AI', 'POST'] as const
}

export function usePostForecastAI<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.AI.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.forecast.AI.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastAIKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forecast.AI.$post> }) =>
        parseResponse(client.forecast.AI.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastAIHistoryAndForecastKey() {
  return ['forecast', '/forecast/AI/history-and-forecast', 'POST'] as const
}

export function usePostForecastAIHistoryAndForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast.AI)['history-and-forecast']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastAIHistoryAndForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']> },
      ) => parseResponse(client.forecast.AI['history-and-forecast'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastFileToForecastKey() {
  return ['forecast', '/forecast/file-to-forecast', 'POST'] as const
}

export function usePostForecastFileToForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['file-to-forecast']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastFileToForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']> },
      ) => parseResponse(client.forecast['file-to-forecast'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastForecastBottomUpKey() {
  return ['forecast', '/forecast/forecast-bottom-up', 'POST'] as const
}

export function usePostForecastForecastBottomUp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['forecast-bottom-up']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastForecastBottomUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']> },
      ) => parseResponse(client.forecast['forecast-bottom-up'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastForecastTopDownKey() {
  return ['forecast', '/forecast/forecast-top-down', 'POST'] as const
}

export function usePostForecastForecastTopDown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['forecast-top-down']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastForecastTopDownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']> },
      ) => parseResponse(client.forecast['forecast-top-down'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastFullDetailKey() {
  return ['forecast', '/forecast/full-detail', 'POST'] as const
}

export function usePostForecastFullDetail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.forecast)['full-detail']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['full-detail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastFullDetailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.forecast)['full-detail']['$post']> },
      ) => parseResponse(client.forecast['full-detail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastHistoryAndForecastKey() {
  return ['forecast', '/forecast/history-and-forecast', 'POST'] as const
}

export function usePostForecastHistoryAndForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['history-and-forecast']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastHistoryAndForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']> },
      ) => parseResponse(client.forecast['history-and-forecast'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastOptimalParameterKey() {
  return ['forecast', '/forecast/optimal-parameter', 'POST'] as const
}

export function usePostForecastOptimalParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['optimal-parameter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastOptimalParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']> },
      ) => parseResponse(client.forecast['optimal-parameter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForecastRerunKey() {
  return ['forecast', '/forecast/rerun', 'POST'] as const
}

export function usePostForecastRerun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.rerun.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.forecast.rerun.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForecastRerunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forecast.rerun.$post> }) =>
        parseResponse(client.forecast.rerun.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetForecastResultJobIdKey(
  args: InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['forecast', '/forecast/result/:jobId', keyArgs] as const
}

export function useGetForecastResultJobId<TError = unknown>(
  args: InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
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
        ? getGetForecastResultJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forecast.result[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForecastResultJobId<TError = unknown>(
  args: InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
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
        ? getGetForecastResultJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forecast.result[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetForecastStatusJobIdKey(
  args: InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['forecast', '/forecast/status/:jobId', keyArgs] as const
}

export function useGetForecastStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
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
        ? getGetForecastStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forecast.status[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForecastStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
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
        ? getGetForecastStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forecast.status[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHyperparameterKey(args: InferRequestType<typeof client.hyperparameter.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hyperparameter', '/hyperparameter', keyArgs] as const
}

export function useGetHyperparameter<TError = unknown>(
  args: InferRequestType<typeof client.hyperparameter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHyperparameterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hyperparameter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHyperparameter<TError = unknown>(
  args: InferRequestType<typeof client.hyperparameter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHyperparameterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hyperparameter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHyperparameterKey() {
  return ['hyperparameter', '/hyperparameter', 'POST'] as const
}

export function usePostHyperparameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hyperparameter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHyperparameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hyperparameter.$post> }) =>
        parseResponse(client.hyperparameter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryAmazonIpiKey() {
  return ['inventory', '/inventory/amazon-ipi', 'POST'] as const
}

export function usePostInventoryAmazonIpi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inventory)['amazon-ipi']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryAmazonIpiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']> },
      ) => parseResponse(client.inventory['amazon-ipi'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryCaryyingCostKey() {
  return ['inventory', '/inventory/caryying-cost', 'POST'] as const
}

export function usePostInventoryCaryyingCost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['caryying-cost']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['caryying-cost']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryCaryyingCostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['caryying-cost']['$post']> },
      ) => parseResponse(client.inventory['caryying-cost'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryEoqKey() {
  return ['inventory', '/inventory/eoq', 'POST'] as const
}

export function usePostInventoryEoq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.eoq.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventory.eoq.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryEoqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventory.eoq.$post> }) =>
        parseResponse(client.inventory.eoq.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryFillRateKey() {
  return ['inventory', '/inventory/fill-rate', 'POST'] as const
}

export function usePostInventoryFillRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inventory)['fill-rate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['fill-rate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryFillRateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['fill-rate']['$post']> },
      ) => parseResponse(client.inventory['fill-rate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryFinancialImapctForecastAccuracyKey() {
  return ['inventory', '/inventory/financial-imapct-forecast-accuracy', 'POST'] as const
}

export function usePostInventoryFinancialImapctForecastAccuracy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryFinancialImapctForecastAccuracyKey()
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
            (typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.inventory['financial-imapct-forecast-accuracy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryInventoryTurnoverKey() {
  return ['inventory', '/inventory/inventory-turnover', 'POST'] as const
}

export function usePostInventoryInventoryTurnover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['inventory-turnover']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryInventoryTurnoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']> },
      ) => parseResponse(client.inventory['inventory-turnover'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryLtdKey() {
  return ['inventory', '/inventory/ltd', 'POST'] as const
}

export function usePostInventoryLtd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.ltd.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventory.ltd.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryLtdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventory.ltd.$post> }) =>
        parseResponse(client.inventory.ltd.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryMoqKey() {
  return ['inventory', '/inventory/moq', 'POST'] as const
}

export function usePostInventoryMoq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.moq.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventory.moq.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryMoqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventory.moq.$post> }) =>
        parseResponse(client.inventory.moq.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryOptimalServiceLevelKey() {
  return ['inventory', '/inventory/optimal-service-level', 'POST'] as const
}

export function usePostInventoryOptimalServiceLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['optimal-service-level']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryOptimalServiceLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']> },
      ) => parseResponse(client.inventory['optimal-service-level'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryReorderPointKey() {
  return ['inventory', '/inventory/reorder-point', 'POST'] as const
}

export function usePostInventoryReorderPoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['reorder-point']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['reorder-point']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryReorderPointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['reorder-point']['$post']> },
      ) => parseResponse(client.inventory['reorder-point'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventorySafetyStockKey() {
  return ['inventory', '/inventory/safety-stock', 'POST'] as const
}

export function usePostInventorySafetyStock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['safety-stock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['safety-stock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventorySafetyStockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['safety-stock']['$post']> },
      ) => parseResponse(client.inventory['safety-stock'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryServiceLevelKey() {
  return ['inventory', '/inventory/service-level', 'POST'] as const
}

export function usePostInventoryServiceLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['service-level']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inventory)['service-level']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryServiceLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inventory)['service-level']['$post']> },
      ) => parseResponse(client.inventory['service-level'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoryTurnsKey() {
  return ['inventory', '/inventory/turns', 'POST'] as const
}

export function usePostInventoryTurns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.turns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventory.turns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoryTurnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventory.turns.$post> }) =>
        parseResponse(client.inventory.turns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLifecycleManyToOneKey() {
  return ['lifecycle', '/lifecycle/many-to-one', 'POST'] as const
}

export function usePostLifecycleManyToOne<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lifecycle)['many-to-one']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLifecycleManyToOneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']> },
      ) => parseResponse(client.lifecycle['many-to-one'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLifecycleOneToOneKey() {
  return ['lifecycle', '/lifecycle/one-to-one', 'POST'] as const
}

export function usePostLifecycleOneToOne<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lifecycle)['one-to-one']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLifecycleOneToOneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']> },
      ) => parseResponse(client.lifecycle['one-to-one'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOutlierKey() {
  return ['outlier', '/outlier', 'POST'] as const
}

export function usePostOutlier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outlier.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.outlier.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOutlierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.outlier.$post> }) =>
        parseResponse(client.outlier.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioKey() {
  return ['portfolio', '/portfolio', 'POST'] as const
}

export function usePostPortfolio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portfolio.$post> }) =>
        parseResponse(client.portfolio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAbcKey() {
  return ['portfolio', '/portfolio/abc', 'POST'] as const
}

export function usePostPortfolioAbc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.abc.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.abc.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAbcKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portfolio.abc.$post> }) =>
        parseResponse(client.portfolio.abc.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioFileToPortfolioKey() {
  return ['portfolio', '/portfolio/file-to-portfolio', 'POST'] as const
}

export function usePostPortfolioFileToPortfolio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio)['file-to-portfolio']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioFileToPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']> },
      ) => parseResponse(client.portfolio['file-to-portfolio'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioForecastPerformanceRewindKey() {
  return ['portfolio', '/portfolio/forecast-performance-rewind', 'POST'] as const
}

export function usePostPortfolioForecastPerformanceRewind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioForecastPerformanceRewindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>
        },
      ) => parseResponse(client.portfolio['forecast-performance-rewind'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioXyzKey() {
  return ['portfolio', '/portfolio/xyz', 'POST'] as const
}

export function usePostPortfolioXyz<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.xyz.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.xyz.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioXyzKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portfolio.xyz.$post> }) =>
        parseResponse(client.portfolio.xyz.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingBundlePricingKey() {
  return ['pricing', '/pricing/bundle-pricing', 'POST'] as const
}

export function usePostPricingBundlePricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['bundle-pricing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingBundlePricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']> },
      ) => parseResponse(client.pricing['bundle-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingCompetitivePricingKey() {
  return ['pricing', '/pricing/competitive-pricing', 'POST'] as const
}

export function usePostPricingCompetitivePricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['competitive-pricing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingCompetitivePricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']> },
      ) => parseResponse(client.pricing['competitive-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingCostPlusPricingKey() {
  return ['pricing', '/pricing/cost-plus-pricing', 'POST'] as const
}

export function usePostPricingCostPlusPricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['cost-plus-pricing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingCostPlusPricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']> },
      ) => parseResponse(client.pricing['cost-plus-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingDecoyPricingKey() {
  return ['pricing', '/pricing/decoy-pricing', 'POST'] as const
}

export function usePostPricingDecoyPricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing)['decoy-pricing']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingDecoyPricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']> },
      ) => parseResponse(client.pricing['decoy-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingOddPricingKey() {
  return ['pricing', '/pricing/odd-pricing', 'POST'] as const
}

export function usePostPricingOddPricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing)['odd-pricing']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['odd-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingOddPricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['odd-pricing']['$post']> },
      ) => parseResponse(client.pricing['odd-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingPenetrationPricingKey() {
  return ['pricing', '/pricing/penetration-pricing', 'POST'] as const
}

export function usePostPricingPenetrationPricing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['penetration-pricing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingPenetrationPricingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']> },
      ) => parseResponse(client.pricing['penetration-pricing'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPricingPriceElasticityOfDemandKey() {
  return ['pricing', '/pricing/price-elasticity-of-demand', 'POST'] as const
}

export function usePostPricingPriceElasticityOfDemand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingPriceElasticityOfDemandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>
        },
      ) => parseResponse(client.pricing['price-elasticity-of-demand'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportPerformanceSkuRationalizationPlanningLevelIdKey(
  args: InferRequestType<
    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/performance/sku-rationalization/:planningLevelId', keyArgs] as const
}

export function useGetReportPerformanceSkuRationalizationPlanningLevelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
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
        ? getGetReportPerformanceSkuRationalizationPlanningLevelIdKey(args)
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
                (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
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
          client.report.performance['sku-rationalization'][':planningLevelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPerformanceSkuRationalizationPlanningLevelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
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
        ? getGetReportPerformanceSkuRationalizationPlanningLevelIdKey(args)
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
                (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
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
          client.report.performance['sku-rationalization'][':planningLevelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReportPerformancePlanningLevelIdKey(
  args: InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/performance/:planningLevelId', keyArgs] as const
}

export function useGetReportPerformancePlanningLevelId<TError = unknown>(
  args: InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
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
        ? getGetReportPerformancePlanningLevelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.performance[':planningLevelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPerformancePlanningLevelId<TError = unknown>(
  args: InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
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
        ? getGetReportPerformancePlanningLevelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report.performance[':planningLevelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPlanningLevelOrganizationKey(
  args: InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/planning-level/organization', keyArgs] as const
}

export function useGetReportPlanningLevelOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
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
        ? getGetReportPlanningLevelOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report['planning-level'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPlanningLevelOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
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
        ? getGetReportPlanningLevelOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.report['planning-level'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPlanningLevelUserKey(
  args: InferRequestType<(typeof client.report)['planning-level']['user']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/planning-level/user', keyArgs] as const
}

export function useGetReportPlanningLevelUser<TError = unknown>(
  args: InferRequestType<(typeof client.report)['planning-level']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
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
        ? getGetReportPlanningLevelUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report['planning-level'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPlanningLevelUser<TError = unknown>(
  args: InferRequestType<(typeof client.report)['planning-level']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
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
        ? getGetReportPlanningLevelUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report['planning-level'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportUserKey(args: InferRequestType<typeof client.report.user.$get>) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/user', keyArgs] as const
}

export function useGetReportUser<TError = unknown>(
  args: InferRequestType<typeof client.report.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportUser<TError = unknown>(
  args: InferRequestType<typeof client.report.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
