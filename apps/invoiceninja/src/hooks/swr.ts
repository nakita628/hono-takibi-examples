import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1LoginKey() {
  return ['api', '/api/v1/login', 'POST'] as const
}

export function usePostApiV1Login<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.login.$post> }) =>
        parseResponse(client.api.v1.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ActivitiesKey(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/activities', keyArgs] as const
}

export function useGetApiV1Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Activities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ActivitiesDownloadEntityActivityIdKey(
  args: InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/activities/download_entity/:activity_id', keyArgs] as const
}

export function useGetApiV1ActivitiesDownloadEntityActivityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
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
        ? getGetApiV1ActivitiesDownloadEntityActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.activities.download_entity[':activity_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ActivitiesDownloadEntityActivityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
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
        ? getGetApiV1ActivitiesDownloadEntityActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.activities.download_entity[':activity_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ActivitiesEntityKey() {
  return ['api', '/api/v1/activities/entity', 'POST'] as const
}

export function usePostApiV1ActivitiesEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.entity.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.activities.entity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ActivitiesEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.activities.entity.$post> },
      ) => parseResponse(client.api.v1.activities.entity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ActivitiesNotesKey() {
  return ['api', '/api/v1/activities/notes', 'POST'] as const
}

export function usePostApiV1ActivitiesNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.notes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.activities.notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ActivitiesNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.activities.notes.$post> },
      ) => parseResponse(client.api.v1.activities.notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PasskeysLoginOptionsKey() {
  return ['api', '/api/v1/passkeys/login/options', 'POST'] as const
}

export function usePostApiV1PasskeysLoginOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.passkeys.login.options.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.passkeys.login.options.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PasskeysLoginOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.passkeys.login.options.$post> },
      ) => parseResponse(client.api.v1.passkeys.login.options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SettingsPasskeysKey(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/settings/passkeys', keyArgs] as const
}

export function useGetApiV1SettingsPasskeys<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsPasskeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.passkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SettingsPasskeys<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsPasskeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.passkeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SettingsPasskeysKey() {
  return ['api', '/api/v1/settings/passkeys', 'POST'] as const
}

export function usePostApiV1SettingsPasskeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.settings.passkeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsPasskeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.settings.passkeys.$post> },
      ) => parseResponse(client.api.v1.settings.passkeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SettingsPasskeysOptionsKey() {
  return ['api', '/api/v1/settings/passkeys/options', 'POST'] as const
}

export function usePostApiV1SettingsPasskeysOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.settings.passkeys.options.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.settings.passkeys.options.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsPasskeysOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.settings.passkeys.options.$post> },
      ) => parseResponse(client.api.v1.settings.passkeys.options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1SettingsPasskeysPasskeyKey() {
  return ['api', '/api/v1/settings/passkeys/:passkey', 'DELETE'] as const
}

export function useDeleteApiV1SettingsPasskeysPasskey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SettingsPasskeysPasskeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>
        },
      ) => parseResponse(client.api.v1.settings.passkeys[':passkey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RefreshKey() {
  return ['api', '/api/v1/refresh', 'POST'] as const
}

export function usePostApiV1Refresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.refresh.$post> }) =>
        parseResponse(client.api.v1.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1YodleeRefreshKey() {
  return ['api', '/api/v1/yodlee/refresh', 'POST'] as const
}

export function usePostApiV1YodleeRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.yodlee.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.yodlee.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1YodleeRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.yodlee.refresh.$post> },
      ) => parseResponse(client.api.v1.yodlee.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankIntegrationsKey(
  args: InferRequestType<typeof client.api.v1.bank_integrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_integrations', keyArgs] as const
}

export function useGetApiV1BankIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BankIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BankIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankIntegrationsKey() {
  return ['api', '/api/v1/bank_integrations', 'POST'] as const
}

export function usePostApiV1BankIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_integrations.$post> },
      ) => parseResponse(client.api.v1.bank_integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankIntegrationsIdKey(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_integrations/:id', keyArgs] as const
}

export function useGetApiV1BankIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
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
        ? getGetApiV1BankIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
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
        ? getGetApiV1BankIntegrationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BankIntegrationsIdKey() {
  return ['api', '/api/v1/bank_integrations/:id', 'PUT'] as const
}

export function usePutApiV1BankIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BankIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']> },
      ) => parseResponse(client.api.v1.bank_integrations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BankIntegrationsIdKey() {
  return ['api', '/api/v1/bank_integrations/:id', 'DELETE'] as const
}

export function useDeleteApiV1BankIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BankIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.bank_integrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankIntegrationsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_integrations/:id/edit', keyArgs] as const
}

export function useGetApiV1BankIntegrationsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
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
        ? getGetApiV1BankIntegrationsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_integrations[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankIntegrationsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
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
        ? getGetApiV1BankIntegrationsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_integrations[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BankIntegrationsCreateKey(
  args: InferRequestType<typeof client.api.v1.bank_integrations.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_integrations/create', keyArgs] as const
}

export function useGetApiV1BankIntegrationsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_integrations.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
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
        ? getGetApiV1BankIntegrationsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankIntegrationsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_integrations.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
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
        ? getGetApiV1BankIntegrationsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_integrations.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankIntegrationsBulkKey() {
  return ['api', '/api/v1/bank_integrations/bulk', 'POST'] as const
}

export function usePostApiV1BankIntegrationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankIntegrationsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post> },
      ) => parseResponse(client.api.v1.bank_integrations.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BankIntegrationsRefreshAccountsKey() {
  return ['api', '/api/v1/bank_integrations/refresh_accounts', 'POST'] as const
}

export function usePostApiV1BankIntegrationsRefreshAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankIntegrationsRefreshAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post> },
      ) =>
        parseResponse(client.api.v1.bank_integrations.refresh_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BankIntegrationsRemoveAccountAccountIdKey() {
  return ['api', '/api/v1/bank_integrations/remove_account/account_id', 'POST'] as const
}

export function usePostApiV1BankIntegrationsRemoveAccountAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankIntegrationsRemoveAccountAccountIdKey()
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
            typeof client.api.v1.bank_integrations.remove_account.account_id.$post
          >
        },
      ) =>
        parseResponse(
          client.api.v1.bank_integrations.remove_account.account_id.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BankIntegrationsGetTransactionsAccountIdKey() {
  return ['api', '/api/v1/bank_integrations/get_transactions/account_id', 'POST'] as const
}

export function usePostApiV1BankIntegrationsGetTransactionsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.bank_integrations.get_transactions.account_id.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_integrations.get_transactions.account_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankIntegrationsGetTransactionsAccountIdKey()
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
            typeof client.api.v1.bank_integrations.get_transactions.account_id.$post
          >
        },
      ) =>
        parseResponse(
          client.api.v1.bank_integrations.get_transactions.account_id.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionsKey(
  args: InferRequestType<typeof client.api.v1.bank_transactions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transactions', keyArgs] as const
}

export function useGetApiV1BankTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BankTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BankTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankTransactionsKey() {
  return ['api', '/api/v1/bank_transactions', 'POST'] as const
}

export function usePostApiV1BankTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_transactions.$post> },
      ) => parseResponse(client.api.v1.bank_transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionsIdKey(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transactions/:id', keyArgs] as const
}

export function useGetApiV1BankTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
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
        ? getGetApiV1BankTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
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
        ? getGetApiV1BankTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BankTransactionsIdKey() {
  return ['api', '/api/v1/bank_transactions/:id', 'PUT'] as const
}

export function usePutApiV1BankTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BankTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']> },
      ) => parseResponse(client.api.v1.bank_transactions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BankTransactionsIdKey() {
  return ['api', '/api/v1/bank_transactions/:id', 'DELETE'] as const
}

export function useDeleteApiV1BankTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BankTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.bank_transactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transactions/:id/edit', keyArgs] as const
}

export function useGetApiV1BankTransactionsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
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
        ? getGetApiV1BankTransactionsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transactions[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
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
        ? getGetApiV1BankTransactionsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transactions[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BankTransactionsCreateKey(
  args: InferRequestType<typeof client.api.v1.bank_transactions.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transactions/create', keyArgs] as const
}

export function useGetApiV1BankTransactionsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transactions.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
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
        ? getGetApiV1BankTransactionsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transactions.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
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
        ? getGetApiV1BankTransactionsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transactions.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankTransactionsBulkKey() {
  return ['api', '/api/v1/bank_transactions/bulk', 'POST'] as const
}

export function usePostApiV1BankTransactionsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankTransactionsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post> },
      ) => parseResponse(client.api.v1.bank_transactions.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BankTransactionsMatchKey() {
  return ['api', '/api/v1/bank_transactions/match', 'POST'] as const
}

export function usePostApiV1BankTransactionsMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_transactions.match.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_transactions.match.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankTransactionsMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_transactions.match.$post> },
      ) => parseResponse(client.api.v1.bank_transactions.match.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionRulesKey(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transaction_rules', keyArgs] as const
}

export function useGetApiV1BankTransactionRules<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
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
        ? getGetApiV1BankTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transaction_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionRules<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
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
        ? getGetApiV1BankTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.bank_transaction_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankTransactionRulesKey() {
  return ['api', '/api/v1/bank_transaction_rules', 'POST'] as const
}

export function usePostApiV1BankTransactionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_transaction_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankTransactionRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_transaction_rules.$post> },
      ) => parseResponse(client.api.v1.bank_transaction_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionRulesIdKey(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transaction_rules/:id', keyArgs] as const
}

export function useGetApiV1BankTransactionRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
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
        ? getGetApiV1BankTransactionRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionRulesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
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
        ? getGetApiV1BankTransactionRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BankTransactionRulesIdKey() {
  return ['api', '/api/v1/bank_transaction_rules/:id', 'PUT'] as const
}

export function usePutApiV1BankTransactionRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BankTransactionRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']> },
      ) => parseResponse(client.api.v1.bank_transaction_rules[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BankTransactionRulesIdKey() {
  return ['api', '/api/v1/bank_transaction_rules/:id', 'DELETE'] as const
}

export function useDeleteApiV1BankTransactionRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BankTransactionRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>
        },
      ) => parseResponse(client.api.v1.bank_transaction_rules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BankTransactionRulesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transaction_rules/:id/edit', keyArgs] as const
}

export function useGetApiV1BankTransactionRulesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
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
        ? getGetApiV1BankTransactionRulesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionRulesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
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
        ? getGetApiV1BankTransactionRulesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BankTransactionRulesCreateKey(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/bank_transaction_rules/create', keyArgs] as const
}

export function useGetApiV1BankTransactionRulesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
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
        ? getGetApiV1BankTransactionRulesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BankTransactionRulesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
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
        ? getGetApiV1BankTransactionRulesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.bank_transaction_rules.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BankTransactionRulesBulkKey() {
  return ['api', '/api/v1/bank_transaction_rules/bulk', 'POST'] as const
}

export function usePostApiV1BankTransactionRulesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.bulk.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BankTransactionRulesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post> },
      ) => parseResponse(client.api.v1.bank_transaction_rules.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChartsTotalsKey() {
  return ['api', '/api/v1/charts/totals', 'POST'] as const
}

export function usePostApiV1ChartsTotals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.charts.totals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChartsTotalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.charts.totals.$post> },
      ) => parseResponse(client.api.v1.charts.totals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChartsTotalsV2Key() {
  return ['api', '/api/v1/charts/totals_v2', 'POST'] as const
}

export function usePostApiV1ChartsTotalsV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals_v2.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.charts.totals_v2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChartsTotalsV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.charts.totals_v2.$post> },
      ) => parseResponse(client.api.v1.charts.totals_v2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChartsChartSummaryV2Key() {
  return ['api', '/api/v1/charts/chart_summary_v2', 'POST'] as const
}

export function usePostApiV1ChartsChartSummaryV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.charts.chart_summary_v2.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChartsChartSummaryV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post> },
      ) => parseResponse(client.api.v1.charts.chart_summary_v2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ChartsCalculatedFieldsKey() {
  return ['api', '/api/v1/charts/calculated_fields', 'POST'] as const
}

export function usePostApiV1ChartsCalculatedFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.charts.calculated_fields.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.charts.calculated_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ChartsCalculatedFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.charts.calculated_fields.$post> },
      ) => parseResponse(client.api.v1.charts.calculated_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientGatewayTokensKey(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/client_gateway_tokens', keyArgs] as const
}

export function useGetApiV1ClientGatewayTokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientGatewayTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.client_gateway_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientGatewayTokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientGatewayTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.client_gateway_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ClientGatewayTokensKey() {
  return ['api', '/api/v1/client_gateway_tokens', 'POST'] as const
}

export function usePostApiV1ClientGatewayTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.client_gateway_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientGatewayTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.client_gateway_tokens.$post> },
      ) => parseResponse(client.api.v1.client_gateway_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientGatewayTokensIdKey(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/client_gateway_tokens/:id', keyArgs] as const
}

export function useGetApiV1ClientGatewayTokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
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
        ? getGetApiV1ClientGatewayTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientGatewayTokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
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
        ? getGetApiV1ClientGatewayTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ClientGatewayTokensIdKey() {
  return ['api', '/api/v1/client_gateway_tokens/:id', 'PUT'] as const
}

export function usePutApiV1ClientGatewayTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ClientGatewayTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']> },
      ) => parseResponse(client.api.v1.client_gateway_tokens[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ClientGatewayTokensIdKey() {
  return ['api', '/api/v1/client_gateway_tokens/:id', 'DELETE'] as const
}

export function useDeleteApiV1ClientGatewayTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ClientGatewayTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>
        },
      ) => parseResponse(client.api.v1.client_gateway_tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientGatewayTokensIdEditKey(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/client_gateway_tokens/:id/edit', keyArgs] as const
}

export function useGetApiV1ClientGatewayTokensIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
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
        ? getGetApiV1ClientGatewayTokensIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientGatewayTokensIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
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
        ? getGetApiV1ClientGatewayTokensIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ClientGatewayTokensCreateKey(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/client_gateway_tokens/create', keyArgs] as const
}

export function useGetApiV1ClientGatewayTokensCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
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
        ? getGetApiV1ClientGatewayTokensCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientGatewayTokensCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
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
        ? getGetApiV1ClientGatewayTokensCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.client_gateway_tokens.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CompaniesKey(
  args: InferRequestType<typeof client.api.v1.companies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/companies', keyArgs] as const
}

export function useGetApiV1Companies<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Companies<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CompaniesKey() {
  return ['api', '/api/v1/companies', 'POST'] as const
}

export function usePostApiV1Companies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.companies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.companies.$post> }) =>
        parseResponse(client.api.v1.companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompaniesCreateKey(
  args: InferRequestType<typeof client.api.v1.companies.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/companies/create', keyArgs] as const
}

export function useGetApiV1CompaniesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.companies.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompaniesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompaniesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.companies.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompaniesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CompaniesIdKey(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/companies/:id', keyArgs] as const
}

export function useGetApiV1CompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompaniesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompaniesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CompaniesIdKey() {
  return ['api', '/api/v1/companies/:id', 'PUT'] as const
}

export function usePutApiV1CompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.companies)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.companies)[':id']['$put']> },
      ) => parseResponse(client.api.v1.companies[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1CompaniesIdKey() {
  return ['api', '/api/v1/companies/:id', 'DELETE'] as const
}

export function useDeleteApiV1CompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.companies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompaniesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/companies/:id/edit', keyArgs] as const
}

export function useGetApiV1CompaniesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
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
        ? getGetApiV1CompaniesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompaniesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
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
        ? getGetApiV1CompaniesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.companies[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CompaniesIdUploadKey() {
  return ['api', '/api/v1/companies/:id/upload', 'POST'] as const
}

export function usePostApiV1CompaniesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompaniesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.companies[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1CompaniesCompanyDefaultKey() {
  return ['api', '/api/v1/companies/:company/default', 'POST'] as const
}

export function usePostApiV1CompaniesCompanyDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':company']['default']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompaniesCompanyDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>
        },
      ) => parseResponse(client.api.v1.companies[':company'].default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1CompaniesCurrentKey() {
  return ['api', '/api/v1/companies/current', 'POST'] as const
}

export function usePostApiV1CompaniesCurrent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.current.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.companies.current.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompaniesCurrentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.companies.current.$post> },
      ) => parseResponse(client.api.v1.companies.current.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompanyGatewaysKey(
  args: InferRequestType<typeof client.api.v1.company_gateways.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/company_gateways', keyArgs] as const
}

export function useGetApiV1CompanyGateways<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompanyGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompanyGateways<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompanyGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CompanyGatewaysKey() {
  return ['api', '/api/v1/company_gateways', 'POST'] as const
}

export function usePostApiV1CompanyGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.company_gateways.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompanyGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.company_gateways.$post> },
      ) => parseResponse(client.api.v1.company_gateways.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompanyGatewaysCreateKey(
  args: InferRequestType<typeof client.api.v1.company_gateways.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/company_gateways/create', keyArgs] as const
}

export function useGetApiV1CompanyGatewaysCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_gateways.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
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
        ? getGetApiV1CompanyGatewaysCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompanyGatewaysCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_gateways.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
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
        ? getGetApiV1CompanyGatewaysCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CompanyGatewaysIdKey(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/company_gateways/:id', keyArgs] as const
}

export function useGetApiV1CompanyGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
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
        ? getGetApiV1CompanyGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompanyGatewaysId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
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
        ? getGetApiV1CompanyGatewaysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_gateways[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CompanyGatewaysIdKey() {
  return ['api', '/api/v1/company_gateways/:id', 'PUT'] as const
}

export function usePutApiV1CompanyGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CompanyGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']> },
      ) => parseResponse(client.api.v1.company_gateways[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1CompanyGatewaysIdKey() {
  return ['api', '/api/v1/company_gateways/:id', 'DELETE'] as const
}

export function useDeleteApiV1CompanyGatewaysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CompanyGatewaysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.company_gateways[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompanyGatewaysIdEditKey(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/company_gateways/:id/edit', keyArgs] as const
}

export function useGetApiV1CompanyGatewaysIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
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
        ? getGetApiV1CompanyGatewaysIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.company_gateways[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompanyGatewaysIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
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
        ? getGetApiV1CompanyGatewaysIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.company_gateways[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CompanyGatewaysBulkKey() {
  return ['api', '/api/v1/company_gateways/bulk', 'POST'] as const
}

export function usePostApiV1CompanyGatewaysBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.company_gateways.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompanyGatewaysBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.company_gateways.bulk.$post> },
      ) => parseResponse(client.api.v1.company_gateways.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CompanyLedgerKey(
  args: InferRequestType<typeof client.api.v1.company_ledger.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/company_ledger', keyArgs] as const
}

export function useGetApiV1CompanyLedger<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_ledger.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompanyLedgerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_ledger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CompanyLedger<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.company_ledger.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CompanyLedgerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.company_ledger.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CompanyUsersKey() {
  return ['api', '/api/v1/company_users', 'POST'] as const
}

export function usePostApiV1CompanyUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.company_users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CompanyUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.company_users.$post> },
      ) => parseResponse(client.api.v1.company_users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ConnectedAccountKey() {
  return ['api', '/api/v1/connected_account', 'POST'] as const
}

export function usePostApiV1ConnectedAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.connected_account.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.connected_account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ConnectedAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.connected_account.$post> },
      ) => parseResponse(client.api.v1.connected_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DesignsKey(args: InferRequestType<typeof client.api.v1.designs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/designs', keyArgs] as const
}

export function useGetApiV1Designs<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Designs<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.designs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DesignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DesignsKey() {
  return ['api', '/api/v1/designs', 'POST'] as const
}

export function usePostApiV1Designs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.designs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DesignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.designs.$post> }) =>
        parseResponse(client.api.v1.designs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DesignsIdKey(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/designs/:id', keyArgs] as const
}

export function useGetApiV1DesignsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DesignsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DesignsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DesignsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1DesignsIdKey() {
  return ['api', '/api/v1/designs/:id', 'PUT'] as const
}

export function usePutApiV1DesignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.designs)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1DesignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.designs)[':id']['$put']> },
      ) => parseResponse(client.api.v1.designs[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1DesignsIdKey() {
  return ['api', '/api/v1/designs/:id', 'DELETE'] as const
}

export function useDeleteApiV1DesignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1DesignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.designs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DesignsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/designs/:id/edit', keyArgs] as const
}

export function useGetApiV1DesignsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
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
        ? getGetApiV1DesignsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DesignsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
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
        ? getGetApiV1DesignsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DesignsCreateKey(
  args: InferRequestType<typeof client.api.v1.designs.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/designs/create', keyArgs] as const
}

export function useGetApiV1DesignsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.designs.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1DesignsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DesignsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.designs.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1DesignsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.designs.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DesignsBulkKey() {
  return ['api', '/api/v1/designs/bulk', 'POST'] as const
}

export function usePostApiV1DesignsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.designs.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DesignsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.designs.bulk.$post> }) =>
        parseResponse(client.api.v1.designs.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1DocumentsKey(
  args: InferRequestType<typeof client.api.v1.documents.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/documents', keyArgs] as const
}

export function useGetApiV1Documents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Documents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EmailsKey() {
  return ['api', '/api/v1/emails', 'POST'] as const
}

export function usePostApiV1Emails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.emails.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.emails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.emails.$post> }) =>
        parseResponse(client.api.v1.emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpenseCategoriesKey(
  args: InferRequestType<typeof client.api.v1.expense_categories.$get>,
) {
  return ['api', '/api/v1/expense_categories', args] as const
}

export function useGetApiV1ExpenseCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expense_categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpenseCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpenseCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expense_categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpenseCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ExpenseCategoriesKey() {
  return ['api', '/api/v1/expense_categories', 'POST'] as const
}

export function usePostApiV1ExpenseCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.expense_categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExpenseCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.expense_categories.$post> },
      ) => parseResponse(client.api.v1.expense_categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpenseCategoriesCreateKey(
  args: InferRequestType<typeof client.api.v1.expense_categories.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expense_categories/create', keyArgs] as const
}

export function useGetApiV1ExpenseCategoriesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expense_categories.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
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
        ? getGetApiV1ExpenseCategoriesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpenseCategoriesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expense_categories.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
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
        ? getGetApiV1ExpenseCategoriesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ExpenseCategoriesIdKey(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expense_categories/:id', keyArgs] as const
}

export function useGetApiV1ExpenseCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
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
        ? getGetApiV1ExpenseCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpenseCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
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
        ? getGetApiV1ExpenseCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expense_categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ExpenseCategoriesIdKey() {
  return ['api', '/api/v1/expense_categories/:id', 'PUT'] as const
}

export function usePutApiV1ExpenseCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ExpenseCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']> },
      ) => parseResponse(client.api.v1.expense_categories[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ExpenseCategoriesIdKey() {
  return ['api', '/api/v1/expense_categories/:id', 'DELETE'] as const
}

export function useDeleteApiV1ExpenseCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ExpenseCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.expense_categories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpenseCategoriesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expense_categories/:id/edit', keyArgs] as const
}

export function useGetApiV1ExpenseCategoriesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
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
        ? getGetApiV1ExpenseCategoriesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.expense_categories[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpenseCategoriesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
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
        ? getGetApiV1ExpenseCategoriesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.expense_categories[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ExpenseCategoriesBulkKey() {
  return ['api', '/api/v1/expense_categories/bulk', 'POST'] as const
}

export function usePostApiV1ExpenseCategoriesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.expense_categories.bulk.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.expense_categories.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExpenseCategoriesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.expense_categories.bulk.$post> },
      ) => parseResponse(client.api.v1.expense_categories.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpensesKey(args: InferRequestType<typeof client.api.v1.expenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expenses', keyArgs] as const
}

export function useGetApiV1Expenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ExpensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Expenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ExpensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ExpensesKey() {
  return ['api', '/api/v1/expenses', 'POST'] as const
}

export function usePostApiV1Expenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.expenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExpensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.expenses.$post> }) =>
        parseResponse(client.api.v1.expenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpensesIdKey(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expenses/:id', keyArgs] as const
}

export function useGetApiV1ExpensesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpensesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpensesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpensesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ExpensesIdKey() {
  return ['api', '/api/v1/expenses/:id', 'PUT'] as const
}

export function usePutApiV1ExpensesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ExpensesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']> },
      ) => parseResponse(client.api.v1.expenses[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ExpensesIdKey() {
  return ['api', '/api/v1/expenses/:id', 'DELETE'] as const
}

export function useDeleteApiV1ExpensesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ExpensesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.expenses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ExpensesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expenses/:id/edit', keyArgs] as const
}

export function useGetApiV1ExpensesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
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
        ? getGetApiV1ExpensesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpensesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
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
        ? getGetApiV1ExpensesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ExpensesCreateKey(
  args: InferRequestType<typeof client.api.v1.expenses.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/expenses/create', keyArgs] as const
}

export function useGetApiV1ExpensesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expenses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpensesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ExpensesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.expenses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ExpensesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.expenses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ExpensesBulkKey() {
  return ['api', '/api/v1/expenses/bulk', 'POST'] as const
}

export function usePostApiV1ExpensesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.expenses.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExpensesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.expenses.bulk.$post> },
      ) => parseResponse(client.api.v1.expenses.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ExpensesIdUploadKey() {
  return ['api', '/api/v1/expenses/:id/upload', 'POST'] as const
}

export function usePostApiV1ExpensesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExpensesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.expenses[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ExportKey() {
  return ['api', '/api/v1/export', 'POST'] as const
}

export function usePostApiV1Export<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.export.$post> }) =>
        parseResponse(client.api.v1.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupSettingsKey(
  args: InferRequestType<typeof client.api.v1.group_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/group_settings', keyArgs] as const
}

export function useGetApiV1GroupSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.group_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GroupSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.group_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GroupSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupSettingsKey() {
  return ['api', '/api/v1/group_settings', 'POST'] as const
}

export function usePostApiV1GroupSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.group_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.group_settings.$post> },
      ) => parseResponse(client.api.v1.group_settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupSettingsCreateKey(
  args: InferRequestType<typeof client.api.v1.group_settings.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/group_settings/create', keyArgs] as const
}

export function useGetApiV1GroupSettingsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.group_settings.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GroupSettingsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupSettingsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.group_settings.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GroupSettingsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GroupSettingsIdKey(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/group_settings/:id', keyArgs] as const
}

export function useGetApiV1GroupSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
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
        ? getGetApiV1GroupSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupSettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
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
        ? getGetApiV1GroupSettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1GroupSettingsIdKey() {
  return ['api', '/api/v1/group_settings/:id', 'PUT'] as const
}

export function usePutApiV1GroupSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1GroupSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']> },
      ) => parseResponse(client.api.v1.group_settings[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1GroupSettingsIdKey() {
  return ['api', '/api/v1/group_settings/:id', 'DELETE'] as const
}

export function useDeleteApiV1GroupSettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GroupSettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.group_settings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GroupSettingsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/group_settings/:id/edit', keyArgs] as const
}

export function useGetApiV1GroupSettingsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
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
        ? getGetApiV1GroupSettingsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GroupSettingsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
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
        ? getGetApiV1GroupSettingsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.group_settings[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GroupSettingsBulkKey() {
  return ['api', '/api/v1/group_settings/bulk', 'POST'] as const
}

export function usePostApiV1GroupSettingsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.group_settings.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupSettingsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.group_settings.bulk.$post> },
      ) => parseResponse(client.api.v1.group_settings.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GroupSettingsIdUploadKey() {
  return ['api', '/api/v1/group_settings/:id/upload', 'POST'] as const
}

export function usePostApiV1GroupSettingsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GroupSettingsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>
        },
      ) => parseResponse(client.api.v1.group_settings[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PreimportKey() {
  return ['api', '/api/v1/preimport', 'POST'] as const
}

export function usePostApiV1Preimport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preimport.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.preimport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PreimportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.preimport.$post> }) =>
        parseResponse(client.api.v1.preimport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ImportKey() {
  return ['api', '/api/v1/import', 'POST'] as const
}

export function usePostApiV1Import<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.import.$post> }) =>
        parseResponse(client.api.v1.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ImportJsonKey() {
  return ['api', '/api/v1/import_json', 'POST'] as const
}

export function usePostApiV1ImportJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import_json.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.import_json.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.import_json.$post> }) =>
        parseResponse(client.api.v1.import_json.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppleConfirmPurchaseKey() {
  return ['api', '/api/v1/apple/confirm_purchase', 'POST'] as const
}

export function usePostApiV1AppleConfirmPurchase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apple.confirm_purchase.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppleConfirmPurchaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post> },
      ) => parseResponse(client.api.v1.apple.confirm_purchase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppleProcessWebhookKey() {
  return ['api', '/api/v1/apple/process_webhook', 'POST'] as const
}

export function usePostApiV1AppleProcessWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apple.process_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.apple.process_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppleProcessWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.apple.process_webhook.$post> },
      ) => parseResponse(client.api.v1.apple.process_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClaimLicenseKey(
  args: InferRequestType<typeof client.api.v1.claim_license.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/claim_license', keyArgs] as const
}

export function useGetApiV1ClaimLicense<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.claim_license.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClaimLicenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.claim_license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClaimLicense<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.claim_license.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClaimLicenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.claim_license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LogoutKey() {
  return ['api', '/api/v1/logout', 'POST'] as const
}

export function usePostApiV1Logout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.logout.$post> }) =>
        parseResponse(client.api.v1.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1MigrationPurgeCompanyKey() {
  return ['api', '/api/v1/migration/purge/:company', 'POST'] as const
}

export function usePostApiV1MigrationPurgeCompany<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.migration.purge)[':company']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MigrationPurgeCompanyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']> },
      ) => parseResponse(client.api.v1.migration.purge[':company'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1MigrationPurgeSaveSettingsCompanyKey() {
  return ['api', '/api/v1/migration/purge_save_settings/:company', 'POST'] as const
}

export function usePostApiV1MigrationPurgeSaveSettingsCompany<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.migration.purge_save_settings)[':company']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.migration.purge_save_settings)[':company']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MigrationPurgeSaveSettingsCompanyKey()
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
            (typeof client.api.v1.migration.purge_save_settings)[':company']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.migration.purge_save_settings[':company'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1MigrationStartKey() {
  return ['api', '/api/v1/migration/start', 'POST'] as const
}

export function usePostApiV1MigrationStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.migration.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.migration.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MigrationStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.migration.start.$post> },
      ) => parseResponse(client.api.v1.migration.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1OneTimeTokenKey() {
  return ['api', '/api/v1/one_time_token', 'POST'] as const
}

export function usePostApiV1OneTimeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.one_time_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.one_time_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OneTimeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.one_time_token.$post> },
      ) => parseResponse(client.api.v1.one_time_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentTermsKey(
  args: InferRequestType<typeof client.api.v1.payment_terms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payment_terms', keyArgs] as const
}

export function useGetApiV1PaymentTerms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payment_terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentTermsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentTerms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payment_terms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentTermsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PaymentTermsKey() {
  return ['api', '/api/v1/payment_terms', 'POST'] as const
}

export function usePostApiV1PaymentTerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.payment_terms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentTermsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.payment_terms.$post> },
      ) => parseResponse(client.api.v1.payment_terms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentTermsCreateKey(
  args: InferRequestType<typeof client.api.v1.payment_terms.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payment_terms/create', keyArgs] as const
}

export function useGetApiV1PaymentTermsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payment_terms.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentTermsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentTermsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payment_terms.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentTermsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PaymentTermsIdKey(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payment_terms/:id', keyArgs] as const
}

export function useGetApiV1PaymentTermsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
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
        ? getGetApiV1PaymentTermsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentTermsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
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
        ? getGetApiV1PaymentTermsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PaymentTermsIdKey() {
  return ['api', '/api/v1/payment_terms/:id', 'PUT'] as const
}

export function usePutApiV1PaymentTermsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PaymentTermsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']> },
      ) => parseResponse(client.api.v1.payment_terms[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PaymentTermsIdKey() {
  return ['api', '/api/v1/payment_terms/:id', 'DELETE'] as const
}

export function useDeleteApiV1PaymentTermsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PaymentTermsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.payment_terms[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentTermsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payment_terms/:id/edit', keyArgs] as const
}

export function useGetApiV1PaymentTermsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
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
        ? getGetApiV1PaymentTermsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentTermsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
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
        ? getGetApiV1PaymentTermsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payment_terms[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PaymentTermsBulkKey() {
  return ['api', '/api/v1/payment_terms/bulk', 'POST'] as const
}

export function usePostApiV1PaymentTermsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.payment_terms.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentTermsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.payment_terms.bulk.$post> },
      ) => parseResponse(client.api.v1.payment_terms.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PingKey(args: InferRequestType<typeof client.api.v1.ping.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/ping', keyArgs] as const
}

export function useGetApiV1Ping<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.ping.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Ping<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.ping.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.ping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1HealthCheckKey(
  args: InferRequestType<typeof client.api.v1.health_check.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/health_check', keyArgs] as const
}

export function useGetApiV1HealthCheck<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.health_check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1HealthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health_check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1HealthCheck<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.health_check.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1HealthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health_check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LastErrorKey(
  args: InferRequestType<typeof client.api.v1.last_error.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/last_error', keyArgs] as const
}

export function useGetApiV1LastError<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.last_error.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LastErrorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.last_error.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LastError<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.last_error.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LastErrorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.last_error.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PostmarkWebhookKey() {
  return ['api', '/api/v1/postmark_webhook', 'POST'] as const
}

export function usePostApiV1PostmarkWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.postmark_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.postmark_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PostmarkWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.postmark_webhook.$post> },
      ) => parseResponse(client.api.v1.postmark_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PreviewKey() {
  return ['api', '/api/v1/preview', 'POST'] as const
}

export function usePostApiV1Preview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.preview.$post> }) =>
        parseResponse(client.api.v1.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PreviewPurchaseOrderKey() {
  return ['api', '/api/v1/preview/purchase_order', 'POST'] as const
}

export function usePostApiV1PreviewPurchaseOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preview.purchase_order.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.preview.purchase_order.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PreviewPurchaseOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.preview.purchase_order.$post> },
      ) => parseResponse(client.api.v1.preview.purchase_order.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringExpensesKey(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_expenses', keyArgs] as const
}

export function useGetApiV1RecurringExpenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringExpensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringExpenses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringExpensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringExpensesKey() {
  return ['api', '/api/v1/recurring_expenses', 'POST'] as const
}

export function usePostApiV1RecurringExpenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_expenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringExpensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_expenses.$post> },
      ) => parseResponse(client.api.v1.recurring_expenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringExpensesIdKey(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_expenses/:id', keyArgs] as const
}

export function useGetApiV1RecurringExpensesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
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
        ? getGetApiV1RecurringExpensesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringExpensesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
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
        ? getGetApiV1RecurringExpensesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1RecurringExpensesIdKey() {
  return ['api', '/api/v1/recurring_expenses/:id', 'PUT'] as const
}

export function usePutApiV1RecurringExpensesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1RecurringExpensesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']> },
      ) => parseResponse(client.api.v1.recurring_expenses[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1RecurringExpensesIdKey() {
  return ['api', '/api/v1/recurring_expenses/:id', 'DELETE'] as const
}

export function useDeleteApiV1RecurringExpensesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1RecurringExpensesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.recurring_expenses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringExpensesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_expenses/:id/edit', keyArgs] as const
}

export function useGetApiV1RecurringExpensesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringExpensesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_expenses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringExpensesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringExpensesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_expenses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RecurringExpensesCreateKey(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_expenses/create', keyArgs] as const
}

export function useGetApiV1RecurringExpensesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
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
        ? getGetApiV1RecurringExpensesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringExpensesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
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
        ? getGetApiV1RecurringExpensesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_expenses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringExpensesBulkKey() {
  return ['api', '/api/v1/recurring_expenses/bulk', 'POST'] as const
}

export function usePostApiV1RecurringExpensesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.recurring_expenses.bulk.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringExpensesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post> },
      ) => parseResponse(client.api.v1.recurring_expenses.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1RecurringExpensesIdUploadKey() {
  return ['api', '/api/v1/recurring_expenses/:id/upload', 'POST'] as const
}

export function usePostApiV1RecurringExpensesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringExpensesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>
        },
      ) => parseResponse(client.api.v1.recurring_expenses[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringQuotesKey(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_quotes', keyArgs] as const
}

export function useGetApiV1RecurringQuotes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringQuotes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringQuotesKey() {
  return ['api', '/api/v1/recurring_quotes', 'POST'] as const
}

export function usePostApiV1RecurringQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_quotes.$post> },
      ) => parseResponse(client.api.v1.recurring_quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringQuotesCreateKey(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_quotes/create', keyArgs] as const
}

export function useGetApiV1RecurringQuotesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
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
        ? getGetApiV1RecurringQuotesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringQuotesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
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
        ? getGetApiV1RecurringQuotesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RecurringQuotesIdKey(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_quotes/:id', keyArgs] as const
}

export function useGetApiV1RecurringQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1RecurringQuotesIdKey() {
  return ['api', '/api/v1/recurring_quotes/:id', 'PUT'] as const
}

export function usePutApiV1RecurringQuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1RecurringQuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']> },
      ) => parseResponse(client.api.v1.recurring_quotes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1RecurringQuotesIdKey() {
  return ['api', '/api/v1/recurring_quotes/:id', 'DELETE'] as const
}

export function useDeleteApiV1RecurringQuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1RecurringQuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.recurring_quotes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringQuotesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_quotes/:id/edit', keyArgs] as const
}

export function useGetApiV1RecurringQuotesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_quotes[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringQuotesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_quotes[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringQuotesBulkKey() {
  return ['api', '/api/v1/recurring_quotes/bulk', 'POST'] as const
}

export function usePostApiV1RecurringQuotesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringQuotesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post> },
      ) => parseResponse(client.api.v1.recurring_quotes.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringQuotesIdActionKey(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_quotes/:id/:action', keyArgs] as const
}

export function useGetApiV1RecurringQuotesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_quotes[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringQuotesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
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
        ? getGetApiV1RecurringQuotesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_quotes[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ReportsContactsKey() {
  return ['api', '/api/v1/reports/contacts', 'POST'] as const
}

export function usePostApiV1ReportsContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.contacts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.contacts.$post> },
      ) => parseResponse(client.api.v1.reports.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsClientsKey() {
  return ['api', '/api/v1/reports/clients', 'POST'] as const
}

export function usePostApiV1ReportsClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.clients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.clients.$post> },
      ) => parseResponse(client.api.v1.reports.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsCreditsKey() {
  return ['api', '/api/v1/reports/credits', 'POST'] as const
}

export function usePostApiV1ReportsCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.credits.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.credits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.credits.$post> },
      ) => parseResponse(client.api.v1.reports.credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsDocumentsKey() {
  return ['api', '/api/v1/reports/documents', 'POST'] as const
}

export function usePostApiV1ReportsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.documents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.documents.$post> },
      ) => parseResponse(client.api.v1.reports.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsExpensesKey() {
  return ['api', '/api/v1/reports/expenses', 'POST'] as const
}

export function usePostApiV1ReportsExpenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.expenses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.expenses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsExpensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.expenses.$post> },
      ) => parseResponse(client.api.v1.reports.expenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsInvoiceItemsKey() {
  return ['api', '/api/v1/reports/invoice_items', 'POST'] as const
}

export function usePostApiV1ReportsInvoiceItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.invoice_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.invoice_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsInvoiceItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.invoice_items.$post> },
      ) => parseResponse(client.api.v1.reports.invoice_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsInvoicesKey() {
  return ['api', '/api/v1/reports/invoices', 'POST'] as const
}

export function usePostApiV1ReportsInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.invoices.$post> },
      ) => parseResponse(client.api.v1.reports.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsPaymentsKey() {
  return ['api', '/api/v1/reports/payments', 'POST'] as const
}

export function usePostApiV1ReportsPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.payments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.payments.$post> },
      ) => parseResponse(client.api.v1.reports.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsProductsKey() {
  return ['api', '/api/v1/reports/products', 'POST'] as const
}

export function usePostApiV1ReportsProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.products.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.products.$post> },
      ) => parseResponse(client.api.v1.reports.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsProductSalesKey() {
  return ['api', '/api/v1/reports/product_sales', 'POST'] as const
}

export function usePostApiV1ReportsProductSales<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.product_sales.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.product_sales.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsProductSalesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.product_sales.$post> },
      ) => parseResponse(client.api.v1.reports.product_sales.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsProfitlossKey() {
  return ['api', '/api/v1/reports/profitloss', 'POST'] as const
}

export function usePostApiV1ReportsProfitloss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.profitloss.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.profitloss.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsProfitlossKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.profitloss.$post> },
      ) => parseResponse(client.api.v1.reports.profitloss.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsQuoteItemsKey() {
  return ['api', '/api/v1/reports/quote_items', 'POST'] as const
}

export function usePostApiV1ReportsQuoteItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.quote_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.quote_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsQuoteItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.quote_items.$post> },
      ) => parseResponse(client.api.v1.reports.quote_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsQuotesKey() {
  return ['api', '/api/v1/reports/quotes', 'POST'] as const
}

export function usePostApiV1ReportsQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.quotes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.quotes.$post> },
      ) => parseResponse(client.api.v1.reports.quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsRecurringInvoicesKey() {
  return ['api', '/api/v1/reports/recurring_invoices', 'POST'] as const
}

export function usePostApiV1ReportsRecurringInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.recurring_invoices.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsRecurringInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post> },
      ) => parseResponse(client.api.v1.reports.recurring_invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsTasksKey() {
  return ['api', '/api/v1/reports/tasks', 'POST'] as const
}

export function usePostApiV1ReportsTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.tasks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.tasks.$post> },
      ) => parseResponse(client.api.v1.reports.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsActivitiesKey() {
  return ['api', '/api/v1/reports/activities', 'POST'] as const
}

export function usePostApiV1ReportsActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.activities.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.activities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.activities.$post> },
      ) => parseResponse(client.api.v1.reports.activities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsClientContactsKey() {
  return ['api', '/api/v1/reports/client_contacts', 'POST'] as const
}

export function usePostApiV1ReportsClientContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_contacts.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.client_contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsClientContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.client_contacts.$post> },
      ) => parseResponse(client.api.v1.reports.client_contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsArDetailReportKey() {
  return ['api', '/api/v1/reports/ar_detail_report', 'POST'] as const
}

export function usePostApiV1ReportsArDetailReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.ar_detail_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsArDetailReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post> },
      ) => parseResponse(client.api.v1.reports.ar_detail_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsArSummaryReportKey() {
  return ['api', '/api/v1/reports/ar_summary_report', 'POST'] as const
}

export function usePostApiV1ReportsArSummaryReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.ar_summary_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsArSummaryReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post> },
      ) => parseResponse(client.api.v1.reports.ar_summary_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsClientBalanceReportKey() {
  return ['api', '/api/v1/reports/client_balance_report', 'POST'] as const
}

export function usePostApiV1ReportsClientBalanceReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_balance_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.client_balance_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsClientBalanceReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.reports.client_balance_report.$post> },
      ) => parseResponse(client.api.v1.reports.client_balance_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsClientSalesReportKey() {
  return ['api', '/api/v1/reports/client_sales_report', 'POST'] as const
}

export function usePostApiV1ReportsClientSalesReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_sales_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.client_sales_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsClientSalesReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.client_sales_report.$post> },
      ) => parseResponse(client.api.v1.reports.client_sales_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsTaxSummaryReportKey() {
  return ['api', '/api/v1/reports/tax_summary_report', 'POST'] as const
}

export function usePostApiV1ReportsTaxSummaryReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.tax_summary_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsTaxSummaryReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post> },
      ) => parseResponse(client.api.v1.reports.tax_summary_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsTaxPeriodReportKey() {
  return ['api', '/api/v1/reports/tax_period_report', 'POST'] as const
}

export function usePostApiV1ReportsTaxPeriodReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.tax_period_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.tax_period_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsTaxPeriodReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.tax_period_report.$post> },
      ) => parseResponse(client.api.v1.reports.tax_period_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsUserSalesReportKey() {
  return ['api', '/api/v1/reports/user_sales_report', 'POST'] as const
}

export function usePostApiV1ReportsUserSalesReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.user_sales_report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.user_sales_report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsUserSalesReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.user_sales_report.$post> },
      ) => parseResponse(client.api.v1.reports.user_sales_report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsProjectsKey() {
  return ['api', '/api/v1/reports/projects', 'POST'] as const
}

export function usePostApiV1ReportsProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.projects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.reports.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.reports.projects.$post> },
      ) => parseResponse(client.api.v1.reports.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReportsPreviewHashKey() {
  return ['api', '/api/v1/reports/preview/:hash', 'POST'] as const
}

export function usePostApiV1ReportsPreviewHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.reports.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReportsPreviewHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']> },
      ) => parseResponse(client.api.v1.reports.preview[':hash'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ExportsPreviewHashKey() {
  return ['api', '/api/v1/exports/preview/:hash', 'POST'] as const
}

export function usePostApiV1ExportsPreviewHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.exports.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ExportsPreviewHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']> },
      ) => parseResponse(client.api.v1.exports.preview[':hash'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SelfUpdateKey() {
  return ['api', '/api/v1/self-update', 'POST'] as const
}

export function usePostApiV1SelfUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['self-update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['self-update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SelfUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['self-update']['$post']> },
      ) => parseResponse(client.api.v1['self-update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SelfUpdateCheckVersionKey() {
  return ['api', '/api/v1/self-update/check_version', 'POST'] as const
}

export function usePostApiV1SelfUpdateCheckVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['self-update']['check_version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SelfUpdateCheckVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>
        },
      ) => parseResponse(client.api.v1['self-update'].check_version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1StaticsKey(args: InferRequestType<typeof client.api.v1.statics.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/statics', keyArgs] as const
}

export function useGetApiV1Statics<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.statics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1StaticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Statics<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.statics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1StaticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsKey(
  args: InferRequestType<typeof client.api.v1.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions', keyArgs] as const
}

export function useGetApiV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsKey() {
  return ['api', '/api/v1/subscriptions', 'POST'] as const
}

export function usePostApiV1Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.subscriptions.$post> },
      ) => parseResponse(client.api.v1.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsCreateKey(
  args: InferRequestType<typeof client.api.v1.subscriptions.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions/create', keyArgs] as const
}

export function useGetApiV1SubscriptionsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.subscriptions.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SubscriptionsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.subscriptions.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SubscriptionsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsIdKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions/:id', keyArgs] as const
}

export function useGetApiV1SubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
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
        ? getGetApiV1SubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
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
        ? getGetApiV1SubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsIdKey() {
  return ['api', '/api/v1/subscriptions/:id', 'PUT'] as const
}

export function usePutApiV1SubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1SubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']> },
      ) => parseResponse(client.api.v1.subscriptions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1SubscriptionsIdKey() {
  return ['api', '/api/v1/subscriptions/:id', 'DELETE'] as const
}

export function useDeleteApiV1SubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.subscriptions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions/:id/edit', keyArgs] as const
}

export function useGetApiV1SubscriptionsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
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
        ? getGetApiV1SubscriptionsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
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
        ? getGetApiV1SubscriptionsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subscriptions[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsBulkKey() {
  return ['api', '/api/v1/subscriptions/bulk', 'POST'] as const
}

export function usePostApiV1SubscriptionsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.subscriptions.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.subscriptions.bulk.$post> },
      ) => parseResponse(client.api.v1.subscriptions.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SchedulerKey(
  args: InferRequestType<typeof client.api.v1.scheduler.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/scheduler', keyArgs] as const
}

export function useGetApiV1Scheduler<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.scheduler.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SchedulerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduler.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Scheduler<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.scheduler.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SchedulerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.scheduler.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SupportMessagesSendKey() {
  return ['api', '/api/v1/support/messages/send', 'POST'] as const
}

export function usePostApiV1SupportMessagesSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.support.messages.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.support.messages.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SupportMessagesSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.support.messages.send.$post> },
      ) => parseResponse(client.api.v1.support.messages.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SystemLogsKey(
  args: InferRequestType<typeof client.api.v1.system_logs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/system_logs', keyArgs] as const
}

export function useGetApiV1SystemLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.system_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SystemLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.system_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SystemLogs<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.system_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SystemLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.system_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SystemLogsIdKey(
  args: InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/system_logs/:id', keyArgs] as const
}

export function useGetApiV1SystemLogsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
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
        ? getGetApiV1SystemLogsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.system_logs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SystemLogsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
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
        ? getGetApiV1SystemLogsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.system_logs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TaskSchedulersKey(
  args: InferRequestType<typeof client.api.v1.task_schedulers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_schedulers', keyArgs] as const
}

export function useGetApiV1TaskSchedulers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_schedulers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskSchedulersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskSchedulers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_schedulers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskSchedulersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TaskSchedulersKey() {
  return ['api', '/api/v1/task_schedulers', 'POST'] as const
}

export function usePostApiV1TaskSchedulers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.task_schedulers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TaskSchedulersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.task_schedulers.$post> },
      ) => parseResponse(client.api.v1.task_schedulers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaskSchedulersCreateKey(
  args: InferRequestType<typeof client.api.v1.task_schedulers.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_schedulers/create', keyArgs] as const
}

export function useGetApiV1TaskSchedulersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_schedulers.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
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
        ? getGetApiV1TaskSchedulersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskSchedulersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_schedulers.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
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
        ? getGetApiV1TaskSchedulersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TaskSchedulersIdKey(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_schedulers/:id', keyArgs] as const
}

export function useGetApiV1TaskSchedulersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
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
        ? getGetApiV1TaskSchedulersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskSchedulersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
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
        ? getGetApiV1TaskSchedulersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_schedulers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TaskSchedulersIdKey() {
  return ['api', '/api/v1/task_schedulers/:id', 'PUT'] as const
}

export function usePutApiV1TaskSchedulersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TaskSchedulersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']> },
      ) => parseResponse(client.api.v1.task_schedulers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TaskSchedulersIdKey() {
  return ['api', '/api/v1/task_schedulers/:id', 'DELETE'] as const
}

export function useDeleteApiV1TaskSchedulersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TaskSchedulersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.task_schedulers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TaskSchedulersBulkKey() {
  return ['api', '/api/v1/task_schedulers/bulk', 'POST'] as const
}

export function usePostApiV1TaskSchedulersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TaskSchedulersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post> },
      ) => parseResponse(client.api.v1.task_schedulers.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaskStatusesKey(
  args: InferRequestType<typeof client.api.v1.task_statuses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_statuses', keyArgs] as const
}

export function useGetApiV1TaskStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskStatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TaskStatusesKey() {
  return ['api', '/api/v1/task_statuses', 'POST'] as const
}

export function usePostApiV1TaskStatuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.task_statuses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TaskStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.task_statuses.$post> },
      ) => parseResponse(client.api.v1.task_statuses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaskStatusesCreateKey(
  args: InferRequestType<typeof client.api.v1.task_statuses.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_statuses/create', keyArgs] as const
}

export function useGetApiV1TaskStatusesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_statuses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskStatusesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskStatusesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.task_statuses.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaskStatusesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TaskStatusesIdKey(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_statuses/:id', keyArgs] as const
}

export function useGetApiV1TaskStatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
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
        ? getGetApiV1TaskStatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskStatusesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
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
        ? getGetApiV1TaskStatusesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TaskStatusesIdKey() {
  return ['api', '/api/v1/task_statuses/:id', 'PUT'] as const
}

export function usePutApiV1TaskStatusesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TaskStatusesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']> },
      ) => parseResponse(client.api.v1.task_statuses[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TaskStatusesIdKey() {
  return ['api', '/api/v1/task_statuses/:id', 'DELETE'] as const
}

export function useDeleteApiV1TaskStatusesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TaskStatusesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.task_statuses[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaskStatusesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/task_statuses/:id/edit', keyArgs] as const
}

export function useGetApiV1TaskStatusesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
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
        ? getGetApiV1TaskStatusesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaskStatusesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
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
        ? getGetApiV1TaskStatusesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.task_statuses[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TaskStatusesBulkKey() {
  return ['api', '/api/v1/task_statuses/bulk', 'POST'] as const
}

export function usePostApiV1TaskStatusesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.task_statuses.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TaskStatusesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.task_statuses.bulk.$post> },
      ) => parseResponse(client.api.v1.task_statuses.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaxRatesKey(
  args: InferRequestType<typeof client.api.v1.tax_rates.$get>,
) {
  return ['api', '/api/v1/tax_rates', args] as const
}

export function useGetApiV1TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tax_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tax_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TaxRatesCreateKey(
  args: InferRequestType<typeof client.api.v1.tax_rates.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tax_rates/create', keyArgs] as const
}

export function useGetApiV1TaxRatesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tax_rates.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaxRatesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaxRatesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tax_rates.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaxRatesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TaxRatesIdKey(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tax_rates/:id', keyArgs] as const
}

export function useGetApiV1TaxRatesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaxRatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaxRatesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TaxRatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TaxRatesIdKey() {
  return ['api', '/api/v1/tax_rates/:id', 'PUT'] as const
}

export function usePutApiV1TaxRatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TaxRatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']> },
      ) => parseResponse(client.api.v1.tax_rates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TaxRatesIdKey() {
  return ['api', '/api/v1/tax_rates/:id', 'DELETE'] as const
}

export function useDeleteApiV1TaxRatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TaxRatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.tax_rates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TaxRatesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tax_rates/:id/edit', keyArgs] as const
}

export function useGetApiV1TaxRatesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
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
        ? getGetApiV1TaxRatesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TaxRatesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
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
        ? getGetApiV1TaxRatesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tax_rates[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TaxRatesBulkKey() {
  return ['api', '/api/v1/tax_rates/bulk', 'POST'] as const
}

export function usePostApiV1TaxRatesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tax_rates.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TaxRatesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.tax_rates.bulk.$post> },
      ) => parseResponse(client.api.v1.tax_rates.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TemplatesKey() {
  return ['api', '/api/v1/templates', 'POST'] as const
}

export function usePostApiV1Templates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.templates.$post> }) =>
        parseResponse(client.api.v1.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TemplatesPreviewHashKey() {
  return ['api', '/api/v1/templates/preview/:hash', 'POST'] as const
}

export function usePostApiV1TemplatesPreviewHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.templates.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TemplatesPreviewHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']> },
      ) => parseResponse(client.api.v1.templates.preview[':hash'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SearchKey() {
  return ['api', '/api/v1/search', 'POST'] as const
}

export function usePostApiV1Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.search.$post> }) =>
        parseResponse(client.api.v1.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TokensKey(args: InferRequestType<typeof client.api.v1.tokens.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tokens', keyArgs] as const
}

export function useGetApiV1Tokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Tokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TokensKey() {
  return ['api', '/api/v1/tokens', 'POST'] as const
}

export function usePostApiV1Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tokens.$post> }) =>
        parseResponse(client.api.v1.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TokensIdKey(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tokens/:id', keyArgs] as const
}

export function useGetApiV1TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TokensIdKey() {
  return ['api', '/api/v1/tokens/:id', 'PUT'] as const
}

export function usePutApiV1TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']> },
      ) => parseResponse(client.api.v1.tokens[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TokensIdKey() {
  return ['api', '/api/v1/tokens/:id', 'DELETE'] as const
}

export function useDeleteApiV1TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TokensIdEditKey(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tokens/:id/edit', keyArgs] as const
}

export function useGetApiV1TokensIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
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
        ? getGetApiV1TokensIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TokensIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
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
        ? getGetApiV1TokensIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TokensCreateKey(
  args: InferRequestType<typeof client.api.v1.tokens.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tokens/create', keyArgs] as const
}

export function useGetApiV1TokensCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tokens.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TokensCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TokensCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tokens.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TokensCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tokens.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TokensBulkKey() {
  return ['api', '/api/v1/tokens/bulk', 'POST'] as const
}

export function usePostApiV1TokensBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tokens.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tokens.bulk.$post> }) =>
        parseResponse(client.api.v1.tokens.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1UsersKey(args: InferRequestType<typeof client.api.v1.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users', keyArgs] as const
}

export function useGetApiV1Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Users<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1UsersKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function usePostApiV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.users.$post> }) =>
        parseResponse(client.api.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1UsersCreateKey(
  args: InferRequestType<typeof client.api.v1.users.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users/create', keyArgs] as const
}

export function useGetApiV1UsersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1UsersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1UsersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.users.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1UsersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1UsersIdKey(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users/:id', keyArgs] as const
}

export function useGetApiV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1UsersIdKey() {
  return ['api', '/api/v1/users/:id', 'PUT'] as const
}

export function usePutApiV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.users)[':id']['$put']> },
      ) => parseResponse(client.api.v1.users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1UsersIdKey() {
  return ['api', '/api/v1/users/:id', 'DELETE'] as const
}

export function useDeleteApiV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1UsersIdEditKey(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users/:id/edit', keyArgs] as const
}

export function useGetApiV1UsersIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
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
        ? getGetApiV1UsersIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1UsersIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
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
        ? getGetApiV1UsersIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.users[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1UsersBulkKey() {
  return ['api', '/api/v1/users/bulk', 'POST'] as const
}

export function usePostApiV1UsersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.users.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.users.bulk.$post> }) =>
        parseResponse(client.api.v1.users.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1UsersUserDetachFromCompanyKey() {
  return ['api', '/api/v1/users/:user/detach_from_company', 'DELETE'] as const
}

export function useDeleteApiV1UsersUserDetachFromCompany<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1UsersUserDetachFromCompanyKey()
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
            (typeof client.api.v1.users)[':user']['detach_from_company']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v1.users[':user'].detach_from_company.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersUserInviteKey() {
  return ['api', '/api/v1/users/:user/invite', 'POST'] as const
}

export function usePostApiV1UsersUserInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':user']['invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersUserInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']> },
      ) => parseResponse(client.api.v1.users[':user'].invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersUserReconfirmKey() {
  return ['api', '/api/v1/users/:user/reconfirm', 'POST'] as const
}

export function usePostApiV1UsersUserReconfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersUserReconfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']> },
      ) => parseResponse(client.api.v1.users[':user'].reconfirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1WebcronKey(args: InferRequestType<typeof client.api.v1.webcron.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/webcron', keyArgs] as const
}

export function useGetApiV1Webcron<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webcron.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WebcronKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webcron.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Webcron<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webcron.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WebcronKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webcron.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WebhooksKey(args: InferRequestType<typeof client.api.v1.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/webhooks', keyArgs] as const
}

export function useGetApiV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1WebhooksKey() {
  return ['api', '/api/v1/webhooks', 'POST'] as const
}

export function usePostApiV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.webhooks.$post> }) =>
        parseResponse(client.api.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1WebhooksIdKey(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/webhooks/:id', keyArgs] as const
}

export function useGetApiV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1WebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1WebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1WebhooksIdKey() {
  return ['api', '/api/v1/webhooks/:id', 'PUT'] as const
}

export function usePutApiV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']> },
      ) => parseResponse(client.api.v1.webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1WebhooksIdKey() {
  return ['api', '/api/v1/webhooks/:id', 'DELETE'] as const
}

export function useDeleteApiV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1WebhooksIdEditKey(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/webhooks/:id/edit', keyArgs] as const
}

export function useGetApiV1WebhooksIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
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
        ? getGetApiV1WebhooksIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WebhooksIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
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
        ? getGetApiV1WebhooksIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WebhooksCreateKey(
  args: InferRequestType<typeof client.api.v1.webhooks.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/webhooks/create', keyArgs] as const
}

export function useGetApiV1WebhooksCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webhooks.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1WebhooksCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WebhooksCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.webhooks.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1WebhooksCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.webhooks.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1WebhooksBulkKey() {
  return ['api', '/api/v1/webhooks/bulk', 'POST'] as const
}

export function usePostApiV1WebhooksBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.webhooks.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1WebhooksBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.webhooks.bulk.$post> },
      ) => parseResponse(client.api.v1.webhooks.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CreditsKey(args: InferRequestType<typeof client.api.v1.credits.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/credits', keyArgs] as const
}

export function useGetApiV1Credits<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CreditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Credits<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CreditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CreditsKey() {
  return ['api', '/api/v1/credits', 'POST'] as const
}

export function usePostApiV1Credits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.credits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.credits.$post> }) =>
        parseResponse(client.api.v1.credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CreditsIdKey(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/credits/:id', keyArgs] as const
}

export function useGetApiV1CreditsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CreditsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CreditsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CreditsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CreditsIdKey() {
  return ['api', '/api/v1/credits/:id', 'PUT'] as const
}

export function usePutApiV1CreditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.credits)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CreditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.credits)[':id']['$put']> },
      ) => parseResponse(client.api.v1.credits[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1CreditsIdKey() {
  return ['api', '/api/v1/credits/:id', 'DELETE'] as const
}

export function useDeleteApiV1CreditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CreditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.credits[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CreditsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/credits/:id/edit', keyArgs] as const
}

export function useGetApiV1CreditsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
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
        ? getGetApiV1CreditsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CreditsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
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
        ? getGetApiV1CreditsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CreditsCreateKey(
  args: InferRequestType<typeof client.api.v1.credits.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/credits/create', keyArgs] as const
}

export function useGetApiV1CreditsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.credits.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CreditsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CreditsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.credits.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CreditsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.credits.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CreditsBulkKey() {
  return ['api', '/api/v1/credits/bulk', 'POST'] as const
}

export function usePostApiV1CreditsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.credits.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CreditsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.credits.bulk.$post> }) =>
        parseResponse(client.api.v1.credits.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CreditInvitationKeyDownloadKey(
  args: InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/credit/:invitation_key/download', keyArgs] as const
}

export function useGetApiV1CreditInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
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
        ? getGetApiV1CreditInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.credit[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CreditInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
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
        ? getGetApiV1CreditInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.credit[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CreditsIdUploadKey() {
  return ['api', '/api/v1/credits/:id/upload', 'POST'] as const
}

export function usePostApiV1CreditsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CreditsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.credits[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TagsKey(args: InferRequestType<typeof client.api.v1.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tags', keyArgs] as const
}

export function useGetApiV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TagsKey() {
  return ['api', '/api/v1/tags', 'POST'] as const
}

export function usePostApiV1Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tags.$post> }) =>
        parseResponse(client.api.v1.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TagsCreateKey(
  args: InferRequestType<typeof client.api.v1.tags.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tags/create', keyArgs] as const
}

export function useGetApiV1TagsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TagsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TagsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TagsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TagsIdKey(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tags/:id', keyArgs] as const
}

export function useGetApiV1TagsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TagsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TagsIdKey() {
  return ['api', '/api/v1/tags/:id', 'PUT'] as const
}

export function usePutApiV1TagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tags)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tags)[':id']['$put']> },
      ) => parseResponse(client.api.v1.tags[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TagsIdKey() {
  return ['api', '/api/v1/tags/:id', 'DELETE'] as const
}

export function useDeleteApiV1TagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TagsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tags/:id/edit', keyArgs] as const
}

export function useGetApiV1TagsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
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
        ? getGetApiV1TagsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TagsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
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
        ? getGetApiV1TagsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TagsBulkKey() {
  return ['api', '/api/v1/tags/bulk', 'POST'] as const
}

export function usePostApiV1TagsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tags.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TagsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tags.bulk.$post> }) =>
        parseResponse(client.api.v1.tags.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LocationsKey(
  args: InferRequestType<typeof client.api.v1.locations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/locations', keyArgs] as const
}

export function useGetApiV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LocationsKey() {
  return ['api', '/api/v1/locations', 'POST'] as const
}

export function usePostApiV1Locations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.locations.$post> }) =>
        parseResponse(client.api.v1.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LocationsIdKey(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/locations/:id', keyArgs] as const
}

export function useGetApiV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LocationsIdKey() {
  return ['api', '/api/v1/locations/:id', 'PUT'] as const
}

export function usePutApiV1LocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.locations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.locations)[':id']['$put']> },
      ) => parseResponse(client.api.v1.locations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LocationsIdKey() {
  return ['api', '/api/v1/locations/:id', 'DELETE'] as const
}

export function useDeleteApiV1LocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.locations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LocationsCreateKey(
  args: InferRequestType<typeof client.api.v1.locations.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/locations/create', keyArgs] as const
}

export function useGetApiV1LocationsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.locations.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LocationsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.locations.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.locations.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LocationsBulkKey() {
  return ['api', '/api/v1/locations/bulk', 'POST'] as const
}

export function usePostApiV1LocationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.locations.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LocationsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.locations.bulk.$post> },
      ) => parseResponse(client.api.v1.locations.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoicesKey(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoices', keyArgs] as const
}

export function useGetApiV1RecurringInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1RecurringInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringInvoicesKey() {
  return ['api', '/api/v1/recurring_invoices', 'POST'] as const
}

export function usePostApiV1RecurringInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_invoices.$post> },
      ) => parseResponse(client.api.v1.recurring_invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoicesIdKey(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoices/:id', keyArgs] as const
}

export function useGetApiV1RecurringInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1RecurringInvoicesIdKey() {
  return ['api', '/api/v1/recurring_invoices/:id', 'PUT'] as const
}

export function usePutApiV1RecurringInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1RecurringInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']> },
      ) => parseResponse(client.api.v1.recurring_invoices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1RecurringInvoicesIdKey() {
  return ['api', '/api/v1/recurring_invoices/:id', 'DELETE'] as const
}

export function useDeleteApiV1RecurringInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1RecurringInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.recurring_invoices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoicesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoices/:id/edit', keyArgs] as const
}

export function useGetApiV1RecurringInvoicesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_invoices[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoicesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_invoices[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoicesCreateKey(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoices/create', keyArgs] as const
}

export function useGetApiV1RecurringInvoicesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
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
        ? getGetApiV1RecurringInvoicesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoicesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
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
        ? getGetApiV1RecurringInvoicesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.recurring_invoices.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringInvoicesBulkKey() {
  return ['api', '/api/v1/recurring_invoices/bulk', 'POST'] as const
}

export function usePostApiV1RecurringInvoicesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.recurring_invoices.bulk.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringInvoicesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post> },
      ) => parseResponse(client.api.v1.recurring_invoices.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoicesIdActionKey(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoices/:id/:action', keyArgs] as const
}

export function useGetApiV1RecurringInvoicesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_invoices[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoicesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
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
        ? getGetApiV1RecurringInvoicesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.recurring_invoices[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1RecurringInvoiceInvitationKeyDownloadKey(
  args: InferRequestType<
    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/recurring_invoice/:invitation_key/download', keyArgs] as const
}

export function useGetApiV1RecurringInvoiceInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
        ? getGetApiV1RecurringInvoiceInvitationKeyDownloadKey(args)
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
                (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
          client.api.v1.recurring_invoice[':invitation_key'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1RecurringInvoiceInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
        ? getGetApiV1RecurringInvoiceInvitationKeyDownloadKey(args)
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
                (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
          client.api.v1.recurring_invoice[':invitation_key'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1RecurringInvoicesIdUploadKey() {
  return ['api', '/api/v1/recurring_invoices/:id/upload', 'POST'] as const
}

export function usePostApiV1RecurringInvoicesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1RecurringInvoicesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>
        },
      ) => parseResponse(client.api.v1.recurring_invoices[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TasksKey(args: InferRequestType<typeof client.api.v1.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tasks', keyArgs] as const
}

export function useGetApiV1Tasks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Tasks<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TasksKey() {
  return ['api', '/api/v1/tasks', 'POST'] as const
}

export function usePostApiV1Tasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tasks.$post> }) =>
        parseResponse(client.api.v1.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TasksIdKey(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tasks/:id', keyArgs] as const
}

export function useGetApiV1TasksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TasksId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TasksIdKey() {
  return ['api', '/api/v1/tasks/:id', 'PUT'] as const
}

export function usePutApiV1TasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']> },
      ) => parseResponse(client.api.v1.tasks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TasksIdKey() {
  return ['api', '/api/v1/tasks/:id', 'DELETE'] as const
}

export function useDeleteApiV1TasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.tasks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TasksIdEditKey(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tasks/:id/edit', keyArgs] as const
}

export function useGetApiV1TasksIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
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
        ? getGetApiV1TasksIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TasksIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
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
        ? getGetApiV1TasksIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TasksCreateKey(
  args: InferRequestType<typeof client.api.v1.tasks.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/tasks/create', keyArgs] as const
}

export function useGetApiV1TasksCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tasks.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TasksCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TasksCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tasks.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TasksCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tasks.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TasksBulkKey() {
  return ['api', '/api/v1/tasks/bulk', 'POST'] as const
}

export function usePostApiV1TasksBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tasks.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TasksBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tasks.bulk.$post> }) =>
        parseResponse(client.api.v1.tasks.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TasksIdUploadKey() {
  return ['api', '/api/v1/tasks/:id/upload', 'POST'] as const
}

export function usePostApiV1TasksIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TasksIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.tasks[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TasksSortKey() {
  return ['api', '/api/v1/tasks/sort', 'POST'] as const
}

export function usePostApiV1TasksSort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.sort.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.tasks.sort.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TasksSortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.tasks.sort.$post> }) =>
        parseResponse(client.api.v1.tasks.sort.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1QuotesKey(args: InferRequestType<typeof client.api.v1.quotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quotes', keyArgs] as const
}

export function useGetApiV1Quotes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1QuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Quotes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1QuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1QuotesKey() {
  return ['api', '/api/v1/quotes', 'POST'] as const
}

export function usePostApiV1Quotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1QuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.quotes.$post> }) =>
        parseResponse(client.api.v1.quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1QuotesIdKey(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quotes/:id', keyArgs] as const
}

export function useGetApiV1QuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1QuotesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1QuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1QuotesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1QuotesIdKey() {
  return ['api', '/api/v1/quotes/:id', 'PUT'] as const
}

export function usePutApiV1QuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1QuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']> },
      ) => parseResponse(client.api.v1.quotes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1QuotesIdKey() {
  return ['api', '/api/v1/quotes/:id', 'DELETE'] as const
}

export function useDeleteApiV1QuotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1QuotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.quotes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1QuotesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quotes/:id/edit', keyArgs] as const
}

export function useGetApiV1QuotesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
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
        ? getGetApiV1QuotesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1QuotesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
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
        ? getGetApiV1QuotesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1QuotesCreateKey(
  args: InferRequestType<typeof client.api.v1.quotes.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quotes/create', keyArgs] as const
}

export function useGetApiV1QuotesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.quotes.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1QuotesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1QuotesCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.quotes.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1QuotesCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1QuotesBulkKey() {
  return ['api', '/api/v1/quotes/bulk', 'POST'] as const
}

export function usePostApiV1QuotesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.quotes.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1QuotesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.quotes.bulk.$post> }) =>
        parseResponse(client.api.v1.quotes.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1QuotesIdActionKey(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quotes/:id/:action', keyArgs] as const
}

export function useGetApiV1QuotesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
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
        ? getGetApiV1QuotesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1QuotesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
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
        ? getGetApiV1QuotesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.quotes[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1QuoteInvitationKeyDownloadKey(
  args: InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/quote/:invitation_key/download', keyArgs] as const
}

export function useGetApiV1QuoteInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
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
        ? getGetApiV1QuoteInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.quote[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1QuoteInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
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
        ? getGetApiV1QuoteInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.quote[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1QuotesIdUploadKey() {
  return ['api', '/api/v1/quotes/:id/upload', 'POST'] as const
}

export function usePostApiV1QuotesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1QuotesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.quotes[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InvoicesKey(args: InferRequestType<typeof client.api.v1.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoices', keyArgs] as const
}

export function useGetApiV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1InvoicesKey() {
  return ['api', '/api/v1/invoices', 'POST'] as const
}

export function usePostApiV1Invoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1InvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.invoices.$post> }) =>
        parseResponse(client.api.v1.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InvoicesIdKey(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoices/:id', keyArgs] as const
}

export function useGetApiV1InvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InvoicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1InvoicesIdKey() {
  return ['api', '/api/v1/invoices/:id', 'PUT'] as const
}

export function usePutApiV1InvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1InvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']> },
      ) => parseResponse(client.api.v1.invoices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1InvoicesIdKey() {
  return ['api', '/api/v1/invoices/:id', 'DELETE'] as const
}

export function useDeleteApiV1InvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1InvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.invoices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InvoicesIdEditKey(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoices/:id/edit', keyArgs] as const
}

export function useGetApiV1InvoicesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
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
        ? getGetApiV1InvoicesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoicesIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
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
        ? getGetApiV1InvoicesIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InvoicesCreateKey() {
  return ['api', '/api/v1/invoices/create'] as const
}

export function useGetApiV1InvoicesCreate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
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
        ? getGetApiV1InvoicesCreateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices.create.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoicesCreate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
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
        ? getGetApiV1InvoicesCreateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices.create.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1InvoicesBulkKey() {
  return ['api', '/api/v1/invoices/bulk', 'POST'] as const
}

export function usePostApiV1InvoicesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.invoices.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1InvoicesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.invoices.bulk.$post> },
      ) => parseResponse(client.api.v1.invoices.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InvoicesIdActionKey(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoices/:id/:action', keyArgs] as const
}

export function useGetApiV1InvoicesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
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
        ? getGetApiV1InvoicesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoicesIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
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
        ? getGetApiV1InvoicesIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.invoices[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InvoiceInvitationKeyDownloadKey(
  args: InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoice/:invitation_key/download', keyArgs] as const
}

export function useGetApiV1InvoiceInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
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
        ? getGetApiV1InvoiceInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.invoice[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoiceInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
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
        ? getGetApiV1InvoiceInvitationKeyDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.invoice[':invitation_key'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InvoicesIdDeliveryNoteKey(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/invoices/:id/delivery_note', keyArgs] as const
}

export function useGetApiV1InvoicesIdDeliveryNote<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
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
        ? getGetApiV1InvoicesIdDeliveryNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.invoices[':id'].delivery_note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InvoicesIdDeliveryNote<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
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
        ? getGetApiV1InvoicesIdDeliveryNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.invoices[':id'].delivery_note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1InvoicesIdUploadKey() {
  return ['api', '/api/v1/invoices/:id/upload', 'POST'] as const
}

export function usePostApiV1InvoicesIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1InvoicesIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.invoices[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProjectsKey(args: InferRequestType<typeof client.api.v1.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/projects', keyArgs] as const
}

export function useGetApiV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ProjectsKey() {
  return ['api', '/api/v1/projects', 'POST'] as const
}

export function usePostApiV1Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.projects.$post> }) =>
        parseResponse(client.api.v1.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProjectsIdKey(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/projects/:id', keyArgs] as const
}

export function useGetApiV1ProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ProjectsIdKey() {
  return ['api', '/api/v1/projects/:id', 'PUT'] as const
}

export function usePutApiV1ProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.projects)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.projects)[':id']['$put']> },
      ) => parseResponse(client.api.v1.projects[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ProjectsIdKey() {
  return ['api', '/api/v1/projects/:id', 'DELETE'] as const
}

export function useDeleteApiV1ProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProjectsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/projects/:id/edit', keyArgs] as const
}

export function useGetApiV1ProjectsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
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
        ? getGetApiV1ProjectsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProjectsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
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
        ? getGetApiV1ProjectsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ProjectsCreateKey(
  args: InferRequestType<typeof client.api.v1.projects.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/projects/create', keyArgs] as const
}

export function useGetApiV1ProjectsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.projects.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProjectsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProjectsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.projects.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProjectsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.projects.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ProjectsBulkKey() {
  return ['api', '/api/v1/projects/bulk', 'POST'] as const
}

export function usePostApiV1ProjectsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.projects.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProjectsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.projects.bulk.$post> },
      ) => parseResponse(client.api.v1.projects.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ProjectsIdUploadKey() {
  return ['api', '/api/v1/projects/:id/upload', 'POST'] as const
}

export function usePostApiV1ProjectsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProjectsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.projects[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1VendorsKey(args: InferRequestType<typeof client.api.v1.vendors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/vendors', keyArgs] as const
}

export function useGetApiV1Vendors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.vendors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VendorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Vendors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.vendors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VendorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1VendorsKey() {
  return ['api', '/api/v1/vendors', 'POST'] as const
}

export function usePostApiV1Vendors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.vendors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VendorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.vendors.$post> }) =>
        parseResponse(client.api.v1.vendors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1VendorsIdKey(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/vendors/:id', keyArgs] as const
}

export function useGetApiV1VendorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VendorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VendorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VendorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1VendorsIdKey() {
  return ['api', '/api/v1/vendors/:id', 'PUT'] as const
}

export function usePutApiV1VendorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1VendorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']> },
      ) => parseResponse(client.api.v1.vendors[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1VendorsIdKey() {
  return ['api', '/api/v1/vendors/:id', 'DELETE'] as const
}

export function useDeleteApiV1VendorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1VendorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.vendors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1VendorsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/vendors/:id/edit', keyArgs] as const
}

export function useGetApiV1VendorsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
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
        ? getGetApiV1VendorsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VendorsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
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
        ? getGetApiV1VendorsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VendorsCreateKey(
  args: InferRequestType<typeof client.api.v1.vendors.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/vendors/create', keyArgs] as const
}

export function useGetApiV1VendorsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.vendors.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VendorsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VendorsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.vendors.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VendorsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.vendors.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1VendorsBulkKey() {
  return ['api', '/api/v1/vendors/bulk', 'POST'] as const
}

export function usePostApiV1VendorsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.vendors.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VendorsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.vendors.bulk.$post> }) =>
        parseResponse(client.api.v1.vendors.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VendorsIdUploadKey() {
  return ['api', '/api/v1/vendors/:id/upload', 'POST'] as const
}

export function usePostApiV1VendorsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VendorsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.vendors[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentsKey(args: InferRequestType<typeof client.api.v1.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payments', keyArgs] as const
}

export function useGetApiV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PaymentsKey() {
  return ['api', '/api/v1/payments', 'POST'] as const
}

export function usePostApiV1Payments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.payments.$post> }) =>
        parseResponse(client.api.v1.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentsIdKey(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payments/:id', keyArgs] as const
}

export function useGetApiV1PaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PaymentsIdKey() {
  return ['api', '/api/v1/payments/:id', 'PUT'] as const
}

export function usePutApiV1PaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.payments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.payments)[':id']['$put']> },
      ) => parseResponse(client.api.v1.payments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PaymentsIdKey() {
  return ['api', '/api/v1/payments/:id', 'DELETE'] as const
}

export function useDeleteApiV1PaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.payments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payments/:id/edit', keyArgs] as const
}

export function useGetApiV1PaymentsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
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
        ? getGetApiV1PaymentsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
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
        ? getGetApiV1PaymentsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PaymentsCreateKey(
  args: InferRequestType<typeof client.api.v1.payments.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payments/create', keyArgs] as const
}

export function useGetApiV1PaymentsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payments.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.payments.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PaymentsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PaymentsRefundKey() {
  return ['api', '/api/v1/payments/refund', 'POST'] as const
}

export function usePostApiV1PaymentsRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.refund.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.payments.refund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentsRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.payments.refund.$post> },
      ) => parseResponse(client.api.v1.payments.refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PaymentsBulkKey() {
  return ['api', '/api/v1/payments/bulk', 'POST'] as const
}

export function usePostApiV1PaymentsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.payments.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.payments.bulk.$post> },
      ) => parseResponse(client.api.v1.payments.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PaymentsIdActionKey(
  args: InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/payments/:id/:action', keyArgs] as const
}

export function useGetApiV1PaymentsIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
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
        ? getGetApiV1PaymentsIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PaymentsIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
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
        ? getGetApiV1PaymentsIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.payments[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PaymentsIdUploadKey() {
  return ['api', '/api/v1/payments/:id/upload', 'POST'] as const
}

export function usePostApiV1PaymentsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PaymentsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.payments[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientsKey(args: InferRequestType<typeof client.api.v1.clients.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/clients', keyArgs] as const
}

export function useGetApiV1Clients<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Clients<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ClientsKey() {
  return ['api', '/api/v1/clients', 'POST'] as const
}

export function usePostApiV1Clients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.clients.$post> }) =>
        parseResponse(client.api.v1.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientsIdKey(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/clients/:id', keyArgs] as const
}

export function useGetApiV1ClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ClientsIdKey() {
  return ['api', '/api/v1/clients/:id', 'PUT'] as const
}

export function usePutApiV1ClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.clients)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.clients)[':id']['$put']> },
      ) => parseResponse(client.api.v1.clients[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ClientsIdKey() {
  return ['api', '/api/v1/clients/:id', 'DELETE'] as const
}

export function useDeleteApiV1ClientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ClientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.clients[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/clients/:id/edit', keyArgs] as const
}

export function useGetApiV1ClientsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
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
        ? getGetApiV1ClientsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
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
        ? getGetApiV1ClientsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ClientsCreateKey(
  args: InferRequestType<typeof client.api.v1.clients.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/clients/create', keyArgs] as const
}

export function useGetApiV1ClientsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.clients.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.clients.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.clients.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ClientsBulkKey() {
  return ['api', '/api/v1/clients/bulk', 'POST'] as const
}

export function usePostApiV1ClientsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.clients.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.clients.bulk.$post> }) =>
        parseResponse(client.api.v1.clients.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ClientsIdUploadKey() {
  return ['api', '/api/v1/clients/:id/upload', 'POST'] as const
}

export function usePostApiV1ClientsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.clients[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ClientsIdPurgeKey() {
  return ['api', '/api/v1/clients/:id/purge', 'POST'] as const
}

export function usePostApiV1ClientsIdPurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['purge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsIdPurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']> },
      ) => parseResponse(client.api.v1.clients[':id'].purge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ClientsIdMergeableClientHashedIdMergeKey() {
  return ['api', '/api/v1/clients/:id/:mergeable_client_hashed_id/merge', 'POST'] as const
}

export function usePostApiV1ClientsIdMergeableClientHashedIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsIdMergeableClientHashedIdMergeKey()
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
            (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.clients[':id'][':mergeable_client_hashed_id'].merge.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ClientStatementKey() {
  return ['api', '/api/v1/client_statement', 'POST'] as const
}

export function usePostApiV1ClientStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_statement.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.client_statement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientStatementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.client_statement.$post> },
      ) => parseResponse(client.api.v1.client_statement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReactivateEmailBounceIdKey() {
  return ['api', '/api/v1/reactivate_email/:bounce_id', 'POST'] as const
}

export function usePostApiV1ReactivateEmailBounceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReactivateEmailBounceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>
        },
      ) => parseResponse(client.api.v1.reactivate_email[':bounce_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ClientsClientUpdateTaxDataKey() {
  return ['api', '/api/v1/clients/:client/updateTaxData', 'POST'] as const
}

export function usePostApiV1ClientsClientUpdateTaxData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClientsClientUpdateTaxDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>
        },
      ) => parseResponse(client.api.v1.clients[':client'].updateTaxData.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrdersKey(
  args: InferRequestType<typeof client.api.v1.purchase_orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_orders', keyArgs] as const
}

export function useGetApiV1PurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PurchaseOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PurchaseOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PurchaseOrdersKey() {
  return ['api', '/api/v1/purchase_orders', 'POST'] as const
}

export function usePostApiV1PurchaseOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.purchase_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PurchaseOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.purchase_orders.$post> },
      ) => parseResponse(client.api.v1.purchase_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrdersIdKey(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_orders/:id', keyArgs] as const
}

export function useGetApiV1PurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PurchaseOrderIdKey() {
  return ['api', '/api/v1/purchase_order/:id', 'PUT'] as const
}

export function usePutApiV1PurchaseOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PurchaseOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']> },
      ) => parseResponse(client.api.v1.purchase_order[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PurchaseOrderIdKey() {
  return ['api', '/api/v1/purchase_order/:id', 'DELETE'] as const
}

export function useDeleteApiV1PurchaseOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PurchaseOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.purchase_order[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrdersIdEditKey(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_orders/:id/edit', keyArgs] as const
}

export function useGetApiV1PurchaseOrdersIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.purchase_orders[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrdersIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.purchase_orders[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrdersCreateKey(
  args: InferRequestType<typeof client.api.v1.purchase_orders.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_orders/create', keyArgs] as const
}

export function useGetApiV1PurchaseOrdersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.purchase_orders.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
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
        ? getGetApiV1PurchaseOrdersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrdersCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.purchase_orders.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
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
        ? getGetApiV1PurchaseOrdersCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.purchase_orders.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PurchaseOrdersBulkKey() {
  return ['api', '/api/v1/purchase_orders/bulk', 'POST'] as const
}

export function usePostApiV1PurchaseOrdersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PurchaseOrdersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post> },
      ) => parseResponse(client.api.v1.purchase_orders.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrdersIdActionKey(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_orders/:id/:action', keyArgs] as const
}

export function useGetApiV1PurchaseOrdersIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.purchase_orders[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrdersIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
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
        ? getGetApiV1PurchaseOrdersIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.purchase_orders[':id'][':action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PurchaseOrdersIdUploadKey() {
  return ['api', '/api/v1/purchase_orders/:id/upload', 'POST'] as const
}

export function usePostApiV1PurchaseOrdersIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PurchaseOrdersIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>
        },
      ) => parseResponse(client.api.v1.purchase_orders[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PurchaseOrderInvitationKeyDownloadKey(
  args: InferRequestType<
    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/purchase_order/:invitation_key/download', keyArgs] as const
}

export function useGetApiV1PurchaseOrderInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
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
        ? getGetApiV1PurchaseOrderInvitationKeyDownloadKey(args)
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
                (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
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
          client.api.v1.purchase_order[':invitation_key'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PurchaseOrderInvitationKeyDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
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
        ? getGetApiV1PurchaseOrderInvitationKeyDownloadKey(args)
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
                (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
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
          client.api.v1.purchase_order[':invitation_key'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ProductsKey(args: InferRequestType<typeof client.api.v1.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/products', keyArgs] as const
}

export function useGetApiV1Products<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Products<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ProductsKey() {
  return ['api', '/api/v1/products', 'POST'] as const
}

export function usePostApiV1Products<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.products.$post> }) =>
        parseResponse(client.api.v1.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProductsIdKey(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/products/:id', keyArgs] as const
}

export function useGetApiV1ProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ProductsIdKey() {
  return ['api', '/api/v1/products/:id', 'PUT'] as const
}

export function usePutApiV1ProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.products)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.products)[':id']['$put']> },
      ) => parseResponse(client.api.v1.products[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ProductsIdKey() {
  return ['api', '/api/v1/products/:id', 'DELETE'] as const
}

export function useDeleteApiV1ProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.products)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.products)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProductsIdEditKey(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/products/:id/edit', keyArgs] as const
}

export function useGetApiV1ProductsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
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
        ? getGetApiV1ProductsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProductsIdEdit<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
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
        ? getGetApiV1ProductsIdEditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products[':id'].edit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ProductsCreateKey(
  args: InferRequestType<typeof client.api.v1.products.create.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/products/create', keyArgs] as const
}

export function useGetApiV1ProductsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.products.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProductsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ProductsCreate<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.products.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ProductsCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.products.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ProductsBulkKey() {
  return ['api', '/api/v1/products/bulk', 'POST'] as const
}

export function usePostApiV1ProductsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.products.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProductsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.products.bulk.$post> },
      ) => parseResponse(client.api.v1.products.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ProductsIdUploadKey() {
  return ['api', '/api/v1/products/:id/upload', 'POST'] as const
}

export function usePostApiV1ProductsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.products)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ProductsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']> },
      ) => parseResponse(client.api.v1.products[':id'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
