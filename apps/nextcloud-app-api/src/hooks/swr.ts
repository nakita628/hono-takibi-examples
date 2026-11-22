import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1LogKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/log', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1Log<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1LogKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.log.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UsersKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/users', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UsersKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UsersKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsAppApiAppsStatusAppIdKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/apps/status/:appId', 'PUT'] as const
}

export function usePutOcsV2PhpAppsAppApiAppsStatusAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsAppApiAppsStatusAppIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.apps.status[':appId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsAppApiExAppStatusKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/ex-app/status', 'PUT'] as const
}

export function usePutOcsV2PhpAppsAppApiExAppStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsAppApiExAppStatusKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiExAppStateKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/ex-app/state', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiExAppState<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
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
        ? getGetOcsV2PhpAppsAppApiExAppStateKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiExAppState<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
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
        ? getGetOcsV2PhpAppsAppApiExAppStateKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsolute<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.info.nextcloud_url.absolute.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsolute<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.info.nextcloud_url.absolute.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1ExAppConfigKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1ExAppConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config['get-values'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppPreference<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1ExAppPreference<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference['get-values'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1NotificationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/notification', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1Notification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1NotificationKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.notification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1OccCommandKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1OccCommand<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1OccCommandKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1OccCommand<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1OccCommandKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1OccCommandKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1OccCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1OccCommandKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1OccCommandKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1OccCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1OccCommandKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1TalkBotKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_bot', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1TalkBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1TalkBotKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1TalkBotKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_bot', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1TalkBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1TalkBotKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_proxy/:appId/:route', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.talk_proxy[':appId'][':route'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v2.ui['files-actions-menu'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiTopMenuKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiTopMenu<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiTopMenuKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiTopMenu<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiTopMenuKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiTopMenuKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiTopMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiTopMenuKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiTopMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiInitialStateKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiInitialState<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiInitialStateKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiInitialState<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiInitialStateKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiInitialStateKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiInitialState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiInitialStateKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiInitialState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiScriptKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiScript<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiScriptKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiScript<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiScriptKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiScriptKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiScriptKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiScriptKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiScriptKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiStyleKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiStyle<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiStyleKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiStyle<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiStyleKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiStyleKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiStyle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiStyleKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiStyleKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiStyle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiStyleKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1UiSettingsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1UiSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiSettingsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1UiSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1UiSettingsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1UiSettingsKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1UiSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1UiSettingsKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', keyArgs] as const
}

export function useGetOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
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
        ? getGetOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
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
          client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsAppApiApiV1SetupCheckKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/setup_check', 'POST'] as const
}

export function usePostOcsV2PhpAppsAppApiApiV1SetupCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsAppApiApiV1SetupCheckKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/setup_check', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsAppApiApiV1SetupCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckKey()
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
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
