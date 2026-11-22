import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4AuthLoginKey() {
  return ['v4', '/v4/auth/login', 'POST'] as const
}

export function usePostV4AuthLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.auth.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4AuthLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.auth.login.$post> }) =>
        parseResponse(client.v4.auth.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AuthOpenidLoginKey(
  args: InferRequestType<typeof client.v4.auth.openid.login.$get>,
) {
  return ['v4', '/v4/auth/openid/login', args] as const
}

export function useGetV4AuthOpenidLogin<TError = unknown>(
  args: InferRequestType<typeof client.v4.auth.openid.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>
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
        ? getGetV4AuthOpenidLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.openid.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AuthOpenidLogin<TError = unknown>(
  args: InferRequestType<typeof client.v4.auth.openid.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>
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
        ? getGetV4AuthOpenidLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.openid.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4AuthOpenidLoginKey() {
  return ['v4', '/v4/auth/openid/login', 'POST'] as const
}

export function usePostV4AuthOpenidLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.auth.openid.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4AuthOpenidLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.auth.openid.login.$post> },
      ) => parseResponse(client.v4.auth.openid.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AuthPingKey() {
  return ['v4', '/v4/auth/ping'] as const
}

export function useGetV4AuthPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AuthPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AuthPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AuthPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4AuthRecoverUsernameKey() {
  return ['v4', '/v4/auth/recover_username', 'POST'] as const
}

export function usePostV4AuthRecoverUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.recover_username.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.auth.recover_username.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4AuthRecoverUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.auth.recover_username.$post> },
      ) => parseResponse(client.v4.auth.recover_username.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4AuthResetPasswordKey() {
  return ['v4', '/v4/auth/reset_password', 'POST'] as const
}

export function usePostV4AuthResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.reset_password.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.auth.reset_password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4AuthResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.auth.reset_password.$post> },
      ) => parseResponse(client.v4.auth.reset_password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AuthResetPasswordTokenKey(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
) {
  return ['v4', '/v4/auth/reset_password/:token', args] as const
}

export function useGetV4AuthResetPasswordToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
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
        ? getGetV4AuthResetPasswordTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.reset_password[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AuthResetPasswordToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
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
        ? getGetV4AuthResetPasswordTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.auth.reset_password[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4AuthResetPasswordTokenKey() {
  return ['v4', '/v4/auth/reset_password/:token', 'PUT'] as const
}

export function usePutV4AuthResetPasswordToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4AuthResetPasswordTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']> },
      ) => parseResponse(client.v4.auth.reset_password[':token'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ConfigInfoDefaultsKey(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/defaults', keyArgs] as const
}

export function useGetV4ConfigInfoDefaults<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
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
        ? getGetV4ConfigInfoDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoDefaults<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
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
        ? getGetV4ConfigInfoDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoGeneralKey(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/general', keyArgs] as const
}

export function useGetV4ConfigInfoGeneral<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
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
        ? getGetV4ConfigInfoGeneralKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.general.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoGeneral<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
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
        ? getGetV4ConfigInfoGeneralKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.general.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoInfrastructureKey(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/infrastructure', keyArgs] as const
}

export function useGetV4ConfigInfoInfrastructure<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>
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
        ? getGetV4ConfigInfoInfrastructureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.infrastructure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoInfrastructure<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>
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
        ? getGetV4ConfigInfoInfrastructureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.infrastructure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoNotificationsChannelsKey(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/notifications/channels', keyArgs] as const
}

export function useGetV4ConfigInfoNotificationsChannels<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
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
        ? getGetV4ConfigInfoNotificationsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.notifications.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoNotificationsChannels<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
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
        ? getGetV4ConfigInfoNotificationsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.notifications.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoPoliciesAlgorithmsKey(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/algorithms', keyArgs] as const
}

export function useGetV4ConfigInfoPoliciesAlgorithms<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
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
        ? getGetV4ConfigInfoPoliciesAlgorithmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.algorithms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoPoliciesAlgorithms<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
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
        ? getGetV4ConfigInfoPoliciesAlgorithmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.algorithms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoPoliciesClassificationsKey(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/classifications', keyArgs] as const
}

export function useGetV4ConfigInfoPoliciesClassifications<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
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
        ? getGetV4ConfigInfoPoliciesClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoPoliciesClassifications<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
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
        ? getGetV4ConfigInfoPoliciesClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoPoliciesGuestUsersKey(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/guest_users', keyArgs] as const
}

export function useGetV4ConfigInfoPoliciesGuestUsers<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
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
        ? getGetV4ConfigInfoPoliciesGuestUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.guest_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoPoliciesGuestUsers<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
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
        ? getGetV4ConfigInfoPoliciesGuestUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.policies.guest_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoPoliciesPasswordsKey(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/passwords', keyArgs] as const
}

export function useGetV4ConfigInfoPoliciesPasswords<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
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
        ? getGetV4ConfigInfoPoliciesPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.policies.passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoPoliciesPasswords<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
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
        ? getGetV4ConfigInfoPoliciesPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.policies.passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoProductPackagesKey(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/product_packages', keyArgs] as const
}

export function useGetV4ConfigInfoProductPackages<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
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
        ? getGetV4ConfigInfoProductPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.product_packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoProductPackages<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
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
        ? getGetV4ConfigInfoProductPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.product_packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoProductPackagesCurrentKey(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/product_packages/current', keyArgs] as const
}

export function useGetV4ConfigInfoProductPackagesCurrent<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
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
        ? getGetV4ConfigInfoProductPackagesCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.product_packages.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoProductPackagesCurrent<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
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
        ? getGetV4ConfigInfoProductPackagesCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.config.info.product_packages.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigInfoS3TagsKey(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/s3_tags', keyArgs] as const
}

export function useGetV4ConfigInfoS3Tags<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
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
        ? getGetV4ConfigInfoS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.s3_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigInfoS3Tags<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
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
        ? getGetV4ConfigInfoS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.info.s3_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ConfigSettingsKey(
  args: InferRequestType<typeof client.v4.config.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/settings', keyArgs] as const
}

export function useGetV4ConfigSettings<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
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
        ? getGetV4ConfigSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ConfigSettings<TError = unknown>(
  args: InferRequestType<typeof client.v4.config.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
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
        ? getGetV4ConfigSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.config.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4ConfigSettingsKey() {
  return ['v4', '/v4/config/settings', 'PUT'] as const
}

export function usePutV4ConfigSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.config.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4ConfigSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.config.settings.$put> }) =>
        parseResponse(client.v4.config.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4DownloadsAvatarUserIdUuidKey(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
) {
  return ['v4', '/v4/downloads/avatar/:user_id/:uuid', args] as const
}

export function useGetV4DownloadsAvatarUserIdUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
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
        ? getGetV4DownloadsAvatarUserIdUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.downloads.avatar[':user_id'][':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DownloadsAvatarUserIdUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
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
        ? getGetV4DownloadsAvatarUserIdUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.downloads.avatar[':user_id'][':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4DownloadsZipTokenKey(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
) {
  return ['v4', '/v4/downloads/zip/:token', args] as const
}

export function useGetV4DownloadsZipToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
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
        ? getGetV4DownloadsZipTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.downloads.zip[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DownloadsZipToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
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
        ? getGetV4DownloadsZipTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.downloads.zip[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4DownloadsTokenKey(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/downloads/:token', keyArgs] as const
}

export function useGetV4DownloadsToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
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
        ? getGetV4DownloadsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.downloads[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DownloadsToken<TError = unknown>(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
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
        ? getGetV4DownloadsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.downloads[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadV4DownloadsTokenKey() {
  return ['v4', '/v4/downloads/:token', 'HEAD'] as const
}

export function useHeadV4DownloadsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.downloads)[':token']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV4DownloadsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.downloads)[':token']['$head']> },
      ) => parseResponse(client.v4.downloads[':token'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4EventlogAuditsNodeInfoKey(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/audits/node_info', keyArgs] as const
}

export function useGetV4EventlogAuditsNodeInfo<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
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
        ? getGetV4EventlogAuditsNodeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.audits.node_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EventlogAuditsNodeInfo<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
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
        ? getGetV4EventlogAuditsNodeInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.audits.node_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4EventlogAuditsNodesKey(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/audits/nodes', keyArgs] as const
}

export function useGetV4EventlogAuditsNodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
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
        ? getGetV4EventlogAuditsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.audits.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EventlogAuditsNodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
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
        ? getGetV4EventlogAuditsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.audits.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4EventlogEventsKey(
  args: InferRequestType<typeof client.v4.eventlog.events.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/events', keyArgs] as const
}

export function useGetV4EventlogEvents<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
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
        ? getGetV4EventlogEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EventlogEvents<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
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
        ? getGetV4EventlogEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4EventlogOperationsKey(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/operations', keyArgs] as const
}

export function useGetV4EventlogOperations<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
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
        ? getGetV4EventlogOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4EventlogOperations<TError = unknown>(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
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
        ? getGetV4EventlogOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.eventlog.operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4GroupsKey(args: InferRequestType<typeof client.v4.groups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups', keyArgs] as const
}

export function useGetV4Groups<TError = unknown>(
  args: InferRequestType<typeof client.v4.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Groups<TError = unknown>(
  args: InferRequestType<typeof client.v4.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4GroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4GroupsKey() {
  return ['v4', '/v4/groups', 'POST'] as const
}

export function usePostV4Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4GroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.groups.$post> }) =>
        parseResponse(client.v4.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4GroupsGroupIdKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id', keyArgs] as const
}

export function useGetV4GroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
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
        ? getGetV4GroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4GroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
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
        ? getGetV4GroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4GroupsGroupIdKey() {
  return ['v4', '/v4/groups/:group_id', 'PUT'] as const
}

export function usePutV4GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.groups)[':group_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4GroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.groups)[':group_id']['$put']> },
      ) => parseResponse(client.v4.groups[':group_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4GroupsGroupIdKey() {
  return ['v4', '/v4/groups/:group_id', 'DELETE'] as const
}

export function useDeleteV4GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4GroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.v4.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4GroupsGroupIdLastAdminRoomsKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/last_admin_rooms', keyArgs] as const
}

export function useGetV4GroupsGroupIdLastAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
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
        ? getGetV4GroupsGroupIdLastAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.groups[':group_id'].last_admin_rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4GroupsGroupIdLastAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
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
        ? getGetV4GroupsGroupIdLastAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.groups[':group_id'].last_admin_rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4GroupsGroupIdRolesKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/roles', keyArgs] as const
}

export function useGetV4GroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
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
        ? getGetV4GroupsGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4GroupsGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
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
        ? getGetV4GroupsGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4GroupsGroupIdRoomsKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/rooms', keyArgs] as const
}

export function useGetV4GroupsGroupIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
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
        ? getGetV4GroupsGroupIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4GroupsGroupIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
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
        ? getGetV4GroupsGroupIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4GroupsGroupIdUsersKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/users', keyArgs] as const
}

export function useGetV4GroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
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
        ? getGetV4GroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4GroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
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
        ? getGetV4GroupsGroupIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.groups[':group_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4GroupsGroupIdUsersKey() {
  return ['v4', '/v4/groups/:group_id/users', 'POST'] as const
}

export function usePostV4GroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4GroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']> },
      ) => parseResponse(client.v4.groups[':group_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4GroupsGroupIdUsersKey() {
  return ['v4', '/v4/groups/:group_id/users', 'DELETE'] as const
}

export function useDeleteV4GroupsGroupIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4GroupsGroupIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']> },
      ) => parseResponse(client.v4.groups[':group_id'].users.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4InternalTenantSubscriptionPlanKey(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/internal/tenant/subscription_plan', keyArgs] as const
}

export function useGetV4InternalTenantSubscriptionPlan<TError = unknown>(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
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
        ? getGetV4InternalTenantSubscriptionPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.internal.tenant.subscription_plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4InternalTenantSubscriptionPlan<TError = unknown>(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
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
        ? getGetV4InternalTenantSubscriptionPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.internal.tenant.subscription_plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4InternalTenantSubscriptionPlanKey() {
  return ['v4', '/v4/internal/tenant/subscription_plan', 'PUT'] as const
}

export function usePutV4InternalTenantSubscriptionPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4InternalTenantSubscriptionPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put> },
      ) => parseResponse(client.v4.internal.tenant.subscription_plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesKey(args: InferRequestType<typeof client.v4.nodes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes', keyArgs] as const
}

export function useGetV4Nodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV4Nodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteV4NodesKey() {
  return ['v4', '/v4/nodes', 'DELETE'] as const
}

export function useDeleteV4Nodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.$delete> }) =>
        parseResponse(client.v4.nodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesCommentsCommentIdKey() {
  return ['v4', '/v4/nodes/comments/:comment_id', 'PUT'] as const
}

export function usePutV4NodesCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']> },
      ) => parseResponse(client.v4.nodes.comments[':comment_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesCommentsCommentIdKey() {
  return ['v4', '/v4/nodes/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteV4NodesCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']> },
      ) => parseResponse(client.v4.nodes.comments[':comment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesDeletedNodesKey() {
  return ['v4', '/v4/nodes/deleted_nodes', 'DELETE'] as const
}

export function useDeleteV4NodesDeletedNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesDeletedNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete> },
      ) => parseResponse(client.v4.nodes.deleted_nodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesDeletedNodesActionsRestoreKey() {
  return ['v4', '/v4/nodes/deleted_nodes/actions/restore', 'POST'] as const
}

export function usePostV4NodesDeletedNodesActionsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesDeletedNodesActionsRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post> },
      ) => parseResponse(client.v4.nodes.deleted_nodes.actions.restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesDeletedNodesDeletedNodeIdKey(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/deleted_nodes/:deleted_node_id', keyArgs] as const
}

export function useGetV4NodesDeletedNodesDeletedNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
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
        ? getGetV4NodesDeletedNodesDeletedNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.deleted_nodes[':deleted_node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesDeletedNodesDeletedNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
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
        ? getGetV4NodesDeletedNodesDeletedNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.deleted_nodes[':deleted_node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesFavoritesKey() {
  return ['v4', '/v4/nodes/favorites', 'PUT'] as const
}

export function usePutV4NodesFavorites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.favorites.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.favorites.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFavoritesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.favorites.$put> }) =>
        parseResponse(client.v4.nodes.favorites.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesFilesKey() {
  return ['v4', '/v4/nodes/files', 'PUT'] as const
}

export function usePutV4NodesFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.files.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.files.$put> }) =>
        parseResponse(client.v4.nodes.files.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesFilesKeysKey() {
  return ['v4', '/v4/nodes/files/keys', 'POST'] as const
}

export function usePostV4NodesFilesKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.keys.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.files.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFilesKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.files.keys.$post> }) =>
        parseResponse(client.v4.nodes.files.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesFilesUploadsKey() {
  return ['v4', '/v4/nodes/files/uploads', 'POST'] as const
}

export function usePostV4NodesFilesUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.uploads.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.files.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFilesUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.nodes.files.uploads.$post> },
      ) => parseResponse(client.v4.nodes.files.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesFilesUploadsUploadIdKey(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/uploads/:upload_id', keyArgs] as const
}

export function useGetV4NodesFilesUploadsUploadId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
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
        ? getGetV4NodesFilesUploadsUploadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files.uploads[':upload_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesFilesUploadsUploadId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
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
        ? getGetV4NodesFilesUploadsUploadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files.uploads[':upload_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesFilesUploadsUploadIdKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'PUT'] as const
}

export function usePutV4NodesFilesUploadsUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFilesUploadsUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']> },
      ) => parseResponse(client.v4.nodes.files.uploads[':upload_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesFilesUploadsUploadIdKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'POST'] as const
}

export function usePostV4NodesFilesUploadsUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFilesUploadsUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']> },
      ) => parseResponse(client.v4.nodes.files.uploads[':upload_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesFilesUploadsUploadIdKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'DELETE'] as const
}

export function useDeleteV4NodesFilesUploadsUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesFilesUploadsUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>
        },
      ) => parseResponse(client.v4.nodes.files.uploads[':upload_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesFilesUploadsUploadIdS3Key() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id/s3', 'PUT'] as const
}

export function usePutV4NodesFilesUploadsUploadIdS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFilesUploadsUploadIdS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>
        },
      ) => parseResponse(client.v4.nodes.files.uploads[':upload_id'].s3.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesFilesUploadsUploadIdS3UrlsKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id/s3_urls', 'POST'] as const
}

export function usePostV4NodesFilesUploadsUploadIdS3Urls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFilesUploadsUploadIdS3UrlsKey()
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
            (typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.nodes.files.uploads[':upload_id'].s3_urls.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesFilesVersionsReferenceIdKey(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/versions/:reference_id', keyArgs] as const
}

export function useGetV4NodesFilesVersionsReferenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
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
        ? getGetV4NodesFilesVersionsReferenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files.versions[':reference_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesFilesVersionsReferenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
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
        ? getGetV4NodesFilesVersionsReferenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files.versions[':reference_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesFilesFileIdKey() {
  return ['v4', '/v4/nodes/files/:file_id', 'PUT'] as const
}

export function usePutV4NodesFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']> },
      ) => parseResponse(client.v4.nodes.files[':file_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesFilesFileIdDataRoomFileKeyKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/data_room_file_key', keyArgs] as const
}

export function useGetV4NodesFilesFileIdDataRoomFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
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
        ? getGetV4NodesFilesFileIdDataRoomFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.nodes.files[':file_id'].data_room_file_key.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesFilesFileIdDataRoomFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
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
        ? getGetV4NodesFilesFileIdDataRoomFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.nodes.files[':file_id'].data_room_file_key.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4NodesFilesFileIdDataSpaceFileKeyKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/data_space_file_key', keyArgs] as const
}

export function useGetV4NodesFilesFileIdDataSpaceFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
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
        ? getGetV4NodesFilesFileIdDataSpaceFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.nodes.files[':file_id'].data_space_file_key.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesFilesFileIdDataSpaceFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
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
        ? getGetV4NodesFilesFileIdDataSpaceFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.nodes.files[':file_id'].data_space_file_key.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesFilesFileIdDownloadsKey() {
  return ['v4', '/v4/nodes/files/:file_id/downloads', 'POST'] as const
}

export function usePostV4NodesFilesFileIdDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFilesFileIdDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>
        },
      ) => parseResponse(client.v4.nodes.files[':file_id'].downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesFilesFileIdUserFileKeyKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/user_file_key', keyArgs] as const
}

export function useGetV4NodesFilesFileIdUserFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
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
        ? getGetV4NodesFilesFileIdUserFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files[':file_id'].user_file_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesFilesFileIdUserFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
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
        ? getGetV4NodesFilesFileIdUserFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.files[':file_id'].user_file_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesFoldersKey() {
  return ['v4', '/v4/nodes/folders', 'POST'] as const
}

export function usePostV4NodesFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.folders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.folders.$post> }) =>
        parseResponse(client.v4.nodes.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesFoldersFolderIdKey() {
  return ['v4', '/v4/nodes/folders/:folder_id', 'PUT'] as const
}

export function usePutV4NodesFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']> },
      ) => parseResponse(client.v4.nodes.folders[':folder_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesMissingFileKeysKey(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/missingFileKeys', keyArgs] as const
}

export function useGetV4NodesMissingFileKeys<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
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
        ? getGetV4NodesMissingFileKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.missingFileKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesMissingFileKeys<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
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
        ? getGetV4NodesMissingFileKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.missingFileKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesRoomsKey() {
  return ['v4', '/v4/nodes/rooms', 'POST'] as const
}

export function usePostV4NodesRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.rooms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.rooms.$post> }) =>
        parseResponse(client.v4.nodes.rooms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsPendingKey(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/pending', keyArgs] as const
}

export function useGetV4NodesRoomsPending<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
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
        ? getGetV4NodesRoomsPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsPending<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
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
        ? getGetV4NodesRoomsPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesRoomsPendingKey() {
  return ['v4', '/v4/nodes/rooms/pending', 'PUT'] as const
}

export function usePutV4NodesRoomsPending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.rooms.pending.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsPendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.nodes.rooms.pending.$put> },
      ) => parseResponse(client.v4.nodes.rooms.pending.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdKey() {
  return ['v4', '/v4/nodes/rooms/:room_id', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']> },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdConfigKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/config', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']> },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdEncryptKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/encrypt', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdEncrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdEncryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']> },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].encrypt.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdEventsKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/events', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdGroupsKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/groups', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdGroupsKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/groups', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']> },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].groups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesRoomsRoomIdGroupsKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/groups', 'DELETE'] as const
}

export function useDeleteV4NodesRoomsRoomIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesRoomsRoomIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdGuestUsersKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/guest_users', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdGuestUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdGuestUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].guest_users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdKeypairKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdKeypair<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdKeypair<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesRoomsRoomIdKeypairKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', 'POST'] as const
}

export function usePostV4NodesRoomsRoomIdKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesRoomsRoomIdKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesRoomsRoomIdKeypairKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', 'DELETE'] as const
}

export function useDeleteV4NodesRoomsRoomIdKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesRoomsRoomIdKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdKeypairsKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/keypairs', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdKeypairs<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdKeypairs<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesRoomsRoomIdKeypairsKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypairs', 'POST'] as const
}

export function usePostV4NodesRoomsRoomIdKeypairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesRoomsRoomIdKeypairsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdPoliciesKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/policies', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdPoliciesKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/policies', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].policies.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdS3TagsKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/s3_tags', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdS3Tags<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdS3Tags<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesRoomsRoomIdS3TagsKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/s3_tags', 'POST'] as const
}

export function usePostV4NodesRoomsRoomIdS3Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesRoomsRoomIdS3TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdUsersKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/users', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.rooms[':room_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdUsersKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/users', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']> },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesRoomsRoomIdUsersKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/users', 'DELETE'] as const
}

export function useDeleteV4NodesRoomsRoomIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesRoomsRoomIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].users.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesRoomsRoomIdWebhooksKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/webhooks', keyArgs] as const
}

export function useGetV4NodesRoomsRoomIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesRoomsRoomIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
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
        ? getGetV4NodesRoomsRoomIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NodesRoomsRoomIdWebhooksKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/webhooks', 'PUT'] as const
}

export function usePutV4NodesRoomsRoomIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NodesRoomsRoomIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>
        },
      ) => parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesSearchKey(args: InferRequestType<typeof client.v4.nodes.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/search', keyArgs] as const
}

export function useGetV4NodesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NodesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v4.nodes.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NodesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesZipKey() {
  return ['v4', '/v4/nodes/zip', 'POST'] as const
}

export function usePostV4NodesZip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.zip.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesZipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.nodes.zip.$post> }) =>
        parseResponse(client.v4.nodes.zip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesZipDownloadKey() {
  return ['v4', '/v4/nodes/zip/download', 'POST'] as const
}

export function usePostV4NodesZipDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.download.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.nodes.zip.download.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesZipDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.nodes.zip.download.$post> },
      ) => parseResponse(client.v4.nodes.zip.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesNodeIdKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id', keyArgs] as const
}

export function useGetV4NodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4NodesNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4NodesNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4NodesNodeIdKey() {
  return ['v4', '/v4/nodes/:node_id', 'DELETE'] as const
}

export function useDeleteV4NodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']> },
      ) => parseResponse(client.v4.nodes[':node_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesNodeIdCommentsKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/comments', keyArgs] as const
}

export function useGetV4NodesNodeIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
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
        ? getGetV4NodesNodeIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesNodeIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
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
        ? getGetV4NodesNodeIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesNodeIdCommentsKey() {
  return ['v4', '/v4/nodes/:node_id/comments', 'POST'] as const
}

export function usePostV4NodesNodeIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesNodeIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']> },
      ) => parseResponse(client.v4.nodes[':node_id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesNodeIdCopyToKey() {
  return ['v4', '/v4/nodes/:node_id/copy_to', 'POST'] as const
}

export function usePostV4NodesNodeIdCopyTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesNodeIdCopyToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']> },
      ) => parseResponse(client.v4.nodes[':node_id'].copy_to.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesNodeIdDeletedNodesKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/deleted_nodes', keyArgs] as const
}

export function useGetV4NodesNodeIdDeletedNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
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
        ? getGetV4NodesNodeIdDeletedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesNodeIdDeletedNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
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
        ? getGetV4NodesNodeIdDeletedNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4NodesNodeIdDeletedNodesKey() {
  return ['v4', '/v4/nodes/:node_id/deleted_nodes', 'DELETE'] as const
}

export function useDeleteV4NodesNodeIdDeletedNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesNodeIdDeletedNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>
        },
      ) => parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesNodeIdDeletedNodesVersionsKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/deleted_nodes/versions', keyArgs] as const
}

export function useGetV4NodesNodeIdDeletedNodesVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
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
        ? getGetV4NodesNodeIdDeletedNodesVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes[':node_id'].deleted_nodes.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesNodeIdDeletedNodesVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
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
        ? getGetV4NodesNodeIdDeletedNodesVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.nodes[':node_id'].deleted_nodes.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NodesNodeIdFavoriteKey() {
  return ['v4', '/v4/nodes/:node_id/favorite', 'POST'] as const
}

export function usePostV4NodesNodeIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesNodeIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']> },
      ) => parseResponse(client.v4.nodes[':node_id'].favorite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NodesNodeIdFavoriteKey() {
  return ['v4', '/v4/nodes/:node_id/favorite', 'DELETE'] as const
}

export function useDeleteV4NodesNodeIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NodesNodeIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']> },
      ) => parseResponse(client.v4.nodes[':node_id'].favorite.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NodesNodeIdMoveToKey() {
  return ['v4', '/v4/nodes/:node_id/move_to', 'POST'] as const
}

export function usePostV4NodesNodeIdMoveTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NodesNodeIdMoveToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']> },
      ) => parseResponse(client.v4.nodes[':node_id'].move_to.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NodesNodeIdParentsKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/parents', keyArgs] as const
}

export function useGetV4NodesNodeIdParents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
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
        ? getGetV4NodesNodeIdParentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].parents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NodesNodeIdParents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
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
        ? getGetV4NodesNodeIdParentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.nodes[':node_id'].parents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ProvisioningCustomersKey(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers', keyArgs] as const
}

export function useGetV4ProvisioningCustomers<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
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
        ? getGetV4ProvisioningCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.provisioning.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningCustomers<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
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
        ? getGetV4ProvisioningCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.provisioning.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ProvisioningCustomersKey() {
  return ['v4', '/v4/provisioning/customers', 'POST'] as const
}

export function usePostV4ProvisioningCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.provisioning.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ProvisioningCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.provisioning.customers.$post> },
      ) => parseResponse(client.v4.provisioning.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ProvisioningCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id', keyArgs] as const
}

export function useGetV4ProvisioningCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
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
        ? getGetV4ProvisioningCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
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
        ? getGetV4ProvisioningCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4ProvisioningCustomersCustomerIdKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id', 'PUT'] as const
}

export function usePutV4ProvisioningCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4ProvisioningCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>
        },
      ) => parseResponse(client.v4.provisioning.customers[':customer_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4ProvisioningCustomersCustomerIdKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id', 'DELETE'] as const
}

export function useDeleteV4ProvisioningCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4ProvisioningCustomersCustomerIdKey()
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
            (typeof client.v4.provisioning.customers)[':customer_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v4.provisioning.customers[':customer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ProvisioningCustomersCustomerIdCustomerAttributesKey(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', keyArgs] as const
}

export function useGetV4ProvisioningCustomersCustomerIdCustomerAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
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
        ? getGetV4ProvisioningCustomersCustomerIdCustomerAttributesKey(args)
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
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
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
          client.v4.provisioning.customers[':customer_id'].customerAttributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
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
        ? getGetV4ProvisioningCustomersCustomerIdCustomerAttributesKey(args)
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
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
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
          client.v4.provisioning.customers[':customer_id'].customerAttributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4ProvisioningCustomersCustomerIdCustomerAttributesKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', 'PUT'] as const
}

export function usePutV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4ProvisioningCustomersCustomerIdCustomerAttributesKey()
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
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v4.provisioning.customers[':customer_id'].customerAttributes.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4ProvisioningCustomersCustomerIdCustomerAttributesKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', 'POST'] as const
}

export function usePostV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ProvisioningCustomersCustomerIdCustomerAttributesKey()
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
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.provisioning.customers[':customer_id'].customerAttributes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyKey() {
  return [
    'v4',
    '/v4/provisioning/customers/:customer_id/customerAttributes/:key',
    'DELETE',
  ] as const
}

export function useDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyKey()
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
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.provisioning.customers[':customer_id'].customerAttributes[':key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4ProvisioningCustomersCustomerIdUsersKey(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id/users', keyArgs] as const
}

export function useGetV4ProvisioningCustomersCustomerIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
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
        ? getGetV4ProvisioningCustomersCustomerIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.provisioning.customers[':customer_id'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningCustomersCustomerIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
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
        ? getGetV4ProvisioningCustomersCustomerIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.provisioning.customers[':customer_id'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4ProvisioningWebhooksKey(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks', keyArgs] as const
}

export function useGetV4ProvisioningWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
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
        ? getGetV4ProvisioningWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.provisioning.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
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
        ? getGetV4ProvisioningWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.provisioning.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ProvisioningWebhooksKey() {
  return ['v4', '/v4/provisioning/webhooks', 'POST'] as const
}

export function usePostV4ProvisioningWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.provisioning.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ProvisioningWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.provisioning.webhooks.$post> },
      ) => parseResponse(client.v4.provisioning.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ProvisioningWebhooksEventTypesKey(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks/event_types', keyArgs] as const
}

export function useGetV4ProvisioningWebhooksEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
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
        ? getGetV4ProvisioningWebhooksEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.webhooks.event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningWebhooksEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
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
        ? getGetV4ProvisioningWebhooksEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.webhooks.event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ProvisioningWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', keyArgs] as const
}

export function useGetV4ProvisioningWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV4ProvisioningWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ProvisioningWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV4ProvisioningWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4ProvisioningWebhooksWebhookIdKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', 'PUT'] as const
}

export function usePutV4ProvisioningWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4ProvisioningWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>
        },
      ) => parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4ProvisioningWebhooksWebhookIdKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteV4ProvisioningWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4ProvisioningWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>
        },
      ) =>
        parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4ProvisioningWebhooksWebhookIdResetLifetimeKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id/reset_lifetime', 'POST'] as const
}

export function usePostV4ProvisioningWebhooksWebhookIdResetLifetime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ProvisioningWebhooksWebhookIdResetLifetimeKey()
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
            (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.provisioning.webhooks[':webhook_id'].reset_lifetime.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4PublicSharesDownloadsAccessKeyKey(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/downloads/:access_key', keyArgs] as const
}

export function useGetV4PublicSharesDownloadsAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
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
        ? getGetV4PublicSharesDownloadsAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.public.shares.downloads[':access_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSharesDownloadsAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
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
        ? getGetV4PublicSharesDownloadsAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.public.shares.downloads[':access_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4PublicSharesDownloadsAccessKeyKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key', 'POST'] as const
}

export function usePostV4PublicSharesDownloadsAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PublicSharesDownloadsAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>
        },
      ) =>
        parseResponse(client.v4.public.shares.downloads[':access_key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadV4PublicSharesDownloadsAccessKeyKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key', 'HEAD'] as const
}

export function useHeadV4PublicSharesDownloadsAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV4PublicSharesDownloadsAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>
        },
      ) =>
        parseResponse(client.v4.public.shares.downloads[':access_key'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4PublicSharesDownloadsAccessKeyTokenKey(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/downloads/:access_key/:token', keyArgs] as const
}

export function useGetV4PublicSharesDownloadsAccessKeyToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
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
        ? getGetV4PublicSharesDownloadsAccessKeyTokenKey(args)
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
                (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
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
          client.v4.public.shares.downloads[':access_key'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSharesDownloadsAccessKeyToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
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
        ? getGetV4PublicSharesDownloadsAccessKeyTokenKey(args)
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
                (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
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
          client.v4.public.shares.downloads[':access_key'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadV4PublicSharesDownloadsAccessKeyTokenKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key/:token', 'HEAD'] as const
}

export function useHeadV4PublicSharesDownloadsAccessKeyToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV4PublicSharesDownloadsAccessKeyTokenKey()
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
            (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.downloads[':access_key'][':token'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4PublicSharesUploadsAccessKeyKey(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/uploads/:access_key', keyArgs] as const
}

export function useGetV4PublicSharesUploadsAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
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
        ? getGetV4PublicSharesUploadsAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.public.shares.uploads[':access_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSharesUploadsAccessKey<TError = unknown>(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
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
        ? getGetV4PublicSharesUploadsAccessKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.public.shares.uploads[':access_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4PublicSharesUploadsAccessKeyKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key', 'POST'] as const
}

export function usePostV4PublicSharesUploadsAccessKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PublicSharesUploadsAccessKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>
        },
      ) => parseResponse(client.v4.public.shares.uploads[':access_key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4PublicSharesUploadsAccessKeyUploadIdKey(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
) {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', args] as const
}

export function useGetV4PublicSharesUploadsAccessKeyUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
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
        ? getGetV4PublicSharesUploadsAccessKeyUploadIdKey(args)
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
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
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
          client.v4.public.shares.uploads[':access_key'][':upload_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSharesUploadsAccessKeyUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
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
        ? getGetV4PublicSharesUploadsAccessKeyUploadIdKey(args)
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
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
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
          client.v4.public.shares.uploads[':access_key'][':upload_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'PUT'] as const
}

export function usePutV4PublicSharesUploadsAccessKeyUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4PublicSharesUploadsAccessKeyUploadIdKey()
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
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.uploads[':access_key'][':upload_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'POST'] as const
}

export function usePostV4PublicSharesUploadsAccessKeyUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PublicSharesUploadsAccessKeyUploadIdKey()
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
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.uploads[':access_key'][':upload_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4PublicSharesUploadsAccessKeyUploadIdKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'DELETE'] as const
}

export function useDeleteV4PublicSharesUploadsAccessKeyUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4PublicSharesUploadsAccessKeyUploadIdKey()
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
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.uploads[':access_key'][':upload_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdS3Key() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id/s3', 'PUT'] as const
}

export function usePutV4PublicSharesUploadsAccessKeyUploadIdS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4PublicSharesUploadsAccessKeyUploadIdS3Key()
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
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.uploads[':access_key'][':upload_id'].s3.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id/s3_urls', 'POST'] as const
}

export function usePostV4PublicSharesUploadsAccessKeyUploadIdS3Urls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsKey()
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
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.public.shares.uploads[':access_key'][':upload_id'].s3_urls.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4PublicSoftwareThirdPartyDependenciesKey() {
  return ['v4', '/v4/public/software/third_party_dependencies'] as const
}

export function useGetV4PublicSoftwareThirdPartyDependencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4PublicSoftwareThirdPartyDependenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.public.software.third_party_dependencies.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSoftwareThirdPartyDependencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4PublicSoftwareThirdPartyDependenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.public.software.third_party_dependencies.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4PublicSoftwareVersionKey(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/software/version', keyArgs] as const
}

export function useGetV4PublicSoftwareVersion<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
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
        ? getGetV4PublicSoftwareVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.software.version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSoftwareVersion<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
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
        ? getGetV4PublicSoftwareVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.software.version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PublicSystemInfoKey(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
) {
  return ['v4', '/v4/public/system/info', args] as const
}

export function useGetV4PublicSystemInfo<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
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
        ? getGetV4PublicSystemInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSystemInfo<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
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
        ? getGetV4PublicSystemInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PublicSystemInfoAuthAdKey(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
) {
  return ['v4', '/v4/public/system/info/auth/ad', args] as const
}

export function useGetV4PublicSystemInfoAuthAd<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>
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
        ? getGetV4PublicSystemInfoAuthAdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.auth.ad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSystemInfoAuthAd<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>
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
        ? getGetV4PublicSystemInfoAuthAdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.auth.ad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PublicSystemInfoAuthOpenidKey(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
) {
  return ['v4', '/v4/public/system/info/auth/openid', args] as const
}

export function useGetV4PublicSystemInfoAuthOpenid<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
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
        ? getGetV4PublicSystemInfoAuthOpenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.auth.openid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicSystemInfoAuthOpenid<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
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
        ? getGetV4PublicSystemInfoAuthOpenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.system.info.auth.openid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PublicTimeKey(args: InferRequestType<typeof client.v4.public.time.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/time', keyArgs] as const
}

export function useGetV4PublicTime<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.time.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PublicTimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.time.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PublicTime<TError = unknown>(
  args: InferRequestType<typeof client.v4.public.time.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PublicTimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.public.time.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ResourcesUserNotificationsScopesKey() {
  return ['v4', '/v4/resources/user/notifications/scopes'] as const
}

export function useGetV4ResourcesUserNotificationsScopes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4ResourcesUserNotificationsScopesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.resources.user.notifications.scopes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ResourcesUserNotificationsScopes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4ResourcesUserNotificationsScopesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.resources.user.notifications.scopes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ResourcesUsersUserIdAvatarUuidKey(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
) {
  return ['v4', '/v4/resources/users/:user_id/avatar/:uuid', args] as const
}

export function useGetV4ResourcesUsersUserIdAvatarUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
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
        ? getGetV4ResourcesUsersUserIdAvatarUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.resources.users[':user_id'].avatar[':uuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ResourcesUsersUserIdAvatarUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
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
        ? getGetV4ResourcesUsersUserIdAvatarUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.resources.users[':user_id'].avatar[':uuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4RolesKey(args: InferRequestType<typeof client.v4.roles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles', keyArgs] as const
}

export function useGetV4Roles<TError = unknown>(
  args: InferRequestType<typeof client.v4.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV4Roles<TError = unknown>(
  args: InferRequestType<typeof client.v4.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4RolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV4RolesRoleIdGroupsKey(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles/:role_id/groups', keyArgs] as const
}

export function useGetV4RolesRoleIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
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
        ? getGetV4RolesRoleIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.roles[':role_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4RolesRoleIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
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
        ? getGetV4RolesRoleIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.roles[':role_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4RolesRoleIdGroupsKey() {
  return ['v4', '/v4/roles/:role_id/groups', 'POST'] as const
}

export function usePostV4RolesRoleIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4RolesRoleIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']> },
      ) => parseResponse(client.v4.roles[':role_id'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4RolesRoleIdGroupsKey() {
  return ['v4', '/v4/roles/:role_id/groups', 'DELETE'] as const
}

export function useDeleteV4RolesRoleIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4RolesRoleIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']> },
      ) => parseResponse(client.v4.roles[':role_id'].groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4RolesRoleIdUsersKey(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles/:role_id/users', keyArgs] as const
}

export function useGetV4RolesRoleIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
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
        ? getGetV4RolesRoleIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.roles[':role_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4RolesRoleIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
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
        ? getGetV4RolesRoleIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.roles[':role_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4RolesRoleIdUsersKey() {
  return ['v4', '/v4/roles/:role_id/users', 'POST'] as const
}

export function usePostV4RolesRoleIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4RolesRoleIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']> },
      ) => parseResponse(client.v4.roles[':role_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4RolesRoleIdUsersKey() {
  return ['v4', '/v4/roles/:role_id/users', 'DELETE'] as const
}

export function useDeleteV4RolesRoleIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4RolesRoleIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']> },
      ) => parseResponse(client.v4.roles[':role_id'].users.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsKey(args: InferRequestType<typeof client.v4.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings', keyArgs] as const
}

export function useGetV4Settings<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4SettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Settings<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4SettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SettingsKey() {
  return ['v4', '/v4/settings', 'PUT'] as const
}

export function usePutV4Settings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.settings.$put> }) =>
        parseResponse(client.v4.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsKeypairKey(
  args: InferRequestType<typeof client.v4.settings.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/keypair', keyArgs] as const
}

export function useGetV4SettingsKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>
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
        ? getGetV4SettingsKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>
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
        ? getGetV4SettingsKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SettingsKeypairKey() {
  return ['v4', '/v4/settings/keypair', 'POST'] as const
}

export function usePostV4SettingsKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.keypair.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SettingsKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.settings.keypair.$post> }) =>
        parseResponse(client.v4.settings.keypair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SettingsKeypairKey() {
  return ['v4', '/v4/settings/keypair', 'DELETE'] as const
}

export function useDeleteV4SettingsKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.keypair.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SettingsKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.settings.keypair.$delete> },
      ) => parseResponse(client.v4.settings.keypair.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsKeypairsKey(
  args: InferRequestType<typeof client.v4.settings.keypairs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/keypairs', keyArgs] as const
}

export function useGetV4SettingsKeypairs<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.keypairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>
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
        ? getGetV4SettingsKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsKeypairs<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.keypairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>
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
        ? getGetV4SettingsKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SettingsKeypairsKey() {
  return ['v4', '/v4/settings/keypairs', 'POST'] as const
}

export function usePostV4SettingsKeypairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.keypairs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SettingsKeypairsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.settings.keypairs.$post> },
      ) => parseResponse(client.v4.settings.keypairs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsNotificationsChannelsKey(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/notifications/channels', keyArgs] as const
}

export function useGetV4SettingsNotificationsChannels<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
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
        ? getGetV4SettingsNotificationsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.settings.notifications.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsNotificationsChannels<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
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
        ? getGetV4SettingsNotificationsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.settings.notifications.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SettingsNotificationsChannelsKey() {
  return ['v4', '/v4/settings/notifications/channels', 'PUT'] as const
}

export function usePutV4SettingsNotificationsChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.notifications.channels.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SettingsNotificationsChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.settings.notifications.channels.$put> },
      ) => parseResponse(client.v4.settings.notifications.channels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsWebhooksKey(
  args: InferRequestType<typeof client.v4.settings.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks', keyArgs] as const
}

export function useGetV4SettingsWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>
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
        ? getGetV4SettingsWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>
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
        ? getGetV4SettingsWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SettingsWebhooksKey() {
  return ['v4', '/v4/settings/webhooks', 'POST'] as const
}

export function usePostV4SettingsWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.settings.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SettingsWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.settings.webhooks.$post> },
      ) => parseResponse(client.v4.settings.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SettingsWebhooksEventTypesKey(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks/event_types', keyArgs] as const
}

export function useGetV4SettingsWebhooksEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
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
        ? getGetV4SettingsWebhooksEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.webhooks.event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsWebhooksEventTypes<TError = unknown>(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
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
        ? getGetV4SettingsWebhooksEventTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.settings.webhooks.event_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4SettingsWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks/:webhook_id', keyArgs] as const
}

export function useGetV4SettingsWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV4SettingsWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.settings.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SettingsWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV4SettingsWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.settings.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SettingsWebhooksWebhookIdKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id', 'PUT'] as const
}

export function usePutV4SettingsWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SettingsWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']> },
      ) => parseResponse(client.v4.settings.webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SettingsWebhooksWebhookIdKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteV4SettingsWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SettingsWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>
        },
      ) => parseResponse(client.v4.settings.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SettingsWebhooksWebhookIdResetLifetimeKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id/reset_lifetime', 'POST'] as const
}

export function usePostV4SettingsWebhooksWebhookIdResetLifetime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SettingsWebhooksWebhookIdResetLifetimeKey()
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
            (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.settings.webhooks[':webhook_id'].reset_lifetime.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SharesDownloadsKey(
  args: InferRequestType<typeof client.v4.shares.downloads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads', keyArgs] as const
}

export function useGetV4SharesDownloads<TError = unknown>(
  args: InferRequestType<typeof client.v4.shares.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>
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
        ? getGetV4SharesDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesDownloads<TError = unknown>(
  args: InferRequestType<typeof client.v4.shares.downloads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>
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
        ? getGetV4SharesDownloadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.downloads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SharesDownloadsKey() {
  return ['v4', '/v4/shares/downloads', 'PUT'] as const
}

export function usePutV4SharesDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.downloads.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SharesDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.shares.downloads.$put> }) =>
        parseResponse(client.v4.shares.downloads.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SharesDownloadsKey() {
  return ['v4', '/v4/shares/downloads', 'POST'] as const
}

export function usePostV4SharesDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.downloads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SharesDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.shares.downloads.$post> }) =>
        parseResponse(client.v4.shares.downloads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SharesDownloadsKey() {
  return ['v4', '/v4/shares/downloads', 'DELETE'] as const
}

export function useDeleteV4SharesDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.downloads.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SharesDownloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.shares.downloads.$delete> },
      ) => parseResponse(client.v4.shares.downloads.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SharesDownloadsShareIdKey(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads/:share_id', keyArgs] as const
}

export function useGetV4SharesDownloadsShareId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
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
        ? getGetV4SharesDownloadsShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.downloads[':share_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesDownloadsShareId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
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
        ? getGetV4SharesDownloadsShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.downloads[':share_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SharesDownloadsShareIdKey() {
  return ['v4', '/v4/shares/downloads/:share_id', 'PUT'] as const
}

export function usePutV4SharesDownloadsShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SharesDownloadsShareIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']> },
      ) => parseResponse(client.v4.shares.downloads[':share_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SharesDownloadsShareIdKey() {
  return ['v4', '/v4/shares/downloads/:share_id', 'DELETE'] as const
}

export function useDeleteV4SharesDownloadsShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SharesDownloadsShareIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']> },
      ) => parseResponse(client.v4.shares.downloads[':share_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SharesDownloadsShareIdEmailKey() {
  return ['v4', '/v4/shares/downloads/:share_id/email', 'POST'] as const
}

export function usePostV4SharesDownloadsShareIdEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SharesDownloadsShareIdEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>
        },
      ) => parseResponse(client.v4.shares.downloads[':share_id'].email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SharesDownloadsShareIdQrKey(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads/:share_id/qr', keyArgs] as const
}

export function useGetV4SharesDownloadsShareIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
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
        ? getGetV4SharesDownloadsShareIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.shares.downloads[':share_id'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesDownloadsShareIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
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
        ? getGetV4SharesDownloadsShareIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.shares.downloads[':share_id'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4SharesUploadsKey(
  args: InferRequestType<typeof client.v4.shares.uploads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads', keyArgs] as const
}

export function useGetV4SharesUploads<TError = unknown>(
  args: InferRequestType<typeof client.v4.shares.uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
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
        ? getGetV4SharesUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesUploads<TError = unknown>(
  args: InferRequestType<typeof client.v4.shares.uploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
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
        ? getGetV4SharesUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SharesUploadsKey() {
  return ['v4', '/v4/shares/uploads', 'PUT'] as const
}

export function usePutV4SharesUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.uploads.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SharesUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.shares.uploads.$put> }) =>
        parseResponse(client.v4.shares.uploads.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SharesUploadsKey() {
  return ['v4', '/v4/shares/uploads', 'POST'] as const
}

export function usePostV4SharesUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SharesUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.shares.uploads.$post> }) =>
        parseResponse(client.v4.shares.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SharesUploadsKey() {
  return ['v4', '/v4/shares/uploads', 'DELETE'] as const
}

export function useDeleteV4SharesUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.shares.uploads.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SharesUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.shares.uploads.$delete> }) =>
        parseResponse(client.v4.shares.uploads.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SharesUploadsShareIdKey(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads/:share_id', keyArgs] as const
}

export function useGetV4SharesUploadsShareId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
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
        ? getGetV4SharesUploadsShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads[':share_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesUploadsShareId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
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
        ? getGetV4SharesUploadsShareIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads[':share_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SharesUploadsShareIdKey() {
  return ['v4', '/v4/shares/uploads/:share_id', 'PUT'] as const
}

export function usePutV4SharesUploadsShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SharesUploadsShareIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']> },
      ) => parseResponse(client.v4.shares.uploads[':share_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SharesUploadsShareIdKey() {
  return ['v4', '/v4/shares/uploads/:share_id', 'DELETE'] as const
}

export function useDeleteV4SharesUploadsShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SharesUploadsShareIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']> },
      ) => parseResponse(client.v4.shares.uploads[':share_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SharesUploadsShareIdEmailKey() {
  return ['v4', '/v4/shares/uploads/:share_id/email', 'POST'] as const
}

export function usePostV4SharesUploadsShareIdEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SharesUploadsShareIdEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>
        },
      ) => parseResponse(client.v4.shares.uploads[':share_id'].email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SharesUploadsShareIdQrKey(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads/:share_id/qr', keyArgs] as const
}

export function useGetV4SharesUploadsShareIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
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
        ? getGetV4SharesUploadsShareIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads[':share_id'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SharesUploadsShareIdQr<TError = unknown>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
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
        ? getGetV4SharesUploadsShareIdQrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.shares.uploads[':share_id'].qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SystemConfigActionsTestAdKey() {
  return ['v4', '/v4/system/config/actions/test/ad', 'POST'] as const
}

export function usePostV4SystemConfigActionsTestAd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.actions.test.ad.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.actions.test.ad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigActionsTestAdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.actions.test.ad.$post> },
      ) => parseResponse(client.v4.system.config.actions.test.ad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SystemConfigActionsTestRadiusKey() {
  return ['v4', '/v4/system/config/actions/test/radius', 'POST'] as const
}

export function usePostV4SystemConfigActionsTestRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.actions.test.radius.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.actions.test.radius.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigActionsTestRadiusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v4.system.config.actions.test.radius.$post> },
      ) => parseResponse(client.v4.system.config.actions.test.radius.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigAuthAdsKey(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/ads', keyArgs] as const
}

export function useGetV4SystemConfigAuthAds<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
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
        ? getGetV4SystemConfigAuthAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigAuthAds<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
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
        ? getGetV4SystemConfigAuthAdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.ads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SystemConfigAuthAdsKey() {
  return ['v4', '/v4/system/config/auth/ads', 'POST'] as const
}

export function usePostV4SystemConfigAuthAds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.auth.ads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigAuthAdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.auth.ads.$post> },
      ) => parseResponse(client.v4.system.config.auth.ads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigAuthAdsAdIdKey(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/ads/:ad_id', keyArgs] as const
}

export function useGetV4SystemConfigAuthAdsAdId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
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
        ? getGetV4SystemConfigAuthAdsAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.auth.ads[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigAuthAdsAdId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
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
        ? getGetV4SystemConfigAuthAdsAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.auth.ads[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigAuthAdsAdIdKey() {
  return ['v4', '/v4/system/config/auth/ads/:ad_id', 'PUT'] as const
}

export function usePutV4SystemConfigAuthAdsAdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigAuthAdsAdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']> },
      ) => parseResponse(client.v4.system.config.auth.ads[':ad_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SystemConfigAuthAdsAdIdKey() {
  return ['v4', '/v4/system/config/auth/ads/:ad_id', 'DELETE'] as const
}

export function useDeleteV4SystemConfigAuthAdsAdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SystemConfigAuthAdsAdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>
        },
      ) => parseResponse(client.v4.system.config.auth.ads[':ad_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigAuthOpenidIdpsKey(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/openid/idps', keyArgs] as const
}

export function useGetV4SystemConfigAuthOpenidIdps<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
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
        ? getGetV4SystemConfigAuthOpenidIdpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.openid.idps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigAuthOpenidIdps<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
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
        ? getGetV4SystemConfigAuthOpenidIdpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.openid.idps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SystemConfigAuthOpenidIdpsKey() {
  return ['v4', '/v4/system/config/auth/openid/idps', 'POST'] as const
}

export function usePostV4SystemConfigAuthOpenidIdps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigAuthOpenidIdpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post> },
      ) => parseResponse(client.v4.system.config.auth.openid.idps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigAuthOpenidIdpsIdpIdKey(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', keyArgs] as const
}

export function useGetV4SystemConfigAuthOpenidIdpsIdpId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>
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
        ? getGetV4SystemConfigAuthOpenidIdpsIdpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.system.config.auth.openid.idps[':idp_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigAuthOpenidIdpsIdpId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>
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
        ? getGetV4SystemConfigAuthOpenidIdpsIdpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.system.config.auth.openid.idps[':idp_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigAuthOpenidIdpsIdpIdKey() {
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', 'PUT'] as const
}

export function usePutV4SystemConfigAuthOpenidIdpsIdpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigAuthOpenidIdpsIdpIdKey()
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
            (typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']
          >
        },
      ) =>
        parseResponse(client.v4.system.config.auth.openid.idps[':idp_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SystemConfigAuthOpenidIdpsIdpIdKey() {
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', 'DELETE'] as const
}

export function useDeleteV4SystemConfigAuthOpenidIdpsIdpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SystemConfigAuthOpenidIdpsIdpIdKey()
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
            (typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.system.config.auth.openid.idps[':idp_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigAuthRadiusKey(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/radius', keyArgs] as const
}

export function useGetV4SystemConfigAuthRadius<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
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
        ? getGetV4SystemConfigAuthRadiusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.radius.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigAuthRadius<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
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
        ? getGetV4SystemConfigAuthRadiusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.auth.radius.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigAuthRadiusKey() {
  return ['v4', '/v4/system/config/auth/radius', 'PUT'] as const
}

export function usePutV4SystemConfigAuthRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.auth.radius.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigAuthRadiusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.auth.radius.$put> },
      ) => parseResponse(client.v4.system.config.auth.radius.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SystemConfigAuthRadiusKey() {
  return ['v4', '/v4/system/config/auth/radius', 'POST'] as const
}

export function usePostV4SystemConfigAuthRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.auth.radius.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigAuthRadiusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.auth.radius.$post> },
      ) => parseResponse(client.v4.system.config.auth.radius.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SystemConfigAuthRadiusKey() {
  return ['v4', '/v4/system/config/auth/radius', 'DELETE'] as const
}

export function useDeleteV4SystemConfigAuthRadius<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.auth.radius.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SystemConfigAuthRadiusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.auth.radius.$delete> },
      ) => parseResponse(client.v4.system.config.auth.radius.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigOauthClientsKey(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/oauth/clients', keyArgs] as const
}

export function useGetV4SystemConfigOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>
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
        ? getGetV4SystemConfigOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>
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
        ? getGetV4SystemConfigOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SystemConfigOauthClientsKey() {
  return ['v4', '/v4/system/config/oauth/clients', 'POST'] as const
}

export function usePostV4SystemConfigOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.oauth.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigOauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.oauth.clients.$post> },
      ) => parseResponse(client.v4.system.config.oauth.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigOauthClientsClientIdKey(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/oauth/clients/:client_id', keyArgs] as const
}

export function useGetV4SystemConfigOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>
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
        ? getGetV4SystemConfigOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.system.config.oauth.clients[':client_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>
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
        ? getGetV4SystemConfigOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.system.config.oauth.clients[':client_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigOauthClientsClientIdKey() {
  return ['v4', '/v4/system/config/oauth/clients/:client_id', 'PUT'] as const
}

export function usePutV4SystemConfigOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigOauthClientsClientIdKey()
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
            (typeof client.v4.system.config.oauth.clients)[':client_id']['$put']
          >
        },
      ) =>
        parseResponse(client.v4.system.config.oauth.clients[':client_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4SystemConfigOauthClientsClientIdKey() {
  return ['v4', '/v4/system/config/oauth/clients/:client_id', 'DELETE'] as const
}

export function useDeleteV4SystemConfigOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SystemConfigOauthClientsClientIdKey()
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
            (typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.system.config.oauth.clients[':client_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigPoliciesClassificationsKey(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/classifications', keyArgs] as const
}

export function useGetV4SystemConfigPoliciesClassifications<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
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
        ? getGetV4SystemConfigPoliciesClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigPoliciesClassifications<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
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
        ? getGetV4SystemConfigPoliciesClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigPoliciesClassificationsKey() {
  return ['v4', '/v4/system/config/policies/classifications', 'PUT'] as const
}

export function usePutV4SystemConfigPoliciesClassifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.policies.classifications.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigPoliciesClassificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v4.system.config.policies.classifications.$put> },
      ) => parseResponse(client.v4.system.config.policies.classifications.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigPoliciesGuestUsersKey(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/guest_users', keyArgs] as const
}

export function useGetV4SystemConfigPoliciesGuestUsers<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
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
        ? getGetV4SystemConfigPoliciesGuestUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.guest_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigPoliciesGuestUsers<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
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
        ? getGetV4SystemConfigPoliciesGuestUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.guest_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigPoliciesGuestUsersKey() {
  return ['v4', '/v4/system/config/policies/guest_users', 'PUT'] as const
}

export function usePutV4SystemConfigPoliciesGuestUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.policies.guest_users.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigPoliciesGuestUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v4.system.config.policies.guest_users.$put> },
      ) => parseResponse(client.v4.system.config.policies.guest_users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigPoliciesMfaKey(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/mfa', keyArgs] as const
}

export function useGetV4SystemConfigPoliciesMfa<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>
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
        ? getGetV4SystemConfigPoliciesMfaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.policies.mfa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigPoliciesMfa<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>
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
        ? getGetV4SystemConfigPoliciesMfaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.policies.mfa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigPoliciesMfaKey() {
  return ['v4', '/v4/system/config/policies/mfa', 'PUT'] as const
}

export function usePutV4SystemConfigPoliciesMfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.policies.mfa.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigPoliciesMfaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.policies.mfa.$put> },
      ) => parseResponse(client.v4.system.config.policies.mfa.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigPoliciesPasswordsKey(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/passwords', keyArgs] as const
}

export function useGetV4SystemConfigPoliciesPasswords<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
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
        ? getGetV4SystemConfigPoliciesPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigPoliciesPasswords<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
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
        ? getGetV4SystemConfigPoliciesPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.policies.passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigPoliciesPasswordsKey() {
  return ['v4', '/v4/system/config/policies/passwords', 'PUT'] as const
}

export function usePutV4SystemConfigPoliciesPasswords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.policies.passwords.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigPoliciesPasswordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.policies.passwords.$put> },
      ) => parseResponse(client.v4.system.config.policies.passwords.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SystemConfigPoliciesPasswordsEnforceChangeKey() {
  return ['v4', '/v4/system/config/policies/passwords/enforce_change', 'POST'] as const
}

export function usePostV4SystemConfigPoliciesPasswordsEnforceChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigPoliciesPasswordsEnforceChangeKey()
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
            typeof client.v4.system.config.policies.passwords.enforce_change.$post
          >
        },
      ) =>
        parseResponse(
          client.v4.system.config.policies.passwords.enforce_change.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigPoliciesPasswordsPasswordTypeKey(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/passwords/:password_type', keyArgs] as const
}

export function useGetV4SystemConfigPoliciesPasswordsPasswordType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
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
        ? getGetV4SystemConfigPoliciesPasswordsPasswordTypeKey(args)
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
                (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
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
          client.v4.system.config.policies.passwords[':password_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigPoliciesPasswordsPasswordType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
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
        ? getGetV4SystemConfigPoliciesPasswordsPasswordTypeKey(args)
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
                (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
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
          client.v4.system.config.policies.passwords[':password_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsAuthKey(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/auth', keyArgs] as const
}

export function useGetV4SystemConfigSettingsAuth<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>
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
        ? getGetV4SystemConfigSettingsAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsAuth<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>
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
        ? getGetV4SystemConfigSettingsAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigSettingsAuthKey() {
  return ['v4', '/v4/system/config/settings/auth', 'PUT'] as const
}

export function usePutV4SystemConfigSettingsAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.settings.auth.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigSettingsAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.settings.auth.$put> },
      ) => parseResponse(client.v4.system.config.settings.auth.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsDefaultsKey(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/defaults', keyArgs] as const
}

export function useGetV4SystemConfigSettingsDefaults<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
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
        ? getGetV4SystemConfigSettingsDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsDefaults<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
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
        ? getGetV4SystemConfigSettingsDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.defaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigSettingsDefaultsKey() {
  return ['v4', '/v4/system/config/settings/defaults', 'PUT'] as const
}

export function usePutV4SystemConfigSettingsDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.settings.defaults.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigSettingsDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.settings.defaults.$put> },
      ) => parseResponse(client.v4.system.config.settings.defaults.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsEventlogKey(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/eventlog', keyArgs] as const
}

export function useGetV4SystemConfigSettingsEventlog<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
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
        ? getGetV4SystemConfigSettingsEventlogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.eventlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsEventlog<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
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
        ? getGetV4SystemConfigSettingsEventlogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.eventlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigSettingsEventlogKey() {
  return ['v4', '/v4/system/config/settings/eventlog', 'PUT'] as const
}

export function usePutV4SystemConfigSettingsEventlog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.settings.eventlog.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigSettingsEventlogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.settings.eventlog.$put> },
      ) => parseResponse(client.v4.system.config.settings.eventlog.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsGeneralKey(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/general', keyArgs] as const
}

export function useGetV4SystemConfigSettingsGeneral<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
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
        ? getGetV4SystemConfigSettingsGeneralKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.general.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsGeneral<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
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
        ? getGetV4SystemConfigSettingsGeneralKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.general.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigSettingsGeneralKey() {
  return ['v4', '/v4/system/config/settings/general', 'PUT'] as const
}

export function usePutV4SystemConfigSettingsGeneral<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.general.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.settings.general.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigSettingsGeneralKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.settings.general.$put> },
      ) => parseResponse(client.v4.system.config.settings.general.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsInfrastructureKey(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/infrastructure', keyArgs] as const
}

export function useGetV4SystemConfigSettingsInfrastructure<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
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
        ? getGetV4SystemConfigSettingsInfrastructureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.infrastructure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsInfrastructure<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
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
        ? getGetV4SystemConfigSettingsInfrastructureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.settings.infrastructure.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4SystemConfigSettingsSyslogKey(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/syslog', keyArgs] as const
}

export function useGetV4SystemConfigSettingsSyslog<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
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
        ? getGetV4SystemConfigSettingsSyslogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.syslog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigSettingsSyslog<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
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
        ? getGetV4SystemConfigSettingsSyslogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.settings.syslog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigSettingsSyslogKey() {
  return ['v4', '/v4/system/config/settings/syslog', 'PUT'] as const
}

export function usePutV4SystemConfigSettingsSyslog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.settings.syslog.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigSettingsSyslogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.settings.syslog.$put> },
      ) => parseResponse(client.v4.system.config.settings.syslog.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigStorageS3Key(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3', keyArgs] as const
}

export function useGetV4SystemConfigStorageS3<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
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
        ? getGetV4SystemConfigStorageS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.storage.s3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigStorageS3<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
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
        ? getGetV4SystemConfigStorageS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.storage.s3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4SystemConfigStorageS3Key() {
  return ['v4', '/v4/system/config/storage/s3', 'PUT'] as const
}

export function usePutV4SystemConfigStorageS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.storage.s3.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4SystemConfigStorageS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.storage.s3.$put> },
      ) => parseResponse(client.v4.system.config.storage.s3.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SystemConfigStorageS3Key() {
  return ['v4', '/v4/system/config/storage/s3', 'POST'] as const
}

export function usePostV4SystemConfigStorageS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.storage.s3.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigStorageS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.storage.s3.$post> },
      ) => parseResponse(client.v4.system.config.storage.s3.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigStorageS3TagsKey(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3/tags', keyArgs] as const
}

export function useGetV4SystemConfigStorageS3Tags<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
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
        ? getGetV4SystemConfigStorageS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.storage.s3.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigStorageS3Tags<TError = unknown>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
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
        ? getGetV4SystemConfigStorageS3TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.system.config.storage.s3.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4SystemConfigStorageS3TagsKey() {
  return ['v4', '/v4/system/config/storage/s3/tags', 'POST'] as const
}

export function usePostV4SystemConfigStorageS3Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SystemConfigStorageS3TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post> },
      ) => parseResponse(client.v4.system.config.storage.s3.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4SystemConfigStorageS3TagsIdKey(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3/tags/:id', keyArgs] as const
}

export function useGetV4SystemConfigStorageS3TagsId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
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
        ? getGetV4SystemConfigStorageS3TagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.storage.s3.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4SystemConfigStorageS3TagsId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
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
        ? getGetV4SystemConfigStorageS3TagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.system.config.storage.s3.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4SystemConfigStorageS3TagsIdKey() {
  return ['v4', '/v4/system/config/storage/s3/tags/:id', 'DELETE'] as const
}

export function useDeleteV4SystemConfigStorageS3TagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4SystemConfigStorageS3TagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>
        },
      ) =>
        parseResponse(client.v4.system.config.storage.s3.tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4UploadsTokenKey() {
  return ['v4', '/v4/uploads/:token', 'PUT'] as const
}

export function usePutV4UploadsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.uploads)[':token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UploadsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.uploads)[':token']['$put']> },
      ) => parseResponse(client.v4.uploads[':token'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UploadsTokenKey() {
  return ['v4', '/v4/uploads/:token', 'POST'] as const
}

export function usePostV4UploadsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.uploads)[':token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UploadsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.uploads)[':token']['$post']> },
      ) => parseResponse(client.v4.uploads[':token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UploadsTokenKey() {
  return ['v4', '/v4/uploads/:token', 'DELETE'] as const
}

export function useDeleteV4UploadsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.uploads)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UploadsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.uploads)[':token']['$delete']> },
      ) => parseResponse(client.v4.uploads[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountKey(args: InferRequestType<typeof client.v4.user.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account', keyArgs] as const
}

export function useGetV4UserAccount<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccount<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UserAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserAccountKey() {
  return ['v4', '/v4/user/account', 'PUT'] as const
}

export function usePutV4UserAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.user.account.$put> }) =>
        parseResponse(client.v4.user.account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountAvatarKey(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/avatar', keyArgs] as const
}

export function useGetV4UserAccountAvatar<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
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
        ? getGetV4UserAccountAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountAvatar<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
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
        ? getGetV4UserAccountAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UserAccountAvatarKey() {
  return ['v4', '/v4/user/account/avatar', 'POST'] as const
}

export function usePostV4UserAccountAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.avatar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserAccountAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.avatar.$post> },
      ) => parseResponse(client.v4.user.account.avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserAccountAvatarKey() {
  return ['v4', '/v4/user/account/avatar', 'DELETE'] as const
}

export function useDeleteV4UserAccountAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.avatar.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserAccountAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.avatar.$delete> },
      ) => parseResponse(client.v4.user.account.avatar.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountCustomerKey(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/customer', keyArgs] as const
}

export function useGetV4UserAccountCustomer<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
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
        ? getGetV4UserAccountCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.customer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountCustomer<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
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
        ? getGetV4UserAccountCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.customer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserAccountCustomerKey() {
  return ['v4', '/v4/user/account/customer', 'PUT'] as const
}

export function usePutV4UserAccountCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.customer.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserAccountCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.customer.$put> },
      ) => parseResponse(client.v4.user.account.customer.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountCustomerKeypairKey(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/customer/keypair', keyArgs] as const
}

export function useGetV4UserAccountCustomerKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
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
        ? getGetV4UserAccountCustomerKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.customer.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountCustomerKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
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
        ? getGetV4UserAccountCustomerKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.customer.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4UserAccountKeypairKey(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/keypair', keyArgs] as const
}

export function useGetV4UserAccountKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
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
        ? getGetV4UserAccountKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountKeypair<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
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
        ? getGetV4UserAccountKeypairKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.keypair.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UserAccountKeypairKey() {
  return ['v4', '/v4/user/account/keypair', 'POST'] as const
}

export function usePostV4UserAccountKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.keypair.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserAccountKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.keypair.$post> },
      ) => parseResponse(client.v4.user.account.keypair.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserAccountKeypairKey() {
  return ['v4', '/v4/user/account/keypair', 'DELETE'] as const
}

export function useDeleteV4UserAccountKeypair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.keypair.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserAccountKeypairKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.keypair.$delete> },
      ) => parseResponse(client.v4.user.account.keypair.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountKeypairsKey(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/keypairs', keyArgs] as const
}

export function useGetV4UserAccountKeypairs<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
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
        ? getGetV4UserAccountKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountKeypairs<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
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
        ? getGetV4UserAccountKeypairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.keypairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UserAccountKeypairsKey() {
  return ['v4', '/v4/user/account/keypairs', 'POST'] as const
}

export function usePostV4UserAccountKeypairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.keypairs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserAccountKeypairsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.keypairs.$post> },
      ) => parseResponse(client.v4.user.account.keypairs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountMfaKey(
  args: InferRequestType<typeof client.v4.user.account.mfa.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/mfa', keyArgs] as const
}

export function useGetV4UserAccountMfa<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.mfa.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>
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
        ? getGetV4UserAccountMfaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.mfa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountMfa<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.mfa.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>
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
        ? getGetV4UserAccountMfaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.mfa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4UserAccountMfaKey() {
  return ['v4', '/v4/user/account/mfa', 'DELETE'] as const
}

export function useDeleteV4UserAccountMfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.mfa.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserAccountMfaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.mfa.$delete> },
      ) => parseResponse(client.v4.user.account.mfa.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserAccountMfaTotpKey(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/mfa/totp', keyArgs] as const
}

export function useGetV4UserAccountMfaTotp<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
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
        ? getGetV4UserAccountMfaTotpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.mfa.totp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserAccountMfaTotp<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
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
        ? getGetV4UserAccountMfaTotpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.account.mfa.totp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UserAccountMfaTotpKey() {
  return ['v4', '/v4/user/account/mfa/totp', 'POST'] as const
}

export function usePostV4UserAccountMfaTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.mfa.totp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserAccountMfaTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.mfa.totp.$post> },
      ) => parseResponse(client.v4.user.account.mfa.totp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserAccountMfaTotpIdKey() {
  return ['v4', '/v4/user/account/mfa/totp/:id', 'DELETE'] as const
}

export function useDeleteV4UserAccountMfaTotpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserAccountMfaTotpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']> },
      ) => parseResponse(client.v4.user.account.mfa.totp[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4UserAccountPasswordKey() {
  return ['v4', '/v4/user/account/password', 'PUT'] as const
}

export function usePutV4UserAccountPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.password.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.account.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserAccountPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.account.password.$put> },
      ) => parseResponse(client.v4.user.account.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserLogoutKey() {
  return ['v4', '/v4/user/logout', 'POST'] as const
}

export function usePostV4UserLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.logout.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.user.logout.$post> }) =>
        parseResponse(client.v4.user.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserNotificationsConfigKey(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/notifications/config', keyArgs] as const
}

export function useGetV4UserNotificationsConfig<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
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
        ? getGetV4UserNotificationsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.notifications.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserNotificationsConfig<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
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
        ? getGetV4UserNotificationsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.notifications.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserNotificationsConfigIdKey() {
  return ['v4', '/v4/user/notifications/config/:id', 'PUT'] as const
}

export function usePutV4UserNotificationsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.user.notifications.config)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserNotificationsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']> },
      ) => parseResponse(client.v4.user.notifications.config[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserOauthApprovalsKey(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/oauth/approvals', keyArgs] as const
}

export function useGetV4UserOauthApprovals<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
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
        ? getGetV4UserOauthApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.oauth.approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserOauthApprovals<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
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
        ? getGetV4UserOauthApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.oauth.approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4UserOauthApprovalsClientIdKey() {
  return ['v4', '/v4/user/oauth/approvals/:client_id', 'DELETE'] as const
}

export function useDeleteV4UserOauthApprovalsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserOauthApprovalsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>
        },
      ) => parseResponse(client.v4.user.oauth.approvals[':client_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserOauthAuthorizationsKey(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/oauth/authorizations', keyArgs] as const
}

export function useGetV4UserOauthAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
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
        ? getGetV4UserOauthAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.oauth.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserOauthAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
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
        ? getGetV4UserOauthAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.oauth.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4UserOauthAuthorizationsClientIdKey() {
  return ['v4', '/v4/user/oauth/authorizations/:client_id', 'DELETE'] as const
}

export function useDeleteV4UserOauthAuthorizationsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserOauthAuthorizationsClientIdKey()
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
            (typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.oauth.authorizations[':client_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdKey() {
  return ['v4', '/v4/user/oauth/authorizations/:client_id/:authorization_id', 'DELETE'] as const
}

export function useDeleteV4UserOauthAuthorizationsClientIdAuthorizationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdKey()
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
            (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.oauth.authorizations[':client_id'][':authorization_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserPingKey(args: InferRequestType<typeof client.v4.user.ping.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/ping', keyArgs] as const
}

export function useGetV4UserPing<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.ping.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UserPingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserPing<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.ping.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UserPingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4UserProfileAttributesKey(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/profileAttributes', keyArgs] as const
}

export function useGetV4UserProfileAttributes<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
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
        ? getGetV4UserProfileAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.profileAttributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserProfileAttributes<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
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
        ? getGetV4UserProfileAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.profileAttributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserProfileAttributesKey() {
  return ['v4', '/v4/user/profileAttributes', 'PUT'] as const
}

export function usePutV4UserProfileAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.profileAttributes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserProfileAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.profileAttributes.$put> },
      ) => parseResponse(client.v4.user.profileAttributes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserProfileAttributesKey() {
  return ['v4', '/v4/user/profileAttributes', 'POST'] as const
}

export function usePostV4UserProfileAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.profileAttributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserProfileAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.profileAttributes.$post> },
      ) => parseResponse(client.v4.user.profileAttributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserProfileAttributesKeyKey() {
  return ['v4', '/v4/user/profileAttributes/:key', 'DELETE'] as const
}

export function useDeleteV4UserProfileAttributesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserProfileAttributesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']> },
      ) => parseResponse(client.v4.user.profileAttributes[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserSubscriptionsDownloadSharesKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/download_shares', keyArgs] as const
}

export function useGetV4UserSubscriptionsDownloadShares<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
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
        ? getGetV4UserSubscriptionsDownloadSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.user.subscriptions.download_shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserSubscriptionsDownloadShares<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
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
        ? getGetV4UserSubscriptionsDownloadSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.user.subscriptions.download_shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserSubscriptionsDownloadSharesKey() {
  return ['v4', '/v4/user/subscriptions/download_shares', 'PUT'] as const
}

export function usePutV4UserSubscriptionsDownloadShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserSubscriptionsDownloadSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put> },
      ) => parseResponse(client.v4.user.subscriptions.download_shares.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserSubscriptionsDownloadSharesShareIdKey() {
  return ['v4', '/v4/user/subscriptions/download_shares/:share_id', 'POST'] as const
}

export function usePostV4UserSubscriptionsDownloadSharesShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserSubscriptionsDownloadSharesShareIdKey()
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
            (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.subscriptions.download_shares[':share_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserSubscriptionsDownloadSharesShareIdKey() {
  return ['v4', '/v4/user/subscriptions/download_shares/:share_id', 'DELETE'] as const
}

export function useDeleteV4UserSubscriptionsDownloadSharesShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserSubscriptionsDownloadSharesShareIdKey()
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
            (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.subscriptions.download_shares[':share_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserSubscriptionsNodesKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/nodes', keyArgs] as const
}

export function useGetV4UserSubscriptionsNodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
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
        ? getGetV4UserSubscriptionsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.subscriptions.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserSubscriptionsNodes<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
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
        ? getGetV4UserSubscriptionsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.user.subscriptions.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserSubscriptionsNodesKey() {
  return ['v4', '/v4/user/subscriptions/nodes', 'PUT'] as const
}

export function usePutV4UserSubscriptionsNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.subscriptions.nodes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserSubscriptionsNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.subscriptions.nodes.$put> },
      ) => parseResponse(client.v4.user.subscriptions.nodes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserSubscriptionsNodesNodeIdKey() {
  return ['v4', '/v4/user/subscriptions/nodes/:node_id', 'POST'] as const
}

export function usePostV4UserSubscriptionsNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserSubscriptionsNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>
        },
      ) => parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserSubscriptionsNodesNodeIdKey() {
  return ['v4', '/v4/user/subscriptions/nodes/:node_id', 'DELETE'] as const
}

export function useDeleteV4UserSubscriptionsNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserSubscriptionsNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>
        },
      ) =>
        parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UserSubscriptionsUploadSharesKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/upload_shares', keyArgs] as const
}

export function useGetV4UserSubscriptionsUploadShares<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
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
        ? getGetV4UserSubscriptionsUploadSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.user.subscriptions.upload_shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UserSubscriptionsUploadShares<TError = unknown>(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
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
        ? getGetV4UserSubscriptionsUploadSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.user.subscriptions.upload_shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UserSubscriptionsUploadSharesKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares', 'PUT'] as const
}

export function usePutV4UserSubscriptionsUploadShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UserSubscriptionsUploadSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put> },
      ) => parseResponse(client.v4.user.subscriptions.upload_shares.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserSubscriptionsUploadSharesShareIdKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares/:share_id', 'POST'] as const
}

export function usePostV4UserSubscriptionsUploadSharesShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserSubscriptionsUploadSharesShareIdKey()
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
            (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.subscriptions.upload_shares[':share_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UserSubscriptionsUploadSharesShareIdKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares/:share_id', 'DELETE'] as const
}

export function useDeleteV4UserSubscriptionsUploadSharesShareId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UserSubscriptionsUploadSharesShareIdKey()
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
            (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.user.subscriptions.upload_shares[':share_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4UsersKey(args: InferRequestType<typeof client.v4.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users', keyArgs] as const
}

export function useGetV4Users<TError = unknown>(
  args: InferRequestType<typeof client.v4.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV4Users<TError = unknown>(
  args: InferRequestType<typeof client.v4.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v4.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV4UsersKey() {
  return ['v4', '/v4/users', 'POST'] as const
}

export function usePostV4Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.users.$post> }) =>
        parseResponse(client.v4.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UsersUserIdKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id', keyArgs] as const
}

export function useGetV4UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UsersUserIdKey() {
  return ['v4', '/v4/users/:user_id', 'PUT'] as const
}

export function usePutV4UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.users)[':user_id']['$put']> },
      ) => parseResponse(client.v4.users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UsersUserIdKey() {
  return ['v4', '/v4/users/:user_id', 'DELETE'] as const
}

export function useDeleteV4UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.users)[':user_id']['$delete']> },
      ) => parseResponse(client.v4.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UsersUserIdGroupsKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/groups', keyArgs] as const
}

export function useGetV4UsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
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
        ? getGetV4UsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
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
        ? getGetV4UsersUserIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4UsersUserIdLastAdminRoomsKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/last_admin_rooms', keyArgs] as const
}

export function useGetV4UsersUserIdLastAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
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
        ? getGetV4UsersUserIdLastAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.users[':user_id'].last_admin_rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserIdLastAdminRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
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
        ? getGetV4UsersUserIdLastAdminRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.users[':user_id'].last_admin_rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UsersUserIdMfaEmergencyCodeKey() {
  return ['v4', '/v4/users/:user_id/mfa/emergency_code', 'POST'] as const
}

export function usePostV4UsersUserIdMfaEmergencyCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UsersUserIdMfaEmergencyCodeKey()
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
            (typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']
          >
        },
      ) => parseResponse(client.v4.users[':user_id'].mfa.emergency_code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UsersUserIdRolesKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/roles', keyArgs] as const
}

export function useGetV4UsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
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
        ? getGetV4UsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
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
        ? getGetV4UsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4UsersUserIdRoomsKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/rooms', keyArgs] as const
}

export function useGetV4UsersUserIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
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
        ? getGetV4UsersUserIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserIdRooms<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
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
        ? getGetV4UsersUserIdRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.users[':user_id'].rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4UsersUserIdUserAttributesKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/userAttributes', keyArgs] as const
}

export function useGetV4UsersUserIdUserAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
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
        ? getGetV4UsersUserIdUserAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.users[':user_id'].userAttributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UsersUserIdUserAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
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
        ? getGetV4UsersUserIdUserAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.users[':user_id'].userAttributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4UsersUserIdUserAttributesKey() {
  return ['v4', '/v4/users/:user_id/userAttributes', 'PUT'] as const
}

export function usePutV4UsersUserIdUserAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UsersUserIdUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>
        },
      ) => parseResponse(client.v4.users[':user_id'].userAttributes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UsersUserIdUserAttributesKey() {
  return ['v4', '/v4/users/:user_id/userAttributes', 'POST'] as const
}

export function usePostV4UsersUserIdUserAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UsersUserIdUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>
        },
      ) => parseResponse(client.v4.users[':user_id'].userAttributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4UsersUserIdUserAttributesKeyKey() {
  return ['v4', '/v4/users/:user_id/userAttributes/:key', 'DELETE'] as const
}

export function useDeleteV4UsersUserIdUserAttributesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4UsersUserIdUserAttributesKeyKey()
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
            (typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.users[':user_id'].userAttributes[':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
